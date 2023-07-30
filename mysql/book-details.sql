-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 30, 2023 at 09:35 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `books`
--

-- --------------------------------------------------------

--
-- Table structure for table `book-details`
--

CREATE TABLE `book-details` (
  `isbn` bigint(100) NOT NULL,
  `title` varchar(256) NOT NULL,
  `subtitle` text NOT NULL,
  `author` varchar(256) NOT NULL,
  `published` datetime NOT NULL,
  `publisher` varchar(256) NOT NULL,
  `pages` int(11) NOT NULL,
  `description` text NOT NULL,
  `website` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book-details`
--

INSERT INTO `book-details` (`isbn`, `title`, `subtitle`, `author`, `published`, `publisher`, `pages`, `description`, `website`) VALUES
(9781491943533, 'Practical Modern JavaScript', 'Dive into ES6 and the Future of JavaScript', 'Nicolás Bevacqua', '2017-07-16 00:00:00', 'O\'Reilly Media', 334, 'To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.', 'https://github.com/mjavascript/practical-modern-javascript'),
(9781593279509, 'Eloquent JavaScript, Third Edition', 'A Modern Introduction to Programming', 'Marijn Haverbeke', '2018-12-04 00:00:00', 'No Starch Press', 472, 'JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.', 'http://eloquentjavascript.net/');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book-details`
--
ALTER TABLE `book-details`
  ADD PRIMARY KEY (`isbn`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
