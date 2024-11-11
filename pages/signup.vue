<template>
  <div class="signup-page">
    <div class="modal" id="start" v-if="currentStep === 'get_started'">
      <h2>Let's get started!</h2>
      <button @click="goToNextStep">Start Signup</button>
    </div>
    
    <div class="modal" v-if="currentStep === 'name_and_dob'">
      <h2>Enter your Name and Date of Birth</h2>
      <input v-model="signupData.first_name" placeholder="First Name" />
      <input type="date" v-model="signupData.date_of_birth" />
      <button @click="goToNextStep">Next</button>
    </div>
    
    <div class="modal" v-if="currentStep === 'verify_location'">
      <h2>Verify your Location</h2>
      <input v-model="signupData.location" placeholder="Location" />
      <button @click="goToNextStep">Next</button>
    </div>
    
    <div class="modal" v-if="currentStep === 'upload_picture'">
      <h2>Upload Profile Picture</h2>
      <input type="file" @change="handlePictureUpload" />
      <button @click="submitSignup">Complete Signup</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UseSignup } from '~/composables/UseSignup';

const { signupData, currentStep, goToNextStep, goToPreviousStep, setSignupData, submitSignup } = UseSignup();

async function handlePictureUpload(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    const imageUrl = await uploadImageToApi(file);
    
    setSignupData({ profile_picture: imageUrl });
  }
}

async function uploadImageToApi(file: File): Promise<string> {
  const formData = new FormData();
  formData.append('image', file);
  
  const response = await fetchFromClient.post('/user/upload-image', 'main-api', {
    body: formData
  }) as any;

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }
  
  return response._data.message.imageUrl;
}

</script>

<style scoped lang="scss">
.signup-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  padding: 1rem;

  .modal {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.10);

    h2 {
      font-size: 1.75rem;
      color: #2A2F39;
      font-weight: bold;
      text-align: center;
    }

    button {
      padding: 1rem;
      border-radius: 1rem;
      border: 1px solid #e5e5e5;
      margin-left: 1rem;
      cursor: pointer;
      text-decoration: none;
      background: var(--Primary_new, linear-gradient(113deg, #FF9337 0.65%, #FD4E4E 90.49%));
      color: #fff;
      font-size: 1rem;
      font-weight: bold;

      &:hover {
        filter: brightness(90%);
        cursor: pointer;
      }

      &:active {
        background: #E14908;
        cursor: pointer;
      }
    }

    input {
      border-radius: 1rem;
      padding: 0.25rem;
    }
  }
}
</style>
