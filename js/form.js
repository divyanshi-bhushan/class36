class Form{
    constructor(){}


display(){
    var title=createElement('h2');
    title.html("Car Racing Game");
    title.position(130,10);

    var input=createInput("name");
    input.position(130,160);

    var button=createButton('Login');
    button.position(250,200);

    var greetings=createElement('h3');
    
    button.mousePressed(function(){
     input.hide();
     button.hide();
     var name=input.value();
     playerCount+=1
     player.update(name);
     player.updateCount(playerCount);
     greetings.html("hello"+name);
     greetings.position(130,160);

     

    })
    
}
}