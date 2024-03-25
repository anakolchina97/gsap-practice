import gsap from 'gsap';

class MouseMove {
	constructor() {
		this.init();
	}
	init() {
		const box = document.querySelector('.mousemove__text');
		const container = document.querySelector('.mousemove');
		const maxMove = 60; // Максимальное смещение элемента

		container.addEventListener('mousemove', function (event) {
			const boundingRect = container.getBoundingClientRect();
			const centerX = boundingRect.left + boundingRect.width / 2;
			const centerY = boundingRect.top + boundingRect.height / 2;

			// Вычисляем смещение относительно центра контейнера
			const deltaX = ((event.clientX - centerX) / boundingRect.width) * maxMove;
			const deltaY = ((event.clientY - centerY) / boundingRect.height) * maxMove;

			// Плавно перемещаем элемент с помощью GSAP
			gsap.to(box, {
				duration: 0.4,
				x: -deltaX,
				y: -deltaY,
				ease: 'power2.out',
			});
		});
	}
}

export default new MouseMove();
