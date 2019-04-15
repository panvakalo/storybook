/* eslint-disable no-console */
export const Store = {
  state: {
    activeColor: {
      ral: '5002',
      img_url: 'Blue',
      label: 'Blue',
      color: 'blue',
      amount: 750,
      price: '33,00'
    },
    showImage: true
  },
  getters: {},
  mutations: {
    setActiveColor (state, payload) {
      state.showImage = false;
      setTimeout(function () {
        state.activeColor = payload;
        state.showImage = true;
      },200)
    }
  },
  actions: {}
};
