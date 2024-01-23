document.addEventListener("DOMContentLoaded", function () {
  // Esperar a que el DOM esté completamente cargado

  // Selección de todas las filas de la tabla
  var rows = document.querySelectorAll("table tbody tr");

  rows.forEach(function (row) {
    // Selección de todas las celdas de la fila actual
    var cells = row.querySelectorAll("td");

    // Verificar y completar las notas si hay al menos 3 celdas (Notas 1, 2 y 3)
    if (cells.length >= 4) {
      // Verificar si la celda de "Nota 1" está vacía e ingresa el valor si es necesario
      if (cells[1].innerText === "") {
        var nota1 = prompt("Ingrese la Nota 1 para " + cells[0].innerText + ":");
        cells[1].innerText = parseFloat(nota1).toFixed(2);
      }

      // Verificar si la celda de "Nota 2" está vacía e ingresa el valor si es necesario
      if (cells[2].innerText === "") {
        var nota2 = prompt("Ingrese la Nota 2 para " + cells[0].innerText + ":");
        cells[2].innerText = parseFloat(nota2).toFixed(2);
      }

      // Verificar si la celda de "Nota 3" está vacía e ingresa el valor si es necesario
      if (cells[3].innerText === "") {
        var nota3 = prompt("Ingrese la Nota 3 para " + cells[0].innerText + ":");
        cells[3].innerText = parseFloat(nota3).toFixed(2);
      }

      // Calcular el promedio y actualiza el contenido de la celda de "Promedio"
      var promedio =
        (parseFloat(cells[1].innerText) +
          parseFloat(cells[2].innerText) +
          parseFloat(cells[3].innerText)) / 3;
      cells[4].innerText = promedio.toFixed(2); // Convierte el promedio a 2 decimales
    }
  });
});
