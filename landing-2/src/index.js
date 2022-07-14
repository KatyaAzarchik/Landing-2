// $(document).ready(function () {
//   $(".burger").click(function (event) {
//     $(".burger, .navigation-item").toggleclass("active");
//   });
// });
// let.burger = document.querySelector("burger");
// let.navigation-item = document.querySelector('burger');

// const burger = document.querySelector(".burger");
// burger.addEventListener("click", function () {
//   //Функция добавляет класс или удаляет его.
//   burger.classList.toggle("active");
// });
// const navigation = document.querySelector(".navigation");
// navigation.addEventListener("click", function () {
//   //Функция добавляет класс или удаляет его.
//   navigation.classList.toggle("active");
// });

var burger = document.querySelector(".burger");
var navigation = document.querySelector(".navigation");

burger.addEventListener("click", function (evt) {
  burger.classList.toggle("active");
  evt.preventDefault();
  if (
    navigation.classList.contains("show") &&
    !navigation.classList.contains("hiding")
  ) {
    navigation.classList.add("hiding");
    var cb = function () {
      navigation.classList.remove("show");
      navigation.classList.remove("hiding");
      navigation.removeEventListener("transitionend", cb, false);
    };
    navigation.addEventListener("transitionend", cb, false);
  } else {
    navigation.classList.add("show");
    navigation.classList.remove("hiding");
  }
});

var headernavigation = document.querySelector(".headernavigation");

headernavigation.addEventListener("click", function (evt) {
  headernavigation.classList.toggle("active");
});
