var ball3;
var database, position;

function setup(){
    createCanvas(500,500);
    database = firebase.database();

    ball3 = createSprite(250,250,10,10);
    ball3.shapeColor = "red";
    var ball3position = database.ref('ball/position');
    ball3position.on("value",readPosition,showerr);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data){
    position = data.val();
    ball3.x = position.x;
    ball3.y = position.y;
}

function writePosition(x,y){
    database.ref('ball/position').set({
        'x' : x + position.x,
        'y' : y + position.y
    }
    )
}

function showerr(){
    console.log("err in database");
}