const languageToggle = document.querySelector("#language-toggle");
const translatableElements = document.querySelectorAll("[data-en][data-zh]");
const currentYear = document.querySelector("#current-year");

const savedLanguage = localStorage.getItem("homepage-language");
let currentLanguage = savedLanguage === "zh" ? "zh" : "en";

function applyLanguage(language) {
  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

  translatableElements.forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageToggle.textContent = language === "en" ? "中文" : "English";
  languageToggle.setAttribute(
    "aria-label",
    language === "en" ? "Switch to Chinese" : "切换至英文"
  );

  localStorage.setItem("homepage-language", language);
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  applyLanguage(currentLanguage);
});

currentYear.textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
