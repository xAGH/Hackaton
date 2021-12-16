import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Modulo de traduccion
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BotonMenuComponent } from './components/boton-menu/boton-menu.component';
import { InputNoticiasComponent } from './components/input-noticias/input-noticias.component';
import { SeleccionPaisComponent } from './components/seleccion-pais/seleccion-pais.component';
import { NumerosEmergenciaComponent } from './pages/numeros-emergencia/numeros-emergencia.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { HomeComponent } from './pages/home/home.component';
import { SeleccionIdiomaComponent } from './shared/seleccion-idioma/seleccion-idioma.component';

import { NoticiasComponent } from './pages/noticias/noticias.component';
import { RecomendacionesComponent } from './pages/recomendaciones/recomendaciones.component';
import { CarouselComponent } from './shared/carousel/carousel.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    BotonMenuComponent,
    InputNoticiasComponent,
    SeleccionPaisComponent,
    NumerosEmergenciaComponent,
    InstructionsComponent,
    HomeComponent,
    SeleccionIdiomaComponent,
    NoticiasComponent,
    RecomendacionesComponent,
    CarouselComponent,
    PageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
