/* PSG  Reperfilamientopersonafisicascreen Ts */
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
  selector: 'clr-reperfilamientopersonafisicascreen-demo-styles',
  styleUrls: ['../pantallas.psg.scss'],
  templateUrl: './reperfilamientopersonafisicascreen.psg.html',
})
export class Reperfilamientopersonafisicascreen implements OnInit{
	
reperfilamientopersonafisicaformForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private validationService: ValidationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  	
this.reperfilamientopersonafisicaformForm = this.fb.group({
					perfil: new FormControl('', Validators.required),
});	
  }

ngOnInit() {}	 

/* form */


/*./form */	

 
}

