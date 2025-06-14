function calculateYearsDifference(date1, date2) {
    let yearsDifference = date2.getFullYear() - date1.getFullYear();
    const monthDiff = date2.getMonth() - date1.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && date2.getDate() < date1.getDate())) {
        yearsDifference--;
    }
    return yearsDifference;
}

function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput || isNaN(Date.parse(birthdateInput))) {
        document.getElementById('result').innerText = 'Please enter a valid birthdate!';
        return;
    }
    const birthdate = new Date(birthdateInput);
    const today = new Date();
    const age = calculateYearsDifference(birthdate, today);
    document.getElementById('result').innerText = `You're ${age} years old! 🎂`;
}