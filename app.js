const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


let getInfo = async(direccion) => {

    try {

        let coors = await lugar.getlugar(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `el clima en ${coors.direccion} es de ${temp}`;
    } catch (e) {
        return `no se pudo deerminar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));