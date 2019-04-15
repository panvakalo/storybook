<template>
  <div class="info overflow-hidden left pr-3">
    <v-flex xs12 class="small">
      {{ color.amount }}g from
    </v-flex>
    <v-flex xs12>
      <span class="headline font-weight-bold">€{{ color.price }}</span>
    </v-flex>
  </div>
</template>

<script>
  export default {
    name: 'PriceHolder',
    props: {
      color: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">
  .info {
    border-right: 1px solid #D8D8D8;
  }
</style>
