import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
const fiveDaysLaterTextElement = document.getElementById('5-days-later-output-text');
const oneMonthLaterTextElement = document.getElementById('1-month-later-output-text');
const oneMonthBeforeTextElement = document.getElementById('1-month-before-output-text');
const dayOfWeekTextElement = document.getElementById('day-of-weak-output-text');
const today = dayjs();
const fiveDaysLater = today.add(5,'days').format('MMMM D');
const oneMonthLater = today.add(30,'days').format('MMMM D');
const oneMonthBefore = today.subtract(30,'days').format('MMMM D');
fiveDaysLaterTextElement.textContent = fiveDaysLater;
oneMonthLaterTextElement.textContent = oneMonthLater;
oneMonthBeforeTextElement.textContent = oneMonthBefore;
dayOfWeekTextElement.textContent = today.format('dddd');