const fetchProductsByCategory = (category = 'plates') => {
  return fetch('/products.json')
    .then(resp => resp.json())
    .then(products =>
      products.map((p, index) => {
        return {
          id: `${index}`,
          ...p
        };
      })
    );
};

export const getProductsByCategory = category => {
  return fetchProductsByCategory(category).then(products =>
    products.map(({ id, title, brand, description, image, price }) => {
      return {
        id,
        title,
        brand,
        description,
        image,
        price
      };
    })
  );
};
