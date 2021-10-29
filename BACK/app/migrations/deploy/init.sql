-- Deploy oprojetheque:init to PG
BEGIN; 

-- Delete tables if they already exist for security reasons
DROP TABLE IF EXISTS 
"promo", "project", "theuser", "therole";

-- Creation of differents tables
CREATE TABLE "therole" (
    "id" serial PRIMARY KEY,
    "name" text NOT NULL
);

CREATE TABLE "promo" (
    "id" serial PRIMARY KEY, -- the serial type is specific to POSTGRESQL, it uses functions to automatically increment the id
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

CREATE TABLE "theuser" (
    "id" serial PRIMARY KEY,
    "firstname" text NOT NULL,
    "lastname" text NOT NULL,
    "email" text NOT NULL,
    "password" text NOT NULL, 
    "biography" text,
    "avatar" text,
    --foreign key 
    "id_promo" int NOT NULL REFERENCES "promo"("id"),
    "id_project" int NOT NULL REFERENCES "project"("id"),
    "id_therole" int NOT NULL REFERENCES "therole"("id")
);

ALTER TABLE project OWNER TO oprojetheque;
ALTER TABLE promo OWNER TO oprojetheque;
ALTER TABLE therole OWNER TO oprojetheque;
ALTER TABLE theuser OWNER TO oprojetheque;

COMMIT;
