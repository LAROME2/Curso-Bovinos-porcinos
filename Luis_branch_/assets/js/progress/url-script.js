function getstr(str) {
  return str.substring(str.search("html"));
}

function isValid() {
  var url = window.location.href;
  return url.indexOf("html") != -1;
}

function getfilename() {
  var url = window.location.href;
  var filename = url.substring(url.lastIndexOf("/") + 1);
  if (filename == "") {
    return "index.html";
  }

  return filename;
}

function getModuloPercentage() {
  var res = 0;

  var files = getFiles();
  var url = window.location.href;
  url = url.substr(url.indexOf("html/"));
  var url_split = url.split("/");
  url_split.shift(); // aqui solo se tiene modulo1/modulo2-1.html
  var jsonTmp = files[url_split.shift()]; // se tiene el modulo como objeto
  let nombrePag = url_split[0]; // se saca el nombre de la pagina que se busca
  var totalLevel = 100;

  let numPag;
  let thisPage;
  for (page in jsonTmp) {
    thisPage = jsonTmp[page];
    if (thisPage == nombrePag) {
      numPag = parseInt(page);
    }
  }

  totalLevel = totalLevel / Object.keys(jsonTmp).length;

  return (totalLevel * numPag).toFixed(0);
}

function getTotalPercentage() {
  var res = 0;

  var files = getFiles();
  var url = window.location.href;
  url = url.substr(url.indexOf("html/"));
  var url_split = url.split("/");
  url_split.shift(); // se deshace del html
  let nombreMod = url_split[0];
  let nombrePag = url_split[1];

  // calcula el numero de paginas que hay
  let numPags = 0;
  let numPagsPasadas = 0;
  let status = true;
  let thisMod;
  let thisPage;
  for (modulo in files) {
    numPags += Object.keys(files[modulo]).length;

    if (modulo == nombreMod) {
      thisMod = files[modulo];
      for (pagNum in thisMod) {
        thisPage = thisMod[pagNum];
        if (thisPage == nombrePag) {
          numPagsPasadas += parseInt(pagNum);
          status = false;
          break;
        }
      }
    } else if (status) {
      numPagsPasadas = numPags;
    }
  }
  return (numPagsPasadas / numPags).toFixed(2);
}

function generatePage(name, count) {
  var html = "";
  if (name == "temario") {
    html +=
      '<a class="btn btn-default" role="button" href="../temario/temario.html"';
  }
  if (name == "index.html") {
    name = "";
  }
  if (count == "Atr??s" || count == "Siguiente") {
    html += '<a class="btn btn-default" role="button" href="./' + name + '">';
  } else {
    html +=
      '<a class="btn btn-default" role="button" id="' +
      (name == "" ? "index.html" : name) +
      '" href="./' +
      name +
      '">';
  }
  html += "<span>" + count + "</span>";
  html += "</a>";
  return html;
}

function getLast() {
  var url = window.location.href;
  url = url.substr(url.indexOf("html/"));
  var url_split = url.split("/");
  url_split.pop();
  // alert(url_split.join('/'));
  // if(getSpecialLasts().hasOwnProperty(url_split.join('/')))
  //     return getSpecialLasts().url_split.join('/');
  url_split.pop();
  var res = "";
  var flag = false;
  for (var i = url_split.length - 1; i >= 0; i--) {
    if (url_split[i].indexOf("modulo") != -1) {
      flag = true;
      res += "../";
      break;
    } else {
      res += "../";
    }
  }
  if (!flag) {
    res += "temario/";
  }
  return res;
}

