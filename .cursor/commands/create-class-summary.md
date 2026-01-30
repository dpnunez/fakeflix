# Criar Resumo de Aula

Analise as aulas e alterações de código realizadas durante um curso, gerando um resumo estruturado e detalhado.

## Instruções

Você deve analisar commits de git e, opcionalmente, legendas de vídeo para criar um resumo completo de uma aula.

### Entrada de Dados

1. **Commits para Analisar** (opcional)
   - Se não for especificado, analise **apenas o último commit**
   - Se especificado, analise os commits indicados (pode ser um hash específico, range de commits, ou múltiplos commits)
   - Use `git log`, `git show`, e `git diff` para extrair informações

2. **Legenda do Vídeo da Aula** (opcional, mas altamente recomendado)
   - Se fornecida, use para extrair contexto, conceitos explicados e motivações das mudanças
   - Correlacione o conteúdo da legenda com as alterações de código

### Processo de Análise

1. **Identifique os commits** a serem analisados
2. **Extraia informações** de cada commit:
   - Mensagem do commit
   - Arquivos modificados, adicionados ou removidos
   - Diff detalhado das alterações
   - Data e autor (se relevante)

3. **Se houver legenda**, extraia:
   - Conceitos técnicos mencionados
   - Explicações sobre decisões de arquitetura
   - Comandos ou ferramentas apresentadas
   - Problemas resolvidos ou funcionalidades implementadas
   - **CRÍTICO:** Trade-offs discutidos pelo instrutor
   - **CRÍTICO:** Justificativas para decisões (por que fez X e não Y)
   - **CRÍTICO:** Avisos sobre erros comuns que desenvolvedores cometem
   - **CRÍTICO:** Contextos onde abordagens fazem ou não fazem sentido

4. **Correlacione** as alterações de código com os conceitos da legenda

5. **Quando houver legenda**, crie seções adicionais:
   - `💬 Justificativas do Instrutor` - com transcrições literais e timestamps
   - `🎓 Principais Lições do Instrutor` - com análise interpretativa e exemplos
   - `🎯 Reconciliando: Instrutor vs Boas Práticas` - análise crítica construtiva (opcional)

### Estrutura do Output

Gere um arquivo Markdown seguindo **exatamente** esta estrutura:

