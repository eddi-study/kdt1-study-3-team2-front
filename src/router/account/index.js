import Vue from 'vue'
import VueRouter from 'vue-router'

import AccountSignUpPage from '@/views/account/AccountSignUpPage.vue'

Vue.use(VueRouter)

const accountTestRoutes = [
    {
        path: '/account-sign-up-page',
        name: 'AccountSignUpPage',
        component: AccountSignUpPage
    },
]

export default accountTestRoutes