import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Scope,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ scope: Scope.TRANSIENT })
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    console.log(112222333);
    return next
      .handle()
      .pipe(tap(() => console.log(`⏱️ ${Date.now() - now}ms`)));
  }
}
