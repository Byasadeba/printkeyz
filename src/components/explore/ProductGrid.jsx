import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 text-center text-sm text-gray-500 shadow-soft">
        No products found.
      </div>
    );
  }

  return (
    <div
      className="
        grid gap-6
        grid-cols-2
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
      "
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
