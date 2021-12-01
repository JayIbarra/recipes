const $searchButton = document.getElementById('search-button')
const $selectionForm = document.querySelector('#selection-form')

const handleRecipeResultsFormSubmit = event => {
  event.preventDefault();

  const selection = $selectionForm.querySelector('[name="difficult"]');

  console.log(selection)

  // const result = document.getElementById('recipe-results-p');

  // result.innerHTML = "Hello World";
}

$searchButton.addEventListener('click', handleRecipeResultsFormSubmit);