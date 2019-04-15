<template>
  <v-layout wrap row class="pa-2">
    <v-flex xs12 md5>
      <v-flex xs12>
        <h3 class="display-1 font-weight-bold">
          Ultimaker materials<br>color availability
        </h3>
      </v-flex>
      <v-flex xs12 class="mt-4">
        <v-flex xs12>
          Display material:
        </v-flex>
        <v-flex xs12 class="mt-2">
          <v-flex xs8 sm3 md4 lg3>
            <v-select
              :items="materials"
              value="PLA"
              outline
              class="material-dropdown no-border-radius"
            ></v-select>
          </v-flex>
        </v-flex>
      </v-flex>
      <v-flex xs12>
        Select color:
      </v-flex>
      <v-flex xs12 class="mt-2">
        <color-picker
          v-for="(color, index) in colors"
          :key="`color-picker-${index}`"
          :color="color"/>
      </v-flex>
      <div class="clear"></div>
      <v-flex xs12 class="mt-4">
        <v-layout wrap row>
          <price-holder :color="activeColor"></price-holder>
          <v-btn depressed large class="action-button white--text no-border-radius ma-0 ml-3">
            Buy PLA
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="mt-5 justify-space-between">
        <div class="left small">
          *excl VAT
        </div>
        <div class="right text--underline">
          learn more about PLA
        </div>
      </v-flex>
    </v-flex>
    <v-flex xs12 md7>
      <product-image :img-url="activeColor.img_url" />
    </v-flex>
  </v-layout>
</template>

<script>
  import {mapState} from 'vuex';
  import ColorPicker from './ColorPicker';
  import PriceHolder from './PriceHolder';
  import ProductImage from './ProductImage';

  export default {
    name: 'MaterialColorSelector',
    components: {
      ColorPicker,
      PriceHolder,
      ProductImage
    },
    props: {
      materials: {
        type: Array
      },
      colors: {
        type: Array
      }
    },
    computed: {
      ...mapState(['activeColor'])
    }
  }
</script>

<style scoped lang="scss">
  .action-button {
    background-color: #0CA9E3 !important;
  }
</style>
