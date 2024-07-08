import { test, expect } from '@playwright/test';
import PaginaInicialPage from '../pages/test.page';

let paginaInicial: any

test.describe('', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://teste-qa.icasei.com.br/')
    paginaInicial = new PaginaInicialPage(page);
  })

  test('', async ({ page }) => {
    await test.step('', async () => {

    })
  })

  test('', async ({ page }) => {
    await test.step('', async () => {

    })
  })
})