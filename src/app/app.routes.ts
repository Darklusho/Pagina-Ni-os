import { Routes } from '@angular/router';
import { SumarComponent } from './sumar/sumar.component';
import { AppComponent } from './app.component';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';
import { SumaComponent } from './suma/suma.component';


export const routes: Routes = [
    
    {path: '', component: SumarComponent},
    {path: 'Suma', component:SumaComponent},
    {path: 'Restar', component: RestaComponent},
    {path: 'Multiplicacion', component:MultiplicacionComponent},
    {path: 'Division', component:DivisionComponent}
    
];
