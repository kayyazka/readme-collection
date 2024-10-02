// Map of aliases to their corresponding README URLs
const readmeFiles = {
    "My First README": 'https://github.com/kayyazka/readme-collection/blob/main/README1.md',
    "My Second README": 'https://github.com/kayyazka/readme-collection/blob/main/README2.md',
    "My Third README": 'https://github.com/kayyazka/readme-collection/blob/main/README3.md'
}; // Add more aliases and file URLs here

const buttonList = document.getElementById('buttonList');

// Function to handle button click and redirect
function handleButtonClick(url) {
    // Redirect to the specified URL
    window.location.href = url; // Redirect to the README URL
}

// Function to dynamically generate buttons listed down
function createButtons() {
    Object.entries(readmeFiles).forEach(([alias, url]) => {
        const button = document.createElement('button');
        button.innerHTML = `<i class="fas fa-book"></i> ${alias}`; // Use the alias for button text
        button.addEventListener('click', () => handleButtonClick(url)); // Add click event
        buttonList.appendChild(button); // Append the button to the list
    });
}

// Call the function to generate buttons on page load
createButtons();
