// Import the scanWebsite function from ContractAddressSearch.js
import { scanWebsite } from './ContractAddressSearch.js';

// Get a reference to the button element
const button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', async () => {
  try {
    // Call the scanWebsite function and wait for the result
    const result = await scanWebsite();
    // Get a reference to the body element
    const body = document.querySelector('body');
    // Display the result in the body
    body.innerHTML = `<pre>${JSON.stringify(result, null, 2)}</pre>`;
  } catch (error) {
    // If an error occurs, display it in the console
    console.error(error);
  }
});
