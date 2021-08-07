import { defineInterface } from '@directus/shared/utils';
import InterfaceSystemFilter from './system-filter.vue';

export default defineInterface({
	id: 'system-filter',
	name: '$t:filter',
	icon: 'sort',
	component: InterfaceSystemFilter,
	types: ['json'],
	options: [],
	system: true,
});
