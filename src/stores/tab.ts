import { ref } from 'vue';

export const tab = ref('0');

export const restaurantTabs = [
  {
    value: "0",
    icon: "md-allinclusive",
    label: "Todos"
  },
  {
    value: "1",
    icon: "fa-hamburger",
    label: "Hambúrguer"
  },
  {
    value: "2",
    icon: "gi-sushis",
    label: "Asiática"
  },
  {
    value: "3",
    icon: "gi-sandwich",
    label: "Sanduíches"
  },
  {
    value: "4",
    icon: "gi-cupcake",
    label: "Sobremesas"
  },
  {
    value: "5",
    icon: "md-fitnesscenter",
    label: "Saudável"
  },
  {
    value: "6",
    icon: "fa-pizza-slice",
    label: "Pizza"
  },
  {
    value: "7",
    icon: "co-drink-alcohol",
    label: "Bebidas"
  },
];

export const tourismTabs = [
  {
    value: "0",
    icon: "md-allinclusive",
    label: "Todos"
  },
  {
    value: "1",
    icon: "fa-hotel",
    label: "Hotéis"
  },
  {
    value: "2",
    icon: "fa-theater-masks",
    label: "Cultura"
  },
  {
    value: "3",
    icon: "fa-umbrella-beach",
    label: "Lazer"
  },
  {
    value: "4",
    icon: "bi-gift-fill",
    label: "Presentes"
  }
];