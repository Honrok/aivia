<template>
    <v-container class="form-wrap">
        <v-form fast-fail class="form" @submit.prevent="submit">
          <v-text-field
              label="Email"
              v-model="email"
              :error-messages="errorEmailMessage"
          ></v-text-field>
          <v-text-field
              label="Password"
              v-model="password"
              :error-messages="errorPasswordMessage"
          ></v-text-field>
          <v-btn type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import {ref} from 'vue'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import {useRouter} from "vue-router";


export default {
  setup: () => ({
    v$: useVuelidate()
  }),
  data: () => ({
    router: useRouter(),
    email: '',
    password: '',
    errorEmailMessage: '',
    errorPasswordMessage: '',
  }),
  validations () {
    return {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },

  methods: {
    async submit () {
      const result = await this.v$.$validate()
      if (!result) {
        console.log(this.v$.$validate())
        for(let i = 0; i < this.v$.$errors.length; i++){
          if(this.v$.$errors[i].$propertyPath === 'email'){
            this.errorEmailMessage = this.v$.$errors[i].$message;
          }else if(this.v$.$errors[i].$propertyPath === 'password'){
            this.errorPasswordMessage = this.v$.$errors[i].$message;
          }
        }
        return
      }
      console.log('cool')
      await this.router.push('/game');
    }
  }
}


// export default {
//   setup () {
//     const state = reactive({
//       email: '',
//       password: '',
//     })
//     const rules = {
//       email: { required, email },
//       password: { required, minLength: minLength(6) },
//     }
//
//     const v$ = useVuelidate(rules, state)
//     function submit(){
//       console.log(v$.value.email.$error);
//     }
//
//     return { state, v$, submit }
//   }
// }
</script>

<style scoped>
.form-wrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form{
  width: 300px;
}
</style>

