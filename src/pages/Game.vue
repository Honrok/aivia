<template>
  <v-container>
    <v-form fast-fail class="form">
      <v-text-field
          label="Size X"
          v-model="xDefault"
          @input="changeValue"
      ></v-text-field>

      <v-text-field
          label="Size Y"
          v-model="yDefault"
          @input="changeValue"
      ></v-text-field>
    </v-form>
    <div class="squares">
      <v-row v-for="index in y">
        <v-col v-for="index in x" class="sq" v-on:mouseenter="changeColor"></v-col>
      </v-row>
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
  function changeColor(e){
    console.log(e.target);
    if(e.target.classList.contains('blue')){
      e.target.classList.remove('blue');
    }else{
      e.target.classList.add('blue');
    }
  }
  function changeValue(){
    if(!isNaN(+xDefault.value)){
      x.value.length = +xDefault.value;
    }
    if(!isNaN(+yDefault.value)){
      y.value.length = +yDefault.value;
    }
  }
  return {xDefault, yDefault, x, y, changeValue, changeColor}
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
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  background-color: #333333;
}
.sq{
  max-width: 36px;
  min-width: 36px;
  max-height: 36px;
  min-height: 36px;
  margin: 2px;
  background-color: #fff;
}
.sq.blue{
  background-color: blue;
}
/*.sq:hover{*/
/*  background-color: blue;*/
/*}*/
</style>