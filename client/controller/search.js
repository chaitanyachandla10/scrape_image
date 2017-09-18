app.controller('ctr',function($scope,$http,$state)
	{	var search
	$scope.submit=function()
{
	$http
	({
		method:'GET',
		url:'/search',
		params:
		{
			search:$scope.search
		}
	})
.then(function(response)
	{



	})	
}
});