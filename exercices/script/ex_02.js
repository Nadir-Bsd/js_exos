var Element = document.getElementsByTagName("footer")[0];
var div = Element.getElementsByTagName("div")[0];

var count = 1;

div.addEventListener("click", () => {
    div.innerHTML = count;
    count++;
});
