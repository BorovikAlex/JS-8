const CAT_IMG = "https://api.thecatapi.com/v1/images/search";
const DOG_IMG = "https://api.thedogapi.com/v1/images/search";

document.getElementById("catsBtn").addEventListener("click", () => {
  addPictureCat(CAT_IMG);
});

document.getElementById("dogsBtn").addEventListener("click", () => {
  addPictureDog(DOG_IMG);
});

function loading() {
  document.getElementById("imgPosition").innerHTML = `<div id="floatingBarsG">
	<div class="blockG" id="rotateG_01"></div>
	<div class="blockG" id="rotateG_02"></div>
	<div class="blockG" id="rotateG_03"></div>
	<div class="blockG" id="rotateG_04"></div>
	<div class="blockG" id="rotateG_05"></div>
	<div class="blockG" id="rotateG_06"></div>
	<div class="blockG" id="rotateG_07"></div>
	<div class="blockG" id="rotateG_08"></div>
</div>`;
}

function addPictureCat(url) {
  loading();
  fetch(url).then((response) => {
    response.json().then((data) => {
      let strucktCat = document.getElementById("imgPosition");
      let img = document.createElement("img");
      img.src = data[0].url;
      img.alt = "cat";

      img.onload = () => {
        strucktCat.innerHTML = "";
        strucktCat.appendChild(img);
        if (data[0].breeds.length !== 0) {
          document.getElementById(
            "poroda"
          ).innerHTML = `<span class="spanCat">Порода: </span>${data[0].breeds[0].name}`;
          document.getElementById(
            "lifeWeight"
          ).innerHTML = `<span class="spanCat">Продолжнительность жизни: </span>${data[0].breeds[0].life_span} лет`;
        } else {
          document.getElementById(
            "poroda"
          ).innerHTML = `<span class="spanCat">Порода: </span>Нет информации`;
          document.getElementById(
            "lifeWeight"
          ).innerHTML = `<span class="spanCat">Продолжнительность жизни: </span>Нет информации`;
        }
      };
    });
  });
}

function addPictureDog(url) {
  loading();
  fetch(DOG_IMG).then((response) => {
    response.json().then((data) => {
      let strucktDog = document.getElementById("imgPosition");
      let img = document.createElement("img");
      img.src = data[0].url;
      img.alt = "dog";

      img.onload = () => {
        strucktDog.innerHTML = "";
        strucktDog.appendChild(img);
        if (data[0].breeds.length !== 0) {
          document.getElementById(
            "poroda"
          ).innerHTML = `<span class="spanDog">Порода: </span>${data[0].breeds[0].name}`;
          document.getElementById(
            "lifeWeight"
          ).innerHTML = `<span class="spanDog">Вес: </span>${data[0].breeds[0].weight.metric} кг`;
        } else {
          document.getElementById(
            "poroda"
          ).innerHTML = `<span class="spanDog">Порода: </span>Нет информации`;
          document.getElementById(
            "lifeWeight"
          ).innerHTML = `<span class="spanDog">Вес: </span>Нет информации`;
        }
      };
    });
  });
}
