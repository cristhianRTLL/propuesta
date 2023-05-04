document.querySelector("#aceptar").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    const telefono = "51942546160";
  
    const cliente = document.querySelector("#cliente").value;
    const numero = document.querySelector("#numero").value;
    const direccion = document.querySelector("#direccion").value;
    const empleado = document.querySelector("#empleado").value;
    const seleccion = document.querySelector("#seleccion").value;
    const servicio = document.querySelector("#servicio").value;
    const resp = document.querySelector("#respuesta");
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
          *GRACIAS POR COMUNICARTE CON CLISA*%0A
          *GRACIAS POR COMUNICARTE*%0A%0A
          *¿Cuál es tu nombre?*%0A
          ${cliente}%0A
          *numero de celular*%0A
          ${numero}%0A
          *Indica lo que buscas*%0A
          ${direccion}%0A
          *Empleado de preferencia*%0A
          ${seleccion}%0A
          *servicio que requiere*%0A
          ${empleado}%0A
          *¿Cuál es el servicio que se desea realizar?*%0A
          ${servicio}`;
  
    if (cliente === "" || numero === "" || direccion === "") {
      resp.classList.add("fail");
      resp.innerHTML = `Faltan algunos datos, ${cliente}`;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;
  
    window.open(url);
  });