class Game{
    constructor(){}


getState(){
    var gameStateRef = datatbase.ref('gameState');
    gamestateRef.on("value", function(data){
        gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
        gameState: state
    });
}

start(){
if (gameState === 0){
    player = new player()
    player.getCount();
    form = new Form();
    form.display();
}
}
}
