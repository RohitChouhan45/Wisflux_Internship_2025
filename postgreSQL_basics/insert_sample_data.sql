-- Insert students
INSERT INTO students (name) VALUES 
('Rohit Chouhan'),
('Ankita Sharma'),
('Navneet Kaur');

-- Insert courses
INSERT INTO courses (title) VALUES 
('Web Development'),
('Database Systems');

-- Enrollments
INSERT INTO enrollments (student_id, course_id) VALUES 
(1, 1),
(1, 2),
(2, 1);
