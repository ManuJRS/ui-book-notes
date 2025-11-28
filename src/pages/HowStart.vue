<script setup>
import BaseTitle from '../components/base/BaseTitle.vue';
import BaseText from '../components/base/BaseText.vue';
import BaseCardText from '../components/base/BaseCardText.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        Empieza con una funcionalidad, no con un layout
    </BaseTitle>
    <BaseText>
        Cuando comienzas el diseño de una nueva idea de app, ¿qué es lo primero que diseñas?
        Si es la barra de navegación en la parte superior de la página, estás cometiendo un error.
    </BaseText>
    <BaseCardText
        :items="['¿Debería tener una barra superior o una barra lateral?', '¿Los elementos de navegación deberían ir a la izquierda o a la derecha?', '¿El contenido de la página debería estar en un contenedor o ser de ancho completo?', '¿Dónde debería ir el logo?']">
        La forma más fácil de frustrarte y quedarte atascado al trabajar en un nuevo diseño es intentar “diseñar la
        app”. Cuando la mayoría de la gente piensa en “diseñar la app”, están pensando en la envoltura.
    </BaseCardText>
    <BaseText>
        El asunto es que una “app” en realidad es una colección de funcionalidades.
        Antes de diseñar algunas funcionalidades, ni siquiera tienes la información necesaria para decidir cómo debería
        funcionar la navegación. ¡Por eso es tan frustrante!
    </BaseText>
    <BaseTitle level="3">
        Comienza con una pieza de funcionalidad real
    </BaseTitle>
    <BaseText>
        Por ejemplo, digamos que estás creando un servicio para reservar vuelos. Puedes comenzar con una funcionalidad
        como “buscar un vuelo”.
    </BaseText>
    <BaseCardText
        :items="['Un campo para la ciudad de salida', 'Un campo para la ciudad de destino', 'Un campo para la fecha de salida', 'Un campo para la fecha de regreso', 'Un botón para realizar la búsqueda']">
    </BaseCardText>
    <!-- component -->

    <body class="flex items-center justify-center mt-10">
        <div class="bg-white p-8 rounded shadow-md max-w-md w-full mx-auto">
            <h2 class="text-2xl font-semibold mb-4">Inscription</h2>
            <form action="#" method="POST">
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="firstName" class="block text-sm font-medium text-gray-700">Ciudad de salida</label>
                        <input type="text" id="firstName" name="firstName" class="mt-1 p-2 w-full border rounded-md">
                    </div>
                    <div>
                        <label for="lastName" class="block text-sm font-medium text-gray-700">Ciudad de destino</label>
                        <input type="text" id="lastName" name="lastName" class="mt-1 p-2 w-full border rounded-md">
                    </div>
                </div>
                <div class="mt-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">Fecha de salida</label>
                    <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md">
                </div>
                <div class="mt-4">
                    <label for="password" class="block text-sm font-medium text-gray-700">Fecha de regreso</label>
                    <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md">
                </div>
                <div class="mt-6">
                    <button type="submit" class="w-full p-3 bg-gray-600 text-white rounded-md">Reservar</button>
                </div>
            </form>
        </div>
    </body>

</template>