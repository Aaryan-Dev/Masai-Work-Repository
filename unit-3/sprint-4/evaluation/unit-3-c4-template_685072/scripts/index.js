// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


import navbar from "../components/mod.js";

// console.log(navbar);
document.querySelector("#navbar").innerHTML = navbar();




  let input = document.getElementById("search_input");
    input.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          
            localStorage.setItem("query", JSON.stringify(document.getElementById("search_input").value))

            window.location.href = "search.html"
        // search();
      }
    });

   