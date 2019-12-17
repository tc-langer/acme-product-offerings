const contentElement = document.querySelector('#content')

const products = fetch('https://acme-users-api-rev.herokuapp.com/api/products');
const companies = fetch(
  'https://acme-users-api-rev.herokuapp.com/api/companies'
);
const offerings = fetch(
  'https://acme-users-api-rev.herokuapp.com/api/offerings'
);



function renderProductCards(arr){
  arr.forEach(function (el){
    const newElement = document.createElement('div')
    newElement.innerHTML =
   `<h1>${el.name}</h1>
   <h4>${el.description}</h4>
   <h4>$${el.suggestedPrice}.00</h4>
  `
  contentElement.appendChild(newElement)
    newElement.classList.add('product-card')
  })
}

const firstProductOfferings =[]
function getOfferingPrice(arr,arrTwo, arrThree){
  arr.forEach(offering => {
    if (offering.productId === arrTwo[0].id){
      firstProductOfferings.push(offering.price)
    }
  })
  console.log(firstProductOfferings)
 return firstProductOfferings
}


    // function getCompanyIds(arr){
    //   arr.forEach(el => {
    //     console.log(el.name)
    //   })
    // }

async function getData() {
  const responses = await Promise.all([products, companies, offerings]);
  const productsJSON = await responses[0].json();
  const companiesJSON = await responses[1].json();
  const offeringsJSON = await responses[2].json();

  console.log('products', productsJSON);
  console.log('companies', companiesJSON);
  console.log('offerings', offeringsJSON);
   renderProductCards(productsJSON)
   getOfferingPrice(offeringsJSON, productsJSON)

  //  getCompanyIds(companiesJSON)
  }

  getData()



































  //  function addOfferingList(){
  //   firstProductOfferings.forEach( el => {
  //     const newOfferingPriceList = document.createElement('ul')
  //     newOfferingPriceList.innerHTML =
  //     `
  //     <li>Offered at: ${companiesJSON[1].name} ${el.price}</li>
  //     `
  //     productCards.appendChild(newOfferingPriceList)
  //   })
  //  }
  //  addOfferingList()
  //  const data = []
  //  return data.push[productsJSON, companiesJSON, offeringsJSON]
  //  getOfferingPrice()












// productsJSON.forEach(el => {
//   const productDescriptionElement = document.createElement('div')
//   productDescriptionElement.innerHTML =
//   `
//   <p>${el.description}</p>
//   `
//   productNameElement.appendChild(productDescriptionElement)
// })


  // newProductElement.innerText = `${productsJSON[0].name}`
// }
;

// async function buildOne() {}
// async function getProductData() {
//   const response = await fetch(
//     'https://acme-users-api-rev.herokuapp.com/api/products'
//   );
//   const productsJSON = await response.json();
//   const productsId = await productsJSON[0].id;
//   const productOffering = await fetch(
//     `https://acme-users-api-rev.herokuapp.com/api/offerings?productId=${productsId}`
//   );
//   const offeringJSON = await productOffering.json();

//   console.log(productsId);
//   console.log(offeringJSON);
// }

// getProductData();
