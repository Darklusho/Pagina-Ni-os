import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-suma',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './suma.component.html',
  styleUrl: './suma.component.css'
})
export class SumaComponent implements OnInit{

  number1: number = 0;
  number2: number = 0;
  userAnswer: number | null = null;
  isCorrect: boolean | null = null;

  ngOnInit(): void {
    this.generateNumbers();
  }

  // Genera dos números aleatorios entre 1 y 10
  generateNumbers(): void {
    this.number1 = Math.floor(Math.random() * 10) + 1;
    this.number2 = Math.floor(Math.random() * 10) + 1;
    this.isCorrect = null;
    this.userAnswer = null;
  }

  // Verifica la respuesta del usuario
  checkAnswer(): void {
    const correctAnswer = this.number1 + this.number2;
    this.isCorrect = this.userAnswer === correctAnswer;
    if (this.isCorrect) {
      alert('¡Correcto!');
      this.generateNumbers();
    } else {
      alert('Incorrecto, intenta de nuevo.');
    }
  }
}
