// Build a guest list of 10 guests and being able to replace a guest by an 11th guest if the user wants to replace a guest.

//Task 1

//Identify variable array guestlist
let guestlist = [];

//Create a for loop to get a maximum of 10 people - For loops are great because we can set a number of times the loop must run, in this case 10 
for (i = 0; i < 10; i++) {
    //Ask user input to add guest names
    let Newguest = prompt("Add the Name of guest that you want to add to the invite list and hit enter:");
    //Add guest names to the array
    guestlist.push(Newguest);
}

//User to input 11th guest name - (name to be temporarily stored under Newguest)
let Newguest = prompt("Add the Name of guest that you want to add to the invite list and hit enter:");

//Give the user an alert that they have already added 10 guests
alert("You have already added 10 people to your guest list.");

//Give the user an alert of the guest list of the first 10 guests
//Can also use the function console.log() but to follow up task 2 the user needs to see the information as an alert on the screen 
alert("You have added the below 10 guests: \n" + guestlist + "\n \n The below guest could not be added:\n" + Newguest);

//Task 2

//Prompt user if they want to replace a guest with the 11th person they have added
let YesNoAddGuest = prompt("You have already added 10 people to your guest list. \n Would you like to replace someone on the list with the last person added? \n y - Yes\n n - No");

//Use an If statement for if Yes then must replace, if No then console must output the guest list
if (YesNoAddGuest === "y") {
    //Ask the user who they want to replace
    let replaceperson = prompt("Who would you like to replace?" + guestlist);
    //Find the index position of the parson that the user wants to replace
    let IndexPositionGuest = guestlist.indexOf(replaceperson);
    //Replace the person based on index position
    guestlist[IndexPositionGuest] = Newguest
    //Display on console the new list with the replaced person
    console.log(guestlist);
}
//Display on console the original list if the user selected "n" No they do not want to replace a person
else { console.log(guestlist) }