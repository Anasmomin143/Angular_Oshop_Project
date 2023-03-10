import { CartService } from './services/cart.service';
import { MatarialModule } from './matarial/matarial.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './Components/test/test.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ProductsComponent } from './Components/products/products.component';

import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { UserNameFormatterPipe } from './Pipes/user-name-formatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    TemplateFormComponent,
    ProductsComponent,
    ProductDetailsComponent,
    CartComponent,
    HomeComponent,
    HeaderComponent,
    UserNameFormatterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatarialModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
    CartService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
