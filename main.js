let users = [
    { name: "Ali", rollNo: 101 },
    { name: "Hussain", rollNo: 102 },
    { name: "Rafay", rollNo: 40 },
    { name: "Muhammad", rollNo: 104 },
    { name: "Hussan", rollNo: 105 }
];

let searchName = prompt("Enter the name you want to search:");
let found = false;

for (let i = 0; i < users.length; i++) {
    if (users[i].name.toLowerCase() === searchName.toLowerCase()) {
        alert(`User Found!\nName: ${users[i].name}\nRoll No: ${users[i].rollNo}`);
        found = true;
        break;
    }
}

if (!found) {
    alert("User not found!");
}