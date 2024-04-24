// Select the container where buttons will be added
const buttonContainer = document.getElementById('buttonContainer');

// Button texts and corresponding box texts
const buttonBoxTexts = {
    'Game': `The game takes place in a bunker, in first person. The character is trapped in this location for initially unknown reasons and for an undetermined amount of time, but enough to sometimes drive him crazy. Your objective is to escape this bunker without reaching total insanity, using the items and information at your disposal that vary according to the character's two psychological states: normal state and state of madness.`,
    'About': `The game introduces a non-standard way of solving puzzles, in which you need to explore the bunker between two psychological states with different items and information.
    The game vision is innovative and more immersive not only for the genre but in general in current video games. The game is made to be played with a keyboard and mouse on PC.`,
    'Community': 'Join our vibrant community and engage with other members.',
    'News': 'Stay updated with the latest news and announcements.',
    'Patch Notes': 'Check out the latest patch notes and updates for our products.',
    'Requirements': 'Learn about the system requirements for our games and applications.',
    'Support': 'Need help? Get in touch with our support team for assistance.'
};

// Initialize the currently displayed box text
let currentBoxText = '';

// Create buttons and append them to the container with line breaks
Object.keys(buttonBoxTexts).forEach(text => {
    const button = document.createElement('button');
    button.textContent = text;
    buttonContainer.appendChild(button);
    
    // Add line break after each button
    const lineBreak = document.createElement('br');
    buttonContainer.appendChild(lineBreak);
    
    // Add event listener to each button
    button.addEventListener('click', () => {
        // Check if the clicked button text is different from the current box text
        if (buttonBoxTexts[text] !== currentBoxText) {
            // Remove any existing boxes
            document.querySelectorAll('.dynamic-box').forEach(box => box.remove());
            
            // Create a new dark box for the center
            const newDarkBox = document.createElement('div');
            newDarkBox.classList.add('dark-box', 'dynamic-box');
            newDarkBox.style.width = '50%'; // Adjust the width as per your preference
            newDarkBox.style.height = '50%'; // Adjust the height as per your preference
            newDarkBox.style.top = '25%'; // Position in the vertical center
            newDarkBox.style.left = '25%'; // Position in the horizontal center
            newDarkBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; // Semi-transparent black background
            newDarkBox.style.zIndex = '2'; // Ensure the dark box is in front
            newDarkBox.style.color = 'white'; // Set text color to white
            newDarkBox.style.display = 'flex'; // Use flexbox for centering
            newDarkBox.style.alignItems = 'center'; // Center vertically
            newDarkBox.style.justifyContent = 'center'; // Center horizontally
            newDarkBox.style.position = 'fixed'; // Fix the position relative to the viewport
            newDarkBox.style.padding = '20px'; // Add padding for better readability

            // Create a button to close the box
            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '10px';
            closeButton.style.left = '10px';
            closeButton.style.background = 'transparent';
            closeButton.style.border = 'none';
            closeButton.style.color = 'white';
            closeButton.style.fontSize = '24px';
            closeButton.style.cursor = 'pointer';
            closeButton.addEventListener('click', () => {
                newDarkBox.remove(); // Remove the dark box when the close button is clicked
                currentBoxText = ''; // Reset the current box text
            });
            newDarkBox.appendChild(closeButton); // Append the close button to the dark box

            // Create a text container for the new dark box
            const newTextContainer = document.createElement('div');
            newTextContainer.classList.add('text-container');

            // Add the corresponding text to the new text container
            const newText = document.createElement('p');
            newText.textContent = buttonBoxTexts[text];
            newText.style.textAlign = 'center'; // Center the text horizontally
            newText.style.fontSize = '32px'; // Increase font size

            // Append the new text to the new text container
            newTextContainer.appendChild(newText);

            // Append the new text container to the new dark box
            newDarkBox.appendChild(newTextContainer);

            // Append the new dark box to the body
            document.body.appendChild(newDarkBox);

            // Update the current box text
            currentBoxText = buttonBoxTexts[text];
        }
    });
});
