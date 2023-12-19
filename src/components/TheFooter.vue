<template>
    <footer class="relative flex flex-col w-full bg-slate-100 dark:bg-slate-800 border-t-2 border-primary">
        <div class="container">
            <div class="flex flex-wrap py-5">
                <!-- Copyrights -->
                <div class="w-full self-center lg:w-1/2 gap-1 text-center lg:text-start">
                    <p class="text-lg md:text-xl font-semibold text-primary">© 2023 I Gede Rio Arya Bawesi</p>
                    <p class="text-sm md:text-base font-medium text-dark dark:text-white">Built using Vue.js 3 + Vite.js + Tailwind CSS</p>
                </div>
                <!-- Social Media -->
                <div class="w-full self-center lg:w-1/2 order-first lg:order-last flex justify-center gap-2 mb-5 lg:mb-0">
                    <!-- LinkedIn -->
                    <a href="https://www.linkedin.com/in/i-gede-rio-arya-bawesi/" target="_blank" class="mr-3 flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 50 50" width="30px">
                            <title>LinkedIn</title>    
                            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
                        </svg>
                    </a>
                    <!-- Instagram -->
                    <a href="https://www.instagram.com/rioarya22_/" target="_blank" class="mr-3 flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 50 50" width="30px">
                            <title>Instagram</title>    
                            <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                        </svg>
                    </a>
                    <!-- Github -->
                    <a href="https://github.com/rioarya01" target="_blank" class="mr-3 flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 640 640" width="30px">
                            <title>Github</title>    
                            <path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"/>
                        </svg>
                    </a>
                    <!-- Telegram -->
                    <a href="https://t.me/rioarya" target="_blank" class="mr-3 flex h-12 w-12 items-center justify-center rounded-full border border-slate-400 text-slate-400 hover:border-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                        <svg xmlns="http://www.w3.org/2000/svg" class="fill-current" viewBox="0 0 50 50" width="30px">
                            <title>Telegram</title>    
                            <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>