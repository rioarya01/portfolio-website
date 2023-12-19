<template>
    <main class="min-h-screen">
        <section>
            <div class="container py-36">
                <!-- Projects -->
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
                        <h1 class="text-2xl md:text-4xl font-bold text-gradient">My Projects</h1>
                        <p class="text-sm md:text-lg font-semibold text-dark dark:text-white">Ini adalah proyek saya sendiri selama magang dan hasil pelatihan dari kursus online. Terinspirasi dari orang lain dengan penyesuaian, perubahan, penambahan fitur, dan modifikasi lainnya.</p>
                    </div>
                    <!-- Contents -->
                    <ul class="grid gap-y-7 md:gap-x-8 md:gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        <li v-for="project in projects" :key="project.id" class="flex flex-col justify-center mx-auto bg-white dark:bg-slate-800 shadow-md dark:shadow-primary border border-slate-300 dark:border-slate-800 rounded-lg md:rounded-xl">
                            <!-- Image -->
                            <img :src="`/images/projects/${project.image}`" alt="project.name" class="max-w-full rounded-t-lg md:rounded-t-xl">
                            <!-- Contents -->
                            <div class="flex flex-col gap-y-2 p-3 h-full justify-between">
                                <!-- Technologies -->
                                <div class="flex flex-wrap gap-2">
                                    <p v-for="tech in project.technologies" :key="tech" :class="getColorClass(tech)">
                                        {{ tech }}
                                    </p>
                                </div>
                                <!-- Title, Year & Descriptions -->
                                <div class="flex flex-col gap-y-1">
                                    <!-- Title, Year -->
                                    <div class="flex items-center justify-between">
                                        <h3 class="font-bold text-lg md:text-xl text-dark dark:text-white">{{ project.name }}</h3>
                                        <p class="font-semibold text-xs md:text-sm text-dark dark:text-white">{{ project.year }}</p>
                                    </div>
                                    <!-- Descriptions -->
                                    <p class="font-light text-xs md:text-sm text-dark dark:text-white text-justify">
                                        {{ project.description }}
                                    </p>
                                </div>
                                <!-- View & Code -->
                                <div class="flex gap-x-2 self-end">
                                    <!-- View -->
                                    <div v-for="(view, key) in project.views" :key="key">
                                        <a :href="view.link" target="_blank" class="flex items-center bg-slate-200 hover:opacity-50 shadow justify-center gap-1 py-1 px-3 rounded font-medium text-xs md:text-sm transition duration-300 ease-in-out">
                                            <img :src="`/images/projects/icon/${view.image}`" alt="code.name">
                                            <span>{{ view.name }}</span>
                                        </a>
                                    </div>
                                    <!-- Code -->
                                    <div v-for="(code, key) in project.codes" :key="key">
                                        <a :href="code.link" target="_blank" class="flex items-center bg-slate-200 hover:opacity-50 shadow justify-center gap-1 py-1 px-3 rounded font-medium text-xs md:text-sm transition duration-300 ease-in-out">
                                            <img :src="`/images/projects/icon/${code.image}`" alt="code.name">
                                            <span>{{ code.name }}</span>
                                        </a>
                                    </div>
                                </div>
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
            projects: sourceData.projects
        };
    },
    methods: {
        getColorClass(tech) {
            return {
                'py-1': true,
                'px-2': true,
                'border-2': true,
                'font-medium': true,
                'rounded-md': true,
                'text-xs': true,
                ...this.techColor(tech),
            };
        },
        techColor(tech) {
            if (tech === "HTML" || tech === "Figma" || tech === "MySQL") {
                return {
                'border-orange-500': true,
                'text-orange-500': true,
                };
            } else if (tech === "CSS") {
                return {
                'border-blue-500': true,
                'text-blue-500': true,
                };
            } else if (tech === "Javascript") {
                return {
                'border-yellow-500': true,
                'text-yellow-500': true,
                };
            } else if (tech === "PHP") {
                return {
                'border-blue-400': true,
                'text-blue-400': true,
                };
            } else if (tech === "SASS") {
                return {
                'border-pink-500': true,
                'text-pink-500': true,
                };
            } else if (tech === "Bootstrap 4" || tech === "Bootstrap 5") {
                return {
                'border-purple-500': true,
                'text-purple-500': true,
                };
            } else if (tech === "Tailwind CSS") {
                return {
                'border-cyan-500': true,
                'text-cyan-500': true,
                };
            } else if (tech === "Vue.js" || tech === "Vue Router") {
                return {
                'border-emerald-500': true,
                'text-emerald-500': true,
                };
            } else if (tech === "React" || tech === "React Router") {
                return {
                'border-sky-700': true,
                'text-sky-700': true,
                };
            } else if (tech === "Laravel") {
                return {
                'border-red-500': true,
                'text-red-500': true,
                };
            } else {
                return {
                'border-slate-400': true,
                'text-slate-400': true,
                };
            }
        }
    }
};
</script>