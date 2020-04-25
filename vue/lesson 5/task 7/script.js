let app = new Vue({
	el: '#app',
	data: {
		items: [67,202,323,-23,-1,-2,1,2,3,4,5,10,0,20,45,36],
	},
	methods: {
		res: function(){
			this.items = this.items.filter(function(item){
				return (item > 0 && item < 10);
			});
		},
	},
});