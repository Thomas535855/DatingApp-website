<template>
  <div class="signup-container">
    <h2 class="question">{{ currentStep.question }}</h2>
    <div class="input-fields">
      <template v-for="(inputField, index) in currentStep.inputFields" :key="index">
        <UIInput
            v-model="values[step][inputField.key]"
            :label="inputField.label"
            :placeholder="inputField.placeholder"
            :inputType="inputField.inputType"
        />
      </template>
    </div>
    <UIButtonBig class="button" :action="nextStep" :content="'Continue'"/>
  </div>
</template>


<script setup lang="ts">
const step = ref(0);

const steps = [
  {
    question: "First things first, what is your name and date of birth?",
    inputFields: [
      { key: 'name', label: 'Name', placeholder: 'Enter your name', inputType: 'text' },
      { key: 'dateOfBirth', label: 'Date of Birth', placeholder: 'Select your date of birth', inputType: 'date' }
    ]
  }
];

const values = ref([
  { name: '', dateOfBirth: '' },
  { email: '', phone: '' }
]);

const currentStep = computed(() => steps[step.value]);

const nextStep = () => {
  if (step.value < steps.length - 1) {
    step.value++;
  } else {
    console.log('Form submitted', values.value);
  }
};
</script>


<style scoped lang="scss">
.signup-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 2.5rem;
  flex-grow: 1;

  .question {
    font-family: "Futura Condensed Extra Bold", sans-serif;
    font-size: 2rem;
    text-align: center;
    width: 80%;
    text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  }

  .input-fields {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 80%;
  }

  .button {
    width: 80%;
  }
}
</style>
