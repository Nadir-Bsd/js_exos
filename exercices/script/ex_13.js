localStorage.setItem("pangolin", "https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png");
var div = document.getElementsByTagName("div")[2];

var IMG = localStorage.getItem("pangolin");
var W = 100;
const WF = W;
var H = 100;

div.innerHTML = "<img src='" + IMG + "' width= '" + W + "%' height= '" + H + "%'>";
var img = div.getElementsByTagName("img")[0];

function incrementOut() {
    H++;
    W++;
    div.innerHTML = "<img src='" + IMG + "' width= '" + W + "%' height= '" + H +"%'>";
}

function incrementIn() {
    W -= 1;
    H -= 1;
    div.innerHTML = "<img src='" + IMG + "' width= '" + W + "%' height= '" + H +"%'>";
}

div.addEventListener("mouseenter", () => {
    setTimeout(incrementIn, 1000);
});

div.addEventListener("mouseleave", () => {
    setTimeout(incrementOut, 1000);
});

div.addEventListener("click", () => {
    localStorage.removeItem("pangolin");
});