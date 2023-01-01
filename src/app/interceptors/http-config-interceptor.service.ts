import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent, HttpResponse,
} from '@angular/common/http';
import {Observable, of, switchMap, throwError} from 'rxjs';
import {Store} from "@ngxs/store";
import {AuthState} from "../state/store/auth.state";
import {MessageService} from "primeng/api";
import { environment } from '../environments/environment';


@Injectable()
export class HttpConfigInterceptor implements HttpConfigInterceptor {

	constructor(private store: Store, private messageService: MessageService) {
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const token = this.store.selectSnapshot(AuthState.token);
		if (token) {
			// TODO: replace jwt with bearer
			request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
		}
		return next.handle(request).pipe(
			switchMap((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					// Check if the response came from the API
					if (!event.url?.includes(environment.apiUrl)) return of(event);

					const {errorCode, payload} = event.body;

					if (this.thereIsError(errorCode)) {
						this.messageService.add({severity: 'error', summary: 'Error', detail: payload});
						return throwError(() => event);
					}

					// If there is no errors return the payload
					event = event.clone({body: payload});
				}
				return of(event);
			})
		);
	}

	private thereIsError(errorCode: number): boolean {
		return errorCode !== 0;
	}
}
