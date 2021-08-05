do{
    let usuario = prompt("Ingrese el usuario");
    let contrasena = prompt("Ingrese el contraseña");
    var bandera = {
        usuario: usuario!="Miguel",
        contrasena: contrasena!="123",
        condicion: usuario!="Miguel" || contrasena!="123"
    };
    if(!bandera.condicion) alert(`Bienvenido Usario`);
    if(bandera.usuario) alert(`El usuario ${usuario} no existe`);
    if(bandera.contrasena) alert(`La contraseña ${contrasena} no existe`);

}while(bandera.condicion);










// let bandera = true;
// while(bandera){
//     console.log(bandera);
//     let usuario = prompt("Ingrese el usuario");
//     if(usuario=="Miguel"){
//         let contrasena = prompt("Ingrese el contraseña");
//         if(contrasena=="123"){
//             alert(`Bienvenido Usario`);
//             bandera = false;
//         }else{
//             alert(`La contraseña ${contrasena} no existe`);
//         }
//     }else{
//         alert(`El usuario ${usuario} no existe`);
//     }



//     // let usuario = prompt("Ingrese el usuario");
//     // let contrasena = undefined;
//     // bandera = (usuario=="Miguel")
//     //     ?(contrasena=prompt("Ingrese el contraseña"),
//     //         (contrasena=="123")
//     //             ?(
//     //                 alert(`Bienvenido Usario`),
//     //                 false
//     //             ):(alert(`La contraseña ${contrasena} no existe`),true)
//     //     ):(alert(`El usuario ${usuario} no existe`),true);
// }



// let papitas = 10;
// while(papitas>=0){
//     console.log(`Tengo ${papitas} papitas`);
//     papitas--;
// }