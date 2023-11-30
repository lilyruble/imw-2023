let images = [
    'imgs/Readings.png',
    'imgs/links.png',
    'imgs/PROJECTS/interaction.png',



];

// document.getElementsByClassName('elements');
const container = document.getElementsByClassName('container')
images.forEach(image => {
    const img = document.createElement('img');
    container.appendChild(img);
})