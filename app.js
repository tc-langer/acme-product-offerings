console.log('This is working');

const products = fetch('https://acme-users-api-rev.herokuapp.com/api/products');
const companies = fetch(
  'https://acme-users-api-rev.herokuapp.com/api/companies'
);
const offerings = fetch(
  'https://acme-users-api-rev.herokuapp.com/api/offerings'
);
async function getData() {
  const responses = await Promise.all([products, companies, offerings]);
  console.log(responses);

  const productsJSON = await responses[0].json();
  const companiesJSON = await responses[1].json();
  const offeringsJSON = await responses[2].json();

  console.log('products', productsJSON);
  console.log('companies', companiesJSON);
  console.log('offerings', offeringsJSON);
}
getData();

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
