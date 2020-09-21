"use strict";

$(document).ready(function () {
  var nameInput = $(".name");
  var descInput = $(".desc");
  var categoryInput = $(".category");
  var errorName = $(".errorName");
  var errorDesc = $(".errorDesc");
  var errorCategory = $(".errorCategory");

  var nameVal = nameInput.val();
  var descVal = descInput.val();
  var categoryVal = categoryInput.val();

  $.ajax({
    type: "GET",
    url: "https://api.myjson.com/bins/gg3eh",
    dataType: "json",
    success: function success(recipe) {
      $.each(recipe, function (i, recipes) {
        $("section:nth-child(3) div:nth-child(1)").append("<article><img src='img/bourbonSteak.jpg'> <p>" + recipes[0].category + "</p> <h3>" + recipes[0].title + "</h3> <p>" + recipes[0].description + "</p> <p>" + recipes[0].starRating + "</p><img class='deleteBTN' src='img/delete.png'></article>");
        $("section:nth-child(3) div:nth-child(1)").append("<article><img src='img/deviledeggs.jpg'> <p>" + recipes[1].category + "</p> <h3>" + recipes[1].title + "</h3> <p>" + recipes[1].description + "</p> <p>" + recipes[1].starRating + "</p><img class='deleteBTN' src='img/delete.png'></article>");
        $("section:nth-child(3) div:nth-child(1)").append("<article><img src='img/keylimepie.jpg'> <p>" + recipes[2].category + "</p> <h3>" + recipes[2].title + "</h3> <p>" + recipes[2].description + "</p> <p>" + recipes[2].starRating + "</p><img class='deleteBTN' src='img/delete.png'></article>");
        $("section:nth-child(3) div:nth-child(1)").append("<article><img src='img/bakedOatmeal.jpg'> <p>" + recipes[3].category + "</p> <h3>" + recipes[3].title + "</h3> <p>" + recipes[3].description + "</p> <p>" + recipes[3].starRating + "</p><img class='deleteBTN' src='img/delete.png'></article>");
      });
    }
  });

  // FORM VALIDATION
  nameInput.focus();

  nameInput.focusout("blur", checkName, false);
  descInput.focusout("blur", checkDesc, false);
  categoryInput.focusout("blur", checkCategory, false);

  //NAME VALIDATION
  function checkName() {
    if (this.value.length <= 0) {
      nameInput.css("border", "solid 2px #FF0000");
      errorName.html("Enter recipe name");
    } else if (this.value.length < 4) {
      nameInput.css("border", "solid 2px #FF0000");
      errorName.html("Not a valid recipe name");
    } else {
      nameInput.css("border", "0");
      errorName.html("");
    }
  }

  //EMAIL VALIDATION
  function checkDesc() {
    if (this.value.length <= 0) {
      descInput.css("border", "solid 2px #FF0000");
      errorDesc.html("Enter a description");
    } else if (this.value.length < 4) {
      descInput.css("border", "solid 2px #FF0000");
      errorDesc.html("Not a valid description");
    } else {
      descInput.css("border", "0");
      errorDesc.html("");
    }
  }

  //PASSWORD VALIDATION
  function checkCategory() {
    if (this.value.length <= 0) {
      categoryInput.css("border", "solid 2px #FF0000");
      errorCategory.html("Enter a category");
    } else if (this.value.length < 4) {
      categoryInput.css("border", "solid 2px #FF0000");
      errorCategory.html("Not a valid category");
    } else {
      categoryInput.css("border", "0");
      errorCategory.html("");
    }
  }

  $("#menuForm").submit(function (event) {
    event.preventDefault();
    nameVal = nameInput.val();
    descVal = descInput.val();
    categoryVal = categoryInput.val();

    $("section:nth-child(3) div:nth-child(2)").css("display", "block").html("<p>" + nameVal + "</p>" + "<p>" + descVal + "</p>" + "<p>" + categoryVal + "</p> <img class='deleteBTN' src='img/delete.png'>");
  });

  $("section:nth-child(3)").on("click", ".deleteBTN", function () {
    $(this).closest("article, div:nth-child(2)").remove();
  });

  //LOCAL STORAGE
  var nameLS = nameVal;
  var descLS = descVal;
  var categoryLS = categoryVal;

  nameVal = localStorage.setItem('nameLS', nameLS);
  descVal = localStorage.setItem('descLS', descLS);
  categoryVal = localStorage.setItem('categoryLS', categoryLS);
});