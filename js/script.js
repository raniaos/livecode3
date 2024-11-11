const achievementList = localStorage.getItem("achievementList")
  ? JSON.parse(localStorage.getItem("achievementList"))
  : [];
renderList();

function addAchievement() {
  let achievement = document.getElementById("inputAchievement").value;
  const temp = {
    id: achievementList.length + 1,
    name: achievement,
    isChecked: false,
  };

  achievementList.push(temp);

  localStorage.setItem("achievementList", JSON.stringify(achievementList));

  renderList();
}

function renderList() {
  const achievementData = document.querySelector("#achievementList");
  achievementData.innerHTML = "";
  let row = "";
  achievementList.forEach((value, index) => {
    row += `
    <div class="form-check">
        <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            ${value.isChecked ? "checked" : ""}
            onclick="checkAchievement(${index})"
        />
        <label class="form-check-label" for="flexCheckChecked">
            ${value.name}
        </label>
        <button class="btn btn-danger" onclick="deleteAchievement(${index})">X</button>
        </div>
    `;
  });
  achievementData.innerHTML = row;
}

function deleteAchievement(index) {
  achievementList.splice(index, 1);
  localStorage.setItem("achievementList", JSON.stringify(achievementList));
  renderList();
}

function checkAchievement(index) {
  achievementList[index].isChecked = !achievementList[index].isChecked;
  localStorage.setItem("achievementList", JSON.stringify(achievementList));
  renderList();
}
