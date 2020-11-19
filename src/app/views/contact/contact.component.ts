import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formContacto: FormGroup;
  seccion:any;
  
  constructor(private actRoute: ActivatedRoute, /* private emailService:SendEmailService */) { }

  ngOnInit() {
    this.seccion = this.actRoute.snapshot.paramMap.get('seccion');
    this.enfocarSeccion(this.seccion);
    this.crearFormulario();
  }

  crearFormulario(){
    this.formContacto = new FormGroup({
      nombreCompleto: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      empresa: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      numeroTel: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]),
      asunto: new FormControl(null, Validators.required),
    });
  }

  enfocarSeccion(sec){
    if(sec === "inicio") {document.getElementById("inicio").scrollIntoView();}
    
  }

  enviarCorreo(){
    /* this.emailService.enviarEmail(this.formContacto.value).subscribe((resp:any)=>{
      console.log(resp.status);
      if(resp.status === 200){
        Swal.fire({
          icon: 'success',
          title: 'Gracias por contactarnos',
          text: 'Tus datos de contacto han sido enviados con éxito',
        })
        this.formContacto.reset();
      }
    },error=>{
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Lo sentimos, ha ocurrido un error al enviar tus datos',
      })
    })
  } */
}
}