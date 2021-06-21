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
    });


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