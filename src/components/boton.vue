
<template>
    <div>
        <button @click="props.actionbuton">{{ props.textoboton }}</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
    const props=defineProps({
    textoboton:{
        Required:true,
        type: String,
        default:"Ver ..."
    },
    actionbuton:{
        Required:true,
        type: Function,
    },
    coloresboton:{
        Required:true,
        type: String,
    }
    })
   /* */
</script>

<style scoped>

button{
    background: v-bind("props.coloresboton");
    padding: 10px;
    border:1px solid blue;
    color:white; 
}
</style>


