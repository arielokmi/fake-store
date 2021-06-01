import  './Product.css'

function Product({
category,
description,
id,
image,
price,
title,
})
{
    return(
      <div className ='product'>
          <img src={image} className='image-product'></img>
          <span>{category}</span>
          <h3>{title}</h3>
          <p>{description}</p>
          <button >Buy {price}$</button>
      </div> 
    )
}


export default Product;