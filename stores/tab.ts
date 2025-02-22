import { ref } from 'vue';

export const tab = ref('0');

type Tab = {
  value: string;
  icon: string;
  label: string;
};

export const restaurantTabs: Tab[] = [
  {
    value: "0",
    icon: "mdi:all-inclusive",
    label: "Todos"
  },
  {
    value: "1",
    icon: "mdi:hamburger",
    label: "Hambúrguer"
  },
  {
    value: "2",
    icon: "game-icons:sushis",
    label: "Asiática"
  },
  {
    value: "3",
    icon: "game-icons:sandwich",
    label: "Sanduíches"
  },
  {
    value: "4",
    icon: "game-icons:cupcake",
    label: "Sobremesas"
  },
  {
    value: "5",
    icon: "mdi:fitness-center",
    label: "Saudável"
  },
  {
    value: "6",
    icon: "fa-solid:pizza-slice",
    label: "Pizza"
  },
  {
    value: "7",
    icon: "cil:drink-alcohol",
    label: "Bebidas"
  },
];

export const tourismTabs = [
  {
    value: "0",
    icon: "mdi:all-inclusive",
    label: "Todos"
  },
  {
    value: "1",
    icon: "fa-solid:hotel",
    label: "Hotéis"
  },
  {
    value: "2",
    icon: "fa-solid:theater-masks",
    label: "Cultura"
  },
  {
    value: "3",
    icon: "fa-solid:umbrella-beach",
    label: "Lazer"
  },
  {
    value: "4",
    icon: "mdi:gift",
    label: "Presentes"
  }
];