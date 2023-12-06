import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { response } from '../interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class BellService {

  constructor() { }
  baseUrl = 'http://127.0.0.1:8000/'
  opener:String[] = []
  bell:String[] = []
  async openDoor(user: String):Promise<response>{
    const response = await fetch(this.baseUrl+'openDoor', {
    method: 'POST',
    });
    if(response.ok){
      const data = response.json()
      console.log(data)
    } else{
      console.log("Hat nicht funktioniert")
    }
    return {"test":"123"};
  }

  ringBell(test:String){
    console.log(test)
  }

}
