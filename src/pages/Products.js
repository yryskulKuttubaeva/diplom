import Header from "../components/Header/Header";
import headerImage from "../assets/products.jpeg";
import ProductList from "../components/ProductList/ProductList";
import { getProducts } from "../data/products";

function Products() {
  return (
    <>
      <Header
        title= "Top 10 stores!"
        image={headerImage}>
        enetics have also been explored, with humans understanding genetic engineering to a certain degree. However, gene editing is widely divisive, and usually involves some degree of eugenics. Some have speculated the future of human engineering to include 'super humans,' humans who have been genetically engineered to be faster, stronger, and more survivable than current humans. Others think that genetic engineering will be used to make humans more resistant or completely immune to some diseases.[92] Some even suggest that 'cloning,' the process of creating an exact copy of a human, may be possible through genetic engineering.
      </Header>

      <ProductList products={getProducts()} />
    </>
  );
}

export default Products;