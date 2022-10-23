const auth = {
    path: '/',
    name: 'Auth',
    children: [
        {
            path: '/auth/signin',
            name: 'Signin',
            component: () => import('@/views/Auth/Signin.vue')
        },
        {
            path: '/auth/signup',
            name: 'Signup',
            component: () => import('@/views/Auth/Signup.vue')
        }
    ]
};

export default auth