```markdown
# Aula [NÚMERO] - [TÍTULO DA AULA]

> **Data:** [DATA DO(S) COMMIT(S)]
> **Commits analisados:** `[HASH(ES) DOS COMMITS]`

## 📝 Resumo Geral

[Parágrafo resumindo o objetivo principal da aula e o que foi implementado/aprendido]

## 🎯 Conceitos Principais

- **[Conceito 1]**: [Breve explicação]
- **[Conceito 2]**: [Breve explicação]
- **[Conceito 3]**: [Breve explicação]

## 🔧 Alterações de Código

### Arquivos Modificados

#### `[caminho/do/arquivo]`
- **Tipo de alteração**: [Criado/Modificado/Removido]
- **Mudanças principais**:
  - [Descrição da mudança 1]
  - [Descrição da mudança 2]
- **Trecho relevante** (se aplicável):
  ```[linguagem]
  [código relevante]
  ```

#### `[outro/arquivo]`
- **Tipo de alteração**: [Criado/Modificado/Removido]
- **Mudanças principais**:
  - [Descrição da mudança]

### Resumo de Modificações

- **Arquivos criados**: [número] arquivo(s)
- **Arquivos modificados**: [número] arquivo(s)
- **Arquivos removidos**: [número] arquivo(s)
- **Linhas adicionadas**: [+número]
- **Linhas removidas**: [-número]

## 💡 Principais Mudanças Técnicas

1. **[Título da mudança 1]**
   - [Descrição detalhada]
   - Motivação: [por que foi feito]
   - Impacto: [como afeta o projeto]

2. **[Título da mudança 2]**
   - [Descrição detalhada]
   - Motivação: [por que foi feito]
   - Impacto: [como afeta o projeto]

## 💬 Justificativas do Instrutor (Transcrição do Curso)

> **IMPORTANTE:** Esta seção só deve ser incluída quando há legenda fornecida.

Extraia e organize as falas do instrutor que explicam decisões, trade-offs e justificativas técnicas. Use citações diretas com timestamps quando possível.

### [Tópico/Decisão 1]

> **Instrutor ([timestamp se disponível]):** "[Transcrição literal da fala do instrutor]"

> **Instrutor ([timestamp se disponível]):** "[Continuação ou fala relacionada]"

### [Tópico/Decisão 2]

> **Instrutor ([timestamp]):** "[Transcrição da explicação]"

**Foco especial em:**
- Justificativas para decisões de arquitetura
- Explicações de trade-offs (prós e contras de abordagens)
- Comparações entre diferentes soluções
- Avisos sobre erros comuns
- Contextos onde uma abordagem faz ou não faz sentido

## 🎓 Principais Lições do Instrutor

> **IMPORTANTE:** Esta seção é especialmente valiosa quando há legenda, mas pode ser criada apenas com análise de código.

Interprete e organize as lições mais importantes transmitidas pelo instrutor. Vá além da transcrição literal - analise e destaque os princípios fundamentais.

### [Princípio/Lição 1]

[Explicação detalhada do princípio ensinado]

**Insight importante:** [Análise do porque isso é relevante]

**Na prática:**
- ✅ [O que fazer]
- ❌ [O que evitar]

### [Princípio/Lição 2 - com exemplo de código]

> "[Citação marcante do instrutor, se houver]"

[Explicação do conceito]

**Anti-pattern comum:**
```typescript
// ❌ ERRADO - [Descrição do problema]
[código mostrando o anti-pattern]
```

**Pattern correto:**
```typescript
// ✅ CORRETO - [Descrição da solução]
[código mostrando a abordagem correta]
```

**Por que isso é crítico:**
- [Razão 1]
- [Razão 2]

### [Lição 3 - Trade-offs e Contexto]

> "[Citação do instrutor sobre o trade-off]"

**Mensagem:** [Interpretação da lição sobre balanceamento de decisões]

**Trade-offs apresentados:**
- **Abordagem A:**
  - ✅ Vantagens: [lista]
  - ❌ Desvantagens: [lista]
  - 💡 Quando usar: [contexto]

- **Abordagem B:**
  - ✅ Vantagens: [lista]
  - ❌ Desvantagens: [lista]
  - 💡 Quando usar: [contexto]

## 🎯 Reconciliando: Instrutor vs Boas Práticas

> **NOTA:** Esta seção é opcional mas recomendada quando há divergências ou pontos de discussão.

### Onde o Instrutor Acertou

1. ✅ **[Decisão 1]** - [Justificativa do porquê está correta]
2. ✅ **[Decisão 2]** - [Análise]

### Por Que Essas Diferenças Existem?

[Análise contextual sobre o foco pedagógico vs implementação de produção]

## 🔗 Referências

- [Links ou recursos mencionados na legenda]
- [Documentação relevante]
- [Artigos ou tutoriais relacionados]

```

### Diretrizes de Qualidade

1. **Seja específico e técnico**: Use terminologia correta e explique conceitos quando necessário
2. **Contextualize as mudanças**: Não apenas liste o que mudou, explique *por que* e *para que*
3. **Mantenha a objetividade**: O resumo deve ser conciso mas completo
4. **Destaque o importante**: Foque nas mudanças significativas, não em detalhes triviais (como formatação)
5. **Use exemplos de código**: Quando relevante, inclua trechos de código para ilustrar mudanças importantes
6. **Correlacione com a legenda**: Se houver legenda, relacione as explicações verbais com o código
7. **Identifique padrões**: Se a aula ensinou um padrão de design, arquitetura ou best practice, destaque explicitamente

### Diretrizes Específicas para Legendas

Quando uma legenda é fornecida, aplique atenção especial a:

1. **Extraia Trade-offs Explícitos**
   - Procure por comparações: "isso vs aquilo", "pode fazer X ou Y"
   - Identifique frases como: "tem prós e contras", "depende do contexto", "em alguns casos sim, em outros não"
   - Capture discussões sobre quando usar ou não usar determinada abordagem

2. **Identifique Justificativas de Decisões**
   - Procure por "porque", "a razão é", "o motivo", "por isso"
   - Capture explicações sobre: "por que eu fiz X", "por que não fiz Y"
   - Documente o contexto: quando algo faz ou não faz sentido

3. **Destaque Avisos e Erros Comuns**
   - Frases como: "um erro comum é...", "as pessoas costumam fazer...", "vejam no código de vocês se..."
   - Alertas: "cuidado com...", "atenção...", "isso pode causar..."
   - Armadilhas: "parece que funciona mas...", "muita gente acha que..."

4. **Capture Princípios e Filosofia**
   - Menções a YAGNI, KISS, DRY, SOLID, etc.
   - Discussões sobre pragmatismo vs pureza arquitetural
   - Filosofias de design: "deixe emergir", "comece simples", "refatore quando necessário"

