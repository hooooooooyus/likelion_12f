const button = document.querySelector("#추가하기");
const input = document.querySelector("#입력창");
const todos = document.querySelector("#할일들");

button.addEventListener("click", () => {
  const value = input.value;
  const p = document.createElement("p");
  p.innerText = value;
  todos.appendChild(p);
  input.value = "";

  p.addEventListener("click", () => {
    if (p.className !== "done") {
      p.className = "done";
    } else {
      p.className = "";
    }
  });
});
