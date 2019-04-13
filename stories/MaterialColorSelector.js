export default {
    name: 'material-color-selector',

    data() {
        return {
            numbers: []
        };
    },

    template: `
    <div>
            <div v-for="number in numbers">
              {{ number }}
            </div>
        </div>
  `,

    methods: {},
};
