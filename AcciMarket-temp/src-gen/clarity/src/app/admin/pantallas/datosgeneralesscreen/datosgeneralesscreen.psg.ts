/* PSG  Datosgeneralesscreen Ts */
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
  selector: 'clr-datosgeneralesscreen-demo-styles',
  styleUrls: ['../pantallas.psg.scss'],
  templateUrl: './datosgeneralesscreen.psg.html',
})
export class Datosgeneralesscreen implements OnInit{
	
busquedacontratoformForm : FormGroup;
datoscontratoformForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  	
this.busquedacontratoformForm = this.fb.group({
});	
this.datoscontratoformForm = this.fb.group({
});	
  }

ngOnInit() {}	 

/* form */


/*./form */	
/* form */


/*./form */	

 
}

