const auth = {
    path: '/',
    name: 'Auth',
    redirect: '/auth/signin',
    children: [
        {
            path: "/auth/signin",
            name: "Signin",
            component: () => import('@/views/auth/Signin.vue') ,
        },
        {
            path: "/auth/signup",
            name: "Signup",
            component: () => import('@/views/auth/Signup.vue') ,
        },
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 81556fddb14839babb33ee72cbfc06eeb32d3a26

    ],

};
<<<<<<< HEAD
=======
    ]
}
>>>>>>> 6d20ad81427c1376fe74c60596cbedfe068d1a2f
=======

>>>>>>> 81556fddb14839babb33ee72cbfc06eeb32d3a26

export default auth