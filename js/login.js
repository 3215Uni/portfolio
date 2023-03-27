function validateLogin() {
    // usuario y la passwors del formulario
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Verificar si los campos están vacíos
    if (username == "" || password == "") {
      alert("Por favor, complete todos los campos");    
      return false;
    }
  
    // Verificar si la contraseña es válida
    if (username == "roxy" && password == "roxy") {
    // Si todo está en orden, redirigir al usuario a la página de inicio  
    console.log("La contraseña es correcta");
        window.location.href = "editar.html";
    }else{
        alert("La contraseña es incorrecta");
    }    
  }

    
  
  
  
  
  