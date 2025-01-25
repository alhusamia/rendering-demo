export const dynamicParams = true // will staticly render page on demand not in generateStaticParams , if false will return 404 if not in the list

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <h1>Product {id} details</h1>;
}
