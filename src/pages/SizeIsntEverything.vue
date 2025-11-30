<script setup>
import BaseCardText from '../components/base/BaseCardText.vue';
import BaseText from '../components/base/BaseText.vue';
import BaseTitle from '../components/base/BaseTitle.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        El tamaño no lo es todo
    </BaseTitle>

    <BaseText>
        Confiar demasiado en el tamaño de fuente para controlar tu jerarquía es un error —
        a menudo lleva a que el contenido principal sea demasiado grande y el contenido secundario demasiado pequeño.
    </BaseText>

    <BaseText>
        En lugar de dejarle todo el trabajo al tamaño de fuente, intenta usar el peso de la fuente o el color para
        lograr lo mismo.
    </BaseText>

    <BaseText>
        Por ejemplo, hacer un elemento primario más bold te permite usar un tamaño de fuente razonable,
        y al mismo tiempo comunica mejor su importancia.
    </BaseText>

    <BaseText>
        De la misma manera, usar un color más suave para el texto secundario,
        en lugar de un tamaño de fuente diminuto, deja claro que ese texto es menos importante
        sin sacrificar tanto la legibilidad.
    </BaseText>

    <BaseText>
        Intenta limitarte a dos o tres colores:
    </BaseText>

    <BaseCardText :items="[
        'Un color oscuro para el contenido principal (como un título de artículo).',
        'Un gris para el contenido secundario (como la fecha de publicación).',
        'Un gris más claro para contenido terciario (como un aviso de derechos de autor).'
    ]">
    </BaseCardText>

    <BaseText>
        De forma similar, dos pesos de fuente suelen ser suficientes para trabajo de UI:
    </BaseText>

    <BaseCardText :items="[
        'Un peso normal (400 o 500, dependiendo de la fuente) para la mayor parte del texto.',
        'Un peso más fuerte (600 o 700) para el texto que necesitas enfatizar.'
    ]">
    </BaseCardText>

    <BaseText>
        Evita usar pesos de fuente por debajo de 400 para UI — pueden funcionar para títulos grandes,
        pero son demasiado difíciles de leer en tamaños pequeños.
        Si estás considerando usar un peso más ligero para restar importancia a un texto,
        usa mejor un color más claro o un tamaño de fuente más pequeño.
    </BaseText>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-6 border-2 flex justify-center border-green-600 items-center">
            <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full5">
                <div class="relative">
                    <img src="https://images.tcdn.com.br/img/img_prod/881969/camisa_supremo_manga_longa_1060010631_1_c1191dcc723c845f36e597079a752819.jpg"
                        alt="Product image" class="w-full h-64 object-cover">
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h2 class="!text-[24px] !font-bold text-gray-800 mb-1">Premium Wireless Headphones</h2>
                            <p class="text-[18px] text-slate-400 ">Electronics</p>
                        </div>
                    </div>
                    <div class="py-2">
                        <p class="text-[18px] font-bold text-green-600">$129.99</p>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="text-slate-400 text-[18px] ml-2">(4.5/5)</span>
                    </div>
                    <p class="text-[18px] font-normalmb-4 text-slate-600">Experience crystal-clear sound with our
                        premium
                        wireless
                        headphones.
                        Perfect for music lovers and professionals alike.</p>
                </div>
            </div>
        </div>
        <div class="p-6 border-2 flex justify-center items-center border-red-600">
            <div class="bg-white rounded-lg shadow-md overflow-hidden max-w-sm w-full5">
                <div class="relative">
                    <img src="https://images.tcdn.com.br/img/img_prod/881969/camisa_supremo_manga_longa_1060010631_1_c1191dcc723c845f36e597079a752819.jpg"
                        alt="Product image" class="w-full h-64 object-cover">
                </div>
                <div class="p-4">
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h2 class="!text-[30px] !font-normal text-gray-800 mb-1">Premium Wireless Headphones</h2>
                            <p class="text-[14px] font-normal text-gray-800 ">Electronics</p>
                        </div>
                    </div>
                    <div class="py-2">
                        <p class="text-[24px] font-normal text-green-600">$129.99</p>
                    </div>
                    <div class="flex items-center mb-2">
                        <div class="flex text-yellow-400">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                        </div>
                        <span class="text-gray-800 text-[14px] ml-2">(4.5/5)</span>
                    </div>
                    <p class="text-[16px] font-normalmb-4 text-gray-800">Experience crystal-clear sound with our premium
                        wireless
                        headphones.
                        Perfect for music lovers and professionals alike.</p>
                </div>
            </div>
        </div>
    </div>



</template>