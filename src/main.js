import { createApp } from 'vue'
import App from '@/App.vue'
import VueRouter from 'vue-router'

import Pilot from '@/components/Api/Pilot'

const routes = [{
        path: '/',
        component: App,
    },
    {
        path: '/pilot',
        component: Pilot
    }
]

const router = new VueRouter({
    routes,
    // mode: history
})

createApp(App).mount('#app')
    .use(router)