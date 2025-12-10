CREATE TABLE shop_xx (
    pId int NOT NULL PRIMARY KEY,
    name varchar(255),
    category varchar(255),
    price real,
    img_url text,
    remote_img_url text
);

INSERT INTO shop_xx (pId, name, category, price,img_url, remote_img_url)
VALUES
(1,'Blue Tanktop','womens',25,'/images/midterm/womens/blue-tank.png','https://i.ibb.co/7CQVJNm/blue-tank.png'),
(2,'Floral Blouse','womens',20,'/images/midterm/womens/floral-blouse.png','https://i.ibb.co/4W2DGKm/floral-blouse.png'),
(3,'Floral Dress','womens',80,'/images/midterm/womens/floral-skirt.png','https://i.ibb.co/KV18Ysr/floral-skirt.png'),
(4,'Red Dots Dress','womens',80,'/images/midterm/womens/red-polka-dot-dress.png','https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png'),
(5,'Stripped Sweater','womens',45,'/images/midterm/womens/striped-sweater.png','https://i.ibb.co/KmSkMbH/striped-sweater.png"'),
(6,'Yellow Track Suite','womens',135,'/images/midterm/womens/yellow-track-suit.png','https://i.ibb.co/v1cvwNf/yellow-track-suit.png'),
(7,'White Blouse','womens',20,'/images/midterm/womens/white-vest.png','https://i.ibb.co/qBcrsJg/white-vest.png')

