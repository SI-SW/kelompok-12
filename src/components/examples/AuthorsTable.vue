<script>
    import { mapActions, mapState } from 'pinia'
    import d$todo from '@/stores/dashboard/todo'
    import DataItem from '../item/DataItem.vue'
    import ArgonButton from '../ArgonButton.vue';

    export default {
    name: "authors-table",
    computed: {
        ...mapState(d$todo, ["g$list"]),
    },
    methods: {
        ...mapActions(d$todo, ["a$list", "a$del"]),
        async getList() {
            try {
                await this.a$list();
            }
            catch (error) {
                console.log("Methods getlist error", error);
                throw error;
            }
        },
        async deleteList(id) {
            try {
                await this.a$del(id);
                window.location.reload();
            }
            catch (error) {
                console.log("Methods getlist error", error);
                throw error;
            }
        }
    },
    async created() {
        await this.getList();
    },
    components: { DataItem, ArgonButton }
}
</script>

<template>
  <div class="card">
    <div class="card-header pb-0">
      <h6>Data ToDo</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Job</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Status</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <DataItem v-for="(item, index) in g$list" :key="index">
              <template #username> {{ item.name }} </template>
              <template #email> {{ item.description }} </template>
              <template #fristname> {{ item.status }} </template>
              <template #edit>
                <RouterLink :to="{ name: 'Edit', params: { id: item.id }}" title="Edit">
                  <a
                  class="text-secondary font-weight-bold text-sm"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a>
                </RouterLink>
              </template>
              <template #delete>
                <form @submit.prevent="deleteList(item.id)">
                  <ArgonButton type="submit">
                    Delete
                  </ArgonButton>
                </form>
              </template>
            </DataItem>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
