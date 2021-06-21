let user = null;

$(() => 
{

    $("#delete").on("click", () =>
    {
        deleteUser();
    })

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
    });


    const getUserData = () =>
    {        
        let delUser = 
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
        return delUser;
    };  
    
    const deleteUser = () =>
    {
       let newUser = getUserData();
       console.debug(newUser);
       
        $.ajax(
            {
                method: 'DELETE',
                url: `http://localhost:45153/api/Users/${user.id}`,
                
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

     


});

const display = () =>
{
    $("#xId").text(user.id);
    $("#xUsername").text(user.username);
    $("#xFirstname").text(user.firstname);
    $("#xLastname").text(user.lastname);
    $("#xPhone").text(user.phone);
    $("#xEmail").text(user.email);
    $("#xReviewer").text(user.isReviewer ? "Yes" : "No");
    $("#xAdmin").text(user.isAdmin ? "Yes" : "No");
}