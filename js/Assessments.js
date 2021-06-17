class Assessment
{
    constructor(Topic, Score)
    {
        this.Topic = Topic;
        this.Score = Score;
    }
    toTr()
    {
        return   `<tr>`
            + `<td>${this.Topic}</td>`
            + `<td>${this.Score}</td>`
            +`</tr>`;
    }
}

let assessments1 = [];

const add =()=>
{
    
    let Topic = document.getElementById("Topic").value;
    let Score = document.getElementById("Score").value;

    let assessments = new Assessment(Topic, Score);

    assessments1.push(assessments);
    display();
}

const display=()=>
{
    var tbodyCtrl = document.getElementById("Assessments")
    tbodyCtrl.innerHTML = "";
    let sum = 0;

    for(let assess of assessments1)
    {
        
        tbodyCtrl.innerHTML += assess.toTr();
    }

}