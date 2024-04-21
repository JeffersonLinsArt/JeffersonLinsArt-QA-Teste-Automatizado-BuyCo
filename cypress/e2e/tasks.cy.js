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
    
    it.only('Motivo da Avaliação', () => {
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
        cy.get('#input-103').click().type('Motivo')
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Voltar').click()
        cy.wait(1000)
    })
    it.only('Resultados', () => {
        cy.visit('https://oip-383-bugs-cave.buyco.com.br')
        cy.contains('button', 'Avançar').click()
        cy.contains('button', 'Anual').click()
        cy.get('.tw-flex-wrap > :nth-child(8)').click() //Outro
        cy.get('#input-12').click().type('Motivo')
        cy.contains('button', 'Avançar').click()
        cy.wait(1000)
       // cy.contains('14%').should('be.visible') // verificar se a porcetagem se comportou como deve
        cy.get('[data-layer="Content"]').click()







    })
})
