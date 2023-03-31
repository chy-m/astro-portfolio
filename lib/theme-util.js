const storageKey = "theme";

export const getColorPreference = () => {
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
