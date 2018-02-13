USE terminal_delusion;

INSERT INTO players (username, name, level, max_hp, base_attack, known_skills)
VALUES ("davidmcdougs","Umber", 0,25,5,"0");

INSERT INTO enemies (name, level, max_hp, base_attack, known_skills)
VALUES ("goblin", 0, 50,3,"0");

INSERT INTO player_skills (name, attack_scaling, random_damage, special_effects)
VALUES ("player_attack", 50, 100, "none");

INSERT INTO enemy_skills (name, attack_scaling, random_damage, special_effects)
VALUES ("enemy_attack", 100, 50, "none");