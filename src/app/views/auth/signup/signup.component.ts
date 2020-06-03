import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {AuthService} from '../../../shared/services/auth.service'
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Signup} from '../../../shared/classes/signup'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {
  title = 'angular-image-uploader';
  uploaderror
  countryHasErr:any
  imageChangedEvent: any = '';
  croppedImage: any = '';
  toggler=false
  products: any = [];
  signupModel= new Signup("","","","","","","","")
  dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    var blob = new Blob([ab], { type: mimeString });
    return blob;
  }
  fileChangeEvent(event: any): void {
    this.toggler=true;
    
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event)
      this.croppedImage = event.base64;
  }

  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
this.uploaderror="please retry again"
  }
  constructor(private _AuthService:AuthService,private router: Router,private httpClient: HttpClient,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.httpClient.get("assets/countries.json").subscribe(data =>{
      this.products = data;

    },
    error=>
    console.log(error))

  }
  Validatecountry(countryname) {
    if (countryname === "default") {
      this.countryHasErr = true;
    } else {
      this.countryHasErr = false;
    }
  }
  onSubmit() {

    console.log(this.croppedImage)
    var fd = new FormData();
    fd.append('name', this.signupModel.name);        
    fd.append('email', this.signupModel.email);
    fd.append('password', this.signupModel.password);
    if(this.croppedImage){
      var croppedImagee = this.dataURItoBlob(this.croppedImage);

      fd.append('img', croppedImagee );

    }
    fd.append('country', this.signupModel.country);
    fd.append('phone', this.signupModel.phone);
    fd.append('Age', this.signupModel.Age);
    fd.append('About', this.signupModel.About);
  this._AuthService.signup(fd).subscribe(
    response=>{
      console.log(response)
    },
    error=>{
      console.log(error)
    }
  )


  }

  

}
