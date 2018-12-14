const initialState = JSON.parse(localStorage.getItem("Product")) || [];

const ProductsReducer = (state = initialState, action) => {
    debugger
  switch (action.type) {
    case "Add_Product":
      state.push(action.payload);
      AddToLocalStorage(state);
      return state;
    case "Delete_Product":
      const delProd = state.filter(Product => {
        return Product.Id != action.payload;
      });
      AddToLocalStorage(delProd);
      return delProd;
    case "Edit_Product":
      const EditProd = state.filter(Product => {
        return Product.Id === action.payload;
      });
      EditProd.Name = action.payload.Name;
      AddToLocalStorage(EditProd);
      return EditProd;
    default:
      return state;
  }
};

const AddToLocalStorage = Product => {
  localStorage.setItem("Product", JSON.stringify(Product));
};

export default ProductsReducer;
