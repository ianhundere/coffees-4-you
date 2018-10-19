// ================================================================
// DOM Selection
// ================================================================
const orderForm = document.querySelector('[data-form]');
const outputElement = document.querySelector('[data-output]');
const orderBotton = document.querySelector('[order-trigger]');
const orderOutput = document.querySelector('[order-output]');

// ================================================================
// Helper Functions
// ================================================================
function handleSubmit(event) {
    event.preventDefault();
    console.log('coffee for everyone');

    console.log(event.target);
    // debugger;
    // time to AJAX that thing.
    // call fetch()
    // pass it the URL
    // and an object w/ a method and body.
    const url = event.target.action;
    const method = event.target.method;
    const elements = event.target.elements;
    const data = {
        strength: elements.strength.value,
        flavor: elements.flavor.value,
        size: elements.size.value,
        coffee: elements.coffee.value,
        emailAddress: elements.emailAddress.value,
    };

    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
      .then(drawComplete)
      .catch(err => console.log(err));
      

  function drawComplete() {
    const submitComplete = document.createElement('div');
    const textNode = document.createTextNode('Your form was submitted successfully.');
    submitComplete.appendChild(textNode);
    outputElement.appendChild(submitComplete);
  }

}

function getOrder() {
  fetch("https://dc-coffeerun.herokuapp.com/api/coffeeOrders", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
  }).then(convertToJson)
    .then(extractOrderText)
    .then(drawOrder)
    .catch (err => console.log(err));
}

function convertToJson(r) {
  console.log(r);
  return r.json();
}

function extractOrderText(objOrder) {
  console.log(objOrder);
  return Object.values;
}

function drawOrder(orderText) {
  const listOrder = document.createElement('li');
  orderOutput.createTextNode = orderText;
  orderText.appendChild(listOrder);
}

// ================================================================
// Main Event Listeners
// ================================================================
function main() {
  console.log('about to add event listener');
  orderForm.addEventListener('submit', handleSubmit);
  orderForm.addEventListener('button', getOrder);
}

main();

