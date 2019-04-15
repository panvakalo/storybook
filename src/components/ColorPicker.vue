<template>
  <div class="pos-relative left">
    <v-layout
      class="color-selector mr-2 mb-2 hover text-xs-center align-center"
      :class="[{'selected': isActiveColor}, `picker-${color.color}`]"
      @click="setActiveColor(color)"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <v-flex v-if="isActiveColor">
        <v-icon class="white--text">check</v-icon>
      </v-flex>
    </v-layout>
    <div
      class="tooltip pa-2"
      :class="{'full-opacity': isHovered}"
    >
      PLA {{ color.label }}<br>
      RAL {{ color.ral }}<br>
      {{ color.amount }}g
    </div>
  </div>
</template>

<script>
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'ColorPicker',
    props: {
      color: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        isHovered: false
      }
    },
    computed: {
      ...mapState(['activeColor']),
      isActiveColor () {
        return this.activeColor && this.color.color === this.activeColor.color
      }
    },
    methods: {
      ...mapMutations(['setActiveColor'])
    }
  }
</script>

<style scoped lang="scss">
  .color-selector {
    width: 46px;
    height: 46px;
    float: left;

    &.selected {
      box-shadow: 0 3px 3px rgba(0,0,0,.19), 0 3px 3px rgba(0,0,0,.23);
      border: 3px solid rgba(0,0,0,0.15);
    }

    &.picker-blue {
      background: rgb(0, 56, 123);
    }

    &.picker-magenta {
      background: rgb(188, 64, 119);
    }

    &.picker-red {
      background: rgb(187, 30, 16);
    }

    &.picker-orange {
      background: rgb(237, 107, 33);
    }

    &.picker-yellow {
      background: rgb(249, 168, 0);
    }

    &.picker-green {
      background: rgb(97, 153, 59);
    }

    &.picker-pearl {
      background: rgb(227, 217, 198);
    }

    &.picker-white {
      background: rgb(241, 236, 225);
    }

    &.picker-silver {
      background: rgb(161, 161, 160);
    }

    &.picker-black {
      background: rgb(14, 14, 16);
    }

    &.picker-transparent {
      background: repeating-linear-gradient(45deg,rgba(0,0,0,.07),rgba(0,0,0,.07) 5px,transparent 5px,transparent 10px);
    }
  }

  .tooltip {
    position: absolute;
    top: -83px;
    width: 100px;
    background: #000;
    color: #fff;
    font-size: 12px;
    opacity: 0;
    transition: all 0.2s ease;
    display: none;
  }
</style>
