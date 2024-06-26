const buttonContainer = document.getElementById('buttonContainer');
const centerText = document.getElementById('centerText');
const backgroundImage = document.getElementById('backgroundImage');

// Function to hide the center text
function hideCenterText() {
    centerText.style.display = 'none';
}

// Function to show the center text
function showCenterText() {
    centerText.style.display = 'block';
}

// Function to toggle background images
function toggleBackgroundImage() {
    if (backgroundImage.src.includes('ImageLight.png')) {
        backgroundImage.src = 'images/ImageDark.png';
    } else {
        backgroundImage.src = 'images/ImageLight.png';
    }
}

const buttonBoxData = {
    'Game': {
        text: `The game takes place in a bunker, in first person. The character is trapped in this location for initially unknown reasons and for an undetermined amount of time, but enough to sometimes drive him crazy. Your objective is to escape this bunker without reaching total insanity, using the items and information at your disposal that vary according to the character's two psychological states: normal state and state of madness.`,
    },
    'About': {
        text: `The game introduces a non-standard way of solving puzzles, in which you need to explore the bunker between two psychological states with different items and information. The game vision is innovative and more immersive not only for the genre but in general in current video games. The game is made to be played with a keyboard and mouse on PC.`,
    },
    'Community': {
        text: 'Join our vibrant community and engage with other members.',
    },
    'News': {
        text: 'Stay updated with the latest news and announcements.',
    },
    'Patch Notes': {
        text: 'Check out the latest patch notes and updates for our products.',
    },
    'Requirements': {
        text: 'Learn about the system requirements for our games and applications.',
    },
    'Support': {
        text: 'Need help? Get in touch with our support team for assistance.',
    }
};

let currentBoxText = '';

Object.keys(buttonBoxData).forEach(text => {
    const button = document.createElement('button');
    button.classList.add('button-with-image');
    button.id = 'tapeImage';  // Add the ID for the Tape background

    const buttonText = document.createElement('span');
    buttonText.classList.add('button-text');
    buttonText.textContent = text;

    button.appendChild(buttonText);
    buttonContainer.appendChild(button);

    button.addEventListener('click', () => {
        hideCenterText();

        if (buttonBoxData[text].text !== currentBoxText) {
            document.querySelectorAll('.dynamic-box').forEach(box => box.remove());

            const newDarkBox = document.createElement('div');
            newDarkBox.classList.add('dynamic-box');

            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.addEventListener('click', () => {
                newDarkBox.remove();
                currentBoxText = '';
                showCenterText();
            });
            newDarkBox.appendChild(closeButton);

            const newTextContainer = document.createElement('div');
            newTextContainer.classList.add('text-container');

            const newText = document.createElement('p');
            newText.textContent = buttonBoxData[text].text;

            newTextContainer.appendChild(newText);
            newDarkBox.appendChild(newTextContainer);

            document.body.appendChild(newDarkBox);

            currentBoxText = buttonBoxData[text].text;
        }
    });
});

centerText.addEventListener('click', toggleBackgroundImage);

// Debugging
console.log('Background image path:', backgroundImage.src);
console.log('Button background image path:', document.querySelector('.button-with-image').style.backgroundImage);
