
var heroList = {
    heroCounter : 0,
    addHero : function(name, ability, costumeColor, city, vilain) {
        this[name] = {name: name, ability: ability, costumeColor: costumeColor, city: city, vilain: vilain};
        this.heroCounter ++;
    }
};


 heroList.commingPhrase = function (hero) {
        alert("Fret not citizens of " + this[hero].city + " I'm comming to defend justice!");
    };
    heroList.goingAwayPhrase = function (hero) {
        var workDone = "My work is done here!  You are save now citizens of " + this[hero].city + "!";
        return workDone;
    };


heroList.addHero("Batman", "deduction", "black", "Gotham", "Joker");
heroList.addHero("Superman", "Super Human", "blue and red", "Metropolis", "Lex Luther");
heroList.addHero("Flash", "super human speed", "red", "Central City", "The Trixter");
heroList.addHero("DareDevil", "Radar vision", "red", "Hell's Kitchen", "The Kingpin");


heroList.callHero = function (criminal) {
    var imgSrc = "<img src=";
    for (var key in this){
       //console.log(key); <img src="image/Batman.jpg" alt="Batman">'
       if (this[key].vilain == criminal) {
            imgSrc += "image/" + this[key].name + ".jpg" + " alt=" + this[key].name + ">";
            $("span.hero").html(imgSrc)  ;  
            alert("Quick " + this[key].name + ", " + this[key].vilain + " is attacking " + this[key].city + " go be a hero!");
            this.commingPhrase(key);
            alert("BOOOOOM!!!!!");
            $("span.hero").append("<p>" + this.goingAwayPhrase(this[key].name) + "</p>");
        } ;
    };  
};



$(document).ready(function () {
    $(".vilains").find("li").on("click", function (){
        var ennemy = $(this).attr('id');
        //console.log(ennemy);
        $('.vilains li').addClass("chosenVilain");  
        heroList.callHero(ennemy);  
        $("#sub").text("Justice has been served!");   
    });   

}); 



