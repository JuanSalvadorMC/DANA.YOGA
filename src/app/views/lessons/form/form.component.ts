import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegionService } from '../../../services/region.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private estadosService: RegionService) { }

/*   ngAfterViewInit(): void {
    this.formRegistrar.get('cp').valueChanges.subscribe(resp=> {
      if(this.formRegistrar.get('cp').valid) this.obtenerInfoCp();
    });
  } */
  ngOnInit(): void {
  }
  
/*  formRegistrar: FormGroup;
  loggedIn;
  user;
  rq
  idUsuario;
  inversionista: boolean = false;
  catEstados:any[]=[];
  catMunicipios:any[]=[];
  catColonias:any[]=[];
 */

/*   crearFormulario(){
    this.formRegistrar = new FormGroup({
      nombre: new FormControl(''),
      apellidoPaterno: new FormControl(''),
      apellidoMaterno: new FormControl('',[Validators.required]),
      dir1: new FormControl({value:'', disabled:true},[Validators.required, Validators.minLength(4)]),
      dir2: new FormControl('',[Validators.required, Validators.minLength(4)]),
      estado: new FormControl({value:'', disabled:true},[Validators.required]),
      municipio: new FormControl({value:'', disabled:true},[Validators.required]),
      cp: new FormControl('',[Validators.required, Validators.minLength(5)]),
      email: new FormControl(''),
      redSocialId: new FormControl(''),
      externo: new FormControl(true),
      telefono: new FormControl('',[Validators.required, Validators.minLength(10)]),
      isInversionista: new FormControl('',[Validators.required]),
      membresia: new FormControl(0)
    });
  } */

/*   obtenerColonias(){
    this.estadosService.obtenerColoniaPorCP(this.formRegistrar.get('cp').value).subscribe( (resp:any) => {
      let colonia:any [] =  resp.response.colonia
      colonia.forEach((elm, index) => {
        let coloniaObject = { nombreColonia:elm , idColonia: index+1}
        this.catColonias.push(coloniaObject)
      })
    })
}
obtenerMunicipios(param?){
  this.catMunicipios = [];
  let parametro = !param ? this.formRegistrar.get('estado').value : param;
  this.estadosService.obtenerMunicipios(parametro).subscribe(resp => {
    let municipio:any[]= resp.response.municipios
    municipio.forEach((elm, i)=> {
      let municipioObject = { nombreMunicipio: elm, idMunicipio:i+1}
      this.catMunicipios.push(municipioObject)
    });
  })
} */

/* obtenerInfoCp(){
  this.estadosService.obtenerInfoPorCP(this.formRegistrar.get('cp').value).subscribe((resp:any) => {
    if(resp.error == true)this.notifiacionesService.lanzarNotificacion('Intente con un códico postal válido', 'No se encontraron coincidencias', 'error');
    let estado = resp.response.estado
    let municipio = resp.response.municipio; 
    this.formRegistrar.get('estado').setValue(estado)
    this.obtenerMunicipios();
    this.formRegistrar.get('municipio').setValue(municipio);
    this.obtenerColonias();
    this.formRegistrar.get('dir1').enable();
  },err => {
    this.notifiacionesService.lanzarNotificacion('Intente con un códico postal válido', 'No se encontraron coincidencias', 'error');
    this.formRegistrar.get('estado').reset();
    this.formRegistrar.get('municipio').reset();
  })
}
 */


}
