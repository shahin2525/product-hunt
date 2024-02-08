import axiosClient from "../apiClient.axios";

export function getProduct() {
  return axiosClient.get("/products");
}

export { axiosClient };
