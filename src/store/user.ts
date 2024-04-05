import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import router from '../router';
import { api } from '../service/api';

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        tokenData: JSON.parse(localStorage.getItem('token')!),
    }),
    getters: {
    },
    actions: {
        async login(username: string, userpassword: string) {
            swal.showLoading();
            const response = await api.login(username, userpassword);
            if (response.error || response.errorMessage) {
                swal.fire({
                    icon: "error",
                    text: response.errorMessage
                });
                return;
            }
            if (response.data) {
                this.tokenData = response.data.token;
                localStorage.setItem('token', JSON.stringify(response.data.token))
                router.push({name: 'home'});
                swal.close();
            }
        },
    },
})