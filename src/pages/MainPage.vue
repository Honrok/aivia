<template>
    <v-container class="form-wrap">
        <v-form fast-fail class="form" @submit.prevent="submitForm">
          <v-text-field
              v-model.trim="email"
              label="Email"
          ></v-text-field>

          <v-text-field
              v-model="password"
              label="Password"
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
  setup () {
    const email = ref('');
    const password = ref('');
    const router = useRouter();
    const state = reactive({
      email: '',
      password: '',
    })
    const rules = {
      email: {email, required},
      password: {required, minLength: minLength(6)},
    }

    const v$ = useVuelidate(rules, state)
    function submitForm() {
      if (v$.$error) {
        // Обробка помилок валідації
        return;
      }
      router.push('/game');
      // Ваш код для відправлення форми
      console.log('Форму відправлено');
    }

    return { state, password, email, v$, submitForm }
  }
}
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

