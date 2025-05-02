document.getElementById('generate-btn').addEventListener('click', () => {
    const length = 20; // Length of the password
    const characters = 'QFUDVDCADVDwfgvwetyduiretuerhgewwqewd0123456789!@#$%^&*()';
    let password = 'Emperor';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    document.getElementById('password-display').value = password;
  });