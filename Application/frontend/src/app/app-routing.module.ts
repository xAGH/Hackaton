import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { NumerosEmergenciaComponent } from './pages/numeros-emergencia/numeros-emergencia.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'numeros_emergencia', component:NumerosEmergenciaComponent},
  {path: 'noticias', component:NoticiasComponent},
  {path: 'recomendaciones', component:RecomendacionesComponent},
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
