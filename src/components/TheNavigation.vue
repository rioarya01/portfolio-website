<template>
    <header class="fixed top-0 right-0 left-0 z-[99] flex w-full p-0 bg-transparent">
        <!-- Main Menu -->
        <nav id="nav" class="flex justify-center items-center max-w-full -mb-24 lg:-mb-28 relative w-full">
            <ul class="nav-menu">
                <li class="group">
                    <router-link to="/" class="nav-btn">Home</router-link>
                </li>
                <li class="group">
                    <router-link to="/projects" class="nav-btn">Projects</router-link>
                </li>
                <li class="group">
                    <router-link to="/certifications" class="nav-btn">Certifications</router-link>
                </li>
                <li class="group">
                    <router-link to="/contact" class="nav-btn">Contact</router-link>
                </li>
                <li class="group">
                    <DarkMode/>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
// Ini import untuk DarkMode.vue
import DarkMode from './DarkMode.vue';

export default {
    components: {
        DarkMode
    }
}
</script>