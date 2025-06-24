-- INNER JOIN: Students with their enrolled courses
SELECT s.name AS student, c.title AS course
FROM enrollments e
INNER JOIN students s ON e.student_id = s.id
INNER JOIN courses c ON e.course_id = c.id;

-- LEFT JOIN: All students with any courses (if enrolled)
SELECT s.name, c.title
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;

-- RIGHT JOIN: All courses with enrolled students
SELECT s.name, c.title
FROM courses c
RIGHT JOIN enrollments e ON c.id = e.course_id
RIGHT JOIN students s ON e.student_id = s.id;
