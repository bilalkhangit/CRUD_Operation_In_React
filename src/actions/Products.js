const AddProduct = (Product) => {
        return {type : "Add_Product", payload : Product}
}

const DelProduct = (Product) => {
        return {type : "Delete_Product", payload : Product}
}

const EditProduct = (Product) => {
        return {type : "Edit_Product", payload : Product}
}


export {AddProduct , DelProduct , EditProduct};