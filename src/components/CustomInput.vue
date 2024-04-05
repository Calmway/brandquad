<template>

    <div class="flex flex-row gap-3">
        <div for="username">{{ label }}</div>
        <InputGroup>
            <InputGroupAddon>
                <i :class="iconType"></i>
            </InputGroupAddon>
            <InputText id="username" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" aria-describedby="username-help" />
        </InputGroup>
    </div>
</template>
<script setup lang="ts">
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
defineProps({
    label: {
        type: String,
        default: ""
    },
    modelValue: {
        type: String,
        default: ""
    },
    iconType: {
        type: String,
        default: ""
    }
})
// export default {
//     name: "BaseInput",
//     components: {
//         InputGroup,
//         InputGroupAddon,
//         InputText,
//     },
//     setup() {
//         const props = defineProps(['modelValue'])
//         const emit = defineEmits(['update:modelValue'])
//         return {
//             props,
//             emit
//         }
//     },
// }
</script>
<style></style>