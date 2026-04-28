import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface FormspreePayload {
  name: string;
  email: string;
  message: string;
}

interface FormspreeResponse {
  ok: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class FormspreeService {
  private readonly http = inject(HttpClient);
  private readonly formId = 'mdayqnjw';

  submit(payload: FormspreePayload): Observable<FormspreeResponse> {
    return this.http.post<FormspreeResponse>(
      `https://formspree.io/f/${this.formId}`,
      payload,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );
  }
}
