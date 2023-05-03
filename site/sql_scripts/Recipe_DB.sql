CREATE TABLE `grandmas_recipe_book`.`recipes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Recipe_Name` VARCHAR(45) NOT NULL,
  `Recipe_Description` VARCHAR(5000) NOT NULL,
  `IsVegan` TINYINT(1) NULL,
  `IsGlutenFree` TINYINT(1) NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `grandmas_recipe_book`.`tags` (
  `Recipe_Id` INT NOT NULL,
  `Tag_Id` INT NOT NULL AUTO_INCREMENT,
  `Tag` VARCHAR(45) NULL,
  PRIMARY KEY (`Tag_Id`),
  FOREIGN KEY (Recipe_Id) REFERENCES recipes(id) ON DELETE CASCADE
    );