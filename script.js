// Parallax scrolling speed for each layer
const layers = [
    { id: 'stars', speed: 0.1 },
    { id: 'moon', speed: 0.2 },
    { id: 'clouds1', speed: 0.4 },
    { id: 'clouds2', speed: 0.6 },
    { id: 'far-buildings', speed: 0.8 },
    { id: 'bg-buildings', speed: 1.0 },
    { id: 'fg-buildings', speed: 1.2 },
    { id: 'wall', speed: 1.4 },
    { id: 'ground', speed: 1.6 },
];

let offset = 0;

function updateParallax() {
    offset -= 2; // Adjust scrolling speed

    layers.forEach(layer => {
        const element = document.getElementById(layer.id);
        element.style.transform = `translateX(${offset * layer.speed}px)`;
    });

    requestAnimationFrame(updateParallax);
}

updateParallax();
