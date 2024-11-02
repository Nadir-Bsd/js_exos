var Element = document.getElementsByTagName("footer")[0];
var click = Element.getElementsByTagName("div")[0];


click.addEventListener("click", () => {
    var retVal = prompt("Enter your name : ", "your name here");
    while (retVal === "" || retVal === null){
        var retVal = prompt("Enter your name : ", "your name here");
    }

    confirm("Etes vous sûr que " + retVal + " est votre nom ?");
    alert("Bonjour " + retVal + " !");
    click.innerHTML = retVal;       
})