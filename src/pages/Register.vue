<template>
    <div class="reg_page">
        <div class="reg_form">
            <h3 style="text-align: center;">Регистрация</h3>
            <CustomInput iconType="pi pi-user" label="Username" v-model="username"></CustomInput>
            <CustomInput iconType="pi pi-lock" label="Password" v-model="password"></CustomInput>
            <div style="text-align: center;">
                <ButtonGroup>
                    <Button @click="backToLogin" label="Отменить" severity="danger" icon="pi pi-times" />
                    <Button @click="submit" label="Отправить" icon="pi pi-check" />
                </ButtonGroup>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import router from '../router/index';
import CustomInput from '../components/CustomInput.vue';
import Button from 'primevue/button';
import ButtonGroup from 'primevue/ButtonGroup';
import { api } from '../service/api';
import swal from 'sweetalert2';
export default {
    name: "register",
    components: {
        CustomInput,
        Button,
        ButtonGroup
    },
    setup() {
        const username = ref("");
        const password = ref("");
        function backToLogin() {
            router.push('/login');
        }
        async function submit() {
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

            swal.showLoading();
            const response = await api.register(username.value, password.value);
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.error?.response?.data?.error as string ?? response.errorMessage
                });
                return;
            }
            if (response.data && response.data.message === 'Пользователь успешно зарегистрирован') {
                await swal.fire({
                    icon: 'success',
                    text: 'Теперь вы можете использователь данную учетную запись для входа',
                });
                backToLogin();
            }
        }
        return {
            username,
            password,
            backToLogin,
            submit
        }
    },
}
</script>
<style scope></style>