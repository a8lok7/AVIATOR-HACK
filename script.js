
const correctKey = "SASUKE X JANU";
let history = [];

function validateKey() {
  const inputKey = document.getElementById("accessKey").value;
  const error = document.getElementById("error");

  if (inputKey === correctKey) {
    document.getElementById("key-panel").style.display = "none";
    document.getElementById("main-panel").style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "Invalid key!";
  }
}

function generatePrediction() {
  const crashPoint = (Math.random() * 2 + 1).toFixed(2); // 1.00x to 3.00x
  const suggestion = (parseFloat(crashPoint) - 0.15).toFixed(2);

  const output = `Crash Point: ${crashPoint}x — AI Suggests Cash Out Near: ${suggestion}x`;
  document.getElementById("predictionOutput").textContent = output;

  history.unshift(`${crashPoint}x`);
  if (history.length > 10) history.pop();

  updateHistory();
}

function updateHistory() {
  const list = document.getElementById("historyList");
  list.innerHTML = "";
  history.forEach((point, i) => {
    const li = document.createElement("li");
    li.textContent = `#${i + 1}: ${point}`;
    list.appendChild(li);
  });
}
