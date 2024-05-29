import Slider from './sliders';

export default class MiniSlider extends Slider {
    constructor({container, next, prev, activeClass, animate, autoplay} = {}) {
        super({container, next, prev, activeClass, animate, autoplay});
    }

    //декорирует слайды
    decorizeSlides() {
        this.slides.forEach(slide => {
            if (this.activeClass) {
                slide.classList.remove(this.activeClass);
            }
            if (this.animate) {
                const title = slide.querySelector('.card__title');
                const arrow = slide.querySelector('.card__controls-arrow');
                if (title) title.style.opacity = '0.4';
                if (arrow) arrow.style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button') && this.activeClass) {
            this.slides[0].classList.add(this.activeClass);
        }

        if (this.animate) {
            const title = this.slides[0].querySelector('.card__title');
            const arrow = this.slides[0].querySelector('.card__controls-arrow');
            if (title) title.style.opacity = '1';
            if (arrow) arrow.style.opacity = '1';
        }
    }

    nexrSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
            this.container.appendChild(this.slides[2]);
            this.decorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON") {
            this.container.appendChild(this.slides[0]);
            this.container.appendChild(this.slides[1]);
            this.decorizeSlides();
        } else {
            this.container.appendChild(this.slides[0]);
            this.slides = Array.from(this.container.children); // Обновление this.slides
            this.decorizeSlides();
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nexrSlide());

        this.prev.addEventListener('click', () => {

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.slides = Array.from(this.container.children); // Обновление this.slides
                    this.decorizeSlides();
                    break;
                }
            }
        });
    }

    init() {
        if (this.container) {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                setInterval(() => this.nexrSlide(), 5000);
            }
        }
    }
}