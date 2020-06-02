// demo页面
const About = () => import(/* webpackChunkName: "demo" */ '@/pages/about')
const Home = () => import(/* webpackChunkName: "demo" */ '@/pages/home')
const HelloWorld = () => import(/* webpackChunkName: "demo" */ '@/pages/hello-world')


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
