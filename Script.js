// ----------------------------
// Variables and Scope Example
// ----------------------------

// Global variable
let activeBox = null;

// ----------------------------
// Function: Toggle Box Animation
// Parameters: boxId (string)
// Returns: message (string)
// ----------------------------
function toggleBoxAnimation(boxId) {
    const box = document.getElementById(boxId);

    // Local variable
    let message = "";

    if (box.classList.contains('active')) {
        box.classList.remove('active');
        message = `${boxId} animation stopped.`;
    } else {
        // Remove previous active if exists
        if (activeBox) activeBox.classList.remove('active');

        box.classList.add('active');
        activeBox = box;
        message = `${boxId} animation triggered!`;
    }

    console.log(message);
    return message;
}

// ----------------------------
// Event Listeners for Boxes
// ----------------------------
document.getElementById('subjects').addEventListener('click', () => {
    toggleBoxAnimation('subjects');
});

document.getElementById('teachers').addEventListener('click', () => {
    toggleBoxAnimation('teachers');
});

document.getElementById('results').addEventListener('click', () => {
    toggleBoxAnimation('results');
});

document.getElementById('events').addEventListener('click', () => {
    toggleBoxAnimation('events');
});

// ----------------------------
// Hero Button Animation Trigger
// ----------------------------
document.getElementById('hero-btn').addEventListener('click', () => {
    toggleBoxAnimation('subjects');
});
