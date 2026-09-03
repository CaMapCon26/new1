// let bedroom = 3;

// const taxRate = 0.08;

// let price;
// let result = null;

// "10" == 10;
// "10" === 10;

// if (bedroom > 3) {
//     console.log("This is a large house!");
//     console.warn("Warning: This house is too big!");
// } else {
//     console.log("Standard house.");
// }

// for (let i =0; i < 5; i++) {
//     console.log(i);
// }   

// let sample = {id: 1, name: "Sample Object", type: "Example"};

// console.log(sample.name);
// console.log(sample["name"]);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.length);

// let x = document.querySelector("section p");
// console.log(x.textContent);

// //console.log("tieu de", title.textContent);
// const title = document.querySelector("#gioi-thieu");
// const content = document.querySelector("section p");
// let ar = [];
// let post = {
//     title: title.textContent,
//     content: content.textContent.trim(),};

// arr.push(post);

// console.log(arr);

async function greet() {
    return "Hello, World!";
}

console.log(greet());
greet().then((response) => {
    console.log(response);
});

// //c2
// async function getData() {
//     const text = await greet();
//     console.log(text);
// }

// getData();

// function fetchUsers() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then((response) => {
//             return response.text();
//         })
//         .then((users) => {
//             console.log(JSON.stringify(users));
//         })
//         .catch((error) => {
//             console.error("Error fetching users:", error);
//         });
// }

// fetchUsers();

function renderUsers(users) {
    const usersBody = document.getElementById("usersBody");
    usersBody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
        </tr>
    `).join('');
}

async function fetchUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        console.log(users);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

fetchUsers();