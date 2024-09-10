<template>
  <div class="input-container">
    <p v-if="label" class="label">{{label}}:</p>
    <input
        :type="inputType"
        :placeholder="placeholder"
        class="input-field"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
let props = defineProps({
  placeholder: {
    type: String,
    required: false
  },
  label: {
    type: String,
    required: false
  },
  inputType: {
    type: String,
    default: 'text',
    required: false
  },
  modelValue: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
.input-container {
  display: flex;
  flex-direction: column;
  gap:0.2rem;

  .label {
    font-size:1.1rem;
    font-weight:500;
  }

  .input-field {
    padding: 0.25rem 0.25rem 0.25rem 0.75rem;
    border-radius: 1rem;
    width: 100%;
    font-size:1rem;
    caret-color:#f8a35b;

    &:focus {
      outline: none;
    }
  }
}
</style>
