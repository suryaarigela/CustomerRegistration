import { Routes ,RouterModule} from "@angular/router";
import { OverviewComponent } from "./overview/overview.component";
import { DetailsComponent } from "./details/details.component";
import { RegisterComponent } from "./register/register.component";
import { EditComponent } from "./edit/edit.component";


const routes:Routes=[{
    path:'',
    component:OverviewComponent
},
{
    path:'details',
    component:DetailsComponent
},{
    path:'register',
    component:RegisterComponent
},{
    path:'edit/:id',
    component:EditComponent
}
];

export const routing= RouterModule.forRoot(routes);

