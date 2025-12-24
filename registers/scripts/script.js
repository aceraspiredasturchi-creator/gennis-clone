function loginUser() {

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value; 
    if (username === '' || password === '') {
        alert('Iltimos, barcha maydonlarni to`ldiring.');
        return;
    }
    alert('Kirish muvaffaqiyatli amalga oshirildi!');
}