// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KittensComponent } from './kittens/kittens.component';
import {UserListComponent} from "./users/user-list.component";
import {PlantListComponent} from "./plants/plant-list.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'kittens', component: KittensComponent },
    { path: 'users', component: UserListComponent },
    { path: 'plants', component: PlantListComponent },
    { path: 'registration', component: RegistrationComponent},
    { path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);