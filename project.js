function generateMealPlan() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goal = document.getElementById('goal').value;

    // Email validation
    if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email address.");
        return;
    }

    // Random meal plan generator
    const meals = {
        breakfast: ["Oatmeal with berries", "Greek yogurt with granola", "Avocado toast"],
        lunch: ["Grilled chicken salad", "Quinoa bowl with vegetables", "Turkey sandwich"],
        dinner: ["Baked salmon with asparagus", "Stir-fry tofu and broccoli", "Grilled steak with sweet potatoes"],
        snack: ["Apple slices with peanut butter", "Trail mix", "Carrot sticks with hummus"]
    };

    const getRandomMeal = (mealType) => meals[mealType][Math.floor(Math.random() * meals[mealType].length)];

    // Generate the meal plan
    let mealPlan = `<h1>Your Weekly Meal Plan</h1><p>Name: ${name}</p><p>Email: ${email}</p><p>Goal: ${goal}</p><table border="1"><tr><th>Day</th><th>Breakfast</th><th>Lunch</th><th>Dinner</th><th>Snack</th></tr>`;
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    days.forEach(day => {
        mealPlan += `<tr><td>${day}</td><td>${getRandomMeal("breakfast")}</td><td>${getRandomMeal("lunch")}</td><td>${getRandomMeal("dinner")}</td><td>${getRandomMeal("snack")}</td></tr>`;
    });

    mealPlan += `</table><br><button onclick="window.print()">Print</button><button onclick="downloadMealPlan()">Download</button>`;

    // Create new page with meal plan
    document.write(`
        <html>
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: 'Montserrat', sans-serif; background-color: #eaedf2; color: #133845; padding: 20px; }
                    h1 { text-align: center; }
                    .banner { text-align: center; background-color: #133845; padding: 10px 0; position: fixed; top: 0; left: 0; width: 100%; z-index: 1000; }
                    .banner img { max-width: 100%; height: auto; }
                    table { width: 100%; border-collapse: collapse; margin: 20px 0; }
                    th, td { border: 1px solid #133845; padding: 10px; text-align: center; }
                </style>
            </head>
            <body>${mealPlan}</body>
        </html>
    `);
}
function clearPlanner() {
    // Clear all input fields in the form
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('goal').value = '';
    alert("Planner has been cleared!");
}

function downloadMealPlan() {
    const blob = new Blob([document.documentElement.outerHTML], { type: "text/html" });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = "meal_plan.html";
    link.click();
}