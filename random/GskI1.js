// Sample account data
const accounts = [
    { username: "jjsal1234", password: "Encypted", verified: true, banned: false },
    { username: "Skeleton", password: "DFkncty", verified: true, banned: false },
    { username: "idkperson", password: "personhuman", verified: true, banned: false },
    // Add more accounts as needed
];

// Function to get account information by username
function getAccountInfo(username) {
    return accounts.find(account => account.username === username);
}

// Function to check credentials (simple for demonstration purposes)
function checkCredentials(username, password) {
    const account = getAccountInfo(username);
    return account && account.password === password;
}
