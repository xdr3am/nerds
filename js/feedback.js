var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".popup-feedback");
var feedbackClose = document.querySelector(".close-button");
var feedbackForm = document.querySelector(".popup-feedback-form");
var feedbackName = document.querySelector(".feedback-name");
var feedbackEmail = document.querySelector(".feedback-email");
var feedbackText = document.querySelector(".feedback-user-text");

var isStoregeSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("Name");
  storageEmail = localStorage.getItem("Email");
} catch (err) {
  isStoregeSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.add("popup-show");

  if (storageName, storageEmail) {
    feedbackName.value = storageName;
    feedbackEmail.value = storageEmail;
    feedbackText.focus();
  } else {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedbackPopup.classList.remove("popup-show");
  feedbackPopup.classList.remove("popup-error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.remove("popup-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("popup-error");
  } else {
    if (isStoregeSupport) {
      localStorage.setItem("Name", feedbackName.value);
      localStorage.setItem("Email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("popup-show")) {
      evt.preventDefault();
      feedbackPopup.classList.remove("popup-show");
      feedbackPopup.classList.remove("popup-error");
    }
  }
});