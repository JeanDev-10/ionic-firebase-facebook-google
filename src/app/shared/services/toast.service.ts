import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  constructor(private toastController: ToastController) {}
  async createToastSucess(message:string){
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color:'success'
    });

    await toast.present();
  }
  async createToastError(message:string){
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color:'danger'
    });

    await toast.present();
  }
}
