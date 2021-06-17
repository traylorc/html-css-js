let counter = 0;
const plus = ()=>
{
    counter++;
    display();
};
const minus = ()=>
{
    counter--;
    display();
};
const display = ()=>
{
    let inpCtrl = document.getElementById("counter");
    inpCtrl.value = counter;
    inpCtrl.style.color = (counter % 2 ==0) ? "red" : "black"
    inpCtrl.style.fontStyle = (counter % 3 ==0) ? "italic" : "normal"
    inpCtrl.style.fontWeight = (counter % 7 ==0) ? "bold" : "normal"
}