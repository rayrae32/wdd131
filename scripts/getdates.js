// Dynamically populate current year in footer
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

// Dynamically populate last modified date in footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;
