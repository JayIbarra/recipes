async function searchRecipes(event) {
  event.preventDefault();

  const level = document.querySelector('.diff').value;

  if (level === 1) {
    console.log(level)
    const response = await fetch('/api/recipes/1', {
      method: 'post',
      body: JSON.stringify({
        recipe_name,
        instructions
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.btn').addEventListener('click', searchRecipes);




// const $searchButton = document.getElementById('search-button')
// const $selectionForm = document.querySelector('#selection-form')

// const handleRecipeResultsFormSubmit = event => {
//   event.preventDefault();

//   const selection = $selectionForm.querySelector('[name="difficult"]');

//   console.log(selection)

//   // const result = document.getElementById('recipe-results-p');

//   // result.innerHTML = "Hello World";
// }

// $searchButton.addEventListener('click', handleRecipeResultsFormSubmit);