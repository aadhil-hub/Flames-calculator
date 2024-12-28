document.getElementById("loveForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name1 = document.getElementById("name1").value.trim();
    const name2 = document.getElementById("name2").value.trim();

    if (name1 && name2) {
        // Generate a random love percentage
        const lovePercentage = Math.floor(Math.random() * 101);

        // Update the result section
        document.getElementById("lovePercentage").innerText = `${name1} and ${name2}, your love percentage is ${lovePercentage}%`;

        // Show the result
        document.getElementById("result").classList.remove("hidden");
    } else {
        alert("Please enter both names!");
    }
});