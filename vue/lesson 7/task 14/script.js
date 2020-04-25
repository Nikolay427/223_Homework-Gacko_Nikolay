  
let app = new Vue({
	el: '#app',
	data: {
		abzac: true,
	},
	methods:{
		res: function(){
			this.abzac = !this.abzac;
		},
	},
});