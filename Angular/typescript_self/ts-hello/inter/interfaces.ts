class Point{
    x: number;
    y: number;
    
    draw(){
        console.log('x: '+this.x+ 'y: '+this.y);
    }

    getDistance(another: Point){

    }
}

// let point = (point: point) => {
//     //..
// }

let point = new Point();
point.x = 19;
point.y = 20;
point.draw();