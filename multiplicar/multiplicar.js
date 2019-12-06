const fs = require('fs');

let listarTabla = async (base, limite = 10) => {
    if (!Number(base)) {
        throw new Error(`El valor introducido ${base} no es un numero`);
    }
    let data = await creteTable(base, limite);
    return data;
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
        }
        creteTable(base, limite).then(data =>{
            fs.writeFile(`tablas/tabla_${base}.txt`, data, (err) => {
                if (err) reject(err);
                else resolve(`tabla_${base}.txt`);
            });
        });
    });
}

let creteTable = async (base, limite) => {
    let data = '';
    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i} \n`;
    }
    return data;
}

module.exports = {
    crearArchivo,
    listarTabla
}