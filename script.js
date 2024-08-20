function buttonbars(){
     window.open("teste.html", "_self");
}

function search(){
     var input = document.getElementById("search-text").value
     input = input.toLowerCase()
     var x = document.getElementsByClassName("Products")

     for(i=0;i<x.length;i++){
          if(!x[i].innerHTML.toLowerCase().includes(input)){
               x[i].style.display = "none"
          }else{
               x[i].style.display = "list-item"
          }
     }
}

function logar(){

     var login = document.getElementById("login").value;
     var senha = document.getElementById("senha").value;

     if(login == "admin" && senha=="123"){
          location.href="after_login.html";
     }else{
          alert("E-mail ou senha incorretos")
     }

}