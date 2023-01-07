document.addEventListener("DOMContentLoaded", function () {
  var age = document.getElementById("age");
  const recom = document.getElementById("recom");
  const maxima = document.getElementById("max");

  age.value = "3";
  max = 220 - 45;
  rec1 = Math.floor(0.5 * max);
  rec2 = Math.floor(0.85 * max);
  recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
  maxima.textContent = `${max} latidos por minuto aproximadamente.`;

  age.addEventListener("change", (event) => {
    opt = event.target.value;

    switch (opt) {
      case "1":
        max = 220 - 25;
        rec1 = 95;
        rec2 = 165;
        recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
        maxima.textContent = `${max} latidos por minuto aproximadamente.`;
        break;
      case "2":
        max = 220 - 35;
        rec1 = Math.floor(0.5 * max);
        rec2 = Math.floor(0.85 * max);
        recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
        maxima.textContent = `${max} latidos por minuto aproximadamente.`;
        break;
      case "3":
        max = 220 - 45;
        rec1 = Math.floor(0.5 * max);
        rec2 = Math.floor(0.85 * max);
        recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
        maxima.textContent = `${max} latidos por minuto aproximadamente.`;
        break;
      case "4":
        max = 220 - 55;
        rec1 = Math.floor(0.5 * max);
        rec2 = Math.floor(0.85 * max);
        recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
        maxima.textContent = `${max} latidos por minuto aproximadamente.`;
        break;
      case "5":
        max = 220 - 65;
        rec1 = Math.floor(0.5 * max);
        rec2 = Math.floor(0.85 * max);
        recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
        maxima.textContent = `${max} latidos por minuto aproximadamente.`;
        break;
      case "6":
        max = 220 - 75;
        rec1 = Math.floor(0.5 * max);
        rec2 = Math.floor(0.85 * max);
        recom.textContent = `${rec1} a ${rec2} latidos por minuto aproximadamente.`;
        maxima.textContent = `${max} latidos por minuto aproximadamente.`;
        break;
    }
  });
});
