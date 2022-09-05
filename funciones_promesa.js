const promesa = new Promise((resolve, reject)=>(10 === 10)?resolve("Los valores son iguales"):reject('Los valores son distintos'))
 
 console.log(promesa.then(respuesta => console.log(respuesta)).catch((error)=>console.log(error)))

 // Promesa dentro en una función.
 const promesaDos = provincia => new Promise( (resolve, reject)=>('Formosa' === provincia)?resolve('Usted está ubicado en Formosa'):reject('Error al realizar la consulta'))
console.log(promesaDos("Bermejo").then(respuesta =>console.log(respuesta)).catch((error)=>console.log(error)))


// ```JS
const  promesaTres = valorBooleano =>  new Promise( (resolve,reject)=>( true === valorBooleano ) ? resolve('Los valores son iguales'): reject('Los valores son distintos'))
console.log(promesaTres(true).then(respuesta =>console.log(respuesta)).catch((error) => console.long(Error)))


// ```JSfunction promesaCuatro(){
    
// ```JS
const promesaCuatro = async ( valorBooleano) => {
    try{
        const res = await promesaTres(valorBooleano);
        console.log(`${res} con await incorporado`)
    }catch(error){
        console.log(error)
    }
    }
    promesaCuatro(4==2+2)

//     new Promise( ()=> {
//         ( true === arguments )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaCuatro()
// ```