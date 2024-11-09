const btn = document.querySelectorAll(".btn");
const submit = document.querySelector(".submit-btn");

const rating = document.querySelector(".rating-container");
const thanks = document.querySelector(".thanks-container");

var active = false;
var value = 0;

//If a button is clicked, the class "active" is added
btn.forEach(e => {
    e.addEventListener('click', () => {

        //if there is already a button with the class "active", the class is removed        
        if(active){
            btn.forEach(e => {
                e.classList.remove('active');
            });
        }

        //the class "active" is added to the button clicked
        e.classList.add('active');          
        active = true;
        value = e.value;
        console.log(value);
    });
});

//When a button is already clicked and has "active" class, the orange background-color of ".btn:hover" is overwritten by ".active-hover"
btn.forEach(e => {
    e.addEventListener('mouseover', () => {
        if(e.classList.contains('active')){
            e.classList.add('active-hover');
        }
    });
});

//When the submit button is clicked, the thanks card is shown
submit.addEventListener('click', () => {
    rating.style.display = "none"; //The rating card is hidden
    thanks.style.display = "flex"; //The thanks card is shown

    document.querySelector(".rating-number-selected").innerHTML = value;

    rating.querySelector(".rating-container").style.display = "flex"; //The rating card is shown
    thanks.querySelector(".thanks-container").style.display = "none"; //The thanks card is hidden
});

