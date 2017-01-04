import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WorkComponent} from './work/work.component';
import {LoaderComponent} from './loader/loader.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'work', component: WorkComponent},
    {path: 'loader', component: LoaderComponent}
];
