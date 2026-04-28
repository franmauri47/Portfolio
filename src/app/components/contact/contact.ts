import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { FormspreeService } from '../../services/formspree.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly formspree = inject(FormspreeService);

  readonly sending = signal(false);
  readonly successMessage = signal<string | null>(null);
  readonly errorMessage = signal<string | null>(null);

  readonly form = this.formBuilder.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required]
  });

  async submit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.sending.set(true);
    this.successMessage.set(null);
    this.errorMessage.set(null);

    try {
      await firstValueFrom(this.formspree.submit(this.form.getRawValue()));
      this.form.reset({ name: '', email: '', message: '' });
      this.successMessage.set('Message sent successfully.');
    } catch (error) {
      this.errorMessage.set('Sorry, something went wrong. Try again soon.');
    } finally {
      this.sending.set(false);
    }
  }
}
