let app = new Vue({
	el: '#app',
	data: {
		res: ['1', '2', '3', '4', '5', '-30', '484'],
	},

	methods: {
		res1: function(index) {
		this.res.splice(index,1,Math.pow(this.res[index],2));
		},
	},
});
