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
      ellen.lastNameLogic.fill(0); // fills whole logic array with 0
      ellen.lastNameLogic.splice(q,1,1); // splices 1 back in to the array where it was
      ellen.lastName = lastNameArr[q]; // using q index, sets lastName according to the q index of lastNameArr!
      heather.lastNameLogic[q] = 0; // because this last name is now taken, it cannot be true for the others
      rick.lastNameLogic[q] = 0;
      walter.lastNameLogic[q] = 0;
    }
    if(ellen.stateLogic[q] === 1){
      ellen.stateLogic.fill(0);
      ellen.stateLogic.splice(q,1,1);
      ellen.state = statesArr[q];
      heather.stateLogic[q] = 0;
      rick.stateLogic[q] = 0;
      walter.stateLogic[q] = 0;
    }
    if(ellen.eventLogic[q] === 1){
      ellen.eventLogic.fill(0);
      ellen.eventLogic.splice(q,1,1);
      ellen.event = eventArr[q];
      heather.eventLogic[q] = 0;
      rick.eventLogic[q] = 0;
      walter.eventLogic[q] = 0;
    }
    if(ellen.relationLogic[q] === 1){
      ellen.relationLogic.fill(0);
      ellen.relationLogic.splice(q,1,1);
      ellen.relation = relationshipsArr[q];
      heather.relationLogic[q] = 0;
      rick.relationLogic[q] = 0;
      walter.relationLogic[q] = 0;
    }
    if(ellen.dayLogic[q] === 1){
      ellen.dayLogic.fill(0);
      ellen.dayLogic.splice(q,1,1);
      ellen.day = dayArr[q];
      heather.dayLogic[q] = 0;
      rick.dayLogic[q] = 0;
      walter.dayLogic[q] = 0;
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
  ellen.lastNameLogic[2] = 1; // Fairview
}

var clue2 = function(){
  rick.lastNameLogic[0] = 0; // not Bartley
  rick.dayLogic[3] = 1; // Saturday
}

var clue3 = function(){

}

var clue4 = function(){

}

var clue5 = function(){
  heather.stateLogic[2] = 0; // not Texas
  heather.relationLogic[3] = 1; // sister
  heather.eventLogic[0] = 0; // not Wednesday
}

var clue6 = function(){
  
}

clue1();
clue2();
elimination();

console.log(ellen, heather, rick, walter);
