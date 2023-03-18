
// TODO: check for device default mode

const storageKey = 'theme-preference'

function switchThemeDark() {
    setPreference('dark')
    document.documentElement.setAttribute(storageKey, 'dark')
    const root = document.documentElement;
    root.style.setProperty('--primaryColor', 'var(--darkprimaryColor)');
    root.style.setProperty('--secondaryColor', 'var(--darksecondaryColor)');
    root.style.setProperty('--tertiaryColor', 'var(--darktertiaryColor)');
    root.style.setProperty('--primaryTextColor', 'var(--darkprimaryTextColor)');
    root.style.setProperty('--secondaryTextColor', 'var(--darksecondaryTextColor)');
    root.style.setProperty('--tertiaryTextColor', 'var(--darktertiaryTextColor)');
}

function switchThemeLight() {
    setPreference('light')
    document.documentElement.setAttribute(storageKey, 'light')
    const root = document.documentElement;
    root.style.setProperty('--primaryColor', 'var(--originalprimaryColor)');
    root.style.setProperty('--secondaryColor', 'var(--originalsecondaryColor)');
    root.style.setProperty('--tertiaryColor', 'var(--originaltertiaryColor)');
    root.style.setProperty('--primaryTextColor', 'var(--originalprimaryTextColor)');
    root.style.setProperty('--secondaryTextColor', 'var(--originalsecondaryTextColor)');
    root.style.setProperty('--tertiaryTextColor', 'var(--originaltertiaryTextColor)');
}

function toggletheme(scheme) {
    if (scheme == 'light') switchThemeLight()
    else if (scheme == 'dark') switchThemeDark()
    else toggletheme(getColorPreference() == 'light' ? 'dark' : 'light')
}

function getwindowsmedia() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getColorPreference() {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  setPreference(getwindowsmedia())
}

function setPreference(scheme) {
    localStorage.setItem(storageKey, scheme)
    // reflectPreference()
}

function reflectPreference() {
    toggletheme(getColorPreference())
}

setPreference(getwindowsmedia())
toggletheme(getColorPreference())
