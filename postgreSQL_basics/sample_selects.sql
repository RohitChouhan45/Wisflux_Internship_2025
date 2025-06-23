-- Select all students
SELECT * FROM students;

-- Select students aged above 21
SELECT * FROM students WHERE age > 21;

-- Update a student's age
UPDATE students SET age = 23 WHERE name = 'Ankit Sharma';

-- Delete a student by email
DELETE FROM students WHERE email = 'pooja@example.com';
