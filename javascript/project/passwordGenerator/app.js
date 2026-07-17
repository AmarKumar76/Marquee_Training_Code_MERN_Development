const passwordInput = document.getElementById("passwordInput");
const passwordOutput = document.getElementById("passwordOutput");

passwordInput.addEventListener("input", () => {
    const password = passwordInput.value;
    const hasNumber = password.includes("0") || password.includes("1") ||
        password.includes("2") || password.includes("3") ||
        password.includes("4") || password.includes("5") ||
        password.includes("6") || password.includes("7") ||
        password.includes("8") || password.includes("9");

    const isStrong = password.length > 6 && hasNumber;

    passwordOutput.classList.remove("strong", "weak");

    if (password === "") {
        passwordOutput.textContent = "Enter a password";
        return;
    }

    if (isStrong) {
        passwordOutput.textContent = "Strong";
        passwordOutput.classList.add("strong");
    } else {
        passwordOutput.textContent = "Weak";
        passwordOutput.classList.add("weak");
    }
});
