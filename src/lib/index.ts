// Components
export { default as Nav } from './components/Nav.svelte';
export { default as Footer } from './components/Footer.svelte';
export { default as PageHero } from './components/PageHero.svelte';
export { default as FeatureDiagram } from './components/FeatureDiagram.svelte';
export { default as FeatureLabel } from './components/FeatureLabel.svelte';
export { default as VarietyCard } from './components/VarietyCard.svelte';
export { default as SpecTable } from './components/SpecTable.svelte';
export { default as WarningBanner } from './components/WarningBanner.svelte';
export { default as ShrinkComparison } from './components/ShrinkComparison.svelte';

// Data
export { varieties } from './data/varieties';
export type { Variety } from './data/varieties';
export { materials, dimensions, safety, signatureFeatures } from './data/specs';
export type { SpecRow } from './data/specs';
export { dailyCare, storageTips } from './data/care-tips';
export type { CareTip } from './data/care-tips';
