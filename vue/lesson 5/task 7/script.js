let app = new Vue({
	el: '#app',
	data: {
		res: [67,202,323,-23,-1,-2,1,2,3,4,5,10,0,20,45,36],
	},
	methods: {
		res1: function(){
			this.res = this.res.filter(function(res){
				return (res > 0 && res < 10);
			});
		},
	},
});
