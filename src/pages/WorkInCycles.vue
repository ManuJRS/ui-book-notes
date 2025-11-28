<script setup>
import BaseText from '../components/base/BaseText.vue';
import BaseTitle from '../components/base/BaseTitle.vue';

</script>

<template>
    <BaseTitle level="1" align="left">
        Trabaja en ciclos
    </BaseTitle>

    <BaseText>
        En lugar de diseñarlo todo desde el principio, trabaja en ciclos cortos.
        Comienza diseñando una versión simple de la siguiente funcionalidad que quieras construir.
    </BaseText>

    <BaseText>
        Una vez que estés satisfecho con el diseño básico, hazlo real.
    </BaseText>

    <BaseText>
        Probablemente encontrarás algo de complejidad inesperada en el camino, pero ese es el punto:
        es mucho más fácil corregir problemas de diseño en una interfaz que realmente puedes usar
        que intentar imaginar cada caso extremo por adelantado.
    </BaseText>

    <BaseText>
        Itera sobre el diseño funcional hasta que no haya más problemas que resolver,
        luego vuelve al modo de diseño y comienza a trabajar en la siguiente funcionalidad.
    </BaseText>

    <BaseText>
        No te abrumes trabajando en abstracto. Construye la versión real tan pronto como sea posible
        para que tu imaginación no tenga que hacer todo el trabajo pesado.
    </BaseText>

    <BaseTitle level="3">
        Sé pesimista
    </BaseTitle>

    <BaseText>
        No insinúes funcionalidades en tus diseños que aún no estás listo para construir.
    </BaseText>

    <BaseText>
        Por ejemplo, digamos que estás trabajando en un sistema de comentarios para una herramienta
        de gestión de proyectos. Sabes que algún día te gustaría que los usuarios pudieran adjuntar
        archivos a sus comentarios, así que incluyes una sección de adjuntos en tu diseño.
    </BaseText>

    <BaseText>
        Te metes de lleno en la implementación y descubres que soportar adjuntos es
        mucho más trabajo del que anticipaste. No tienes tiempo para terminarlo ahora,
        así que todo el sistema de comentarios queda en pausa mientras atiendes otras prioridades.
    </BaseText>

    <BaseText>
        El asunto es que un sistema de comentarios sin adjuntos habría sido mucho mejor
        que ningún sistema de comentarios. Pero como planeaste incluirlos desde el día uno,
        ahora no tienes nada que puedas entregar.
    </BaseText>

    <BaseText>
        Cuando estés diseñando una nueva funcionalidad, espera que sea difícil de construir.
        Diseñar la versión más pequeña y útil que puedas entregar reduce ese riesgo considerablemente.
    </BaseText>

    <BaseText>
        Si parte de una funcionalidad es un “nice-to-have”, diseña esa parte después.
        Construye primero la versión simple y siempre tendrás algo a lo que recurrir.
    </BaseText>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border-2 border-green-500">
            <form class="px-4">
                <div class="border-b border-gray-900/10 pb-12 bg-gray-100 rounded-md">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pl-3 pr-3 ">
                        <div class="col-span-full">
                            <div class="mt-2 flex items-center gap-x-3">
                                <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <h4 class="text-gray-900">Usuario uno</h4>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Deja tu
                                comentario</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="3"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
        </div>
        <div class="p-6 border-2 border-red-500">
            <form class="px-4">
                <div class="border-b border-gray-900/10 pb-12 bg-gray-100 rounded-md">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 pl-3 pr-3 ">
                        <div class="col-span-full">
                            <div class="mt-2 flex items-center gap-x-3">
                                <svg class="h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                        clip-rule="evenodd" />
                                </svg>
                                <h4 class="text-gray-900">Usuario uno</h4>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Deja tu
                                comentario</label>
                            <div class="mt-2">
                                <textarea id="about" name="about" rows="3"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
                            </div>
                        </div>
                        <div class="col-span-full">
                            <label for="cover-photo" class="block text-sm font-medium leading-6 text-gray-900">Upload a
                                file</label>
                            <div
                                class="mt-2 flex justify-center rounded-lg border border-dashed bg-green-100 border-gray-900/25 px-6 py-10">
                                <div class="text-center">
                                    <svg class="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <div class="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label for="file-upload"
                                            class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" class="sr-only">
                                        </label>
                                        <p class="pl-1">or drag and drop</p>
                                    </div>
                                    <p class="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>