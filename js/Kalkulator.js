function hitungLuasKeliling() {
  const sideLength = parseFloat(document.getElementById("sideLength").value);

  if (isNaN(sideLength) || sideLength <= 0) {
      alert("Masukkan panjang sisi yang valid.");
      return;
  }

  const luas = sideLength * sideLength;
  const keliling = 4 * sideLength;

  document.getElementById("luasResult").innerText = luas.toFixed(2);
  document.getElementById("kelilingResult").innerText = keliling.toFixed(2);

  const luasCalculation = `Luas = S x S\nLuas = (${sideLength}) x (${sideLength})\nLuas = ${luas.toFixed(2)}`;
  document.getElementById("luasCalculation").innerText = luasCalculation;

  const kelilingCalculation = `Keliling = 4 x S\nKeliling = 4 x (${sideLength})\nKeliling = ${keliling.toFixed(2)}`;
  document.getElementById("kelilingCalculation").innerText = kelilingCalculation;

  document.getElementById("resultContainer").style.display = "block";
}

function resetForm() {
  document.getElementById("sideLength").value = "";

  document.getElementById("resultContainer").style.display = "none";

  document.getElementById("luasResult").innerText = "";
  document.getElementById("kelilingResult").innerText = "";
  document.getElementById("luasCalculation").innerText = "";
  document.getElementById("kelilingCalculation").innerText = "";
}
