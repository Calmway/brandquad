<template>
    <div class="home_page">
        <Card v-if="aboutData">
            <template #title>Id: {{ aboutData.id }}</template>
            <template #content>
                <p class="m-0" v-if="aboutData.username">
                    Username: {{ aboutData.username }}
                </p>
                <p class="m-0" v-if="aboutData.about">
                    About: {{ aboutData.about }}
                </p>
            </template>
        </Card>

        <Button style="margin-top: 20px;" @click="logout" icon="pi pi-sign-out" label="Logout" severity="danger" />
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { api } from '../service/api';
import swal from 'sweetalert2';
import { useUserStore } from "../store/user";
import Card from 'primevue/card';
import Button from 'primevue/button';
import { AboutResponseData } from '../models/types';
import router from '../router/index';
export default {
    name: "home",
    components: {
        Card, Button
    },
    setup() {
        let aboutData = ref<AboutResponseData>();
        const useStore = useUserStore();
        function logout() {
            localStorage.removeItem('token');
            router.push('/login');

        }
        const onMountedCall = async () => {
            const response = await api.about(useStore.tokenData);
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data) {
                aboutData.value = response.data.data;
            }
        }
        onMounted(onMountedCall);
        return {
            aboutData,
            logout
        }
    },
}
</script>
<style scope></style>