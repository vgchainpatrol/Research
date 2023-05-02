export async function scanWebsite() {
  // Get the user input from a form or prompt dialog
  let website = prompt("Please enter a website URL or domain name:");

  // Check if the input is a valid URL or domain name
  let urlRegex = new RegExp("^(https?:\\/\\/)?([\\w\\.]+)\\.([a-z]{2,6}\\.?)(\\/[\\w\\.]*)*\\/?$");
  let domainRegex = new RegExp("^([\\w\\.]+)\\.([a-z]{2,6}\\.?)$");
  let isUrl = urlRegex.test(website);
  let isDomain = domainRegex.test(website);

  // If the input is not valid, display an error message
  if (!isUrl && !isDomain) {
    console.error("Invalid input. Please enter a valid website URL or domain name.");
    return;
  }

  // If the input is a domain name, add the http:// prefix to form a valid URL
  if (isDomain) {
    website = "http://" + website;
  }

  // Send a request to the website using the Fetch API
  let response = await fetch(website);
  let html = await response.text();

  // Search the HTML code for Ethereum contract addresses using a regular expression
  let contractRegex = /0x[a-fA-F0-9]{40}/g;
  let matches = html.match(contractRegex);

  // If no matches are found, display a message indicating that the website is clean
  if (matches === null) {
    console.log("The website is clean. No Ethereum contract addresses were found.");
  } else {
    // Display the list of matches to the console
    console.log("The following Ethereum contract addresses were found on the website:");
    matches.forEach(function(match) {
      console.log(match);
    });
  }
}
