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

//first question about whether I was born in Seattle?
  // var seattle = prompt();
  // console.log('Q1: Was I born in WA state?');
  // console.log('User A1: ' + seattle);
  // console.log('Correct A1: No');
  // if (seattle.toLowerCase() === 'y' || seattle.toLowerCase() === 'yes') {
  //   alert();
  // }
  // else if (seattle.toLowerCase() === 'n' || seattle.toLowerCase() === 'no') {
  //   alert();
  //   correctAnswers++;
  // }
  // else {
  //   alert();
  // }

//second question about my college major
  // var major = prompt();
  // console.log('Q2: Did I major in chemistry?');
  // console.log('User A2: ' + major);
  // console.log('Correct A2: No');
  // if (major.toLowerCase() === 'y' || major.toLowerCase() === 'yes') {
  //   alert();
  // }
  // else if (major.toLowerCase() === 'n' || major.toLowerCase() === 'no') {
  //   alert();
  //   correctAnswers++;
  // }
  // else {
  //   alert('Why can\'t you follow directions?');
  // }

//third question about how long I studied German
  // var german = prompt();
  // console.log('Q3: Did I study German for 5 years?');
  // console.log('User A3: ' + german);
  // console.log('Correct A3: Yes');
  // if (german.toLowerCase() === 'y' || german.toLowerCase() === 'yes') {
  //   alert();
  //   correctAnswers++;
  // }
  // else if (german.toLowerCase() === 'n' || german.toLowerCase() === 'no') {
  //   alert();
  // }
  // else {
  //   alert('Why can\'t you follow directions?');
  // }

//fourth question about where I went to college
  // var college = prompt();
  // console.log('Q4: Did I go to Colgate University?');
  // console.log('User A4: ' + college);
  // console.log('Correct A4: Yes');
  // if (college.toLowerCase() === 'y' || college.toLowerCase() === 'yes') {
  //   alert();
  //   correctAnswers++;
  // }
  // else if (college.toLowerCase() === 'n' || college.toLowerCase() === 'no'){
  //   alert();
  // }
  // else {
  //   alert('Why can\'t you follow directions?');
  // }

//fifth question about my love of scuba diving
  // var season = prompt();
  // console.log('Q5: Is fall my favorite season?');
  // console.log('User A5: ' + season);
  // console.log('Correct A5: Yes');
  // if (season.toLowerCase() === 'y' || season.toLowerCase() === 'yes') {
  //   alert();
  //   correctAnswers++;
  // }
  // else if (season.toLowerCase() === 'n' || season.toLowerCase() === 'no'){
  //   alert();
  // }
  // else {
  //   alert('Why can\'t you follow directions?');
  // }

//sixth question where user guesses a number; four tries
  var number = prompt('Guess how many years I worked in elementary schools');
  console.log('Q6: Guess how many years I worked in elementary schools');
  console.log('Correct A6: 2');
  var i = 0;
  for (var i = 0; i < 4; i++) {
    if (parseInt(number) === 2){
      alert('Great guess! How did you know that...');
      correctAnswers++;
      break;
    }
    else if (parseInt(number) < 2){
      alert('You\'re guess is too low');
      number = prompt('Guess again');
    }
    else if (parseInt(number) > 2){
      alert('That\'s too high');
      number = prompt('Guess again');
    }
    else {
      alert('Is that even a number???');
      number = prompt('Do better this time');
    }
    console.log('User A2: ' + number);
  }

//seventh question about
  interestArray = ['code','bike', 'swim', 'bake', 'read', 'hike'];
  var interest = prompt('What do you think is one of my favorite activities to do?');
  var allInterests;
  var message = 'I would have accepted ';
  var i = 0;
  while (i < interestArray.length) {
    message += interestArray[i] + ', ';
    i++;
  }
  counter = 5;
  for (var i = 0; i < 6; i++){
    if (interestArray.includes(interest.toLowerCase())) {
      alert('Great!' + message + interestArray[5]);
      correctAnswers++;
      break;
    }
    else if (!interestArray.includes(interest.toLowerCase()) && counter !== 0) {
      alert('No, that\'s not one of my favorite things');
      interest = prompt('Take another guess! You have ' + counter + ' guess(es) left');
      counter -= 1;
    }
    else {
      alert('Good try. ' + message);
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
