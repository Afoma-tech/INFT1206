const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const altText = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'A beautiful landscape',
    'pic3.jpg': 'A cute animal',
    'pic4.jpg': 'Abstract art',
    'pic5.jpg': 'City skyline at night'
};

/* Looping through images */
imageFilenames.forEach(filename => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${filename}`); // Use backticks instead of single quotes
    newImage.setAttribute('alt', altText[filename]);
    thumbBar.appendChild(newImage);

    /* New click event listener to each thumnail image */
    newImage.addEventListener('click', function() {
        displayedImage.setAttribute('src', this.getAttribute('src'));
        displayedImage.setAttribute('alt', this.getAttribute('alt'));
    });
});

// Add event listener for keyboard navigation
document.addEventListener('keydown', function(event) {
    const displayedImageSrc = displayedImage.getAttribute('src');
    const currentIndex = imageFilenames.indexOf(displayedImageSrc.substring(displayedImageSrc.lastIndexOf('/') + 1));

    // Handle left arrow key
    if (event.key === 'ArrowLeft') {
        const newIndex = (currentIndex - 1 + imageFilenames.length) % imageFilenames.length;
        updateDisplayedImage(newIndex);
    }

    // Handle right arrow key
    if (event.key === 'ArrowRight') {
        const newIndex = (currentIndex + 1) % imageFilenames.length;
        updateDisplayedImage(newIndex);
    }
});

// Function to update the displayed image based on index
function updateDisplayedImage(index) {
    const filename = imageFilenames[index];
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', altText[filename]);
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', function() {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rbg(0 0 0 / 50%';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
    }
});


