import { defineStore } from 'pinia';
import swal from 'sweetalert2';
import router from '../router';
import { api } from '../service/api';

export const useUserStore = defineStore('useUserStore', {
    state: () => ({
        tokenData: JSON.parse(localStorage.getItem('token')!),
    }),
    getters: {
        // paginatedGames(state) {
        //     if (this.currentPage === 1) {
        //         return state.listOfGames.slice(0, 100);
        //     } else {
        //         const nextCount = this.currentPage * 100 - 100;
        //         var g = state.listOfGames.slice(nextCount, 100 * this.currentPage);
        //         return g;
        //     }
        // },
        // listOfPages(state) {
        //     const p = state.listOfGames.length / 100
        //     return Math.round(p);
        // }
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