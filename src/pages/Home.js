import Header from "../components/Header/Header";
import headerImage from "../assets/home.jpeg";
import CategoryList from "../components/CategoryList/CategoryList";
import { getCategories } from "../data/categories";

function Home() {
  return (
    <>
      <Header
        title="Welcome to our TECNOLOGY SHOP!"
        image={headerImage}>
     The earliest and simplest form of technology is the development of knowledge that leads to the application of basic tools towards an intended purpose.
      </Header>

      <CategoryList categories={getCategories()} />
    </>
  );
}

export default Home;