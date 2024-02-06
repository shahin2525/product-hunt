import axiosClient from "../apiClient.axios";

export function getProduct() {
  return axiosClient.get("/products");
}

export { axiosClient };

//

// export const getProduct = async () => {
//   const res = await fetch(
//     "https://ecommerce-backend-topaz-tau.vercel.app/api/v1/products/"
//   ).then((res) => res.json());

//   if (!res.success) {
//     throw new Error("something went wrong");
//   }
//   return res;
// };
