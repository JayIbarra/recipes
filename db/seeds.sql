INSERT INTO recipes (name, difficult, instruction)
VALUES
('Eggs in a basket', '1', 'Heat a large frying pan over medium-high heat and melt 1 teaspoon of butter in the pan, Place the bread on the griddle with the butter side down, Break 1 egg into a small dish and gently slide it into the hole in the bread, Serve the toast immediately and decorate with the cutout pieces' ),
('Arepas', '2', 'Make the Arepas' ),
('WWaffles', '3', 'Make the Waffles' );


INSERT INTO ingredients_ref (ingredient_name)
VALUES
('Butter'),
('whole-wheat bread'),
('eggs'),
('salt'),
('pepper');

INSERT INTO ingredients_recipes_association (recipes_id, ingredients_id)
VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 1),
(2, 3),
(3, 2),
(3, 3);