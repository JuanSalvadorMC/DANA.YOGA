import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent implements OnInit {

  vista: any;
  
  constructor(private activatedRoute: ActivatedRoute,) { }

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
