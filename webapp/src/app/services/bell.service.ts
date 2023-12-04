import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BellService {

  constructor() { }
  opener:String[] = []
  bell:String[] = []
  postOpener(test: String){
    console.log(test)
  }

  postBell(test:String){
    console.log(test)
  }

}
