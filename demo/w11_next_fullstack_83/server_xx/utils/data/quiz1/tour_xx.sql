create table tour_xx (
  id int not null primary key,
  title varchar(255),
  featured boolean,
  info text,
  date text,
  location varchar(255),
  cost int,
  img text,
  remote_img text
);

insert into tour_xx (id,title,featured,info,date,location,cost,img, remote_img)
values
(1,'Tibet Adventure',true,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.','august 26th, 2020','china',6,'/images/quiz1/tour-1.jpeg',''),
(2,'Best Of JavaScript',true,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.','october 1th, 2020','indonesia',8,'/images/quiz1/tour-2.jpeg',''),
(3,'Explore Hong Kong',true,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.','september 15th, 2020','hong kong',10,'/images/quiz1/tour-3.jpeg',''),
(4,'Kenya Highlights',true,'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.','december 5th, 2019','kenya',12,'/images/quiz1/tour-4.jpeg','')