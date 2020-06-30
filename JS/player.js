class Player {
    constructor () {
        this.index = null;
        this.name = null;
        this.distance = 0;
    }
    getCount () {
        var countRef =  database.ref("playerCount");
        countRef.on("value",function(data){
            playerCount = data.val();
        });
    }
    updateCount(count) {
        database.ref("/").update({
            playerCount:count
        })
    }

    static getPlayerInfo(){
        var infoRef = database.ref("Players")
        infoRef.on("value",(data)=>{
            allPlayers = data.val()
        })
    }

    update() {
        var playerIndex = "Players/Player"+this.index;
        database.ref(playerIndex).set({
            name:this.name,
            distance:this.distance
        })
    }
}
