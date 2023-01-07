document.addEventListener("DOMContentLoaded", function () {
  const draggables = document.querySelectorAll(".draggable");
  const containers = document.querySelectorAll(".container1");
  const containers2 = document.querySelectorAll(".container2");
  count = 4;
  correct = 0;

  function location(a) {
    if (a.x < 0) {
      ax = a.x - a.width / 2;
    } else if (a.x >= 0) {
      ax = a.x + a.width / 2;
    }
    if (a.y < 0) {
      ay = a.y - (2 * a.height) / 3;
    } else if (a.y >= 0) {
      ay = a.y + (1 * a.height) / 3;
    }
    return [ax, ay];
  }
  A1 = A2 = A3 = A4 = false;
  F1 = document.getElementById("F1");
  F2 = document.getElementById("F2");
  F3 = document.getElementById("F3");
  F4 = document.getElementById("F4");
  S1 = document.getElementById("S1");
  S2 = document.getElementById("S2");
  S3 = document.getElementById("S3");
  S4 = document.getElementById("S4");
  R1 = document.getElementById("R1");
  R2 = document.getElementById("R2");
  R3 = document.getElementById("R3");
  R4 = document.getElementById("R4");

  r3 = R3.parentNode.getBoundingClientRect();
  [r3x, r3y] = location(r3);
  r4 = R4.parentNode.getBoundingClientRect();
  [r4x, r4y] = location(r4);
  F = [F1, F2, F3, F4];
  A = [A1, A2, A3, A4];
  function displaywrong(par, draggable) {
    if (
      A[par.charAt(1) - 1] == false &&
      par.charAt(1) != draggable.id.charAt(1)
    ) {
      F[par.charAt(1) - 1].style.display = "block";
    }
  }
  function checkifwrong(draggable) {
    c = draggable.getBoundingClientRect();
    u = document.elementFromPoint(c.x, c.y);
    par = u.parentNode.id;
    sa = u.id;
    ch = false;
    if ((par.charAt(0) == "S") | (par.charAt(0) == "R")) {
      displaywrong(par, draggable);
      ch = true;
    } else if (ch == false && (sa.charAt(0) == "S") | (sa.charAt(0) == "R")) {
      displaywrong(sa, draggable);
    }
  }
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  draggables.forEach((draggable) => {
    draggable.addEventListener("touchend", function (e) {
      e.preventDefault();
      touch = e.changedTouches[0];
      ans = draggable.id;
      touch.target.classList.remove("big");
      var x = parseInt(touch.clientX);
      var y = parseInt(touch.clientY);
      dif = 220;
      dif2 = 150;
      switch (ans) {
        case "A1":
          r1 = R1.parentNode.getBoundingClientRect();
          [r1x, r1y] = location(r1);
          console.log(y, r1.y, r1.height, r1y, Math.abs(y - Math.abs(r1y)));
          if (
            Math.abs(x - Math.abs(r1x)) < dif &&
            Math.abs(y - Math.abs(r1y)) < dif2
          ) {
            draggable.style.position = "static";
            R1.appendChild(draggable);
            draggable.classList.remove("draggable");
            if (!isInViewport(R1)) {
              R1.scrollIntoView(true);
              window.scrollBy(0, -50);
            }
            A1 = true;
            A[0] = true;
            F1.style.display = "none";
            C1.style.display = "block";
          } else {
            checkifwrong(draggable);
            draggable.style.left = "40%";
            draggable.style.top = "85%";
          }
          break;
        case "A2":
          r2 = R2.parentNode.getBoundingClientRect();
          [r2x, r2y] = location(r2);
          console.log(
            x,
            r2.x,
            r2.width,
            r2x,
            Math.abs(x - Math.abs(r2x)),
            Math.abs(y - Math.abs(r2y))
          );
          if (
            Math.abs(x - Math.abs(r2x)) < dif &&
            Math.abs(y - Math.abs(r2y)) < dif2
          ) {
            draggable.style.position = "static";
            R2.appendChild(draggable);
            draggable.classList.remove("draggable");
            if (!isInViewport(R2)) {
              R2.scrollIntoView(true);
              window.scrollBy(0, -50);
            }
            A2 = true;
            A[1] = true;
            F2.style.display = "none";
            C2.style.display = "block";
          } else {
            checkifwrong(draggable);
            draggable.style.left = "0.2%";
            draggable.style.top = "85%";
          }
          break;
        case "A3":
          r3 = R3.parentNode.getBoundingClientRect();
          [r3x, r3y] = location(r3);
          console.log(
            x,
            r3.x,
            r3.width,
            r3x,
            Math.abs(x - Math.abs(r3x)),
            Math.abs(y - Math.abs(r3y))
          );
          if (
            Math.abs(x - Math.abs(r3x)) < dif &&
            Math.abs(y - Math.abs(r3y)) < dif2
          ) {
            draggable.style.position = "static";
            R3.appendChild(draggable);
            draggable.classList.remove("draggable");
            if (!isInViewport(R3)) {
              R3.scrollIntoView(true);
              window.scrollBy(0, -50);
            }
            A3 = true;
            A[2] = true;
            F3.style.display = "none";
            C3.style.display = "block";
          } else {
            checkifwrong(draggable);
            draggable.style.left = "20%";
            draggable.style.top = "85%";
          }
          break;
        case "A4":
          r4 = R4.parentNode.getBoundingClientRect();
          [r4x, r4y] = location(r4);
          console.log(
            y,
            r4.y,
            r4.height,
            r4y,
            Math.abs(x - Math.abs(r4x)),
            Math.abs(y - Math.abs(r4y))
          );
          if (
            Math.abs(x - Math.abs(r4x)) < dif &&
            Math.abs(y - Math.abs(r4y)) < dif2
          ) {
            draggable.style.position = "static";
            R4.appendChild(draggable);
            draggable.classList.remove("draggable");
            if (!isInViewport(R4)) {
              R4.scrollIntoView(true);
              window.scrollBy(0, -50);
            }
            A4 = true;
            A[3] = true;
            F4.style.display = "none";
            C4.style.display = "block";
          } else {
            checkifwrong(draggable);
            draggable.style.left = "60%";
            draggable.style.top = "85%";
          }
          break;
      }
    });
    draggable.addEventListener("touchstart", function (e) {
      e.preventDefault();
      var touch = e.targetTouches[0];
      touch.target.classList.add("big");
    });
    draggable.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
        //grab the location of the touch
        var touch = e.targetTouches[0];
        ans = touch.target.id;
        switch (ans) {
          case "A1":
            draggable.style.left = parseFloat(touch.clientX) * 0.8 + "px";
            draggable.style.top = parseFloat(touch.clientY) * 0.9 + "px";
            break;
          case "A2":
            draggable.style.left = parseFloat(touch.clientX) * 0.8 + "px";
            draggable.style.top = parseFloat(touch.clientY) * 0.9 + "px";
            break;
          case "A3":
            draggable.style.left = parseFloat(touch.clientX) * 0.9 + "px";
            draggable.style.top = parseFloat(touch.clientY) * 0.9 + "px";
            break;
          case "A4":
            draggable.style.left = parseFloat(touch.clientX) * 0.9 + "px";
            draggable.style.top = parseFloat(touch.clientY) * 0.95 + "px";
            break;
        }
      },
      { passive: false }
    );

    draggable.addEventListener("dragstart", () => {
      draggable.classList.add("dragging");
    });

    draggable.addEventListener("dragend", (e) => {
      e.preventDefault();
      draggable.classList.remove("dragging");
      ans = draggable.id;
      par = draggable.parentNode.id;
      if (par.substring(1) == ans.substring(1)) {
        draggable.style.position = "static";
        draggable.classList.remove("draggable");
        draggable.draggable = false;
        if (par.charAt(0) == "S") {
          switch (par) {
            case "S1":
              R1.appendChild(draggable);
              break;
            case "S2":
              R2.appendChild(draggable);
              break;
            case "S3":
              R3.appendChild(draggable);
              break;
            case "S4":
              R4.appendChild(draggable);
              break;
          }
        }
        switch (ans) {
          case "A1":
            console.log("A1");
            A1 = true;
            F1.style.display = "none";
            C1.style.display = "block";
            S1.classList.remove("container1");
            break;
          case "A2":
            console.log("A2");
            A2 = true;
            F2.style.display = "none";
            C2.style.display = "block";
            S2.classList.remove("container1");
            break;
          case "A3":
            console.log("A3");
            A3 = true;
            F3.style.display = "none";
            C3.style.display = "block";
            S3.classList.remove("container1");
            break;
          case "A4":
            console.log("A4");
            A4 = true;
            F4.style.display = "none";
            C4.style.display = "block";
            S4.classList.remove("container1");
            break;
        }
      } else {
        switch (par) {
          case "S1":
          case "R1":
            if (A1 == false) {
              F1.style.display = "block";
            }
            break;
          case "S2":
          case "R2":
            if (A2 == false) {
              F2.style.display = "block";
            }
            break;
          case "S3":
          case "R3":
            if (A3 == false) {
              F3.style.display = "block";
            }
            break;
          case "S4":
          case "R4":
            if (A4 == false) {
              F4.style.display = "block";
            }
            break;
        }
      }
    });
  });

  containers.forEach((container) => {
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = document.querySelector(".dragging");
      if (dragging != null) {
        container.appendChild(dragging);
      }
    });
  });
});
