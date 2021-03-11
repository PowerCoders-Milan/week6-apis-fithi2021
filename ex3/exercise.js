// Here is your key: 3d6d6ef

// Please append it to all of your API requests,




// fetch(' http://www.omdbapi.com/?s=harry potter&apikey=adf1f2d7')
// .then(res => res.json())
// .then(data=>{
//     data.Search.forEach(element => {
//         var main = document.createElement("div");
//         var title = document.createElement("p");
//         var year = document.createElement("p");
//         var img = document.createElement("img")
//         img.setAttribute("src",element.Poster)
//         title.innerHTML = element.Title;
//         year.innerHTML = element.Year;

//         main.appendChild(title);
//         main.appendChild(year);
//         main.appendChild(img);

//         document.querySelector("body").appendChild(main);
        

//     });

// })


        


var input = document.querySelector("input");

function myCall(){

    var x = input.value;
    fetch(`http://www.omdbapi.com/?s=${x}&apikey=adf1f2d7`)
    .then(res => res.json())
    .then(data=>{
      var rem = document.querySelectorAll("div")
      rem.forEach(element=>{
          element.remove();
      })
        data.Search.forEach(element => {

            var main = document.createElement("div");
            var title = document.createElement("p");
            var year = document.createElement("p");
            var img = document.createElement("img")
            img.setAttribute("src",element.Poster)
            title.innerHTML = element.Title;
            year.innerHTML = element.Year;
    
            main.appendChild(title);
            main.appendChild(year);
            main.appendChild(img);
    
            document.querySelector("body").appendChild(main);
            
    
        });
    
    })


    
}


input.addEventListener("keyup",myCall);

