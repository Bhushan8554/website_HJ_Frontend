        
class loginclass {
    constructor(email, password) {
      this.email = email;
      this.password = password;
    }
    chek() {
      let data = JSON.parse(localStorage.getItem("signupdata")) || [];
      let newdata = data.filter((element) => {
        return this.email == element.email;
      });
      if (newdata.length > 0) {
        newdata =newdata .filter((element) => {
          return this.password == element.password;
        });
        if (newdata.length > 0) {
          localStorage.setItem("logeduser", JSON.stringify(newdata[0]));
          return true;
        } else {
          return false;
        }
      } else {
        alert("user doesnot exist pls signup");
      }
    }
  }
  let data = JSON.parse(localStorage.getItem("signupdata")) || [];
  
  let login = localStorage.setItem("login", false);
  
 
  
  let  signinFun= () => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let user = new loginclass(email, password);
    if (user.chek()) {
      alert("done");
      localStorage.setItem("login", true);
      window.location.href = "index.html";
    } else {
      alert("password in correct");
    }
  };

  document.querySelector('#butsigin').addEventListener("click",signinFun);