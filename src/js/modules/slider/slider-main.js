import Slider from './sliders';

export default class MainSlider extends Slider { //MainSlider наследуется от Slider
    constructor(btns) { //в главном слайдере используем только 1 св-во из главного слайдера
        //метод super чтобы получить доступ к ним
        super(btns);
    }

    showSlides(n) { //n - отвечает за то куда двигается слайдер
        if (n > this.slides.length) { //если слайд долистали до последнего, то 
            this.slideIndex = 1; //показываем 1 слайд
        }
 
        if (n < 1) { //если слайдер долистан до первого слайда, то
            this.slideIndex = this.slides.length; //показываем последний слайд
        }

        //показ окошка на 3 странице
        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.style.opacity = '1';
                    this.hanson.classList.add('slideInUp');
                }, 3000);
            } else {
                this.hanson.classList.remove('slideInUp');
            }
        } catch(e) {}

        //скрываем все элементы слайда
        [...this.slides].forEach(slide => {
            slide.style.display = 'none';
        });
        //и показываем первый
        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    //метод для кнопки вперед, которая есть на других страницах
    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    //главный метод выполняющий самые главные действия на странице
    render() { 
        try {
            this.hanson = document.querySelector('.hanson'); //окошко на 3 странице
        } catch(e){}

        this.btns.forEach(item => { //перебираем кнопки
            item.addEventListener('click', () => {
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });

        this.showSlides(this.slideIndex); //первичая иницилизация слайдера
        //условия в функции showSlides скорее всего не сработают, и просто скроются все слайды, 
        //а затем покажет самый первый слайд
    }
}