CREATE TABLE bins (
    id SERIAL PRIMARY KEY,
    shelf TEXT,
    name TEXT,
    price TEXT
)

INSERT INTO bins (shelf, name, price)
VALUES
    ('A', 'test name 1', '$12'),
    ('A', 'test name 2', '$14'),
    ('A', 'test name 3', '$16'),
    ('A', 'test name 4', '$18'),
    ('A', 'test name 5', '$24'),
    ('B', 'test name 6', '$34'),
    ('B', 'test name 7', '$44'),
    ('B', 'test name 8', '$54'),
    ('B', 'test name 9', '$64'),
    ('B', 'test name 10', '$114'),
    ('C', 'test name 11', '$124'),
    ('C', 'test name 12', '$143'),
    ('C', 'test name 13', '$144'),
    ('C', 'test name 14', '$141'),
    ('C', 'test name 15', '$214'),
    ('D', 'test name 16', '$314'),
    ('D', 'test name 17', '$414'),
    ('D', 'test name 18', '$514'),
    ('D', 'test name 19', '$614'),
    ('D', 'test name 20', '$714'),