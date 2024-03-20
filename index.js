const button1 = document.querySelector("#추가");
const input1 = document.querySelector("#입력");
const todos = document.querySelector("#일");

button1.addEventListener("click", () => {
  const value1 = input1.value;
  const p1 = document.createElement("p");
  p1.innerText = value1;
  todos.appendChild(p1);
});
