# Revisão da Wiki de Barovia — Sessões 01 a 10

Este é o material extraído dos 10 resumos em `docs/` para você revisar **antes** de importar
no Firestore. Nada foi enviado ao banco ainda. Depois de aprovar, use
`import-to-firestore.html` (veja `README.md`).

Legenda: (Sxx) indica em qual sessão o fato aparece.

---

## 1. Personagens dos Jogadores (páginas já existentes)

Os PCs já têm páginas no Firestore. Não sei os índices atuais, então as adições sugeridas
estão em `character-additions.json`, indexadas por nome. Reveja e mescle na página de cada um.

- **Britta**, **Fael'ric Elwarin**, **Leena Elwarin**, **Njoldvar**, **Seraphin Alvorada**, **Yoca Melligiaco**

Resumo das adições (detalhes completos no JSON):
- Britta: bolsa de moedas (S05), exaustão nas Brumas (S04), camisa de malha (S06), ficou na mansão (S09).
- Fael: capas/cartola (S03), Mãos Mágicas no enterro (S04), pulseira de Gustavo (S06), anel nas celas (S07), Mensagem com Doru + flerte Vistani (S09).
- Leena: separou-se de Sir Charles (S01), caixa de prata (S03), escova de marfim (S05).
- Njoldvar: conteve Yoca (S04), ficou com os 3 pergaminhos (S04), jarro de vinho (S08), livro de ritos (S10).
- Seraphin: ajudou criança em Thalas'dar (S01), orbe/foco arcano + Manto de Proteção (S06), Hinos da Alvorada (S10).
- Yoca: senhor Bing (S01), acendeu lareiras (S03/S08), possuído por Rosa (S04), vários itens, Marcha dos Mortos (S09).

## 2. Personagens Históricos

- **Gustavo Durst** — patriarca, líder do culto Durst; ghast associado a ele (S06).
- **Elisabeth Durst** — matriarca, coautora do testamento.
- **Rosa (Rosa Durst)** — espírito; possuiu Yoca; encontrou descanso (S02-S04).
- **Cravo (Thorn Durst)** — espírito, irmão de Rosa (S02-S04).
- **Kolyan Indirovich** — burgomestre falecido; assinou as cartas; enterrado na S10.
- **Doru** — filho de Donavich, transformado, preso no porão; serve a Strahd (S09).
- **Gertruda** — filha desaparecida de Maria Louca; pista da boneca de Blinsky (S09).

## 3. Aliados

- **Ismark Kolyanovich** — pediu ajuda, acompanhou o grupo (S08-S10).
- **Irene Kolyana** — alvo de Strahd; motivo do convite; saiu da vila com o grupo (S09-S10).
- **Padre Donavich** — sacerdote da igreja, pai de Doru (S09).
- **Maria Louca** — mãe de Gertruda (S09).

## 4. Vilões

- **Strahd von Zarovich** — senhor de Barovia; recebeu o grupo (S02), telhado (S08).
- **Morgantha** — vendedora de pastéis; tentou levar Lucian; deu pistas (S08).
- **Lorghoth** — Shambling Mound da câmara ritual; o "monstro" das crianças (S07).

## 5. Artefatos / Itens

Casa da Morte (superior): caixa de prata com filigrana de ouro, 3 anéis de ouro, colar de platina
com topázio, capas pretas + cartola. Quarto secreto: 3 pergaminhos (Bênção, Proteção contra Veneno,
Arma Espiritual), 3 livros em branco. Catacumbas — cultistas: bolsa de pele humana com moedas,
3 ágatas de musgo + pano preto, tapa-olho com cornalina, escova de marfim. Líderes cultistas:
orbe de cristal (foco arcano), Manto de Proteção, camisa de malha, 4 poções de cura, frasco de fogo
alquímico, lanterna focada, ferramentas de ladrão, estojo de refeição, pulseira de Gustavo. Celas:
anel de ouro. Vila: jarro de vinho.

## 6. Livros e Relatos

- Carta selada de pedido de ajuda (S01) — com texto completo.
- Carta encontrada no cadáver (S02) — com texto completo.
- Carta de Strahd para Gustavo Durst (S04).
- Escritura da Casa Durst, Escritura do Moinho de Vento, Testamento dos Durst (S04).
- Três livros em branco de capa preta (S04).
- Livro de magias com capa de couro amarelo (S06) — com lista de magias.
- Mapa da cidade (S08).
- Hinos da Alvorada (S10), Divindades e Ritos Sagrados (S10).

## 7. Marcos Históricos

- O Culto da Casa Durst.
- A Morte das Crianças Durst.
- A Marcha dos Mortos.
- Ordem do Dragão Prateado.

## 8. Locais (Cities) e novos POIs

- **Vila da Baróvia** (`vila-da-barovia`): recebe descrição + notas com as interações do grupo (S02-S10). É um merge, não sobrescreve os campos existentes que você não mudar.
- **Novos POIs sugeridos** (`customPOIs`, precisam de coordenadas x/y no SVG antes de importar):
  Thalas'dar, Floresta Svalich, Portões de Baróvia.
- Locais citados que já existem no mapa (Argynvostholt, Acampamento Vistani do Lago Tser) foram
  referenciados nas demandas/vilões, mas não recebem novo POI.

## 9. Demandas (Quests)

Concluídas:
- Atender ao pedido de auxílio em Baróvia
- Investigar o monstro da Casa da Morte
- Sepultar Rosa e Cravo
- Impedir que Morgantha leve Lucian
- Enterrar Kolyan Indirovich

Em aberto:
- Proteger Irene e levá-la a um lugar seguro
- Investigar o desaparecimento de Gertruda
- Resolver a situação de Doru
- Encontro com a Vistani no Lago Tser
- Abrir o baú trancado das catacumbas
- Investigar as pistas de Morgantha (Vistani espiões, Lago Tser, Argynvostholt, Passagem Tsolenka)

## 10. Resumo das Sessões

Todas as 10 sessões viram documentos em `wikiSessionsFS` (ids `s01`…`s10`), com o texto integral
adaptado do resumo (parágrafos + confrontos/itens/encerramento). `journeyKey` = `barovia`.
Os campos `quote`/`quoteAuthor` ficaram em branco — preencha se quiser uma citação por episódio.

---

### Pontos que precisam da sua decisão

1. **journeyKey**: usei `"barovia"` em sessões e demandas. Se sua jornada/temporada tem outra chave,
   me diga e eu troco em tudo.
2. **Índices dos PCs**: para mesclar as adições nas páginas certas, preciso saber o índice (ou o
   nome exato) de cada personagem no Firestore. Ou você aplica manualmente pelo editor da wiki.
3. **Coordenadas dos novos POIs** (Thalas'dar, Floresta Svalich, Portões): defina x/y no SVG.
4. **Nomes/grafias**: confirme se prefere "Cravo" ou "Thorn", "Baróvia" ou "Barovia", etc.
