import { Component, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements AfterViewInit {
  @ViewChild('splineAvatar') splineAvatar!: ElementRef;

  ngAfterViewInit() {
    window.addEventListener('scroll', this.handleScroll);
  }

  @HostListener('window:scroll', [])
  handleScroll() {
    // Rotación del avatar con el scroll
    const scrollY = window.scrollY;
    const rotation = scrollY * 0.1;
    if (this.splineAvatar) {
      this.splineAvatar.nativeElement.style.transform = `rotateY(${rotation}deg)`;
    }

    // Animación de las barras de progreso
    const skillsSection = document.querySelector('.skills');
    if (skillsSection) {
      const sectionTop = skillsSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        document.querySelectorAll('.progress').forEach((bar) => {
          const progress = bar.getAttribute('data-progress');
          bar.setAttribute('style', `width: ${progress}%;`);
        });
      }
    }
  }
}
