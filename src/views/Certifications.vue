<template>
    <main class="min-h-screen">
        <section>
            <div class="container py-36">
                <!-- Certifications -->
                <div class="flex flex-col">
                    <!-- Title -->
                    <div 
                    data-aos="zoom-out"
                    data-aos-offset="200"
                    data-aos-delay="90"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    class="text-center mb-10">
                        <h1 class="text-2xl md:text-4xl font-bold text-gradient">My Certifications</h1>
                        <p class="text-sm md:text-lg font-semibold text-dark dark:text-white">Sertifikat yang saya peroleh selama magang dan kursus pelatihan lainnya.</p>
                    </div>
                    <!-- Contents -->
                    <ul class="grid gap-y-7 md:gap-x-8 md:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        <li v-for="certification in certifications" :key="certification.id" class="flex flex-col justify-center mx-auto">
                            <!-- Image -->
                            <img :src="`/images/certifications/${certification.image}`" :alt="certification.name" class="w-96 mb-4">
                            <!-- Descriptions -->
                            <div class="flex flex-col gap-y-2">
                                <!-- Issuer & Date -->
                                <div class="flex gap-x-1">
                                    <p class="py-1 px-2 bg-primary text-white rounded-[3px] text-xs">{{ certification.issuer }}</p>
                                    <p class="py-1 px-2 bg-secondary text-white rounded-[3px] text-xs">{{ certification.date }}</p>
                                </div>
                                <!-- Title -->
                                <h3 class="font-bold text-sm md:text-base text-dark dark:text-white">{{ certification.name }}</h3>
                                <!-- Credential Show -->
                                <a :href="certification.credential" target="_blank" class="flex items-center justify-center gap-1 w-40 py-1 px-3 border-2 border-primary rounded-full font-medium text-xs md:text-sm text-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out">
                                    <span>See Credential</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="fill-current" viewBox="0 -960 960 960" ><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/></svg>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import sourceData from "@/data.json";
export default {
    data() {
        return {
            certifications: sourceData.certifications
        };
    }
};
</script>