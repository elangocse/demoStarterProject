import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const appRoutes: Routes = [
    //{path:'home', pathMatch: 'full', redirectTo: 'msworkbench' },
	//{path:'error',component: ErrorPageComponent},
    //{path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(appRoutes);