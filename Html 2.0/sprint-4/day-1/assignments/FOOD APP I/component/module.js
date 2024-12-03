

let navbar = () => {
    
  return `
  <a href="index.html">Menu</a>
    <a href="FOOD APP II.html">Meal of the day</a>
      <a href="log.html">log in/Sign up</a>
      <hr />`

}

let get = () => {
    
  let location = window.location
 
  // pathname: "/FOOD%20APP%20II.html"
  
  if (location.pathname == "/") {
    let input = document.querySelector("#food").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
    final(url);
    
  } else if (location.pathname == "/FOOD%20APP%20II.html" || location.pathname=="/food%20app%20ii" ) {
    const url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    final(url);
  }

  function final(url) {

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        let data = res.meals;

        console.log(data);
        append(data);
      })
      .catch((err) => { 
      });
  };



  let append = (data) => {
    document.querySelector("#main>div").innerHTML = "";

    data.forEach(
      ({ strMealThumb, strSource, strCategory, strArea, strTags }) => {
        let div = document.createElement("div");
        document.querySelector("#main>div").append(div);

        let img = document.createElement("img");
        img.src = strMealThumb;
        img.style.width = "30%";

        let more = document.createElement("a");
        more.href = strSource;
        more.innerText = "Read More";

        let cat = document.createElement("h4");
        cat.innerText = strCategory;

        let area = document.createElement("h4");
        area.innerText = strArea;

        let tag = document.createElement("h4");
        tag.innerText = strTags;

        //   strCategory
        //   strArea
        //   strTags

        div.append(img, more, cat, area, tag);
      }
    );
  };
}

export { navbar, get}; 