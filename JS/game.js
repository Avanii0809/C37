class Game {
    constructor () {


    }
    getState () {
        var stateRef =  database.ref("gameState");
        stateRef.on("value",function(data){
            gameState = data.val();
        });
    }

    update(state) {
        database.ref("/").update({
            gameState:state
        })
    }

    start() {
        if (gameState == 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4];
    }

    play () {
        form.hide();
        textSize(30);
        text("Let's go!", 120, 100);
        Player.getPlayerInfo();

        if (allPlayers != undefined) {
            //var displayPosition = 130;
            var index = 0;
            var x = 0;
            var y = 0;
            for (var plr in allPlayers) {
                
                index = index + 1;
                x = x + 200;
                y = displayHeight - allPlayers[plr].distance;
                cars [index-1].x = x;
                cars [index-1].y = y;

                if (index == player.index) {
                    cars [index-1].shapeColor = "turquoise";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars [index-1].y;
                }
                else {
                    cars [index-1].shapeColor = "blue";
                }
            }
        }

        if (keyIsDown(UP_ARROW) && player.index != null) {
            player.distance = player.distance+30;
            player.update();
        }
        drawSprites();
    }
}