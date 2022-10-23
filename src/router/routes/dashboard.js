const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: "",
            name: "Default",
            component: () => import('../../views/dashboard/Default.vue'),
        },
        {
            path: "tables",
            name: "Tables",
            component: import('../../views/dashboard/Tables.vue')
        },
        {
            path: "billing",
            name: "Billing",
            component: import('../../views/dashboard/Billing.vue')
        },
        {
            path: "profile",
            name: "Profile",
            component: import('../../views/dashboard/Profile.vue')
        },
    ]
}

export default dashboard;