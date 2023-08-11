<template>
    <v-container class="form-wrap">
        <v-form fast-fail class="form" @submit.prevent="submitForm">
          <v-text-field
              label="Email"
          ></v-text-field>

          <v-text-field
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
    const router = useRouter();
    function submitForm() {
      router.push('/game');
      console.log('Форму відправлено');
    }

    return { submitForm }
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

