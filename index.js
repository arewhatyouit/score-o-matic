// Set home and guest scores to 0
let guestscore = 0;
let homescore = 0;

//Store Element IDs
let guestscoreEl = document.getElementById("guest-score");
let homescoreEl = document.getElementById("home-score");

// Functions to add points to home or guest scores
function guestscore1() {
    guestscore += 1;
    guestscoreEl.textContent = guestscore;
}
function guestscore2() {
    guestscore += 2;
    guestscoreEl.textContent = guestscore;
}
function guestscore3() {
    guestscore += 3;
    guestscoreEl.textContent = guestscore;
}

// Functions to add points to home scores
function homescore1() {
    homescore += 1;
    homescoreEl.textContent = homescore;
}
function homescore2() {
    homescore += 2;
    homescoreEl.textContent = homescore;
}
function homescore3() {
    homescore += 3;
    homescoreEl.textContent = homescore;
};

// Function to reset the scoreboard
function resetScores() {
    homescore = 0;
    guestscore = 0;
    document.getElementById("home-score").textContent = homescore;
    document.getElementById("guest-score").textContent = guestscore;
}