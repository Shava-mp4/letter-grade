// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;

  // Calculate & Output Letter Grades

  document.getElementById("eng-letter").innerHTML =
    gradePercentLetter(engPercent);
  document.getElementById("soc-letter").innerHTML =
    gradePercentLetter(socPercent);
  document.getElementById("math-letter").innerHTML =
    gradePercentLetter(mathPercent);
  document.getElementById("sci-letter").innerHTML =
    gradePercentLetter(sciPercent);

  function gradePercentLetter(percent) {
    if (percent >= 80) {
      return "A";
    } else if (percent >= 65) {
      return "B";
    } else if (percent >= 55) {
      return "C";
    } else if (percent >= 50) {
      return "D";
    } else {
      return "F";
    }
  }
}
