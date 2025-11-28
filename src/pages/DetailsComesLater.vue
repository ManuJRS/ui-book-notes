<script setup>
import BaseCardText from '../components/base/BaseCardText.vue';
import BaseText from '../components/base/BaseText.vue';
import BaseTitle from '../components/base/BaseTitle.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        Los detalles vienen después
    </BaseTitle>

    <BaseText>
        En las primeras etapas de diseñar una nueva funcionalidad, es importante no quedar atrapado tomando decisiones
        de bajo nivel sobre cosas como tipografías, sombras, íconos, etc.
        Todo eso importará eventualmente, pero ahora mismo no es relevante.
    </BaseText>

    <BaseCardText
        :items="['Si te cuesta ignorar los detalles cuando trabajas en un entorno de alta fidelidad como el navegador o tu herramienta de diseño favorita, intenta diseñar en papel usando un marcador grueso.', 'Obsesionarte con los pequeños detalles no es posible con un marcador grueso, así que es una excelente forma de explorar rápidamente muchas ideas de layout.']">
    </BaseCardText>

    <BaseTitle level="3" class="pt-4">
        Mantén el color a un lado
    </BaseTitle>

    <BaseText>
        Incluso cuando estés listo para refinar una idea con mayor fidelidad, resiste la tentación de introducir color
        inmediatamente.
    </BaseText>
    <BaseText>
        Diseñando en escala de grises, te ves obligado a usar el espaciado, el contraste y el tamaño para hacer todo el
        trabajo pesado.
    </BaseText>
    <BaseText>
        Es un poco más desafiante, pero terminarás con una interfaz más clara, con una jerarquía visual fuerte que será
        fácil de mejorar con color más adelante.
    </BaseText>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border-2 border-green-500">
            <div class="flex items-center justify-center p-4">
                <div
                    class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div class="relative">
                        <img src="https://placehold.co/400x300" alt="Product" class="w-full h-52 object-cover" />
                        <span
                            class="absolute top-3 right-3 bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Sale
                        </span>
                    </div>

                    <div class="p-5 space-y-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">Classic T-Shirt</h3>
                            <p class="text-gray-500 mt-1">Premium cotton blend</p>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="space-y-1">
                                <p class="text-2xl font-bold text-gray-900">$49.99</p>
                                <p class="text-sm text-gray-500 line-through">$69.99</p>
                            </div>

                            <div class="flex items-center gap-1">
                                <div class="text-gray-400">★★★★</div>
                                <div class="text-gray-300">★</div>
                                <span class="text-sm text-gray-600 ml-1">(42)</span>
                            </div>
                        </div>

                        <button class="w-full bg-gray-600 text-white font-medium py-3 rounded-lg transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 border-2 border-red-500">
            <div class="flex items-center justify-center p-4">
                <div
                    class="max-w-sm w-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <div class="relative">
                        <img src="https://images.tcdn.com.br/img/img_prod/881969/camisa_supremo_manga_longa_1060010631_1_c1191dcc723c845f36e597079a752819.jpg"
                            alt="Product" class="w-full h-52 object-cover" />
                        <span
                            class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Sale
                        </span>
                    </div>

                    <div class="p-5 space-y-4">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900">Classic T-Shirt</h3>
                            <p class="text-gray-500 mt-1">Premium cotton blend</p>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="space-y-1">
                                <p class="text-2xl font-bold text-gray-900">$49.99</p>
                                <p class="text-sm text-gray-500 line-through">$69.99</p>
                            </div>

                            <div class="flex items-center gap-1">
                                <div class="text-yellow-400">★★★★</div>
                                <div class="text-gray-300">★</div>
                                <span class="text-sm text-gray-600 ml-1">(42)</span>
                            </div>
                        </div>

                        <button
                            class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 rounded-lg transition-colors">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>


    </div>


    <BaseTitle level="3" class="pt-4">
        No inviertas de más
    </BaseTitle>

    <BaseText>
        La razón de diseñar en baja fidelidad es poder moverse rápido, para comenzar a construir la versión real lo
        antes posible.
        Los bocetos y wireframes son desechables — los usuarios no pueden hacer nada con maquetas estáticas.
        Úsalos para explorar tus ideas y déjalos atrás cuando ya hayas tomado una decisión.
    </BaseText>

    <BaseTitle level="3" align="left">
        No diseñes de más
    </BaseTitle>

    <BaseText>
        No necesitas diseñar cada una de las funcionalidades en una app antes de pasar a la implementación; de hecho, es
        mejor si no lo haces.
    </BaseText>

    <BaseText>
        Averiguar cómo debería interactuar cada funcionalidad en un producto y cómo debería verse cada caso extremo es
        realmente difícil, especialmente en abstracto.
    </BaseText>

    <BaseCardText :items="[
        '¿Cómo debería verse esta pantalla si el usuario tiene 2000 contactos?',
        '¿Dónde debería ir el mensaje de error en este formulario?',
        '¿Cómo debería verse este calendario cuando hay dos eventos programados al mismo tiempo?'
    ]">
    </BaseCardText>

    <BaseText>
        Te estás preparando para la frustración si intentas resolver todo eso usando solamente una herramienta de diseño
        y tu imaginación.
    </BaseText>



</template>
