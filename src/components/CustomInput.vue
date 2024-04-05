<template>

    <div class="flex flex-row gap-3">
        <div :for="modelValue">{{ label }}</div>
        <InputGroup>
            <InputGroupAddon>
                <i :class="iconType"></i>
            </InputGroupAddon>
            <InputText v-if="inputType === 'text'" :id="modelValue" :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)" aria-describedby="username-help" />
            <div v-else class="password_group">
                <InputText :type="!showPsw ? 'password' : 'text'" :id="modelValue" :value="modelValue"
                    @input="$emit('update:modelValue', $event.target.value)" aria-describedby="username-help" />
                <i v-if="!showPsw" class="pi pi-eye" @click="showPsw = !showPsw"></i>
                <i v-else class="pi pi-eye-slash" @click="showPsw = !showPsw"></i>
            </div>

        </InputGroup>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
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
    },
    inputType: {
        type: String,
        default: "text"
    }
})
const showPsw = ref(false);
</script>
<style scoped>
.password_group {
    position: relative;
}

.password_group input {
    width: 100%;
    padding-inline-end: 30px;
    border-start-start-radius: 0;
    border-end-start-radius: 0;
}

.password_group i {
    position: absolute;
    right: 15px;
    top: 12px;
    cursor: pointer;
}
</style>