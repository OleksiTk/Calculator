let input = document.getElementById("display");

document.querySelectorAll(".calculator__btn button").forEach((button) => {
  button.addEventListener("click", check);
});
let rusL = [];
function check(event) {
  const value0 = event.target.textContent; // Отримуємо текст кнопки
  // Виведе: "7", "8" або "9" в залежності від натиснутої кнопки
  // Тут ви можете виконати будь-які дії з отриманим значенням
  input.value = value0;
  let ansew;
  function result() {
    let prop = input.value;
    rusL.push(prop);

    if (rusL[1] == "-") {
      ansew = rusL[0] - rusL[2];
    } else if (rusL[1] == "+") {
      ansew = +rusL[0] + +rusL[2];
    } else if (rusL[1] == "*") {
      ansew = rusL[0] * rusL[2];
    } else if (rusL[1] == "/") {
      ansew = rusL[0] / rusL[2];
    }
    if (rusL.length === 3) {
      input.value = ansew;
    }
    if (rusL.length === 3) {
      rusL = [];
    }
    console.log(ansew);
  }
  result();
}
