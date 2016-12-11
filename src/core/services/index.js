import angular from 'angular';
import WeatherService from './../../modules/weather/weather.service.js';
import GeoLocationService from './geolocation.service.js';

export default angular
  .module('core.services', [
    // 'LocalStorageModule'
  ])
  .service(GeoLocationService.name, GeoLocationService);
