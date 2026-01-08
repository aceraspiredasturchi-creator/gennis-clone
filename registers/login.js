const my_username = "Erlan";
const my_parol = "12345";

function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('Error');

    console.log(username, password);

    if (username === my_username && password === my_parol) {
        console.log("Kirish muvafaqiyatli");    
    }
    else {
        error.textContent = "Ism yoki parol xato kiritildi";
        error.style.color = "red";
    }

}
