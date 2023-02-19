window.productController = function ($scope, $http, $location, $routeParams) {
    var id = $routeParams.id;
    $scope.products = [];


    $http.get("http://localhost:3000/products")
        .then(function (response) {
            $scope.products = response.data;
        });

    $scope.detailProdcut = [];
    $scope.detail = function (id) {
        $http.get("http://localhost:3000/products/" + id)
            .then(function (response) {
                $scope.detailProdcut = response.data
                console.log($scope.detailProdcut)
            })
    }
};
