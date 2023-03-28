const storageKey = "theme";

const getColorPreference = () => {
  let preference = localStorage.getItem(storageKey);

  if (!preference) {
    preference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return preference;
};

const setPreference = (themeName) => {
  localStorage.setItem(storageKey, themeName);

  document.firstElementChild.setAttribute("data-theme", themeName);
};

export const togglePreference = () => {
  setPreference(getColorPreference() === "dark" ? "light" : "dark");
};

export const darkify = () => {
  document.documentElement.classList.toggle("dark");
};

(() => {
  const theme = getColorPreference();

  console.log(theme);
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  setPreference(theme);
})();
