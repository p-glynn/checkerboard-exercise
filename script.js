var tileArr = [];

//initially populate the board

for (i=0; i<81; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];
  document.body.prepend(tile);
  tile.style.width = "11.1%";
  // tile.display = "float";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";

  if (i%2 === 0) {
    document.tile.style.backgroundColor = "white";
  } else {
    document.tile.style.backgroundColor = "black";
  }

}
