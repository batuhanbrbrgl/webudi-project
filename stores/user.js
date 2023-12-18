import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    isMenuOverlay: false,
    isLoading: false,
    cart: [],
    checkout: [],
    products: [],
    smartphones: [],
  }),
  persist: true,

  actions: {
    async fetchProducts() {
      const response = await axios.get("https://dummyjson.com/products");
      this.products = response.data.products;
    },
    async fetchSmartphones() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      this.smartphones = response.data.products;
    },
    async fetchLaptops() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/laptops"
      );
      this.laptops = response.data.products;
    },
    async fetchElectronics() {
      const responseSmartphones = await axios.get(
        "https://dummyjson.com/products/category/smartphones"
      );
      const responseLaptops = await axios.get(
        "https://dummyjson.com/products/category/laptops"
      );
      this.electronics = [
        ...responseSmartphones.data.products,
        ...responseLaptops.data.products,
      ];
    },
    async fetchFragrances() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/fragrances"
      );
      this.fragrances = response.data.products;
    },
    async fetchSkincare() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/skincare"
      );
      this.skincare = response.data.products;
    },
    async fetchCosmetic() {
      const responseFragrances = await axios.get(
        "https://dummyjson.com/products/category/fragrances"
      );
      const responseSkincare = await axios.get(
        "https://dummyjson.com/products/category/skincare"
      );
      this.cosmetic = [
        ...responseFragrances.data.products,
        ...responseSkincare.data.products,
      ];
    },
    async fetchGroceries() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/groceries"
      );
      this.groceries = response.data.products;
    },
    async fetchHomeDecoration() {
      const response = await axios.get(
        "https://dummyjson.com/products/category/home-decoration"
      );
      this.homeDecoration = response.data.products;
    },
  },
});
