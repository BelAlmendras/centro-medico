let radiologia = [
    { Hora: "11:00", Especialista: "Ignacio Schulz", Paciente: "Francisca Rojas", Rut: "9878782-1", Prevision: "Fonasa" },
    { Hora: "11:30", Especialista: "Federico Subercaseaux", Paciente: "Pamela Estrada", Rut: "15345241-3", Prevision: "Isapre" },
    { Hora: "15:00", Especialista: "Fernando Wurthz", Paciente: "Armando Luna", Rut: "16445345-9", Prevision: "Isapre" },
    { Hora: "15:30", Especialista: "Ana Maria Godoy", Paciente: "Manuel Godoy", Rut: "17666419-0", Prevision: "Fonasa" },
    { Hora: "16:00", Especialista: "Patricia Suazo", Paciente: "Ramon Ulloa", Rut: "14989389-K", Prevision: "Fonasa" },
]

let traumatologia = [
    { Hora: "08:00", Especialista: "Maria Paz Altuzarra", Paciente: "Paula Sanchez", Rut: "15554774-5", Prevision: "Fonasa" },
    { Hora: "10:00", Especialista: "Raul Araya", Paciente: "Angelica Navas", Rut: "154444147-9", Prevision: "Isapre" },
    { Hora: "10:30", Especialista: "Maria Arriagada", Paciente: "Ana Klapp", Rut: "117879423-9", Prevision: "Isapre" },
    { Hora: "11:00", Especialista: "Alejandro Badilla", Paciente: "Felipe Mardones", Rut: "1547423-6", Prevision: "Isapre" },
    { Hora: "11:30", Especialista: "Cecilia Budnik", Paciente: "Diego Marre", Rut: "16554741-K", Prevision: "Fonasa" },
    { Hora: "12:00", Especialista: "Arturo Cavagnaro", Paciente: "Cecilia Mendez", Rut: "9747535-8", Prevision: "Isapre" },
    { Hora: "12:30", Especialista: "Andres Kanacri", Paciente: "Marcial Suazo", Rut: "11254785-5", Prevision: "Isapre" },
]

let dental = [
    { Hora: "08:30", Especialista: "Andrea Zuñiga", Paciente: "Marcela Retamal", Rut: "11123425-6", Prevision: "Isapre" },
    { Hora: "11:00", Especialista: "Maria Pia Zañartu", Paciente: "Angel Muñoz", Rut: "9878789-2", Prevision: "Isapre" },
    { Hora: "11:30", Especialista: "Scarlett Witting", Paciente: "Mario Kast", Rut: "7998789-5", Prevision: "Fonasa" },
    { Hora: "13:00", Especialista: "Francisco Von Teuber", Paciente: "Karin Fernandez", Rut: "18887662-K", Prevision: "Fonasa" },
    { Hora: "13:30", Especialista: "Eduardo Viñuela", Paciente: "Hugo Sanchez", Rut: "17665461-4", Prevision: "Fonasa" },
    { Hora: "14:00", Especialista: "Raquel Villaseca", Paciente: "Ana Sepulveda", Rut: "14441281-0", Prevision: "Isapre" },
]

// 1. Agregar las siguientes horas al arreglo de Traumatología (2 Puntos): 
traumatologia.push ({Hora: "09:00", Especialista: "René Poblete", Paciente: "Ana Gellona", Rut: "13123329-7", Prevision: "Isapre"},
    {Hora: "09:30", Especialista: "Maria Solar", Paciente: "Ramiro Andrade", Rut: "12221451-K",  Prevision: "Fonasa"},
    {Hora: "10:00", Especialista: "Raul Loyola", Paciente: "Carmen Isla", Rut: "10112348-3", Prevision: "Isapre"},
    {Hora: "10:30", Especialista: "Antonio Larenas", Paciente: "Pablo Loayza", Rut: "13453234-1", Prevision: "Isapre"},
    {Hora: "12:00", Especialista: "Matias Aravena", Paciente: "Susana Poblete", Rut: "14345656-6", Prevision: "Fonasa"}
)

// 2. Eliminar el primer y último elemento del arreglo de Radiología (1 Punto).
radiologia.shift ();
radiologia.pop ();

//3. Imprimir en la página HTML, mediante document.write y/o las funciones que estime conveniente, 
//la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y 
//cada fila de información debe estar
//separada por un párrafo (2 Puntos). 

