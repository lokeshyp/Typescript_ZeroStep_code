import { test, expect } from '@playwright/test';
import { ai } from '@zerostep/playwright'

test('expected title', async ({ page }) => {

   await page.goto('https://www.flipkart.com/');
   await ai('Search iphone 17 mobiles in search bar then click enter button ', { page, test })
  await page.waitForTimeout(5000); 
   await ai('Click on the first product from the search results', { page, test})
   await ai('Click Add to cart button', { page, test})
   await page.waitForTimeout(5000); 

});
