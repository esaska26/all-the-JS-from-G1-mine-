function windowSize(){
    let height = this.innerHeight;
    let width = this.innerWidth;
    return [height, width];
    //ovde neshto fali (bev do toalet)
};

let result = windowSize();
console.log(result);

let shape = {
    width: 600,
    height: 400,
    getArea: function(){
        console.log(this);
        return this.width * this.height;
    }
};

console.log(shape.getArea());

let width = 600;
let screen = { width: 400 };

function showWidth() {
    console.log(this);
    console.log(this.width);
}

showWidth();
// screen.showWidth = showWidth;
// screen.showWidthExecuted = showWidth();

screen.showWidth = showWidth;
screen.showWidth();
console.log(screen);