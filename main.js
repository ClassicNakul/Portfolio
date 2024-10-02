var typeWriterEffect = function (elementId, text, speed) {
    var i = 0;
    var element = document.getElementById(elementId);
    var typeWriter = function () {
        if (element && i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed); // Continue typing one letter at a time
        } else {
            // Once the full text is typed, clear the text and start over after a short delay
            setTimeout(function () {
                if (element) {
                    element.innerHTML = ''; // Clear the text
                    i = 0; // Reset index to start typing again
                    typeWriter(); // Start the typing effect again
                }
            }, 1500); // Delay before restarting the typing effect (1 second)
        }
    };
    // Clear any existing text first and start the typing effect
    if (element) {
        element.innerHTML = '';
        typeWriter();
    }
};
// Start the typing effect after page load
window.addEventListener("load", function () {
    typeWriterEffect("cont2", "Web Developer and Designer, Majoring in Computer Science and Networking..", 75);
});
