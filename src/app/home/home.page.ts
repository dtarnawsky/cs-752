import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonToggle, IonItem, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { linkOutline, mailUnreadOutline, shareOutline, starHalfOutline, informationCircleOutline, exitOutline, timeOutline, locateOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonToggle, IonIcon],
})
export class HomePage {
  longEvents = true;
  locationEnabled = true;

  constructor() {
    addIcons({ linkOutline, mailUnreadOutline, shareOutline, starHalfOutline, informationCircleOutline, exitOutline, timeOutline, locateOutline })
  }

  async toggleLongEvents(e: any) {
    this.longEvents = e.detail.checked;
  }

  async toggleLocation(e: any) {
    const turnedOn = e.detail.checked;
  }
}
