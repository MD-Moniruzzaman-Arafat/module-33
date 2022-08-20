fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => posts(data))

const posts = data => {
    const container = document.getElementById('container');
    for (post of data) {
        const singleDiv = document.createElement('div');
        singleDiv.style.backgroundColor = '#411e7944';
        singleDiv.style.fontSize = '20px';
        singleDiv.style.margin = '5px';
        singleDiv.style.padding = '10px';
        singleDiv.style.border = '1px solid gray';
        singleDiv.style.borderRadius = '5px';
        singleDiv.innerText = `
            UserId : ${post.userId} 
            Id : ${post.id} 
            Post : ${post.title} 
        `
        container.appendChild(singleDiv);
    }
}