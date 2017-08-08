'use: strict';

var name = prompt('Hello there! Glad you stopped by today. What\'s your name?');
var playGame = prompt('Hello ' + name + '!' + 'Would you like to get to know me a bit better through my guessing game? Type "y" or "yes" for yes or "n" or "no" for no.').toLowerCase();
if (playGame === 'y' || playGame === 'yes') {
  alert('Wonderful! Let\'s play :)');
  var seattle = prompt('I was born in Washington state').toLowerCase();
  console.log('Q1: I was born in WA state');
  console.log('A1: false');
  if (seattle === 'y' || seattle === 'yes') {
    alert('Good try! But the answer is no');
  }
  else {
    alert('Good job! You got it right!');
  }

  var major = prompt('In college I majored in chemistry').toLowerCase();
  console.log('Q2: I majored in chemistry');
  console.log('A2: false');
  if (major === 'y' || major === 'yes') {
    alert('Good try! But that isn\'t the right answer');
  }
  else {
    alert('Good job! You got it right!');
  }

  var german = prompt('I spent five years studying German in school').toLowerCase();
  console.log('Q3: I studied German for 5 years');
  console.log('A3: true');
  if (german === 'y' || german === 'yes') {
    alert('High five! You got it!');
  }
  else {
    alert('So close! But the answer is yes');
  }

  var college = prompt('I went to Colgate University in central New York').toLowerCase();
  console.log('Q4: I went to Colgate University');
  console.log('A4: true');
  if (college === 'y' || college === 'yes') {
    alert('Well done! You\'re doing really well');
  }
  else {
    alert('Sorry, you missed that one');
  }

  var scuba = prompt('Scuba diving is one of my favorite activities').toLowerCase();
  console.log('Q5: Scuba diving is my favorite activity');
  console.log('A5: true');
  if (scuba === 'y' || scuba === 'yes') {
    alert('Wow! You know me really well!');
  }
  else {
    alert('Awww, that\'s not the right answer :(');
  }
}

else {
  alert('That\'s too bad. Maybe another time.');
}
