function getFormvalue(event) {
    event.preventDefault();

    const fname = document.getElementsByName("fname")[0].value.trim();
    const lname = document.getElementsByName("lname")[0].value.trim();

    alert(fname + " " + lname);
}