import { test, expect, Page } from '@playwright/test';

// 1. Route Protection to Specific Pages
test('guest is redirected from /profile to /auth', async ({ page }: { page: Page }) => {
  await page.goto('/profile');
  await expect(page).toHaveURL(/\/auth/);
});

test('signed-in user can access /profile', async ({ page }: { page: Page }) => {
  // Sign in first
  await page.goto('/auth');
  await page.getByLabel('Email address').fill('testuser@example.com');
  await page.getByLabel('Password').fill('testpassword');
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForURL('/');
  await page.goto('/profile');
  await expect(page).toHaveURL('/profile');
  await expect(page.getByText(/profile details/i)).toBeVisible();
});

// 2. Conditional Navigation/UI for Guests vs. Signed-in Users
test('header shows Sign In/Sign Up for guests', async ({ page }: { page: Page }) => {
  await page.goto('/');
  await expect(page.getByLabel('Sign In')).toBeVisible();
  await expect(page.getByLabel('Sign Up')).toBeVisible();
});

test('header shows Profile/Logout for signed-in users', async ({ page }: { page: Page }) => {
  await page.goto('/auth');
  await page.getByLabel('Email address').fill('testuser@example.com');
  await page.getByLabel('Password').fill('testpassword');
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForURL('/');
  await expect(page.getByLabel('Profile')).toBeVisible();
  await expect(page.getByLabel('Logout')).toBeVisible();
});

// 3. Guest Checkout or Sign-in Prompts to the Checkout Flow
test('guest sees guest checkout prompt on /checkout', async ({ page }: { page: Page }) => {
  // Add an item to cart (simulate localStorage or use UI)
  await page.goto('/books/silver-feet-and-her-wonder');
  // Assume there is an Add to Cart button
  await page.getByRole('button', { name: /add to cart/i }).click();
  await page.goto('/checkout');
  await expect(page.getByText(/guest checkout/i)).toBeVisible();
  await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
});

test('signed-in user does not see guest checkout prompt', async ({ page }: { page: Page }) => {
  await page.goto('/auth');
  await page.getByLabel('Email address').fill('testuser@example.com');
  await page.getByLabel('Password').fill('testpassword');
  await page.getByRole('button', { name: /sign in/i }).click();
  await page.waitForURL('/');
  await page.goto('/checkout');
  await expect(page.getByText(/guest checkout/i)).not.toBeVisible();
}); 