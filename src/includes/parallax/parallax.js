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

			gsap.to(planet, {
				ease: 'none',
				scale: 2,
				y: 10 * depth,
				scrollTrigger: {
					markers: true,
					scrub: true,
				},
			});
		});
	}
}

export default new Parallax();
