/**
 * Created by Knight on 2017/1/23.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-navbar',
    template: `
        <div>
            <ul>
                <li *ngFor="let item of navbarContent">{{item.value}}</li>
            </ul>
        </div>
    `,
    styleUrls:['app/css/aboutMe.component.css']
})

export class NavbarComponent {
    navbarContent = [
        {
            value: '关于我',
            childs: []
        }, {
            value: '搞事情',
            childs: []
        }, {
            value: 'DOTA2',
            childs: []
        }
    ]
}
