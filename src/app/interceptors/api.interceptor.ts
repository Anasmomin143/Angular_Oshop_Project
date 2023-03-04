import { NgxSpinnerService } from 'ngx-spinner';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  get userDetails() {
    return JSON.parse(localStorage.getItem('userDetails') as string);
  }
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    let finalrequest;

    if (this.userDetails && this.userDetails.token) {
      const header = new HttpHeaders({
        Authorization: 'bearer ' + this.userDetails.token,
      });
      this.spinner.show();
      const clone = request.clone({ headers: header });
      finalrequest = next.handle(clone).pipe(
        catchError((value) => {
          this.spinner.hide();
          if (value.status === 404) {
            alert('invalid api call');
          }
          return value;
        }),map((value)=>{
          if(value instanceof HttpResponse) {
               this.spinner.hide();
          }
          return value
        })
      );
    } else {
      this.spinner.hide();
      finalrequest = next.handle(request);
    }

    return finalrequest as any;
  }
}
