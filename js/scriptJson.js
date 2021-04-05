var request = new XMLHttpRequest();
var url = "js/datos.json";

request.open("GET", url, true);
request.responseType = 'text';
request.send();

request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    const deportesText = request.response; //cogemos la cadena de response
    const deportes = JSON.parse(deportesText); //la convertimos a objeto
    showSports(deportes);
  }
}
function showSports(d) {
  const sports = d['dadesPropies']['esports'];
  for (var i = 0; i < sports.length; i++) {
    var a = document.createElement('div');
    a.className = 'col-md-6 col-lg-4 mb-5';

    var b = document.createElement('div');
    b.className = 'portfolio-item mx-auto';
    b.attr("data-toggle", "modal");
    b.attr("data-target", "#portfolioModal1");

    var img = document.createElement('img');
    img.src = d['imatges'][i];
    b.appendChild(img);
    a.appendChild(b);

    var c = document.createElement('div');
    c.className = 'portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100';
    b.appendChild(c);

    var d = document.createElement('div');
    d.className = 'portfolio-item-caption-content text-center text-white sport';
    d.textContent = sports[i];
    c.appendChild(d);
  }
  document.getElementById("catalogo").appendChild(a);
}