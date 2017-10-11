var tileArr = [];

//initially populate the board

for (i=0; i<1600; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  document.body.prepend(tile);
  tile.style.width = "2%";
  tile.display = "float";
  tile.style.float = "left";
  tile.style.paddingBottom = "2%";
  tileArr.push(tile)
  tile.style.backgroundColor = randomColor();
}

function randomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
  color += letters[Math.floor(Math.random() * 16)];
  }
return color;
}

for(var i=0;i<tileArr.length;i++){
  document.body.prepend(tileArr[i]);
}

function tileReplace(){
  var randIndex = Math.ceil(Math.random()*tileArr.length-1);
  var newTileColor = tileArr[randIndex].style.backgroundColor = randomColor();
}

var intervalID = window.setInterval(tileReplace, .00001);

var audio = new Audio('sand.mp3');
audio.play();

//
// var tileArr = [];
// for(var i=0;i<81;i++){
//   var randoC = '#' + Math.ceil(1000000 * Math.random())
//   var tile = document.createElement('div');
//   var body = document.getElementsByTagName('body')[0];
//   tile.style.width = '11.1%';
//   tile.style.paddingBottom = '11.1%';
//   tile.display = 'float';
//   tile.style.float = 'left';
//   tileArr.push(tile);
//   tile.style.backgroundColor = randoC
// };
//
// for(var i=0;i<tileArr.length;i++){
//   document.body.prepend(tileArr[i]);
// }
//
// function tileReplace(){
//   var randoC = '#' + Math.ceil(1000000 * Math.random())
//   var randoIndex = Math.ceil(Math.random()*100)
//   var newTileColor = tileArr[randoIndex].style.backgroundColor = randoC
// }
// var intervalID = window.setInterval(tileReplace, 10);
