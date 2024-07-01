function calcularPromedio() {
  const nombre = document.getElementById("nombre").value;
  const nota1 = parseFloat(document.getElementById("nota1").value);
  const nota2 = parseFloat(document.getElementById("nota2").value);
  const nota3 = parseFloat(document.getElementById("nota3").value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
    document.getElementById("resultado").innerText =
      "Por favor, ingrese todas las notas.";
    return;
  }

  if (
    nota1 < 0 ||
    nota1 > 10 ||
    nota2 < 0 ||
    nota2 > 10 ||
    nota3 < 0 ||
    nota3 > 10
  ) {
    document.getElementById("resultado").innerText =
      "Las notas deben estar en el rango de 0 a 10.";
    return;
  }

  const promedio = (nota1 + nota2 + nota3) / 3;

  if (promedio >= 7) {
    document.getElementById(
      "resultado"
    ).innerText = `${nombre}, ¡felicidades! Has aprobado con un promedio de ${promedio.toFixed(
      2
    )}.`;
  } else {
    document.getElementById(
      "resultado"
    ).innerText = `${nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio obtenido es ${promedio.toFixed(
      2
    )}.`;
  }
}
