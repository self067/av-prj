export type tItem = {
  name: string;
  img: string;
  id: number;
  price: number;
  toppings?: string[];
};

// export type tItemList = {
//   itemList: tItem[];
// }

export type tItemList = {
  itemList: tItem[];
  setOpenItem: (arg0: tItem)=>void;
}

export type tImg = {
  img: string;
}

export type fModalItem = {
  openItem: tItem;
  setOpenItem: (arg0: tItem)=>void;
};

export type tFuncSetOpenItem = {
  setOpenItem: (arg0: tItem)=>void;
}

export type fOpenItem = {
  openItem: tItem;
  setOpenItem: (arg0: tItem)=>void;
}
