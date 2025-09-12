import { test, expect } from '@playwright/test';

test.describe('Portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the main sections', async ({ page }) => {
    // Check header
    await expect(page.getByRole('heading', { name: 'De conectar con personas a conectar con tecnología' })).toBeVisible();
    
    // Check navigation
    await expect(page.getByRole('link', { name: 'Historia' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Superpoderes' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Proyectos' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Futuro' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contacto' })).toBeVisible();
  });

  test('should navigate to sections', async ({ page }) => {
    // Test navigation to Historia
    await page.getByRole('link', { name: 'Historia' }).click();
    await expect(page.getByRole('heading', { name: 'Mi Historia' })).toBeVisible();
    
    // Test navigation to Proyectos
    await page.getByRole('link', { name: 'Proyectos' }).click();
    await expect(page.getByRole('heading', { name: 'Proyectos' })).toBeVisible();
  });

  test('should open and close project modal', async ({ page }) => {
    // Wait for projects to load
    await page.getByRole('heading', { name: 'Proyectos' }).waitFor();
    
    // Click on first project
    const firstProject = page.locator('[data-testid="project-card"]').first();
    await firstProject.click();
    
    // Check modal is open
    await expect(page.getByRole('dialog')).toBeVisible();
    
    // Close modal with ESC
    await page.keyboard.press('Escape');
    await expect(page.getByRole('dialog')).not.toBeVisible();
  });

  test('should toggle dark mode', async ({ page }) => {
    // Check theme toggle button exists
    const themeToggle = page.getByRole('button', { name: 'Toggle theme' });
    await expect(themeToggle).toBeVisible();
    
    // Click to toggle theme
    await themeToggle.click();
    
    // Check if dark class is applied
    await expect(page.locator('html')).toHaveClass(/dark/);
  });

  test('should submit contact form', async ({ page }) => {
    // Navigate to contact section
    await page.getByRole('link', { name: 'Contacto' }).click();
    await page.getByRole('heading', { name: 'Contacto' }).waitFor();
    
    // Fill form
    await page.getByPlaceholder('Nombre').fill('Test User');
    await page.getByPlaceholder('Email').fill('test@example.com');
    await page.getByPlaceholder('Mensaje').fill('This is a test message');
    
    // Submit form
    await page.getByRole('button', { name: 'Enviar' }).click();
    
    // Check success message
    await expect(page.getByText('¡Gracias! Tu mensaje fue enviado correctamente.')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile view
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('button', { name: 'Toggle menu' })).toBeVisible();
    
    // Test desktop view
    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.getByRole('button', { name: 'Toggle menu' })).not.toBeVisible();
  });

  test('should have working skip to content link', async ({ page }) => {
    // Tab to skip link
    await page.keyboard.press('Tab');
    
    // Check skip link is focused
    const skipLink = page.getByRole('link', { name: 'Saltar al contenido principal' });
    await expect(skipLink).toBeFocused();
    
    // Press Enter to activate
    await page.keyboard.press('Enter');
    
    // Check main content is focused
    await expect(page.getByRole('main')).toBeFocused();
  });
});

