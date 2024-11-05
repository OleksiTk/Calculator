let input = document.getElementById("display");
let currentValue = ""; // Змінна для поточного значення на екрані
let operation = null; // Операція, яка вибрана користувачем
let firstValue = null; // Перше значення перед операцією

// Додаємо обробник на всі кнопки
document.querySelectorAll(".calculator__btn button").forEach((button) => {
  button.addEventListener("click", check);
});

function check(event) {
  const value = event.target.textContent; // Отримуємо текст кнопки

  // Якщо натиснута цифра
  if (!isNaN(value)) {
    currentValue += value; // Додаємо цифру до поточного значення
    input.value = currentValue; // Оновлюємо дисплей
  }

  // Якщо натиснута операція
  else if (value === "+" || value === "-" || value === "X" || value === "/") {
    if (firstValue === null) {
      firstValue = parseFloat(currentValue); // Запам'ятовуємо перше значення
      currentValue = ""; // Очищаємо поточне значення
    }
    operation = value; // Запам'ятовуємо вибрану операцію
  }

  // Якщо натиснута кнопка "=" (рівно)
  else if (value === "=") {
    if (firstValue !== null && currentValue !== "") {
      const secondValue = parseFloat(currentValue); // Перетворюємо друге значення на число
      let result = 0;

      // Виконуємо операцію в залежності від вибору
      if (operation === "+") {
        result = firstValue + secondValue;
      } else if (operation === "-") {
        result = firstValue - secondValue;
      } else if (operation === "X") {
        result = firstValue * secondValue;
      } else if (operation === "/") {
        result = firstValue / secondValue;
      }

      // Виводимо результат і скидаємо всі змінні для нових операцій
      input.value = result;
      currentValue = result.toString();
      firstValue = null;
      operation = null;
    }
  }

  // Якщо натиснута кнопка "C" (очистити)
  else if (value === "C") {
    currentValue = "";
    firstValue = null;
    operation = null;
    input.value = "";
  }
}