5. **Preserve o Tom e Autenticidade**
   - Use citações diretas para falas marcantes
   - Mantenha expressões características do instrutor
   - Preserve ênfases: palavras repetidas ou destacadas pelo instrutor

6. **Organize Cronologicamente ou Tematicamente**
   - Se houver timestamps, inclua-os nas citações
   - Agrupe falas relacionadas ao mesmo tópico
   - Mantenha o fluxo lógico da explicação

7. **Interprete e Analise**
   - Na seção "Principais Lições", vá além da transcrição
   - Conecte múltiplas falas para extrair princípios maiores
   - Forneça exemplos de código que ilustrem os conceitos
   - Analise o "porquê do porquê" - motivações profundas das decisões

### Exemplo de Uso

**Sem legenda:**
```
Analise o último commit e crie um resumo da aula.
```

**Com commits específicos:**
```
Analise os commits abc123, def456 e ghi789 e crie um resumo da aula.
```

**Com legenda (RECOMENDADO):**
```
Analise os últimos 2 commits e crie um resumo da aula.

Legenda:
[00:00:15] Hoje vamos refatorar a arquitetura porque tem momentos que faz sentido 
usar abstrações e momentos que não faz. Nesse caso específico não faz sentido.
[00:00:45] Muita gente pergunta: "mas e se eu mudar de ORM?". Vocês estão vendo 
que eu não precisei refatorar nada porque eu implementei de maneira desacoplada...
[... resto da transcrição ...]
```

**Com range de commits:**
```
Analise os commits de HEAD~5 até HEAD e crie um resumo da aula.
```

**💡 Dica:** Quando houver legenda, o resumo será significativamente mais rico, capturando:
- Por que as decisões foram tomadas (não apenas o que foi feito)
- Trade-offs discutidos e contextos de aplicação
- Erros comuns e como evitá-los
- Princípios arquiteturais e filosóficos por trás do código

### Output Final

Salve o resumo gerado em um arquivo no formato:
`.study/[NÚMERO]-[titulo-da-aula].md`

Onde:
- `[NÚMERO]` é um número sequencial com 2 dígitos (01, 02, 03...)
- `[titulo-da-aula]` é o título em kebab-case (minúsculas e hífens)

**Exemplo**: `.study/02-implementando-upload-de-videos.md`

---

## 🎯 Maximizando o Valor das Legendas

### Palavras-Chave para Trade-offs

Ao analisar legendas, preste atenção especial quando o instrutor usar:

**Comparações:**
- "X vs Y", "isso ou aquilo", "pode fazer de duas formas"
- "alguns preferem X, outros Y", "depende do contexto"

**Justificativas:**
- "porque", "a razão é", "o motivo", "por isso"
- "isso permite", "isso garante", "para poder"

**Contextos:**
- "quando", "se", "no caso de", "em situações onde"
- "faz sentido quando", "não faz sentido quando"

**Avisos:**
- "cuidado", "atenção", "problema comum", "erro que as pessoas fazem"
- "vejam no código de vocês", "muita gente faz errado"

**Pragmatismo:**
- "YAGNI", "over-engineering", "simplicidade", "deixe emergir"
- "não abstraia antes da hora", "comece simples", "refatore quando necessário"

**Trade-offs explícitos:**
- "tem prós e contras", "vantagem e desvantagem"
- "você ganha X mas perde Y", "o custo disso é"

### Como Estruturar Trade-offs Encontrados

Para cada trade-off identificado na legenda, documente:

```markdown
### [Nome da Decisão]

> **Instrutor:** "[citação sobre o trade-off]"

**Opções apresentadas:**

**Opção A: [Nome]**
- ✅ Vantagens: [lista baseada na fala do instrutor]
- ❌ Desvantagens: [lista baseada na fala do instrutor]
- 💡 Quando usar: [contexto explicado pelo instrutor]

**Opção B: [Nome]**
- ✅ Vantagens: [lista]
- ❌ Desvantagens: [lista]
- 💡 Quando usar: [contexto]

**Decisão tomada:** [qual opção o instrutor escolheu e por quê]
```

---

**Importante**: Este comando analisa código e contexto. A qualidade do resumo depende da clareza dos commits e da presença de legendas. Commits com mensagens descritivas e legendas detalhadas resultam em resumos mais ricos e úteis.

**Legendas são ALTAMENTE recomendadas** porque capturam:
- ❤️ O **"porquê"** por trás das decisões (não apenas o "o quê")
- ⚖️ **Trade-offs** e contextos de aplicação
- 🚨 **Armadilhas** e erros comuns
- 🧠 **Princípios** e filosofia de design
- 💡 **Experiência** e sabedoria do instrutor