const listaDental = document.getElementById("listadental");
dental.forEach(cita => {
    listaDental.innerHTML += `Paciente: ${cita.Paciente} - Rut: ${cita.Rut} - Especialista: ${cita.Especialista} - Hora: ${cita.Hora} - Previsión: ${cita.Prevision}<br><br>`;
});


//4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico.
//Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo (3 Puntos) 
let Pacientes = radiologia.concat(traumatologia, dental);

const listadoPacientes = document.getElementById("listaPacientes");
const nombresPacientes = Pacientes.map((cita, index) => `${index + 1}. ${cita.Paciente}`).join("<br>");
listadoPacientes.innerHTML = nombresPacientes;

//5. Filtrar aquellos pacientes que indican ser de ISAPRE en la lista de consultas médicas
//de Dental (1 Punto). 
let pacientesIsapre = dental.filter(cita => cita.Prevision === "Isapre");
const dentalIsapre = document.getElementById("dentalIsapre");
const ListadoIsapreDental = pacientesIsapre.map((citas, index) => `${index + 1}. ${citas.Paciente}`).join("<br>");
dentalIsapre.innerHTML = ListadoIsapreDental;

//6. Filtrar aquellos pacientes que indican ser de FONASA en la lista de consultas médicas
//de Traumatología (1 Punto)

let pacientesFonasa = traumatologia.filter(cita => cita.Prevision === "Fonasa");
const traumaFonasa = document.getElementById("traumaFonasa");
const ListadoFonasaTrauma = pacientesFonasa.map((citas, index) => `${index + 1}. ${citas.Paciente}`).join("<br>");
traumaFonasa.innerHTML = ListadoFonasaTrauma;
//---Fin Desafío

document.write("<h1>Estadísticas Centro Médico Ñuñoa</h1>");

document.write("<h2>Radiologia</h2>")
document.write(`Primera Atención: ${radiologia[0].Paciente} - ${radiologia[0].Prevision} | Última Atención: ${radiologia[radiologia.length - 1].Paciente} - ${radiologia[radiologia.length - 1].Prevision}`);


document.write("<h2>Traumatologia</h2>")
document.write(`Primera Atención: ${traumatologia[0].Paciente} - ${traumatologia[0].Prevision} | Última Atención: ${traumatologia[traumatologia.length - 1].Paciente} - ${traumatologia[traumatologia.length - 1].Prevision}`);

document.write("<h2>Dental</h2>")
document.write(`Primera Atención: ${dental[0].Paciente} - ${dental[0].Prevision} | Última Atención: ${dental[dental.length - 1].Paciente} - ${dental[dental.length - 1].Prevision}`);

let infoTrauma = "";



for (let i = 0; i < traumatologia.length; i++) {
    infoTrauma += `
    <tr>
         <td>${traumatologia[i].Hora}</td>
         <td>${traumatologia[i].Especialista}</td>
         <td>${traumatologia[i].Paciente}</td>
         <td>${traumatologia[i].Rut}</td>
         <td>${traumatologia[i].Prevision}</td>
    </tr>`;
}

document.getElementById("tablaTraumatologia").innerHTML = infoTrauma;

let infoRadio = "";

for (let i = 0; i < radiologia.length; i++) {
    infoRadio += `
    <tr>
         <td>${radiologia[i].Hora}</td>
         <td>${radiologia[i].Especialista}</td>
         <td>${radiologia[i].Paciente}</td>
         <td>${radiologia[i].Rut}</td>
         <td>${radiologia[i].Prevision}</td>
    </tr>`;
}

document.getElementById("tablaRadiologia").innerHTML = infoRadio;

let infoDental = `
    <tr>
        <th>Hora</th>
        <th>Especialista</th>
        <th>Paciente</th>
        <th>Rut</th>
        <th>Previsión</th>
    </tr>`;

for (let i = 0; i < dental.length; i++) {
    infoDental += `
    <tr>
         <td>${dental[i].Hora}</td>
         <td>${dental[i].Especialista}</td>
         <td>${dental[i].Paciente}</td>
         <td>${dental[i].Rut}</td>
         <td>${dental[i].Prevision}</td>
    </tr>`;
}

document.getElementById("tablaDental").innerHTML = infoDental;
