angular
	.module('app', [])
	.controller('teamctrl', team);

function team() {
	var vm = this;
	vm.list = [
		{
			'name': 'Suhas Darsi',
			'image': 'img_avatar.png',
			'facebook': 'profile.php?id=100009195932434'
		},
		{
			'name': 'Arghya Bhattacharya',
			'image': 'img_avatar.png',
			'facebook': 'arghya.bhattacharay'
		},
		{
			'name': 'Vivek Kaushal',
			'image': 'img_avatar.png',
			'facebook': 'vivek.michaelite',
			'linkedin': 'in/vivek-kaushal-6020724b'
		},
		{
			'name': 'Member X',
			'image': 'img_avatar.png',
			'facebook': '',
			'instagram': ''
		},
		{
			'name': 'Member Y',
			'image': 'img_avatar.png',
			'linkedin': '',
			'facebook': ''
		},
		{
			'name': 'Member Z',
			'image': 'img_avatar.png',
			'email': '',
			'linkedin': ''
		}
	];
}