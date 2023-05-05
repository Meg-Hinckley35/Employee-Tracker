-- department seeds --
INSERT INTO department (dpt_name)
VALUES
    ('Human Resources'),
    ('Sales'),
    ('Accounting'),
    ('Marketing'),
    ('Information Technology');

-- role seeds --
INSERT INTO emp_role (title, salary, dpt_id)
VALUES
  ('Sales Lead', '75000', 3),
  ('Sales Associate', '50000', 3),
  ('Tech Lead', '160000', 4),
  ('Junior Engineer', '70000', 4),
  ('Account Manager', '70000', 1),
  ('Accountant', '80000', 1),
  ('Payroll Specialist', '60000', 5),
  ('Marketing Strategist', '120000', 2),
  ('Graphic Designer', '60000', 2),
  ('HR Manager', '90000', 5);
    
-- employee seeds --
INSERT INTO employee (first_name, last_name, role_id, mgr_id)
VALUES
  ('James', 'Little', 2, NULL),
  ('Kathy', 'Smith', 1, NULL),
  ('Daniel', 'Stein', 4, 2),
  ('Thomas', 'Peters', 2, 2),
  ('Eric', 'Cullen', 3, 3),
  ('Dottie', 'Rogers', 6, 3),
  ('Irene', 'McCleod', 8, 4),
  ('Heather', 'Chandler', 7, 3),
  ('Sarah', 'Sneed', 5, 2),
  ('Rachel', 'Danforth', 4, 4),
  ('Anthony', 'Salvatore', 7, NULL),
  ('Emily', 'Locke', 4,2);