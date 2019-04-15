<template>
  <v-img
    :src="imageUrl"
    class="product-image ma-4"
    :class="{'no-opacity': !showImage }"
  />
</template>

<script>
  import {mapState} from 'vuex';

  export default {
    name: 'ProductImage',
    props: {
      imgUrl: {
        type: String
      }
    },
    computed: {
      ...mapState(['showImage']),
      imageUrl () {
        return require( '../assets/material-colors/Ultimaker-PLA-' + this.imgUrl + '.png')
      }
    }
  }
</script>

<style scoped>
  .product-image {
    opacity: 1;
    transition: all 0.2s ease 0s;
  }

  .no-opacity {
    opacity: 0;
  }
</style>