function getMovementBar() {
  var res = 0;

  var files = getFiles();
  var url = window.location.href;
  url = url.substr(url.indexOf("html/"));
  var url_split = url.split("/");
  url_split.shift();

  var jsonTmp = files;
  var idtmp;

  //Get Id
  for (var i = 0; i < url_split.length; i++) {
    if (!jsonTmp.hasOwnProperty(url_split[i])) {
      if (i != url_split.length - 1) {
        break;
      }
      if (url_split[i] == "") {
        url_split[i] = "index.html";
      }
      for (idtmp in jsonTmp) {
        if (jsonTmp[idtmp] == url_split[i]) {
          break;
        }
      }
    } else {
      jsonTmp = jsonTmp[url_split[i]];
    }
  }

  var filescount = Object.keys(jsonTmp).length;

  var html = "";
  var html_back = "";
  var count = 0;

  //before button
  if (parseInt(idtmp) > 1) {
    html_back += generatePage(jsonTmp[parseInt(idtmp) - 1], "Atr??s");
  } else {
    html_back += generatePage("temario", "Atr??s");
  }

  // hay 4 archivos
  var rightmax = filescount - parseInt(idtmp);
  var leftmax = parseInt(idtmp) - 1; // inclusivo con la pag actual
  leftmax = leftmax >= 2 ? 2 : leftmax;
  leftmax = rightmax >= 2 ? leftmax : 4 - rightmax;

  //before overall max 5
  for (var left = parseInt(idtmp) - 1; left > 0 && count < leftmax; left--) {
    html = generatePage(jsonTmp[left], left) + html;
    count++;
  }
  html = html_back + html;
  /*
    if(getLast().indexOf("temario")==-1){
        html=html+generatePage(jsonTmp[idtmp],parseInt(idtmp));count++;
    }
    */
  html = html + generatePage(jsonTmp[idtmp], parseInt(idtmp));
  count++;
  //after overall max 5
  for (
    var right = parseInt(idtmp) + 1;
    right <= filescount && count < 5;
    right++
  ) {
    html = html + generatePage(jsonTmp[right], right);
    count++;
  }
  //after button
  if (parseInt(idtmp) + 1 <= filescount) {
    html += generatePage(jsonTmp[parseInt(idtmp) + 1], "Siguiente");
  } else {
    html += generatePage("temario", "Siguiente");
  }

  return html;
}
// FUNCION IMPORTANTE PARA MAPEAR LA ESTRUCTURA DE LA PAGINA WEB EN LOS BOTONES DE AVANCE
function getFiles() {
  var files = {
    modulo1: {
      1: "modulo1-1.html",
      2: "modulo1-2.html",
      3: "modulo1-3.html",
      4: "modulo1-4.html",
      5: "modulo1-5.html",
      6: "modulo1-6.html",
      7: "modulo1-7.html",
      8: "modulo1-8.html",
      9: "modulo1-9.html",
      10: "modulo1-10.html",
      11: "modulo1-11.html",
      12: "modulo1-12.html",
      13: "modulo1-13.html",
      14: "modulo1-14.html",
      15: "modulo1-15.html",
    },
    modulo2: {
      1: "act1.html",
      2: "act2-2.html",
      3: "act3.html",
      4: "act2d.html",
      5: "act5.html",
      6: "conclusion-2.html"
    },
    modulo3: {
      1: "modulo3-1.html",
      2: "modulo3-2.html",
      3: "modulo3-3.html",
      4: "modulo3-4.html",
      5: "modulo3-5.html",
      6: "modulo3-7.html",
    },
    modulo4: {
      1:"modulo4-1.html",
      2:"modulo4-2.html",
      3:"modulo4-21.html",
      4:"modulo4-3.html",
      5:"modulo4-4.html",
      6:"modulo4-5.html",
      7:"conclusiones-4.html"
    },
  };

  return files;
}

$(document).ready(function () {
  if (isValid()) {
    $(".btn-group").html(getMovementBar());
    setTimeout(function () {
      document.getElementById(getfilename()).classList.remove("btn-default");
      document.getElementById(getfilename()).classList.add("btn-actual-page");
    }, 250);

    show(getTotalPercentage());
    let modulePercentage = getModuloPercentage();
    document.getElementsByClassName("progress-bar")[0].innerHTML =
      modulePercentage + "%";
    document.getElementsByClassName("progress-bar")[0].style.maxWidth =
      "" + modulePercentage + "%";
    document.getElementsByClassName("progress-bar")[0].style.minWidth =
      "" + 5 + "%";
  }
});
