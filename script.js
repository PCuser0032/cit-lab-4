let div = document.createElement("div");
div.className = "text-center fs-1";
div.innerHTML = "Идет загрузка...";
document.body.prepend(div);
setTimeout(() => div.remove(), 1000);

function start(a) {
  return document.createElement(a);
}

function end(b, a) {
  return b.appendChild(a);
}

const divPeople = document.getElementById("people");
const url = "https://randomuser.me/api/?results=10";

fetch(url)
  .then((response) => response.json())
  .then(function (data) {
    let people = data.results;
    return people.map(function (people) {
      let img = start("img");
      let divCard = start("div");
      divCard.className = "card mt-4";
      let divCardBody = start("div");
      divCardBody.className = "card-body";
      let divRow = start("div");
      divRow.className = "row justify-content-between";
      let divGender = start("div");
      divGender.className = "col-auto";
      let divName = start("div");
      divName.className = "col-auto";
      let divAddress = start("div");
      divAddress.className = "col-auto";
      let divEmail = start("div");
      divEmail.className = "col-auto";
      let divBirthDate = start("div");
      divBirthDate.className = "col-auto"; //auto
      let divPhone = start("div");
      divPhone.className = "col-auto";
      let divImg = start("div");
      divImg.className = "col-auto"; //auto
      divGender.innerHTML = `${people.gender}`;
      divName.innerHTML = `${people.name.first}<br>${people.name.last}`;
      divAddress.innerHTML = `${people.location.city}`;
      divEmail.innerHTML = `${people.email}`;
      let iDate = people.dob.date.split("T")[0];
      divBirthDate.innerHTML = `${iDate}<br>Age:${people.dob.age}`;
      divPhone.innerHTML = `${people.phone}`;
      divImg.innerHTML = ``;
      img.src = people.picture.medium;

      end(divCard, divCardBody);
      end(divCardBody, divRow);
      end(divRow, divGender);
      end(divRow, divName);
      end(divRow, divAddress);
      end(divRow, divEmail);
      end(divRow, divBirthDate);
      end(divRow, divPhone);
      end(divRow, divImg);
      end(divImg, img);
      end(divPeople, divCard);
    });
  })

  .catch(function (error) {
    console.log(error);
  });
