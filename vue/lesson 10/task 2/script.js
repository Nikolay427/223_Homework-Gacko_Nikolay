let app = new Vue({
	el: '#app',
	data: {
		items: [],
		res: '',
	},
	methods:{
		res1: function(){
			this.items = this.res.split(' ');
			
		},
	},
});
