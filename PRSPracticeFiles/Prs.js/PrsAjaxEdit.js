let user = null;


$(() =>
{

    let id = getUrlParms(document.URL).id;

    $.getJSON(`http://localhost:45153/api/users/${id}`)
        .done((res) =>
        {
            console.debug(res);
            user = res;   
            display();         
        })
        .fail((err) =>
        {
            console.error(err);
        })

    $("#save").on("click", () =>
    {
        saveUpdatedInfo();
    })

    const getUserData = () =>
    {        
        let editUser = 
        {
            id:+$("#xId").val(), 
            username:$("#xUsername").val(),
            password:$("#xPassword").val(),
            firstname:$("#xFirstname").val(),
            lastname:$("#xLastname").val(),
            phone:$("#xPhone").val(),
            email:$("#xEmail").val(),
            isReviewer:$("#xReveiwer").prop("checked"),
            isAdmin:$("#xAdmin").prop("checked")
        };
        return editUser;
    };

    const saveUpdatedInfo = () =>
    {
       let user = getUserData();
       console.debug(user);

        $.ajax(
            {
                method: 'PUT',
                url: `http://localhost:45153/api/users/${user.id}`,
                data: JSON.stringify(user),
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
    
    const display = () =>
{
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstname").val(user.firstname);
    $("#xLastname").val(user.lastname);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xReviewer").val(user.isReviewer ? "Yes" : "No");
    $("#xAdmin").val(user.isAdmin ? "Yes" : "No");
}

})

