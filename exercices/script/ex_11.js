const link = document.getElementsByTagName("a")[0];
const div = document.getElementsByTagName("div")[2];
var VC = document.cookie;

link.addEventListener("click", () => {
    
    var date = new Date();
    date.setTime(+ date + (24 * 3600000));
    
    document.cookie = "acceptsCookies=true; expires=" + date.toGMTString() + "; path=/";
});

if (VC === "acceptsCookies=true") {
    div.innerHTML = "<div id='Fake'> <button>Supprimer le cookie</button> </div>";
}

const button = document.getElementsByTagName("button")[0];
const Fake = document.getElementById("Fake");



button.addEventListener("click", () => {
    Fake.remove();
    button.remove();
    document.cookie = "acceptsCookies=; expires= Thu, 01 Jan 1970 00:00:00 GMT";
});
