<template>
  <div>
    <div
      v-for="(number, index) in numbers"
      :key="`number-${index}`"
    >
      {{ number }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MaterialColorSelector',
    props: {
      numbers: {
        type: Array
      }
    }
  }
</script>

<style scoped>

</style>
