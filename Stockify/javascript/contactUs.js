var url_add_message = "http://localhost:8080/contact";

async function postContactMessage(name, email, message) {
    try {
        const response = await fetch(url_add_message, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: `{
                "name": "${name}",
                "email": "${email}",
                "message": "${message}"
            }`,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText);
        }
    } catch (error) {
        return error.message;
    }
    return null;
}

function handleFormSubmit() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    postContactMessage(name, email, message)
        .then((error) => {
            if (error) {
                alert(error);
            } else {
                alert('Message sent successfully');
                // navigate to home page
                window.location.href = './index.html';

            }
        });
}

function handleServerUpContact() {
    document.getElementById("server-up").style.display = "inline";
}

function handleServerDownContact() 
    {
        document.getElementById("server-down").style.display = "inline";
        alert("Server is down. Please try again later or run the server locally.");
    }


async function handleServerHealthContact() {
    await fetch("http://localhost:8080/actuator/health")
    .then((response) => {
        console.log(response);
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then((responseJson) => {
        if (responseJson.status === "UP") {
            handleServerUpContact();
        }
        else {
            handleServerDownContact();
        }
    })
    .catch((error) => {
        handleServerDownContact();
        console.log(error)
    });
}



function main() {
        // listener in the form submit button
        handleServerHealthContact();
        const form = document.getElementById("contact-form");
        const submitButton = document.getElementById("submit-contact-form");
        submitButton.addEventListener("click", async function (event) {
            if (!form.checkValidity()) {
                return false;
            }
    
            event.preventDefault();
            event.stopPropagation();

            handleFormSubmit();

        });
}

main();
