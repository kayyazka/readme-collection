const readmeFiles = ['README1.md', 'README2.md', 'README3.md']; // Add more files here
const buttonList = document.getElementById('buttonList');

// Function to handle button click and redirect
function handleButtonClick(fileName) {
    // Redirect to the path of the README file
    window.location.href = fileName; // Redirect to the specified README path
}

// Function to dynamically generate buttons listed down
function createButtons() {
    readmeFiles.forEach(file => {
        const button = document.createElement('button');
        button.innerHTML = `<i class="fas fa-book"></i> View ${file}`; // Adding the book icon
        button.addEventListener('click', () => handleButtonClick(file)); // Change here
        buttonList.appendChild(button); // Append the button to the list (in vertical order)
    });
}

// Call the function to generate buttons on page load
createButtons();
