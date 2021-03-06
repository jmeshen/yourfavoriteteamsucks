app.config(function($stateProvider){
	$stateProvider.state('rankings',{
		url: '/ranking',
		templateUrl: 'js/rankings/ranking.html',
		controller: 'rankingsCtrl'
	});
});

app.controller('rankingsCtrl', function($scope, RankingsFactory){

	var qbs, wrs, rbs, tes, defs, k;

	RankingsFactory.fetchPos('qbs')
	.then(function(qbs){
		qbs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});

		
		for(var i = 0; i < qbs.length; i++){
			qbs[i].Rank = i+1;
			if(Number(qbs[i].Avg) === 100){
				$scope.qbs = qbs.slice(0,i);
				break;
			} 
		}

	})

	RankingsFactory.fetchPos('wrs')
	.then(function(wrs){
		wrs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		
		for(var i = 0; i < wrs.length; i++){
			wrs[i].Rank = i+1;
			if(Number(wrs[i].Avg) === 100){
				$scope.wrs = wrs.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('rbs')
	.then(function(rbs){
		rbs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		
		for(var i = 0; i < rbs.length; i++){
			rbs[i].Rank = i+1;
			if(Number(rbs[i].Avg) === 100){
				$scope.rbs = rbs.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('tes')
	.then(function(tes){
		tes.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		
		for(var i = 0; i < tes.length; i++){
			tes[i].Rank = i+1;
			if(Number(tes[i].Avg) === 100){
				$scope.tes = tes.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('defs')
	.then(function(defs){
		defs.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		
		for(var i = 0; i < defs.length; i++){
			defs[i].Rank = i+1;
			if(Number(defs[i].Avg) === 100){
				$scope.defs = defs.slice(0,i);
				break;
			} 
		}
	})

	RankingsFactory.fetchPos('ks')
	.then(function(ks){
		ks.sort(function (a, b) {
		  if (Number(a.Avg) > Number(b.Avg)) {
		    return 1;
		  }
		  if (Number(a.Avg) < Number(b.Avg)) {
		    return -1;
		  }
		  // a must be equal to b
		  return 0;
		});
		
		for(var i = 0; i < ks.length; i++){
			ks[i].Rank = i+1;
			if(Number(ks[i].Avg) === 100){
				$scope.ks = ks.slice(0,i);
				break;
			} 
		}
	})

})