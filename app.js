'use: strict';

//ask user for their name and if they would like to play my guessing game
var name = prompt('Hello there! Glad you stopped by today. What\'s your name?');
var playGame = prompt('Hello ' + name + '!' + ' Would you like to get to know me a little better through my guessing game? Type "y" or "yes" for yes or "n" or "no" for no.').toLowerCase();
console.log('Would you like to get to know me? Enter yes or no');
if (playGame === 'y' || playGame === 'yes') {
  console.log('Yes, you would like to play my guessing game.');
  alert('Wonderful! Let\'s play :)');

//first question about whether I was born in Seattle?
  var seattle = prompt('I was born in Washington state').toLowerCase();
  console.log('Q1: I was born in WA state');
  console.log('A1: No');
  if (seattle === 'y' || seattle === 'yes') {
    alert('Good try! But the answer is no');
  }
  else if (seattle === 'n' || seattle === 'no') {
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//second question about my college major
  var major = prompt('In college I majored in chemistry').toLowerCase();
  console.log('Q2: I majored in chemistry');
  console.log('A2: No');
  if (major === 'y' || major === 'yes') {
    alert('Good try! But that isn\'t the right answer');
  }
  else if (major === 'n' || major === 'no') {
    alert('Good job! You got it right!');
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//third question about how long I studied German
  var german = prompt('I spent five years studying German in school').toLowerCase();
  console.log('Q3: I studied German for 5 years');
  console.log('A3: Yes');
  if (german === 'y' || german === 'yes') {
    alert('High five! You got it!');
  }
  else if (german === 'n' || german === 'no') {
    alert('So close! But the answer is yes');
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//fourth question about where I went to college
  var college = prompt('I went to Colgate University in central New York').toLowerCase();
  console.log('Q4: I went to Colgate University');
  console.log('A4: Yes');
  if (college === 'y' || college === 'yes') {
    alert('Well done! You\'re doing really well');
  }
  else if (college === 'n' || college === 'no'){
    alert('Sorry, you missed that one');
  }
  else {
    alert('Why can\'t you follow directions?');
  }

//fifth question about my love of scuba diving
  var scuba = prompt('Scuba diving is one of my favorite activities').toLowerCase();
  console.log('Q5: Scuba diving is my favorite activity');
  console.log('A5: Yes');
  if (scuba === 'y' || scuba === 'yes') {
    alert('Wow! You know me really well!');
  }
  else if (scuba === 'n' || scuba === 'no'){
    alert('Awww, that\'s not the right answer :(');
  }
  else {
    alert('Why can\'t you follow directions?');
  }
//sixth question where user guesses a number; four tries
  var number = prompt('Guess how many years I worked in elementary schools');
  console.log('Q6: Guess how many years I worked in elementary schools');
  console.log('A6: 2');
  var i = 0;
  for (var i = 0; i < 4; i++) {
    if (parseInt(number) === 2){
      alert('Great guess! How did you know that...');
      i = 4;
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
  }
//seventh question about
  interestArray = ['biking', 'swimming', 'baking', 'reading', 'hiking', 'coding'];
  var interest = prompt('What do you think are my favorite things to do?');
  var allInterests;
  for (var i = 0; i < interestArray.length; i++) {
    allInterests += interestArray[i] + ' ';
  }
  if (interestArray.includes(interest)) {
    alert('Well done! I would also have accepted ' + interestArray[i]);
  }
  else {
    alert('No, that\'s not one of my favorite things');
  }

//tally of correct answers
}

else {
  alert('That\'s too bad. Maybe another time.');
  console.log('No, you do not want to play');
}

//ul of work experience
//ul of personal interests
//ol of Top Ten
