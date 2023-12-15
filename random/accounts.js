const accounts = [
  {
    username: "jjsal1234",
    password: "pass1",
    verified: true,
    banned: false,
  },
  {
    username: "user2",
    password: "password2",
    verified: false,
    banned: false,
  },
  // Add more accounts as needed
];

// Function to get account information by username
function getAccountInfo(username) {
  return accounts.find(account => account.username === username);
}

// Function to check credentials (replace with a more secure method)
function checkCredentials(username, password) {
  const account = getAccountInfo(username);
  return account && account.password === password;
}
