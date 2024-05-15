import Slider from "./modules/sliders";

window.addEventListener('DOMContentLoaded', () => {
    //на основе импортированного класса создаем новый объект, кот будем использовать
    const slider = new Slider('.page', '.next');
    slider.render();
});