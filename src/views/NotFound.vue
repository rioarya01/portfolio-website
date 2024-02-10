<template>
    <main v-for="notFound in notFounds" class="min-h-screen">
        <Particles />
        <section class="container py-24">
            <div class="flex flex-col">
                <div class="mt-10 mb-2 text-center -rotate-[12deg]">
                    <h1 class="text-7xl md:text-8xl font-bold text-primary dark:text-white drop-shadow-lg">{{ notFound.description1 }}</h1>
                </div>
                <img :src="`/images/notfound/${notFound.image}`" alt="Not Found Image" class="lg:w-1/3 h-auto mx-auto">
                <div class="flex flex-col gap-5 lg:w-1/2 mx-auto text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-primary dark:text-white drop-shadow">{{ notFound.description2 }}</h2>
                    <p class="text-lg md:text-xl text-dark dark:text-white">{{ notFound.description3 }}</p>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import sourceData from '@/data.json'
import Particles from "@/components/Particles.vue";

export default {
    data() {
        return {
            notFounds: sourceData.notFounds
        }
    },
    components: {
        Particles
    }
}
</script>