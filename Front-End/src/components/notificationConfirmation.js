function mostrarNotificacion(titulo, texto){

  if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Vamos a ver si los permisos de las notificaciones están aceptados
    else if (Notification.permission === "granted") {
      // Si está todo bien, vamos a mostrar notificaciones
      var notification = new Notification(titulo,{
        body: texto,
        image: "./src/assets/xd.gif",
        icon: "./src/assets/logo.png"
        //tag: tag+1
        //vibrate: [200, 100, 200]
      });   
    }

    // De otra forma, deberemos pedirle permiso al usuario.
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // Si el usuario acepta, crearemos una notificacion
        if (permission === "granted") {
          
          var notification = new Notification(titulo,{
            body: texto,
            //icon: ".src/assets/logo.jpg",
            //dir: rtl
            //vibrate: [200, 100, 200]
          });          
        }
      });
  
  }
}