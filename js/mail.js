

function sendMail(){
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    window.open('mailto:corneeruiter@gmail.com?subject='+ subject + '&body=' + body + ",     naam: " + name + ",      email: " + email);
}