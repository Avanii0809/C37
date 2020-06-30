class Form {
    constructor () {
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
    }

    display () {
        var title = createElement("h2");
        title.html("car racing game");
        title.position(displayWidth/2-50, 10);
        this.input.position(displayWidth/2-40, displayHeight/2-80);
        this.button.position(displayWidth/2+20, displayHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        })
    }

    hide () {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}
