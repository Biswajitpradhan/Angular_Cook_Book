(function(){
    angular.module("NameCalculator",[])
    .controller("NameCalculatorController",function($scope){
        // $scope.name="Biswa"
        $scope.CalculatedNumeric=0;

        $scope.dispalyNumeric=function(){
            var totalNumericValue=calculate($scope.name);
            $scope.CalculatedNumeric=totalNumericValue;
        }
        function calculate(string)
        {
            let totalValue=0;
            for(let i=0;i<string.length;i++)
            {
                totalValue+=string.charCodeAt(i);
            }
            return totalValue;
        }
    });
})();