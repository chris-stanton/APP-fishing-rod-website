
-- create databse named: rodBuilding-website


CREATE TABLE threads (
  id SERIAL PRIMARY KEY,
	mfg VARCHAR(100),
  colorId VARCHAR(100),
  color VARCHAR(100),
  image VARCHAR(200)
);

INSERT INTO threads (mfg, colorId, color, image)
VALUES ('ProWrap', '101', 'Yellowfin', 'assets/images/prowarp/101-yellowfin.png'),
       ('ProWrap', '110', 'Banna Split', 'assets/images/prowarp/110-bannaSplit.png'),
       ('ProWrap', '119', 'Taxi Cab', 'assets/images/prowarp/119-taxiCab.png'),
			 ('ProWrap', '122', 'Neon Yellow', 'assets/images/prowarp/122-neonYellow.png'),
       ('ProWrap', '207', 'Gold Fish', 'assets/images/prowarp/207-goldFish.png'),
       ('ProWrap', '210', 'Burnt Orange', 'assets/images/prowarp/210-burntOrange.png'),
       ('ProWrap', '213', 'Clay', 'assets/images/prowarp/213-clay.png'),
       ('ProWrap', '216', 'Tangerine', 'assets/images/prowarp/216-tangerine.png'),
       ('ProWrap', '225', 'Neon Orange', 'assets/images/prowarp/225-neonOrange.png'),
       ('ProWrap', '301', 'Bubblegum', 'assets/images/prowarp/301-bubblegum.png'),
       ('ProWrap', '307', 'Fuchsia', 'assets/images/prowarp/307-fuchsia.png'),
       ('ProWrap', '313', 'Rose', 'assets/images/prowarp/313-rose.png'),
       ('ProWrap', '316', 'Raspberry', 'assets/images/prowarp/316-raspberry.png'),
       ('ProWrap', '319', 'Redfish', 'assets/images/prowarp/319-redfish.png'),
       ('ProWrap', '325', 'Fire Red', 'assets/images/prowarp/325-fireRed.png'),
       ('ProWrap', '331', 'Mars Red', 'assets/images/prowarp/331-marsRed.png'),
       ('ProWrap', '337', 'Cranberry', 'assets/images/prowarp/337-cranberry.png'),
       ('ProWrap', '343', 'Burgundy', 'assets/images/prowarp/343-burgundy.png'),
       ('ProWrap', '349', 'Merlot', 'assets/images/prowarp/349-merlot.png'),
       ('ProWrap', '361', 'Neon Pink', 'assets/images/prowarp/361-neonPink.png'),
       ('ProWrap', '404', 'Teal', 'assets/images/prowarp/404-teal.png'),
       ('ProWrap', '413', 'Island Lagoon', 'assets/images/prowarp/413-islandLagoon.png'),
       ('ProWrap', '416', 'Denim', 'assets/images/prowarp/416-denim.png'),
       ('ProWrap', '422', 'Bluegill', 'assets/images/prowarp/422-bluegill.png'),
       ('ProWrap', '425', 'Blue Suede', 'assets/images/prowarp/425-blueSuede.png'),
       ('ProWrap', '428', 'Summer Sky', 'assets/images/prowarp/428-summerSky.png'),
       ('ProWrap', '431', 'Tidal Pool', 'assets/images/prowarp/431-tidalPool.png'),
       ('ProWrap', '434', 'Maui Surf', 'assets/images/prowarp/434-mauiSurf.png'),
       ('ProWrap', '440', 'Cool Azul', 'assets/images/prowarp/440-coolAzul.png'),
       ('ProWrap', '446', 'Regal Blue', 'assets/images/prowarp/446-regalBlue.png'),
       ('ProWrap', '449', 'Wildberry', 'assets/images/prowarp/449-wildberry.png'),
       ('ProWrap', '455', 'Cobalt', 'assets/images/prowarp/455-cobalt.png'),
       ('ProWrap', '464', 'Blurple', 'assets/images/prowarp/464-blurple.png'),
       ('ProWrap', '470', 'Blue Marlin', 'assets/images/prowarp/470-blueMarlin.png'),
       ('ProWrap', '479', 'Gulf Stream', 'assets/images/prowarp/479-gulfStream.png'),
       ('ProWrap', '484', 'Deep Sea', 'assets/images/prowarp/484-deepSea.png'),
       ('ProWrap', '501', 'Kiwi', 'assets/images/prowarp/501-kiwi.png'),
       ('ProWrap', '507', 'Pea Soup', 'assets/images/prowarp/507-peaSoup.png'),
       ('ProWrap', '510', 'Sage', 'assets/images/prowarp/510-sage.png'),
       ('ProWrap', '513', 'Guacamole', 'assets/images/prowarp/513-guacamole.png'),
       ('ProWrap', '519', 'Rainforest', 'assets/images/prowarp/519-rainforest.png'),
       ('ProWrap', '525', 'Oak Leaf', 'assets/images/prowarp/525-oakLeaf.png'),
       ('ProWrap', '528', 'Jade', 'assets/images/prowarp/528-jade.png'),
       ('ProWrap', '537', 'Fern', 'assets/images/prowarp/537-fern.png'),
       ('ProWrap', '543', 'Evergreen', 'assets/images/prowarp/543-evergreen.png'),
       ('ProWrap', '552', 'Neon Green', 'assets/images/prowarp/552-neonGreen.png'),
       ('ProWrap', '558', 'Olive', 'assets/images/prowarp/558-olive.png'),
       ('ProWrap', '561', 'Desert Camo', 'assets/images/prowarp/561-desertCamo.png'),
       ('ProWrap', '567', 'Taupe', 'assets/images/prowarp/567-taupe.png'),
       ('ProWrap', '601', 'Pale Lavender', 'assets/images/prowarp/601-paleLavender.png'),
       ('ProWrap', '607', 'Lilac', 'assets/images/prowarp/607-lilac.png'),
       ('ProWrap', '610', 'Orchid', 'assets/images/prowarp/610-orchid.png'),
       ('ProWrap', '613', 'Plum', 'assets/images/prowarp/613-plum.png'),
       ('ProWrap', '619', 'Violet', 'assets/images/prowarp/619-violet.png'),
       ('ProWrap', '625', 'Grape', 'assets/images/prowarp/625-grape.png'),
       ('ProWrap', '631', 'Purple', 'assets/images/prowarp/631-purple.png'),
       ('ProWrap', '634', 'Amethyst', 'assets/images/prowarp/634-amethyst.png'),
       ('ProWrap', '640', 'Purple Heart', 'assets/images/prowarp/640-purpleHeart.png'),
       ('ProWrap', '701', 'Rattan', 'assets/images/prowarp/701-rattan.png'),
       ('ProWrap', '704', 'Midas Gold', 'assets/images/prowarp/704-midasGold.png'),
       ('ProWrap', '710', 'Bees Wax', 'assets/images/prowarp/710-beesWax.png'),
       ('ProWrap', '713', 'Sunset', 'assets/images/prowarp/713-sunset.png'),
       ('ProWrap', '716', 'Teak', 'assets/images/prowarp/716-teak.png'),
       ('ProWrap', '722', 'Almond', 'assets/images/prowarp/722-almond.png'),
       ('ProWrap', '728', 'Desert Sand', 'assets/images/prowarp/728-desertSand.png'),
       ('ProWrap', '740', 'Copper', 'assets/images/prowarp/740-copper.png'),
       ('ProWrap', '749', 'Brown', 'assets/images/prowarp/749-brown.png'),
       ('ProWrap', '755', 'Chestnut', 'assets/images/prowarp/755-chestnut.png'),
       ('ProWrap', '767', 'Chocolate', 'assets/images/prowarp/767-chocolate.png'),
       ('ProWrap', '807', 'White', 'assets/images/prowarp/807-white.png'),
       ('ProWrap', '813', 'Silver Shiner', 'assets/images/prowarp/813-silverShiner.png'),
       ('ProWrap', '819', 'Ghost Grey', 'assets/images/prowarp/819-ghostGrey.png'),
       ('ProWrap', '822', 'Silver Smoke', 'assets/images/prowarp/822-silverSmoke.png'),
       ('ProWrap', '825', 'Tin Can', 'assets/images/prowarp/825-tinCan.png'),
       ('ProWrap', '831', 'Smoke Screen', 'assets/images/prowarp/831-smokeScreen.png'),
       ('ProWrap', '836', 'Forged Steel', 'assets/images/prowarp/836-forgedSteel.png'),
       ('ProWrap', '841', 'Iron Ore', 'assets/images/prowarp/841-ironOre.png'),
       ('ProWrap', '850', 'Storm Cloud', 'assets/images/prowarp/850-stormCloud.png'),
       ('ProWrap', '862', 'Black', 'assets/images/prowarp/862-black.png');



