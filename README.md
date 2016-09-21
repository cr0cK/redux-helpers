# redux-helpers

A set of useful functions to develop with Redux.

## Installation

`npm i @crock/redux-helpers`

## Examples

Replace a product in a collection:

```
import { replace } from '@crock/redux-helpers';

const updateProduct = (state, newProduct) => {
  return replace(
    state.products,
    product => product.label === newProduct.label,
    newProduct
  );
}

// equivalent to:

const updateProduct = (state, newProduct) => {
  const newProducts = state.products.slice(0);
  const index = lodash.findIndex(newProducts, product => product.label === newProduct.label);
  newProducts.splice(index, 1, newProduct);
  return newProducts;
}
```

## API

Check `.js.flow` or tests files.
