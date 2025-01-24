document.addEventListener("DOMContentLoaded", function() {
    fetch('layout/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('header').innerHTML = data;
        });
});
