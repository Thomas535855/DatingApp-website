<template>
  <div class="index-container">
   <IndexProfile :img-url="useUser.data.value.profile_picture" :age="useUser.getAge()" :name="useUser.data.value.first_name" class="profile"/>
   <IndexDescription class="description" />
  </div>
</template>

<script setup lang="ts">
const useUser = UseUser();

onMounted(async ()=> {
  await useUser.init(4);
})
</script>

<style scoped>
.index-container{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;  
  padding:1rem;
}
</style>