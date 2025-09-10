import { fetchAllProducts } from "@/utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

export default async function FeaturedProducts() {
  const products = await fetchAllProducts({ search: "" });

  if (products.length === 0) return <EmptyList />;
  return (
    <section className="pt-24">
      <SectionTitle text="Featured Product" />
      <ProductsGrid products={products} />
    </section>
  );
}
