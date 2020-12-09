/* PSG  Distribucioninstruccionesscreen Ts */
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
  selector: 'clr-distribucioninstruccionesscreen-demo-styles',
  styleUrls: ['../pantallas.psg.scss'],
  templateUrl: './distribucioninstruccionesscreen.psg.html',
})
export class Distribucioninstruccionesscreen implements OnInit{
	
distribucioninstruccionesformForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  	
this.distribucioninstruccionesformForm = this.fb.group({
});	
  }

ngOnInit() {}	 

/* form */


/*./form */	

 
}

