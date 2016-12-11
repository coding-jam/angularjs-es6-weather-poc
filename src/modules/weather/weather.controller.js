export default class WeatherController {

    /* @ngInject */
    constructor(WeatherService) {
        this.service = WeatherService;
    }

    $onInit() {
        this.service.getLocationWeather()
            .then((weather) => {
                this.info = weather;
                console.log(this.info);
            });
    }
}