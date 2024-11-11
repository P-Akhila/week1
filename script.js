document.addEventListener('DOMContentLoaded',()=>{
    const cartItemsContainer=document.querySelector('.cart-items');
    const totalPriceElement=document.querySelector('.total-price');
    let totalPrice=0;
    document.querySelector('.add-to-cart-btn').addEventListener('click',()=>{
        const productName=document.querySelector('.product-title').textContent;
        const productPrice=parseFloat(document.querySelector('.product-price').textContent.replace('Rs',''));
        const cartItem=document.createElement('li');
        cartItem.textContent='Rs{productName}-RsRs {productPrice.toFixed(2)}';
        cartItemsContainer.appendChild(cartItem);
        totalPrice+=productPrice;
        totalPriceElement.textContent='Total: Rs Rs{totalPrice.toFixed(2)}';
    });
}
);