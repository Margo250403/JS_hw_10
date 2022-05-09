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

function dropDown() {
    const acc = document.getElementsByClassName("accordion-header");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function (event) {
            this.classList.toggle("active");

            if (this.classList.contains('active')) {
                fullInputs(event.target, i)
            }
        });
    }
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
          <input class="input name" type="text" placeholder="name" />
          <input class="input age" type="text" placeholder="age" />
        </p>
        <p>
          <input class="input email" type="text" placeholder="email" />
          <input class="input city" type="text" placeholder="city" />
          <input class="input gender" type="text" placeholder="gender" />
        </p>`;

        //append to page
        content.append(avatar, inputs)
        title.append(content);
        container.appendChild(title);
    }
}

function fullInputs(target, index) {
    //add value for inputs
    const inputs = target.querySelectorAll('.input');
    inputs.forEach((element) => {
        if (element.classList.contains("inn")) {
            element.value = `inn: ${users[index].inn}`;
        }
        if (element.classList.contains("name")) {
            element.value = `name: ${users[index].name}`;
        }
        if (element.classList.contains("age")) {
            element.value = `age: ${users[index].age}`;
        }
        if (element.classList.contains("email")) {
            element.value = `email: ${users[index].email}`;
        }
        if (element.classList.contains("city")) {
            element.value = `city: ${users[index].city}`;
        }
        if (element.classList.contains("gender")) {
            element.value = `gender: ${users[index].gender}`;
        }
    });
}

createAccordion(".accordion", users);
dropDown();


