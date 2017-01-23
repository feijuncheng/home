/**
 * Created by Knight on 2017/1/23.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-navbar',
    template: `
        <ul>
            <li *ngFor="let item of navbarContent">{{item.value}}</li>
        </ul>
    `
})

export class NavbarComponent {
    navbarContent = [
        {
            // fatherId: '1',
            value: '关于我',
            childs: []
        }, {
            // fatherId: '2',
            value: '搞事情',
            childs: []
        }, {
            // fatherId: '3',
            value: 'DOTA2',
            childs: []
        }
    ]
}
