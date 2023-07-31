function updateTime() {
  const now = new Date();
  const timeElement = document.getElementById('time');
  const dateElement = document.getElementById('date');

  // Format time as HH:MM:SS AM/PM
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const amPm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${formatTwoDigits(hours % 12)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)} ${amPm}`;

  // Format date as Month Day, Year
  const month = now.toLocaleString('default', { month: 'long' });
  const day = now.getDate();
  const year = now.getFullYear();
  const formattedDate = `${month} ${day}, ${year}`;

  // Update HTML elements with time and date
  timeElement.textContent = formattedTime;
  dateElement.textContent = formattedDate;
}

function formatTwoDigits(number) {
  return number.toString().padStart(2, '0');
}

// Call updateTime function every second to update time
setInterval(updateTime, 1000);

// Initial call to display time and date on page load
updateTime();