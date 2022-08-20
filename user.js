fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(data => users(data))

const users = data => {
    const ul = document.getElementById('ul');
    for (user of data) {
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}