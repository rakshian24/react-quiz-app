export const getCounterInTimeFormat = (counter) => {
  let minutes, seconds;

  minutes = parseInt(counter / 60, 10);
  seconds = parseInt(counter % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return `${minutes}:${seconds}`;
};
