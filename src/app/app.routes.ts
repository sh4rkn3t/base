import { Routes } from '@angular/router';
import { CounterPage } from './pages/counter/counter_page.component';
import { heroPageComponent } from './pages/hero-page/hero-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CounterPage,
    },
    
    {
        path: 'hero',
        component: heroPageComponent,
    },


];
