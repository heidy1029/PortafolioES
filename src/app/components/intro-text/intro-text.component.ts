import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import gsap from 'gsap';

@Component({
  selector: 'app-intro-text',
  standalone: true,
  templateUrl: './intro-text.component.html',
  styleUrls: ['./intro-text.component.css']
})
export class IntroTextComponent implements OnInit {
  @ViewChild('introText', { static: true }) introText!: ElementRef;
  @Output() textAnimationFinished = new EventEmitter<void>(); // Evento para notificar que terminó

  private text = 'Heidy Diaz';
  
  constructor() {}

  ngOnInit(): void {
    this.animateText();
  }

  private animateText(): void {
    const textContainer = this.introText.nativeElement;
    textContainer.innerHTML = ''; // Limpia el contenido previo
  
    let currentText = '';
    let index = 0;
  
    setTimeout(() => { // ⏳ Retrasa la animación 2 segundos
      const interval = setInterval(() => {
        if (index < this.text.length) {
          currentText += this.text[index];
          textContainer.innerHTML = currentText;
          index++;
        } else {
          clearInterval(interval); // Detiene la animación cuando termina el texto
          setTimeout(() => this.fadeOutText(), 1000); // Espera antes de desvanecer
        }
      }, 100); // Velocidad de escritura (ajustable)
    }, 5000); // ⏳ Delay de 2 segundos antes de iniciar
  }
  
  
  private fadeOutText(): void {
    console.log('✅ Animación de bienvenida terminada.');
    this.textAnimationFinished.emit(); // Solo emite el evento sin ocultar el texto
  }
}
