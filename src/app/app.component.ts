import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from './services/app.service';
import * as moment from 'moment';

moment.locale('pt-br');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(private appService: AppService, private ref: ChangeDetectorRef) {}

  loadingSubsCription: Subscription | undefined;
  loading: boolean = false;

  title = 'T2 - ES1';

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.loadingSubsCription = this.appService.loadingEventEmitter.subscribe(
      (value: boolean) => {
        this.loading = value;
        this.ref.detectChanges();
      }
    );
  }

  ngOnDestroy(): void {
    this.loadingSubsCription?.unsubscribe();
  }
}
