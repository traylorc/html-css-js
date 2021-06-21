let users = [];

$(()=>
    {

        $.getJSON("http://localhost:45153/api/users")
            .done( (res) => 
            {
                console.debug(res);
                users = res;
                display();
            } )
            .fail( (err) => 
            {
                console.error(err);
            } );

    }   
    
);


const display = () => 
{
    let tbody = $("tbody");
    
    for(let u of users)
    {
        let tr = $("<tr></tr>")
        
        tr.append($(`<td>${u.id}</td>`));
        tr.append($(`<td>${u.username}</td>`));
        
        tr.append($(`<td>${u.firstname} ${u.lastname}</td>`));        
        tr.append($(`<td>${u.phone}</td>`));
        tr.append($(`<td>${u.email}</td>`));
        tr.append($(`<td>${(u.isReviewer ? "Yes" : "No")}</td>`));
        tr.append($(`<td>${(u.isAdmin ? "Yes" : "No")}</td>`));
        tr.append($(`<td><a href="http://localhost:5500/PrsPracticeFiles/Prs.html/PrsAjaxDetail.html?id=${u.id}">Detail</a> | <a href="http://localhost:5500/PrsPracticeFiles/Prs.html/PrsAjaxEdit.html?id=${u.id}">Edit</a> | <a href="http://localhost:5500/PrsPracticeFiles/Prs.html/PrsAjaxDelete.html?id=${u.id}">Delete</a></td>`))
        tbody.append(tr);
    }
    
    
};


    
    
    
    
    // class User
    // {
    
    //     constructor(Username,Password,Firstname,Lastname,Phone,Email,IsReviewer,IsAdmin)
    //     {
    //         this.Username = Username;
    //         this.Password = Password;
    //         this.Firstname = Firstname;
    //         this.Lastname = Lastname;
    //         this.Phone = Phone;
    //         this.Email = Email;
    //         this.IsReviewer = IsReviewer;
    //         this.IsAdmin = IsAdmin;
    //     }
    
    //     toTr()
    //     {
    //         return `<tr>`
    //         +`<td>${this.Username}</td>`
    //         +`<td>${this.Password}</td>`
    //         +`<td>${this.Firstname}</td>`
    //         +`<td>${this.Lastname}</td>`
    //         +`<td>${this.Phone}</td>`
    //         +`<td>${this.Email}</td>`
    //         +`<td>${this.IsReviewer}</td>`
    //         +`<td>${this.IsAdmin}</td>`
    //         +`</tr>`;
    //     }
    // }
    
    // let tbodyCtrl = document.getElementById("PrsAjax");
    // for(let user of users)
    // {
        //     let u = new User(user.username, user.password, user.firstname, user.lastname, user.phone, user.email, user.isreviewer, user.isadmin)
        //     tbodyCtrl.innerHTML += u.toTr();
        // }