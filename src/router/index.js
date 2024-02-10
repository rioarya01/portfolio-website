import { createRouter, createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
    // Home
    {path: '/', name: 'Home', component: Home},
    // Projects
    {
        path: '/projects', 
        name: 'Projects', 
        component: () => import('@/views/Projects.vue'),
    },
    // Certifications
    {
        path: '/certifications', 
        name: 'Certifications', 
        component: () => import('@/views/Certifications.vue'),
    },
    // Contact
    {
        path: '/contact', 
        name: 'Contact', 
        component: () => import('@/views/Contact.vue'),
    },
    // Not Found
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: () => import('@/views/NotFound.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router