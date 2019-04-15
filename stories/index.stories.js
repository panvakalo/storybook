/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc,no-console */

import { storiesOf } from '@storybook/vue';
import Vuex from 'vuex';
import {Store} from '../src/store';

storiesOf('MaterialColorSelector', module).add('default', () => ({
    store: new Vuex.Store(Store),
    template: '<material-color-selector :materials="materials" :colors="colors"/>',
    data() {
      return {
        materials: [
          'Nylon',
          'PLA',
          'Tough PLA',
          'ABS',
          'CPE',
          'CPE+',
          'PVA',
          'PC',
          'TPU 95A',
          'PP',
          'Breakaway'
        ],
        colors: [
          {
            ral: '5002',
            img_url: 'Blue',
            label: 'Blue',
            color: 'blue',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '4010',
            img_url: 'Magenta',
            label: 'Magenta',
            color: 'magenta',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '3020',
            img_url: 'Red',
            label: 'Red',
            color: 'red',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '2008',
            img_url: 'Orange',
            label: 'Orange',
            color: 'orange',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '1003',
            img_url: 'Yellow',
            label: 'Yellow',
            color: 'yellow',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '6018',
            img_url: 'Green',
            label: 'Green',
            color: 'green',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '1013',
            img_url: 'Pearl-White',
            label: 'Pearl',
            color: 'pearl',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '9010',
            img_url: 'White',
            label: 'White',
            color: 'white',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '9006',
            img_url: 'Silver-Metallic',
            label: 'Silver Metallic',
            color: 'silver',
            amount: 750,
            price: '33,00'
          },
          {
            ral: '9005',
            img_url: 'Black',
            label: 'Black',
            color: 'black',
            amount: 750,
            price: '33,00'
          },
          {
            ral: 'n/a',
            img_url: 'Transparent',
            label: 'Transparent',
            color: 'transparent',
            amount: 750,
            price: '33,00'
          }
        ]
      };
    }
  }
));

/* eslint-enable react/react-in-jsx-scope */
