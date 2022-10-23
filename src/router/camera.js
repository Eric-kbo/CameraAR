export default [
    {
        path: '/camera',
        name: 'camera',
        component: () => import('../views/camera/index'),
        meta: {
            title: '相机'
        }
    }
];