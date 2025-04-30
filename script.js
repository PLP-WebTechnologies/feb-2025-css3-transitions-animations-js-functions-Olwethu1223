const button = document.getElementById('changeStyleBtn');
const fashionImage = document.getElementById('fashionImage');

// Array of fashion items (change with your actual image paths)
const fashionStyles = [
  'tshirt.jpeg',  // Add more image paths for styles like shoes, bags
  'shoes.jpeg',
  'bag.jpeg'
];

// Function to change fashion style (pick random item)
function changeFashionStyle() {
  // Pick a random fashion style from the array
  const randomStyle = fashionStyles[Math.floor(Math.random() * fashionStyles.length)];
  
  // Set new fashion item image
  fashionImage.src = randomStyle;

  // Trigger animation on fashion item
  fashionImage.style.animation = 'rotateImage 2s infinite';
  
  // Store the selected fashion style in localStorage
  localStorage.setItem('selectedFashion', randomStyle);
}

// Check if there's a stored fashion item and apply it
function loadStoredFashion() {
  const savedStyle = localStorage.getItem('selectedFashion');
  if (savedStyle) {
    fashionImage.src = savedStyle;
  }
}

// When the button is clicked, change fashion style
button.addEventListener('click', changeFashionStyle);

// When the page loads, retrieve and show the saved fashion item
window.addEventListener('load', loadStoredFashion);
