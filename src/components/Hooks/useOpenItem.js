import { useState } from 'react';

function useOpenItem() {
  const [openItem, setOpenItem] = useState(null);
  return { openItem, setOpenItem };
}

export default useOpenItem;
