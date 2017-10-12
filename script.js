// var tileArr = [];

//initially populate the board

for (let i=0; i<81; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  document.body.prepend(tile);
  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";
   tile.style.background = `linear-gradient(to top left,${ranColorArray[0]},${ranColorArray[1]},${ranColorArray[2]},${ranColorArray[3]},${ranColorArray[4]})`;
  // if (i%2 === 0) {
  //   tile.style.backgroundColor = "white";
  // } else {
  //   tile.style.backgroundColor = "black";
  // }
}
