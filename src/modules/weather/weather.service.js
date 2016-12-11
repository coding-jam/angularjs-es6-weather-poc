const KEY = 'WEATHER';

function readCache() {
    return JSON.parse(window.sessionStorage.getItem(KEY)) || false;
}

function writeCache(data) {
    window.sessionStorage.setItem(KEY, JSON.stringify(data));
}

export default class WeatherService {

    /* @ngInject */
    constructor($http, $q, GeoLocationService) {
        Object.assign(this, {$http, $q, GeoLocationService});
    }

    getLocationWeather() {
        var cached = readCache();
        if (!cached) {
            return this.GeoLocationService.whenLocation()
                .then((position) => {
                    var url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&units=metric&appid=6e62f794267c4303cef145b1c0fa5321';
                    return this.$http.get(url);
                })
                .then((resp) => {
                    writeCache(resp.data);
                    return resp.data;
                });
        } else {
            return this.$q.resolve(cached);
        }
    }
}