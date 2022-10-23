<script>
    import ArgonInput from "@/components/ArgonInput.vue";
    import ArgonButton from "@/components/ArgonButton.vue";
    import d$todo from '@/stores/dashboard/todo'
    import { mapActions } from 'pinia'

    export default {
        name: 'Input',
        components: { ArgonInput, ArgonButton },
        data: () => ({
          input:{
            name : '',
            description : '',
            category : '',
          }
        }),
        methods: {
          ...mapActions(d$todo, ['a$add']),
          async submitAdd(){
            try {
              await this.a$add({ ...this.input });
              this.$router.replace({ name: 'Tables'});
            } catch (e) {
              console.error(e);
            }
          }
        },
    }
</script>

<template>
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-md">
          <div class="card">
            <div class="card-header pb-0">
              <div class="d-flex align-items-center">
                <p class="mb-0">From Input</p>
                <argon-button color="success" size="sm" class="ms-auto" @click="submitAdd()"
                  >Save</argon-button
                >
              </div>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Name</label
                  >
                  <argon-input v-model="input.name" type="text"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Job</label
                  >
                  <input v-model="input.description" class="form-control" type="text"/>
                </div>
                <div class="col-md-4">
                  <label for="example-text-input" class="form-control-label"
                    >Category</label
                  >
                  <input v-model="input.category" class="form-control" type="text"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>