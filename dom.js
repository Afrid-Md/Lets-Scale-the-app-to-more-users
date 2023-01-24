document.getElementById('my-form').addEventListener('submit',function (event){
       event.preventDefault();

       var Name=document.getElementById('name').value;;
       var Email=document.getElementById('email').value;

       var userInfo = {
              Name : Name,
              Email : Email
       }

       localStorage.setItem("userinfo", JSON.stringify(userInfo)); 
       nextli(userInfo);
    
});

function nextli(userInfo){
const parentElement = document.getElementById('users');

const childElement = document.createElement('li');

childElement.textContent=userInfo.Name+'-'+userInfo.Email;

parentElement.appendChild(childElement);

}