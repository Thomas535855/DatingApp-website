<template>
  <div class="layout">
    <Header v-if="showHeader"/>
    <div class="main-content">
      <slot/>
    </div>
    <Footer v-if="showFooter"/>
  </div>
</template>

<script setup lang="ts">
let showFooter = ref(true)
let showHeader = ref(true)

onMounted(() => {
  if (window.location.pathname !== '/signup' && window.location.pathname !== '/login') {
    showHeader.value = false;
    showFooter.value = false;
  }
})
</script>

<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background: radial-gradient(50% 50% at 50% 50%, rgba(255, 77, 77, 0.06) 60.01%, rgba(255, 77, 77, 0.00) 100%), #1A1A1A;

  .main-content{
    display:flex;
    flex: 1;
  }
}
</style>