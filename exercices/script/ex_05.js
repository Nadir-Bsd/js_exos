const div = document.getElementsByTagName("div")[2];
const button1 = div.getElementsByTagName("button")[0];
const button2 = div.getElementsByTagName("button")[1];
const select = div.getElementsByTagName("select")[0]

var count = 20;

button1.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.fontSize = count + "px";
    count++;
})

button2.addEventListener("click", () => {
    document.getElementsByTagName("body")[0].style.fontSize = count + "px";
    count -= 1;
})

select.addEventListener("click", () => {
    var index = select.selectedIndex;
    color = select.getElementsByTagName("option")[index].getAttribute("value");
    document.getElementsByTagName("body")[0].style.backgroundColor = color;
})