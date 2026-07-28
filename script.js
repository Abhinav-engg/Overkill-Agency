// --- 1. Scroll-Triggered SVG Line & Background Text ---
const stepsSection = document.getElementById('steps-section');
const animatedLine = document.getElementById('animated-line');
const bgText = document.getElementById('bg-text');

// Setup SVG Line
const pathLength = animatedLine.getTotalLength();
animatedLine.style.strokeDasharray = pathLength;
animatedLine.style.strokeDashoffset = pathLength;

window.addEventListener('scroll', () => {
    // Determine section dimensions
    const rect = stepsSection.getBoundingClientRect();
    
    // Calculate scroll percentage through the steps section (0 to 1)
    let scrollPercent = (window.innerHeight - rect.top) / (rect.height + window.innerHeight);
    scrollPercent = Math.min(Math.max(scrollPercent, 0), 1);
    
    // Animate the line
    const drawLength = pathLength * scrollPercent;
    animatedLine.style.strokeDashoffset = pathLength - drawLength;

    // Change the sticky background text based on the scroll depth
    if(scrollPercent > 0.8) {
        bgText.innerText = "CHAOS";
    } else if (scrollPercent > 0.55) {
        bgText.innerText = "DEPLOY";
    } else if (scrollPercent > 0.3) {
        bgText.innerText = "EXECUTE";
    } else {
        bgText.innerText = "IMAGINE";
    }
});


// --- 2. Cursor Glow & Parallax Logic ---
const cursorGlow = document.getElementById('cursor-glow');
const heroOvr = document.querySelector('.hero-ovr');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    // Move the background glow spotlight to follow the cursor
    cursorGlow.style.left = `${mouseX}px`;
    cursorGlow.style.top = `${mouseY}px`;

    // Parallax effect for the giant "OVR" text in the hero section
    if(heroOvr) {
        // Calculate distance from center of screen
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Multiply by a small negative fraction so it moves opposite to the mouse
        const xOffset = (mouseX - centerX) * -0.03; 
        const yOffset = (mouseY - centerY) * -0.03;
        
        // Combine with our existing CSS scaleX(1.35) stretching
        heroOvr.style.transform = `scaleX(1.35) translate(${xOffset}px, ${yOffset}px)`;
    }
});

// --- 3. Button Alert Logic ---
const contactBtn = document.getElementById('btn-contact');
const overkillBtn = document.getElementById('btn-overkill');
const projectBtn = document.getElementById('btn-project');

const overkillJoke = (e) => {
    e.preventDefault(); // Stops the page from jumping to the top
    alert("🚨 INITIATING OVERKILL PROTOCOL 🚨\n\nTo proceed, please provide your 16-digit credit card number, expiration date, CVV, routing number, and the deed to your house.\n\n Send the above mentioned details on onespot906@gmail.com");
};

if (contactBtn) contactBtn.addEventListener('click', overkillJoke);
if (overkillBtn) overkillBtn.addEventListener('click', overkillJoke);
if (projectBtn) projectBtn.addEventListener('click', overkillJoke);