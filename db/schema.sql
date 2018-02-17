DROP DATABASE IF EXISTS terminal_delusion;
create database terminal_delusion;

USE terminal_delusion;



CREATE TABLE players (
username VARCHAR(50) NOT NULL,
name VARCHAR(50) NOT NULL,
level INTEGER(3) NOT NULL,
max_hp INTEGER(6) NOT NULL,
base_attack INTEGER(3) NOT NULL,
known_skills VARCHAR(500) NOT NULL,
PRIMARY KEY (username)
);

CREATE TABLE enemies (
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
level INTEGER(3) NOT NULL,
max_hp INTEGER(6) NOT NULL,
base_attack INTEGER(3) NOT NULL,
known_skills VARCHAR(500) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE player_skills (
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
attack_scaling INTEGER(3) NOT NULL,
random_damage INTEGER(3) NOT NULL,
special_effects VARCHAR(500) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE enemy_skills (
id INTEGER AUTO_INCREMENT NOT NULL,
name VARCHAR(50) NOT NULL,
attack_scaling INTEGER(3) NOT NULL,
random_damage INTEGER(3) NOT NULL,
special_effects VARCHAR(500) NOT NULL,
PRIMARY KEY (id)
);



INSERT INTO players (username, name, level, max_hp, base_attack, known_skills)
VALUES ("davidmcdougs","Umber", 0,25,5,"0");

INSERT INTO enemies (name, level, max_hp, base_attack, known_skills)
VALUES ("goblin", 0, 50,3,"0");

INSERT INTO player_skills (name, attack_scaling, random_damage, special_effects)
VALUES ("player_attack", 50, 100, "none");

INSERT INTO enemy_skills (name, attack_scaling, random_damage, special_effects)
VALUES ("enemy_attack", 100, 50, "none");