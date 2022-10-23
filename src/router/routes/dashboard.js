const dashboard = {
    path: '/dashboard',
    name: 'Dashboard',
    children: [
        {
            path: "",
            name: "Default",
            component: () => import('@/views/dashboard/Default.vue'),
            meta: {auth: true}
        },
        {
            path: "tables",
            name: "Tables",
            component: () => import('@/views/dashboard/Tables.vue'),
            meta: {auth: true},
        },
        {
            path: '/dashboard/tables/:id',
            name: 'Edit',
            component: () => import('@/views/dashboard/Edit.vue'),
        },
        {
            path: "todo",
            name: "ToDo",
            component: () => import('@/views/dashboard/ToDo.vue'),
            meta: {auth: true}
        },
        {
            path: "input",
            name: "Input",
            component: () => import('@/views/dashboard/Input.vue'),
            meta: {auth: true}
        },
        {
            path: "profile",
            name: "Profile",
            component: () => import('@/views/dashboard/Profile.vue'),
            meta: {auth: true}
        },
    ]
}

export default dashboard