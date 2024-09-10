<template>
  <div class="header-container">
   <h1 :class="color">Rhythm</h1>
  </div>
</template>

<script setup lang="ts">
let color = ref('orange')

onMounted(() => {  
  if (window.location.pathname === '/login') {
    color.value = 'white'
  }
})
</script>

<style scoped lang="scss">
.header-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  
  h1{
    font-size:2rem;
  }
  
  .orange{
    background: linear-gradient(103deg, #F60 0%, #F30 96.65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>