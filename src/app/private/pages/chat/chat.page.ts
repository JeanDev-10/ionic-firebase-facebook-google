import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';
import { AuthServiceService } from 'src/app/public/services/auth-service.service';
import { Observable, Subject, filter, takeUntil } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  private socket: any;
  messages: any[] = [];
  newMessage: string = '';
  user$:Observable<any>;
  email!:string;
  photoURL!:string
  constructor(private authService:AuthServiceService) {
    this.user$ = this.authService.stateSession$.pipe(
      filter((state) => (state ? true : false))
    );
    this.user$.subscribe((data:any)=>{
      console.log(data);
      this.email=data.email;
      this.photoURL=data.auth.currentUser.photoURL
    })
    }
  ngOnInit() {
    this.socket = io('http://localhost:3000'); // Cambia la URL según tu configuración
    this.socket.on('message', (data: any) => {
      console.log(data)
      this.messages.push(data);
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const messageData = {
        text: this.newMessage,
        senderName:this.email,
        photoURL:this.photoURL // Reemplaza con el nombre real del remitente
      };
      this.socket.emit('message',messageData );
      this.newMessage = '';
      console.log("peticion de envio de mensaje a bd")

    }
  }

}
