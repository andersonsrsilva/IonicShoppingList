import {Injectable} from '@angular/core';
import {ToastController} from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private toasCtrl: ToastController) {
  }

  show(message: string, duration: number = 3000) {
    return this.toasCtrl
      .create({
        message,
        duration
      })
      .present();
  }
}
