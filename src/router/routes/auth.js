const auth = {
    path: '/',
    name: 'Auth',
    children: [
        {
            path: "/auth/signin",
            name: "Signin",
            component: () => import('@/views/auth/Signin.vue')
        },
        {
            path: "/auth/signup",
            name: "Signup",
            component: () => import('@/views/auth/Signup.vue')
        },
    ],

};

export default auth;