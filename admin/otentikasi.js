function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "admin@admin.com" && pass == "escadmin") {

        alert("Selamat Datang Admin!");
        location.replace("index.html");
    } else {
        alert("Selamat Datang Pelanggan!");
        location.replace("../index.html");
    }
}
