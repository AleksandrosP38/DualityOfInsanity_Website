const buttonContainer = document.getElementById('buttonContainer');

const buttonBoxData = {
    'Game': {
        text: `The game takes place in a bunker, in first person. The character is trapped in this location for initially unknown reasons and for an undetermined amount of time, but enough to sometimes drive him crazy. Your objective is to escape this bunker without reaching total insanity, using the items and information at your disposal that vary according to the character's two psychological states: normal state and state of madness.`,
        image: 'Images/Tape.png' 
    },
    'About': {
        text: `The game introduces a non-standard way of solving puzzles, in which you need to explore the bunker between two psychological states with different items and information. The game vision is innovative and more immersive not only for the genre but in general in current video games. The game is made to be played with a keyboard and mouse on PC.`,
        image: 'Images/Tape.png' 
    },
    'Community': {
        text: 'Join our vibrant community and engage with other members.',
        image: 'Images/Tape.png' 
    },
    'News': {
        text: 'Stay updated with the latest news and announcements.',
        image: 'Images/Tape.png'
    },
    'Patch Notes': {
        text: 'Check out the latest patch notes and updates for our products.',
        image: 'Images/Tape.png' 
    },
    'Requirements': {
        text: 'Learn about the system requirements for our games and applications.',
        image: 'Images/Tape.png' 
    },
    'Support': {
        text: 'Need help? Get in touch with our support team for assistance.',
        image: 'Images/Tape.png' 
    }
};

let currentBoxText = '';

Object.keys(buttonBoxData).forEach(text => {
    const button = document.createElement('button');
    button.classList.add('button-with-image'); 
    button.style.backgroundImage = `url(${buttonBoxData[text].image})`; 
    
    const buttonText = document.createElement('span');
    buttonText.classList.add('button-text');
    buttonText.textContent = text;

    button.appendChild(buttonText);
    buttonContainer.appendChild(button);
    
    const lineBreak = document.createElement('br');
    buttonContainer.appendChild(lineBreak);
    
    button.addEventListener('click', () => {
        if (buttonBoxData[text].text !== currentBoxText) {
            document.querySelectorAll('.dynamic-box').forEach(box => box.remove());
            
            const newDarkBox = document.createElement('div');
            newDarkBox.classList.add('dynamic-box');
            newDarkBox.style.width = '70%';
            newDarkBox.style.maxHeight = '80%';
            newDarkBox.style.overflowY = 'auto';
            newDarkBox.style.position = 'fixed';
            newDarkBox.style.top = '50%';
            newDarkBox.style.left = '50%';
            newDarkBox.style.transform = 'translate(-50%, -50%)';
            newDarkBox.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
            newDarkBox.style.zIndex = '2';
            newDarkBox.style.color = 'white';
            newDarkBox.style.display = 'flex';
            newDarkBox.style.flexDirection = 'column';
            newDarkBox.style.alignItems = 'center';
            newDarkBox.style.justifyContent = 'center';
            newDarkBox.style.fontFamily = 'Chiller, sans-serif';
            newDarkBox.style.padding = '2vw';

            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.style.position = 'absolute';
            closeButton.style.top = '1vw';
            closeButton.style.left = '1vw';
            closeButton.style.background = 'transparent';
            closeButton.style.border = 'none';
            closeButton.style.color = 'white';
            closeButton.style.fontSize = '2vw';
            closeButton.style.cursor = 'pointer';
            closeButton.addEventListener('click', () => {
                newDarkBox.remove();
                currentBoxText = '';
            });
            newDarkBox.appendChild(closeButton);

            const newTextContainer = document.createElement('div');
            newTextContainer.classList.add('text-container');

            const newText = document.createElement('p');
            newText.textContent = buttonBoxData[text].text;
            newText.style.textAlign = 'center';
            newText.style.fontSize = '2vw';

            newTextContainer.appendChild(newText);

            newDarkBox.appendChild(newTextContainer);

            document.body.appendChild(newDarkBox);

            currentBoxText = buttonBoxData[text].text;
        }
    });
});
