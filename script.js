// 登録されている馬
const horses = [];

// 馬を追加するボタン
const addHorseButton = document.getElementById("addHorseButton");

// 馬の一覧を表示する場所
const horseList = document.getElementById("horseList");

// 馬を追加
addHorseButton.addEventListener("click", function () {

    const horseName = document.getElementById("horseName").value.trim();

    if (horseName === "") {
        alert("馬名を入力してください。");
        return;
    }

    horses.push(horseName);

    document.getElementById("horseName").value = "";

    displayHorses();
});


// 登録馬を表示する
function displayHorses() {

    horseList.innerHTML = "";

    horses.forEach(function (horseName) {

        const listItem = document.createElement("li");

        listItem.textContent = horseName;

        horseList.appendChild(listItem);
    });
}
