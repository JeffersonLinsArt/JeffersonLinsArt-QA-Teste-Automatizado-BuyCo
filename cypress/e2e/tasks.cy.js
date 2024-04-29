describe('Teste QA Jefferson Lins', () => {
    it('Visitar site, verificar title', () => {
       cy.visit('https://oip-383-bugs-cave.buyco.com.br')
       cy.title().should('eq', 'Calculadora de Valuation - BuyCo')
    })
  
    it('Verificar porcentagem valor inicial 0%', () => {
       cy.visit('https://oip-383-bugs-cave.buyco.com.br')
       cy.contains('0%').should('be.visible')
    })
    it('Link logo', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.get('.tw-w-24').invoke('removeAttr', 'target').click()
        cy.wait(1000) 
        cy.visit('https://buyco.com.br').then(() => {
        cy.url().should('eq', 'https://buyco.com.br/')
        })
    })
      
    it('Link Sobre nós', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Sobre nós').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/sobre-nos/')
    })
    it('Link Blog', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Sobre nós').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/blog/')
    })
    it('Link Contato', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Contato').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/contato/')
    }) 
    it('Link M&A', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('M&A').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/fusoes-e-aquisicoes/')
    })  
    it('Link Avaliar', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Avaliar').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/avaliar/')
    })  
    it('Link Vender', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Vender').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/vender/')
    })  
    it('Link Comprar', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Comprar').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/comprar/')
    })  
    it('Link Vagas', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Vagas').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/vagas/')
    })        
    it('Link Buy.Cast', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('Buy.Cast').invoke('removeAttr', 'target').click() 
        cy.wait(5000) 
        cy.url().should('eq', 'https://buyco.com.br/buycast/')
    })   
      
    it('Antes de começar-Avançar', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('button', 'Avançar').click()
    })
    
    it('Motivo da Avaliação', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Mensal').click()
        cy.get('.tw-flex-wrap > :nth-child(1)').click() //Vender
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(2)').click() //Dissolução
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(3)').click() //Aposentadoria
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(4)').click() //Alteração no Quadro de Sócios
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(5)').click() //Captação de Investimentos
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(6)').click() //Negociar Dívidas
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(7)').click() //Acompanhamento
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
        cy.get('.tw-flex-wrap > :nth-child(8)').click() //Outro
        cy.contains('button', 'Avançar').click()
        cy.contains('Para preencher a etapa Resultados primeiro preencha: Motivo da Avaliação.').should('be.visible')
        cy.contains('button', 'Voltar').click()
        cy.get('#input-115').click().type('Motivo')
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
    })
    it('Resultados', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Anual').click()
        cy.get('.tw-flex-wrap > :nth-child(8)').click() //Outro
        cy.get('#input-12').click().type('Motivo')
        cy.contains('button', 'Avançar').click()
        cy.wait(1000)
        cy.contains('14%').should('be.visible') // verificar se a porcetagem se comportou como deve ao avançar a etapa
        cy.get('.v-form > :nth-child(1) > .tw-bg-white').click()
        cy.contains('Avançado').should('be.visible')
        cy.contains('Esse valor deve ser pelo menos R$ 1.000').should('be.visible')
        cy.get('#input-17').click().type('2000')
        cy.contains('29%').should('be.visible') // verificar se a porcetagem se comportou como deve ao avançar a etapa
        cy.contains('Despesas').should('be.visible')
        cy.get('.v-form > :nth-child(1) > .tw-bg-white').click()
        cy.contains('Simples').should('be.visible')
        cy.contains('button', 'Avançar').click()
        cy.get('#input-45').click().type('2000')
        cy.get(':nth-child(2) > .tw-mt-3 > .v-btn > .v-btn__content > .mdi-help-circle-outline').click()
        cy.contains('Nesse campo você deve preencher os valores referentes a estoques e almoxarifado').should('be.visible')
        cy.contains('dolor et').should('be.visible')
        cy.contains('button', 'Fechar').click() 
        cy.get('#input-48').click().type('2000')    
        cy.get(':nth-child(4) > .tw-mt-3 > .v-btn > .v-btn__content > .mdi-help-circle-outline').click()
        cy.wait(1000)
        cy.contains('Neste campo você deve preencher o valor total que você possui em imóveis, computadores, mesas, maquinários, equipamentos, etc.').should('be.visible')
        cy.contains('button', 'Fechar').click() 
        cy.contains('43%').should('be.visible') // verificar se a porcetagem se comportou como deve ao avançar a etapa
        cy.contains('button', 'Avançar').click()
    })
})
