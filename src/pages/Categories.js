import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpeg";
import { getCategories } from "../data/categories";
import CategoryList from "../components/CategoryList/CategoryList";

function Categories() {
  return (
    <>
      <Header
        title="Technology shopping!"
        image={headerImage}>
        Technology is the continually developing result of accumulated knowledge and application in all techniques, skills, methods, and processes used in industrial production and scientific research. Technology is embedded in the operation of all machines, with or without detailed knowledge of their function, for the intended purpose of an organization.
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Categories;