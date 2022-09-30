const dateToday = Date();

function age(date) {
  const todayInMs = Date.parse(dateToday);
  const dateInMs = Date.parse(date);
  const ageInMs = todayInMs - dateInMs;
  const msInYear = 1000 * 60 * 60 * 24 * 365;
  let age = ageInMs / msInYear;
  if (date.getDate() === 29 || date.getMonth() == 1) {
    age /= 4;
    return Math.floor(age);
  } else if (age < 0) {
    return "That date is in the future!";
  } else {
    return Math.floor(age);
  }
}

const givenDate = new Date(prompt("Provide a date (YYYY-MM-DD)?"));
console.log(age(givenDate));
