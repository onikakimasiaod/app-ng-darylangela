import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'mvKcLE033cb8R0t4e1xKnamcss1mGt5cOfHwgYIUUm1SNntdQtqhBvuYU8XUB5XLO9V24lDIIFxnvKxzbC1EiZtnXbl56zTpX2H5HFwrVw2JcDW3eeTK8ati09e858d1'
      }
    });

    return next.handle(clonedRequest);
  }
}