function compareArrays(arr1, arr2) {
  // Проверяем совпадение длины и равенство элементов на одинаковых индексах
  return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  // 1. Фильтруем пользователей по полу
  // 2. Преобразуем массив пользователей в массив их возрастов
  // 3. Считаем среднее арифметическое через reduce (сумму делим на количество)
  // Если исходный отфильтрованный массив пустой, оператор || вернет 0
  const result = users
    .filter(user => user.gender === gender)
    .map(user => user.age)
    .reduce((acc, age, index, array) => acc + age / array.length, 0);

  return result;
}
