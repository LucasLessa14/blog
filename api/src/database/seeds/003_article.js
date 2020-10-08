exports.seed = knex => 
  knex('articles').del()
    .then(function () {
      return knex('articles').insert([
        { 
          id: 1,
          title: 'Personagem mais forte de DBZ',
          slug: 'Personagem-mais-forte-de-DBZ',
          body: 'O que é Lorem Ipsum ...'
        },{
          id: 2,
          title: 'Como acender um LED com Arduino UNO',
          slug: 'Como-acender-um-LED-com-Arduino-UNO',
          body: '<p>Nessa prática, você conhecerá o LED e aprenderá a ligá-lo utilizando o seu arduino. O LED é um componente capaz de emitir luz quando ligado corretamente.</p><p>Para isso, uma de suas pernas deve ser conectada a um resistor e o conjunto deve ser conectado a 5v (no lado da maior perna do LED) e GND (no lado da menor perna). Assim, podemos a ligação pode ser feita de duas maneiras:</p><p>5v &#10137; resistor &#10137; (perna maior do LED) e (perna menor do LED) &#10137; GND</p><p>5v &#10137; (perna maior do LED) e (perna menor do LED) &#10137; resistor &#10137; GND</p><h2>Materiais</h2> <ul> <li><p>- 1x Arduino</p></li><li><p>- 1x Cabo USB A/B</p></li><li><p>- 1x Protoboard</p></li><li><p>- 1x Resistor 330Ω</p></li><li><p>- 1x Led (Qualquer cor)</p></li><li><p>- Alguns Jumpers</p></li></ul> <h2>Montagem</h2> <p>TEM UMA IMAGEM AQUI</p><h2>Grandezas elétricas</h2> <p>Vamos entender algumas grandezas elétricas importantes:</p><h3>Tensão elétrica:</h3> <p>É a grandeza física medida em <strong>volts (v)</strong>. Dois estados diferentes, 5v e 0v (também chamados de VCC e GND) são usados para controlar os diversos componentes eletrônicos.</p><p>A diferença de tensão entre dois pontos faz com que ocorra uma corrente elétrica.</p><h3>Corrente elétrica:</h3> <p>É a grandeza física medida em <strong>amperes (a)</strong>. É o responsável por ligar o LED: uma corrente passando da maior perna em direção à menor perna o faz brilhar (mas uma corrente muito alta irá queimar o LED).</p><h3>Resistência elétrica:</h3> <p>É a grandeza elétrica medida em <strong>ohms (Ω)</strong>. A diferença na tensão entre dois pontos gera uma corrente elétrica, mas essa corrente é limitada pela resistência entre esses dois pontos.</p><p>Como uma corrente muito alta pode queimar o LED, é usado um resistor para limitar essa corrente que passa pelo LED, fazendo com que funcione corretamente.</p><h2>Agradecimentos</h2> <p>Obrigado por ter lido! Espero que tenha gostado.</p>'
        }
      ]);
    });

