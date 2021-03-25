
const nameInput = document.getElementById('name');
const inputButton = document.getElementById('input');
const nameDisplay = document.getElementById('name-display');
    inputButton.addEventListener('click', () => {
        nameDisplay.textContent = nameInput.value
});

const pronouns = document.getElementById('pronouns');
const pnnBtn = document.getElementById('pnns');
const pnnDisplay = document.getElementById('pnn-display');
    pnnBtn.addEventListener('click', () => {
        pnnDisplay.textContent = pronouns.value
     }); 

// // // button colors
// const pinkButton = document.getElementById('pinkButton');
//      pinkButton.addEventListener('click', () => {
//         header.style.backgroundColor = 'pink';
//         footer.styles.backgroundColor = 'pink';
//     });
// const greenButton = document.getElementById('greenButton');
//     greenButton.addEventListener('click', () => {
//         header.styles.backgroundColor = 'green';
//         footer.styles.backgroundColor = 'green';
//     });
// const blueButton = document.getElementById('blueButton');
//     blueButton.addEventListener('click', () => {
//         header.styles.backgroundColor = 'blue';
//         footer.styles.backgroundColor = 'blue';
//     });
