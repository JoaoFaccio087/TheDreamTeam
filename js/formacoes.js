// ============================================================
//  formacoes.js — coordenadas e códigos de posição de cada formação
// ============================================================

// ====================================================================
// COORDENADAS DAS FORMAÇÕES
//
//   left menor → ESQUERDA (LE, PE, VOL-esq, ME)
//   left maior → DIREITA  (LD, PD, VOL-dir, MD)
//   top menor  → ATAQUE   (topo do campo)
//   top maior  → DEFESA   (goleiro em baixo)
//
// "grupo": rótulo genérico das fichas de AMOSTRA (tela inicial).
// No campo do jogo, os códigos reais vêm de "codigosFormacao".
// ====================================================================

const formacoes = {

  // 4-3-3: GOL | LE, ZAG, ZAG, LD | MC, MEI (adiantado), MC | PE, ATA, PD
  '4-3-3': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },   // LE — esquerda
    { left: 37, top: 68, grupo: 'DEF' },   // ZAG
    { left: 63, top: 68, grupo: 'DEF' },   // ZAG
    { left: 86, top: 70, grupo: 'DEF' },   // LD — direita
    { left: 22, top: 48, grupo: 'MEI' },   // MC esquerdo
    { left: 50, top: 41, grupo: 'MEI' },   // MEI (mais adiantado que os MCs)
    { left: 78, top: 48, grupo: 'MEI' },   // MC direito
    { left: 18, top: 22, grupo: 'ATA' },   // PE — esquerda
    { left: 50, top: 14, grupo: 'ATA' },   // ATA
    { left: 82, top: 22, grupo: 'ATA' }    // PD — direita
  ],

  // 4-4-2: GOL | LE, ZAG, ZAG, LD | ME, MC, MC, MD | ATA, ATA
  '4-4-2': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 14, top: 46, grupo: 'MEI' },   // ME — meia-ala esquerda
    { left: 37, top: 44, grupo: 'MEI' },
    { left: 63, top: 44, grupo: 'MEI' },
    { left: 86, top: 46, grupo: 'MEI' },   // MD — meia-ala direita
    { left: 35, top: 18, grupo: 'ATA' },
    { left: 65, top: 18, grupo: 'ATA' }
  ],

  // 4-2-3-1: GOL | LE, ZAG, ZAG, LD | VOL, VOL | PE, MEI, PD | ATA
  '4-2-3-1': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 35, top: 52, grupo: 'MEI' },
    { left: 65, top: 52, grupo: 'MEI' },
    { left: 18, top: 33, grupo: 'MEI' },   // PE — esquerda
    { left: 50, top: 30, grupo: 'MEI' },
    { left: 82, top: 33, grupo: 'MEI' },   // PD — direita
    { left: 50, top: 12, grupo: 'ATA' }
  ],

  // 3-5-2: GOL | ZAG, ZAG, ZAG | ME, MC, MEI, MC, MD | ATA, ATA
  // ME e MD são os alas da linha de cinco; aceitam PE/PD/MC (ver codigosAceitos)
  '3-5-2': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 22, top: 68, grupo: 'DEF' },
    { left: 50, top: 66, grupo: 'DEF' },
    { left: 78, top: 68, grupo: 'DEF' },
    { left: 10, top: 46, grupo: 'MEI' },   // ME — ala esquerdo
    { left: 30, top: 44, grupo: 'MEI' },
    { left: 50, top: 40, grupo: 'MEI' },   // MEI — mais adiantado
    { left: 70, top: 44, grupo: 'MEI' },
    { left: 90, top: 46, grupo: 'MEI' },   // MD — ala direito
    { left: 35, top: 20, grupo: 'ATA' },
    { left: 65, top: 20, grupo: 'ATA' }
  ],

  // 4-3-2-1 (árvore de natal): GOL | LE, ZAG, ZAG, LD | VOL, MC, MC | MEI, MEI | ATA
  '4-3-2-1': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 50, top: 54, grupo: 'MEI' },   // VOL — volante central
    { left: 28, top: 48, grupo: 'MEI' },   // MC esquerdo
    { left: 72, top: 48, grupo: 'MEI' },   // MC direito
    { left: 35, top: 30, grupo: 'ATA' },   // MEI — meia-atacante esquerdo
    { left: 65, top: 30, grupo: 'ATA' },   // MEI — meia-atacante direito
    { left: 50, top: 13, grupo: 'ATA' }    // ATA — centroavante
  ],

  // 4-5-1: GOL | LE, ZAG, ZAG, LD | VOL, MC, MC, ME, MD | ATA
  '4-5-1': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 50, top: 55, grupo: 'MEI' },   // VOL — volante
    { left: 34, top: 46, grupo: 'MEI' },   // MC
    { left: 66, top: 46, grupo: 'MEI' },   // MC
    { left: 11, top: 42, grupo: 'MEI' },   // ME — ala esquerdo
    { left: 89, top: 42, grupo: 'MEI' },   // MD — ala direito
    { left: 50, top: 16, grupo: 'ATA' }    // ATA — centroavante
  ],

  // 3-4-3 (losango no meio): GOL | ZAG, ZAG, ZAG | VOL, MC, MC, MEI | PE, ATA, PD
  '3-4-3': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 26, top: 68, grupo: 'DEF' },
    { left: 50, top: 66, grupo: 'DEF' },
    { left: 74, top: 68, grupo: 'DEF' },
    { left: 50, top: 56, grupo: 'MEI' },   // VOL — base do losango
    { left: 24, top: 46, grupo: 'MEI' },   // MC esquerdo
    { left: 76, top: 46, grupo: 'MEI' },   // MC direito
    { left: 50, top: 38, grupo: 'MEI' },   // MEI — ponta do losango
    { left: 18, top: 20, grupo: 'ATA' },   // PE
    { left: 50, top: 15, grupo: 'ATA' },   // ATA
    { left: 82, top: 20, grupo: 'ATA' }    // PD
  ],

  // 4-1-2-1-2 (losango): GOL | LE, ZAG, ZAG, LD | VOL | ME, MD | MEI | ATA, ATA
  '4-1-2-1-2': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 50, top: 56, grupo: 'MEI' },   // VOL — base do losango
    { left: 26, top: 44, grupo: 'MEI' },   // ME — lado esquerdo
    { left: 74, top: 44, grupo: 'MEI' },   // MD — lado direito
    { left: 50, top: 32, grupo: 'ATA' },   // MEI — ponta do losango
    { left: 38, top: 14, grupo: 'ATA' },   // ATA
    { left: 62, top: 14, grupo: 'ATA' }    // ATA
  ]

};


