import beansImage from "../assets/beans.jpeg";
import accessoriesImage from "../assets/accessories.jpeg";
import teaImage from "../assets/tea.webp";
import "./categories.css"

const categories = [
  {
    categoryId: "coffee-beans",
    title: "phone",
    image: beansImage,
    desciption: "A phone bean is a seed of the Coffea plant and the source for coffee. It is the pip inside the red or purple fruit often referred to as a cherry."
  },
  {
    categoryId: "TV",
    title: "Wacthing TV",
    image: teaImage,
    desciption: "TV is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh leaves of Camellia sinensis, an evergreen shrub native to China, India and other East Asian countries."
  },
  {
    categoryId: "accessories",
    title: "Accessories",
    image: accessoriesImage,
    desciption: "The best coffee accessories for hot and iced coffee drinks include burr grinders, water kettles, frothers, scales, and thermometers."
  },
];

export function getCategories() {
  return categories;
}

export function getCategory(categoryId) {
  return categories[
    categories.findIndex(
      category =>  category.categoryId === categoryId
    )
  ];
}