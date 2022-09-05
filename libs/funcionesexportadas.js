const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// // Función que retorna los datos de provincias
 const obtenerPcias = async () => {
    await retrasar(1800);
    try {
    //para pasar de json a javascrits
        const consulta = await fetch('https://apis.datos.gob.ar/georef/api/provincias')
        .then(res=>res.json()
        .then(data=>console.log (data)))
    }catch(error){
        console.log(error)
    }
}
// console.log(obtenerPcias());
// //Función que retorna los datos de departamentos
const obtenerDtos = async () => {
     await retrasar(1391);
     try{
        const consultaDto = await fetch("https://apis.datos.gob.ar/georef/api/departamentos")
        .then(resDto=>resDto.json())
        .then(dataDto=>console.log (dataDto))
       }catch(error){
        console.log(error)
       }
     }
 console.log(obtenerDtos());

// // // Función que retorna los datos de localidades
const obtenerLocalidades = async () => {
   await retrasar(900);
   try{
const consultaLoca = await fetch("https://apis.datos.gob.ar/georef/api/localidades")
.then(resLoca=>resLoca.json())
        .then(dataLoca=>console.log (dataLoca))
       }catch(error){
        console.log(error)
       }
     }
 console.log(obtenerLocalidades());

// // Funcion para obtener todos los datos
 consultarDatos = async () => {
     try{
       const provincias = obtenerPcias();
       const dptos = obtenerDptos();
       const localidades = obtenerLocalidades();
     } catch (err){console.log(err)}
    //  const provincias = obtenerPcias();
    //  const dptos = obtenerDptos();
    // const localidades = obtenerLocalidades();
    console.log(provincias);
    console.log(dptos);
    console.log(localidades);

 }
console.log(consultarDatos());
    await retrasar(1800);
    const funcionesguarda ={retrasar,obtenerPcias, obtenerDtos,obtenerLocalidades};
    export default funcionesguarda;