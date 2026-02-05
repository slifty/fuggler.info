export interface CareTip {
	title: string;
	instructions: string[];
}

export const dailyCare: CareTip[] = [
	{
		title: 'Surface Cleaning',
		instructions: [
			'Use a damp cloth with mild soap to spot-clean stains',
			'Gently blot — do not rub — to avoid pilling the plush',
			'Allow to air dry completely before returning to display or play'
		]
	},
	{
		title: 'Deep Cleaning',
		instructions: [
			'Place the Fuggler in a pillowcase and tie it closed',
			'Machine wash on gentle/delicate cycle with cold water',
			'Use a mild, fragrance-free detergent',
			'Do NOT tumble dry — reshape and air dry flat'
		]
	},
	{
		title: 'Teeth & Eye Care',
		instructions: [
			'Wipe plastic teeth with a damp cloth to remove dust',
			'Do not use abrasive cleaners on button eyes or teeth',
			'Check that safety eyes remain firmly attached (especially after washing)'
		]
	}
];

export const storageTips: string[] = [
	'Store in a cool, dry place away from direct sunlight to prevent fading',
	'Avoid stacking heavy items on top of your Fuggler to maintain its shape',
	'If storing long-term, place in a breathable cotton bag (not plastic)',
	'Keep away from pets — those teeth look tempting to chewers',
	'Display on shelves at room temperature for best longevity'
];
