import { Routes ,RouterModule} from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SafemodeComponent } from "./safemode/safemode.component";
import { SafeCenterPaneComponent } from "./safe-center-pane/safe-center-pane.component";
import { ProfileComponent } from "./profile/profile.component";
import { NetworkComponent } from "./network/network.component";


const routes:Routes=[{
    path:'',
    component:HomeComponent
},{
   // path:'safe/:name',
   path:'safe',
    component:SafemodeComponent,
    children:[
        {
            path:'center',
            component:SafeCenterPaneComponent
        },
        {
            path:'profile',
            component:ProfileComponent
        },
        {
            path:'network',
            component:NetworkComponent
        }
    ]
}
];

export const routing= RouterModule.forRoot(routes);