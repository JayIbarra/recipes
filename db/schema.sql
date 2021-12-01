DROP TABLE IF EXISTS ingredients_recipes_association;
DROP TABLE IF EXISTS recipes;
DROP TABLE IF EXISTS ingredients_ref;


CREATE TABLE recipes (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  difficult INTEGER NOT NULL,
  instruction TEXT
);

CREATE TABLE ingredients_ref (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  ingredient_name VARCHAR(50) NOT NULL
);

CREATE TABLE ingredients_recipes_association (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  ingredients_id INTEGER NOT NULL,
  recipes_id INTEGER NOT NULL,
  CONSTRAINT fk_ingredients FOREIGN KEY (ingredients_id) REFERENCES ingredients_ref(id) ON DELETE CASCADE,
  CONSTRAINT fk_recipes FOREIGN KEY (recipes_id) REFERENCES recipes(id) ON DELETE CASCADE
);