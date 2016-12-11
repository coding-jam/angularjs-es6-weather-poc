import angular from 'angular';
import WeatherController from './weather.controller';
import WeatherDirective from './weather.directive';
import WeatherService from './weather.service';
import services from '../../core/services';

export default angular.module('weatherModule', [services.name])
    .controller(WeatherController.name, WeatherController)
    .service(WeatherService.name, WeatherService)
    .directive(WeatherDirective.selector(), () => new WeatherDirective())
    .name;