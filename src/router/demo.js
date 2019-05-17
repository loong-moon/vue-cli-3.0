// demo页面
const About = () => import(/* webpackChunkName: "demo" */ '@/pages/About.vue')
const Home = () => import(/* webpackChunkName: "demo" */ '@/pages/Home.vue')
const List = () => import(/* webpackChunkName: "demo" */ '@/pages/List.vue')


const route = [
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/list',
        name: 'List',
        component: List
    }
]
export default route
