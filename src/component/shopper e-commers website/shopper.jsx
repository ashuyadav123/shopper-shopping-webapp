import { useState,useEffect } from "react"
import axios from "axios"

const ShopperWebsite=()=>{

    const[categories,setCategories]=useState([]);
     const[products,setProducts]=useState([]);
     const[cardItems,setCardItems]=useState([]);
     const[cardCount,setcardCount]=useState(0);
     const[showToggle,setshowToggle]=useState({'display':'none'})

    function GetCategory(){
        axios.get("https://fakestoreapi.com/products/categories")
        .then(response=>{
            response.data.unshift("all")
            setCategories(response.data)
        })
    }
    function GetProducts(url){
        axios.get(url)
        .then(response=>{
            setProducts(response.data)
        })
    }

    function GetCardCount(){
        setcardCount(cardItems.length);
    }
    useEffect(()=>{
        GetCategory();
        GetProducts("https://fakestoreapi.com/products");
        GetCardCount();
    },[])


    function HandleCategoryChange(e) {
        const selectedCategory = e.target.value;
        console.log("Selected category:", selectedCategory);
    
        if (selectedCategory === "all") {
          GetProducts("https://fakestoreapi.com/products");
        } else {
          GetProducts(`https://fakestoreapi.com/products/category/${selectedCategory}`);
        }
      }
   
    function HandleAddToCart(e){
       axios.get(`https://fakestoreapi.com/products/${e.target.value}`)
       .then(response=>{
        cardItems.push(response.data);
        alert(`${response.data.title}\n Added to Cart`)
        GetCardCount();
       })
    }
    function HandleToggleClick(){
        setshowToggle({'display':'block'})
    }

    function handleRemoveClick(e) {
        const indexToRemove = parseInt(e.target.value);
      
        // Create a new array without the item to remove
        const newCardItems = cardItems.filter((_, i) => i !== indexToRemove);
      
        setCardItems(newCardItems);
      }
      
    return(
        <div className="container-fluid">
        <header className="d-flex justify-content-around p-2 bg-dark text-white">
           <div> <h3>Shopper.</h3></div>
            <div>
                <span className="me-2">Home</span>
                <span className="me-2">Electronics</span>
                <span className="me-2">Jewelery</span>
                <span className="me-2">Men's Clothing</span>
                <span className="me-2">Women's Clothing</span>
            </div>
            <div>
                <button onClick={HandleToggleClick} className="btn btn-light postion-relative">
                    Your Cart
                    <span className="bi bi-cart4"></span>
                    <span className="badge position-absolute top-0 end-2 bg-danger rounded rounded-circle">{cardCount}</span>
                </button>
            </div>
        </header>
        <section className="mt-3 row" >
            <nav className="col-2">
           <div>
           <label className="form-label fw-bold">Select Category</label>
          
           <div>
            <select onChange={HandleCategoryChange}>
             {
                categories.map(category=>(
                    <option value={category} key={category}>{category.toUpperCase()}</option>
                ))
             }
            </select>
            </div>
           </div>
            </nav>
            <main className="col-8 d-flex flex-wrap overflow-auto" style={{height:"500px"}}>
             {
               products.map(product=>(
                <div className="card m-2 p-2" style={{width:'200px'}} key={product.id}>
                <img src={product.image} className="image-top" height='140' />
                <div className="card-header  overflow-auto" style={{height:'130px'}}>
                    <p>{product.title}</p>
                </div>
                <div className="card-body">
                    <dl>
                        <dt>Price</dt>
                        <dd>{product.price}</dd>
                        <dt>Rating</dt>
                        <dd>
                            {product.rating.rate}
                            <span className="bi bi-star-fill text-success"></span>
                            [{product.rating.count}]
                        </dd>
                    </dl>
                </div>
                <div className="card-footer">
                    <button value={product.id} onClick={HandleAddToCart} className="btn btn-danger w-100">
                        <span className="bi bi-cart4"></span> Add to Cart
                    </button>
                </div>
                </div>
               ))
             }
            </main>
            <aside className="col-2">
            <div style={showToggle}>
                <label className="fw-bold">Your Cart</label>
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Preview</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cardItems.map((item,i)=>
                        <tr key={item.id}>
                            <td><img src={item.image} width="50" height="50" /></td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={handleRemoveClick} value={i} className="btn btn-danger">
                                    <span className="bi bi-trash-fill"></span>
                                </button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
                </table>
            </div>
            </aside>

        </section>
        </div>
    )
}

export default ShopperWebsite