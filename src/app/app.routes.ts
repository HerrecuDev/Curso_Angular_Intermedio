import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { HeroesList } from './components/pages/heroes-list/heroes-list';
import { HeroesManage } from './components/pages/heroes-manage/heroes-manage';
import { About } from './components/pages/about/about';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: Home,
    },
    {
        path: 'list',
        component: HeroesList,
    },
    {
        path: 'manage',
        component: HeroesManage,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: '**',
        redirectTo: 'home',
    },
];
