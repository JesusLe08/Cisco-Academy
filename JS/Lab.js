// let contacts = [{
//     name: "Maxwell Wright",
//     phone: "(0191) 719 6495",
//     email: "Curabitur.egestas.nunc@nonummyac.co.uk"
// }, {
//     name: "Raja Villarreal",
//     phone: "0866 398 2895",
//     email: "posuere.vulputate@sed.com"
// }, {
//     name: "Helen Richards",
//     phone: "0800 1111",
//     email: "libero@convallis.edu"
// }];

// let Accion = prompt("Escriba la accion que desea realizar: Primero, Ultimo, Nuevo");

// switch (Accion) {
//     case "Primero": Message = `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`; break;
//     case "Ultimo": Message = `${contacts[2].name} / ${contacts[2].phone} / ${contacts[2].email}`; break;
//     case "Nuevo": 
//         let NuevoNombre = prompt("Introduzca el nombre del nuevo contacto");
//         let NuevoTelefono = prompt("Introduzca el telefono del contacto");
//         let NuevoCorreo = prompt("Introduzca el Correo del contacto");

//         if( !NuevoNombre || !NuevoTelefono || !NuevoCorreo) {
//             Message = "Se detectaron campos vacios, por lo que no se agrego el contacto";
//         } else {
//                 contacts.push({
//                     name: NuevoNombre,
//                     phone: NuevoTelefono,
//                     email: NuevoCorreo
//                 });

//                 let NuevoContacto = contacts[contacts.length - 1];

//             Message = `Se muestra el nuevo contacto ${NuevoContacto.name} / ${NuevoContacto.phone} / ${NuevoContacto.email}`
//         };
//         break;

//         default: Message = "Accion descrita no valida";

// }

// alert(Message);

let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

while (true) {
    let Accion = prompt("Escriba la accion que desea realizar: Primero, Ultimo, Todos, Nuevo, Salir");
    let Message = "";

    if (Accion === "Salir") {
        break;
    }

    switch (Accion) {
        case "Primero":
            Message = `${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`;
            break;

        case "Ultimo":
            let last = contacts[contacts.length - 1];
            Message = `${last.name} / ${last.phone} / ${last.email}`;
            break;

        case "Todos":
            Message = contacts.map(c => `${c.name} / ${c.phone} / ${c.email}`).join("\n");
            break;

        case "Nuevo":
            let NuevoNombre = prompt("Introduzca el nombre del nuevo contacto");
            let NuevoTelefono = prompt("Introduzca el telefono del contacto");
            let NuevoCorreo = prompt("Introduzca el correo del contacto");

            if (!NuevoNombre || !NuevoTelefono || !NuevoCorreo) {
                Message = "Se detectaron campos vacíos, no se agregó el contacto";
            } else {
                contacts.push({
                    name: NuevoNombre,
                    phone: NuevoTelefono,
                    email: NuevoCorreo
                });

                Message = "Contacto agregado correctamente";
            }
            break;

        default:
            Message = "Acción no válida";
    }

    console.log(Message);
}

