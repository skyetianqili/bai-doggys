console.log("Hi this is Skye")

//index.js

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#input").addEventListener("keydown", function(e) {
      if (e.code === "Enter") {
          console.log("You clicked the form and pressed the enter button!")
      }
    });
  });

