import { firefox, Browser, Page } from 'playwright';
import { describe, it, expect } from '@jest/globals'; // Import Jest types

describe('Website Navigation Test', () => {
  let browser: Browser; // Explicit type annotation
  let page: Page; // Explicit type annotation

  beforeAll(async () => {
    browser = await firefox.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  it('should change background color and display text on navigation', async () => {
    await page.goto('http://localhost:5173'); // Replace with your local development URL

    // Click the "About Me" button
    await page.click('button:has-text("About Me")');

    // Wait for the background color to change
    await page.waitForSelector('.body[style="background-color: rgb(241, 196, 15);"]');

    // Check if the section text is displayed
    const sectionText = await page.textContent('h1');
    expect(sectionText).toBe('About Me');

    // Click the "Projects" button
    await page.click('button:has-text("Projects")');

    // Wait for the background color to change
    await page.waitForSelector('.body[style="background-color: rgb(52, 152, 219);"]');

    // Check if the section text is displayed
    const sectionTextProjects = await page.textContent('h1');
    expect(sectionTextProjects).toBe('Projects');

    // Click the "Other" button
    await page.click('button:has-text("Other")');

    // Wait for the background color to change
    await page.waitForSelector('.body[style="background-color: rgb(231, 76, 60);"]');

    // Check if the section text is displayed
    const sectionTextOther = await page.textContent('h1');
    expect(sectionTextOther).toBe('Other');
  });
});
