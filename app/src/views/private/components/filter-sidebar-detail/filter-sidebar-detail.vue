<template>
	<sidebar-detail
		:badge="modelValue.length > 0 ? modelValue.length : null"
		icon="filter_list"
		:title="t('advanced_filter')"
	>
		<FilterItems
			@update:modelValue="$emit('update:modelValue', $event)"
			:modelValue="filters"
			:loading="$props.loading"
			:collection="$props.collection"
			:autoFocus="$attrs.autofocus"
		/>
	</sidebar-detail>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, watch, toRefs } from 'vue';
import { Field, Filter } from '@directus/shared/types';
import { useFieldsStore } from '@/stores';
import { debounce } from 'lodash';
import { useCollection } from '@/composables/use-collection';
import { getFilterOperatorsForType } from '@directus/shared/utils';
import { useFieldTree } from '@/composables/use-field-tree';
import { useI18n } from 'vue-i18n';

import { FilterItems } from '@/views/private/components/filter-items';
import { FieldTree } from '@/views/private/components/filter-items/types';

export default defineComponent({
	components: { FilterItems },
	props: {
		modelValue: {
			type: Object as PropType<FieldTree[]>,
			required: true,
		},
		collection: {
			type: String,
			required: true,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		const { t } = useI18n();
		const localFilters = ref<Filter[]>([]);

		watch(
			() => props.modelValue,
			() => {
				localFilters.value = props.modelValue;
			},
			{ immediate: true }
		);

		const syncWithProp = debounce(() => {
			emit('update:modelValue', localFilters.value);
		}, 850);

		const filters = computed<Filter[]>({
			get() {
				return localFilters.value.filter((filter) => {
					return filter.locked !== true;
				});
			},
			set(newFilters) {
				localFilters.value = newFilters;
				syncWithProp();
			},
		});

		return { t, filters };
	},
});
</script>

<style lang="scss" scoped>
.v-divider {
	margin: 16px 0;
}

.field-filter {
	margin-bottom: 16px;
}
</style>
