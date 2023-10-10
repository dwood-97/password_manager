document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.querySelector('input[value="Generate"]');
    if (generateButton) {
        generateButton.addEventListener('click', function() {
            const spinner = document.createElement('div');
            spinner.innerText = 'Generating...';
            generateButton.replaceWith(spinner);
        });
    }

    const passwordLinks = document.querySelectorAll('a[href^="/"]');
    passwordLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const spinner = document.createElement('div');
            spinner.innerText = 'Fetching...';
            link.replaceWith(spinner);
            fetch(link.href)
                .then(response => response.json())
                .then(data => {
                    const passwordDiv = document.createElement('div');
                    passwordDiv.innerText = data.decrypted_password;
                    spinner.replaceWith(passwordDiv);
                });
        });
    });
});
