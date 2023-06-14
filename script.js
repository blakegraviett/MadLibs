
// variables for the user input //

const adj1 = document.getElementById("adj1");
const noun = document.getElementById("noun");
const adj2 = document.getElementById("adj2");
const cloth = document.getElementById("cloth");
const bp = document.getElementById("bp");
const verb = document.getElementById("verb");
const food = document.getElementById("food");

// variable to display mad lib //

const madLibDisplay = document.querySelector(".mad-lib");

// variable for the form //

const form = document.querySelector("form");

// variable for madlib story //

const story = 'It was a <strong>${adj1}</strong>, cold November day. I woke up to the <strong>${adj2}</strong> smell of <strong>${noun}</strong>. Then I put a <strong>${cloth}</strong> over my <strong>${bp}</strong>. I then ran <strong>${verb}</strong> to help my mom cook <strong>${food}</strong>. It was one of the best days I have ever had!'

form.addEventListener("submit", function() {
    event.preventDefault();
    if (adj1.value == "") {
        alert('adj1 must be filled out!');
        adj1.focus();
    } else if (noun.value == "") {
        alert('noun must be filled out!');
        noun.focus();
    } else if (adj2.value == "") {
        alert('adj2 must be filled out!');
        adj2.focus();
    }
    else if (cloth.value == "") {
        alert('clothing must be filled out!');
        cloth.focus();
    } else if (bp.value == "") {
        alert('body part must be filled out!');
        bp.focus();
    } else if (verb.value == "") {
        alert('verb must be filled out!');
        verb.focus();
    } else if (food.value == "") {
        alert('food must be filled out!');
        food.focus();
    } else {
        madLibStoryDisplay();
    }
});

function madLibStoryDisplay() {
    madLibDisplay.innerHTML = story
        .replace('${adj1}' , adj1.value)
        .replace('${noun}' , noun.value)
        .replace('${adj2}' , adj2.value)
        .replace('${cloth}' , cloth.value)
        .replace('${bp}' , bp.value)
        .replace('${verb}' , verb.value)
        .replace('${food}' , food.value)
}