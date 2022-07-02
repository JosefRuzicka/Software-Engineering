using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;

namespace TestProjectLaboratorio8
{
    public class Selenium
    {
        IWebDriver driver;
        [SetUp]
        public void startBrowser()
        {
            driver = new ChromeDriver(); 
        }

        [Test]
        public void PruebaIngresoCrearPaises() {
            ///Arrange
            /// Crea el driver de Chrome
            string URL = "https://localhost:44391/";
            /// Pone la pantalla en full screen
            driver.Manage().Window.Maximize();
            ///ACT
            /// Se va a la URL indicada
            driver.Url = URL;
            ///Assert
            ///Debe usar otro tipo de assert
            Assert.IsNotNull(driver);
            driver.FindElement(By.Id("paisesLink")).Click();
            driver.FindElement(By.Id("createButton")).Click();
            driver.FindElement(By.Id("Nombre")).SendKeys("Czechia");
            driver.FindElement(By.Id("Continente")).SendKeys("Europa");
            driver.FindElement(By.Id("Idioma")).SendKeys("Checo");
            driver.FindElement(By.Id("createButton")).Click();
        }

        //[TearDown]
        //public void closeBrowser()
        //{
        //    driver.Close();
       // }
    }
}
