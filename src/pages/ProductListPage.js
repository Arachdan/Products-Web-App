import ProductListUpperFragment from "../ProductListUpperFragment";
import ProductList from "../ProductList";
import Note from "../Note";

function ProductListPage() {
    return(
        <div className='container custom_container'>
            <ProductListUpperFragment/>

            <ProductList/>

            <hr className='horizontal_line'/>

            <Note/>
        </div>
    );
}

export default ProductListPage;