<template>
  <div class="description-container">
    <h2>Who is John Doe?</h2>
    <div class="location-container">
      <h3>Location:</h3>
      <p>San Francisco, CA</p>
    </div>
    <div class="hobbies-container">
      <h3>Hobbies:</h3>
      <div class="hobbies">
        <span>Basketball</span>
        <span>Guitar</span>
        <span>Coding</span>
        <span>Etc.</span>
      </div>
    </div>
    <div class="top-songs-container">
      <h3>Top songs:</h3>
      <ol>
        <li>1. Bohemian Rhapsody</li>
        <li>2. Stairway to Heaven</li>
        <li>3. Hotel California</li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.description-container {
  display: flex;
  flex-direction: column;
  background: #fff;
  gap: 2rem;
  padding: 1rem;
  border-radius: 1rem;

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(103deg, #F60 0%, #F30 96.65%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .location-container{
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;

    h3 {
      background: linear-gradient(103deg, #F60 0%, #F30 96.65%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2rem;
      font-weight: 700;
    }
    
    p {
      font-size: 1rem;
      font-weight: 500;
      color: #000;
    }
  }

  .hobbies-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;

    h3 {
      background: linear-gradient(103deg, #F60 0%, #F30 96.65%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2rem;
      font-weight: 700;
    }
    
    .hobbies {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;

      span {
        font-size: 1rem;
        font-weight: 500;
        padding: 0.2rem 0.5rem;
        background: linear-gradient(103deg, #F60 0%, #F30 96.65%);        
        border-radius: 0.5rem;
        color: #fff;
      }
    }
  }
  
  .top-songs-container{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3 {
      background: linear-gradient(103deg, #F60 0%, #F30 96.65%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.2rem;
      font-weight: 700;
    }
    
    ol{     
      font-size: 1rem;
      font-weight: 500;
      
      li{
        color:black;
        padding:0.25rem;
      }
    }
  }
}
</style>