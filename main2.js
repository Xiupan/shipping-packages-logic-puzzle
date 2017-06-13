// The possible first names are: Ellen, Heather, Rick, Walter
// The possible last names are: Bartley, DeForest, Fairview, Gray
// The possible states are: Ohio, Montana, Texas, Washington
// The possible events are: anniversary, birthday, house warming, wedding
// The possible relationships are: cousin, father, friend, sister

// Solution format:
// Heather Bartley lives in Ohio and is Greg's sister. She had a birthday on Thursday.

// Determine the full name of each person he shipped a gift to, what state each lived in, what each event was, each person’s relationship to Greg, and what day of the week each event was taking place (Wednesday through Saturday).

const firstNameArr = ['Ellen', 'Heather', 'Rick', 'Walter'];
const lastNameArr = ['Bartley', 'DeForest', 'Fairview', 'Gray'];
const statesArr = ['Ohio', 'Montana', 'Texas', 'Washington'];
const eventArr = ['anniversary', 'birthday', 'house warming', 'wedding'];
const relationshipsArr = ['cousin', 'father', 'friend', 'sister'];
const dayArr = ['Wednesday', 'Thursday', 'Friday', 'Saturday'];

var Person = function(firstName, lastName, state, typeOfEvent, relation, day, gender){
  this.firstName = firstName;
  this.lastName = lastName;
  this.lastNameLogic = [2,2,2,2]; // 2 is maybe, 0 is false, 1 is true
  this.state = state;
  this.stateLogic = [2,2,2,2];
  this.event = typeOfEvent;
  this.eventLogic = [2,2,2,2];
  this.relation = relation;
  this.relationLogic = [2,2,2,2];
  this.day = day;
  this.dayLogic = [2,2,2,2];
  this.gender = gender;
}

var ellen = new Person('Ellen', '', '', '', '', '', 'She');
var heather = new Person('Heather', '', '', '', '', '', 'She');
var rick = new Person('Rick', '', '', '', '', '', 'He');
var walter = new Person('Walter', '', '', '', '', '', 'He');

// TODO: fill out elimination function for the rest of ellen, heather, rick and walter
// I tried setting the if statements to Person.lastNameLogic, but that didn't seem to work.
var elimination = function(){ // elimination function works by checking if any element in the 'Logic Arrays' is 1, if so, set all other values to 0.
  for(let q = 0; q < 4; ++q){
    if(ellen.lastNameLogic[q] === 1){
      ellen.lastNameLogic.fill(0);
      ellen.lastNameLogic.splice(q,1,1);
      ellen.lastName = lastNameArr[q];
    }
    if(ellen.stateLogic[q] === 1){
      ellen.stateLogic.fill(0);
      ellen.stateLogic.splice(q,1,1);
      ellen.state = statesArr[q];
    }
  }
}

// Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
// Rick’s last name wasn’t Bartley but his event was on Saturday night.
// Greg’s father wasn’t getting married, but his last name was Gray.
// The friend having a house warming didn’t live in Ohio.
// The wedding was for Greg’s cousin. Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
// Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington. The anniversary was held in Montana.

var clue1 = function(){
  ellen.lastNameLogic = [0,0,1,0]; // Fairview
}

clue1();
elimination();

console.log(ellen, heather, rick, walter);
