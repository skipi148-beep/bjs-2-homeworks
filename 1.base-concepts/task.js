"use strict";

// ==========================================
// ЗАДАЧА 1: Решение квадратных уравнений
// ==========================================

/**
 * Функция для решения квадратных уравнений
 * @param {number} a - Коэффициент при x²
 * @param {number} b - Коэффициент при x
 * @param {number} c - Свободный член
 * @returns {number[]} Массив с корнями уравнения
 */
function solveEquation(a, b, c) {
  // Вычисляем дискриминант
  const d = b ** 2 - 4 * a * c;

  // Если дискриминант меньше нуля — корней нет
  if (d < 0) {
    return [];
  }

  // Если дискриминант равен нулю — один корень
  if (d === 0) {
    const root = -b / (2 * a);
    return [root];
  }

  // Если дискриминант больше нуля — два корня
  const root1 = (-b + Math.sqrt(d)) / (2 * a);
  const root2 = (-b - Math.sqrt(d)) / (2 * a);
  return [root1, root2];
}


// ==========================================
// ЗАДАЧА 2: Калькулятор ипотеки
// ==========================================

/**
 * Расчет полной стоимости ипотеки по аннуитетной схеме
 * @param {any} percent - Процентная ставка (от 0 до 100)
 * @param {any} contribution - Сумма первоначального взноса
 * @param {any} amount - Общая сумма кредита
 * @param {any} countMonths - Срок кредита в месяцах
 * @returns {number|boolean} Общая сумма выплат или false при невалидных данных
 */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // 1. Преобразуем все аргументы в числа
  const p = Number(percent);
  const c = Number(contribution);
  const a = Number(amount);
  const m = Number(countMonths);

  // 2. Проверка на валидность чисел (если передали плохую строку, массив или объект)
  if (isNaN(p) || isNaN(c) || isNaN(a) || isNaN(m)) {
    return false;
  }

  // 3. Вычисляем тело кредита
  const loanBody = a - c;

  // Если кредит не нужен или взнос покрывает всю сумму
  if (loanBody <= 0) {
    return 0;
  }

  // 4. Переводим годовую ставку из диапазона 0-100 в месячную (0-1)
  const monthlyPercent = (p / 100) / 12;

  // 5. Расчет ежемесячного платежа строго по формуле из задания
  const monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** m) - 1)));

  // 6. Считаем общую сумму (только выплаты банку)
  const totalAmount = monthlyPayment * m;

  // 7. Округляем до двух знаков и возвращаем строго как число
  return Number(totalAmount.toFixed(2));
}


// ==========================================
// ПРОВЕРКА ОБЕИХ ЗАДАЧ (ТЕСТЫ)
// ==========================================

console.log("--- ТЕСТЫ ЗАДАЧИ 1 (Квадратные уравнения) ---");
console.log("Два корня:", solveEquation(1, -5, 6));    // Ожидается: [3, 2]
console.log("Один корень:", solveEquation(1, -4, 4));  // Ожидается: [2]
console.log("Нет корней:", solveEquation(1, 4, 5));    // Ожидается: []

console.log("\n--- ТЕСТЫ ЗАДАЧИ 2 (Калькулятор ипотеки) ---");
console.log(calculateTotalMortgage(10, 0, 50000, 12));     // Ожидается: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12));  // Ожидается: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24));     // Ожидается: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Ожидается: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Ожидается: 0
console.log(calculateTotalMortgage(10, "не число", 50000, 12)); // Ожидается: false
