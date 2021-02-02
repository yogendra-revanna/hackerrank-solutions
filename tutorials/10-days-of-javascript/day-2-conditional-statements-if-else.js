/**
 * Url: https://www.hackerrank.com/challenges/js10-if-else/problem
 * Name: Day 2: Conditional Statements: If-Else
 *
 **/

function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25) grade = "A";
  else if (score > 20) grade = "B";
  else if (score > 20) grade = "C";
  else if (score > 10) grade = "D";
  else if (score > 5) grade = "E";
  else if (score < 6) grade = "F";
  return grade;
}

console.log(getGrade(26));
