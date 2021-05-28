-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2021. Máj 28. 06:18
-- Kiszolgáló verziója: 10.4.19-MariaDB
-- PHP verzió: 8.0.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `info_rendszerek_beadando`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `rental`
--

CREATE TABLE `rental` (
  `id` int(11) NOT NULL,
  `startingDate` datetime NOT NULL,
  `endingDate` datetime NOT NULL,
  `isActive` tinyint(4) NOT NULL DEFAULT 0,
  `insuranceMoney` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `stockId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `rental`
--

INSERT INTO `rental` (`id`, `startingDate`, `endingDate`, `isActive`, `insuranceMoney`, `userId`, `stockId`) VALUES
(1, '2021-05-27 02:00:00', '2021-06-03 02:00:00', 1, 10000, 5, 3),
(2, '2021-05-12 02:00:00', '2021-05-21 02:00:00', 0, 100000, 1, 1),
(3, '2021-05-26 02:00:00', '2021-06-06 02:00:00', 0, 45000, 3, 4),
(4, '2021-05-25 02:00:00', '2021-05-29 02:00:00', 1, 95000, 2, 2),
(5, '2021-05-28 02:00:00', '2021-05-29 02:00:00', 0, 120000, 4, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `type` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `manufacturer` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `plateNumber` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `chassisNumber` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `dateOfPurchase` datetime NOT NULL,
  `serialNumber` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `mileage` int(11) NOT NULL,
  `available` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `stock`
--

INSERT INTO `stock` (`id`, `type`, `manufacturer`, `plateNumber`, `chassisNumber`, `dateOfPurchase`, `serialNumber`, `price`, `mileage`, `available`) VALUES
(1, 'a4', 'Audi', 'SPD-441', 'WKD2221481A438447', '2019-05-14 03:45:48', 1, 11000, 44, 1),
(2, 'Octavia', 'Skoda', 'SKD-123', 'SKD2223381A400448', '2017-03-12 03:47:24', 2, 7500, 39, 0),
(3, '4 személyes vizibicikli', 'Waterfall', '82', 'WF-555114', '2016-09-08 03:48:27', 501, 5000, 4, 0),
(4, 'Jumper', 'Citroen', 'JMP-456', 'CTD9521481B438422', '2018-02-09 03:50:15', 3, 8100, 30, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `lastName` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `age` int(11) NOT NULL,
  `IDNumber` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `address` varchar(255) COLLATE utf8_hungarian_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8_hungarian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `age`, `IDNumber`, `address`, `phone`) VALUES
(1, 'Balázs', 'Hornyák', 22, '445588PA', 'Miskolc, Arany János 29', '+36123456789'),
(2, 'Béla', 'Nagy', 30, '123456BA', 'Budapest, Nagykörút 14', '+36987654321'),
(3, 'Gipsz', 'Jakab', 50, '505050OV', 'Berlin, Muncheni út 44', '+21405632154'),
(4, 'Teszt', 'Elek', 40, '7415246TE', 'Alsózsolca, Nagy út 1', '+36363636363'),
(5, 'József', 'Virág', 48, '415246VJ', 'Bikinifenék, Rozsdásrákolló út 999', '+36909090909');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `rental`
--
ALTER TABLE `rental`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_5c91d10c5ee7afddcb2dbbfbbd0` (`userId`),
  ADD KEY `FK_9b61fa1cfc0190e5a80d2ccdab3` (`stockId`);

--
-- A tábla indexei `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `rental`
--
ALTER TABLE `rental`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT a táblához `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `rental`
--
ALTER TABLE `rental`
  ADD CONSTRAINT `FK_5c91d10c5ee7afddcb2dbbfbbd0` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_9b61fa1cfc0190e5a80d2ccdab3` FOREIGN KEY (`stockId`) REFERENCES `stock` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
