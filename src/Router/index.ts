import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "../nested/Home.vue";
import About from "../nested/About.vue";
import Contact from "../nested/Contact.vue";
import Prouduct from "../type/LaptopProuduct.vue";
import ProductDetail from "../type/ProductDetail.vue";
import Desktop from "../type/Desktop.vue";
import Monitor from "../type/Monitor.vue";
import Cart from "../view/cart.vue";
// import ProductDetail from "../type/product-detail.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/product',
        name: 'product',
        component: Prouduct,
        redirect: "/product/dell",
        children: [
            {
                path: "dell",
                name: "Dell",
                component: () => import('../laptop/dell.vue')
            },
            {
                path: "asus",
                name: "Asus",
                component: () => import('../laptop/asus.vue')
            },
            {
                path: "msi",
                name: "MSI",
                component: () => import('../laptop/msi.vue')
            }
        ]
    },
    {
        path: "/desktop",
        name: "Desktop",
        component: Desktop
    },
    {
        path: "/monitor",
        name: "Monitor",
        component: Monitor
    },
   {
        path: "/product/:id",
        name: "ProductDetail",
        component: ProductDetail
    },
    {
        path: "/asusProducts/:id",
        name: "AsusProductDetail",
        component: ProductDetail
    },
    {
        path: "/dellProducts/:id",
        name: "DellProductDetail",
        component: ProductDetail
    },
    {
        path: "/msiProducts/:id",
        name: "MSIProduct",
        component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart// <-- Add this route
    },
]

const router = createRouter({history: createWebHistory(),routes})
export default router