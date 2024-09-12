function calculateBMI() {
    // Get the values from the input fields
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);
    let gender = document.querySelector('input[name="gender"]:checked').value;

    // Validate input
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid weight and height.';
        document.getElementById('result').style.color = 'red';
        return;
    }

    // Convert height from cm to meters
    height = height / 100;

    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);

    // Determine BMI category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display the result
    document.getElementById('result').textContent = `Your BMI is ${bmi} (${category}) as a ${gender}`;
    document.getElementById('result').style.color = category === 'Normal weight' ? 'green' : 'red';
}
