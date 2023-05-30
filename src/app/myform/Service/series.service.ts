import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private res = new Array();

  getSeries(p: number, pp: number){
    if(p % 2 === 0){
      p = pp/2 -1
    }else{
      p = (pp+1) * (pp+1)
    }
    return p
  }

  getTab(p: number, n: number){
    let res1 = 0;
    let pp = p;
    for (let i = 0; i < n; i ++){
      res1 = this.getSeries(p, pp);
      this.res.push(res1);
      pp = p;
      p = res1;
    }
    return this.res
  }

  constructor() {}
}
