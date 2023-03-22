import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FilterComponentComponent } from './components/filter-component/filter-component.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export function customTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http,
    './assets/i18n/',
    '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponentComponent,
    DataTableComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es-ES',
      loader: {
          provide: TranslateLoader,
          useFactory: (customTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
