<template>
  <button :class="color" @click="action()" class="button-container">
    <span>{{content}}</span>
  </button>
</template>

<script setup lang="ts">
let props = defineProps({
  color: {
    type: String,
    default: 'orange',
    required:false
  },
  content:{
    type:String,
    required: false
  },
  action:{
    type: Function,
    default:()=>{},
    required:false
  }
})

</script>

<style scoped lang="scss">
.button-container{
  display: flex;
  padding: 0.5rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2.5rem;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.10);
  
  span{
    color: var(--White, #FFF);
    text-align: center;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 145%;
  }
  
  &.orange{
    background: var(--Primary-gradient, linear-gradient(140deg, #FF9337 4.81%, #FD4E4E 59.04%));
    color:white;
  }
}
</style>