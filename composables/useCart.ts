// ./composables/useCart.ts

export const useCart = () => {
  const items = useState("items", () => [] as CartItem[]);

  const addToCart = (product: Product) => {
    if (items.value.some((item) => item.product.id === product.id)) {
      items.value = items.value.map((item) => {
        if (item.product.id === product.id) {
          item.quantity += 1;
        }
        return item;
      });
    } else {
      items.value.push({
        product,
        quantity: 1,
      });
    }
  };

  const removeFromCart = (product: Product) => {
    if (items.value.some((item) => item.product.id === product.id)) {
      if (
        items.value.find((item) => item.product.id === product.id)!.quantity > 1
      ) {
        items.value = items.value.map((item) => {
          if (item.product.id === product.id) {
            item.quantity -= 1;
          }
          return item;
        });
      } else {
        items.value = items.value.filter(
          (item) => item.product.id !== product.id
        );
      }
    }
  };

  const clearCart = () => {
    items.value = [];
  };

  return {
    items,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
