// The possible first names are: Ellen, Heather, Rick, Walter
// The possible last names are: Bartley, DeForest, Fairview, Gray
// The possible states are: Ohio, Montana, Texas, Washington
// The possible events are: anniversary, birthday, house warming, wedding
// The possible relationships are: cousin, father, friend, sister

// Solution format:
// Heather Bartley lives in Ohio and is Greg's sister. She had a birthday on Thursday.

// Determine the full name of each person he shipped a gift to, what state each lived in, what each event was, each person’s relationship to Greg, and what day of the week each event was taking place (Wednesday through Saturday).
//
// Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio. The birthday girl didn’t have her party on Friday.
// Rick’s last name wasn’t Bartley but his event was on Saturday night.
// Greg’s father wasn’t getting married, but his last name was Gray.
// The friend having a house warming didn’t live in Ohio.
// The wedding was for Greg’s cousin. Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
// Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington. The anniversary was held in Montana.

const firstNameArr = ['Ellen', 'Heather', 'Rick', 'Walter'];
const lastNameArr = ['Bartley', 'DeForest', 'Fairview', 'Gray'];
const statesArr = ['Ohio', 'Montana', 'Texas', 'Washington'];
const eventArr = ['anniversary', 'birthday', 'house warming', 'wedding'];
const relationshipsArr = ['cousin', 'father', 'friend', 'sister'];
const dayArr = ['Wednesday', 'Thursday', 'Friday', 'Saturday'];

// relationship: friend != ellen && != ohio BUT eventA: housewarming
// eventA: birthday != friday
// rick.lastName: != Bartley && eventA: = Saturday
// relationship: father != married BUT lastName: Gray
// relationship: cousin, eventA: wedding
// heather.state != Texas && eventA != Wednesday
// walter.eventA: (unknown.lastName: DeForest: eventArr[i-1]) && unknown.state: Washington: eventArr[i+1]
// anniversary.state: Montana

var ellen = {
  firstName: firstNameArr[0], // Ellen
  lastName: lastNameArr[2], // Fairview
  state: statesArr[2], // Texas
  eventA: eventArr[3], // wedding
  relationship: relationshipsArr[0], // cousin
  day: dayArr[0], // Wednesday
  gender: 'She'
};

var heather = {
  firstName: firstNameArr[1], // Heather
  lastName: lastNameArr[0], // Bartley
  state: statesArr[3], // Washington
  eventA: eventArr[1], // birthday
  relationship: relationshipsArr[3], // sister
  day: dayArr[1], // Thursday
  gender: 'She'
};

var rick = {
  firstName: firstNameArr[2], // Rick
  lastName: lastNameArr[1], // DeForest
  state: statesArr[0], // Ohio
  eventA: eventArr[2], // house warming
  relationship: relationshipsArr[2], // friend
  day: dayArr[3], // Saturday
  gender: 'He'
};

var walter = {
  firstName: firstNameArr[3], // Walter
  lastName: lastNameArr[3], // Gray
  state: statesArr[1], // Montana
  eventA: eventArr[0], // anniversary
  relationship: relationshipsArr[1], // father
  day: dayArr[2], // Friday
  gender: 'He'
};

var solutionArr = [ellen, heather, rick, walter];

for(let i = 0; i < solutionArr.length; ++i){
  var solutionStr = solutionArr[i].firstName + " " + solutionArr[i].lastName + " lives in " + solutionArr[i].state + " and is Greg's " + solutionArr[i].relationship + ". " + solutionArr[i].gender + " had a " + solutionArr[i].eventA + " on " + solutionArr[i].day + ".";
  console.log(solutionStr);
}
