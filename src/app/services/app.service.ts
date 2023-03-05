import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { snackBarConfig } from 'src/app/config/snack-bar.config';
import { SnackBarConfig } from '../model/snack-bar.interface';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private snackBar: MatSnackBar) {}

  loading = 0;
  loadingEventEmitter: EventEmitter<boolean> = new EventEmitter();

  setLoading(loading: boolean) {
    if (loading) this.loading++;
    else if (this.loading > 0) this.loading--;
    this.loadingEventEmitter.emit(this.loading > 0);
  }

  showSnackBar(message: string, action: string, type: 'success' | 'error') {
    const config: any =
      type === 'success' ? snackBarConfig.success : snackBarConfig.error;

    if (config) {
      const verticalPosition: any = config.verticalPosition || 'bottom';
      const horizontalPosition: any = config.horizontalPosition || 'start';
      this.snackBar.open(message, action, {
        verticalPosition,
        horizontalPosition,
        panelClass: config.panelClass,
        duration: config?.duration ?? 5000,
      });
    } else {
      this.snackBar.open(message, action);
    }
  }
}
