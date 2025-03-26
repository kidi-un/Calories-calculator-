function calculateCalories() {
    let age = document.getElementById("age").value;
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let activity = document.getElementById("activity").value;

    if (age == "" || weight == "" || height == "") {
        alert("Please fill all fields!");
        return;
    }

    // Basal Metabolic Rate (BMR) Formula for Men
    let bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    let caloriesNeeded = bmr * activity;

    document.getElementById("result").innerText = `Daily Calories Needed: ${Math.round(caloriesNeeded)} kcal`;
}
