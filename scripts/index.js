// ================================================================
// DOM Selection
// ================================================================
const orderForm = document.querySelector('[data-form]');

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
      // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data)
      .then(r => r.json())
      .then(console.log)
  });

  // debugger;
}
// ================================================================
// Main Event Listeners
// ================================================================
console.log('about to add event listener');
orderForm.addEventListener('submit', handleSubmit);