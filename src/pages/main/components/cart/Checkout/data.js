export const checkoutData = {
  deliverTo: 'home',
  timeSlot: 'Tuesday (13th June)',
  cart: [
    {
      id: 1,
      offer: '',
      name: 'Millet Dosa Batter',
      cta: 'Kick-start a Healthy Life!',
      subCta:
        'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
      subscriptionPrise: '$85',
      ingredientsSrc: require('_assets/images/Ingredients/ingredient_millet.png'),
      prise: '$99',
      extraSpace: 0,
      bgColor: '#E74C22',
      source: require('_assets/images/Millet-Dosa-Batter/milletDosaBatter-3x.png'),
      quantity: 2,
    },
    {
      id: 2,
      offer: '',
      name: 'Idli Batter',
      cta: 'Kick-start a Healthy Life!',
      subCta:
        'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
      subscriptionPrise: '$85',
      ingredientsSrc: require('_assets/images/Ingredients/ingredient_idli.png'),
      prise: '$99',
      extraSpace: 0,
      bgColor: '#E78426',
      source: require('_assets/images/Idli-Batter/idliBatter-3x.png'),
      quantity: 2,
    },
    {
      id: 3,
      offer: '',
      name: 'Dosa batter',
      cta: 'Kick-start a Healthy Life!',
      subCta:
        'Enjoy perfectly natural and healthy dosas with this traditional recepie.',
      subscriptionPrise: '$85',
      ingredientsSrc: require('_assets/images/Ingredients/ingredient_dosa.png'),
      prise: '$99',
      extraSpace: 0,
      bgColor: '#ECA51F',
      source: require('_assets/images/Dosa-Batter/dosaBatter-3x.png'),
      quantity: 2,
    },
  ],
  bill: {
    cost: 345,
    delivery: 20,
    discount: 30,
    gst: 20,
    sgst: 30,
    promoCode: 'HASIRU50',
    total: 365,
  },
}