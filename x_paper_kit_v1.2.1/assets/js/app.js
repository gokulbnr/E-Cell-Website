angular
	.module('app', [])
	.controller('teamctrl', team);

function team() {
	var vm = this;
	vm.list = [
		{
			'name': 'Dhriti Goyal',
			'image': 'dhriti.jpg',
			'linkedin': '',
			'facebook': ''
		},
		{
			'name': 'Arihant Jain',
			'image': 'arihant.jpg',
			'linkedin': '',
			'facebook': ''
		},
		{
			'name': 'Nishant Gupta',
			'image': 'nishant.jpg',
			'facebook': 'https://www.facebook.com/profile.php?id=100009195932434'
		},
		{
			'name': 'Deepanshu Jain',
			'image': 'deepanshu.jpg',
			'facebook': '',
			'instagram': ''
		},
		{
			'name': 'Suhas Darsi',
			'image': 'suhas.jpg',
			'facebook': '',
			'instagram': ''
		},
		{
			'name': 'Parin Vachhani',
			'image': 'parin.jpg',
			'facebook': '',
			'instagram': ''
		},
		{
			'name': 'Shivang Nagaria',
			'image': 'shivang.jpg',
			'facebook': '',
			'instagram': ''
		},
		{
			'name': 'Vivek Kaushal',
			'image': 'vivek.jpg',
			'facebook': 'vivek.michaelite',
			'linkedin': 'https://www.linkedin.com/in/vivek-kaushal-6020724b'
		},

		{
			'name': 'Himakar Yv',
			'image': 'himakar.jpg',
			'facebook': '',
			'instagram': ''
		},
		{
			'name': 'Arghya Bhattacharya',
			'image': 'arghya.jpg',
			'facebook': 'https://www.facebook.com/arghya.bhattacharay'
		},
				
	];
}
