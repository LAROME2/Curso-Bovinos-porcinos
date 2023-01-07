document.addEventListener("DOMContentLoaded", function () {
  grid = document.getElementById("grid");
  boxes = document.querySelectorAll(".box");
  succ = document.getElementById("success");
  outer = document.getElementById("outer");
  checked = document.getElementById("checked");
  // FastClick.attach(document.body);

  var wordsToFind = $("#list li").length * 2,
    colors = ["red", "green", "yellow", "blue", "purple", "blue"],
    found = 0,
    clicking = false;

  $("#grid").mousedown(function () {
    clicking = true;
  });
  $("#grid").mouseup(function () {
    console.log("out");
    clicking = false;
    $(".box").removeClass("highlight");
  });
  $("#outer").mouseup(function (e) {
    x = e.clientX;
    y = e.clientY;
    el = document.elementFromPoint(x, y);
    if (el != grid) {
      clicking = false;
    }
  });

  grid.addEventListener("touchstart", function (e) {
    clicking = true;
  });
  grid.addEventListener("touchend", function (e) {
    clicking = false;
    $(".box").removeClass("highlight");
  });

  boxes.forEach((box) => {
    box.addEventListener("touchstart", function (e) {
      b = e.targetTouches[0].target;
      b.classList.add("highlight");
    });
    box.addEventListener("touchmove", function (e) {
      // console.log(e.changedTouches[0]);
      if (clicking) {
        b = e.targetTouches[0];

        u = document.elementFromPoint(b.clientX, b.clientY);
        if (u != null) {
          u.classList.add("highlight");
        }
        var word = b.target.getAttribute("data-word");
        if (word != null) {
          var wordLen = word.length;
          $box = $('.box[data-word="' + word + '"]');

          if ($('.box[data-word="' + word + '"].highlight').length == wordLen) {
            // Word is fully highlighted, remove highlight and add class fount-colorArray
            $box.removeClass("highlight").addClass("found-" + colors[found]);
            // Add found class to the list item that contains "word"
            $(".box").removeClass("highlight");
            found++;
          }
          console.log(found + " - " + wordsToFind);
          if (found == wordsToFind) {
            setTimeout(1500);
            succ.style.display = "block";
            checked.style.backgroundColor = "rgba(35, 165, 35, 0.2)";
          }
        }
      }
    });
  });

  $(".box")
    .mouseover()
    .mouseout(function () {
      if (clicking) {
        // Toggle highlight to box on click
        $(this).toggleClass("highlight");
        var word = $(this).attr("data-word");
        if (word != null) {
          // Get word attribute from clicked box.
          wordLen = word.length; // How long is the word.
          $box = $('.box[data-word="' + word + '"]'); // Get all box's with word attribute.
          if ($('.box[data-word="' + word + '"].highlight').length == wordLen) {
            // Word is fully highlighted, remove highlight and add class fount-colorArray
            $box.removeClass("highlight").addClass("found-" + colors[found]);
            // Add found class to the list item that contains "word"
            $('li:contains("' + word + '")').addClass("found");
            $(".box").removeClass("highlight");
            found++;
          }
          console.log(found + " - " + wordsToFind);
          if (found == wordsToFind && !ad) {
            var ad = true;
            setTimeout(1500);
            succ.style.display = "block";
            checked.style.backgroundColor = "rgba(35, 165, 35, 0.2)";
          }
        }
      }
    });
});
