var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];

function Hero(nom, classe, intelligence, force) {
    var obj = {};
    obj.nom = nom;
    obj.classe = classe;
    obj.intelligence = intelligence;
    obj.force = force;
    const count = 1;
    obj.toString = function() {
      div.innerHTML = div.innerHTML + "Je suis " + this.nom + " le " + this.classe + ", j'ai " 
      + this.intelligence + " intelligence et " 
      + this.force + " points de force ! <br>";
    };
    return obj;
}

var mage = new Hero("amadeus", "mage", 10, 3);
var guerrier = new Hero("pontius", "guerrier", 3, 10);
mage.toString();
guerrier.toString();
