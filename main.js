const text = document.getElementById('text')

function handleSubmit() {
    console.log(text.value);

    let message = text.value 
    console.log({mes: message});
    if (message.length == 0) {
        alert('Kindly Fill in a comment')
        return 
    }
    localStorage.setItem('videoComment', JSON.stringify(message));
}