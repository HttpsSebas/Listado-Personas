const personas = [
    
];

function mostrarPersonas(){
    console.log("Mostrar personas...");
    const padre = document.getElementById("personas");
    let id = 1;
    padre.innerHTML = '';
    for(let persona of personas){
        console.log(persona);
        const nuevoElemento = document.createElement("li");
        nuevoElemento.innerHTML = `${id} ${persona.nombre} ${persona.apellido} ${persona.edad} ${persona.dni} `;
        const boton = document.createElement("button");
        boton.classList.add("borrar");
        boton.id = "b-" + persona.dni;
        boton.innerText = "X";
        
        boton.addEventListener("click", function(){
            const index = personas.findIndex(p => p.dni == persona.dni);
            if(index !== -1){
            personas.splice(index, 1);
            mostrarPersonas();
        }
        });

        nuevoElemento.appendChild(boton);
        padre.appendChild(nuevoElemento);

        id++;
    }

}

function agregarPersona(){
    const forma = document.forms["forma"];
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];
    const edad = forma["edad"];
    const dni = forma["dni"];
    if(nombre.value != '' && apellido.value != '' && edad.value != '' && dni.value != ''){
        const persona = new Persona(nombre.value, apellido.value, edad.value, dni.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        alert("Agrega información por favor");
    }
}




