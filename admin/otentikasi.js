function login() {
    event.preventDefault();

    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "admin@admin.com" && pass == "escadmin") {

        alert("Login Berhasil");
        location.replace("index.html");
    } else {
        alert("Username atau password salah");
    }
}
