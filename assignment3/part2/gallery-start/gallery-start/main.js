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


