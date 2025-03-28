import { Component } from '@angular/core';
import { MessageService } from '../message.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  imports: [CommonModule],
  standalone: true,
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
