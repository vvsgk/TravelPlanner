var usernames = localStorage.getItem("usernames");
var passwords = localStorage.getItem("passwords");


if (!usernames) {
  usernames = [];
} else {
  usernames = JSON.parse(usernames);
  console.log(usernames);
}

if (!passwords) {
  passwords = [];
} else {
  passwords = JSON.parse(passwords);
  console.log(passwords);
}

const sign_up = document.getElementById("sign_up");

sign_up.addEventListener("click", async () => {
  console.log("click");
  const username = document.getElementById("new_username").value;
  const password = document.getElementById("new_password").value;

  if (usernames.includes(username)) {
    var status = document.getElementById('Sign-up-status');
    status.innerHTML = "Username already exists. Choose a different username.";
    return; 
  }

  usernames.push(username);
  passwords.push(password);

  localStorage.setItem("usernames", JSON.stringify(usernames));
  localStorage.setItem("passwords", JSON.stringify(passwords));
  console.log(usernames);
  console.log(passwords);
  document.getElementById("new_username").value = "";
  document.getElementById("new_password").value = "";
  document.getElementById("new_email").value = "";

  var status = document.getElementById('Sign-up-status');
  status.innerHTML = "You have successfully signed up \n please sign in";
});

const sign_in = document.getElementById("sign_in");

sign_in.addEventListener("click", async () => {
  console.log("click");
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  let userFound = false;
  
  for (let i = 0; i < usernames.length; i++) {
    if (username === usernames[i] && password === passwords[i]) {
      var status = document.getElementById('status');
      status.innerHTML = "";
      userFound = true;
      const message = {
        type: "login_success",
        data: { username: username, password: password } 
      };
      const newWindow = window.open("index.html");  
      newWindow.addEventListener("load", () => {
        console.log("posted");
        newWindow.postMessage(message, "*");
      });
      break;
    }
  }
  
  if (!userFound) {
    var status = document.getElementById('status');
    status.innerHTML = "Sign-in failed. Check your credentials.";
  }
});
