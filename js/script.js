const body = document.querySelector("body");
const formButtons = document.querySelectorAll(".mesure__form__submit-button");
const warningMassage = document.querySelector(".warning");
const closeMassageButton = document.querySelector(".massage__window__close");
const examplesButtons = document.querySelectorAll(".examples__button");
const forms = document.querySelectorAll("form");
const headerMesure = document.querySelector(".header__mesure");
const examplesLineItems = document.querySelectorAll(".examples__line__item");
const worksItems = document.querySelectorAll(".works__gallery__item");
const zoomField = document.querySelector(".zoom__field");
const zoom = document.querySelector(".zoom");
const trimItems = document.querySelectorAll(".trim__line__item");
const footerQuestionLink = document.querySelector(".footer__question a");
const headerCallLink = document.querySelector(".header__call a");
// console.log(footerQuestionLink);

//функция открытия или закрытия модального окна
const warning = () => {
  console.log("warning");
  warningMassage.classList.toggle("active");
  body.classList.toggle("none__scroll");
};

//отмена перезагрузки страницы при нажатии кнопки формы
forms.forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
});

//вывод сообщения о тестовой верссии при нажатии на некоторые кнопки
formButtons.forEach((formButton) => {
  formButton.addEventListener("click", warning);
});
examplesButtons.forEach((examplesButton) => {
  examplesButton.addEventListener("click", warning);
});
headerCallLink.addEventListener("click", (event) => {
  event.preventDefault();
  warning();
});
footerQuestionLink.addEventListener("click", (event) => {
  event.preventDefault();
  warning();
});
headerMesure.addEventListener("click", warning);

//закрытие модального окна
closeMassageButton.addEventListener("click", warning);

//смена активного элемента списка examples
examplesLineItems.forEach((example) =>
  example.addEventListener("click", (event) => {
    examplesLineItems.forEach((item) =>
      item.querySelector("p").classList.remove("active")
    );

    event.target
      .closest(".examples__line__item")
      .querySelector("p")
      .classList.add("active");
  })
);

//смена активного элемента списка trim
trimItems.forEach((trim) => {
  trim.addEventListener("click", (event) => {
    trimItems.forEach((item) => {
      item.classList.remove("active");
    });
    event.target.closest(".trim__line__item").classList.add("active");
  });
});

//zoom в секторе works
worksItems.forEach((worksItem) => {
  worksItem.addEventListener("click", (event) => {
    const imgSrc = event.target
      .closest(".works__gallery__item")
      .querySelector("img")
      .getAttribute("src");

    zoomField.innerHTML = `<img src="${imgSrc}" alt="img" />`;
    zoom.classList.add("active");
    body.classList.toggle("none__scroll");
  });
});
zoomField.addEventListener("click", (event) => {
  if (!event.target.closest("img")) {
    zoom.classList.remove("active");
    body.classList.toggle("none__scroll");
  }
});
