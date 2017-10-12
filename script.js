var tileArr = [];
for (let i=0; i<89; i++) {
  tileArr.push(randomColor())
}
//initially populate the board

for (let i=0; i<81; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  // var indArr = [];
  // for (let j=0; j<5; j++) {
  //   indArr.push(randomColor())
  // }
  // var randomNum = Math.floor(Math.random*tileArr.length);
  // console.log(indArr);
  document.body.append(tile);
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
  //
  // // tile.style.backgroundColor = randomColor();
  tile.style.background = `linear-gradient(to top,${tileArr[i]},${tileArr[i+1]},${tileArr[i+2]},${tileArr[i+3]},${tileArr[i+4]},${tileArr[i+5]})`;
  // if (i%2===0) {
  //   tile.style.background = `linear-gradient(to bottom left,${indArr[0]},${indArr[1]},${indArr[2]},${indArr[3]},${indArr[4]})`;
  // } else {
  //   tile.style.background = `linear-gradient(to bottom right,${indArr[0]},${indArr[1]},${indArr[2]},${indArr[3]},${indArr[4]})`;
  // }

}

function randomColor() {
var letters = '0123456789ABCDEF';
var color = '#';
for (var i = 0; i < 6; i++) {
 color += letters[Math.floor(Math.random() * 16)];
 }
return color;
}
