import template from './weather.html';

export default class WeatherDirective {

    constructor() {
        this.templateUrl = template;
        this.restrict = 'E';
        this.scope = {
            forecast: '<'
        };
        this.controllerAs = 'ctrl';
        this.bindToController = true;

        this.controller = WeatherDirectiveController;
    }

    static selector() {
        return 'weather';
    }

    link() {
        console.log(arguments);
    }
}

class WeatherDirectiveController {

    constructor() {
        console.log('Directive controller')
    }
}