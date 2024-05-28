// content.js

// Function to replace LinkedIn profile pictures on the feed
function replaceProfilePictures() {
    const newImageUrl = 'https://www.shutterstock.com/image-vector/gorontalo-indonesia-october-17-2023-260nw-2376002093.jpg'; // Replace with your chosen image URL

    // Query for all image elements that have a class indicating they are profile pictures in the feed
    const profilePictures = document.querySelectorAll('img.update-components-actor__avatar-image');

    profilePictures.forEach(img => {
        img.src = newImageUrl;
    });
}

// Run the function after the page content is loaded
window.addEventListener('load', replaceProfilePictures);

// Optionally, run periodically to catch new dynamically loaded content
setInterval(replaceProfilePictures, 2000);

