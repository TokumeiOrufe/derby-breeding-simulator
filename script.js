// 登録されている馬
const horses = [];

// 馬を追加するボタン
const addHorseButton = document.getElementById("addHorseButton");

// 馬の一覧を表示する場所
const horseList = document.getElementById("horseList");

// 馬を追加
addHorseButton.addEventListener("click", function () {

    const horseName = document.getElementById("horseName").value.trim();
    const fatherName = document.getElementById("fatherName").value.trim();
    const motherName = document.getElementById("motherName").value.trim();

    // 馬名が入力されていない場合
    if (horseName === "") {
        alert("馬名を入力してください。");
        return;
    }

    // 馬を登録
    horses.push({
        name: horseName,
        father: fatherName,
        mother: motherName
    });

    // 入力欄を空にする
    document.getElementById("horseName").value = "";
    document.getElementById("fatherName").value = "";
    document.getElementById("motherName").value = "";

    // 一覧を更新
    displayHorses();
});


// 登録馬を表示する
function displayHorses() {

    horseList.innerHTML = "";

    horses.forEach(function (horse) {

        const listItem = document.createElement("li");

        listItem.innerHTML =
            "<strong>" + horse.name + "</strong>" +
            "<br>父：" + (horse.father || "未登録") +
            "<br>母：" + (horse.mother || "未登録");

        horseList.appendChild(listItem);
    });
}
