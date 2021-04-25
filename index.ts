// crear las clases Edificio, Piso y Departamento aquí

class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  getName() {
    return this.nombre;
  }
}

class Piso {
  nombre: string;
  departamentos: Departamento[] = [];
  constructor(nombre: string) {
    this.nombre = nombre;
  }
  pushDepartamento(departamento: Departamento) {
    return this.departamentos.push(departamento);
  }
  getDepartamentos() {
    return this.departamentos;
  }
}

class Edificio {
  piso: Piso[] = [];
  constructor(piso: Piso[]) {
    this.piso = piso;
  }
  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    const piso = this.piso.find(function (a) {
      if (a.nombre == nombreDePiso) {
        return a.nombre;
      } else {
        throw "Error, no se encuentra el piso";
      }
    });
    return piso.pushDepartamento(departamento);
  }
  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    const piso = this.piso.find(function (b) {
      return b.nombre == nombreDePiso;
    });
    return piso.getDepartamentos();
  }
}

// no modificar este test
function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
