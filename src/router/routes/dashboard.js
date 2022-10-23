const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: "",
            name: "Default",
            component: () => import('../../views/dashboard/Default.vue'),
            meta: { auth: true },

        },
        {
            path: "tables",
            name: "Tables",
            component: () => import('../../views/dashboard/Tables.vue'),
            meta: { auth: true },
        },
        {
            path: "billing",
            name: "Billing",
            component: () => import('../../views/dashboard/Billing.vue'),
            meta: { auth: true },
        },
        {
            path: "profile",
            name: "Profile",
            component: () => import('../../views/dashboard/Profile.vue'),
            meta: { auth: true },
        },
    ]
}

export default dashboard;