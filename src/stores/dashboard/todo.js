import { defineStore } from "pinia";
import * as s$todo from '@/service/dashboard/todo';

const d$todo = defineStore({
    id: 'todo',
    state: () => ({
        list: [],
    }),
    actions: {
        async a$list() {
            try{
                const { data } = await s$todo.list();
                this.list = data
                // console.log(data)
            } catch(e) {
                console.error('actions todo list error', e)
                throw e
            }
        },
        async a$del(id) {
            try {
                await s$todo.del(id)
            } catch(e) {
                throw e
            }
        },
        async a$add(body) {
            try {
                await s$todo.add(body)
            } catch(e) {
                throw e
            }
        },
        async a$edit(id, body) {
            try {
                await s$todo.update(id, body)
            } catch(e) {
                throw e
            }
        }
    },
    getters: {
        g$list: ({ list }) => list,
        // getDetail: ({ list }) => {
        //     return (id) => list.find((todo) => todo.id == id)
        // }
    }
})

export default d$todo