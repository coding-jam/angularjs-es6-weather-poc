import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppCore from '../../core';
import {HomeComponent} from './home.component';
import WeatherModule from './../../modules/weather';

export * from './home.component';

export default angular.module('home', [
        AppCore,
        uiRouter,
        WeatherModule
    ])
    .component(HomeComponent.selector, HomeComponent)
    .name;