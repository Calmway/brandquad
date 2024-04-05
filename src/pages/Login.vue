<template>
    <div class="login_page">
        <div class="login_form">
            <h3 style="text-align: center;">Вход</h3>
            <CustomInput iconType="pi pi-user" label="Username" v-model="username"></CustomInput>
            <CustomInput inputType="password" iconType="pi pi-lock" label="Password" v-model="password"></CustomInput>
            <div><router-link :to="{ name: 'register' }">Зарегистрироваться</router-link></div>
            <div style="text-align: center;">
                <Button @click="submit" label="Войти" icon="pi pi-sign-in" :disabled="!username || !password" />
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useUserStore } from "../store/user";
import swal from 'sweetalert2';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import CustomInput from '../components/CustomInput.vue';
// import axios from 'axios'

export default {
    name: "login",
    components: {
        InputGroup,
        InputGroupAddon,
        InputText,
        CustomInput,
        Button
    },
    setup() {
        const username = ref("test");
        const password = ref("123");
        const useStore = useUserStore();
        function submit() {
            if (!username.value) {
                swal.fire({
                    icon: 'error',
                    text: 'Пожалуйста, заполните поле Username'
                });
                return;
            }
            if (!password.value) {
                swal.fire({
                    icon: 'error',
                    text: 'Пожалуйста, заполните поле Password'
                });
                return;
            }
            useStore.login(username.value, password.value);
        }
        return {
            username,
            password,
            submit,
        }
    },
}
</script>
<style scope>
</style>