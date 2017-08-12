'use: strict';

//create variable for tally of correct answers to be displayed at end of game
var correctAnswers = 0;
var yesArray = ['y', 'yes'];
var noArray = ['n', 'no'];
//ask user for their name and if they would like to play my guessing game
var name = prompt('Hello there! Glad you stopped by today. What\'s your name?');
var initiateGame = 'Hello ' + name + '!' + ' Would you like to get to know me a little better through my guessing game? Type "y" or "yes" for yes or "n" or "no" for no.';

var playGame = prompt(initiateGame);
console.log(initiateGame);
if (yesArray.includes(playGame.toLowerCase())) {
  console.log(playGame);
  alert('Wonderful! Let\'s play :)');

  function trueFalse() {

    //trueFalseArray order: question[0], correct answer array[1], correct response[2], incorrect response[3], nonsense response[4], incorrect answers[5]
    var trueFalseArray = [
      question1 = ['Was I born in Washington state?', noArray, 'A correct answer on the first try! Aren\'t you off to a good start?', 'Good try! But the answer is no', 'Why can\'t you follow directions?', yesArray],
      quesiton2 = ['In college did I major in chemistry?', noArray, 'Good job! You got it right!', 'Good try! But that isn\'t the right answer', 'Why can\'t you follow directions?', yesArray],
      quesiton3 = ['Did I spend five years studying German in school?', yesArray, 'High five! You got it!', 'So close! But the answer is yes', 'Why can\'t you follow directions?', noArray],
      question4 = ['Did I go to Colgate University?', yesArray, 'Well done! You\'re doing really well', 'Sorry, you missed that one', 'Why can\'t you follow directions?', noArray],
      question5 = ['Is fall my favorite season?', yesArray, 'Wow! You know me really well!', 'Awww, that\'s not the right answer :(', 'Why can\'t you follow directions?', noArray]
    ];

    //conditional to ask the true/false questions
    for (var i = 0; i < trueFalseArray.length; i++) {
      var userInput = prompt(trueFalseArray[i][0]);
      console.log(trueFalseArray[i][0]);
      console.log(userInput);

      if (trueFalseArray[i][1].includes(userInput.toLowerCase())) {
        alert(trueFalseArray[i][2]);
        correctAnswers++;
      }
      else if (trueFalseArray[i][5].includes(userInput.toLowerCase())) {
        alert(trueFalseArray[i][3]);
      }
      else
      alert(trueFalseArray[i][4]);
    }
  }
  //call trueFalse function
  trueFalse();

  //sixth question where user guesses a number; four tries
  function elementaryYears() {
    //array of responses: correst answer[0], too low[1], too high[2], nonsense[3], prompt to guess again[4], do better[5]
    var responses = ['Great guess! How did you know that...', 'Your guess is too low. ', 'That\'s too high. ', 'Is that even a number???', 'Guess again', 'Do better this time'];

    var number = prompt('Guess how many years I worked in elementary schools');

    for (var i = 0; i < 4; i++) {
      if (parseInt(number) === 2){
        alert(responses[0]);
        correctAnswers++;
        break;
      }
      else if (parseInt(number) < 2 && i < 4){
        number = prompt(responses[1] + ' ' + responses[4]);
      }
      else if (parseInt(number) > 2 && i < 4){
        number = prompt(responses[2] + ' ' + responses[4]);
      }
      else if (parseInt(number) !== 2 || i < 4){
        number = prompt(responses[3] + ' ' + responses[5]);
      }
      else {
        alert('The correct answer was 2 years.');
      }
      console.log('User A2: ' + number);
    }
  }
  //call elementaryYears function
  elementaryYears();

  //seventh question: interests!
  function interests() {
    //array of my interests
    var interestArray = ['code','bike', 'swim', 'bake', 'read', 'hike'];
    var altInterestArray = ['coding', 'biking', 'swimming', 'baking', 'reading', 'hiking'];
    //answers: accept message[0], correct response[1], incorrect response[2],
    var answersArray = ['I would have accepted', 'Great!', 'No, that\'s not one of my favorite things', 'Good try.'];

    var interest = prompt('What do you think is one of my favorite activities to do?');

    counter = 5;
    for (var i = 0; i < 6; i++){
      if (interestArray.includes(interest.toLowerCase()) || altInterestArray.includes(interest.toLowerCase())) {
        alert(answersArray[1] + ' ' + answersArray[0] + ' ' + interestArray.join(', '));
        correctAnswers++;
        break;
      }
      else if ((!interestArray.includes(interest.toLowerCase()) || !altInterestArray.includes(interest.toLowerCase())) && counter > 0) {
        alert(answersArray[2]);
        interest = prompt('Take another guess! You have ' + counter + ' guess(es) left');
        counter -= 1;
      }
      else {
        alert(answersArray[3] + ' ' + answersArray[0] + ' ' + interestArray.join(', '));
      }
      console.log('User A2: ' + interest);
    }
  }
  //call interests function
  interests();

  //display game result with personalized message for user
  var scoreMessage = 'Thanks for playing my game ' + name + '. ' + 'You got ' + correctAnswers + ' answers correct out of seven questions.';
  if (correctAnswers < 4) {
    alert(scoreMessage + ' You\'ll do better next time.');
  }
  else {
    alert(scoreMessage + ' Fantastic! Keep being awesome.');
  }
  console.log(correctAnswers + ' answers correct of seven questions');
}

else if (noArray.includes(playGame.toLowerCase())) {
  alert('That\'s too bad. Maybe another time.');
  console.log('No, you do not want to play');
}
else {
  while (!noArray.includes(playGame.toLowerCase()) && !yesArray.includes(playGame.toLowerCase())) {
    var playGame = prompt('At least write y or n, lazy!');
  }
}
