import { test, expect } from '@playwright/test';
import PaginaInicialPage from '../pages/test.page';

let paginaInicial: any

test.describe('iCasei - Automation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://teste-qa.icasei.com.br/')
    paginaInicial = new PaginaInicialPage(page);
  })

  test('Realizar validaçoes pagina inicial', async ({ page }) => {
    await test.step('Vaidaçoes pagina inicial', async () => {
      await paginaInicial.realizarValidacoesPaginaInicial()
    })
  })

  // test('', async ({ page }) => {
  //   await test.step('', async () => {

  //   })
  // })
})