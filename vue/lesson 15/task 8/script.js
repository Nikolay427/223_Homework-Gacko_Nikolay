let app = new Vue({
	el: '#app',
	data: {
		res: '22.06.1941',
	},
	filters: {
		daymouthyear: function(value){
			return value.split('-').reverse().join('.');
		}
	}
});
