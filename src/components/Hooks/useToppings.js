import { useState } from 'react';

const getTopping = toppings => toppings.map(item => ({
  name: item, 
  checked: false,
}))

function  useToppings(openItem) {

  const [toppings, setToppings] = useState( openItem.toppings ? getTopping(openItem.toppings): []);
  const checkToppings = index => {setToppings(toppings.map((item, i) => {
    const newItem = {...item};
    if (i === index) {
      newItem.checked = !item.checked;
    }
    return newItem;
  }));
  }
  return {toppings, checkToppings};
};

export default useToppings;
