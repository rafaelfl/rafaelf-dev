---
title: "Como liberar espaço no Mac: 94,5 GB, e a IA não apagou nada"
subtitle: "Armazenamento do Mac cheio? Como limpei o Mac com o Claude e comandos só de leitura: cache do Xcode, DerivedData e 48 GB de simuladores antigos."
date: "2026-11-23"
thumb: "/images/blog-free-mac-disk-space-pt.png"
---

O armazenamento do meu Mac estava cheio, e eu precisava liberar espaço nele. Resolvi numa noite com o Claude Desktop e recuperei 94,5 GB. O que eu quero mostrar não é o número, e sim como cheguei lá sem dar a uma IA permissão para apagar qualquer coisa no meu disco.

## Resumo

- O Mac dizia que estava sem memória de aplicativo. O problema real era o disco cheio.
- Pedi ao Claude Desktop uma lista do que dava para apagar, não uma limpeza.
- Neguei acesso às minhas pastas. Ele me passou comandos só de leitura, e eu mesmo rodei.
- O que mais liberou espaço: runtimes antigos do simulador de iOS (40,3 GB), DerivedData e Archives do Xcode (13 GB cada) e a `~/Library/Caches` (12,7 GB).

## Por que o Mac dizia "o seu sistema está sem memória de aplicativo"

Durante semanas, o macOS me avisava que o sistema estava sem memória de aplicativo e pedia para eu fechar apps. Só que o problema não era memória.

Quando a RAM acaba, o macOS move parte do que está na memória para o disco. Isso se chama **swap**. O meu disco estava quase cheio, então o macOS não tinha mais onde colocar nada.

## O prompt que usei

Este é o prompt:

> preciso liberar espaço no meu computador (MacOS). identifique arquivos ou diretórios que podem ser apagados sem prejuízo (como logs de sistema, cache e diretórios node_modules) e faça uma lista deles contendo o tamanho de cada um (**NÃO APAGUE NADA SEM QUE EU PEÇA**).

A parte importante é a última. Uma lista é barata. Um arquivo apagado por engano pode não ter volta.

## Por que não dei à IA acesso às minhas pastas

O Claude Desktop pediu acesso à minha pasta pessoal para medir tudo sozinho. Eu neguei. Com esse acesso, ele poderia ter apagado tudo por conta própria.

Sem ele, o Claude me passou comandos só de leitura (`du`, `find`, `ls`, `xcrun simctl list`). Eu rodava no terminal e colava a saída na conversa.

É mais lento do que deixar o agente ler o disco. Em troca, cada comando passou pelos meus olhos antes de rodar.

## Passo 1: descubra o que está enchendo o armazenamento do Mac

O `du` vem de "disk usage" (uso de disco). Ele mede quanto espaço cada pasta ocupa. Comece pelo geral e só desça onde o espaço está:

```bash
du -sh ~/* ~/.[!.]* 2>/dev/null | sort -rh | head -30
```

No meu Mac, só a `~/Library` tinha 118 GB. Então o próximo comando olhou dentro dela:

```bash
du -sh ~/Library/* 2>/dev/null | sort -rh | head -15
```

| Pasta | Tamanho |
|---|---|
| ~/Library/Developer | 41 GB |
| ~/Library/Application Support | 34 GB |
| ~/Library/Android | 15 GB |
| ~/Library/Caches | 14 GB |
| ~/Library/Containers | 10 GB |

## Passo 2: limpe os caches da ~/Library/Caches

A `~/Library/Caches` tinha 14 GB: cache de navegador, índices do JetBrains, navegadores do Playwright, caches do Homebrew, Yarn, pnpm e pip, e restos de atualização de apps. Tudo isso é recriado quando precisar. Eu limpei e ela caiu para 1,3 GB.

Uma coisa que gostei aqui: quando o Claude mediu a pasta de novo e viu 1,3 GB, ele avisou que o número tinha mudado e que ele não tinha apagado nada. Perguntou o que tinha acontecido em vez de levar o crédito.

**Não mexa** em `~/Library/Containers`, `Preferences` nem `Keychains`. Elas guardam dados e configurações reais dos apps, não cache.

## Passo 3: como apagar o cache do Xcode (DerivedData, Archives, DeviceSupport)

```bash
du -sh ~/Library/Developer/Xcode/* 2>/dev/null | sort -rh
```

Primeiro, o que é cada pasta:

- **DerivedData** é onde o Xcode guarda o resultado dos seus builds. Apagar a DerivedData é o jeito mais comum de limpar o cache do Xcode.
- **iOS DeviceSupport** guarda os arquivos que o Xcode prepara para cada iPhone ou iPad que você conecta para depurar apps.
- **Archives** são os builds empacotados que o Xcode cria quando você publica um app.

| Pasta | Tamanho | Risco |
|---|---|---|
| DerivedData | 13 GB | Seguro. Cache de compilação, recriado no próximo build (esse primeiro build fica mais lento). Feche o Xcode antes. |
| Archives | 13 GB | Depende de você. Veja abaixo. |
| iOS DeviceSupport | 8,3 GB | Seguro. É baixado de novo quando você conecta o aparelho. |

**Sobre os Archives:** eles guardam os arquivos **dSYM**, os símbolos que transformam um crash report em nomes de funções legíveis. Você precisa deles para ler os crash reports de um app publicado. Se você publica apps, mantenha pelo menos o archive da última versão lançada. Depois de apagados, eles não voltam, a não ser que você tenha backup.

## Passo 4: como apagar simuladores antigos do iOS

Esse foi o maior achado: 48 GB que nenhuma busca nas pastas mostrava.

