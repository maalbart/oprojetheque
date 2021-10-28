-- Deploy oprojetheque:init to PG

BEGIN; 
-- CREATE ROLE oprojetheque WITH LOGIN PASSWORD 'oprojetheque';
-- CREATE DATABASE oprojetheque WITH OWNER oprojetheque;
-- Delete tables if they already exist for security reasons
DROP TABLE IF EXISTS 
"promo", "student", "project", "administrator";

-- Creation of differents tables
CREATE TABLE "promo" (
    "id" serial PRIMARY KEY, -- -- the serial type is specific to POSTGRESQL, it uses functions to automatically increment the id
    "name" text NOT NULL,
    "logo" text NOT NULL,
    "starting_date" date NOT NULL,
    "ending_date" date NOT NULL
    
);
CREATE TABLE "project" (
    "id" serial PRIMARY KEY,
    "name" text NOT NULL, 
    "logo" text, 
    "description" text,
    "site_link" text,
    "site_screen" text,
    "youtube_link" text,
    -- foreign key
    "id_promo" int NOT NULL REFERENCES "promo"("id") 
);
CREATE TABLE "student" (
    "id" serial PRIMARY KEY,
    "firstname" text NOT NULL,
    "lastname" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL,
    "biography" text, -- Authorization to write the biography later (it can be NULL) / as well as for the other elements that are not null (avatar, logo, etc.)
    "avatar" text, 
    -- foreign key
    "id_promo" int NOT NULL REFERENCES "promo"("id"),
    "id_project" int NOT NULL REFERENCES "project"("id")
);


CREATE TABLE "administrator" (
    "id" serial PRIMARY KEY, 
    "firstname" text NOT NULL,
    "lastname" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL, 
    "job_title" text,
    "avatar" text
);
CREATE TABLE "supervise" (
    "id_administrator" int REFERENCES "administrator"("id"), 
    "id_promo" int REFERENCES "promo"("id"),
    -- -- the primary key is the combination of the two foreign keys of our association table
    PRIMARY KEY("id_administrator", "id_promo")
);
ALTER TABLE project OWNER TO oprojetheque;
ALTER TABLE promo OWNER TO oprojetheque;
ALTER TABLE student OWNER TO oprojetheque;
ALTER TABLE administrator OWNER TO oprojetheque;
ALTER TABLE supervise OWNER TO oprojetheque;

COMMIT;
