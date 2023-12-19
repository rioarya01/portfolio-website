<template>
    <main v-for="home in homes" :key="home.id" class="min-h-screen">
        <Particles />
        <!-- Hero Section -->
        <section>
            <div class="container py-24">
                <div class="flex flex-wrap">
                    <!-- Name -->
                    <div class="w-full self-center lg:w-1/2">
                        <h1 
                            data-aos="fade-right"
                            data-aos-offset="200"
                            data-aos-delay="90"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            class="text-gradient mb-2">
                            <span class="text-xl md:text-2xl font-semibold lg:ml-3">Halo semua, saya</span>
                            <br>
                            <span class="text-5xl md:text-7xl lg:text-8xl font-bold lg:ml-2">{{ home.name }}.</span>
                        </h1>
                        <p data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="90"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="false"
                            class="text-xl md:text-3xl lg:text-4xl font-semibold text-dark dark:text-white text-end">
                            {{ home.label }}
                            <span class="ml-2 animate-ping border-r-4 border-dark dark:border-white"></span>
                        </p>
                    </div>
                    <!-- Profile -->
                    <div class="w-full self-end lg:w-1/2 lg:order-first">
                        <div class="flex justify-center relative">
                            <!-- Images -->
                            <img :src="`/images/${home.image}`" :alt="home.name" class="h-auto md:max-w-xl lg:max-w-2xl relative mx-auto">
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- About Me -->
        <section class="bg-slate-100 dark:bg-slate-800 border-y-2 border-primary relative dark-transition">
            <div class="container py-24">
                <!-- Title -->
                <div class="-rotate-12 mb-16 lg:mb-40">
                    <h1 class="title-text text-primary mb-0.5 md:mb-1">About Me</h1>
                    <p class="subtitle-text text-dark dark:text-white ml-1">Perkenalan singkat tentang diri saya</p>
                </div>
                <!-- Contents -->
                <div class="flex flex-wrap my-auto">
                    <!-- Images -->
                    <div class="w-full self-start lg:w-1/2 mb-7 lg:mb-0 lg:my-20">
                        <div class="flex justify-center items-center">
                            <swiper 
                            :effect="'cards'"
                            :grabCursor="true"
                            :modules="modules"
                            class="mySwiper"
                                >
                                <swiper-slide>
                                    <img :src="`/images/about/${home.about[0].image}`" :alt="home.about.alt" class="w-52 h-auto md:w-64 lg:w-96 rounded-2xl md:rounded-3xl">
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="`/images/about/${home.about[1].image}`" :alt="home.about.alt" class="w-52 h-auto md:w-64 lg:w-96 rounded-2xl md:rounded-3xl">
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="`/images/about/${home.about[2].image}`" :alt="home.about.alt" class="w-52 h-auto md:w-64 lg:w-96 rounded-2xl md:rounded-3xl">
                                </swiper-slide>
                                <swiper-slide>
                                    <img :src="`/images/about/${home.about[3].image}`" :alt="home.about.alt" class="w-52 h-auto md:w-64 lg:w-96 rounded-2xl md:rounded-3xl">
                                </swiper-slide>
                            </swiper>
                        </div>
                    </div>
                    <!-- Description -->
                    <div class="w-full self-center lg:w-1/2">
                        <div class="flex flex-col p-5 md:p-10 box-border-animation">
                            <span></span>
                            <div class="relative z-20">
                                <h3 class="text-lg md:text-xl font-bold text-gradient text-center mb-2">
                                    Saya : {{ home.fullName }}
                                </h3>
                                <p class="description-text text-dark dark:text-white text-justify mb-4 md:mb-6">
                                    {{ home.description1 }} <br><br>
                                    {{ home.description2 }} <br><br>
                                    {{ home.description3 }}
                                </p>
                                <div class="flex gap-5 justify-center md:justify-end">
                                    <!-- Blog -->
                                    <a href="http://twitter.com" target="_blank" class="flex items-center gap-2 py-1 px-5 rounded bg-primary text-white font-semibold hover:bg-emerald-600 transition duration-300 ease-in-out">
                                        <svg 
                                            class="fill-current" 
                                            width="16" 
                                            height="16" 
                                            enable-background="new 0 0 512 512" 
                                            id="Layer_1" 
                                            version="1.1" 
                                            viewBox="0 0 512 512" 
                                            ><g><path d="M434.5,72.3V412c0,33.6-27.5,61.1-61,61.1H126.7c-5.6,0-11-1-16.2-2.5c7.8,23.7,30,41.1,56.2,41.1h249.9   c32.7,0,59.5-26.8,59.5-59.5V128.8C476.1,102.3,458.5,80,434.5,72.3z"/><path d="M345.2,0H95.4C62.7,0,35.9,26.8,35.9,59.5V383c0,32.7,26.8,59.5,59.5,59.5h249.9   c32.7,0,59.5-26.8,59.5-59.5V59.5C404.7,26.8,378,0,345.2,0z M364.2,349.8c0,25.7-21.1,46.8-46.8,46.8H120.9   c-25.7,0-46.8-21.1-46.8-46.8V95.4c0-25.7,21.1-46.8,46.8-46.8h196.6c25.7,0,46.8,21.1,46.8,46.8V349.8z"/><g><path d="M319.8,117.5H190.5c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h129.3c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,113.1,325.2,117.5,319.8,117.5z"/><path d="M319.8,175.2H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,170.7,325.2,175.2,319.8,175.2z"/><path d="M319.8,232.8H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,228.4,325.2,232.8,319.8,232.8z"/><path d="M319.8,290.5H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,286.1,325.2,290.5,319.8,290.5z"/><path d="M319.8,348.2H120.4c-5.4,0-9.8-4.4-9.8-9.8v-0.7c0-5.4,4.4-9.8,9.8-9.8h199.5c5.4,0,9.8,4.4,9.8,9.8v0.7    C329.7,343.7,325.2,348.2,319.8,348.2z"/></g></g></svg>
                                        Blog
                                    </a>
                                    <!-- Resume -->
                                    <a href="https://drive.google.com/file/d/1RzF5psvgNv8mONCld-a9KDC3VP-D2RgU/view?usp=sharing" target="_blank" class="flex items-center gap-2 py-1 px-5 rounded bg-secondary text-white font-semibold hover:bg-purple-600 transition duration-300 ease-in-out">
                                        <svg class="fill-current" 
                                            version="1.1" 
                                            id="Capa_1" 
                                            width="16" 
                                            height="16" 
                                            viewBox="0 0 43.916 43.916"
                                            >
                                            <g>
                                                <path d="M34.395,0H9.522c-2.762,0-5,2.239-5,5v33.916c0,2.761,2.238,5,5,5h24.871c2.762,0,5-2.239,5-5V5
                                                    C39.395,2.239,37.154,0,34.395,0z M9.208,16.855c0-1.172,0.951-2.121,2.121-2.121h0.742c-0.791-0.874-1.277-2.03-1.277-3.304
                                                    c0-2.723,2.209-4.931,4.932-4.931c2.725,0,4.932,2.207,4.932,4.932c0,1.272-0.486,2.429-1.279,3.303h0.709
                                                    c1.172,0,2.121,0.949,2.121,2.121v3.578c0,1.122-0.875,2.03-1.975,2.106h-9.051c-1.1-0.076-1.975-0.984-1.975-2.106V16.855
                                                    L9.208,16.855z M32.708,37.416h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,37.416,32.708,37.416z
                                                    M32.708,29.916h-21.5c-1.104,0-2-0.896-2-2s0.896-2,2-2h21.5c1.104,0,2,0.896,2,2S33.812,29.916,32.708,29.916z M32.708,22.416
                                                    h-6.5c-1.104,0-2-0.896-2-2c0-1.104,0.896-2,2-2h6.5c1.104,0,2,0.896,2,2C34.708,21.52,33.812,22.416,32.708,22.416z"/>
                                            </g>
                                        </svg>
                                        Resume
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- My Skills -->
        <section>
            <div class="container py-24">
                <!-- Title -->
                <div class="text-end rotate-12 mb-16 lg:mb-40">
                    <h1 class="title-text text-primary mb-0.5 md:mb-1">My Skills</h1>
                    <p class="subtitle-text text-dark dark:text-white ml-1">Kemampuan teknologi yang saya miliki</p>
                </div>
                <!-- Contents -->
                <div class="flex flex-col">
                    <!-- Programming Languages -->
                    <div class="mb-20">
                        <h2 class="title-text text-gradient text-center mb-5">Web Programming</h2>
                        <ul class="flex flex-wrap justify-center gap-5 lg:gap-10">
                            <li v-for="(skill, key) in home.skills.slice(0, 10)" :key="key" class="card-skills">
                                <img :src="`/images/skills/${skill.image}`" :alt="skill.name" />
                                <p>{{ skill.name }}</p>
                            </li>
                        </ul>
                    </div>
                    <!-- Tools & Hosting -->
                    <div class="mb-20">
                        <h2 class="title-text text-gradient text-center mb-5">Tools & Hosting</h2>
                        <ul class="flex flex-wrap justify-center gap-5 lg:gap-10">
                            <li v-for="(skill, key) in home.skills.slice(10, 17)" :key="key" class="card-skills">
                                <img :src="`/images/skills/${skill.image}`" :alt="skill.name" />
                                <p>{{ skill.name }}</p>
                            </li>
                        </ul>
                    </div>
                    <!-- Design -->
                    <div class="mb-20">
                        <h2 class="title-text text-gradient text-center mb-5">Design</h2>
                        <ul class="flex flex-wrap justify-center gap-5 lg:gap-10">
                            <li v-for="(skill, key) in home.skills.slice(17, 20)" :key="key" class="card-skills">
                                <img :src="`/images/skills/${skill.image}`" :alt="skill.name" />
                                <p>{{ skill.name }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import sourceData from "@/data.json";
import Particles from "@/components/Particles.vue";

 // Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCards } from 'swiper/modules';

export default {
    data() {
        return {
            homes: sourceData.homes,
            modules: [EffectCards],
        };
    },
    components: {
        Particles,
        Swiper,
        SwiperSlide,
    }
};
</script>