titulo.innerHTML = '07 - concat ';
// unir 2 arrays, para ello existe un arreay method llamado .concat

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
const meses2 = ['Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];


// Unir 2 arreglos con concat...
const meses3 = meses.concat(meses2);
console.log(meses3);

// Existe otra forma... que es con rest operator o spread operator..
const meses4 = [...meses,...meses2 ]; // Tienes que asegurarte de que sean arrays cuando usas ...  'Otro mes'
console.log(meses4)

