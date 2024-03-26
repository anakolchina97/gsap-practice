import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

class Parallax {
	constructor() {
		this.container = document.querySelector('.parallax');

		if (!this.container) {
			return;
		}

		this.planets = this.container.querySelectorAll('.parallax__planet');
		this.init();
		window.addEventListener('resize', () => this.init());
	}
	init() {
		this.movePlanets();
		this.moveAstronaut();
	}
	movePlanets() {
		this.planets.forEach(planet => {
			const depth = parseFloat(planet.getAttribute('data-depth'));

			function rotateForever() {
				gsap.to(planet, {
					rotation: '+=360',
					duration: 40,
					ease: 'none',
					onComplete: rotateForever,
				});
			}
			rotateForever();

			gsap.to(planet, {
				ease: 'none',
				scale: 1.2,
				y: 10 * depth,
				scrollTrigger: {
					scrub: 5,
				},
			});
		});
	}
	moveAstronaut() {
		const path = this.container.querySelector('#parallax-path');
		const astronaut = this.container.querySelector('.parallax__astronaut');

		const mm = gsap.matchMedia();
		mm.add(
			{
				small: '(max-width: 768px)',
				large: '(min-width: 769px)',
			},
			c => {
				console.log(c.conditions.small);
				const startPoint = c.conditions.small ? 'top 10%' : 'top 50%';

				gsap.to(astronaut, {
					scrollTrigger: {
						trigger: this.container,
						start: startPoint,
						end: 'bottom bottom',
						scrub: 5,
					},
					motionPath: {
						path: path,
						align: path,
						alignOrigin: [0.5, 0.5],
					},
				});
			}
		);
	}
}

export default new Parallax();
