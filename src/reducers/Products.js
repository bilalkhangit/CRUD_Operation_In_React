const initialState = JSON.parse(localStorage.getItem("Product")) || [];

const ProductsReducer = (state = initialState, action) => {
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
      const EditProd = state.find(Product => {
        return Product.Id === Number(action.payload.Id);
      });
      EditProd.Name = action.payload.Name;
      EditProd.Description = action.payload.Description;
      EditProd.Price = action.payload.Price;
      EditProd.Category = action.payload.Category;

      const filterArr = state.filter(Product => {
        return Product.Id != action.payload.Id;
      });
      AddToLocalStorage([...filterArr,EditProd]);
      return state;



    default:
      return state;
  }
};

const AddToLocalStorage = Product => {
  localStorage.setItem("Product", JSON.stringify(Product));
};

export default ProductsReducer;
