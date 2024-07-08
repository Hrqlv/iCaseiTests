import { Page, expect } from '@playwright/test';

export default class PaginaInicialPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async realizarValidacoesPaginaInicial() {
        await expect(this.page.locator('h1[class="sc-8e489586-4 gUmMra"]').filter({ hasText: 'Seu site de casamento merece ser iCasei' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-b37cf185-6 fBIfKY"]').filter({ hasText: 'Prático, interativo e inesquecível!' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-7298c4a9-4 cmASwm"]').filter({ hasText: 'Modelos de layouts premium, feitos por quem entende' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-ecdb0b98-5 elKhlr"]').filter({ hasText: 'Lista de casamento em dinheiro' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-600d3a62-5 hlEbw"]').filter({ hasText: 'Fique por dentro de todos os detalhes!' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-de68d777-1 eEBsjM"]').filter({ hasText: 'Além de mais de 150 recursos incríveis!' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-dc5ae993-1 kPnJaP"]').filter({ hasText: 'iCasei na mídia' })).toBeVisible()
        await expect(this.page.locator('h2[class="sc-e540dd51-1 qomPe"]').filter({ hasText: 'Quem usou, aprovou e recomenda!' })).toBeVisible()   
    }

}
