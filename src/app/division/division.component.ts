import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './division.component.html',
  styleUrl: './division.component.css'
})
export class DivisionComponent {
  dividend: number = 0;
  divisor: number = 0;
  userAnswer: number | null = null;
  isCorrect: boolean | null = null;

  ngOnInit(): void {
    this.generateNumbers();
  }

  // Genera dos números aleatorios, asegurando que el divisor no sea cero y que la división sea exacta
  generateNumbers(): void {
    this.divisor = Math.floor(Math.random() * 9) + 1; // Genera un divisor entre 1 y 9 (evita 0)
    const quotient = Math.floor(Math.random() * 10) + 1; // Genera un cociente entre 1 y 10
    this.dividend = this.divisor * quotient; // Asegura que dividend ÷ divisor sea exacto
    this.isCorrect = null;
    this.userAnswer = null;
  }

  // Verifica la respuesta del usuario
  checkAnswer(): void {
    const correctAnswer = this.dividend / this.divisor;
    this.isCorrect = this.userAnswer === correctAnswer;
    if (this.isCorrect) {
      alert('¡Correcto!');
      this.generateNumbers();
    } else {
      alert('Incorrecto, intenta de nuevo.');
    }
  }
}
