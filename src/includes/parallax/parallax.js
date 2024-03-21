import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

class Parallax {
	constructor() {
		this.planets = document.querySelectorAll('.parallax__planet');
		this.scaleDownValue = 1.2; // Масштаб для прокрутки вниз
		this.animationActive = false; // Ф

		this.init();
	}
	init() {
		window.addEventListener('load', function () {
			console.log(1);
			// После загрузки страницы устанавливаем флаг в true
			this.animationActive = true;
		});
		this.planets.forEach(planet => {
			const depth = parseFloat(planet.getAttribute('data-depth'));

			gsap.to(planet, {
				scale: 1,
				y: 10 * depth,
				ease: 'none',
				scrollTrigger: {
					trigger: planet,
					start: 'center bottom',
					end: 'center top',
					scrub: true,
					markers: true,
					onUpdate: self => {
						// Проверяем, активна ли анимация
						if (this.animationActive) {
							// Применяем анимацию только при прокрутке вниз
							if (self.direction === 1) {
								console.log(1);
								gsap.to(planet, { scale: this.scaleDownValue });
							} else {
								gsap.to(planet, { scale: 1 });
							}
						}
					},
				},
			});
		});
	}
}

export default new Parallax();
