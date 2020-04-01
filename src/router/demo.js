// demo页面
const About = () => import(/* webpackChunkName: "demo" */ '@/pages/About.vue')
const Home = () => import(/* webpackChunkName: "demo" */ '@/pages/Home.vue')
const HelloWorld = () => import(/* webpackChunkName: "demo" */ '@/pages/HelloWorld.vue')


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
    path: '/hello-world',
    name: 'helloWorld',
    component: HelloWorld
  }
]
export default route
