let pacientes = [
  {
    paciente: {
      nombre: "Manuel",
      edad: 25,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Marta",
      edad: 56,
      sexo: "M",
    },
    diasIngresado: 5,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Julia",
      edad: 38,
      sexo: "M",
    },
    diasIngresado: 1,
    dieta: "Sin sal",
  },
  {
    paciente: {
      nombre: "Esteban",
      edad: 40,
      sexo: "H",
    },
    diasIngresado: 3,
    dieta: "Diabetes",
  },
  {
    paciente: {
      nombre: "Arturo",
      edad: 19,
      sexo: "H",
    },
    diasIngresado: 2,
    dieta: "Baja en fibra",
  },
  {
    paciente: {
      nombre: "Isabel",
      edad: 63,
      sexo: "M",
    },
    diasIngresado: 6,
    dieta: "Sin sal",
  },
];
// filter, map y reduce, push

function enunciado(){
  return PacientesReport;
}

function filtrado(pacientes){
  return (pacientes.paciente.edad > 17);
}

function diabetes(pacientes){
  return (pacientes.paciente.sexo === "M" && pacientes.dieta === "Diabetes");
}

function ingreso(pacientes){
  return (pacientes.diasIngresado)
}

class PacientesReport {
  constructor(pacientes) {
    this.pacientes = pacientes.length;
    this.mayoresEdad = pacientes.filter(filtrado);
    this.hombresDiabeticos = pacientes.filter(diabetes);
    this.totalDiasIngreso = pacientes.filter(ingreso);
    this.mediaEdadMujeres=;
  }
}
