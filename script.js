const toggleButton = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleButton.addEventListener("click", () => {
  const root = document.documentElement;

  if (themeIcon.classList.contains("fa-sun")) {
    // Switch to dark mode
    root.style.setProperty("--background-col", "#292929"); 
    root.style.setProperty("--text-col", "#fff");
    root.style.setProperty("--box-col", "#222");

    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    // Switch to light mode
    root.style.setProperty("--background-col", "#f0f2f5");
    root.style.setProperty("--text-col", "#000");
    root.style.setProperty("--box-col", "#fff");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});


// greeting function runs when input is empty
function greeting() {
    const email = document.getElementById("email").value; // Get the value of the input field
    if (email === "") {
        alert("Hey, you don't have an email yet?");
    } else {
        alert(`Hey ${email}, we are facing some issues right now. Please try later. Thanks for your patience.`);
    }
}
