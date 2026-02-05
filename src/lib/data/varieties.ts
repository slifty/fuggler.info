export interface Variety {
	name: string;
	size: string;
	description: string;
	keyFeature: string;
	tags: string[];
	accentColor: string;
}

export const varieties: Variety[] = [
	{
		name: 'Baby Fugg',
		size: '6 inch',
		description:
			'The tiniest Fugglers around! These pocket-sized misfits are perfectly portable and just as toothy as their larger siblings.',
		keyFeature: 'Clip-on keychain loop',
		tags: ['Small', 'Collectible', 'Clip-on'],
		accentColor: '#e84393'
	},
	{
		name: 'Mini Rascals',
		size: '3 inch',
		description:
			'Bite-sized bundles of ugly-cute energy. Great for trading, collecting, and surprising friends with tiny teeth.',
		keyFeature: 'Blind bag surprise',
		tags: ['Tiny', 'Surprise', 'Trading'],
		accentColor: '#54a0ff'
	},
	{
		name: 'Fugglow',
		size: '9 inch',
		description:
			'These glow-in-the-dark Fugglers bring their toothy grins into the night. Perfect for kids who want a weird nightlight.',
		keyFeature: 'Glow-in-the-dark teeth and eyes',
		tags: ['Glow', 'Medium', 'Nighttime'],
		accentColor: '#6ab04c'
	},
	{
		name: 'Lab Misfits',
		size: '9 inch',
		description:
			"Experimental Fugglers that look like they escaped from a mad scientist's toy lab. Extra weird, extra wonderful.",
		keyFeature: 'Unusual textures and mix-match fabrics',
		tags: ['Experimental', 'Medium', 'Unique'],
		accentColor: '#a55eea'
	},
	{
		name: 'Misfit Monsters',
		size: '12 inch',
		description:
			'Full-sized Fugglers at their finest. These huggable monsters are the original ugly-cute plush that started it all.',
		keyFeature: 'Full set of human-like teeth',
		tags: ['Classic', 'Large', 'Huggable'],
		accentColor: '#ff9f43'
	},
	{
		name: 'Old Fogies',
		size: '12 inch',
		description:
			'Senior citizen Fugglers complete with reading glasses, grey hair, and distinguished wrinkles. Aging has never been so adorable.',
		keyFeature: 'Removable felt glasses and grey fur',
		tags: ['Large', 'Themed', 'Distinguished'],
		accentColor: '#636e72'
	}
];
