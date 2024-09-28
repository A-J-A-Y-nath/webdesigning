const bodyEl = document.querySelector("body");

// Function to create and position the span element
function createSpan(x, y) {
    const spanEl = document.createElement("span");
    spanEl.style.left = x + "px";
    spanEl.style.top = y + "px";
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";
    bodyEl.appendChild(spanEl);
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
}

// Mouse move event for desktop
bodyEl.addEventListener("mousemove", (event) => {
    const xpos = event.offsetX;
    const ypos = event.offsetY;
    createSpan(xpos, ypos);
});

// Touch move event for mobile devices
bodyEl.addEventListener("touchmove", (event) => {
    const touch = event.touches[0]; // Get the first touch point
    const xpos = touch.clientX;
    const ypos = touch.clientY;
    createSpan(xpos, ypos);
});