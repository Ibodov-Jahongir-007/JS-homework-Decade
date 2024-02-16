let userNumber = prompt("Введите число от 1 до 12:");

if (userNumber >= 1 && userNumber <= 12) 

  if (userNumber == 1 || userNumber == 2 || userNumber == 12) {
    alert("Зима")
  } else if (userNumber >= 3 && userNumber <= 5) {
    alert("Весна")
  } else if (userNumber >= 6 && userNumber <= 8) {
    alert("Лето")
  } else {
    alert("Осень")
  } else {
    alert('The number is not undefinded')
  }