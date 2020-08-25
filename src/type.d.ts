export type tItem = {
  name: string;
  img: string;
  id: number;
  price: number;
  toppings?: string[];
};

export type tItemList = {
  itemList: tItem[];
}

export type tImg = {
  img: string;
}
