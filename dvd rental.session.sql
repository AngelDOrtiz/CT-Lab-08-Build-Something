SELECT 
inventory.inventory_id,
rental.rental_id,
film.title
FROM inventory
INNER JOIN rental
ON inventory.inventory_id = rental.inventory_id
INNER JOIN film
ON film.film_id = inventory.film_id