export default class Slider {
    //сво-ва характеризующие слайдер на начальном этапе
    //те вещи которые описывают слайдер еще до начала работы
    constructor({container = null, 
        btns = null, 
        next = null, 
        prev = null,
        activeClass = '',
        animate,
        autoplay } = {}) { //передаем объект со свойствами по умолчанию
        //конструем св-ва нового объекта
        this.container = document.querySelector(container);
        this.slides = this.container ? Array.from(this.container.children) : []; //блоки внутри container
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
        this.slideIndex = 1; //определяет текущий слайд
    }

}