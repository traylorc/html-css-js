class Friend
{
   constructor(name, phone, email)
   {
       this.name = name;
       this.phone = phone;
       this.email = email;
   }
   toTr()
   {
       return   `<tr>`
       + `<td>${this.name}</td>`
       + `<td>${this.phone}</td>`
       + `<td>${this.email}</td>`
       +`</tr>`;
   }
}

let friends = [];

const add = ()=>
{
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let friend = new Friend(name,phone,email);

    friends.push(friend);
    display();
}

const display = ()=>
{
    var tbodycntrl = document.getElementById("friendsapp");
    for(let friend of friends)
    {
        tbodycntrl.innerHTML += friend.toTr();      

    }
}