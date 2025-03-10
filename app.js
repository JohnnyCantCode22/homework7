// Step 1: Verify JavaScript is connected
console.log('Hello World!');

// Step 3: Define variables
let name = "John Lynch"; // Replace with your actual name
let hasDownloadedResume = false; // Track if resume has been downloaded

// Step 2 & Bonus: Show Alert When Resume is Downloaded (with 2-second delay)
document.getElementById('downloadResume').addEventListener('click', function() {
    if (!hasDownloadedResume) {
        setTimeout(() => {
            alert('Your resume is downloaded successfully!');
            hasDownloadedResume = true;
        }, 2000); // Delay by 2 seconds
    }
});

// Step 4: Display Personalized Greeting with Time-based Message
function getTimeBasedGreeting(name) {
    let hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning";
    } else if (hours < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return `${greeting}, my name is ${name}! Welcome to my portfolio!`;
}

// Add greeting to header
let greetingElement = document.createElement('h3');
greetingElement.textContent = getTimeBasedGreeting(name);
document.querySelector("header").appendChild(greetingElement);

// Step 5: Date Calculation for Project Deadline
function daysUntilDeadline(deadline) {
    let today = new Date();
    let deadlineDate = new Date(deadline);
    let timeDiff = deadlineDate - today;
    let daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
    return daysRemaining > 0 ? daysRemaining : "Deadline Passed";
}

// Set Project Deadline (Change the date to your actual deadline)
let projectDeadline = "2025-03-10"; // Format: YYYY-MM-DD
document.getElementById('projectDeadline').textContent = projectDeadline;
document.getElementById('daysRemaining').textContent = daysUntilDeadline(projectDeadline);
