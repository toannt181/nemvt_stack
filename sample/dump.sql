-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: 
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `development`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `nemvt` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `nemvt`;

--
-- Table structure for table `industry_standards`
--

DROP TABLE IF EXISTS `industry_standards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `industry_standards` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `middle_code` int(10) unsigned NOT NULL,
  `labor_share` decimal(5,2) NOT NULL,
  `capita_sales` decimal(12,0) NOT NULL,
  `capita_gross_profit` decimal(12,0) NOT NULL,
  `capita_ordinary_income` decimal(12,0) NOT NULL,
  `personnel_expenses` decimal(12,0) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `industry_standards_middle_code_foreign` (`middle_code`),
  CONSTRAINT `industry_standards_middle_code_foreign` FOREIGN KEY (`middle_code`) REFERENCES `middle_industry_classes` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industry_standards`
--

LOCK TABLES `industry_standards` WRITE;
/*!40000 ALTER TABLE `industry_standards` DISABLE KEYS */;
INSERT INTO `industry_standards` VALUES (1,6,69.32,26352913,833512,908082,6244494),(2,7,73.58,20501086,611648,692415,1916824),(3,8,75.31,22147032,825088,894444,2302191),(4,9,73.53,17435452,416768,531703,3737288),(5,10,58.30,29514203,1124415,1270509,430800),(6,11,73.80,13931812,226708,303947,750319),(7,12,70.40,18776940,428925,517046,356023),(8,13,77.21,14262412,305310,389293,398877),(9,14,74.71,19249715,392660,531541,667987),(10,15,78.64,16036412,192550,220820,1032715),(11,16,53.28,29788234,2491893,2684728,1368161),(12,17,63.16,29292121,1280053,1573762,118025),(13,18,70.53,19375850,634285,732539,1918236),(14,19,72.15,17455189,480496,553996,365988),(15,20,76.09,17332828,373136,374646,74524),(16,21,65.45,21737843,1016784,1101452,1011693),(17,22,71.60,32408610,750552,852153,907142),(18,23,73.59,28453160,780841,833826,611346),(19,24,72.19,18458034,644123,792810,2759310),(20,25,69.96,22329683,1116949,1177113,1135893),(21,26,67.98,17342403,1048746,1186511,2625062),(22,27,69.69,19360028,935045,1082667,1028253),(23,28,71.81,16674785,557588,611396,924234),(24,29,77.86,17531359,666808,700651,1574196),(25,30,73.25,24575475,782011,867949,381125),(26,31,72.92,21739930,668444,789424,2418140),(27,32,71.15,16848618,544494,806307,589260),(28,37,45.64,28749503,2103827,2204588,110479),(29,38,40.24,30578139,2800135,2971319,137396),(30,39,81.27,10744109,461519,506836,1696450),(31,40,73.62,17498113,1179280,1293576,126848),(32,41,74.25,21498607,808985,978013,791783),(33,43,83.67,6049123,100252,164997,1404033),(34,44,75.02,13238669,405007,475274,4105446),(35,45,52.06,49330687,205119,2015520,231328),(36,47,64.30,11008004,776955,677053,232627),(37,48,78.28,16055539,559253,644583,1646657),(38,50,61.49,50414471,1497918,1641502,366328),(39,51,62.99,38645296,1012812,1107047,615174),(40,52,69.82,62669829,310904,538959,1384470),(41,53,64.27,62192147,936600,1111625,1628352),(42,54,64.94,59083868,1433939,1623180,1979082),(43,55,66.11,59516389,845745,1110282,1482382),(44,56,68.90,16275624,195788,210944,50398),(45,57,67.47,12468590,-82581,84903,466009),(46,58,70.66,13863855,140596,200984,1590807),(47,59,65.49,31886295,673792,873267,1311700),(48,60,66.71,20653971,365997,512033,2726366),(49,61,60.96,37510907,1045201,1149092,1793434),(50,68,48.12,38769774,2223423,2108787,752872),(51,69,31.28,17596475,2270828,2275602,1323607),(52,70,46.24,26244166,1054513,1306830,450304),(53,72,61.25,11247455,1695005,2003703,926249),(54,73,72.75,35666084,738272,891349,228179),(55,74,78.19,10121619,541416,600214,1564067),(56,75,58.41,8025230,370103,410393,636012),(57,76,70.17,5292465,18207,89802,1748232),(58,77,87.59,4771675,41708,61634,433461),(59,78,69.98,6641889,122223,208189,865543),(60,79,64.26,16166611,369019,554268,495846),(61,80,43.47,35652465,833833,1050063,1061794),(62,88,68.56,12961216,720169,868149,951386),(63,89,77.41,11746313,44673,220635,667135),(64,90,76.44,16015656,483204,616918,449466),(65,91,91.46,4870172,114866,143173,1653037),(66,92,85.98,5287325,150720,184400,3480457);
/*!40000 ALTER TABLE `industry_standards` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `major_industry_classes`
--

DROP TABLE IF EXISTS `major_industry_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `major_industry_classes` (
  `code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `major_industry_classes`
--

LOCK TABLES `major_industry_classes` WRITE;
/*!40000 ALTER TABLE `major_industry_classes` DISABLE KEYS */;
INSERT INTO `major_industry_classes` VALUES ('A','農業，林業'),('B','漁業'),('C','鉱業，採石業，砂利採取業'),('D','建設業'),('E','製造業'),('F','電気・ガス・熱供給・水道業'),('G','情報通信業'),('H','運輸業，郵便業'),('I','卸売業・小売業'),('J','金融業・保険業'),('K','不動産業，物品賃貸業'),('L','学術研究，専門・技術サービス業'),('M','宿泊業，飲食サービス業'),('N','生活関連サービス業，娯楽業'),('O','教育，学習支援業'),('P','医療，福祉'),('Q','複合サービス事業'),('R','サービス業（他に分類されないもの）'),('S','公務（他に分類されるものを除く）'),('T','分類不能の産業');
/*!40000 ALTER TABLE `major_industry_classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `middle_industry_classes`
--

DROP TABLE IF EXISTS `middle_industry_classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `middle_industry_classes` (
  `code` int(10) unsigned NOT NULL,
  `major_code` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`code`),
  KEY `middle_industry_classes_major_code_foreign` (`major_code`),
  CONSTRAINT `middle_industry_classes_major_code_foreign` FOREIGN KEY (`major_code`) REFERENCES `major_industry_classes` (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `middle_industry_classes`
--

LOCK TABLES `middle_industry_classes` WRITE;
/*!40000 ALTER TABLE `middle_industry_classes` DISABLE KEYS */;
INSERT INTO `middle_industry_classes` VALUES (1,'A','農業'),(2,'A','林業'),(3,'B','漁業（水産養殖業を除く）'),(4,'B','水産養殖業'),(5,'C','鉱業，採石業，砂利採取業'),(6,'D','総合工事業'),(7,'D','職別工事業（設備工事業を除く）'),(8,'D','設備工事業'),(9,'E','食料品製造業'),(10,'E','飲料・たばこ・飼料製造業'),(11,'E','繊維工業'),(12,'E','木材・木製品製造業（家具を除く）'),(13,'E','家具・装備品製造業'),(14,'E','パルプ・紙・紙加工品製造業'),(15,'E','印刷・同関連業'),(16,'E','化学工業'),(17,'E','石油製品・石炭製品製造業'),(18,'E','プラスチック製品製造業（別掲を除く）'),(19,'E','ゴム製品製造業'),(20,'E','なめし革・同製品・毛皮製造業'),(21,'E','窯業・土石製品製造業'),(22,'E','鉄鋼業'),(23,'E','非鉄金属製造業'),(24,'E','金属製品製造業'),(25,'E','はん用機械器具製造業'),(26,'E','生産用機械器具製造業'),(27,'E','業務用機械器具製造業'),(28,'E','電子部品・デバイス・電子回路製造業'),(29,'E','電気機械器具製造業'),(30,'E','情報通信機械器具製造業'),(31,'E','輸送用機械器具製造業'),(32,'E','その他の製造業'),(33,'F','電気業'),(34,'F','ガス業'),(35,'F','熱供給業'),(36,'F','水道業'),(37,'G','通信業'),(38,'G','放送業'),(39,'G','情報サービス業'),(40,'G','インターネット附随サービス業'),(41,'G','映像・音声・文字情報制作業'),(42,'H','鉄道業'),(43,'H','道路旅客運送業'),(44,'H','道路貨物運送業'),(45,'H','水運業'),(46,'H','航空運輸業'),(47,'H','倉庫業'),(48,'H','運輸に附帯するサービス業'),(49,'H','郵便業（信書便事業を含む）'),(50,'I','各種商品卸売業'),(51,'I','繊維・衣服等卸売業'),(52,'I','飲食料品卸売業'),(53,'I','建築材料，鉱物金属材料等卸売業'),(54,'I','機械器具卸売業'),(55,'I','その他の卸売業'),(56,'I','各種商品小売業'),(57,'I','織物・衣服・身の回り品小売業'),(58,'I','飲食料品小売業'),(59,'I','機械器具小売業'),(60,'I','その他の小売業'),(61,'I','無店舗小売業'),(62,'J','銀行業'),(63,'J','協同組織金融業'),(64,'J','貸金業，クレジットカード業等非預金信用機関'),(65,'J','金融商品取引業，商品先物取引業'),(66,'J','補助的金融業等'),(67,'J','保険業（保険媒介代理業，保険サービス業を含む）'),(68,'K','不動産取引業'),(69,'K','不動産賃貸業・管理業'),(70,'K','物品賃貸業'),(71,'L','学術・開発研究機関'),(72,'L','専門サービス（他に分類されないもの）'),(73,'L','広告業'),(74,'L','技術サービス業（他に分類されないもの）'),(75,'M','宿泊業'),(76,'M','飲食店'),(77,'M','持ち帰り・配達飲食サービス業'),(78,'N','洗濯・理容・美容・浴場業'),(79,'N','その他の生活関連サービス業'),(80,'N','娯楽業'),(81,'O','学校教育'),(82,'O','その他の教育，学習支援業'),(83,'P','医療業'),(84,'P','保健衛生'),(85,'P','社会保険・社会福祉・介護事業'),(86,'Q','郵便局'),(87,'Q','協同組合（他に分類されないもの）'),(88,'R','廃棄物処理業'),(89,'R','自動車整備業'),(90,'R','機械等修理業（別掲を除く）'),(91,'R','職業紹介・労働者派遣業'),(92,'R','その他の事業サービス業'),(93,'R','政治・経済・文化団体'),(94,'R','宗教'),(95,'R','その他のサービス業'),(96,'R','外国公務'),(97,'S','国家公務'),(98,'S','地方公務'),(99,'T','分類不能の産業');
/*!40000 ALTER TABLE `middle_industry_classes` ENABLE KEYS */;
UNLOCK TABLES;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-20 19:47:20
