import { Routes } from '@angular/router';
import { LandViewComponent } from './views/land-view/land-view.component';
import { LoginViewComponent } from './views/login-view/login-view.component';
import { ConverterComponent } from './views/converter/converter.component';
import { SignupComponent } from './views/signup/signup.component';
import { JobsComponent } from './views/jobs/jobs.component';

export const routes: Routes = [
    { path: '', component: LandViewComponent },
    { path: 'entrar', component: LoginViewComponent },
    { path: 'conversor', component: ConverterComponent},
    { path: 'cadastro', component: SignupComponent },
    { path:'vagas', component: JobsComponent }
];
