// Add your code here
function submitData(name, email) {
    let url = 'http://localhost:3000/users';
    let body = document.querySelector('body');
    let config = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        })
    };

    return fetch(url, config)
        .then(response => response.json())
        .then(data => {
            // let h2 = document.createElement('h1');
            let id = data.id;
            body.innerHTML = id;
            // body.append(h2)
        }).catch(error => {
            body.innerHTML = error;
        })
}

submitData("peter", "petermuturi@gmail.com")