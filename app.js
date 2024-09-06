window.addEventListener("load", solve);

function solve() {
  let nameGetEl = document.getElementById("name");
  let emailGetEl = document.getElementById("email");
  let contactnumberGetEl = document.getElementById("contact-number");
  let classtypeGetEl = document.getElementById("class-type");
  let classtimeGetEl = document.getElementById("class-time");
  //id main Parent
  let mainIdGetEl = document.getElementById("main");

  //body ele Parent
  let bodyGetEl = document.getElementById("body");

  let nextbtnGetEl = document.getElementById("next-btn");
  //class-info parrent
  let classinfoGetEl = document.getElementsByClassName("class-info")[0];
  //confirm-class Parent
  let confirmclassGetEl = document.getElementsByClassName("confirm-class")[0];
  nextbtnGetEl.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      nameGetEl.value == "" ||
      emailGetEl.value == "" ||
      contactnumberGetEl.value == "" ||
      classtypeGetEl.value == "" ||
      classtimeGetEl.value == ""
    ) {
      return;
    }
    let name = nameGetEl.value;
    let email = emailGetEl.value;
    let contactnumber = contactnumberGetEl.value;
    let classType = classtypeGetEl.value;
    let classTime = classtimeGetEl.value;

    let liCreateEl = document.createElement("li");
    liCreateEl.classList.add("info-item");
    let articleCreateEl = document.createElement("article");
    articleCreateEl.classList.add("personal-info");
    let p1CreateEl = document.createElement("p");
    p1CreateEl.textContent = `${name}`;
    let p2CreateEl = document.createElement("p");
    p2CreateEl.textContent = `${email}`;
    let p3CreateEl = document.createElement("p");
    p3CreateEl.textContent = `${contactnumber}`;
    let p4CreateEl = document.createElement("p");
    p4CreateEl.textContent = `${classType}`;
    let p5CreateEl = document.createElement("p");
    p5CreateEl.textContent = `${classTime}`;

    let editButtonCreateEl = document.createElement("button");
    editButtonCreateEl.textContent = "Edit";
    editButtonCreateEl.classList.add("edit-btn");

    let continueButtonCreateEl = document.createElement("button");
    continueButtonCreateEl.textContent = "Continue";
    continueButtonCreateEl.classList.add("continue-btn");

    classinfoGetEl.appendChild(liCreateEl);
    liCreateEl.appendChild(articleCreateEl);
    articleCreateEl.appendChild(p1CreateEl);
    articleCreateEl.appendChild(p2CreateEl);
    articleCreateEl.appendChild(p3CreateEl);
    articleCreateEl.appendChild(p4CreateEl);
    articleCreateEl.appendChild(p5CreateEl);
    liCreateEl.appendChild(editButtonCreateEl);
    liCreateEl.appendChild(continueButtonCreateEl);

    nameGetEl.value = "";
    emailGetEl.value = "";
    contactnumberGetEl.value = "";
    classtypeGetEl.value = "";
    classtimeGetEl.value = "";
    nextbtnGetEl.disabled = true;
    //
    editButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();

      nameGetEl.value = name;
      emailGetEl.value = email;
      contactnumberGetEl.value = contactnumber;
      classtypeGetEl.value = classType;
      classtimeGetEl.value = classTime;
      nextbtnGetEl.disabled = false;
      liCreateEl.remove();
    });
    //
    continueButtonCreateEl.addEventListener("click", (e) => {
      e.preventDefault();
      confirmclassGetEl.appendChild(liCreateEl);
      editButtonCreateEl.remove();
      continueButtonCreateEl.remove();

      let cancelButtonCreateEl = document.createElement("button");
      cancelButtonCreateEl.textContent = "Cancel";
      cancelButtonCreateEl.classList.add("cancel-btn");

      let confirmButtonCreateEl = document.createElement("button");
      confirmButtonCreateEl.textContent = "Confirm";
      confirmButtonCreateEl.classList.add("confirm-btn");

      liCreateEl.appendChild(cancelButtonCreateEl);
      liCreateEl.appendChild(confirmButtonCreateEl);

      cancelButtonCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        liCreateEl.remove();
        nextbtnGetEl.disabled = false;
      });
      confirmButtonCreateEl.addEventListener("click", (e) => {
        e.preventDefault();
        mainIdGetEl.remove();

        let h1CreateEl = document.createElement("h1");
        h1CreateEl.setAttribute("id", "thank-you");
        h1CreateEl.textContent =
          "Thank you for scheduling your appointment, we look forward to seeing you!";
        let doneButtonCreateEl = document.createElement("button");
        doneButtonCreateEl.textContent = "Done";
        doneButtonCreateEl.setAttribute("id", "done-btn");

        bodyGetEl.appendChild(h1CreateEl);
        bodyGetEl.appendChild(doneButtonCreateEl);

        doneButtonCreateEl.addEventListener("click", (e) => {
          e.preventDefault();

          location.reload(true);
        });
      });
    });
  });
}
