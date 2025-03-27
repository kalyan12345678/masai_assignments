
async function fetchProducts() {
    let url = 'https://fakestoreapi.com/products'
  
    try {
      let response = await fetch(url)
  
      if (!response.ok) {
        throw new Error('Failed to fetch products')
      }
      let products = await response.json()
      console.log('Fetched Products:', products)
      let totalPrice = products.reduce((sum, product) => sum + product.price, 0)
      console.log('Total Price of All Products:', totalPrice.toFixed(2))
  
    } catch (error) {
      console.error('Error:', 'Failed to fetch products. Please try again later.')
    }
  }
  
  fetchProducts();
  