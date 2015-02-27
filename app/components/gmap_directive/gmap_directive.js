'use strict';

angular.module('WIAW.gmap_directive', [])

    .directive('googleMap', function($http) {
        return {
            restrict: 'AE',
            templateUrl: './components/gmap_directive/gmap_directive.html',
            compile: function(element, attrs) {


                window.googlemaps_initialize = function () {
                    window.geocoder = new google.maps.Geocoder();
                    var mapOptions = {
                        zoom: +attrs.zoom,
                        center: new google.maps.LatLng(attrs.marker.split(', ')[0], attrs.marker.split(', ')[1]),
                        disableDefaultUI: true
                    };
                    window.map = new google.maps.Map(element[0].children[2], mapOptions);
                };

                function loadScript () {
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = 'https://maps.googleapis.com/maps/api/js?v3&' + 'callback=googlemaps_initialize';
                    document.head.appendChild(script);
                }

                if (document.readyState === 'complete') loadScript();
                else {
                    document.addEventListener('readystatechange', function() {
                        if (document.readyState === 'complete') loadScript();
                    })
                }

                return {
                    pre: function() {},
                    post: function(scope) {

                        element[0].children[1].addEventListener('keyup', function(e) {
                            if (e.keyCode == '13') {
                                $http.post('/search_locations', {query: scope.searchQuery})
                                    .success(function (data) {
                                        geocoder.geocode({address: data.address + ' ' + data.city + ',' + data.state + ' ' + data.zip},
                                        function (results, status) {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                map.setCenter(results[0].geometry.location);
                                                map.setZoom(10);
                                                var marker = new google.maps.Marker({
                                                    title: data.name,
                                                    map: map,
                                                    position: results[0].geometry.location
                                                });
                                            } else {
                                                console.log('unsuccessful geolocation');
                                            }
                                        });
                                        scope.location = data;
                                    })
                            }
                        })
                    }
                }
            }
        }
    });