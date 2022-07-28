//This program translates from English to German with a set of key words and values

// Identify variable map for the data to be added
let TranslateMap = new Map();

//Set keys and values for the map TranslateMap
TranslateMap.set("keyboard", "klaviatur");
TranslateMap.set("computer", "rechner");
TranslateMap.set("mouse", "maus");
TranslateMap.set("cellphone", "handy");
TranslateMap.set("microphone", "mikrofon");
TranslateMap.set("earphones", "kopfhorer");
TranslateMap.set("pen", "stift");
TranslateMap.set("paper", "papier");
TranslateMap.set("book", "buchen");
TranslateMap.set("learn", "lernen");

//Prompt user - ask which key word they want to translate
let TranslateWord = prompt("What word would you like to translate?")

//Create a while loop if the user entered a word that is not a key word, the user should be asked again to enter a word until a key word is entered 
while (!(TranslateMap.has(TranslateWord))) {
    TranslateWord = prompt("What word would you like to translate from English? \n Enter a word that is one of the keys example: 'cellphone'")
}

//Display on console the corresponding value of the key
console.log(TranslateMap.get(TranslateWord));
