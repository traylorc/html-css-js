$(() =>
{

    $("#save").on("click", () =>
    {
        saveNewUser();
    })

    const getUserData = () =>
    {        
        let newUser = 
        {
            id:0, 
            username:$("#xUsername").val(),
            password:$("#xPassword").val(),
            firstname:$("#xFirstname").val(),
            lastname:$("#xLastname").val(),
            phone:$("#xPhone").val(),
            email:$("#xEmail").val(),
            isReviewer:$("#xReveiwer").prop("checked"),
            isAdmin:$("#xAdmin").prop("checked")
        };
        return newUser;
    };

    const saveNewUser = () =>
    {
       let newUser = getUserData();
       console.debug(newUser);

        $.ajax(
            {
                method: 'POST',
                url: 'http://localhost:45153/api/Users',
                data: JSON.stringify(newUser),
                contentType: 'application/json'
            })
            .done((res) =>
            {
                console.debug(res);
                document.location.href = "http://localhost:5500/PrsPracticeFiles/Prs.html/PrsAjax.html";
            })
            .fail((err) =>
            {
                console.error(err);
            });
                
    }

})