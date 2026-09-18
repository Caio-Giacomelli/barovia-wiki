# Importação da Wiki de Barovia (Sessões 01–10)

Arquivos desta pasta:

| Arquivo | O que é |
|---|---|
| `firestore-import.json` | **Bundle principal**, pronto para importar. Uma chave por coleção do Firestore. |
| `character-additions.json` | Adições sugeridas para as páginas dos PCs (que já existem no Firestore), por nome. |
| `import-to-firestore.html` | Página que lê o bundle e grava no Firestore (com dry-run). |
| `REVISAO.md` | Resumo legível de tudo, para conferência antes de importar. |

## Como o bundle está organizado

Cada chave de topo em `firestore-import.json` é uma coleção:

- `historicalNPCs`, `allies`, `villains`, `artifacts`, `books`, `landmarks` — cada objeto é um
  documento novo. Os IDs usam prefixo `new_` (mesma convenção que o site usa para itens criados pela
  interface), então **não colidem** com os documentos de índice numérico já existentes (ex.: PCs).
- `wikiSessionsFS` — os resumos completos das sessões (`s01`…`s10`).
- `cities` — usa IDs existentes do mapa (ex.: `vila-da-barovia`) e é gravado com **merge**, então
  só adiciona/atualiza os campos incluídos, sem apagar o resto.
- `customPOIs` — pontos de interesse sugeridos para locais ainda sem marcador no mapa. **Revise as
  coordenadas `x`/`y`** antes de importar (o checkbox vem desmarcado por padrão).
- `quests` — as demandas (concluídas e em aberto).

Chaves auxiliares como `_meta` e `_comentario` são ignoradas na importação.

## Passo a passo

1. **Revise** `REVISAO.md` e, se quiser, edite `firestore-import.json`.
2. Sirva a pasta por um servidor local (o `fetch` do JSON não funciona com `file://`):
   ```powershell
   python -m http.server 8000
   ```
   Depois abra `http://localhost:8000/wiki-import/import-to-firestore.html`.
   > O `firebase-config.js` real do projeto é carregado por `../js/firebase-config.js`.
3. Clique em **Simular (dry-run)** para ver a lista de documentos sem gravar nada.
4. Se estiver ok, clique em **Importar de verdade**. A gravação usa `merge`, então pode ser repetida
   com segurança (é idempotente para estes IDs fixos).
5. Recarregue o site da wiki: os itens aparecem nas seções (o app já carrega `new_*` do Firestore).

## Personagens dos jogadores

`character-additions.json` traz os "atos relevantes" de cada PC. Como as páginas deles já existem no
Firestore com índice numérico (que eu não tenho como ler daqui), a importação automática **não**
mexe neles. Para aplicar:
- pelo **editor da wiki** (botão de edição na página do personagem), adicionando os detalhes; ou
- me diga o índice/nome de cada PC e eu preparo um segundo bundle já mesclado.

## Regras do Firestore

Confira `firestore.rules` na raiz do projeto: a importação precisa de permissão de escrita nas
coleções acima. Se as regras exigirem autenticação, faça a importação com uma sessão autenticada ou
libere temporariamente a escrita durante o processo.
