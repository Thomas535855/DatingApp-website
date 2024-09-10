<template>
  <div class="profile-container" style="background-image: url('https://res.cloudinary.com/dbbbshyvn/image/upload/v1706105528/staff/z6dmkjleoh0rapjlfkwl.jpg')">
    <div class="swipe-indicators">
      <span><img src="../../public/icons/cross.svg" alt="swipe left or tap"/></span>
      <span><img src="../../public/icons/check.svg" alt="swipe right or tap"/></span>
    </div>
    <div class="information">
      <h3 class="name">John Doe</h3>
      <p class="age">24</p>
      <div class="genres">
        <span>Rock</span>
        <span>Pop</span>
        <span>Indie</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.profile-container{
  position: relative;
  width:100%;
  height:32rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 1rem;
  background-size: cover;
  justify-content: flex-end;
  padding: 1rem;
  
  .swipe-indicators{
    display: flex;
    gap: 1rem;
    position: absolute;
    top:45%;
    width:calc(100% - 1rem);
    left:0.5rem;
    justify-content: space-between;
    
    span{
      background: rgba(0,0,0,0.5);
      padding: 0.5rem;
      border-radius: 100%;
      opacity: 0.875;
      
      img{
        width: 2.5rem;
        height: 2.5rem;
      }
    }
  }
  
  .information{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    
    .name{
      font-size: 1.5rem;
      font-weight: 700;
      text-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
    
    .age{
      font-size: 1rem;
      font-weight: 500;
      text-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
    
    .genres{
      display: flex;
      gap: 0.5rem;
      
      span{
        padding: 0.5rem;
        border-radius: 0.5rem;
        background: rgba(255,255,255,0.2);
        color: white;
        font-size: 0.8rem;
        font-weight: 500;
      }
    }
  }
}
</style>