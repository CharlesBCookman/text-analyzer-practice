// Utility Logic

function isEmpty(testString) {
  return (testString.trim().length === 0);
}

// Business Logic

function wordCounter(text) {
  if (isEmpty(text)) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (isEmpty(word)) {
    return 0;
  }
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function removeBadWords(text) {
  const textArray = text.split(' ');
  let newArray = [];
  textArray.forEach(function(element) {
    if (element.toLowerCase() === "zoinks" || element.toLowerCase() === "muppeteer" || element.toLowerCase() === "biffaroni" || element.toLowerCase() === "loopdaloop") {
      //do nothing
    } else { 
      newArray.push(element);
    }
});
return newArray.join(" ");
}

function mostCommonWords(text) {
  //Created unique word array, and our counter array
  const textArray = text.split(' ');
  let newArray = [];
  let counterArray = [];
  let i = 1;
  textArray.forEach(function(element) {
    if (!newArray.includes(element.toLowerCase())){
      newArray.push(element.toLowerCase());
      counterArray.push(i);
    } else {
      counterArray[newArray.indexOf(element)] ++ ;
    }
  });

  //Combined the unique word array and counter array into an array of objects
let dictArray =[];
newArray.forEach(function(element) {
  const temp = {word:element, counter:counterArray[newArray.indexOf(element)]} 
  // dictArray.push([element, counterArray[newArray.indexOf(element)]]);
  dictArray.push(temp);
});

//Sorted our object array by numerical value
dictArray.sort((a, b) => b.counter - a.counter);
return dictArray;
}


// UI Logic

function boldPassage(word, text) {
  if (isEmpty(word) || isEmpty(text)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (word === element) {
      const bold = document.createElement("strong");
      bold.append(element);
      p.append(bold);
    } else {
      p.append(element);
    }
    if (index !== (textArray.length - 1)) {
      p.append(" ");
    }
  });
  return p;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
  let boldedPassage = boldPassage(word, passage);
  if (boldedPassage) {
    document.querySelector("div#bolded-passage").append(boldedPassage);
  } else {
    document.querySelector("div#bolded-passage").innerText = null;
  }
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});