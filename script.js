document.getElementById('validateBtn').addEventListener('click', validatePassword);

function validatePassword() {
    // Obtener la contraseña del input
    const password = document.getElementById('passwordInput').value;
    
    // Manejo de contraseña vacía
    if (!password) {
        document.getElementById('result').innerText = 'Ingrese una contraseña.';
        return;
    }

    // Validación de la contraseña usando expresiones regulares
    const isValid = validate(password);

    // Mostrar el resultado
    document.getElementById('result').innerText = isValid ? 'Contraseña segura' : 'Contraseña insegura';
}

function validate(password) {
    // Verificar si la contraseña tiene al menos 8 caracteres, un número y una letra mayúscula
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}
