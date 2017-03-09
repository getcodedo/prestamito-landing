/**
 * Created by kensuka on 3/8/17.
 */
(function () {
    angular.module('prestamito-landing', ['ngAnimate', 'toastr'])
        .config(function(toastrConfig) {
            angular.extend(toastrConfig, {
                autoDismiss: false,
                containerId: 'toast-container',
                maxOpened: 0,
                newestOnTop: true,
                positionClass: 'toast-top-center',
                preventDuplicates: false,
                timeOut: 2000,
                preventOpenDuplicates: false,
                target: 'body'
            });
        })
        .controller('LandingController', function ($scope, $http, toastr) {
            $scope.subscriptionRequest = {
                fullName: '',
                phoneNumber: '',
                email: ''
            };

            $scope.saveSubscriptionRequest = function () {
                $http.post('https://prestamitoapp.com/api/prestamito/subscriptionRequests', $scope.subscriptionRequest)
                    .then(function (subscriptionRequest) {
                        toastr.info('Su Solicitud de Suscripción ha sido enviada de manera exitosa.');
                        clearInputs();
                    }, function (responseMessage) {
                        toastr.error(responseMessage.data.message, 'Error', 1000);

                    });
            };

            function clearInputs() {
                $scope.subscriptionRequest = {
                    fullName: '',
                    phoneNumber: '',
                    email: ''
                };
            }
        });
})();