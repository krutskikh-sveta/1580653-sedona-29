const triggerButton = document.querySelector(".form-trigger");
const searchFormModal = document.querySelector(".search-form-modal");
const dateFrom = searchFormModal.querySelector(".date-from");
const dateTo = searchFormModal.querySelector(".date-to");
const adultsBlock = searchFormModal.querySelector(".adults-number");
const childrenBlock = searchFormModal.querySelector(".children-number");
const adultsNumber = adultsBlock.querySelector(".number");
const childrenNumber = childrenBlock.querySelector(".number");
const childrenMinus = childrenBlock.querySelector(".minus");
const childrenPlus = childrenBlock.querySelector(".plus");
const adultsMinus = adultsBlock.querySelector(".minus");
const adultsPlus = adultsBlock.querySelector(".plus");

triggerButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (searchFormModal.classList.contains("hidden")) {
        searchFormModal.classList.remove("hidden");
        searchFormModal.classList.add("modal-show");
        dateFrom.focus();
    } else {
        searchFormModal.classList.add("hidden");
        searchFormModal.classList.remove("modal-show");
        searchFormModal.classList.remove("validation-error");
    }
});

searchFormModal.addEventListener("submit", function (evt) {
    evt.preventDefault();

    if (!dateFrom.value || !dateTo.value || !adultsNumber.value || !childrenNumber.value) {
        searchFormModal.classList.remove("validation-error");
        searchFormModal.offsetWidth = searchFormModal.offsetWidth;
        searchFormModal.classList.add("validation-error");
    }

    if (adultsNumber.value === "0" && childrenNumber.value === "0") {
        searchFormModal.classList.remove("validation-error");
        searchFormModal.offsetWidth = searchFormModal.offsetWidth;
        searchFormModal.classList.add("validation-error");
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (!searchFormModal.classList.contains("hidden")) {
            searchFormModal.classList.add("hidden");
            searchFormModal.classList.remove("validation-error");
        }
    }
});

childrenMinus.addEventListener("click", function (evt) {
    evt.preventDefault();
    let val = parseInt(childrenNumber.value);
    if (val > childrenNumber.min && val <= childrenNumber.max) {
        val -= 1;
        childrenNumber.value = val;
    }
});

childrenPlus.addEventListener("click", function (evt) {
    evt.preventDefault();
    let val = parseInt(childrenNumber.value);
    if (val >= childrenNumber.min && val < childrenNumber.max) {
        val += 1;
        childrenNumber.value = val;
    }
});

adultsMinus.addEventListener("click", function (evt) {
    evt.preventDefault();
    let val = parseInt(adultsNumber.value);
    if (val > adultsNumber.min && val <= adultsNumber.max) {
        val -= 1;
        adultsNumber.value = val;
    }
});

adultsPlus.addEventListener("click", function (evt) {
    evt.preventDefault();
    let val = parseInt(adultsNumber.value);
    if (val >= adultsNumber.min && val < adultsNumber.max) {
        val += 1;
        adultsNumber.value = val;
    }
});