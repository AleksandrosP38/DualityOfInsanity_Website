// Select the container where buttons will be added
const buttonContainer = document.getElementById('buttonContainer');

// Button texts
const buttonTexts = ['Game', 'About', 'Community', 'News', 'Patch Notes', 'Requirements', 'Support'];

// Create buttons and append them to the container with line breaks
buttonTexts.forEach(text => {
    const button = document.createElement('button');
    button.textContent = text;
    buttonContainer.appendChild(button);
    
    // Add line break after each button
    const lineBreak = document.createElement('br');
    buttonContainer.appendChild(lineBreak);
});
