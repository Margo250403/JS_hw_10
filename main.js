"use strict";
const users = [
    {
      id: 1,
      name: "Veronika",
      email: "vgroves0@vistaprint.com",
      age: 50,
      city: "Javhlant",
      gender: "Female",
      inn: 2604048463,
    },
    {
      id: 2,
      name: "Correy",
      email: "cskidmore1@shop-pro.jp",
      age: 50,
      city: "Junglinster",
      gender: "Male",
      inn: 5396152028,
    },
    {
      id: 3,
      name: "Chrissie",
      email: "csobieski2@go.com",
      age: 40,
      city: "Mercaderes",
      gender: "Female",
      inn: 7437115687,
    },
    {
      id: 4,
      name: "Adrianna",
      email: "awharrier3@hud.gov",
      age: 33,
      city: "Manuel Cavazos Lerma",
      gender: "Non-binary",
      inn: 6292774004,
    },
    {
      id: 5,
      name: "Fairlie",
      email: "feliasen4@bing.com",
      age: 34,
      city: "Радовиш",
      gender: "Female",
      inn: 5943534093,
    },
  ];

function dropDown(){
    const acc = document.getElementsByClassName("accordion-header");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    
        const accordionContent = this.nextElementSibling;
        if (accordionContent.style.maxHeight) {
          accordionContent.style.maxHeight = null;
        } else {
          accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
        }
      });
    }
    // const content = this.nextElementSibling;
    // const isHide = content.classList.contains("hide")
    // if(isHide){
    //   content.classList.replace("hide", "show");
    // } else{
    //   content.classList.replace("show", "hide");
    // }
  }

function createAccordion(accordionSelector, data) {
  //get accordion container
  const container = document.querySelector(accordionSelector);

  for (let item of data) {
    //create elements
    const title = document.createElement("h2");
    const content = document.createElement("div");
    const avatar = document.createElement("div");
    const inputs = document.createElement("div");

    //add events
    // title.onclick = dropDown;

    //add classes
    title.className = "accordion-header";
    content.className = "accordion-content hide";
    avatar.className = "avatar";
    inputs.className = "inputs";

    //insert html
    title.innerHTML = item.name;
    avatar.innerHTML = 
    `<div class="avatar">
        <input type="text" textarea="Avatar" placeholder="Avatar" />
      </div>`
    inputs.innerHTML = 
      ` <p>
          <input class="input inn" type="text" placeholder="inn" />
          <input class="input email" type="text" placeholder="email" />
        </p>
        <p>
          <input class="input name" type="text" placeholder="name" />
          <input class="input city" type="text" placeholder="city" />
        </p>
        <p>
          <input class="input age" type="text" placeholder="age" />
          <input class="input gender" type="text" placeholder="gender" />
        </p>`;

    //append to page
    content.append(avatar,inputs)
    title.append(content);
    container.appendChild(title);
  }
}

function fullInputs() {
  //add value for inputs
  const div = document.querySelector(".inputs");
  div.addEventListener("click", () => {
  inputs = document.querySelectorAll(".input");
  inputs.forEach((element, index) => {
    if (element.classList.contains("inn")) {
      element.value = `${users[index].inn}`;
    }
    if (element.classList.contains("name")) {
      element.value = `${users[index].name}`;
    }
    if (element.classList.contains("age")) {
      element.value = `${users[index].age}`;
    }
    if (element.classList.contains("email")) {
      element.value = `${users[index].email}`;
    }
    if (element.classList.contains("city")) {
      element.value = `${users[index].city}`;
    }
    if (element.classList.contains("gender")) {
      element.value =  `${users[index].gender}`;
    }
  });
});
}

createAccordion(".accordion", users);
dropDown();
fullInputs();


