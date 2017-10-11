for (i=0; i<81; i++) {
  var tile = document.createElement("div");
  var body = document.getElementsByTagName("body")[0];

  document.body.prepend(tile);

  tile.style.width = "11.1%";
  tile.style.float = "left";
  tile.style.paddingBottom = "11.1%";

  function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
  }

  tile.style.backgroundColor = getRandomColor();

}
