import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

type ResultType = 'success' | 'warning' | 'error' | null;

interface ValidationResult {
  message: string;
  type: ResultType;
}

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected name = signal('');
  protected age = signal('');
  protected result = signal<ValidationResult>({ message: '', type: null });
  protected isLoading = signal(false);
  protected hasSubmitted = signal(false);

  protected readonly isFormValid = computed(() => {
    return this.name().trim().length > 0 && this.age() !== '';
  });

  private validate(): ValidationResult {
    const parsedAge = parseFloat(this.age());
    const trimmedName = this.name().trim();

    if (!trimmedName) {
      return { message: 'Please enter a valid name.', type: 'error' };
    }

    if (isNaN(parsedAge) || parsedAge < 0) {
      return { message: 'Please enter a valid age.', type: 'error' };
    }

    if (parsedAge < 18) {
      return {
        message: `Hi ${trimmedName}! 🌱 You are ${parsedAge} years old — keep learning and enjoying the world of coding!`,
        type: 'warning',
      };
    }

    return {
      message: `Welcome, ${trimmedName}! 🎉 You are ${parsedAge} years old and ready to conquer the coding world!`,
      type: 'success',
    };
  }

  protected onSubmit(): void {
    this.hasSubmitted.set(true);
    this.isLoading.set(true);

    setTimeout(() => {
      this.result.set(this.validate());
      this.isLoading.set(false);
    }, 500);
  }

  protected onReset(): void {
    this.name.set('');
    this.age.set('');
    this.result.set({ message: '', type: null });
    this.hasSubmitted.set(false);
    this.isLoading.set(false);
  }
}
