/* eslint-disable guard-for-in */
/* eslint-disable no-unused-vars */
const contentElement = document.querySelector('#content')
const productsElement = document.querySelector("#products")

// eslint-disable-next-line no-unused-vars
const products = fetch('https://acme-users-api-rev.herokuapp.com/api/products');
const companies = fetch(
  'https://acme-users-api-rev.herokuapp.com/api/companies'
);
const offerings = fetch(
  'https://acme-users-api-rev.herokuapp.com/api/offerings'
);

console.log('stuff')

async function getAllData(){
  const responses = await Promise.all([products, companies, offerings])
  const productsResponse = responses[0]
  const companiesResponse = responses[1]
  const offeringsResponse = responses[2]

  const productsJSON = await productsResponse.json()
  const companiesJSON = await companiesResponse.json()
  const offeringsJSON = await offeringsResponse.json()

  console.log('products', productsJSON)
  console.log('companies', companiesJSON)
  console.log('offerings', offeringsJSON)

  buildProductCard(productsJSON)
  getProductId(productsJSON)
  getOfferingPrice(offeringsJSON, getProductId(productsJSON))

}
getAllData()

function buildProductCard(productArr, offeringArr, companiesArr){
  for (let i = 0; i < productArr.length; i++){
    const newProductCard = document.createElement('div')
    newProductCard.innerHTML = `
    <h2>${productArr[i].name}</h2>
    <div>${productArr[i].description}</div>
    <div>$${productArr[i].suggestedPrice}</div>
    `
    productsElement.appendChild(newProductCard)
    newProductCard.classList.add('product-card')
      }
    }

function getProductId(arr){
  let productId = arr[0].id
  return productId
}

function getCompanyId(arr){
  let companyId = arr[0].id
  return companyId
}

function getOfferingPrice(offeringArr, productId){
  let offeringPrice = offeringArr[0].price
  for (let i = 0; i < offeringArr.length; i++){
        if (offeringArr[i].productId === productId){
          console.log(offeringArr[i].price)
          offeringPrice = offeringArr[i].price
        }
}
console.log(offeringPrice)
return offeringPrice
}
