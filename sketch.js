
//Written by William Luk
// posts data to an Adafuit.io feed
let url = 'https://io.adafruit.com/api/v2/NathanKnappett/feeds/servo/data';

var data = 0;

function setup() {
//  createCanvas(400,400);
  myButton1 = createButton('Text me friend back please!');
  myButton1.mousePressed(press1);
    
  myButton2 = createButton('Do you want to go out for food?');
  myButton2.mousePressed(press2);
    
  myButton3 = createButton('Movie night? text me');
  myButton3.mousePressed(press3);
    
  myButton4 = createButton('Reset');
  myButton4.mousePressed(press4);
 
    //style
    
    myButton1.style('font-size', '25px');
    myButton1.style('background-color', color(25,23,200,50));
    myButton1.style('border', '0px');
    myButton1.position(10, 50);
    
    myButton2.style('font-size', '25px');
    myButton2.style('background-color', color(25,23,200,50));
    myButton2.style('border', '0px');
    myButton2.position(10, 100);
    
    myButton3.style('font-size', '25px');
    myButton3.style('background-color', color(25,23,200,50));
    myButton3.style('border', '0px');
    myButton3.position(10, 150);
    
    myButton4.style('font-size', '25px');
    myButton4.style('background-color', color(255,0,0));
    myButton4.style('border', '0px');
    myButton4.position(10, 200);

    
    
//  myButton.mouseReleased(off);
}

function draw() {
//  background(120);
}

function press1() {
  data = 20;
  console.log(data);
  sendData(data);
}

function press2() {
  data = 100;
  console.log(data);
  sendData(data);
}

function press3() {
  data = 180;
  console.log(data);
  sendData(data);
}

function press4() {
  data = 0;
  console.log(data);
  sendData(data);
}

function off() {
  data = 0;
  console.log(data);
  sendData(data);
}

function sendData(turnOn){
  let postData ={
    "value": turnOn,
    "X-AIO-Key": "aio_bioN10PfZoCqG95xKXqIQfldJzJx"
  };
  httpPost(url, 'json', postData, function(result){
    console.log(result);
  });
}

