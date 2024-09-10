<template>
  <div class="footer">
    <p>Rhythm, created by: <a href="https://www.linkedin.com/in/stijn-timmermans-734371238/">Stijn Timmermans</a></p>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 1rem;
  
  p{
    font-size:0.8rem;
    
    a{
      text-decoration: underline;
    }
  }
}
</style>