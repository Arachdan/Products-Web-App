import AddProductUpperFragment from '../AddProductUpperFragment';
import AddProductForm from '../AddProductForm';
import Note from '../Note';

function AddProductPage() {
    return(
        <div className='container custom_container'>
            <AddProductUpperFragment/>

            <AddProductForm/>

            <hr className='horizontal_line'/>

            <Note/>
        </div>
    );
}

export default AddProductPage;