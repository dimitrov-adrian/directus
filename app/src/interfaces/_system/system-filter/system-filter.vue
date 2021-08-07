<template>
	<div>
		<v-notice v-if="!collectionName">
			<i18n-t keypath="interfaces.system-display-template.collection_field_not_setup" />
		</v-notice>
		<FilterItems
			v-else
			@update:modelValue="$emit('input', $event)"
			:modelValue="value || []"
			:loading="disabled"
			:collection="collectionName"
			:autoFocus="autofocus"
		/>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { FilterItems } from '@/views/private/components/filter-items';
import { FieldTree } from '@/views/private/components/filter-items/types';

export default defineComponent({
	components: { FilterItems },
	props: {
		collectionName: {
			type: String,
			default: null,
		},
		value: {
			type: Object as PropType<FieldTree[]>,
			default: () => [],
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['input'],
});
</script>
