import { useState } from 'react';


// const getTopping = toppings => toppings.map(item => ({
//   name: item, 
//   checked: false,
// }))

function useChoices(openItem) {

  const [choice, setChoice] = useState(); // ? getTopping(openItem.toppings): []);

  function changeChoices(e) {
    setChoice(e.target.value);
  }
  return {choice, changeChoices};

}


export default useChoices;
