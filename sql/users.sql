CREATE TABLE IF NOT EXISTS public."user" (
	id serial PRIMARY KEY,
	firstname VARCHAR ( 100 ) NOT NULL,
	lastname VARCHAR ( 100 ) NOT NULL,
	middlename VARCHAR ( 100 ) NOT NULL,
    birthday VARCHAR ( 100 ) NOT NULL,
    address VARCHAR ( 100 ) NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW() 
);

INSERT INTO public."user" (firstname, lastname, middlename, birthday, address)
VALUES('Yul Stewart', 'Gurrea', 'Camins', '1994-11-05', 'Iligan City');
