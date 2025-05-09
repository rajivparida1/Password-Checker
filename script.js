function checkStrength() {
    const pwd = document.getElementById('password').value;
    const strengthMessage = document.getElementById('strengthMessage');
    const cardBox = document.getElementById('cardBox');
    const strengthBar = document.getElementById('strengthBar');
    const tips = document.getElementById('passwordTips');

    let strength = 0;
    let tipsList = [];

    // Check rules
    if (pwd.length >= 6) strength++;
    else tipsList.push("Use at least 6 characters");

    if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) strength++;
    else tipsList.push("Use both uppercase and lowercase letters");

    if (/\d/.test(pwd)) strength++;
    else tipsList.push("Include at least one number");

    if (/[@$!%*?&#]/.test(pwd)) strength++;
    else tipsList.push("Add a special character");

    if (pwd.length >= 8) strength++;
    else tipsList.push("Go for 8+ characters");

    // If empty
    if (pwd.length === 0) {
      strengthMessage.textContent = '';
      strengthBar.style.width = '0%';
      strengthBar.className = 'progress-bar';
      tips.innerHTML = '';
      cardBox.classList.remove('border-danger', 'border-warning', 'border-success');
      return;
    }

    if (strength <= 2) {
      strengthMessage.textContent = 'Weak Password';
      strengthBar.style.width = '30%';
      strengthBar.className = 'progress-bar bg-danger';
      cardBox.classList.remove('border-warning', 'border-success');
      cardBox.classList.add('border-danger');
    } else if (strength <= 4) {
      strengthMessage.textContent = 'Medium Password';
      strengthBar.style.width = '65%';
      strengthBar.className = 'progress-bar bg-warning';
      cardBox.classList.remove('border-danger', 'border-success');
      cardBox.classList.add('border-warning');
    } else {
      strengthMessage.textContent = 'Strong Password';
      strengthBar.style.width = '100%';
      strengthBar.className = 'progress-bar bg-success';
      cardBox.classList.remove('border-danger', 'border-warning');
      cardBox.classList.add('border-success');
    }

    // Show tips
    tips.innerHTML = tipsList.length > 0 ? "Suggestions:<br>• " + tipsList.join("<br>• ") : '';
  }

  function togglePassword() {
    const pwdInput = document.getElementById('password');
    pwdInput.type = pwdInput.type === 'password' ? 'text' : 'password';
  }