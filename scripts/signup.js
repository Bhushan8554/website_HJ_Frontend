let signup=()=>{  
 document.querySelector('#mainsignupblock').style.display="block";
  document.querySelector('#signupemail').style.display="none";
}
document.querySelector('#signupemail').addEventListener("click",signup);
class signupclass {
  constructor(email, password, name) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
  signup() {
    if (this.#vlaidate()) {
      return true;
    } else {
      return false;
    }
  }

  #vlaidate() {
    if (this.password.length > 6 && this.password.includes("@")) {
      return true;
    } else {
      return false;
    }
  }
}

let signupdataLS = JSON.parse(localStorage.getItem("signupdata")) || [];

let Fil = (email) => {
  let chek = signupdataLS.filter((ele) => {
    return ele.email == email;
  });
  if (chek.length > 0) {
    return false;
  } else {
    return true;
  }
};

let signupFun=()=>{
  event.preventDefault()
 let name=document.getElementById('name').value;
 let email=document.getElementById('email').value;
 let password=document.getElementById('password').value;
 let user = new signupclass(email, password, name);
  console.log(user);
  if (user.signup()) {
    if (Fil(email)) {
      alert("Signup sucessfull");
      signupdataLS.push(user);
      localStorage.setItem("signupdata", JSON.stringify(signupdataLS));
      window.location.href="signin.html"
    } else {
      alert("user already exisit");
    }
  } else {
    alert("pass should be one  special character and atleast 6 charcter");
  }
 
}


document.querySelector('#butsigup').addEventListener("click",signupFun);