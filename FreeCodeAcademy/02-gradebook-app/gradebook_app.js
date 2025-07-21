/*
This function takes the score and devides it by the sum equalling the average.
The sum is viewed by taking the scores and adding it to sum which is set at 0 from the beginning.
Score of Scores is a for loop that will take each score and add it to the sum.
The returned number is the average.
*/
function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}

/*
The getGrade function will take the score that is inputted and output the grade.
*/
function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

/*
The hasPassingGrade function will take the score, and if the score can run through the getGrade function and return WITHOUT an F,
then it will pass, otherwise it fails.
*/
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/*
The studentMsg function will take the totalScores and studentScore and will average everything out to determine if they passed.
If they pass the class it will return the first section of the if statement.
If they fail the class it will return the second section of the if statement.
*/
function studentMsg(totalScores, studentScore) {
  if (studentScore >= 60) {
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + studentScore + ". You passed the course."
  } else {
    return "Class average: " + getAverage(totalScores) + ". Your grade: " + studentScore + ". You failed the course."
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));