CREATE TABLE iceRods (
  id SERIAL PRIMARY KEY,
	model VARCHAR(100),
	blankLength VARCHAR(100),
	handleMaterial VARCHAR(100),
  handleLength VARCHAR(100),
  price VARCHAR(100),
	image VARCHAR(200),
  description VARCHAR(5000)
);

INSERT INTO iceRods (model, blankLength, handleMaterial, handleLength, image, description)
VALUES ('Mini Bite', '21', 'Cork', '3', 'assets/images/iceRods/miniBite.jpg', 'something'),
       ('Seven Douce', '24', 'Cork', '3', 'assets/images/iceRods/sevenDouce.jpg', 'something'),
       ('El Dente', '28', 'Cork', '5', 'assets/images/iceRods/elDente.jpg', 'something'),
			 ('Long Board', '32', 'Cork', '5', 'assets/images/iceRods/longBoard.jpg', 'something'),
			 ('Gill Seeker', '28', 'Cork', '5', 'assets/images/iceRods/gillSeeker.jpg', 'something'),
			 ('Perch Pounder', '30', 'Cork', '5', 'assets/images/iceRods/perchPounder.jpg', 'something'),
			 ('Walleye Stinger', '32', 'Cork', '5', 'assets/images/iceRods/walleyeStinger.jpg', 'something'),
			 ('Custom Build', '', '', '', 'assets/images/iceRods/customBuild.jpg', 'something');




CREATE TABLE iceRodOrders (
  id SERIAL PRIMARY KEY,
	firebaseUserId VARCHAR(8000),
	blankModel VARCHAR(100),
	blankLength VARCHAR(100),
	handleMaterial VARCHAR(100),
	handleLength VARCHAR(100),
	guides VARCHAR(100),
	threadColorMain VARCHAR(100),
	threadColorTrim VARCHAR(100),
  quantity VARCHAR(50),
  paid boolean DEFAULT false,
	active boolean DEFAULT true
);



CREATE TABLE customers (
  id SERIAL PRIMARY KEY,
	firstName VARCHAR(100),
	lastName VARCHAR(100),
	streetAddress VARCHAR(100),
  city VARCHAR(100),
  state VARCHAR(100),
	zipCode VARCHAR(100),
  firebaseUserId VARCHAR(800)
);
