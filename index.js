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

function getCompanyNamePrice(offeringArr, companiesArr, productId){
  const companyNamePriceEl = document.createElement('ul')
  for (let i = 0; i < offeringArr.length; i++){
    for (let j = 0; j  < companiesArr.length; j++){
        if (offeringArr[i].companyId === companiesArr[j].id && offeringArr[i].productId === productId){
          console.log(companiesArr[j].name, offeringArr[i].price)
          }
      }
    }
    }

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
  getCompanyId(companiesJSON)
  getCompanyNamePrice(offeringsJSON, companiesJSON, getProductId(productsJSON))
}
getAllData()

function buildProductCard(productArr){
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
  // const productsResponse = await fetch('https://acme-users-api-rev.herokuapp.com/api/products')
  // const productsJSON = await productsResponse.json()
  // console.log(productsJSON)
  const productId = arr[0].id
  console.log(productId)
  return productId
}

function getCompanyId(arr){
  const companyId = arr[0].id
  console.log(companyId)
  return companyId
}
