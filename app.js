   // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
        // Arreglo para almacenar los nombres de todos los amigos 
        let amigos = [];

        // Esta función permitirá agregar a los N amigos
        function agregarAmigo() {
            const inputAmigo = document.getElementById('amigo');
            const nombreAmigo = inputAmigo.value.trim(); // Aquí corregimos .ariaValueMax a .value

            // Validar que el campo no esté vacío
            if (nombreAmigo === "") {
                alert("Asigne el nombre del amigo");
                return; // Detiene la ejecución de la función
            }

            // Verifica si el nombre está duplicado
            if (amigos.includes(nombreAmigo)) {
                alert(`El nombre ${nombreAmigo} ya está en la lista`);
                return;
            }

            // Nombre del arreglo de amigos
            amigos.push(nombreAmigo);

            // Limpiar el campo de texto
            inputAmigo.value = "";

            // Actualizar HTML
            actualizarLista();
        }

        // Esta función hace la lista actual de amigos
        function actualizarLista() {
            const listaAmigos = document.getElementById('listaAmigos');
            // Limpiar lista actual
            listaAmigos.innerHTML = ""; 

            // Translada el arreglo a la lista HTML
            for (let i = 0; i < amigos.length; i++) {
                const li = document.createElement('li');
                li.textContent = amigos[i];
                listaAmigos.appendChild(li);
            }
        }

        // Esta función hace el sorteo de amigo
        function sortearAmigo() {
            // Comprobar que haya amigos inscritos
            if (amigos.length === 0) {
                alert("No has inscrito ningún amigo, por favor agrega amigos");
                return;
            }

            // Generador aleatorio
            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[indiceAleatorio]; // Cambié los paréntesis por corchetes

            // Impresión de resultados
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
        }