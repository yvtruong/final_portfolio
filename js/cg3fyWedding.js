var guest = prompt("How many guests do you want?");
var table = prompt("How many tables do you want?");

var wholeGuests = Math.floor(guest / table);
var wholeTables = table - 1; 
var wholeTablesGuests = wholeTables * wholeGuests;
var remainingGuests = guest - (wholeTables * wholeGuests);

if (remainingGuests != "0"){
    alert("Your " + guest + " guests will be seated as follows: " + wholeTables + " tables of " + wholeGuests + ", and 1 table of " + remainingGuests);
} else {
    alert("Your " + guest + " guests will be seated as follows: " + table + " tables of " + wholeGuests);
}