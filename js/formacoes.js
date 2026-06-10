// formacoes.js — coordenadas (em %) e códigos de posição de cada formação.

// Convenção: left menor = esquerda, left maior = direita; top menor = ataque (topo),
// top maior = defesa (goleiro embaixo). "grupo" é o rótulo das fichas de amostra da home.

const formacoes = {

  // 4-3-3: GOL | LE, ZAG, ZAG, LD | MC, MEI (adiantado), MC | PE, ATA, PD
  '4-3-3': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 22, top: 48, grupo: 'MEI' },
    { left: 50, top: 41, grupo: 'MEI' },
    { left: 78, top: 48, grupo: 'MEI' },
    { left: 18, top: 22, grupo: 'ATA' },
    { left: 50, top: 14, grupo: 'ATA' },
    { left: 82, top: 22, grupo: 'ATA' }
  ],

  // 4-4-2: GOL | LE, ZAG, ZAG, LD | ME, MC, MC, MD | ATA, ATA
  '4-4-2': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 14, top: 46, grupo: 'MEI' },
    { left: 37, top: 44, grupo: 'MEI' },
    { left: 63, top: 44, grupo: 'MEI' },
    { left: 86, top: 46, grupo: 'MEI' },
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
    { left: 18, top: 33, grupo: 'MEI' },
    { left: 50, top: 30, grupo: 'MEI' },
    { left: 82, top: 33, grupo: 'MEI' },
    { left: 50, top: 12, grupo: 'ATA' }
  ],

  // 3-5-2: GOL | ZAG, ZAG, ZAG | ME, MC, MEI, MC, MD | ATA, ATA
  // ME e MD são os alas da linha de cinco; aceitam PE/PD/MC (ver codigosAceitos)
  '3-5-2': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 22, top: 68, grupo: 'DEF' },
    { left: 50, top: 66, grupo: 'DEF' },
    { left: 78, top: 68, grupo: 'DEF' },
    { left: 10, top: 46, grupo: 'MEI' },
    { left: 30, top: 44, grupo: 'MEI' },
    { left: 50, top: 40, grupo: 'MEI' },
    { left: 70, top: 44, grupo: 'MEI' },
    { left: 90, top: 46, grupo: 'MEI' },
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
    { left: 50, top: 54, grupo: 'MEI' },
    { left: 28, top: 48, grupo: 'MEI' },
    { left: 72, top: 48, grupo: 'MEI' },
    { left: 35, top: 30, grupo: 'ATA' },
    { left: 65, top: 30, grupo: 'ATA' },
    { left: 50, top: 13, grupo: 'ATA' }
  ],

  // 4-5-1: GOL | LE, ZAG, ZAG, LD | VOL, MC, MC, ME, MD | ATA
  '4-5-1': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 50, top: 55, grupo: 'MEI' },
    { left: 34, top: 46, grupo: 'MEI' },
    { left: 66, top: 46, grupo: 'MEI' },
    { left: 11, top: 42, grupo: 'MEI' },
    { left: 89, top: 42, grupo: 'MEI' },
    { left: 50, top: 16, grupo: 'ATA' }
  ],

  // 3-4-3 (losango no meio): GOL | ZAG, ZAG, ZAG | VOL, MC, MC, MEI | PE, ATA, PD
  '3-4-3': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 26, top: 68, grupo: 'DEF' },
    { left: 50, top: 66, grupo: 'DEF' },
    { left: 74, top: 68, grupo: 'DEF' },
    { left: 50, top: 56, grupo: 'MEI' },
    { left: 24, top: 46, grupo: 'MEI' },
    { left: 76, top: 46, grupo: 'MEI' },
    { left: 50, top: 38, grupo: 'MEI' },
    { left: 18, top: 20, grupo: 'ATA' },
    { left: 50, top: 15, grupo: 'ATA' },
    { left: 82, top: 20, grupo: 'ATA' }
  ],

  // 4-1-2-1-2 (losango): GOL | LE, ZAG, ZAG, LD | VOL | ME, MD | MEI | ATA, ATA
  '4-1-2-1-2': [
    { left: 50, top: 87, grupo: 'GOL' },
    { left: 14, top: 70, grupo: 'DEF' },
    { left: 37, top: 68, grupo: 'DEF' },
    { left: 63, top: 68, grupo: 'DEF' },
    { left: 86, top: 70, grupo: 'DEF' },
    { left: 50, top: 56, grupo: 'MEI' },
    { left: 26, top: 44, grupo: 'MEI' },
    { left: 74, top: 44, grupo: 'MEI' },
    { left: 50, top: 32, grupo: 'ATA' },
    { left: 38, top: 14, grupo: 'ATA' },
    { left: 62, top: 14, grupo: 'ATA' }
  ]

};


// Código real de cada vaga, na mesma ordem das coordenadas acima.
// ME/MD não existem nos dados; a compatibilidade vem de codigosAceitos().

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