// ====================================================================
// CÓDIGOS DE POSIÇÃO POR FORMAÇÃO
//
// ME e MD não existem nos dados dos jogadores (dados.js usa PE/PD/MC).
// A função codigosAceitos() faz o mapeamento de compatibilidade.
// ====================================================================

const codigosFormacao = {
  '4-3-3':   ['GOL', 'LE',  'ZAG', 'ZAG', 'LD',  'MC',  'MEI', 'MC',  'PE',  'ATA', 'PD' ],
  '4-4-2':   ['GOL', 'LE',  'ZAG', 'ZAG', 'LD',  'ME',  'MC',  'MC',  'MD',  'ATA', 'ATA'],
  '4-2-3-1': ['GOL', 'LE',  'ZAG', 'ZAG', 'LD',  'VOL', 'VOL', 'PE',  'MEI', 'PD',  'ATA'],
  '3-5-2':   ['GOL', 'ZAG', 'ZAG', 'ZAG', 'ME',  'MC',  'MEI', 'MC',  'MD',  'ATA', 'ATA'],
  '4-3-2-1': ['GOL', 'LE',  'ZAG', 'ZAG', 'LD',  'VOL', 'MC',  'MC',  'MEI', 'MEI', 'ATA'],
  '4-5-1':   ['GOL', 'LE',  'ZAG', 'ZAG', 'LD',  'VOL', 'MC',  'MC',  'ME',  'MD',  'ATA'],
  '3-4-3':   ['GOL', 'ZAG', 'ZAG', 'ZAG', 'VOL', 'MC',  'MC',  'MEI', 'PE',  'ATA', 'PD' ],
  '4-1-2-1-2':['GOL','LE',  'ZAG', 'ZAG', 'LD',  'VOL', 'ME',  'MD',  'MEI', 'ATA', 'ATA']
};


