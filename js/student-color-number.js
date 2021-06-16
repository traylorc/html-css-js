let students = 
[
    { student: "sarah", color: "green", Number: 7},
            { student: "john", color: "blue", Number: 6},
            { student: "katelyn", color: "yellow", Number: 5},
            { student: "mattL", color: "white", Number: 3},
            { student: "jodah", color: "red", Number: 8} 

];

const loaded = () =>
{
    display();
}

const add = () =>
{
    let stuvalue = document.getElementById("student").value;
    let colorvalue = document.getElementById("color").value;
    let numbervalue = document.getElementById("number").value;
    let stujson = {student: stuvalue, color: colorvalue, Number: numbervalue}
    students.push(stujson);
    display();
};

const display = ()=>
{
    var tbodycntrl = document.getElementById("tbody");
    tbodycntrl.innerHTML = "";
    for(let student of students)
    {
        let tr = "<tr>";
        tr +=   `<td>${student.student}</td>`;
        tr +=   `<td>${student.color}</td>`;
        tr +=   `<td>${student.Number}</td>`;
        tr += "</tr>";
        tbodycntrl.innerHTML += tr;

    }
}