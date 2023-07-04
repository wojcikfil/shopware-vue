import { Currency } from "@/types";
import { defineStore } from "pinia";
import { Product } from "@/types";
import { Filters } from "@/types";

const apiUrl = import.meta.env.VITE_SHOPWARE_API;
const headers = {
  "Content-Type": "application/json",
  "sw-access-key": import.meta.env.VITE_SW_ACCESS_KEY,
};

export const useProductStore = defineStore("product", {
  state: () => ({
    initialProducts: [] as Product[],
    products: [] as Product[],
    filters: {
      order: "",
      query: "",
    },
    recentSearches: [] as string[],
    currencies: [] as Currency[],
    isLoading: false as Boolean,
  }),
  getters: {},
  actions: {
    addRecentSearch(query: string) {
      if (this.recentSearches.length === 5) {
        this.recentSearches.shift();
      }
      if (!this.recentSearches.includes(query)) {
        this.recentSearches.push(query);
      }
    },
    async fetchProducts(sortKey?: string) {
      try {
        const defaultCategoryId = "e435c9763b0d44fcab67ea1c0fdb3fa0";
        this.products = [];
        this.isLoading = true;
        const requestBody: Filters = {};
        if (sortKey) {
          requestBody.order = sortKey;
        }
        const response = await fetch(
          `${apiUrl}/product-listing/${defaultCategoryId}`,
          {
            method: "POST",
            headers,
            body: JSON.stringify(requestBody),
          }
        );
        const data = await response.json();
        //TODO const currencies = await this.fetchCurrencies();
        this.products = data.elements.map((product: Product) => {
          return {
            id: product.id,
            name: product.translated.name,
            description: product.translated.description,
            calculatedPrice: {
              totalPrice: product.calculatedPrice.totalPrice.toFixed(2),
              currency: {
                isoCode: "PLN", //TODO get currencies from avaliable currencies list.
              },
            },
          };
        });
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        console.error(error);
      }
    },
    async fetchCurrencies(): Promise<Currency[]> {
      if (this.currencies.length > 0) {
        return this.currencies;
      }

      try {
        const response = await fetch(`${apiUrl}/currency`, {
          method: "POST",
          headers,
        });

        const data = await response.json();
        this.currencies = data.map(({ isoCode }: Currency) => ({
          isoCode,
        }));

        return this.currencies;
      } catch (error) {
        console.error(error);
        return [];
      }
    },

    async searchProducts(sortKey?: string) {
      if (!this.filters.query) {
        this.fetchProducts(sortKey);
      } else {
        try {
          this.products = [];
          this.isLoading = true;
          const query = this.filters.query;

          const requestBody: Filters = { search: query };
          if (sortKey) {
            requestBody.order = sortKey;
          }

          const response = await fetch(`${apiUrl}/search`, {
            method: "POST",
            headers,
            body: JSON.stringify(requestBody),
          });

          const data = await response.json();

          //TODO const currencies = await this.fetchCurrencies();
          if (!data.elements.length) {
            this.fetchProducts(sortKey);
          } else {
            this.products = data.elements.map((product: Product) => {
              return {
                id: product.id,
                name: product.translated.name,
                description: product.translated.description,
                calculatedPrice: {
                  totalPrice: product.calculatedPrice.totalPrice.toFixed(2),
                  currency: {
                    isoCode: "PLN", //TODO get currencies from avaliable currencies list.
                  },
                },
              };
            });
          }
          this.isLoading = false;
        } catch (error) {
          this.isLoading = false;
          console.error(error);
        }
      }
    },
  },
});
