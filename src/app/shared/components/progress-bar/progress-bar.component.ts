import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent  implements OnInit {
  isLoading$:Subject<boolean> = new Subject();
  constructor(private readonly spinnerService:SpinnerService) {
    this.isLoading$=spinnerService.isLoading$;
  }
  ngOnInit() {}
}
