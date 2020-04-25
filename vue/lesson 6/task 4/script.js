let app = new Vue({
	el: '#app',
	data: {
		items: ['1', '2', '3', '4', '5', '-30', '484'],
	},

	methods: {
		res: function(index) {
		this.items.splice(index,1,Math.pow(this.items[index],2));
		},
	},
});
