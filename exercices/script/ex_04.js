var Element = document.getElementsByTagName("footer")[0];
const div = Element.getElementsByTagName("div")[0];

document.addEventListener('keypress', divKey);

array = " ";

function divKey(e) {
    array += `${e.key}`;
    div.textContent = array.slice(-42);
};