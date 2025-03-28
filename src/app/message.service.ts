import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class MessageService {
    messages: string[] = [];
    //add para agregar un mensaje al array
  add (message: string) {
      this.messages.push(message);
    }
    //clear elimina el mensaje del array
  clear() {
      this.messages = [];
    }
    constructor() { }
  }
