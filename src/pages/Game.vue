<template>
  <v-container>
    <v-form fast-fail class="form" @submit.prevent="submitForm">
      <v-text-field
          label="Size X"
          v-model="xDefault"
      ></v-text-field>

      <v-text-field
          label="Size Y"
          v-model="yDefault"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Submit</v-btn>
    </v-form>
    <div class="squares">
      <div class="x">
        <div v-for="index in x">
        </div>
      </div>
      <div class="y">
        <div v-for="index in y"></div>
      </div>
    </div>
  </v-container>
</template>

<script>
import {ref} from 'vue'
export default {
setup(){
  const xDefault = ref(0),
        yDefault = ref(0),
        x = ref([]),
        y = ref([]);

  function submitForm(){
    if(!isNaN(+xDefault.value)){
      x.value.length = +xDefault.value;
    }
    if(!isNaN(+yDefault.value)){
      y.value.length = +yDefault.value;
    }
  }
  return {xDefault, yDefault, x, y, submitForm}
}
}
</script>

<style scoped>
.form{
  width: 300px;
  margin: 20px auto 0 auto;
}
.squares{
  padding: 20px;
  background-color: #333333;
  display: flex;
  margin-top: 20px;
  flex-direction: column;
}
.squares .x div, .squares .y div{
  margin: 2px;
  width: 36px;
  height: 36px;
  background-color: #ffffff;
}
.y{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
}
.squares .x div:hover,.squares .y div:hover{
  background-color: blue;
}
</style>