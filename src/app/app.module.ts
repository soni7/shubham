import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShowtableComponent } from './view/Sharedcomponents/showtable/showtable.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './service/interceptor.interceptor';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { TableModule } from 'primeng/table';



// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ShowtableComponent,
    DashboardComponent
  ],
  imports: [
    FormsModule,
    Ng2SearchPipeModule,
    BrowserModule,
    ButtonModule,
    InputTextModule,
    // TableModule,
    HttpClientModule,
    // RouterModule,
    // Router,
    // AppRoutingModule
  ],
  providers: [
    // Router
    {provide : HTTP_INTERCEPTORS, useClass : InterceptorInterceptor, multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
