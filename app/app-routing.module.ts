/**
 * Created by Knight on 2017/1/23.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [
    {
        path:'',
        redirectTo:'',
        pathMatch:'full'
    },{
        path:'',
        component:
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {
}
