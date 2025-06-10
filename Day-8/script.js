document.getElementById('registerForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const usernameInput = document.getElementById('username');
  const ageInput = document.getElementById('age');

  const username = usernameInput.value.trim();
  const age = parseInt(ageInput.value);

  const usernameError = document.getElementById('usernameError');
  const ageError = document.getElementById('ageError');

  usernameError.textContent = '';
  ageError.textContent = '';
  usernameInput.style.border = '';
  ageInput.style.border = '';

  let isValid = true;

  if (username.length < 3) {
    usernameError.textContent = "Username must be at least 3 characters.";
    usernameInput.style.border = '2px solid red';
    isValid = false;
  } else {
    usernameInput.style.border = '2px solid green';
  }

  if (isNaN(age) || age < 18) {
    ageError.textContent = "You must be 18 or older.";
    ageInput.style.border = '2px solid red';
    isValid = false;
  } else {
    ageInput.style.border = '2px solid green';
  }

  // Enhanced switch block
  if (!isNaN(age)) {
    switch (true) {
      case (age === 18):
        console.log("You're just eligible!");
        break;
      case (age === 21):
        console.log("You're now an adult in most countries.");
        break;
      default:
        console.log("Age submitted: " + age);
    }
  }

  if (isValid) {
    alert("Form submitted successfully!");

    // Optional: Reset styles and form
    usernameInput.style.border = '';
    ageInput.style.border = '';
    document.getElementById('registerForm').reset();
  }
});
