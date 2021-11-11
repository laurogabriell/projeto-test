import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[]=[];

  add(menssage: string){
    this.messages.push(menssage);
  }

  clear(){
    this.messages = [];
  }

  constructor() { }
}
