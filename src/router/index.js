

/**
 * 
 * 路由列表中  反应  404和502页面的跳转去向
 * 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import { PATH } from '@/common/config/pathConfig'
Vue.use(VueRouter);

const TOKEN = sessionStorage.getItem("koken")
let routes = [
    {
        path: "/",
        redirect: "/dse/menu"
    },
    {
        path: '/dse/menu',
        name: 'home',
        meta: { allow: true },
        component: () => import("../views/home.vue"),
        children: [
            {
                path: "/dse/test",
                name: "test",
                meta: { allow: true },
                component: () => import("../views/test.vue"),
            },
            {
                path: "/dse/hellow",
                name: "hellow",
                meta: { allow: true },
                component: () => import("../views/hellow.vue"),
            }, {
                path: "/dse/home",
                name: "home",
                meta: { allow: true },
                component: () => import("../views/home/home.vue"),
            },
        ]
    },
    {
        path: '/dse/notAllow',
        name: 'notAllow',
        meta: { allow: true },
        component: () => import("../views/502.vue")
    },
    {
        path: '*',
        name: 'noFound',
        meta: { allow: true },
        component: () => import("../views/404.vue")
    }
]


let router = new VueRouter({
    mode: 'hash',
    base: PATH,
    routes
})

router.beforeEach((route, redirect, next) => {
    if (TOKEN === "") {
        // 需要修改的地方
        "  window.location.href = dse.base_api_url   /jump.jsp?jumpUrl= dse.baseURL "
        return;
    } else {
        if (route.meta.allow) {
            if (route.name) {
                next()
            } else {
                next({ path: '/dse/noFound' })
            }
        } else {
            next({ path: "/dse/notAllow" })
        }

    }
});
export default router;
