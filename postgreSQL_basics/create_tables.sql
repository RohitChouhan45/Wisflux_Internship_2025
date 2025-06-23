-- Create a sample table for students
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INTEGER,
    enrolled_on DATE DEFAULT CURRENT_DATE
);
