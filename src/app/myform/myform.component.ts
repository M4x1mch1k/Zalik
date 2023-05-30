import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { SeriesService } from './Service/series.service';
import { ValidateInitialNumberService } from './Service/Validate/validate-initial-number.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {

  @Output() seriesGet: EventEmitter<any[]> = new EventEmitter<any[]>();
  seriesForm!: FormGroup;
  series!: SeriesService;
  seriesResults = new Array();

  constructor(private fb: FormBuilder) { 
    this.seriesForm = this.fb.group({
      FirstNumber: ['', [Validators.required]],
      InitialNumber: ['', [Validators.required]],
      Limit: ['', [Validators.required]],
    })
  }

  onSubmit(){
    let f = this.seriesForm.value.FirstNumber;
    let p = this.seriesForm.value.InitialNumber;
    let n = this.seriesForm.value.Limit;
    let initNumberValidation = new ValidateInitialNumberService();
    if (initNumberValidation.validate_init_number(p, f)){
      this.series = new SeriesService();
      this.seriesResults = this.series.getTab(p, n);
      this.seriesGet.emit(this.seriesResults)
      console.log(this.seriesResults);
    }else{
      alert("Initial number out of limit!")
    }
    
  }

  getColor(n: number){
    if(n % 8 === 0){
      return 'green'
    }
    if(n % 6 === 0){
      return 'blue'
    }
    if(n % 4 === 0){
      return 'yellow'
    }
    if(n % 2 === 0){
      return 'red'
    }else{
      return 'black'
    }
  }

  ngOnInit() {}

}
