/* Abrir e Fechar Menu */
let ul = document.querySelector('nav .ul');

function openMenu(){
    ul.classList.add('open');
}
function closeMenu(){
    ul.classList.remove('open');
}
/* Fim Abrir e Fechar Menu */
/* Quests */
var skip = document.getElementById('skip');
var score = document.getElementById('score');
var count = 0;
var scoreCount = 0;
var qaSet = document.querySelectorAll('.qa_set');
var qaAnsRow = document.querySelectorAll('.qa_set .qa_ans_row input');

skip.addEventListener('click', function(){
    step()
})

function step() {
    count += 1;
    for(var i = 0; i < qaSet.length; i++){
        qaSet[i].className= 'qa_set';
    }
    qaSet[count].className= 'qa_set active';
    if(count == 50){
        skip.style.display = 'none';
    }
    score.innerHTML = scoreCount;

    var totalScore = document.getElementById('totalScore');
    if (totalScore) {
        totalScore.innerHTML = scoreCount + (count - 1) * 20;
    }
}

qaAnsRow.forEach(function(qaAnsRowSingle) {
    qaAnsRowSingle.addEventListener('click', function(){
        setTimeout(function(){
            step();
        },500)

        var valid = this.getAttribute("valid");
        if(valid == "valid"){
            scoreCount += 20;
            score.innerHTML = scoreCount;
            var totalScore = document.getElementById('totalScore');
            if (totalScore) {
                totalScore.innerHTML = scoreCount + (count - 1) * 20;
            }
        }
        else{
            scoreCount -= 20;
            score.innerHTML = scoreCount;
            var totalScore = document.getElementById('totalScore');
            if (totalScore) {
                totalScore.innerHTML = scoreCount + (count - 1) * 20;
            }
        }
    })
});


/* Fim das Quests */