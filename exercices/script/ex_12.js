var div = document.getElementsByTagName("div")[2];

localStorage.setItem("pangolin", "https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png");

var IMG = localStorage.getItem("pangolin");

div.innerHTML = "<img src='" + IMG + "' width='100%' height='100%'>";