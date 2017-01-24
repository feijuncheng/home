/**
 * Created by Knight on 2017/1/23.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutMeComponent} from "./component/aboutMe.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/aboutMe',
        pathMatch: 'full'
    }, {
        path: 'aboutMe',
        component: AboutMeComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
