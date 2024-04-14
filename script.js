

document.getElementById("incomeForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    var grossIncome = parseFloat(document.getElementById("grossIncome").value);
    var extraIncome = parseFloat(document.getElementById("extraIncome").value);
    var age = parseInt(document.getElementById("age").value);
    var deductions = parseFloat(document.getElementById("deductions").value);
  
    if (
      isNaN(grossIncome) ||
      isNaN(extraIncome) ||
      isNaN(age) ||
      isNaN(deductions)
    ) {
      alert("Please enter valid input for all fields.");
      return;
    }
  
    var overallIncome = grossIncome + extraIncome - deductions;
    var originalIncome;
  
    if (overallIncome < 800000) {
      originalIncome = overallIncome;
    } else if (age < 40) {
      originalIncome = overallIncome - 0.3 * (overallIncome - 800000);
    } else if (age >= 40 && age <= 60) {
      originalIncome = overallIncome - 0.4 * (overallIncome - 800000);
    } else {
      originalIncome = overallIncome - 0.1 * (overallIncome - 800000);
    }
  
    var dialog = document.getElementById("dialog");
    var incomeResult = document.getElementById("incomeResult");
    incomeResult.textContent = originalIncome;
    dialog.style.display = "block";
  });
  
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("dialog").style.display = "none";
  });
  