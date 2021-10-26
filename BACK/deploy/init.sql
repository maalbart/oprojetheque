BEGIN;
CREATE TABLE promo IF NOT EXISTS(
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    logo  TEXT NOT NULL,
    starting_date DATE NOT NULL,
    ending_date DATE NOT NULL
    
);
CREATE TABLE student IF NOT EXISTS(
    id serial PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    biography TEXT, 
    avatar TEXT, 
    id_promo INT NOT NULL REFERENCES promo(id),
    id_project INT NOT NULL REFERENCES project(id)
);
CREATE TABLE project IF NOT EXISTS(
    id serial PRIMARY KEY,
    name TEXT NOT NULL, 
    logo TEXT, 
    description TEXT,
    site_link TEXT,
    site_screen TEXT,
    youtube_link TEXT,
    id_promo INT NOT NULL REFERENCES promo(id)
);
CREATE TABLE administrator IF NOT EXISTS (
    id serial PRIMARY KEY, 
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL, 
    job_title TEXT,
    avatar TEXT
);
CREATE TABLE supervise IF NOT EXISTS (
    id_admin INT FOREIGN KEY (id_admin) REFERENCES administrator(id),
    id_promo INT FOREIGN KEY (id_promo) REFERENCES promo(id)
);

COMMIT;