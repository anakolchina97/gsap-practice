import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

class Parallax {
	constructor() {
		this.planets = document.querySelectorAll('.parallax__planet');
		this.init();
	}
	init() {
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
					markers: true,
					scrub: 5,
				},
			});
		});
	}
}

export default new Parallax();
