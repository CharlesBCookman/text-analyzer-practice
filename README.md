Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Describe: boldPassage()

Test: "It should return null if no word or text is entered."
Code:
const text = "";
const word = "";
boldPassage(word, text);
Expected Output: null

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: <p>yo</p>

Describe: removeBadWords()

Test: "It should return "" if 'zoinks' is entered." 
Code:
const text = "zoinks";
removeBadWords(text);
Expected Output: ""

Test: "It should return the word if 'zoinks' is not entered" 
Code:
const text = "word";
removeBadWords(text);
Expected Output: "word"

Test: "It should remove the word 'zoinks' from a sentence"
Code:
const text = "Please remove the word zoinks";
removeBadWords(text);
Expected Output: "Please remove the word"

Test: "It should remove the words "zoinks", "muppeteer", "biffaroni", and "loopdaloop" from a sentence." 
Code:
const text = "Please remove the words zoinks muppeteer biffaroni and loopdaloop"";
removeBadWords(text);
Expected Output: "Please remove the words and"

Describe: mostCommonWords()

Test: "It should collect all of the words in a sentence."
Code:
const text = "Hi there hey yo hi hi yay yo whoa there whoa yay";
mostCommonWords(text);
Expected Output: An array of each word.

Test: It should return an array of words in a sentence without duplicates
Code:
const text = "Hi there hey yo hi hi yay yo whoa there whoa yay";
mostCommonWords(text);
Expected Output: An array of each word, without duplicates e.g., ["hi", "there", "hey", "yo", "yay", "whoa"]

Test: It should return an array of words in a sentence without duplicates and an array of the number of each word in the sentence.
Code:
const text = "Hi there hey yo hi hi yay yo whoa there whoa yay";
mostCommonWords(text);
Expected Output: An array of each word, without duplicates e.g., ["hi", "there", "hey", "yo", "yay", "whoa"] [3, 2, 1, 2, 2, 2]

Test: It should concatinate the two arrays into one array containing the word with the number of itterations.
Code:
const text = "Hi there hey yo hi hi yay yo whoa there whoa yay";
mostCommonWords(text);
Expected Output: [["hi",3], ["there",2], ["hey",1], ["yo",2], ["yay",2] ["whoa",2]