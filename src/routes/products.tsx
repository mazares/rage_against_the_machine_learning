import { createFileRoute } from "@tanstack/react-router";
import Card from "../components/Card";

export const Route = createFileRoute("/products")({
  component: Products,
});

function Products() {
  const products = [
    { name: "Product 1", id: 1 },
    { name: "Product 2", id: 2 },
    { name: "Product 3", id: 3 },
    { name: "Product 4", id: 4 },
    { name: "Product 5", id: 5 },
    { name: "Product 6", id: 6 },
    { name: "Product 7", id: 7 },
    { name: "Product 8", id: 8 },
    { name: "Product 9", id: 9 },
    { name: "Product 10", id: 10 },
    { name: "Product 11", id: 11 },
    { name: "Product 12", id: 12 },
    { name: "Product 13", id: 13 },
    { name: "Product 14", id: 14 },
    { name: "Product 15", id: 15 },
  ];

  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-screen overflow-y-auto">
        {products.map((product) => (
          <Card key={product.id} name={product.name} id={product.id} />
        ))}
      </div>
    </div>
  );
}
