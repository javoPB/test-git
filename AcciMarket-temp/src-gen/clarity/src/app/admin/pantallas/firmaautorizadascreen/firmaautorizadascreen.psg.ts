/* PSG  Firmaautorizadascreen Ts */
import { Component, OnInit } from '@angular/core';
import '@clr/icons/shapes/social-shapes';
import '@clr/icons/shapes/essential-shapes';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { style } from '@angular/animations';
import { Permission } from '../../../_models/permission';
import { User } from '../../../_models';
import { ValidationService } from '../../../_validation/validation.service';   // Agregar
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';   // Agregar

@Component({
  selector: 'clr-firmaautorizadascreen-demo-styles',
  styleUrls: ['../pantallas.psg.scss'],
  templateUrl: './firmaautorizadascreen.psg.html',
})
export class Firmaautorizadascreen implements OnInit{
	
firmaautorizadaformForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  	
this.firmaautorizadaformForm = this.fb.group({
					nombre: new FormControl('', Validators.required),
					appaterno: new FormControl('', Validators.required),
					apmaterno: new FormControl('', Validators.required),
					noescr: new FormControl('', Validators.required),
					nonot: new FormControl('', Validators.required),
});	
  }

ngOnInit() {}	 

/* form */


/*./form */	

 
}

