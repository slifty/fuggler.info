export interface SpecRow {
	label: string;
	value: string;
}

export const materials: SpecRow[] = [
	{ label: 'Outer fabric', value: 'Polyester plush (various textures)' },
	{ label: 'Filling', value: '100% polyester fiberfill' },
	{ label: 'Teeth', value: 'Hard plastic with enamel-style finish' },
	{ label: 'Eyes', value: 'Plastic safety buttons (sewn-on for smaller sizes)' },
	{ label: 'Tongue', value: 'Felt fabric, hand-stitched' },
	{ label: 'Accessories', value: 'Varies by line (felt glasses, bows, hats)' }
];

export const dimensions: SpecRow[] = [
	{ label: 'Mini Rascals', value: '~3 inches / ~8 cm tall' },
	{ label: 'Baby Fugg', value: '~6 inches / ~15 cm tall' },
	{ label: 'Medium (Fugglow, Lab Misfits)', value: '~9 inches / ~23 cm tall' },
	{ label: 'Large (Misfit Monsters, Old Fogies)', value: '~12 inches / ~30 cm tall' },
	{ label: 'Weight (large)', value: '~200 g / ~7 oz' }
];

export const safety: SpecRow[] = [
	{ label: 'Age recommendation', value: '4 years and up' },
	{ label: 'Safety standard', value: 'ASTM F963 (US), EN71 (EU)' },
	{ label: 'Small parts warning', value: 'Mini Rascals contain small parts; not for under 3' },
	{ label: 'Flame resistance', value: 'Meets CPSC flammability requirements' },
	{ label: 'Manufacturer', value: 'ZURU' }
];

export const signatureFeatures: string[] = [
	'Human-like teeth set into the mouth — the defining Fuggler trait',
	'Mismatched button eyes for an extra wonky look',
	'Felt tongues in various playful poses (sticking out, lolling sideways)',
	'Stubby, huggable limbs that make them easy to pose',
	'Wild color combinations and rainbow patterns',
	'Each one has a unique, slightly-off expression'
];
