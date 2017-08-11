'use: strict';

//create variable for tally of correct answers to be displayed at end of game
var correctAnswers = 0;

//ask user for their name and if they would like to play my guessing game
var name = prompt('Hello there! Glad you stopped by today. What\'s your name?');

var playGame = prompt('Hello ' + name + '!' + ' Would you like to get to know me a little better through my guessing game? Type "y" or "yes" for yes or "n" or "no" for no.');
console.log('Would you like to get to know me? Enter yes or no');
if (playGame.toLowerCase() === 'y' || playGame.toLowerCase() === 'yes') {
  console.log('Yes, you would like to play my guessing game.');
  alert('Wonderful! Let\'s play :)');

  function trueFalse() {

    //trueFalseArray order: question[0], correct answer array[1], correct response[2], incorrect response[3], nonsense response[4], incorrect answers[5]
    var trueFalseArray = [
      ['Was I born in Washington state?', ['no', 'n'], 'A correct answer on the first try! Aren\'t you off to a good start?', 'Good try! But the answer is no', 'Why can\'t you follow directions?', ['yes', 'y']],
      ['In college did I major in chemistry?', ['no', 'n'], 'Good job! You got it right!', 'Good try! But that isn\'t the right answer', 'Why can\'t you follow directions?', ['yes', 'y']],
      ['Did I spend five years studying German in school?', ['yes', 'y'], 'High five! You got it!', 'So close! But the answer is yes', 'Why can\'t you follow directions?', ['no', 'n']],
      ['Did I go to Colgate University?', ['yes', 'y'], 'Well done! You\'re doing really well', 'Sorry, you missed that one', 'Why can\'t you follow directions?', ['no', 'n']],
      ['Is fall my favorite season?', ['yes', 'y'], 'Wow! You know me really well!', 'Awww, that\'s not the right answer :(', 'Why can\'t you follow directions?', ['no', 'n']]
    ];

    //conditional to ask the true/false questions
    for (var i = 0; i < trueFalseArray.length; i++) {

      var userInput = prompt(trueFalseArray[i][0]);
      console.log(trueFalseArray[i][0]);
      console.log(userInput);

      if (trueFalseArray[i][1].includes(userInput.toLowerCase())) {

        alert(trueFalseArray[i][2]);
        correctAnswers++;
        console.log('this worked');
        break;

      }else if (trueFalseArray[i][5].includes(userInput.toLowerCase())) {

        alert(trueFalseArray[i][3]);

      }else

      alert(trueFalseArray[i][4]);

    }

  }

  trueFalse();

  //sixth question where user guesses a number; four tries
  function elementaryYears() {

    //array of responses: correst answer[0], too low[1], too high[2], NaN[3], prompt to guess again[4], do better[5]
    var responses = ['Great guess! How did you know that...', 'Your guess is too low', 'That\'s too high', 'Is that even a number???', 'Guess again', 'Do better this time'];

    var number = prompt('Guess how many years I worked in elementary schools');

    for (var i = 0; i < 4; i++) {
      if (parseInt(number) === 2){
        alert(responses[0]);
        console.log('this happened');
        correctAnswers++;
        break;
      }
      else if (parseInt(number) < 2){
        alert(responses[1]);
        number = prompt(responses[4]);
      }
      else if (parseInt(number) > 2){
        alert(responses[2]);
        number = prompt(responses[4]);
      }
      else {
        alert(responses[3]);
        number = prompt(responses[5]);
      }
      console.log('User A2: ' + number);
    }
  }

  elementaryYears();

  function interests() {

    //
    var interestArray = ['code','bike', 'swim', 'bake', 'read', 'hike'];
    //answers: accept message[0], correct response[1], incorrect response[2],
    var answersArray = ['I would have accepted', 'Great!', 'No, that\'s not one of my favorite things', 'Good try.']
    var interest = prompt('What do you think is one of my favorite activities to do?');

  }

//seventh question about

  var message = ;
  var i = 0;
  while (i < interestArray.length) {
    message += interestArray[i] + ', ';
    i++;
  }
  counter = 5;
  for (var i = 0; i < 6; i++){
    if (interestArray.includes(interest.toLowerCase())) {
      alert();
      correctAnswers++;
      break;
    }
    else if (!interestArray.includes(interest.toLowerCase()) && counter !== 0) {
      alert();
      interest = prompt('Take another guess! You have ' + counter + ' guess(es) left');
      counter -= 1;
    }
    else {
      alert( + message);
    }
    console.log('User A2: ' + interest);
  }

  //display game result with personalized message for user
  scoreMessage = 'Thanks for playing my game ' + name + '. ' + 'You got ' + correctAnswers + ' answers correct out of seven questions.';
  if (correctAnswers < 4) {
    alert(scoreMessage + ' You\'ll do better next time.');
  }
  else {
    alert(scoreMessage + ' Fantastic! Keep being awesome.');
  }
  console.log(correctAnswers + ' answers correct of seven questions');
}

else {
  alert('That\'s too bad. Maybe another time.');
  console.log('No, you do not want to play');
}
