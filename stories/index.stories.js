/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';

storiesOf('MaterialColorSelector', module).add('default', () => ({
    template: '<material-color-selector :numbers="demoSetNumbers"/>',
    data() {
      return {
        demoSetNumbers: [1, 2, 3]
      };
    }
  }
));

/* eslint-enable react/react-in-jsx-scope */
