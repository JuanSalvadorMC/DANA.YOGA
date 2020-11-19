import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  vista: any;
  seccion: any;

  constructor(private activatedRoute: ActivatedRoute, private actRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(resp => {
      this.vista = resp.vista
      console.log(this.vista);      
       this.enforcarSeccion(this.vista); 
    })


   
  }

  enforcarSeccion(sec) {
     if (sec) { document.getElementById("vista").scrollIntoView();  }
  }
}