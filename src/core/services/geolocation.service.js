export default class GeoLocationService {

    /* @ngInject */
    constructor($q) {
        Object.assign(this, {$q});
    }

    whenLocation() {
        if ("geolocation" in navigator) {
            let deferred = this.$q.defer();
            navigator.geolocation.getCurrentPosition((position) => {
                deferred.resolve(position);
            });
            return deferred.promise;
        } else {
            return this.$q.reject("Geolocation not supported by your browser");
        }
    }
}