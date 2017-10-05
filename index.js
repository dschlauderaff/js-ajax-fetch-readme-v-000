const app = "I don't do much.";

const token = 'cd3cce4a467b63a15a0cb9f3549aac9cf1603412'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))