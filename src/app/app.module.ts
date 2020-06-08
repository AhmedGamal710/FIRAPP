import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ SharedModule } from './shared/shared.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    ImageCropperModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
=======
 
    
    // MatTableDataSource
>>>>>>> fe6d9014d8cd214104cedfebe14864dda2625d06
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
