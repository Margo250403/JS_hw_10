"use strict"

const users = [{
     id: 1,
     name: "Veronika",
     email: "vgroves0@vistaprint.com",
     age: 50,
     city: "Javhlant",
     gender: "Female",
     inn: 2604048463
},
{
     id: 2,
     name: "Correy",
     email: "cskidmore1@shop-pro.jp",
     age: 50,
     city: "Junglinster",
     gender: "Male",
     inn: 5396152028
},
{
     id: 3,
     name: "Chrissie",
     email: "csobieski2@go.com",
     age: 40,
     city: "Mercaderes",
     gender: "Female",
     inn: 7437115687
},
{
     id: 4,
     name: "Adrianna",
     email: "awharrier3@hud.gov",
     age: 33,
     city: "Manuel Cavazos Lerma",
     gender: "Non-binary",
     inn: 6292774004
},
{
     id: 5,
     name: "Fairlie",
     email: "feliasen4@bing.com",
     age: 34,
     city: "Радовиш",
     gender: "Female",
     inn: 5943534093
}]

const dataServer = [
     {
          title: "Veronika",
     },
     {
          title: "Correy",
     },
     {
          title: "Chrissie",
     },
     {
          title: "Adrianna",
     },
     {
          title: "Fairlie",
     },
];

function createAccordion(accordionSelector, data) {
     //get accordion container 
     const container = document.querySelector(accordionSelector);

     for (let item of data) {
          //create elements
          const title = document.createElement("button");
          const content = document.createElement("div");
          // const avatar = document.createElement("div");
          // const inputs = document.createElement("div");

          //add classes 
          title.className = "accordion-header";
          content.className = "accordion-content";
          // avatar.className = "avatar";
          // inputs.className = "inputs";

          //insert html 
          title.innerHTML = item.title;
          content.innerHTML = `  <div class="avatar">
          <input type="text" textarea="Avatar" placeholder="Avatar">
      </div>
      <div class="inputs">
          <p><input class="input inn" type="text" placeholder="inn">
              <input class="input email" type="text" placeholder="email">
          </p>
          <p><input class="input name" type="text" placeholder="name">
              <input class="input city" type="text" placeholder="city">
          </p>
          <p><input class="input age" type="text" placeholder="age">
              <input class="input gender" type="text" placeholder="gender">
          </p>
      </div>`;

          //append to page
          title.append(content);
          container.appendChild(title);
     }
}

function dropDownAccordion() {
     //add dropDown for accordion
     const acc = document.querySelector(".accordion-header");
     for (let i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function () {
               this.classList.toggle("active");

               const accordionContent = this.nextElementSibling;
               if (accordionContent.style.maxHeight) {
                    accordionContent.style.maxHeight = null;
               } else {
                    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
               }
          });
     }
}

function fullInputs() {
//add value for inputs
     const div = document.querySelector('.inputs');
     div.addEventListener('click', () => {
          const inputs = document.querySelectorAll('.input');
          inputs.forEach((element, index) => {
               if (element.classList.contains('inn')) {
                    element.value = `${users[index].inn}`
               }
               if (element.classList.contains('name')) {
                    element.value = `${users[index].name}`
               }
               if (element.classList.contains('age')) {
                    element.value = `${users[index].age}`
               }
               if (element.classList.contains('email')) {
                    element.value = `${users[index].email}`
               }
               if (element.classList.contains('city')) {
                    element.value = `${users[index].city}`
               }
               if (element.classList.contains('gender')) {
                    element.value = `${users[index].gender}`
               }
          });
     })

}

createAccordion(".accordion", dataServer);
dropDownAccordion();
fullInputs();























// const acc = document.getElementsByClassName("accordion");
// for (let i = 0; i < acc.length; i++) {
//      acc[i].addEventListener("click", function () {
//           this.classList.toggle("active");

//           const accordionContent = this.nextElementSibling;
//           if (accordionContent.style.maxHeight) {
//                accordionContent.style.maxHeight = null;
//           } else {
//                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
//           }
//      });
// }

// const input = document.querySelector('.accordion-content');
// for (var i = 0; i < 1; i++) {
//      input.innerHTML +=
//           `<div class="inputs" id="users-content">
//           <input id="inn" type="text" placeholder="inn">
//           <input id="name" type="text" placeholder="name"${users[i].name}>
//           <input id="age" type="text" placeholder="age"${users[i].age}>
//           <input id="email" type="text" placeholder="email"${users[i].email}>
//           <input id="city" type="text" placeholder="city">${users[i].city}
//           <input id="gender" type="text" placeholder="gender"${users[i].gender}>
//      </div>`
// }

// const userInput = document.querySelector("#inn");
// console, console.log(userInput);

// userInput.onblur = function () {
//      this.value =
// }



// user.show("#users-content");




