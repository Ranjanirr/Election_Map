var prevState = 0;
var createPolitician = function(name, partyColor)
{
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  politician.countResults = function(){
  for (var i = 0; i<this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }

   };
  return politician
  
};
var setStateResults = function(state)
{
  theStates[prevState].rgbColor = [175,175,175];
  theStates[state].winner = null;
  if (olivia.electionResults[state]>bella.electionResults[state]){
    theStates[state].winner = olivia;
  }
  else if (bella.electionResults[state]>olivia.electionResults[state]){
    theStates[state].winner = bella;
  }
  if (theStates[state].winner != null){
    theStates[state].rgbColor = theStates[state].winner.partyColor;
  }
  else{
    theStates[state].rgbColor = [11, 32, 57];
  }
  prevState = state;
  var stateInfoTable = document.getElementById('stateResults');
  var header = stateInfoTable.children[0].children[0];
  header.children[0].innerText = theStates[state].nameFull;
  header.children[1].innerText = theStates[state].nameAbbrev;
  var oliviaData = stateInfoTable.children[1].children[0];
  var bellaData = stateInfoTable.children[1].children[1];
  var winnerData = stateInfoTable.children[1].children[2];
  oliviaData.children[0].innerText = "Olivia";
  oliviaData.children[1].innerText = olivia.electionResults[state];
  bellaData.children[0].innerText = "Bella";
  bellaData.children[1].innerText = bella.electionResults[state];
  winnerData.children[0].innerText = "WINNER";
  if(olivia.electionResults[state]>bella.electionResults[state]){
     winnerData.children[1].innerText = "Olivia"; 
  }
  else{
     winnerData.children[1].innerText = "Bella"; 
  }
  
 
  
  
};
var olivia = createPolitician("Olivia", [132, 17, 11]);
var bella = createPolitician("Bella", [245, 141, 136]);
olivia.electionResults = [5,1,7, 33, 6,4,2,1,14,8, 3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
bella.electionResults =  [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];
olivia.electionResults[9] = 1;
bella.electionResults[9] = 28;
olivia.electionResults[4] = 17;
bella.electionResults[4] = 38;

olivia.countResults();
bella.countResults();
var results = document.getElementById('countryResults');
results.children[0].children[0].children[0].innerText = "Olivia";
results.children[0].children[0].children[1].innerText = olivia.totalVotes;
results.children[0].children[0].children[2].innerText = "Bella";
results.children[0].children[0].children[3].innerText = bella.totalVotes;
if (olivia.totalVotes>bella.totalVotes){
  results.children[0].children[0].children[5].innerText = "Olivia";
}
else{
  results.children[0].children[0].children[5].innerText = "Bella";
}


/**
WASTE OF SPACE

**/