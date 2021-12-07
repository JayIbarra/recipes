async function addRecipe(event) {
  event.preventDefault();
<<<<<<< HEAD

  const $newRecipeForm = document.querySelector("#new-recipe-form");
  const recipe_name = $newRecipeForm.querySelector(
    '[name="recipe-name"]'
  ).value;
  const recipe_url = $newRecipeForm.querySelector('[name="recipe-url"]').value;
  const difficulty_level = $newRecipeForm.querySelector("select").value;

  const recipeObject = { recipe_name, recipe_url, difficulty_level };

  const response = await fetch("/api/recipes", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(recipeObject),
  });

  if (response.ok) {
    console.log("success");
  } else alert("Error: " + response.statusText);
}

document.querySelector("#btn-add").addEventListener("click", addRecipe);
=======
 
  const $newRecipeForm = document.querySelector('#new-recipe-form')
  const recipe_name = $newRecipeForm.querySelector('[name="recipe-name"]').value;
  const recipe_url = $newRecipeForm.querySelector('[name="recipe-url"]').value;
  const difficulty_level = $newRecipeForm.querySelector('select').value;

  const recipeObject = { recipe_name, recipe_url, difficulty_level };

  const response = await fetch('/api/recipes', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(recipeObject)
  })
    
    if (response.ok) {
      console.log('success');
    }
    else
    alert('Error: ' + response.statusText);

}


document.querySelector('#btn-add').addEventListener('click', addRecipe);
>>>>>>> 89680b04e6a4e5d8b5addbf30e926eee60a5a321
