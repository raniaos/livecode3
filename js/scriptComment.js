const commentList = localStorage.getItem("commentList")
  ? JSON.parse(localStorage.getItem("commentList"))
  : [];
renderComment();

function addComment() {
  const submitForm = document.getElementById("submitForm");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const temp = {
      id: commentList.length + 1,
      name: document.getElementById("inputNameComment").value,
      email: document.getElementById("inputEmailComment").value,
      message: document.getElementById("inputMessageComment").value,
    };
    commentList.push(temp);
    localStorage.setItem("commentList", JSON.stringify(commentList));
    renderComment();
  });
}

function renderComment() {
  const commentData = document.querySelector("#commentList");
  commentData.innerHTML = "";
  let row = "";
  commentList.forEach((value, index) => {
    row += `
    <div class="row mt-2 mb-5">
          <h3>${value.name}</h3>
          <p>${value.email}</p>
          <p>${value.message}</p>
        </div>
    `;
  });
  commentData.innerHTML = row;
}
