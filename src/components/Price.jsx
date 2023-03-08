import { useRef } from "react";

const Price = () =>{
    const price = useRef();
    return(  
        <p className="price" ref={price}></p>
    )
}
export default Price;