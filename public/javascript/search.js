function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

async function searchRecipes(event) {
  event.preventDefault();

  const $selectionForm = document.querySelector('#selection-form')
  const levelRadioHTML = $selectionForm.querySelectorAll('[name="difficult"]');


  let level;

  for (let i = 0; i < levelRadioHTML.length; i += 1) {
    if (levelRadioHTML[i].checked) {
      level = levelRadioHTML[i].value;
    }
  }

  if (level === undefined) {
    level = '';
  }

  const response = await fetch('/api/recipes/' +level, {
    method: 'get',
    
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    console.log('success');
    console.log(response);
    window.open(response.url, '_blank');
  } else {
    alert(response.statusText);
  }
  

  
}

document.querySelector('#btn-search').addEventListener('click', searchRecipes);