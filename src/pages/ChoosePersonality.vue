<script setup>
import BaseCardText from '../components/base/BaseCardText.vue';
import BaseTitle from '../components/base/BaseTitle.vue';
import BaseText from '../components/base/BaseText.vue';

</script>

<template>
    <BaseTitle level="1" align="left">
        Elige una personalidad
    </BaseTitle>

    <BaseText>
        Cada diseño tiene algún tipo de personalidad. Un sitio bancario podría tratar de comunicar seguridad y
        profesionalismo,
        mientras que una startup moderna podría buscar un diseño que se sienta divertido y juguetón.
    </BaseText>

    <BaseText>
        A simple vista, darle una personalidad particular a un diseño puede sonar abstracto o poco concreto,
        pero mucho de ello se determina por algunos factores sólidos y específicos.
    </BaseText>

    <!-- component -->
    <div id="team" class="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800 rounded-xl mb-4">
        <div class="container xl:max-w-6xl mx-auto px-4">
            <!-- section header -->
            <header class="text-center mx-auto mb-12">
                <h2 class="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
                    <span class="font-light">Our</span> Team
                </h2>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                    y="0px" viewBox="0 0 100 60" style="margin: 0 auto;height: 35px;" xml:space="preserve">
                    <circle cx="50.1" cy="30.4" r="5" class="stroke-primary"
                        style="fill: transparent;stroke-width: 2;stroke-miterlimit: 10;"></circle>
                    <line x1="55.1" y1="30.4" x2="100" y2="30.4" class="stroke-primary"
                        style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                    <line x1="45.1" y1="30.4" x2="0" y2="30.4" class="stroke-primary"
                        style="stroke-width: 2;stroke-miterlimit: 10;"></line>
                </svg>
            </header>
            <!-- end section header -->
            <!-- row -->
            <div class="flex flex-wrap flex-row -mx-4 justify-center">
                <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                    <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                        data-wow-duration="1s"
                        style="visibility: visible; animation-duration: 1s; animation-name: fadeInUp;">
                        <!-- team block -->
                        <div class="relative overflow-hidden px-6">
                            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
                                class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                        </div>
                        <div class="pt-6 text-center">
                            <p class="text-lg leading-normal font-bold mb-1">Joe Antonio</p>
                            <p class="text-gray-500 leading-relaxed font-light">Founder CEO</p>
                            <!-- social icon -->
                            <div class="mt-2 mb-5 space-x-2">
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <!-- <i class="fab fa-twitter text-twitter"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                    <!-- <i class="fab fa-facebook text-facebook"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                    <!-- <i class="fab fa-instagram text-instagram"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                    <!-- <i class="fab fa-linkedin text-linkedin"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- end team block -->
                </div>
                <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                    <!-- team block -->
                    <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                        data-wow-duration="1s" data-wow-delay=".1s"
                        style="visibility: visible; animation-duration: 1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <div class="relative overflow-hidden px-6">
                            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
                                class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                        </div>
                        <div class="pt-6 text-center">
                            <p class="text-lg leading-normal font-bold mb-1">Sarah Daeva</p>
                            <p class="text-gray-500 leading-relaxed font-light">Marketing</p>
                            <!-- social icon -->
                            <div class="mt-2 mb-5 space-x-2">
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <!-- <i class="fab fa-twitter text-twitter"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                    <!-- <i class="fab fa-facebook text-facebook"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                    <!-- <i class="fab fa-instagram text-instagram"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                    <!-- <i class="fab fa-linkedin text-linkedin"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- end team block -->
                </div>
                <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                    <!-- team block -->
                    <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                        data-wow-duration="1s" data-wow-delay=".3s"
                        style="visibility: visible; animation-duration: 1s; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <div class="relative overflow-hidden px-6">
                            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar2.png"
                                class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                        </div>
                        <div class="pt-6 text-center">
                            <p class="text-lg leading-normal font-bold mb-1">Daniel Emo</p>
                            <p class="text-gray-500 leading-relaxed font-light">Sales manager</p>
                            <!-- social icon -->
                            <div class="mt-2 mb-5 space-x-2">
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <!-- <i class="fab fa-twitter text-twitter"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                    <!-- <i class="fab fa-facebook text-facebook"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                    <!-- <i class="fab fa-instagram text-instagram"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                    <!-- <i class="fab fa-linkedin text-linkedin"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- end team block -->
                </div>
                <div class="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
                    <!-- team block -->
                    <div class="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
                        data-wow-duration="1s" data-wow-delay=".5s"
                        style="visibility: visible; animation-duration: 1s; animation-delay: 0.5s; animation-name: fadeInUp;">
                        <div class="relative overflow-hidden px-6">
                            <img src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png"
                                class="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale" alt="title image">
                        </div>
                        <div class="pt-6 text-center">
                            <p class="text-lg leading-normal font-bold mb-1">Toni Lana</p>
                            <p class="text-gray-500 leading-relaxed font-light">UI/UX Designer</p>
                            <!-- social icon -->
                            <div class="mt-2 mb-5 space-x-2">
                                <a class="hover:text-blue-700" aria-label="Twitter link" href="#">
                                    <!-- <i class="fab fa-twitter text-twitter"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Facebook link" href="#">
                                    <!-- <i class="fab fa-facebook text-facebook"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Instagram link" href="#">
                                    <!-- <i class="fab fa-instagram text-instagram"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z">
                                        </path>
                                        <path fill="currentColor"
                                            d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z">
                                        </path>
                                    </svg>
                                </a>
                                <a class="hover:text-blue-700" aria-label="Linkedin link" href="#">
                                    <!-- <i class="fab fa-linkedin text-linkedin"></i> -->
                                    <svg xmlns="http://www.w3.org/2000/svg" class="inline-block" width="1rem"
                                        height="1rem" viewBox="0 0 512 512">
                                        <path fill="currentColor"
                                            d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z">
                                        </path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <!-- end team block -->
                </div>
            </div>
            <!-- end row -->
        </div>
    </div>



    <BaseTitle level="3">
        Elección de tipografía
    </BaseTitle>

    <BaseText>
        La tipografía juega un papel enorme en determinar cómo se siente un diseño.
        Si quieres un estilo elegante o clásico, podrías incorporar una tipografía serif en tu diseño.
    </BaseText>

    <BaseText>
        Para un aspecto más juguetón, podrías usar una sans serif redondeada.
    </BaseText>

    <BaseText>
        Si buscas un estilo más sobrio, o si quieres que otros elementos sean los que definan la personalidad,
        una sans serif neutral funciona muy bien.
    </BaseText>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div class="p-6 border-2 border-gray-800">
            <section class="grid place-items-center bg-emerald-300 p-16">
                <div
                    class="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
                    <div class="min-w-0">
                        <h4 class="mb-1 text-gray-400">playfair</h4>
                        <h2 class="overflow-hidden font-playfair">742 Evergreen Terrace</h2>
                    </div>
                </div>
            </section>
        </div>
        <div class="p-6 border-2 border-gray-800">
            <section class="grid place-items-center bg-emerald-300 p-16">
                <div
                    class="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
                    <div class="min-w-0">
                        <h4 class="mb-1 text-gray-400">Poppins</h4>
                        <h2 class="overflow-hidden text-ellipsis whitespace-nowrap font-poppins">742 Evergreen Terrace
                        </h2>
                    </div>
                </div>
            </section>
        </div>
        <div class="p-6 border-2 border-gray-800">
            <section class="grid place-items-center bg-emerald-300 p-16">
                <div
                    class="flex max-w-xs items-center border-l-8 border-emerald-500 bg-emerald-50 p-4 text-emerald-900 shadow-lg">
                    <div class="min-w-0">
                        <h4 class="mb-1 text-gray-400">inter</h4>
                        <h2 class="overflow-hidden text-ellipsis whitespace-nowrap font-inter">742 Evergreen Terrace
                        </h2>
                    </div>
                </div>
            </section>
        </div>
    </div>
    <BaseTitle level="3">
        Color
    </BaseTitle>

    <BaseText>
        Hay mucha ciencia sobre la psicología del color, pero en la práctica, lo que realmente necesitas
        es prestar atención a cómo te hacen sentir los colores.
    </BaseText>

    <BaseCardText :items="[
        'El azul es seguro y familiar — nadie se queja del azul.',
        'El dorado puede transmitir “costoso” y “sofisticado”.',
        'El rosa es más divertido y menos serio.'
    ]">
    </BaseCardText>

    <BaseText>
        Aunque elegir colores basándote solo en psicología no es siempre práctico, mucho tiene que ver con lo que te
        gusta
        y con entender por qué crees que un color es adecuado.
    </BaseText>
    <div class="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4">
        <div class="p-6 border-2 border-gray-800 bg-blue-600"></div>
        <div class="p-6 border-2 border-gray-800 bg-amber-400"></div>
        <div class="p-6 border-2 border-gray-800 bg-pink-500"></div>

    </div>
    <BaseTitle level="3">
        Bordes redondeados
    </BaseTitle>

    <BaseText>
        Aunque parezca un detalle pequeño, el grado en el que redondeas los bordes en un diseño
        puede tener un gran impacto en cómo se siente.
    </BaseText>

    <BaseCardText :items="[
        'Un borde ligeramente redondeado es neutral y no comunica mucha personalidad.',
        'Un borde muy redondeado se siente más juguetón.',
        'Sin bordes redondeados el diseño se siente más serio o formal.'
    ]">
    </BaseCardText>

    <BaseText>
        Elijas lo que elijas, es importante ser consistente. Mezclar esquinas cuadradas con esquinas redondeadas
        dentro de la misma interfaz casi siempre se ve peor que elegir una sola y mantenerla.
    </BaseText>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pb-4">
        <div class="p-6 border-2 border-gray-800 rounded text-center">Neutral estándar (rounded)</div>
        <div class="p-6 border-2 border-gray-800 rounded-2xl text-center">Juguetón (rounded-2xl)</div>
        <div class="p-6 border-2 border-gray-800 text-center">Sin bordes redondeados</div>
    </div>


    <BaseTitle level="3">
        Lenguaje
    </BaseTitle>

    <BaseText>
        Aunque no es una técnica visual de diseño, las palabras que usas en una interfaz
        tienen una influencia enorme en su personalidad.
        Un tono menos personal puede sentirse más oficial o profesional,
        mientras que un lenguaje más amigable y casual hace que el sitio también se sienta más cercano.
    </BaseText>

    <BaseTitle level="3">
        Decidir qué es lo que realmente quieres
    </BaseTitle>

    <BaseText>
        Muchas veces tendrás una intuición del tipo de personalidad que quieres lograr.
        Pero si no la tienes, una buena forma de simplificar la decisión es observar otros sitios usados por el mismo
        público objetivo.
    </BaseText>

    <BaseCardText :items="[
        'Si la mayoría de ellos son “negocios serios”, quizás tu sitio también debería verse así.',
        'Si son más juguetones y con un poco de humor, quizá ese sea el camino adecuado para ti.'
    ]">
    </BaseCardText>

    <BaseText>
        Solo intenta no copiar demasiado a tus competidores directos; no quieres parecer una versión de segunda de algo
        más.
    </BaseText>


</template>