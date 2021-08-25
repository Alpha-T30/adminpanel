import Style from './newproduct.module.scss'

export default function Newproduct() {
    return (
        <div className={Style.nproduct}>
            <h1>New Product</h1>
            <form>
                <div className={Style.item}>
                    <label for='file'>Image</label>
                    <input type='file' id='file'></input>
                </div>
                <div className={Style.item}>
                    <label for='name'>Image</label>
                    <input placeholder={"Something"} type='text' id='name'></input>
                </div>
                <div className={Style.item}>
                    <label for='stock'>Stock</label>
                    <input placeholder={"Something"} type='text' id='stock'></input>
                </div>
                <div className={Style.item}>
                    <label for='active'>Stock</label>
                    <select name="pro" className={Style.active} id="active">
                        <option value="available">Available</option>
                        <option value="unavailable">Unavailable</option>
                    </select>
                    

                </div>

                <button>Add</button>



            </form>
        </div>
    )
}
