document.addEventListener("DOMContentLoaded", function () {
  var filtroZona = document.getElementById("filtroZona");
  var filtroTipo = document.getElementById("filtroTipo");
  var filtroFecha = document.getElementById("filtroFecha");
  var eventos = document.querySelectorAll(".evento");

  function convertirFechaAISO(fechaTexto) {
    var partes = fechaTexto.split("/");
    if (partes.length !== 3) {
      return "";
    }

    var dia = partes[0];
    var mes = partes[1];
    var anio = partes[2];
    return anio + "-" + mes.padStart(2, "0") + "-" + dia.padStart(2, "0");
  }

  function aplicarFiltros() {
    var zonaSeleccionada = filtroZona.value;
    var tipoSeleccionado = filtroTipo.value;
    var fechaSeleccionada = filtroFecha.value;

    for (var i = 0; i < eventos.length; i++) {
      var evento = eventos[i];
      var zonaEvento = evento.dataset.zona;
      var tipoEvento = evento.dataset.tipo;
      var fechaEvento = convertirFechaAISO(evento.dataset.fecha);
      var mostrar = true;

      if (zonaSeleccionada !== "" && zonaEvento !== zonaSeleccionada) {
        mostrar = false;
      }
      if (tipoSeleccionado !== "" && tipoEvento !== tipoSeleccionado) {
        mostrar = false;
      }
      if (fechaSeleccionada !== "" && fechaEvento !== fechaSeleccionada) {
        mostrar = false;
      }

      if (mostrar) {
        evento.style.display = "";
      } else {
        evento.style.display = "none";
      }
    }
  }

  filtroZona.addEventListener("change", aplicarFiltros);
  filtroTipo.addEventListener("change", aplicarFiltros);
  filtroFecha.addEventListener("change", aplicarFiltros);
});
