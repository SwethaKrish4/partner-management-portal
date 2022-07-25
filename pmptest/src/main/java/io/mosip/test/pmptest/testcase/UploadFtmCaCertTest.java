package io.mosip.test.pmptest.testcase;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.TimeoutException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
// Generated by Selenium IDE
//import org.junit.Test;
//import org.junit.Before;
//import org.junit.After;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import io.mosip.test.pmptest.utility.BaseClass;
import io.mosip.test.pmptest.utility.Commons;
import io.mosip.test.pmptest.utility.JsonUtil;

public class UploadFtmCaCertTest extends BaseClass {

	@Test(groups = "UFCC")
	public void uploadFtmCaCertCRUD() throws InterruptedException, AWTException {

		Commons.click(driver, By.xpath("//a[@href='#/pmp/resources/uploadcacert/upload']"));

		Commons.dropdown(driver, By.id("partnerDomain"), By.id("FTM"));

		Commons.clickAction(driver, By.xpath("//*[@type='button']"));
		
		StringSelection ss = new StringSelection("D:\\ftm.cer");


		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(ss, null);

		Robot robot = new Robot();

		robot.delay(250);
		robot.keyPress(KeyEvent.VK_ENTER); robot.keyRelease(KeyEvent.VK_ENTER);
		robot.keyPress(KeyEvent.VK_CONTROL); robot.keyPress(KeyEvent.VK_V);
		robot.keyRelease(KeyEvent.VK_V); robot.delay(250);
		robot.keyRelease(KeyEvent.VK_CONTROL); robot.keyPress(KeyEvent.VK_ENTER);
		robot.delay(250); robot.keyRelease(KeyEvent.VK_ENTER); robot.delay(250);
		Commons.click(driver, By.id("createButton"));



	}
}
