CREATE DATABASE project2_db;


use project2_db;

create table players(
player_id int not null auto_increment ,
player_name varchar(250) not null ,
player_attack int not null ,
player_hp int not null ,
primary key(player_id)
);

create table items(
item_id int not null ,
item_name varchar(300) not null ,
item_text varchar(300) not null ,
item_effect varchar(300) not null ,
item_stats int not null ,
primary key(item_id)
);

create table weapons(
weapon_id int not null ,
weapon_name varchar(300) not null ,
weapon_effect varchar(300) not null ,
weapon_stats int not null ,
primary key(weapon_id)
);


CREATE TABLE Room1_Hub(
room_disc TEXT ,
room_id FLOAT NOT NULL ,
question TEXT ,
response_one TEXT ,
response_one_one TEXT ,
response_one_two TEXT ,
response_one_two TEXT ,
response_one_two_one TEXT ,
response_one_two_two TEXT ,
response_one_two_three TEXT ,
response_one_two_four TEXT ,
response_one_three TEXT ,
response_one_three_one text



);
