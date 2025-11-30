<script setup>
import BaseTitle from '../components/base/BaseTitle.vue';
import BaseText from '../components/base/BaseText.vue';
</script>

<template>
    <BaseTitle level="1" align="left">
        No todos los elementos son iguales
    </BaseTitle>

    <BaseText>
        Cuando piensas en diseño visual como “estilizar cosas para que se vean bien”,
        es fácil entender por qué podría parecer difícil lograrlo sin talento artístico innato.
        Pero resulta que uno de los factores más importantes para que algo “se vea bien”
        no tiene nada que ver con el estilo superficial.
    </BaseText>

    <BaseText>
        La <em>jerarquía visual</em> se refiere a qué tan importantes parecen los elementos en una interfaz
        en relación con los demás, y es la herramienta más efectiva que tienes para hacer que algo se sienta “bien
        diseñado”.
    </BaseText>

    <BaseText>
        Cuando todo en una interfaz compite por atención, se siente ruidoso y caótico,
        como un gran muro de contenido donde no está claro qué es realmente importante.
    </BaseText>
    <div class="pt-4 pb-4 flex items-center justify-center border-2 border-red-600">
        <div class="w-full max-w-5xl bg-white rounded-xl shadow-md p-6 space-y-6">

            <!-- Top summary cards -->
            <div class="grid gap-4 md:grid-cols-3">
                <!-- Card 1 -->
                <div class="border border-gray-200 rounded-lg px-4 py-3">
                    <p class="text-xs uppercase text-gray-400 tracking-wide">
                        Total Balance
                    </p>
                    <p class="text-xl font-semibold text-gray-900">
                        $16,412.92
                    </p>
                    <p class="text-xs text-green-500 mt-1">
                        +$648.83
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="border border-gray-200 rounded-lg px-4 py-3">
                    <p class="text-xs uppercase text-gray-400 tracking-wide">
                        Investments
                    </p>
                    <p class="text-xl font-semibold text-gray-900">
                        $15,606.14
                    </p>
                    <p class="text-xs text-green-500 mt-1">
                        +$648.83
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="border border-gray-200 rounded-lg px-4 py-3">
                    <p class="text-xs uppercase text-gray-400 tracking-wide">
                        Cash
                    </p>
                    <p class="text-xl font-semibold text-gray-900">
                        $806.78
                    </p>
                    <p class="text-xs text-gray-400 mt-1">
                        Placeholder
                    </p>
                </div>
            </div>

            <!-- Tabs -->
            <div class="border-b border-gray-200">
                <nav class="flex gap-6 text-sm">
                    <button class="py-2 border-b-2 border-gray-900 font-medium text-gray-900">
                        Holdings
                    </button>
                    <button class="py-2 text-gray-500 hover:text-gray-900">
                        Activity
                    </button>
                    <button class="py-2 text-gray-500 hover:text-gray-900">
                        Performance
                    </button>
                    <button class="py-2 text-gray-500 hover:text-gray-900">
                        Gain &amp; Loss
                    </button>
                </nav>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
                <table class="min-w-full text-xs md:text-sm text-left">
                    <thead>
                        <tr class="border-b border-gray-200 text-gray-500">
                            <th class="py-2 pr-4">Name</th>
                            <th class="py-2 pr-4">Quantity</th>
                            <th class="py-2 pr-4">Price</th>
                            <th class="py-2 pr-4">Avg Cost</th>
                            <th class="py-2 pr-4">Mkt Value</th>
                            <th class="py-2 pr-4">Gain/Loss</th>
                            <th class="py-2 pr-4">Gain/Loss%</th>
                            <th class="py-2 pr-4">% of Portfolio</th>
                            <th class="py-2 pr-4 text-right">Buy/Sell</th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-100">
                        <!-- Row 1 -->
                        <tr class="align-middle">
                            <td class="py-3 pr-4">
                                <p class="font-medium text-gray-900 text-xs md:text-sm">
                                    TDB900 - Lorem Index
                                </p>
                                <p class="text-gray-400 text-[11px]">
                                    Lorem ipsum dolor sit amet.
                                </p>
                            </td>
                            <td class="py-3 pr-4">140.143</td>
                            <td class="py-3 pr-4">$25.70</td>
                            <td class="py-3 pr-4">$24.49</td>
                            <td class="py-3 pr-4">$3,601.68</td>
                            <td class="py-3 pr-4 text-green-500">$170.00</td>
                            <td class="py-3 pr-4 text-green-500">+4.95%</td>
                            <td class="py-3 pr-4">10.10%</td>
                            <td class="py-3 pr-0 text-right">
                                <div class="inline-flex gap-2">
                                    <button
                                        class="px-3 py-1 text-xs rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50">
                                        Buy
                                    </button>
                                    <button
                                        class="px-3 py-1 text-xs rounded-md border border-red-500 text-red-500 hover:bg-red-50">
                                        Sell
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- Row 2 -->
                        <tr class="align-middle">
                            <td class="py-3 pr-4">
                                <p class="font-medium text-gray-900 text-xs md:text-sm">
                                    TDB902 - Ipsum US Index
                                </p>
                                <p class="text-gray-400 text-[11px]">
                                    Consectetur adipiscing elit.
                                </p>
                            </td>
                            <td class="py-3 pr-4">65.218</td>
                            <td class="py-3 pr-4">$54.86</td>
                            <td class="py-3 pr-4">$51.95</td>
                            <td class="py-3 pr-4">$3,577.86</td>
                            <td class="py-3 pr-4 text-green-500">$189.70</td>
                            <td class="py-3 pr-4 text-green-500">+5.60%</td>
                            <td class="py-3 pr-4">12.90%</td>
                            <td class="py-3 pr-0 text-right">
                                <div class="inline-flex gap-2">
                                    <button
                                        class="px-3 py-1 text-xs rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50">
                                        Buy
                                    </button>
                                    <button
                                        class="px-3 py-1 text-xs rounded-md border border-red-500 text-red-500 hover:bg-red-50">
                                        Sell
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <!-- Row 3 -->
                        <tr class="align-middle">
                            <td class="py-3 pr-4">
                                <p class="font-medium text-gray-900 text-xs md:text-sm">
                                    TDB909 - Dolor Bond Index
                                </p>
                                <p class="text-gray-400 text-[11px]">
                                    Sed do eiusmod tempor.
                                </p>
                            </td>
                            <td class="py-3 pr-4">415.872</td>
                            <td class="py-3 pr-4">$11.64</td>
                            <td class="py-3 pr-4">$11.63</td>
                            <td class="py-3 pr-4">$4,840.75</td>
                            <td class="py-3 pr-4 text-red-500">-$6.01</td>
                            <td class="py-3 pr-4 text-red-500">-0.12%</td>
                            <td class="py-3 pr-4">8.00%</td>
                            <td class="py-3 pr-0 text-right">
                                <div class="inline-flex gap-2">
                                    <button
                                        class="px-3 py-1 text-xs rounded-md border border-blue-500 text-blue-500 hover:bg-blue-50">
                                        Buy
                                    </button>
                                    <button
                                        class="px-3 py-1 text-xs rounded-md border border-red-500 text-red-500 hover:bg-red-50">
                                        Sell
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </div>
    <BaseText>
        Cuando reduces intencionalmente la importancia de la información secundaria y terciaria,
        y te esfuerzas por resaltar los elementos más importantes,
        el resultado es inmediatamente más agradable, incluso cuando la paleta de colores,
        la tipografía y el layout no han cambiado en absoluto.
    </BaseText>
    <!-- Contenedor general -->
    <div class="flex items-center justify-center p-6 border-2 border-green-600">
        <div class="w-full max-w-5xl rounded-3xl shadow-lg overflow-hidden bg-white">
            <!-- BARRA AZUL SUPERIOR -->
            <div class="bg-sky-700 text-white px-8 py-6 grid gap-6 md:grid-cols-3">
                <!-- Card 1 -->
                <div>
                    <p class="text-xs font-semibold tracking-[0.18em] uppercase text-sky-100">
                        Total Balance
                    </p>
                    <p class="mt-2 text-3xl font-semibold">
                        $16,412.92
                    </p>
                    <p class="mt-1 text-xs text-sky-100">
                        +$648.83
                    </p>
                </div>

                <!-- Card 2 -->
                <div>
                    <p class="text-xs font-semibold tracking-[0.18em] uppercase text-sky-100">
                        Investments
                    </p>
                    <p class="mt-2 text-3xl font-semibold">
                        15,606.14
                    </p>
                    <p class="mt-1 text-xs text-sky-100">
                        +$648.83
                    </p>
                </div>

                <!-- Card 3 -->
                <div>
                    <p class="text-xs font-semibold tracking-[0.18em] uppercase text-sky-100">
                        Cash
                    </p>
                    <p class="mt-2 text-3xl font-semibold">
                        $806.78
                    </p>
                    <p class="mt-1 text-xs text-sky-100">
                        Placeholder
                    </p>
                </div>
            </div>

            <!-- CONTENIDO BLANCO -->
            <div class="px-6 pb-6 pt-4 bg-white">
                <!-- Tabs -->
                <div class="mb-4">
                    <div class="inline-flex rounded-full bg-slate-100 p-1 text-xs md:text-sm">
                        <button class="px-4 py-1 rounded-full bg-white shadow text-slate-900 font-medium">
                            Holdings
                        </button>
                        <button class="px-4 py-1 rounded-full text-slate-500">
                            Activity
                        </button>
                        <button class="px-4 py-1 rounded-full text-slate-500">
                            Performance
                        </button>
                        <button class="px-4 py-1 rounded-full text-slate-500">
                            Gain &amp; Loss
                        </button>
                    </div>
                </div>

                <!-- Tabla -->
                <div class="overflow-x-auto">
                    <table class="min-w-full text-[11px] md:text-xs text-left">
                        <thead>
                            <tr class="border-b border-slate-200 text-slate-500">
                                <th class="py-2 pr-4">Name</th>
                                <th class="py-2 pr-4">Quantity</th>
                                <th class="py-2 pr-4">Price</th>
                                <th class="py-2 pr-4">Avg Cost</th>
                                <th class="py-2 pr-4">Mkt Value</th>
                                <th class="py-2 pr-4">Gain/Loss</th>
                                <th class="py-2 pr-4">% of Portfolio</th>
                                <th class="py-2 pr-0 text-right">Buy/Sell</th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-slate-100">
                            <!-- Row 1 -->
                            <tr>
                                <td class="py-3 pr-4">
                                    <p class="font-semibold text-slate-900">TDB900</p>
                                    <p class="text-[10px] text-slate-400">
                                        TD CDN INDX E. N/LFRAC
                                    </p>
                                </td>
                                <td class="py-3 pr-4">140.143</td>
                                <td class="py-3 pr-4">$25.70</td>
                                <td class="py-3 pr-4">$24.49</td>
                                <td class="py-3 pr-4">$3,601.68</td>
                                <td class="py-3 pr-4">
                                    <span class="block text-emerald-500 font-semibold">
                                        +$170.00
                                    </span>
                                    <span class="block text-[10px] text-emerald-500">
                                        +4.95%
                                    </span>
                                </td>
                                <td class="py-3 pr-4">10.10%</td>
                                <td class="py-3 pr-0 text-right">
                                    <div class="inline-flex gap-2">
                                        <button
                                            class="px-3 py-1 text-[11px] rounded border border-slate-300 text-slate-700 bg-white">
                                            Buy
                                        </button>
                                        <button
                                            class="px-3 py-1 text-[11px] rounded border border-slate-300 text-slate-700 bg-white">
                                            Sell
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <!-- Row 2 -->
                            <tr>
                                <td class="py-3 pr-4">
                                    <p class="font-semibold text-slate-900">TDB902</p>
                                    <p class="text-[10px] text-slate-400">
                                        TD US INDX C$ E. N/LFRAC
                                    </p>
                                </td>
                                <td class="py-3 pr-4">65.218</td>
                                <td class="py-3 pr-4">$54.86</td>
                                <td class="py-3 pr-4">$51.95</td>
                                <td class="py-3 pr-4">$3,577.86</td>
                                <td class="py-3 pr-4">
                                    <span class="block text-emerald-500 font-semibold">
                                        +$189.70
                                    </span>
                                    <span class="block text-[10px] text-emerald-500">
                                        +5.60%
                                    </span>
                                </td>
                                <td class="py-3 pr-4">12.90%</td>
                                <td class="py-3 pr-0 text-right">
                                    <div class="inline-flex gap-2">
                                        <button
                                            class="px-3 py-1 text-[11px] rounded border border-slate-300 text-slate-700 bg-white">
                                            Buy
                                        </button>
                                        <button
                                            class="px-3 py-1 text-[11px] rounded border border-slate-300 text-slate-700 bg-white">
                                            Sell
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <!-- Row 3 -->
                            <tr>
                                <td class="py-3 pr-4">
                                    <p class="font-semibold text-slate-900">TDB909</p>
                                    <p class="text-[10px] text-slate-400">
                                        TD CD BD IDX E. S/INLFRAC
                                    </p>
                                </td>
                                <td class="py-3 pr-4">415.872</td>
                                <td class="py-3 pr-4">$11.64</td>
                                <td class="py-3 pr-4">$11.63</td>
                                <td class="py-3 pr-4">$4,840.75</td>
                                <td class="py-3 pr-4">
                                    <span class="block text-emerald-500 font-semibold">
                                        +$6.01
                                    </span>
                                    <span class="block text-[10px] text-emerald-500">
                                        +0.12%
                                    </span>
                                </td>
                                <td class="py-3 pr-4">8.00%</td>
                                <td class="py-3 pr-0 text-right">
                                    <div class="inline-flex gap-2">
                                        <button
                                            class="px-3 py-1 text-[11px] rounded border border-slate-300 text-slate-700 bg-white">
                                            Buy
                                        </button>
                                        <button
                                            class="px-3 py-1 text-[11px] rounded border border-slate-300 text-slate-700 bg-white">
                                            Sell
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>


    <BaseText>
        Entonces, ¿cómo haces que esto suceda realmente? En los siguientes capítulos,
        cubriremos una serie de estrategias específicas que puedes usar para introducir jerarquía en tus diseños.
    </BaseText>



</template>