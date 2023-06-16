import type { RouteRecordRaw } from 'vue-router';

import { ACCESS_LEVEL } from '@/lib/access-control/config';

import ErrorPage from '@/common/pages/ErrorPage.vue';

export const ERROR_ROUTE = Object.freeze({
    _NAME: 'error',
});

export const errorRoutes: RouteRecordRaw[] = [
    {
        path: '/error-page/:statusCode?',
        name: ERROR_ROUTE._NAME,
        meta: { accessLevel: ACCESS_LEVEL.EXCLUDE_AUTH },
        props: true,
        component: ErrorPage,
    },
    {
        path: '/:pathMatch(.*)*',
        component: ErrorPage,
    },
];
