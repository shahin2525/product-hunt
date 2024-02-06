import { getProduct } from "@/network/lib/product";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const productQuery = useQuery({
    queryKey: ["product"],
    queryFn: getProduct,
  });
  return productQuery;
};
