import { defineStore } from "pinia";
import { certCookies, setCookies, delCookies } from "../plugins/cookies";
import * as a$auth from '@/service/auth';

const d$auth = defineStore({
    id: 'auth',
    state: () => ({
        name: undefined,
        id: undefined,
        role: undefined,
    }),
    actions: {
        async a$setUser() {
            try {
                const { id, name, role } = certCookies();
                this.id = id;
                this.name = name;
                this.role = role;
                return 'User Authenticated!';
            } catch ({message}) {
                this.id = undefined;
                this.name = undefined;
                this.role = undefined;
                throw message;
            }
        },
        async a$login(body) {
            try {
                const { data } = await a$auth.login(body)
                setCookies('CERT', data.token, {datetime: data.expiresAt})
                this.a$setUser();
                return true;
            } catch (e) {
                console.log(e);
                throw e;
            }
        },
        async a$logout() {
            try {
              delCookies('CERT');
            } catch ({ error, message }) {
              throw message ?? error;
            }
        },
        async a$register(body) {
            try {
                await a$auth.register(body)
            } catch (e) {
                console.log(e);
                throw e;
            }
        }
    },
    getters: {
        g$user: ({ id, name, role }) => ({ id, name, role })
    }
})

export default d$auth