Um **runtime do simulador** é a cópia do iOS que o simulador do Xcode roda, um para cada versão do iOS. Esses runtimes não ficam na sua pasta pessoal, então nenhum `du` em `~` vai mostrá-los. Por isso esse espaço passa despercebido, e por isso os Ajustes de Armazenamento costumam jogá-lo na categoria genérica "Dados do Sistema". Só este comando mostrou:

```bash
xcrun simctl runtime list
```

Eu tinha 6 runtimes (iOS 18.0, 18.1, 18.2, 18.4, 18.5 e 26.4.1), com 48,2 GB no total. O Xcode baixa qualquer um deles de novo quando você precisar, então o único risco é esperar o download.

Há dois jeitos de remover:

- **Pelo Xcode:** Settings > Components (Platforms nas versões mais antigas), e o botão de menos ao lado de cada versão.
- **Pelo terminal:** `xcrun simctl runtime delete <ID>`, usando os IDs do seu próprio `runtime list`. É definitivo, sem Lixeira, então confira os IDs duas vezes.

Fiquei só com o iOS 26.4.1 (7,9 GB).

### Limpe os simuladores órfãos

Remover runtimes deixa simuladores órfãos para trás: aparelhos cuja versão do iOS não existe mais. Eu tinha 12 deles, marcados como "unavailable", e um comando limpa todos:

```bash
xcrun simctl delete unavailable
```

## A conta final

Perguntei ao Claude quanto espaço o prompt dele tinha economizado. A resposta foi "nenhum": quem apagou fui eu, não ele. Depois ele revisou a nossa conversa e comparou cada pasta antes e depois:

| Item | Antes | Depois | Liberado |
|---|---|---|---|
| Runtimes do simulador de iOS | 48,2 GB | 7,9 GB | 40,3 GB |
| Xcode DerivedData | 13 GB | removida | 13 GB |
| Xcode Archives | 13 GB | 0 B | 13 GB |
| ~/Library/Caches | 14 GB | 1,3 GB | 12,7 GB |
| Xcode iOS DeviceSupport | 8,3 GB | removida | 8,3 GB |
| Simuladores (CoreSimulator) | 7,2 GB | 35 MB | 7,2 GB |
| **Total** | | | **~94,5 GB** |

São valores arredondados do `du`, medidos em momentos diferentes, então trate o total como estimativa. Depois disso o disco ficou com 124 GB livres, e eu finalmente consegui instalar a atualização do macOS 27.2.1.

## Checklist rápido para limpar o Mac

1. Rode o `du` na pasta pessoal e depois na maior pasta dentro dela.
2. Limpe a `~/Library/Caches`. Não mexa em Containers, Preferences e Keychains.
3. Apague a DerivedData e a iOS DeviceSupport do Xcode. Decida sobre os Archives.
4. Rode `xcrun simctl runtime list` e remova as versões do iOS que você não usa.
5. Rode `xcrun simctl delete unavailable`.

## O que eu levo disso

- **Peça uma lista, não uma limpeza.** "Não apague nada sem que eu peça" transforma o agente num analista, e um analista não quebra nada.
- **Vá do geral para o específico.** Meça a pasta pessoal e depois só o maior galho, um nível por vez.
- **Olhe fora da pasta pessoal.** Se você desenvolve para iOS, o `xcrun simctl runtime list` pode mostrar onde está a maior parte do seu espaço.
- **Saiba o que é seguro antes de apagar.** Cache e resultado de build voltam. Containers, keychains e Archives podem não voltar.

Revisar uma lista e apagar cada pasta à mão levou mais tempo do que deixar o agente fazer. Mas dar a um agente permissão para apagar em qualquer lugar do meu disco é um risco que eu não quis correr só por velocidade.

## Dica: Mole, um limpador open-source para Mac

Se você precisa de uma limpeza maior, existe o [Mole](https://github.com/tw93/mole), um limpador open-source para Mac (e PC), com ferramenta de linha de comando e app nativo. Ainda não testei, mas pretendo testar em breve. Segundo o README, ele faz o que eu fiz à mão:

```bash
brew install mole
mo analyze          # explorador visual do disco, como os passos com du acima
mo clean --dry-run  # mostra o que a limpeza removeria, sem remover nada
```

O `--dry-run` foi o que me chamou a atenção: é a mesma regra de "me mostre a lista primeiro" do meu prompt. Também dá para instalar com um agente de IA. O README sugere pedir ao agente (em inglês):

> Install Mole for me by reading https://raw.githubusercontent.com/tw93/Mole/main/llms.txt

Ele também oferece uma skill para Claude Code, Codex e Cursor que faz o agente rodar toda limpeza com `--dry-run` antes de remover qualquer coisa.

Fui direto ao Claude porque imaginei que limpar só alguns diretórios já liberaria o espaço que eu precisava, e foi o que aconteceu. Para uma limpeza massiva, eu provavelmente testaria o Mole.

## Perguntas frequentes

### Por que o Mac diz que o sistema está sem memória de aplicativo?

No meu caso não era memória. O disco estava quase cheio, e o macOS não tinha mais espaço para o swap. Liberar espaço no disco resolveu.

### É seguro apagar a DerivedData?

Sim. É um cache de compilação, e o Xcode recria tudo no próximo build. Esse primeiro build fica mais lento. Feche o Xcode antes de apagar.

### Posso apagar os simuladores antigos do iOS?

Pode. O Xcode baixa qualquer runtime de novo quando você precisar, então o único custo é o tempo do download. Remova pelos Components do Xcode ou com `xcrun simctl runtime delete`, e depois rode `xcrun simctl delete unavailable` para os órfãos.
