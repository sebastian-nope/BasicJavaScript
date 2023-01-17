function solution(estudiantes, deathCount, nuevo) {

  for (;deathCount > 0; deathCount--) {
    estudiantes.pop();
  }

  estudiantes.push(nuevo);

  return estudiantes;
}

console.log(solution(["Nico", "Zule"], 0, "Santi"))
console.log(solution(["Juan", "Juanita", "Daniela"], 1, "Julian"))
console.log(solution(["Nath", "Luisa", "Noru"], 2, "Cami"))