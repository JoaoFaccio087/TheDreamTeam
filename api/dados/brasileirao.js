// ============================================================
//  brasileirao.js — clubes do Campeonato Brasileiro (Série A)
//  Top-6 de cada edição (2025–2010). Carregue ANTES do dados.js.
// ============================================================

const DADOS_BRASILEIRAO = [

  // ===== Edição 2025 =====

  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Flamengo",
    jogadores: [
      { id: 'agustin-rossi', nome: "Agustín Rossi", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-royal', nome: "Emerson Royal", posicoes: ["LD","MD"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG","LD"], forca: 82 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 82 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 81 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE","ME"], forca: 79 },
      { id: 'alex-sandro', nome: "Alex Sandro", posicoes: ["LE","ZAG"], forca: 78 },
      { id: 'erick-pulgar', nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'nicolas-de-la-cruz', nome: "Nicolás De La Cruz", posicoes: ["MEI","MC"], forca: 83 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 87 },
      { id: 'luiz-araujo', nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 80 },
      { id: 'samuel-lino', nome: "Samuel Lino", posicoes: ["PE","ATA"], forca: 80 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 81 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 84 },
      { id: 'gonzalo-plata', nome: "Gonzalo Plata", posicoes: ["PD","PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Palmeiras",
    jogadores: [
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["GOL"], forca: 80 },
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 78 },
      { id: 'khellven', nome: "Khellven", posicoes: ["LD","MD"], forca: 76 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 83 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE","ME"], forca: 81 },
      { id: 'anibal-moreno', nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'emiliano-martinez', nome: "Emiliano Martínez", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'andreas-pereira', nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI","MC"], forca: 81 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MEI","PD"], forca: 80 },
      { id: 'felipe-anderson', nome: "Felipe Anderson", posicoes: ["PE","ATA"], forca: 80 },
      { id: 'facundo-torres', nome: "Facundo Torres", posicoes: ["PD","PE"], forca: 80 },
      { id: 'vitor-roque', nome: "Vitor Roque", posicoes: ["ATA"], forca: 81 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 80 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["ATA","PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 82 },
      { id: 'leo-aragao', nome: "Léo Aragão", posicoes: ["GOL"], forca: 70 },
      { id: 'william', nome: "William", posicoes: ["LD","MD"], forca: 80 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 82 },
      { id: 'jonathan-jesus', nome: "Jonathan Jesus", posicoes: ["ZAG"], forca: 76 },
      { id: 'lucas-villalba', nome: "Lucas Villalba", posicoes: ["ZAG","LE"], forca: 77 },
      { id: 'kaiki', nome: "Kaiki", posicoes: ["LE"], forca: 75 },
      { id: 'lucas-romero', nome: "Lucas Romero", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'matheus-henrique', nome: "Matheus Henrique", posicoes: ["MC","VOL"], forca: 80 },
      { id: 'christian', nome: "Christian", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'matheus-pereira', nome: "Matheus Pereira", posicoes: ["MEI","MC"], forca: 85 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PE","PD"], forca: 78 },
      { id: 'wanderson', nome: "Wanderson", posicoes: ["PE","ATA"], forca: 77 },
      { id: 'kaio-jorge', nome: "Kaio Jorge", posicoes: ["ATA"], forca: 83 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Mirassol",
    jogadores: [
      { id: 'walter', nome: "Walter", posicoes: ["GOL"], forca: 78 },
      { id: 'alex-muralha', nome: "Alex Muralha", posicoes: ["GOL"], forca: 74 },
      { id: 'lucas-ramon', nome: "Lucas Ramon", posicoes: ["LD"], forca: 74 },
      { id: 'joao-victor', nome: "João Victor", posicoes: ["ZAG"], forca: 75 },
      { id: 'luiz-otavio', nome: "Luiz Otávio", posicoes: ["ZAG"], forca: 76 },
      { id: 'jemmes', nome: "Jemmes", posicoes: ["ZAG"], forca: 75 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 78 },
      { id: 'neto-moura', nome: "Neto Moura", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'jose-aldo', nome: "José Aldo", posicoes: ["VOL","MC"], forca: 75 },
      { id: 'danielzinho', nome: "Danielzinho", posicoes: ["MC","MEI"], forca: 75 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["MEI"], forca: 76 },
      { id: 'negueba', nome: "Negueba", posicoes: ["PD","PE"], forca: 77 },
      { id: 'chico', nome: "Chico", posicoes: ["PE","ME"], forca: 76 },
      { id: 'edson-carioca', nome: "Edson Carioca", posicoes: ["PD","PE"], forca: 74 },
      { id: 'iury-castilho', nome: "Iury Castilho", posicoes: ["ATA"], forca: 77 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Fluminense",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 81 },
      { id: 'samuel-xavier', nome: "Samuel Xavier", posicoes: ["LD","MD"], forca: 76 },
      { id: 'thiago-silva', nome: "Thiago Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'ignacio', nome: "Ignácio", posicoes: ["ZAG"], forca: 77 },
      { id: 'juan-pablo-freytes', nome: "Juan Pablo Freytes", posicoes: ["ZAG","LE"], forca: 76 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 76 },
      { id: 'gabriel-fuentes', nome: "Gabriel Fuentes", posicoes: ["LE"], forca: 74 },
      { id: 'andre', nome: "André", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'martinelli', nome: "Martinelli", posicoes: ["MC","VOL"], forca: 78 },
      { id: 'hercules', nome: "Hércules", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI","MC"], forca: 81 },
      { id: 'jhon-arias', nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 84 },
      { id: 'agustin-canobbio', nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 78 },
      { id: 'keno', nome: "Keno", posicoes: ["PE","ATA"], forca: 77 },
      { id: 'german-cano', nome: "Germán Cano", posicoes: ["ATA"], forca: 82 },
      { id: 'john-kennedy', nome: "John Kennedy", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Botafogo",
    jogadores: [
      { id: 'john', nome: "John", posicoes: ["GOL"], forca: 80 },
      { id: 'gatito-fernandez', nome: "Gatito Fernández", posicoes: ["GOL"], forca: 72 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["LD","MD"], forca: 76 },
      { id: 'alexander-barboza', nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 79 },
      { id: 'bastos', nome: "Bastos", posicoes: ["ZAG"], forca: 78 },
      { id: 'adryelson', nome: "Adryelson", posicoes: ["ZAG"], forca: 78 },
      { id: 'alex-telles', nome: "Alex Telles", posicoes: ["LE"], forca: 80 },
      { id: 'cuiabano', nome: "Cuiabano", posicoes: ["LE","ME"], forca: 76 },
      { id: 'gregore', nome: "Gregore", posicoes: ["VOL"], forca: 78 },
      { id: 'marlon-freitas', nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'danilo-barbosa', nome: "Danilo Barbosa", posicoes: ["MC","MEI"], forca: 75 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["MEI","PD"], forca: 80 },
      { id: 'matheus-martins', nome: "Matheus Martins", posicoes: ["PE","PD"], forca: 78 },
      { id: 'artur', nome: "Artur", posicoes: ["PD","ATA"], forca: 78 },
      { id: 'igor-jesus', nome: "Igor Jesus", posicoes: ["ATA"], forca: 79 },
      { id: 'arthur-cabral', nome: "Arthur Cabral", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 2024 =====

  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Botafogo",
    jogadores: [
      { id: 'john', nome: "John", posicoes: ["GOL"], forca: 80 },
      { id: 'gatito-fernandez', nome: "Gatito Fernández", posicoes: ["GOL"], forca: 72 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["LD","MD"], forca: 76 },
      { id: 'alexander-barboza', nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 79 },
      { id: 'bastos', nome: "Bastos", posicoes: ["ZAG"], forca: 78 },
      { id: 'adryelson', nome: "Adryelson", posicoes: ["ZAG"], forca: 78 },
      { id: 'alex-telles', nome: "Alex Telles", posicoes: ["LE"], forca: 80 },
      { id: 'cuiabano', nome: "Cuiabano", posicoes: ["LE","ME"], forca: 76 },
      { id: 'gregore', nome: "Gregore", posicoes: ["VOL"], forca: 78 },
      { id: 'marlon-freitas', nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'thiago-almada', nome: "Thiago Almada", posicoes: ["MEI","MC"], forca: 84 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["PD","MEI"], forca: 80 },
      { id: 'luiz-henrique', nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 83 },
      { id: 'igor-jesus', nome: "Igor Jesus", posicoes: ["ATA"], forca: 79 },
      { id: 'junior-santos', nome: "Júnior Santos", posicoes: ["ATA","PE"], forca: 78 },
      { id: 'tiquinho-soares', nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 75 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 74 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 83 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 80 },
      { id: 'caio-paulista', nome: "Caio Paulista", posicoes: ["LE"], forca: 74 },
      { id: 'anibal-moreno', nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'richard-rios', nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 78 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 82 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MEI","PD"], forca: 78 },
      { id: 'estevao', nome: "Estêvão", posicoes: ["PD"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 79 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PE"], forca: 78 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Flamengo",
    jogadores: [
      { id: 'agustin-rossi', nome: "Agustín Rossi", posicoes: ["GOL"], forca: 82 },
      { id: 'guillermo-varela', nome: "Guillermo Varela", posicoes: ["LD"], forca: 77 },
      { id: 'wesley', nome: "Wesley", posicoes: ["LD"], forca: 76 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 81 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 81 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 80 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE"], forca: 79 },
      { id: 'erick-pulgar', nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'allan', nome: "Allan", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'nicolas-de-la-cruz', nome: "Nicolás De La Cruz", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 86 },
      { id: 'luiz-araujo', nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 79 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 78 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 84 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Fortaleza",
    jogadores: [
      { id: 'joao-ricardo', nome: "João Ricardo", posicoes: ["GOL"], forca: 79 },
      { id: 'tinga', nome: "Tinga", posicoes: ["LD","MD"], forca: 77 },
      { id: 'emanuel-britez', nome: "Emanuel Brítez", posicoes: ["ZAG"], forca: 78 },
      { id: 'benjamin-kuscevic', nome: "Benjamín Kuscevic", posicoes: ["ZAG"], forca: 78 },
      { id: 'titi', nome: "Titi", posicoes: ["ZAG"], forca: 76 },
      { id: 'bruno-pacheco', nome: "Bruno Pacheco", posicoes: ["LE"], forca: 76 },
      { id: 'lucas-sasha', nome: "Lucas Sasha", posicoes: ["VOL"], forca: 76 },
      { id: 'ze-welison', nome: "Zé Welison", posicoes: ["VOL"], forca: 75 },
      { id: 'hercules', nome: "Hércules", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'tomas-pochettino', nome: "Tomás Pochettino", posicoes: ["MEI"], forca: 79 },
      { id: 'yago-pikachu', nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 79 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD","PE"], forca: 79 },
      { id: 'moises', nome: "Moisés", posicoes: ["PE","ATA"], forca: 78 },
      { id: 'breno-lopes', nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 77 },
      { id: 'juan-martin-lucero', nome: "Juan Martín Lucero", posicoes: ["ATA"], forca: 80 },
      { id: 'renato-kayzer', nome: "Renato Kayzer", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Internacional",
    jogadores: [
      { id: 'sergio-rochet', nome: "Sergio Rochet", posicoes: ["GOL"], forca: 80 },
      { id: 'fabricio-bustos', nome: "Fabricio Bustos", posicoes: ["LD"], forca: 76 },
      { id: 'vitao', nome: "Vitão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gabriel-mercado', nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 76 },
      { id: 'robert-renan', nome: "Robert Renan", posicoes: ["ZAG"], forca: 76 },
      { id: 'alexandro-bernabei', nome: "Alexandro Bernabei", posicoes: ["LE"], forca: 78 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["MC"], forca: 77 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MEI","MC"], forca: 82 },
      { id: 'wesley', nome: "Wesley", posicoes: ["PE","PD"], forca: 79 },
      { id: 'wanderson', nome: "Wanderson", posicoes: ["PE","PD"], forca: 77 },
      { id: 'enner-valencia', nome: "Enner Valencia", posicoes: ["ATA"], forca: 81 },
      { id: 'rafael-borre', nome: "Rafael Borré", posicoes: ["ATA"], forca: 80 },
      { id: 'lucas-alario', nome: "Lucas Alario", posicoes: ["ATA"], forca: 76 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MC","MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "São Paulo",
    jogadores: [
      { id: 'rafael', nome: "Rafael", posicoes: ["GOL"], forca: 80 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["LD"], forca: 76 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { id: 'alan-franco', nome: "Alan Franco", posicoes: ["ZAG"], forca: 78 },
      { id: 'sabino', nome: "Sabino", posicoes: ["ZAG"], forca: 75 },
      { id: 'welington', nome: "Welington", posicoes: ["LE"], forca: 77 },
      { id: 'pablo-maia', nome: "Pablo Maia", posicoes: ["VOL"], forca: 79 },
      { id: 'alisson', nome: "Alisson", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'luiz-gustavo', nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'damian-bobadilla', nome: "Damián Bobadilla", posicoes: ["MC"], forca: 76 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'luciano', nome: "Luciano", posicoes: ["ATA","MEI"], forca: 80 },
      { id: 'ferreira', nome: "Ferreira", posicoes: ["PE","PD"], forca: 78 },
      { id: 'wellington-rato', nome: "Wellington Rato", posicoes: ["PD"], forca: 76 },
      { id: 'calleri', nome: "Calleri", posicoes: ["ATA"], forca: 81 },
      { id: 'andre-silva', nome: "André Silva", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2023 =====

  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 75 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 73 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 83 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 80 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'gabriel-menino', nome: "Gabriel Menino", posicoes: ["VOL","MC"], forca: 76 },
      { id: 'richard-rios', nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 77 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 81 },
      { id: 'artur', nome: "Artur", posicoes: ["PD","PE"], forca: 77 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 81 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PE"], forca: 79 },
      { id: 'endrick', nome: "Endrick", posicoes: ["ATA"], forca: 80 },
      { id: 'breno-lopes', nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 75 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Grêmio",
    jogadores: [
      { id: 'gabriel-grando', nome: "Gabriel Grando", posicoes: ["GOL"], forca: 76 },
      { id: 'joao-pedro', nome: "João Pedro", posicoes: ["LD"], forca: 77 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 77 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 78 },
      { id: 'fabio', nome: "Fábio", posicoes: ["LD"], forca: 75 },
      { id: 'mathias-villasanti', nome: "Mathías Villasanti", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'pepe', nome: "Pepê", posicoes: ["MC"], forca: 77 },
      { id: 'bitello', nome: "Bitello", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'franco-cristaldo', nome: "Franco Cristaldo", posicoes: ["MEI"], forca: 79 },
      { id: 'ferreira', nome: "Ferreira", posicoes: ["PD","PE"], forca: 78 },
      { id: 'everton-galdino', nome: "Everton Galdino", posicoes: ["PE"], forca: 75 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["ATA"], forca: 88 },
      { id: 'joao-pedro-galvao', nome: "João Pedro Galvão", posicoes: ["ATA"], forca: 75 },
      { id: 'cuiabano', nome: "Cuiabano", posicoes: ["PE","LE"], forca: 74 },
      { id: 'carballo', nome: "Carballo", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 80 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 75 },
      { id: 'renzo-saravia', nome: "Renzo Saravia", posicoes: ["LD"], forca: 75 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 78 },
      { id: 'mauricio-lemos', nome: "Mauricio Lemos", posicoes: ["ZAG"], forca: 78 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 80 },
      { id: 'rodrigo-battaglia', nome: "Rodrigo Battaglia", posicoes: ["VOL"], forca: 78 },
      { id: 'otavio', nome: "Otávio", posicoes: ["VOL"], forca: 77 },
      { id: 'matias-zaracho', nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["MC"], forca: 77 },
      { id: 'igor-gomes', nome: "Igor Gomes", posicoes: ["MEI"], forca: 76 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["PD","ATA"], forca: 84 },
      { id: 'hulk', nome: "Hulk", posicoes: ["ATA","PD"], forca: 84 },
      { id: 'cristian-pavon', nome: "Cristian Pavón", posicoes: ["PD","PE"], forca: 77 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 76 },
      { id: 'alan-kardec', nome: "Alan Kardec", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Flamengo",
    jogadores: [
      { id: 'matheus-cunha', nome: "Matheus Cunha", posicoes: ["GOL"], forca: 77 },
      { id: 'santos', nome: "Santos", posicoes: ["GOL"], forca: 76 },
      { id: 'guillermo-varela', nome: "Guillermo Varela", posicoes: ["LD"], forca: 76 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 80 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG"], forca: 79 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 79 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE"], forca: 80 },
      { id: 'erick-pulgar', nome: "Erick Pulgar", posicoes: ["VOL"], forca: 79 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 78 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC"], forca: 80 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 82 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE"], forca: 82 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 78 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 83 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Botafogo",
    jogadores: [
      { id: 'lucas-perri', nome: "Lucas Perri", posicoes: ["GOL"], forca: 81 },
      { id: 'leonel-di-placido', nome: "Leonel Di Plácido", posicoes: ["LD"], forca: 75 },
      { id: 'adryelson', nome: "Adryelson", posicoes: ["ZAG"], forca: 80 },
      { id: 'victor-cuesta', nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcal', nome: "Marçal", posicoes: ["LE"], forca: 77 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'marlon-freitas', nome: "Marlon Freitas", posicoes: ["MC"], forca: 78 },
      { id: 'gabriel-pires', nome: "Gabriel Pires", posicoes: ["MC","MEI"], forca: 76 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MEI"], forca: 80 },
      { id: 'lucas-fernandes', nome: "Lucas Fernandes", posicoes: ["MEI"], forca: 76 },
      { id: 'victor-sa', nome: "Victor Sá", posicoes: ["PE"], forca: 77 },
      { id: 'junior-santos', nome: "Júnior Santos", posicoes: ["PD","ATA"], forca: 78 },
      { id: 'tiquinho-soares', nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 84 },
      { id: 'diego-costa', nome: "Diego Costa", posicoes: ["ATA"], forca: 77 },
      { id: 'segovia', nome: "Segovia", posicoes: ["PD"], forca: 73 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Red Bull Bragantino",
    jogadores: [
      { id: 'cleiton', nome: "Cleiton", posicoes: ["GOL"], forca: 78 },
      { id: 'aderlan', nome: "Aderlan", posicoes: ["LD"], forca: 75 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 80 },
      { id: 'natan', nome: "Natan", posicoes: ["ZAG"], forca: 78 },
      { id: 'juninho-capixaba', nome: "Juninho Capixaba", posicoes: ["LE"], forca: 78 },
      { id: 'lucas-evangelista', nome: "Lucas Evangelista", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'matheus-fernandes', nome: "Matheus Fernandes", posicoes: ["VOL"], forca: 76 },
      { id: 'jadsom', nome: "Jadsom", posicoes: ["MC"], forca: 76 },
      { id: 'eric-ramires', nome: "Eric Ramires", posicoes: ["MC"], forca: 76 },
      { id: 'helinho', nome: "Helinho", posicoes: ["PD"], forca: 79 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PE"], forca: 77 },
      { id: 'sorriso', nome: "Sorriso", posicoes: ["PE"], forca: 75 },
      { id: 'eduardo-sasha', nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 80 },
      { id: 'thiago-borbas', nome: "Thiago Borbas", posicoes: ["ATA"], forca: 77 },
      { id: 'alerrandro', nome: "Alerrandro", posicoes: ["ATA"], forca: 76 },
      { id: 'talisson', nome: "Talisson", posicoes: ["PD"], forca: 74 }
    ]
  },

  // ===== Edição 2022 =====

  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 83 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 79 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 84 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 78 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 81 },
      { id: 'danilo', nome: "Danilo", posicoes: ["VOL"], forca: 82 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'gabriel-menino', nome: "Gabriel Menino", posicoes: ["MC","LD"], forca: 77 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 84 },
      { id: 'gustavo-scarpa', nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 83 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 82 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PD"], forca: 82 },
      { id: 'rafael-navarro', nome: "Rafael Navarro", posicoes: ["ATA"], forca: 76 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Internacional",
    jogadores: [
      { id: 'daniel', nome: "Daniel", posicoes: ["GOL"], forca: 78 },
      { id: 'fabricio-bustos', nome: "Fabricio Bustos", posicoes: ["LD"], forca: 77 },
      { id: 'gabriel-mercado', nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 77 },
      { id: 'vitao', nome: "Vitão", posicoes: ["ZAG"], forca: 77 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 76 },
      { id: 'moises', nome: "Moisés", posicoes: ["LE"], forca: 74 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'johnny', nome: "Johnny", posicoes: ["VOL"], forca: 77 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'carlos-de-pena', nome: "Carlos de Pena", posicoes: ["MEI","PE"], forca: 78 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MEI"], forca: 78 },
      { id: 'wanderson', nome: "Wanderson", posicoes: ["PE","PD"], forca: 78 },
      { id: 'pedro-henrique', nome: "Pedro Henrique", posicoes: ["PD"], forca: 79 },
      { id: 'alemao', nome: "Alemão", posicoes: ["ATA"], forca: 77 },
      { id: 'taison', nome: "Taison", posicoes: ["PE","MEI"], forca: 78 },
      { id: 'liziero', nome: "Liziero", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Fluminense",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 80 },
      { id: 'samuel-xavier', nome: "Samuel Xavier", posicoes: ["LD"], forca: 76 },
      { id: 'nino', nome: "Nino", posicoes: ["ZAG"], forca: 80 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 78 },
      { id: 'david-braz', nome: "David Braz", posicoes: ["ZAG"], forca: 75 },
      { id: 'caio-paulista', nome: "Caio Paulista", posicoes: ["LE","ME"], forca: 76 },
      { id: 'andre', nome: "André", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'martinelli', nome: "Martinelli", posicoes: ["MC"], forca: 76 },
      { id: 'nonato', nome: "Nonato", posicoes: ["MC"], forca: 76 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 80 },
      { id: 'jhon-arias', nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 81 },
      { id: 'luiz-henrique', nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 80 },
      { id: 'german-cano', nome: "Germán Cano", posicoes: ["ATA"], forca: 86 },
      { id: 'willian-bigode', nome: "Willian Bigode", posicoes: ["ATA"], forca: 76 },
      { id: 'yago-felipe', nome: "Yago Felipe", posicoes: ["MC"], forca: 76 },
      { id: 'nathan', nome: "Nathan", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 83 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 79 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 77 },
      { id: 'lucas-piton', nome: "Lucas Piton", posicoes: ["LE"], forca: 76 },
      { id: 'du-queiroz', nome: "Du Queiroz", posicoes: ["VOL"], forca: 77 },
      { id: 'maycon', nome: "Maycon", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'giuliano', nome: "Giuliano", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'willian', nome: "Willian", posicoes: ["PE","PD"], forca: 80 },
      { id: 'yuri-alberto', nome: "Yuri Alberto", posicoes: ["ATA"], forca: 80 },
      { id: 'adson', nome: "Adson", posicoes: ["PD"], forca: 76 },
      { id: 'gustavo-mosquito', nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 76 },
      { id: 'fausto-vera', nome: "Fausto Vera", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Flamengo",
    jogadores: [
      { id: 'santos', nome: "Santos", posicoes: ["GOL"], forca: 82 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 79 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 80 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE"], forca: 78 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG"], forca: 82 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 80 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 80 },
      { id: 'joao-gomes', nome: "João Gomes", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'arturo-vidal', nome: "Arturo Vidal", posicoes: ["MC"], forca: 83 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 87 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 83 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PD","PE"], forca: 84 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 86 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'bento', nome: "Bento", posicoes: ["GOL"], forca: 81 },
      { id: 'khellven', nome: "Khellven", posicoes: ["LD"], forca: 76 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { id: 'pedro-henrique', nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 76 },
      { id: 'abner-vinicius', nome: "Abner Vinícius", posicoes: ["LE"], forca: 77 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'hugo-moura', nome: "Hugo Moura", posicoes: ["VOL"], forca: 75 },
      { id: 'alex-santana', nome: "Alex Santana", posicoes: ["MC"], forca: 75 },
      { id: 'david-terans', nome: "David Terans", posicoes: ["MEI"], forca: 76 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI","MD"], forca: 75 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD"], forca: 76 },
      { id: 'agustin-canobbio', nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 76 },
      { id: 'vitor-roque', nome: "Vitor Roque", posicoes: ["ATA"], forca: 79 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 75 },
      { id: 'matheus-felipe', nome: "Matheus Felipe", posicoes: ["ZAG"], forca: 72 },
      { id: 'leo-cittadini', nome: "Léo Cittadini", posicoes: ["MC"], forca: 74 }
    ]
  },

  // ===== Edição 2021 =====

  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 82 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 78 },
      { id: 'guga', nome: "Guga", posicoes: ["LD"], forca: 75 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 77 },
      { id: 'nathan-silva', nome: "Nathan Silva", posicoes: ["ZAG"], forca: 77 },
      { id: 'junior-alonso', nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 78 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["VOL"], forca: 79 },
      { id: 'allan', nome: "Allan", posicoes: ["VOL"], forca: 77 },
      { id: 'matias-zaracho', nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'nacho-fernandez', nome: "Nacho Fernández", posicoes: ["MEI"], forca: 82 },
      { id: 'hulk', nome: "Hulk", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'keno', nome: "Keno", posicoes: ["PE"], forca: 79 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA","PD"], forca: 78 },
      { id: 'diego-costa', nome: "Diego Costa", posicoes: ["ATA"], forca: 80 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 80 },
      { id: 'mauricio-isla', nome: "Maurício Isla", posicoes: ["LD"], forca: 78 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 81 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 80 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG"], forca: 82 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 79 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 79 },
      { id: 'andreas-pereira', nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 84 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 84 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 83 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 86 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 74 },
      { id: 'hugo-souza', nome: "Hugo Souza", posicoes: ["GOL"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 83 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 79 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 75 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 84 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 78 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 80 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL","ZAG"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["VOL"], forca: 80 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'gabriel-menino', nome: "Gabriel Menino", posicoes: ["MC"], forca: 76 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 83 },
      { id: 'gustavo-scarpa', nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 82 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PD"], forca: 81 },
      { id: 'deyverson', nome: "Deyverson", posicoes: ["ATA"], forca: 76 },
      { id: 'breno-lopes', nome: "Breno Lopes", posicoes: ["PD"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Fortaleza",
    jogadores: [
      { id: 'felipe-alves', nome: "Felipe Alves", posicoes: ["GOL"], forca: 78 },
      { id: 'tinga', nome: "Tinga", posicoes: ["LD","MD"], forca: 77 },
      { id: 'marcelo-benevenuto', nome: "Marcelo Benevenuto", posicoes: ["ZAG"], forca: 78 },
      { id: 'titi', nome: "Titi", posicoes: ["ZAG"], forca: 76 },
      { id: 'bruno-melo', nome: "Bruno Melo", posicoes: ["LE"], forca: 75 },
      { id: 'lucas-crispim', nome: "Lucas Crispim", posicoes: ["ME","LE"], forca: 77 },
      { id: 'felipe', nome: "Felipe", posicoes: ["VOL"], forca: 76 },
      { id: 'ronald', nome: "Ronald", posicoes: ["VOL"], forca: 75 },
      { id: 'ederson', nome: "Éderson", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'matheus-vargas', nome: "Matheus Vargas", posicoes: ["MEI"], forca: 76 },
      { id: 'yago-pikachu', nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 80 },
      { id: 'david', nome: "David", posicoes: ["PE"], forca: 78 },
      { id: 'robson', nome: "Robson", posicoes: ["ATA"], forca: 78 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 76 },
      { id: 'romarinho', nome: "Romarinho", posicoes: ["PD"], forca: 75 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 81 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { id: 'joao-victor', nome: "João Victor", posicoes: ["ZAG"], forca: 78 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 77 },
      { id: 'lucas-piton', nome: "Lucas Piton", posicoes: ["LE"], forca: 75 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["VOL"], forca: 76 },
      { id: 'cantillo', nome: "Cantillo", posicoes: ["MC"], forca: 76 },
      { id: 'du-queiroz', nome: "Du Queiroz", posicoes: ["MC"], forca: 75 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MEI","MC"], forca: 82 },
      { id: 'giuliano', nome: "Giuliano", posicoes: ["MEI","MC"], forca: 79 },
      { id: 'willian', nome: "Willian", posicoes: ["PE"], forca: 81 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'gustavo-mosquito', nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 78 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 76 },
      { id: 'gabriel-pereira', nome: "Gabriel Pereira", posicoes: ["PD"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Red Bull Bragantino",
    jogadores: [
      { id: 'cleiton', nome: "Cleiton", posicoes: ["GOL"], forca: 78 },
      { id: 'aderlan', nome: "Aderlan", posicoes: ["LD"], forca: 75 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 79 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 80 },
      { id: 'luan-candido', nome: "Luan Cândido", posicoes: ["LE"], forca: 77 },
      { id: 'edimar', nome: "Edimar", posicoes: ["LE"], forca: 74 },
      { id: 'raul', nome: "Raul", posicoes: ["VOL"], forca: 77 },
      { id: 'jadsom', nome: "Jadsom", posicoes: ["VOL"], forca: 76 },
      { id: 'eric-ramires', nome: "Eric Ramires", posicoes: ["MC"], forca: 76 },
      { id: 'lucas-evangelista', nome: "Lucas Evangelista", posicoes: ["MC"], forca: 78 },
      { id: 'claudinho', nome: "Claudinho", posicoes: ["MEI"], forca: 83 },
      { id: 'artur', nome: "Artur", posicoes: ["PD"], forca: 82 },
      { id: 'helinho', nome: "Helinho", posicoes: ["PD"], forca: 78 },
      { id: 'ytalo', nome: "Ytalo", posicoes: ["ATA"], forca: 80 },
      { id: 'alerrandro', nome: "Alerrandro", posicoes: ["ATA"], forca: 76 },
      { id: 'jan-hurtado', nome: "Jan Hurtado", posicoes: ["ATA"], forca: 74 }
    ]
  },

  // ===== Edição 2020 =====

  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 81 },
      { id: 'mauricio-isla', nome: "Maurício Isla", posicoes: ["LD"], forca: 78 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 82 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 77 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 77 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 81 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC"], forca: 84 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 79 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 84 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 84 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 85 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 83 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD","PE"], forca: 77 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Internacional",
    jogadores: [
      { id: 'marcelo-lomba', nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 79 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { id: 'rodrigo-moledo', nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 78 },
      { id: 'victor-cuesta', nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 80 },
      { id: 'moises', nome: "Moisés", posicoes: ["LE"], forca: 74 },
      { id: 'rodrigo-dourado', nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 78 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["MC"], forca: 82 },
      { id: 'patrick', nome: "Patrick", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 79 },
      { id: 'bruno-praxedes', nome: "Bruno Praxedes", posicoes: ["MEI"], forca: 76 },
      { id: 'thiago-galhardo', nome: "Thiago Galhardo", posicoes: ["MEI","ATA"], forca: 83 },
      { id: 'yuri-alberto', nome: "Yuri Alberto", posicoes: ["ATA"], forca: 77 },
      { id: 'abel-hernandez', nome: "Abel Hernández", posicoes: ["ATA"], forca: 76 },
      { id: 'marcos-guilherme', nome: "Marcos Guilherme", posicoes: ["PE"], forca: 75 },
      { id: 'peglow', nome: "Peglow", posicoes: ["PD"], forca: 73 },
      { id: 'nonato', nome: "Nonato", posicoes: ["VOL"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 79 },
      { id: 'guga', nome: "Guga", posicoes: ["LD"], forca: 76 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 78 },
      { id: 'junior-alonso', nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 79 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 80 },
      { id: 'allan', nome: "Allan", posicoes: ["VOL"], forca: 77 },
      { id: 'jair', nome: "Jair", posicoes: ["VOL"], forca: 77 },
      { id: 'alan-franco', nome: "Alan Franco", posicoes: ["MC"], forca: 76 },
      { id: 'nathan', nome: "Nathan", posicoes: ["MEI"], forca: 78 },
      { id: 'hyoran', nome: "Hyoran", posicoes: ["MEI"], forca: 77 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["PD"], forca: 80 },
      { id: 'keno', nome: "Keno", posicoes: ["PE"], forca: 82 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 78 },
      { id: 'marrony', nome: "Marrony", posicoes: ["ATA"], forca: 76 },
      { id: 'eduardo-sasha', nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 77 },
      { id: 'igor-rabello', nome: "Igor Rabello", posicoes: ["ZAG"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "São Paulo",
    jogadores: [
      { id: 'tiago-volpi', nome: "Tiago Volpi", posicoes: ["GOL"], forca: 80 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD"], forca: 78 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 78 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 80 },
      { id: 'luan', nome: "Luan", posicoes: ["VOL"], forca: 78 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 77 },
      { id: 'daniel-alves', nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 81 },
      { id: 'gabriel-sara', nome: "Gabriel Sara", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'igor-gomes', nome: "Igor Gomes", posicoes: ["MEI"], forca: 78 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MEI"], forca: 77 },
      { id: 'luciano', nome: "Luciano", posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'brenner', nome: "Brenner", posicoes: ["ATA"], forca: 82 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 76 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI"], forca: 76 },
      { id: 'igor-vinicius', nome: "Igor Vinícius", posicoes: ["LD"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Fluminense",
    jogadores: [
      { id: 'muriel', nome: "Muriel", posicoes: ["GOL"], forca: 76 },
      { id: 'calegari', nome: "Calegari", posicoes: ["LD"], forca: 75 },
      { id: 'nino', nome: "Nino", posicoes: ["ZAG"], forca: 79 },
      { id: 'luccas-claro', nome: "Luccas Claro", posicoes: ["ZAG"], forca: 79 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 75 },
      { id: 'yuri', nome: "Yuri", posicoes: ["VOL"], forca: 75 },
      { id: 'dodi', nome: "Dodi", posicoes: ["VOL"], forca: 77 },
      { id: 'hudson', nome: "Hudson", posicoes: ["MC"], forca: 76 },
      { id: 'nene', nome: "Nenê", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 78 },
      { id: 'marcos-paulo', nome: "Marcos Paulo", posicoes: ["PE"], forca: 77 },
      { id: 'wellington-silva', nome: "Wellington Silva", posicoes: ["PE"], forca: 76 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 80 },
      { id: 'evanilson', nome: "Evanilson", posicoes: ["ATA"], forca: 79 },
      { id: 'luiz-henrique', nome: "Luiz Henrique", posicoes: ["PD","PE"], forca: 76 },
      { id: 'caio-paulista', nome: "Caio Paulista", posicoes: ["ME","ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Grêmio",
    jogadores: [
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["GOL"], forca: 78 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 77 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 82 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-cortez', nome: "Bruno Cortez", posicoes: ["LE"], forca: 76 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 76 },
      { id: 'matheus-henrique', nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 79 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL"], forca: 77 },
      { id: 'jean-pyerre', nome: "Jean Pyerre", posicoes: ["MEI"], forca: 79 },
      { id: 'pepe', nome: "Pepê", posicoes: ["PE"], forca: 81 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 76 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["ATA"], forca: 81 },
      { id: 'ferreira', nome: "Ferreira", posicoes: ["PE","PD"], forca: 76 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 83 },
      { id: 'darlan', nome: "Darlan", posicoes: ["MC"], forca: 75 }
    ]
  },

  // ===== Edição 2019 =====

  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["LD"], forca: 80 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 81 },
      { id: 'pablo-mari', nome: "Pablo Marí", posicoes: ["ZAG"], forca: 78 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL"], forca: 79 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC"], forca: 82 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 79 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 83 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 88 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 90 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD","PE"], forca: 76 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["ATA"], forca: 70 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 74 },
      { id: 'cuellar', nome: "Cuéllar", posicoes: ["VOL"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Santos",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 80 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 78 },
      { id: 'lucas-verissimo', nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 80 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 79 },
      { id: 'jorge', nome: "Jorge", posicoes: ["LE"], forca: 81 },
      { id: 'felipe-jonatan', nome: "Felipe Jonatan", posicoes: ["LE"], forca: 77 },
      { id: 'alison', nome: "Alison", posicoes: ["VOL"], forca: 77 },
      { id: 'diego-pituca', nome: "Diego Pituca", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'carlos-sanchez', nome: "Carlos Sánchez", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'jean-mota', nome: "Jean Mota", posicoes: ["MEI","MC"], forca: 79 },
      { id: 'soteldo', nome: "Soteldo", posicoes: ["PE","PD"], forca: 82 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD","ATA"], forca: 80 },
      { id: 'eduardo-sasha', nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 80 },
      { id: 'derlis-gonzalez', nome: "Derlis González", posicoes: ["PD"], forca: 77 },
      { id: 'fernando-uribe', nome: "Fernando Uribe", posicoes: ["ATA"], forca: 75 },
      { id: 'tailson', nome: "Tailson", posicoes: ["PE"], forca: 72 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 82 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 78 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 82 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 78 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 77 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 76 },
      { id: 'victor-luis', nome: "Victor Luis", posicoes: ["LE"], forca: 75 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL"], forca: 80 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["MC"], forca: 80 },
      { id: 'gustavo-scarpa', nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 79 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 76 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 84 },
      { id: 'deyverson', nome: "Deyverson", posicoes: ["ATA"], forca: 77 },
      { id: 'miguel-borja', nome: "Miguel Borja", posicoes: ["ATA"], forca: 76 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA","PD"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Grêmio",
    jogadores: [
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 76 },
      { id: 'leonardo-gomes', nome: "Leonardo Gomes", posicoes: ["LD"], forca: 75 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 82 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { id: 'cortez', nome: "Cortez", posicoes: ["LE"], forca: 77 },
      { id: 'maicon', nome: "Maicon", posicoes: ["VOL"], forca: 80 },
      { id: 'matheus-henrique', nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'michel', nome: "Michel", posicoes: ["MC"], forca: 74 },
      { id: 'jean-pyerre', nome: "Jean Pyerre", posicoes: ["MEI"], forca: 76 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 84 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 76 },
      { id: 'andre', nome: "André", posicoes: ["ATA"], forca: 73 },
      { id: 'pepe', nome: "Pepê", posicoes: ["PD","PE"], forca: 74 },
      { id: 'bressan', nome: "Bressan", posicoes: ["ZAG"], forca: 74 },
      { id: 'thaciano', nome: "Thaciano", posicoes: ["MEI"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'santos', nome: "Santos", posicoes: ["GOL"], forca: 81 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 77 },
      { id: 'madson', nome: "Madson", posicoes: ["LD"], forca: 75 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 80 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcio-azevedo', nome: "Márcio Azevedo", posicoes: ["LE"], forca: 75 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 77 },
      { id: 'bruno-guimaraes', nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 83 },
      { id: 'lucho-gonzalez', nome: "Lucho González", posicoes: ["MC"], forca: 77 },
      { id: 'leo-cittadini', nome: "Léo Cittadini", posicoes: ["MEI"], forca: 76 },
      { id: 'nikao', nome: "Nikão", posicoes: ["PD","MEI"], forca: 80 },
      { id: 'marcelo-cirino', nome: "Marcelo Cirino", posicoes: ["PD","ATA"], forca: 78 },
      { id: 'rony', nome: "Rony", posicoes: ["PE","ATA"], forca: 81 },
      { id: 'marco-ruben', nome: "Marco Ruben", posicoes: ["ATA"], forca: 78 },
      { id: 'camacho', nome: "Camacho", posicoes: ["MC"], forca: 75 },
      { id: 'adriano', nome: "Adriano", posicoes: ["LE"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "São Paulo",
    jogadores: [
      { id: 'tiago-volpi', nome: "Tiago Volpi", posicoes: ["GOL"], forca: 80 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD"], forca: 78 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 78 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 79 },
      { id: 'liziero', nome: "Liziero", posicoes: ["VOL"], forca: 76 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 77 },
      { id: 'daniel-alves', nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 81 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MEI"], forca: 78 },
      { id: 'igor-gomes', nome: "Igor Gomes", posicoes: ["MEI"], forca: 77 },
      { id: 'antony', nome: "Antony", posicoes: ["PD"], forca: 80 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 77 },
      { id: 'alexandre-pato', nome: "Alexandre Pato", posicoes: ["ATA"], forca: 78 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI"], forca: 76 },
      { id: 'everton', nome: "Everton", posicoes: ["PE"], forca: 76 },
      { id: 'toro', nome: "Toró", posicoes: ["PD"], forca: 73 }
    ]
  },

  // ===== Edição 2018 =====

  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 75 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 78 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 74 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 76 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 76 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 77 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 74 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL"], forca: 79 },
      { id: 'thiago-santos', nome: "Thiago Santos", posicoes: ["VOL"], forca: 74 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["MC"], forca: 75 },
      { id: 'moises', nome: "Moisés", posicoes: ["MC","MEI"], forca: 75 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 82 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA","PD"], forca: 78 },
      { id: 'miguel-borja', nome: "Miguel Borja", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 80 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 75 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 77 },
      { id: 'leo-duarte', nome: "Léo Duarte", posicoes: ["ZAG"], forca: 77 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 76 },
      { id: 'miguel-trauco', nome: "Miguel Trauco", posicoes: ["LE"], forca: 75 },
      { id: 'cuellar', nome: "Cuéllar", posicoes: ["VOL"], forca: 80 },
      { id: 'lucas-paqueta', nome: "Lucas Paquetá", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 81 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD","PE"], forca: 78 },
      { id: 'marlos-moreno', nome: "Marlos Moreno", posicoes: ["PE"], forca: 75 },
      { id: 'henrique-dourado', nome: "Henrique Dourado", posicoes: ["ATA"], forca: 77 },
      { id: 'fernando-uribe', nome: "Fernando Uribe", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Internacional",
    jogadores: [
      { id: 'marcelo-lomba', nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 80 },
      { id: 'danilo-fernandes', nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 75 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LD"], forca: 76 },
      { id: 'fabiano', nome: "Fabiano", posicoes: ["LD"], forca: 74 },
      { id: 'rodrigo-moledo', nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 79 },
      { id: 'victor-cuesta', nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 80 },
      { id: 'iago', nome: "Iago", posicoes: ["LE"], forca: 77 },
      { id: 'rodrigo-dourado', nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 81 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["MC"], forca: 81 },
      { id: 'patrick', nome: "Patrick", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 80 },
      { id: 'nico-lopez', nome: "Nico López", posicoes: ["PD","PE"], forca: 80 },
      { id: 'william-pottker', nome: "William Pottker", posicoes: ["PD"], forca: 77 },
      { id: 'leandro-damiao', nome: "Leandro Damião", posicoes: ["ATA"], forca: 79 },
      { id: 'rossi', nome: "Rossi", posicoes: ["PD","PE"], forca: 75 },
      { id: 'jonatan-alvez', nome: "Jonatan Álvez", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 80 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 74 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 81 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 79 },
      { id: 'bruno-cortez', nome: "Bruno Cortez", posicoes: ["LE"], forca: 75 },
      { id: 'maicon', nome: "Maicon", posicoes: ["VOL"], forca: 78 },
      { id: 'michel', nome: "Michel", posicoes: ["VOL"], forca: 73 },
      { id: 'jailson', nome: "Jailson", posicoes: ["VOL"], forca: 73 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["MC","MD"], forca: 75 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'everton', nome: "Everton", posicoes: ["PE","ATA"], forca: 80 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 74 },
      { id: 'andre', nome: "André", posicoes: ["ATA"], forca: 74 },
      { id: 'jael', nome: "Jael", posicoes: ["ATA"], forca: 72 },
      { id: 'bressan', nome: "Bressan", posicoes: ["ZAG"], forca: 73 },
      { id: 'thaciano', nome: "Thaciano", posicoes: ["MEI"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "São Paulo",
    jogadores: [
      { id: 'sidao', nome: "Sidão", posicoes: ["GOL"], forca: 76 },
      { id: 'jean', nome: "Jean", posicoes: ["GOL"], forca: 74 },
      { id: 'bruno-peres', nome: "Bruno Peres", posicoes: ["LD"], forca: 76 },
      { id: 'eder-militao', nome: "Éder Militão", posicoes: ["ZAG"], forca: 80 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 77 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 79 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 78 },
      { id: 'jucilei', nome: "Jucilei", posicoes: ["VOL"], forca: 77 },
      { id: 'liziero', nome: "Liziero", posicoes: ["MC"], forca: 76 },
      { id: 'nene', nome: "Nenê", posicoes: ["MEI"], forca: 81 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["ATA","MEI"], forca: 79 },
      { id: 'everton', nome: "Everton", posicoes: ["PE"], forca: 79 },
      { id: 'joao-rojas', nome: "Joao Rojas", posicoes: ["PD"], forca: 78 },
      { id: 'santiago-trellez', nome: "Santiago Tréllez", posicoes: ["ATA"], forca: 74 },
      { id: 'brenner', nome: "Brenner", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 80 },
      { id: 'patric', nome: "Patric", posicoes: ["LD"], forca: 75 },
      { id: 'emerson', nome: "Emerson", posicoes: ["LD"], forca: 76 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 78 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["ZAG"], forca: 76 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 78 },
      { id: 'adilson', nome: "Adilson", posicoes: ["VOL"], forca: 77 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 78 },
      { id: 'cazares', nome: "Cazares", posicoes: ["MEI"], forca: 80 },
      { id: 'luan', nome: "Luan", posicoes: ["PD"], forca: 78 },
      { id: 'chara', nome: "Chará", posicoes: ["PE"], forca: 77 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 81 },
      { id: 'tomas-andrade', nome: "Tomás Andrade", posicoes: ["MEI"], forca: 74 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PD","PE"], forca: 80 },
      { id: 'otero', nome: "Otero", posicoes: ["MEI","PE"], forca: 77 },
      { id: 'alerrandro', nome: "Alerrandro", posicoes: ["ATA"], forca: 73 }
    ]
  },

  // ===== Edição 2017 =====

  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 83 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 81 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ZAG"], forca: 79 },
      { id: 'pedro-henrique', nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 75 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 81 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["VOL"], forca: 79 },
      { id: 'maycon', nome: "Maycon", posicoes: ["MC"], forca: 79 },
      { id: 'rodriguinho', nome: "Rodriguinho", posicoes: ["MEI"], forca: 82 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 82 },
      { id: 'angel-romero', nome: "Ángel Romero", posicoes: ["PD"], forca: 80 },
      { id: 'clayson', nome: "Clayson", posicoes: ["PE"], forca: 77 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 85 },
      { id: 'kazim', nome: "Kazim", posicoes: ["ATA"], forca: 73 },
      { id: 'marquinhos-gabriel', nome: "Marquinhos Gabriel", posicoes: ["MEI"], forca: 76 },
      { id: 'camacho', nome: "Camacho", posicoes: ["MC"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Palmeiras",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 79 },
      { id: 'jailson', nome: "Jailson", posicoes: ["GOL"], forca: 78 },
      { id: 'jean', nome: "Jean", posicoes: ["LD"], forca: 77 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 74 },
      { id: 'yerry-mina', nome: "Yerry Mina", posicoes: ["ZAG"], forca: 82 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 77 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 75 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 76 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 80 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL"], forca: 80 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 78 },
      { id: 'moises', nome: "Moisés", posicoes: ["MC","MEI"], forca: 76 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 83 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA","PD"], forca: 79 },
      { id: 'miguel-borja', nome: "Miguel Borja", posicoes: ["ATA"], forca: 78 },
      { id: 'keno', nome: "Keno", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Santos",
    jogadores: [
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["GOL"], forca: 82 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 79 },
      { id: 'lucas-verissimo', nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 78 },
      { id: 'david-braz', nome: "David Braz", posicoes: ["ZAG"], forca: 77 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 77 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'renato', nome: "Renato", posicoes: ["VOL"], forca: 78 },
      { id: 'alison', nome: "Alison", posicoes: ["VOL"], forca: 76 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 79 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 82 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE"], forca: 82 },
      { id: 'copete', nome: "Copete", posicoes: ["PE"], forca: 77 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 81 },
      { id: 'kayke', nome: "Kayke", posicoes: ["ATA"], forca: 74 },
      { id: 'rodrygo', nome: "Rodrygo", posicoes: ["PD"], forca: 73 },
      { id: 'jean-mota', nome: "Jean Mota", posicoes: ["MEI"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 84 },
      { id: 'edilson', nome: "Edílson", posicoes: ["LD"], forca: 77 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 83 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-cortez', nome: "Bruno Cortez", posicoes: ["LE"], forca: 78 },
      { id: 'maicon', nome: "Maicon", posicoes: ["VOL"], forca: 81 },
      { id: 'arthur', nome: "Arthur", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'michel', nome: "Michel", posicoes: ["VOL"], forca: 75 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["MC","MD"], forca: 78 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MEI"], forca: 75 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 79 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PD"], forca: 74 },
      { id: 'lucas-barrios', nome: "Lucas Barrios", posicoes: ["ATA"], forca: 77 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["PD","ATA"], forca: 75 },
      { id: 'bressan', nome: "Bressan", posicoes: ["ZAG"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 82 },
      { id: 'ezequiel', nome: "Ezequiel", posicoes: ["LD"], forca: 75 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 78 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 77 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 77 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL"], forca: 80 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 77 },
      { id: 'lucas-romero', nome: "Lucas Romero", posicoes: ["VOL"], forca: 77 },
      { id: 'robinho', nome: "Robinho", posicoes: ["MEI"], forca: 78 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 82 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 83 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 77 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 79 },
      { id: 'sassa', nome: "Sassá", posicoes: ["ATA"], forca: 75 },
      { id: 'ramon-abila', nome: "Ramón Ábila", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 80 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 75 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 80 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 77 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 76 },
      { id: 'miguel-trauco', nome: "Miguel Trauco", posicoes: ["LE"], forca: 77 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 75 },
      { id: 'marcio-araujo', nome: "Márcio Araújo", posicoes: ["VOL"], forca: 76 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL"], forca: 79 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 82 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 82 },
      { id: 'everton', nome: "Éverton", posicoes: ["PE"], forca: 78 },
      { id: 'orlando-berrio', nome: "Orlando Berrío", posicoes: ["PD"], forca: 77 },
      { id: 'paolo-guerrero', nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 82 },
      { id: 'vinicius-junior', nome: "Vinícius Júnior", posicoes: ["PE"], forca: 75 }
    ]
  },

  // ===== Edição 2016 =====

  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Palmeiras",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { id: 'jailson', nome: "Jailson", posicoes: ["GOL"], forca: 81 },
      { id: 'jean', nome: "Jean", posicoes: ["LD"], forca: 78 },
      { id: 'fabiano', nome: "Fabiano", posicoes: ["LD"], forca: 77 },
      { id: 'yerry-mina', nome: "Yerry Mina", posicoes: ["ZAG"], forca: 81 },
      { id: 'vitor-hugo', nome: "Vitor Hugo", posicoes: ["ZAG"], forca: 81 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 77 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 76 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 80 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 80 },
      { id: 'moises', nome: "Moisés", posicoes: ["MEI"], forca: 81 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MEI"], forca: 76 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 83 },
      { id: 'gabriel-jesus', nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 86 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PE"], forca: 78 },
      { id: 'lucas-barrios', nome: "Lucas Barrios", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Santos",
    jogadores: [
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["GOL"], forca: 81 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 79 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 78 },
      { id: 'david-braz', nome: "David Braz", posicoes: ["ZAG"], forca: 77 },
      { id: 'luiz-felipe', nome: "Luiz Felipe", posicoes: ["ZAG"], forca: 75 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'renato', nome: "Renato", posicoes: ["VOL"], forca: 78 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 79 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 83 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI","PD"], forca: 80 },
      { id: 'copete', nome: "Copete", posicoes: ["PE"], forca: 77 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["PD","ATA"], forca: 83 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 81 },
      { id: 'rodrigao', nome: "Rodrigão", posicoes: ["ATA"], forca: 76 },
      { id: 'jean-mota', nome: "Jean Mota", posicoes: ["MEI"], forca: 75 },
      { id: 'leo-cittadini', nome: "Léo Cittadini", posicoes: ["MC"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Flamengo",
    jogadores: [
      { id: 'alex-muralha', nome: "Alex Muralha", posicoes: ["GOL"], forca: 79 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 75 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { id: 'rafael-vaz', nome: "Rafael Vaz", posicoes: ["ZAG"], forca: 76 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 76 },
      { id: 'jorge', nome: "Jorge", posicoes: ["LE"], forca: 78 },
      { id: 'marcio-araujo', nome: "Márcio Araújo", posicoes: ["VOL"], forca: 76 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL"], forca: 79 },
      { id: 'mancuello', nome: "Mancuello", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MEI"], forca: 78 },
      { id: 'everton', nome: "Éverton", posicoes: ["PE"], forca: 78 },
      { id: 'paolo-guerrero', nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 82 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PE"], forca: 77 },
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 81 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { id: 'erazo', nome: "Erazo", posicoes: ["ZAG"], forca: 76 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 79 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["ZAG"], forca: 75 },
      { id: 'douglas-santos', nome: "Douglas Santos", posicoes: ["LE"], forca: 80 },
      { id: 'junior-urso', nome: "Júnior Urso", posicoes: ["VOL"], forca: 78 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 78 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 79 },
      { id: 'cazares', nome: "Cazares", posicoes: ["MEI"], forca: 80 },
      { id: 'robinho', nome: "Robinho", posicoes: ["PD"], forca: 83 },
      { id: 'luan', nome: "Luan", posicoes: ["PE"], forca: 79 },
      { id: 'maicosuel', nome: "Maicosuel", posicoes: ["PD"], forca: 77 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 82 },
      { id: 'lucas-pratto', nome: "Lucas Pratto", posicoes: ["ATA"], forca: 82 },
      { id: 'carlos', nome: "Carlos", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Botafogo",
    jogadores: [
      { id: 'sidao', nome: "Sidão", posicoes: ["GOL"], forca: 78 },
      { id: 'jefferson', nome: "Jefferson", posicoes: ["GOL"], forca: 79 },
      { id: 'luis-ricardo', nome: "Luis Ricardo", posicoes: ["LD"], forca: 75 },
      { id: 'emerson-santos', nome: "Emerson Santos", posicoes: ["ZAG"], forca: 76 },
      { id: 'joel-carli', nome: "Joel Carli", posicoes: ["ZAG"], forca: 78 },
      { id: 'renan-fonseca', nome: "Renan Fonseca", posicoes: ["ZAG"], forca: 75 },
      { id: 'victor-luis', nome: "Victor Luis", posicoes: ["LE"], forca: 76 },
      { id: 'bruno-silva', nome: "Bruno Silva", posicoes: ["VOL"], forca: 78 },
      { id: 'airton', nome: "Airton", posicoes: ["VOL"], forca: 76 },
      { id: 'rodrigo-lindoso', nome: "Rodrigo Lindoso", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'camilo', nome: "Camilo", posicoes: ["MEI"], forca: 81 },
      { id: 'neilton', nome: "Neilton", posicoes: ["PE"], forca: 78 },
      { id: 'sassa', nome: "Sassá", posicoes: ["ATA"], forca: 78 },
      { id: 'rodrigo-pimpao', nome: "Rodrigo Pimpão", posicoes: ["ATA","PE"], forca: 77 },
      { id: 'canales', nome: "Canales", posicoes: ["ATA"], forca: 74 },
      { id: 'ribamar', nome: "Ribamar", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { id: 'leo', nome: "Léo", posicoes: ["LD"], forca: 75 },
      { id: 'paulo-andre', nome: "Paulo André", posicoes: ["ZAG"], forca: 77 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { id: 'sidcley', nome: "Sidcley", posicoes: ["LE"], forca: 77 },
      { id: 'otavio', nome: "Otávio", posicoes: ["VOL"], forca: 77 },
      { id: 'hernani', nome: "Hernani", posicoes: ["VOL"], forca: 78 },
      { id: 'deivid', nome: "Deivid", posicoes: ["VOL"], forca: 76 },
      { id: 'nikao', nome: "Nikão", posicoes: ["MEI","PD"], forca: 79 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 76 },
      { id: 'andre-lima', nome: "André Lima", posicoes: ["ATA"], forca: 76 },
      { id: 'walter', nome: "Walter", posicoes: ["ATA"], forca: 75 },
      { id: 'marcos-guilherme', nome: "Marcos Guilherme", posicoes: ["PD"], forca: 77 },
      { id: 'lucas-fernandes', nome: "Lucas Fernandes", posicoes: ["MC"], forca: 74 },
      { id: 'juninho', nome: "Juninho", posicoes: ["ZAG"], forca: 73 },
      { id: 'lucho-gonzalez', nome: "Lucho González", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 2015 =====

  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 84 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 81 },
      { id: 'felipe', nome: "Felipe", posicoes: ["ZAG"], forca: 82 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 82 },
      { id: 'uendel', nome: "Uendel", posicoes: ["LE"], forca: 79 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 83 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MEI"], forca: 86 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 85 },
      { id: 'malcom', nome: "Malcom", posicoes: ["PE"], forca: 79 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 79 },
      { id: 'rodriguinho', nome: "Rodriguinho", posicoes: ["MEI"], forca: 77 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'lucca', nome: "Lucca", posicoes: ["PE"], forca: 76 },
      { id: 'luciano', nome: "Luciano", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 81 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 80 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 81 },
      { id: 'douglas-santos', nome: "Douglas Santos", posicoes: ["LE"], forca: 80 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 78 },
      { id: 'jesus-datolo', nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 81 },
      { id: 'luan', nome: "Luan", posicoes: ["PD"], forca: 80 },
      { id: 'giovanni-augusto', nome: "Giovanni Augusto", posicoes: ["MEI"], forca: 80 },
      { id: 'lucas-pratto', nome: "Lucas Pratto", posicoes: ["ATA"], forca: 84 },
      { id: 'carlos', nome: "Carlos", posicoes: ["ATA"], forca: 76 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["PE"], forca: 77 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { id: 'patric', nome: "Patric", posicoes: ["LD"], forca: 75 },
      { id: 'junior-urso', nome: "Júnior Urso", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 82 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["LD"], forca: 76 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 82 },
      { id: 'erazo', nome: "Erazo", posicoes: ["ZAG"], forca: 77 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["LE"], forca: 76 },
      { id: 'walace', nome: "Walace", posicoes: ["VOL"], forca: 79 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 80 },
      { id: 'giuliano', nome: "Giuliano", posicoes: ["MEI"], forca: 81 },
      { id: 'douglas', nome: "Douglas", posicoes: ["MEI"], forca: 79 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["PD"], forca: 77 },
      { id: 'bobo', nome: "Bobô", posicoes: ["ATA"], forca: 75 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PE"], forca: 76 },
      { id: 'everton', nome: "Everton", posicoes: ["PE"], forca: 75 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["MC"], forca: 76 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { id: 'bruno', nome: "Bruno", posicoes: ["LD"], forca: 75 },
      { id: 'rafael-toloi', nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 78 },
      { id: 'lucao', nome: "Lucão", posicoes: ["ZAG"], forca: 74 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG","VOL"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 76 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 75 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 76 },
      { id: 'thiago-mendes', nome: "Thiago Mendes", posicoes: ["MC"], forca: 78 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 81 },
      { id: 'michel-bastos', nome: "Michel Bastos", posicoes: ["MEI","PE"], forca: 80 },
      { id: 'centurion', nome: "Centurión", posicoes: ["PD"], forca: 75 },
      { id: 'alexandre-pato', nome: "Alexandre Pato", posicoes: ["ATA"], forca: 82 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 81 },
      { id: 'alan-kardec', nome: "Alan Kardec", posicoes: ["ATA"], forca: 77 },
      { id: 'denis', nome: "Denis", posicoes: ["GOL"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Internacional",
    jogadores: [
      { id: 'alisson', nome: "Alisson", posicoes: ["GOL"], forca: 82 },
      { id: 'muriel', nome: "Muriel", posicoes: ["GOL"], forca: 74 },
      { id: 'william', nome: "William", posicoes: ["LD"], forca: 77 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 78 },
      { id: 'ernando', nome: "Ernando", posicoes: ["ZAG"], forca: 76 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 77 },
      { id: 'geferson', nome: "Geferson", posicoes: ["LE"], forca: 75 },
      { id: 'charles-aranguiz', nome: "Charles Aránguiz", posicoes: ["MC"], forca: 82 },
      { id: 'rodrigo-dourado', nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 78 },
      { id: 'anderson', nome: "Anderson", posicoes: ["MC"], forca: 77 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 79 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 81 },
      { id: 'valdivia', nome: "Valdívia", posicoes: ["MEI"], forca: 78 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PE"], forca: 80 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 80 },
      { id: 'lisandro-lopez', nome: "Lisandro López", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Sport",
    jogadores: [
      { id: 'danilo-fernandes', nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 78 },
      { id: 'samuel-xavier', nome: "Samuel Xavier", posicoes: ["LD"], forca: 76 },
      { id: 'durval', nome: "Durval", posicoes: ["ZAG"], forca: 78 },
      { id: 'matheus-ferraz', nome: "Matheus Ferraz", posicoes: ["ZAG"], forca: 76 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 76 },
      { id: 'rithely', nome: "Rithely", posicoes: ["VOL"], forca: 80 },
      { id: 'wendel', nome: "Wendel", posicoes: ["VOL"], forca: 76 },
      { id: 'rodrigo-mancha', nome: "Rodrigo Mancha", posicoes: ["VOL"], forca: 75 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 82 },
      { id: 'marlone', nome: "Marlone", posicoes: ["MEI","PE"], forca: 79 },
      { id: 'elber', nome: "Élber", posicoes: ["PE"], forca: 76 },
      { id: 'andre', nome: "André", posicoes: ["ATA"], forca: 81 },
      { id: 'maikon-leite', nome: "Maikon Leite", posicoes: ["PD"], forca: 76 },
      { id: 'regis', nome: "Régis", posicoes: ["MEI"], forca: 75 },
      { id: 'neto-moura', nome: "Neto Moura", posicoes: ["MC"], forca: 74 },
      { id: 'ferrugem', nome: "Ferrugem", posicoes: ["LD"], forca: 73 }
    ]
  },

  // ===== Edição 2014 =====

  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { id: 'ceara', nome: "Ceará", posicoes: ["LD"], forca: 78 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 79 },
      { id: 'bruno-rodrigo', nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 78 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 80 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL"], forca: 82 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 78 },
      { id: 'henrique', nome: "Henrique", posicoes: ["MC"], forca: 79 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 87 },
      { id: 'ricardo-goulart', nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PD","PE"], forca: 78 },
      { id: 'willian', nome: "Willian", posicoes: ["PD","PE"], forca: 80 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PE"], forca: 78 },
      { id: 'marcelo-moreno', nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { id: 'douglas', nome: "Douglas", posicoes: ["LD"], forca: 76 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 76 },
      { id: 'rafael-toloi', nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 78 },
      { id: 'alvaro-pereira', nome: "Álvaro Pereira", posicoes: ["LE"], forca: 78 },
      { id: 'souza', nome: "Souza", posicoes: ["VOL"], forca: 78 },
      { id: 'denilson', nome: "Denilson", posicoes: ["VOL"], forca: 77 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 77 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 82 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 84 },
      { id: 'alexandre-pato', nome: "Alexandre Pato", posicoes: ["ATA"], forca: 81 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 82 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["PE"], forca: 77 },
      { id: 'ademilson', nome: "Ademilson", posicoes: ["ATA"], forca: 75 },
      { id: 'boschilia', nome: "Boschilia", posicoes: ["MEI"], forca: 74 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Internacional",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 80 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["LD"], forca: 75 },
      { id: 'paulao', nome: "Paulão", posicoes: ["ZAG"], forca: 76 },
      { id: 'ernando', nome: "Ernando", posicoes: ["ZAG"], forca: 76 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["LE"], forca: 78 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 77 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 76 },
      { id: 'charles-aranguiz', nome: "Charles Aránguiz", posicoes: ["MC"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 79 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 82 },
      { id: 'valdivia', nome: "Valdívia", posicoes: ["MEI"], forca: 76 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MEI"], forca: 76 },
      { id: 'rafael-moura', nome: "Rafael Moura", posicoes: ["ATA"], forca: 78 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 77 },
      { id: 'otavio', nome: "Otávio", posicoes: ["PD"], forca: 76 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 82 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 81 },
      { id: 'felipe', nome: "Felipe", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 81 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MEI"], forca: 81 },
      { id: 'guerrero', nome: "Guerrero", posicoes: ["ATA"], forca: 82 },
      { id: 'romarinho', nome: "Romarinho", posicoes: ["PD"], forca: 78 },
      { id: 'malcom', nome: "Malcom", posicoes: ["PE"], forca: 75 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 78 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["VOL"], forca: 77 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 80 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 77 },
      { id: 'douglas-santos', nome: "Douglas Santos", posicoes: ["LE"], forca: 78 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 78 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 77 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 76 },
      { id: 'jesus-datolo', nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 80 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI"], forca: 83 },
      { id: 'diego-tardelli', nome: "Diego Tardelli", posicoes: ["ATA"], forca: 83 },
      { id: 'luan', nome: "Luan", posicoes: ["PD"], forca: 79 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 79 },
      { id: 'marion', nome: "Marion", posicoes: ["PE"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Fluminense",
    jogadores: [
      { id: 'diego-cavalieri', nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 81 },
      { id: 'bruno', nome: "Bruno", posicoes: ["LD"], forca: 76 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 78 },
      { id: 'elivelton', nome: "Elivelton", posicoes: ["ZAG"], forca: 75 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 78 },
      { id: 'jean', nome: "Jean", posicoes: ["VOL"], forca: 80 },
      { id: 'edson', nome: "Edson", posicoes: ["VOL"], forca: 76 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MC"], forca: 79 },
      { id: 'dario-conca', nome: "Darío Conca", posicoes: ["MEI"], forca: 84 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 78 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 83 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 80 },
      { id: 'walter', nome: "Walter", posicoes: ["ATA"], forca: 77 },
      { id: 'kenedy', nome: "Kenedy", posicoes: ["PE"], forca: 75 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 2013 =====

  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 83 },
      { id: 'ceara', nome: "Ceará", posicoes: ["LD"], forca: 78 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 82 },
      { id: 'bruno-rodrigo', nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 78 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 79 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 79 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["MC"], forca: 78 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { id: 'ricardo-goulart', nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MEI"], forca: 80 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PE"], forca: 79 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 80 },
      { id: 'willian', nome: "Willian", posicoes: ["PD","ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Grêmio",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 80 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 76 },
      { id: 'werley', nome: "Werley", posicoes: ["ZAG"], forca: 77 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 79 },
      { id: 'alex-telles', nome: "Alex Telles", posicoes: ["LE"], forca: 79 },
      { id: 'souza', nome: "Souza", posicoes: ["VOL"], forca: 79 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'cristian-riveros', nome: "Cristian Riveros", posicoes: ["MC"], forca: 78 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 82 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI"], forca: 80 },
      { id: 'maxi-rodriguez', nome: "Maxi Rodríguez", posicoes: ["MEI"], forca: 76 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 79 },
      { id: 'barcos', nome: "Barcos", posicoes: ["ATA"], forca: 81 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA","PE"], forca: 80 },
      { id: 'welliton', nome: "Welliton", posicoes: ["ATA"], forca: 76 },
      { id: 'matheus-biteco', nome: "Matheus Biteco", posicoes: ["MEI"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["LD"], forca: 76 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 80 },
      { id: 'luiz-alberto', nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 76 },
      { id: 'pedro-botelho', nome: "Pedro Botelho", posicoes: ["LE"], forca: 77 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["VOL"], forca: 76 },
      { id: 'deivid', nome: "Deivid", posicoes: ["VOL"], forca: 76 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["MEI"], forca: 82 },
      { id: 'everton', nome: "Everton", posicoes: ["MEI"], forca: 78 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["ATA"], forca: 79 },
      { id: 'ederson', nome: "Ederson", posicoes: ["ATA"], forca: 84 },
      { id: 'dellatorre', nome: "Dellatorre", posicoes: ["ATA"], forca: 74 },
      { id: 'zezinho', nome: "Zezinho", posicoes: ["MEI"], forca: 74 },
      { id: 'cleberson', nome: "Cleberson", posicoes: ["ZAG"], forca: 74 },
      { id: 'bruno-silva', nome: "Bruno Silva", posicoes: ["MC"], forca: 75 },
      { id: 'roger', nome: "Roger", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Botafogo",
    jogadores: [
      { id: 'jefferson', nome: "Jefferson", posicoes: ["GOL"], forca: 83 },
      { id: 'lucas', nome: "Lucas", posicoes: ["LD"], forca: 76 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["ZAG"], forca: 78 },
      { id: 'doria', nome: "Dória", posicoes: ["ZAG"], forca: 79 },
      { id: 'julio-cesar', nome: "Julio Cesar", posicoes: ["LE"], forca: 76 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["VOL"], forca: 77 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 77 },
      { id: 'seedorf', nome: "Seedorf", posicoes: ["MEI"], forca: 86 },
      { id: 'lodeiro', nome: "Lodeiro", posicoes: ["MEI"], forca: 81 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PE"], forca: 79 },
      { id: 'rafael-marques', nome: "Rafael Marques", posicoes: ["ATA"], forca: 79 },
      { id: 'elias', nome: "Elias", posicoes: ["ATA"], forca: 76 },
      { id: 'bruno-mendes', nome: "Bruno Mendes", posicoes: ["ATA"], forca: 75 },
      { id: 'hyuri', nome: "Hyuri", posicoes: ["PE"], forca: 75 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 76 },
      { id: 'gege', nome: "Gegê", posicoes: ["MEI"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Vitória",
    jogadores: [
      { id: 'wilson', nome: "Wilson", posicoes: ["GOL"], forca: 78 },
      { id: 'ayrton', nome: "Ayrton", posicoes: ["LD"], forca: 77 },
      { id: 'kadu', nome: "Kadu", posicoes: ["ZAG"], forca: 76 },
      { id: 'victor-ramos', nome: "Victor Ramos", posicoes: ["ZAG"], forca: 76 },
      { id: 'danilo-tarracha', nome: "Danilo Tarracha", posicoes: ["LE"], forca: 74 },
      { id: 'caceres', nome: "Cáceres", posicoes: ["VOL"], forca: 78 },
      { id: 'michel', nome: "Michel", posicoes: ["VOL"], forca: 76 },
      { id: 'escudero', nome: "Escudero", posicoes: ["MEI"], forca: 80 },
      { id: 'renato-caja', nome: "Renato Cajá", posicoes: ["MEI"], forca: 79 },
      { id: 'maxi-biancucchi', nome: "Maxi Biancucchi", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["ATA"], forca: 78 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 79 },
      { id: 'william-henrique', nome: "William Henrique", posicoes: ["PE"], forca: 76 },
      { id: 'juan', nome: "Juan", posicoes: ["LE","ME"], forca: 75 },
      { id: 'neto-coruja', nome: "Neto Coruja", posicoes: ["VOL"], forca: 75 },
      { id: 'pedro-oldoni', nome: "Pedro Oldoni", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Goiás",
    jogadores: [
      { id: 'renan', nome: "Renan", posicoes: ["GOL"], forca: 79 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 75 },
      { id: 'ernando', nome: "Ernando", posicoes: ["ZAG"], forca: 77 },
      { id: 'rodrigo', nome: "Rodrigo", posicoes: ["ZAG"], forca: 76 },
      { id: 'william-matheus', nome: "William Matheus", posicoes: ["LE"], forca: 76 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 76 },
      { id: 'david', nome: "David", posicoes: ["VOL"], forca: 75 },
      { id: 'thiago-mendes', nome: "Thiago Mendes", posicoes: ["MC"], forca: 77 },
      { id: 'hugo', nome: "Hugo", posicoes: ["MEI"], forca: 78 },
      { id: 'walter', nome: "Walter", posicoes: ["ATA"], forca: 82 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 77 },
      { id: 'erik', nome: "Erik", posicoes: ["PE"], forca: 75 },
      { id: 'roni', nome: "Roni", posicoes: ["PD"], forca: 75 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI"], forca: 74 },
      { id: 'tarta', nome: "Tartá", posicoes: ["PE"], forca: 73 },
      { id: 'dudu-cearense', nome: "Dudu Cearense", posicoes: ["VOL"], forca: 77 }
    ]
  },

  // ===== Edição 2012 =====

  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Fluminense",
    jogadores: [
      { id: 'diego-cavalieri', nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 82 },
      { id: 'bruno', nome: "Bruno", posicoes: ["LD"], forca: 76 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 79 },
      { id: 'leandro-euzebio', nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 79 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 79 },
      { id: 'jean', nome: "Jean", posicoes: ["VOL"], forca: 82 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 78 },
      { id: 'valencia', nome: "Valencia", posicoes: ["VOL"], forca: 77 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 81 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 82 },
      { id: 'wellington-nem', nome: "Wellington Nem", posicoes: ["PE"], forca: 80 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 80 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 86 },
      { id: 'samuel', nome: "Samuel", posicoes: ["ATA"], forca: 75 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 77 },
      { id: 'marcos-junior', nome: "Marcos Júnior", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["GOL"], forca: 75 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 82 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior-cesar', nome: "Júnior César", posicoes: ["LE"], forca: 77 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["VOL"], forca: 77 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 79 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 77 },
      { id: 'bernard', nome: "Bernard", posicoes: ["PE"], forca: 83 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI"], forca: 86 },
      { id: 'danilinho', nome: "Danilinho", posicoes: ["PD"], forca: 78 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 80 },
      { id: 'escudero', nome: "Escudero", posicoes: ["MEI"], forca: 76 },
      { id: 'neto-berola', nome: "Neto Berola", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 79 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 76 },
      { id: 'werley', nome: "Werley", posicoes: ["ZAG"], forca: 77 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["ZAG"], forca: 79 },
      { id: 'naldo', nome: "Naldo", posicoes: ["ZAG"], forca: 76 },
      { id: 'anderson-pico', nome: "Anderson Pico", posicoes: ["LE"], forca: 75 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 80 },
      { id: 'souza', nome: "Souza", posicoes: ["VOL"], forca: 79 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI"], forca: 80 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["MEI"], forca: 76 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 79 },
      { id: 'marcelo-moreno', nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 80 },
      { id: 'leandro', nome: "Leandro", posicoes: ["PE"], forca: 76 },
      { id: 'andre-lima', nome: "André Lima", posicoes: ["ATA"], forca: 77 },
      { id: 'bertoglio', nome: "Bertoglio", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { id: 'douglas', nome: "Douglas", posicoes: ["LD"], forca: 76 },
      { id: 'paulo-miranda', nome: "Paulo Miranda", posicoes: ["ZAG"], forca: 76 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 78 },
      { id: 'cortez', nome: "Cortez", posicoes: ["LE"], forca: 78 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 77 },
      { id: 'denilson', nome: "Denilson", posicoes: ["VOL"], forca: 78 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 77 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 81 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["PD"], forca: 84 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["PE"], forca: 78 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 83 },
      { id: 'willian-jose', nome: "Willian José", posicoes: ["ATA"], forca: 76 },
      { id: 'ademilson', nome: "Ademilson", posicoes: ["ATA"], forca: 74 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Vasco",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { id: 'fagner', nome: "Fágner", posicoes: ["LD"], forca: 80 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 83 },
      { id: 'renato-silva', nome: "Renato Silva", posicoes: ["ZAG"], forca: 76 },
      { id: 'thiago-feltri', nome: "Thiago Feltri", posicoes: ["LE"], forca: 75 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 78 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 83 },
      { id: 'felipe', nome: "Felipe", posicoes: ["MEI"], forca: 80 },
      { id: 'wendel', nome: "Wendel", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'eder-luis', nome: "Éder Luís", posicoes: ["PD"], forca: 79 },
      { id: 'alecsandro', nome: "Alecsandro", posicoes: ["ATA"], forca: 80 },
      { id: 'carlos-tenorio', nome: "Carlos Tenorio", posicoes: ["ATA"], forca: 76 },
      { id: 'william-barbio', nome: "William Barbio", posicoes: ["PD"], forca: 75 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 76 },
      { id: 'felipe-bastos', nome: "Felipe Bastos", posicoes: ["VOL"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 83 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-andre', nome: "Paulo André", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["MC"], forca: 84 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["MEI"], forca: 78 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["PD"], forca: 81 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 79 },
      { id: 'guerrero', nome: "Guerrero", posicoes: ["ATA"], forca: 81 },
      { id: 'romarinho', nome: "Romarinho", posicoes: ["ATA"], forca: 78 },
      { id: 'liedson', nome: "Liedson", posicoes: ["ATA"], forca: 77 },
      { id: 'martinez', nome: "Martínez", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2011 =====

  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Corinthians",
    jogadores: [
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["GOL"], forca: 79 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ZAG"], forca: 79 },
      { id: 'leandro-castan', nome: "Leandro Castán", posicoes: ["ZAG"], forca: 81 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["MC"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 80 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 79 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA"], forca: 80 },
      { id: 'liedson', nome: "Liedson", posicoes: ["ATA"], forca: 82 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["PD"], forca: 80 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["VOL","LD"], forca: 76 },
      { id: 'ramirez', nome: "Ramírez", posicoes: ["MC"], forca: 76 },
      { id: 'morais', nome: "Morais", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Vasco",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 83 },
      { id: 'anderson-martins', nome: "Anderson Martins", posicoes: ["ZAG"], forca: 79 },
      { id: 'renato-silva', nome: "Renato Silva", posicoes: ["ZAG"], forca: 76 },
      { id: 'julinho', nome: "Julinho", posicoes: ["LE"], forca: 75 },
      { id: 'romulo', nome: "Rômulo", posicoes: ["VOL"], forca: 80 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 78 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MEI"], forca: 83 },
      { id: 'felipe', nome: "Felipe", posicoes: ["MEI"], forca: 80 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["MEI"], forca: 77 },
      { id: 'eder-luis', nome: "Éder Luís", posicoes: ["PD"], forca: 79 },
      { id: 'alecsandro', nome: "Alecsandro", posicoes: ["ATA"], forca: 80 },
      { id: 'elton', nome: "Elton", posicoes: ["ATA"], forca: 76 },
      { id: 'allan', nome: "Allan", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Fluminense",
    jogadores: [
      { id: 'diego-cavalieri', nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 80 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 79 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 78 },
      { id: 'leandro-euzebio', nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 78 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 78 },
      { id: 'valencia', nome: "Valencia", posicoes: ["VOL"], forca: 77 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 77 },
      { id: 'marquinho', nome: "Marquinho", posicoes: ["MC"], forca: 78 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 81 },
      { id: 'dario-conca', nome: "Darío Conca", posicoes: ["MEI"], forca: 82 },
      { id: 'rafael-moura', nome: "Rafael Moura", posicoes: ["ATA"], forca: 81 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 85 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 79 },
      { id: 'manuel-lanzini', nome: "Manuel Lanzini", posicoes: ["MEI"], forca: 77 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 76 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Flamengo",
    jogadores: [
      { id: 'felipe', nome: "Felipe", posicoes: ["GOL"], forca: 79 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 81 },
      { id: 'welinton', nome: "Welinton", posicoes: ["ZAG"], forca: 75 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 78 },
      { id: 'junior-cesar', nome: "Junior Cesar", posicoes: ["LE"], forca: 77 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["VOL"], forca: 77 },
      { id: 'airton', nome: "Airton", posicoes: ["VOL"], forca: 76 },
      { id: 'renato-abreu', nome: "Renato Abreu", posicoes: ["MC"], forca: 80 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 83 },
      { id: 'bottinelli', nome: "Bottinelli", posicoes: ["MEI"], forca: 76 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 78 },
      { id: 'diego-mauricio', nome: "Diego Maurício", posicoes: ["ATA"], forca: 75 },
      { id: 'jael', nome: "Jael", posicoes: ["ATA"], forca: 75 },
      { id: 'wanderley', nome: "Wanderley", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Internacional",
    jogadores: [
      { id: 'muriel', nome: "Muriel", posicoes: ["GOL"], forca: 78 },
      { id: 'nei', nome: "Nei", posicoes: ["LD"], forca: 76 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 78 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["ZAG"], forca: 78 },
      { id: 'kleber', nome: "Kleber", posicoes: ["LE"], forca: 79 },
      { id: 'guinazu', nome: "Guiñazú", posicoes: ["VOL"], forca: 81 },
      { id: 'bolatti', nome: "Bolatti", posicoes: ["VOL"], forca: 77 },
      { id: 'tinga', nome: "Tinga", posicoes: ["MC"], forca: 78 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 83 },
      { id: 'oscar', nome: "Oscar", posicoes: ["MEI"], forca: 82 },
      { id: 'leandro-damiao', nome: "Leandro Damião", posicoes: ["ATA"], forca: 84 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PE"], forca: 76 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI"], forca: 78 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["ATA"], forca: 76 },
      { id: 'dellatorre', nome: "Dellatorre", posicoes: ["ATA"], forca: 73 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { id: 'ivan-piris', nome: "Iván Piris", posicoes: ["LD"], forca: 76 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 78 },
      { id: 'xandao', nome: "Xandão", posicoes: ["ZAG"], forca: 75 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 76 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL"], forca: 79 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 77 },
      { id: 'denilson', nome: "Denilson", posicoes: ["VOL"], forca: 77 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MC"], forca: 78 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["PD"], forca: 83 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA"], forca: 82 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 78 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ATA"], forca: 75 },
      { id: 'marlos', nome: "Marlos", posicoes: ["PE"], forca: 77 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 2010 =====

  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Fluminense",
    jogadores: [
      { id: 'fernando-henrique', nome: "Fernando Henrique", posicoes: ["GOL"], forca: 78 },
      { id: 'ricardo-berna', nome: "Ricardo Berna", posicoes: ["GOL"], forca: 76 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 80 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 78 },
      { id: 'leandro-euzebio', nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 78 },
      { id: 'andre-luis', nome: "André Luis", posicoes: ["ZAG"], forca: 76 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 78 },
      { id: 'julio-cesar', nome: "Julio Cesar", posicoes: ["LE"], forca: 76 },
      { id: 'diogo', nome: "Diogo", posicoes: ["VOL"], forca: 77 },
      { id: 'diguinho', nome: "Diguinho", posicoes: ["VOL"], forca: 78 },
      { id: 'valencia', nome: "Valencia", posicoes: ["VOL"], forca: 77 },
      { id: 'dario-conca', nome: "Darío Conca", posicoes: ["MEI"], forca: 87 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 81 },
      { id: 'marquinho', nome: "Marquinho", posicoes: ["MC"], forca: 78 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 83 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 82 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 79 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 78 },
      { id: 'diego-renan', nome: "Diego Renan", posicoes: ["LE"], forca: 78 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["VOL"], forca: 80 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL"], forca: 79 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["MC"], forca: 79 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 78 },
      { id: 'montillo', nome: "Montillo", posicoes: ["MEI"], forca: 84 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 79 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["PD"], forca: 81 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { id: 'robert', nome: "Robert", posicoes: ["ATA"], forca: 76 },
      { id: 'wallyson', nome: "Wallyson", posicoes: ["ATA","PE"], forca: 78 },
      { id: 'guerron', nome: "Guerrón", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Corinthians",
    jogadores: [
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["GOL"], forca: 79 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ZAG"], forca: 79 },
      { id: 'william', nome: "William", posicoes: ["ZAG"], forca: 78 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 82 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 80 },
      { id: 'jucilei', nome: "Jucilei", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 82 },
      { id: 'bruno-cesar', nome: "Bruno César", posicoes: ["MEI"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 79 },
      { id: 'dentinho', nome: "Dentinho", posicoes: ["PD"], forca: 80 },
      { id: 'ronaldo-fenomeno', nome: "Ronaldo", posicoes: ["ATA"], forca: 83 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 79 },
      { id: 'iarley', nome: "Iarley", posicoes: ["ATA"], forca: 76 },
      { id: 'souza', nome: "Souza", posicoes: ["ATA"], forca: 75 },
      { id: 'defederico', nome: "Defederico", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 78 },
      { id: 'mario-fernandes', nome: "Mário Fernandes", posicoes: ["ZAG"], forca: 80 },
      { id: 'rafael-marques', nome: "Rafael Marques", posicoes: ["ZAG"], forca: 77 },
      { id: 'rodolfo', nome: "Rodolfo", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 78 },
      { id: 'adilson', nome: "Adílson", posicoes: ["VOL"], forca: 77 },
      { id: 'willian-magrao', nome: "Willian Magrão", posicoes: ["VOL"], forca: 76 },
      { id: 'douglas', nome: "Douglas", posicoes: ["MEI"], forca: 82 },
      { id: 'hugo', nome: "Hugo", posicoes: ["MEI"], forca: 78 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 77 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 85 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 79 },
      { id: 'andre-lima', nome: "André Lima", posicoes: ["ATA"], forca: 78 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE","ME"], forca: 76 },
      { id: 'maylson', nome: "Maylson", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'neto', nome: "Neto", posicoes: ["GOL"], forca: 79 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 79 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 78 },
      { id: 'chico', nome: "Chico", posicoes: ["ZAG"], forca: 76 },
      { id: 'wagner-diniz', nome: "Wagner Diniz", posicoes: ["LD"], forca: 75 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["LE"], forca: 76 },
      { id: 'vitor', nome: "Vitor", posicoes: ["VOL"], forca: 77 },
      { id: 'deivid', nome: "Deivid", posicoes: ["VOL"], forca: 76 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["MEI"], forca: 82 },
      { id: 'branquinho', nome: "Branquinho", posicoes: ["MEI"], forca: 78 },
      { id: 'guerron', nome: "Guerrón", posicoes: ["PD"], forca: 79 },
      { id: 'bruno-mineiro', nome: "Bruno Mineiro", posicoes: ["ATA"], forca: 79 },
      { id: 'maikon-leite', nome: "Maikon Leite", posicoes: ["PE"], forca: 78 },
      { id: 'nieto', nome: "Nieto", posicoes: ["ATA"], forca: 75 },
      { id: 'ivan-gonzalez', nome: "Ivan González", posicoes: ["ZAG"], forca: 75 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Botafogo",
    jogadores: [
      { id: 'jefferson', nome: "Jefferson", posicoes: ["GOL"], forca: 82 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 76 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-ferreira', nome: "Fábio Ferreira", posicoes: ["ZAG"], forca: 76 },
      { id: 'marcelo-cordeiro', nome: "Marcelo Cordeiro", posicoes: ["LE"], forca: 76 },
      { id: 'somalia', nome: "Somália", posicoes: ["VOL"], forca: 77 },
      { id: 'leandro-guerreiro', nome: "Leandro Guerreiro", posicoes: ["VOL"], forca: 77 },
      { id: 'fahel', nome: "Fahel", posicoes: ["VOL"], forca: 76 },
      { id: 'lucio-flavio', nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 79 },
      { id: 'maicosuel', nome: "Maicosuel", posicoes: ["MEI"], forca: 80 },
      { id: 'herrera', nome: "Herrera", posicoes: ["ATA"], forca: 79 },
      { id: 'loco-abreu', nome: "Loco Abreu", posicoes: ["ATA"], forca: 82 },
      { id: 'jobson', nome: "Jobson", posicoes: ["ATA"], forca: 78 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 76 },
      { id: 'edno', nome: "Edno", posicoes: ["ATA"], forca: 75 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 77 }
    ]
  },

  // ===== Edição 2009 =====

  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Flamengo",
    jogadores: [
      { id: 'bruno', nome: "Bruno", posicoes: ["GOL"], forca: 83 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 82 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 79 },
      { id: 'alvaro', nome: "Álvaro", posicoes: ["ZAG"], forca: 76 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 80 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { id: 'ibson', nome: "Ibson", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'kleberson', nome: "Kleberson", posicoes: ["MC"], forca: 80 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'adriano', nome: "Adriano", posicoes: ["ATA"], forca: 88 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 81 },
      { id: 'obina', nome: "Obina", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { id: 'lauro', nome: "Lauro", posicoes: ["GOL"], forca: 78 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 80 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { id: 'guinazu', nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'dalessandro', nome: "D'Alessandro", posicoes: ["MEI"], forca: 85 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 80 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["LE"], forca: 77 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["MC"], forca: 80 },
      { id: 'ramires', nome: "Ramires", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 82 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 80 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 84 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 78 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 78 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Avaí",
    jogadores: [
      { id: 'eduardo-martini', nome: "Eduardo Martini", posicoes: ["GOL"], forca: 78 },
      { id: 'luis-ricardo', nome: "Luís Ricardo", posicoes: ["LD"], forca: 75 },
      { id: 'emerson-nunes', nome: "Emerson Nunes", posicoes: ["ZAG"], forca: 76 },
      { id: 'augusto', nome: "Augusto", posicoes: ["ZAG"], forca: 75 },
      { id: 'eltinho', nome: "Eltinho", posicoes: ["LE"], forca: 76 },
      { id: 'leo-gago', nome: "Léo Gago", posicoes: ["VOL"], forca: 79 },
      { id: 'ferdinando', nome: "Ferdinando", posicoes: ["VOL"], forca: 75 },
      { id: 'marcus-winicius', nome: "Marcus Winícius", posicoes: ["MC"], forca: 76 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["MEI"], forca: 82 },
      { id: 'caio', nome: "Caio", posicoes: ["MEI"], forca: 78 },
      { id: 'muriqui', nome: "Muriqui", posicoes: ["PE"], forca: 80 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 79 },
      { id: 'vandinho', nome: "Vandinho", posicoes: ["ATA"], forca: 77 },
      { id: 'roberto', nome: "Roberto", posicoes: ["ATA"], forca: 74 }
    ]
  },

  // ===== Edição 2008 =====

  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { id: 'patricio', nome: "Patrício", posicoes: ["LD"], forca: 76 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { id: 'pereira', nome: "Pereira", posicoes: ["ZAG"], forca: 77 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE"], forca: 77 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { id: 'william-magrao', nome: "William Magrão", posicoes: ["VOL"], forca: 78 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 80 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 77 },
      { id: 'perea', nome: "Perea", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 80 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["LE"], forca: 77 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["MC"], forca: 80 },
      { id: 'ramires', nome: "Ramires", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 82 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 80 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 84 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 78 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 78 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Flamengo",
    jogadores: [
      { id: 'bruno', nome: "Bruno", posicoes: ["GOL"], forca: 83 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 82 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 79 },
      { id: 'alvaro', nome: "Álvaro", posicoes: ["ZAG"], forca: 76 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 80 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { id: 'ibson', nome: "Ibson", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'kleberson', nome: "Kleberson", posicoes: ["MC"], forca: 80 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'adriano', nome: "Adriano", posicoes: ["ATA"], forca: 88 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 81 },
      { id: 'obina', nome: "Obina", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { id: 'lauro', nome: "Lauro", posicoes: ["GOL"], forca: 78 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 80 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { id: 'guinazu', nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'dalessandro', nome: "D'Alessandro", posicoes: ["MEI"], forca: 85 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 2007 =====

  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'denis', nome: "Denis", posicoes: ["LD"], forca: 77 },
      { id: 'adailton', nome: "Adaílton", posicoes: ["ZAG"], forca: 78 },
      { id: 'domingos', nome: "Domingos", posicoes: ["ZAG"], forca: 76 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 82 },
      { id: 'rodrigo-souto', nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 80 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["VOL"], forca: 80 },
      { id: 'cleber-santana', nome: "Cléber Santana", posicoes: ["MC"], forca: 82 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 84 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 79 },
      { id: 'jonas', nome: "Jonas", posicoes: ["PE"], forca: 77 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 83 },
      { id: 'marcos-aurelio', nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 78 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Flamengo",
    jogadores: [
      { id: 'bruno', nome: "Bruno", posicoes: ["GOL"], forca: 83 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 82 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 79 },
      { id: 'alvaro', nome: "Álvaro", posicoes: ["ZAG"], forca: 76 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 80 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { id: 'ibson', nome: "Ibson", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'kleberson', nome: "Kleberson", posicoes: ["MC"], forca: 80 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 78 },
      { id: 'adriano', nome: "Adriano", posicoes: ["ATA"], forca: 88 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 81 },
      { id: 'obina', nome: "Obina", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Fluminense",
    jogadores: [
      { id: 'fernando-henrique', nome: "Fernando Henrique", posicoes: ["GOL"], forca: 78 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LD"], forca: 75 },
      { id: 'thiago-silva', nome: "Thiago Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'luiz-alberto', nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior-cesar', nome: "Júnior César", posicoes: ["LE"], forca: 80 },
      { id: 'arouca', nome: "Arouca", posicoes: ["VOL"], forca: 80 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["VOL"], forca: 77 },
      { id: 'conca', nome: "Conca", posicoes: ["MC"], forca: 82 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 84 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MEI"], forca: 80 },
      { id: 'maicon', nome: "Maicon", posicoes: ["PD"], forca: 76 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 84 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 82 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 80 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["LE"], forca: 77 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["MC"], forca: 80 },
      { id: 'ramires', nome: "Ramires", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 82 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 80 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 84 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { id: 'patricio', nome: "Patrício", posicoes: ["LD"], forca: 76 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { id: 'pereira', nome: "Pereira", posicoes: ["ZAG"], forca: 77 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE"], forca: 77 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { id: 'william-magrao', nome: "William Magrão", posicoes: ["VOL"], forca: 78 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 80 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 77 },
      { id: 'perea', nome: "Perea", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },

  // ===== Edição 2006 =====

  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { id: 'lauro', nome: "Lauro", posicoes: ["GOL"], forca: 78 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 81 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 80 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { id: 'guinazu', nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'dalessandro', nome: "D'Alessandro", posicoes: ["MEI"], forca: 85 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 79 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA","PE"], forca: 86 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { id: 'patricio', nome: "Patrício", posicoes: ["LD"], forca: 76 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { id: 'pereira', nome: "Pereira", posicoes: ["ZAG"], forca: 77 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE"], forca: 77 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { id: 'william-magrao', nome: "William Magrão", posicoes: ["VOL"], forca: 78 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 80 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 77 },
      { id: 'perea', nome: "Perea", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'denis', nome: "Denis", posicoes: ["LD"], forca: 77 },
      { id: 'adailton', nome: "Adaílton", posicoes: ["ZAG"], forca: 78 },
      { id: 'domingos', nome: "Domingos", posicoes: ["ZAG"], forca: 76 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 82 },
      { id: 'rodrigo-souto', nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 80 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["VOL"], forca: 80 },
      { id: 'cleber-santana', nome: "Cléber Santana", posicoes: ["MC"], forca: 82 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 84 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 79 },
      { id: 'jonas', nome: "Jonas", posicoes: ["PE"], forca: 77 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 83 },
      { id: 'marcos-aurelio', nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 78 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Paraná",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 77 },
      { id: 'edinho', nome: "Edinho", posicoes: ["LD"], forca: 75 },
      { id: 'daniel-marques', nome: "Daniel Marques", posicoes: ["ZAG"], forca: 75 },
      { id: 'neguette', nome: "Neguette", posicoes: ["ZAG"], forca: 74 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LE"], forca: 76 },
      { id: 'beto', nome: "Beto", posicoes: ["VOL"], forca: 77 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 80 },
      { id: 'everton', nome: "Éverton", posicoes: ["MC"], forca: 76 },
      { id: 'maicossuel', nome: "Maicossuel", posicoes: ["MEI"], forca: 78 },
      { id: 'dinelson', nome: "Dinélson", posicoes: ["MEI"], forca: 77 },
      { id: 'marcel', nome: "Marcel", posicoes: ["PD"], forca: 76 },
      { id: 'josiel', nome: "Josiel", posicoes: ["ATA"], forca: 78 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ATA"], forca: 75 },
      { id: 'emerson', nome: "Emerson", posicoes: ["PE"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Vasco",
    jogadores: [
      { id: 'helton', nome: "Hélton", posicoes: ["GOL"], forca: 83 },
      { id: 'jorginho-paulista', nome: "Jorginho Paulista", posicoes: ["LD"], forca: 78 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 84 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 84 },
      { id: 'juninho-paulista', nome: "Juninho Paulista", posicoes: ["MEI"], forca: 84 },
      { id: 'viola', nome: "Viola", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 88 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 80 }
    ]
  },

  // ===== Edição 2005 =====

  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 80 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 80 },
      { id: 'anderson', nome: "Anderson", posicoes: ["ZAG"], forca: 78 },
      { id: 'betao', nome: "Betão", posicoes: ["ZAG"], forca: 76 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 78 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 81 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["MC"], forca: 82 },
      { id: 'renato', nome: "Renato", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 84 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 80 },
      { id: 'tevez', nome: "Tevez", posicoes: ["ATA"], forca: 89 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 83 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 80 },
      { id: 'elder-granja', nome: "Élder Granja", posicoes: ["LD"], forca: 78 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vinicius', nome: "Vinícius", posicoes: ["ZAG"], forca: 76 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 77 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 78 },
      { id: 'diogo-rincon', nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { id: 'daniel-carvalho', nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'wellington', nome: "Wellington", posicoes: ["PD"], forca: 75 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 82 },
      { id: 'diego', nome: "Diego", posicoes: ["ATA"], forca: 75 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Goiás",
    jogadores: [
      { id: 'harlei', nome: "Harlei", posicoes: ["GOL"], forca: 81 },
      { id: 'vitor', nome: "Vitor", posicoes: ["LD"], forca: 76 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["LE"], forca: 79 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MC"], forca: 80 },
      { id: 'tulio', nome: "Túlio", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["MEI"], forca: 82 },
      { id: 'iarley', nome: "Iarley", posicoes: ["MEI"], forca: 80 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 83 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["ATA"], forca: 80 },
      { id: 'dimba', nome: "Dimba", posicoes: ["ATA"], forca: 81 },
      { id: 'welliton', nome: "Welliton", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 78 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 78 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Fluminense",
    jogadores: [
      { id: 'murilo', nome: "Murilo", posicoes: ["GOL"], forca: 78 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 77 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 77 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["LE"], forca: 76 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 79 },
      { id: 'fernando-diniz', nome: "Fernando Diniz", posicoes: ["MC"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 83 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 83 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 83 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 81 },
      { id: 'tuta', nome: "Tuta", posicoes: ["ATA"], forca: 78 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'diego', nome: "Diego", posicoes: ["GOL"], forca: 80 },
      { id: 'jancarlos', nome: "Jancarlos", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 77 },
      { id: 'marcao', nome: "Marcão", posicoes: ["LE"], forca: 77 },
      { id: 'alan-bahia', nome: "Alan Bahia", posicoes: ["VOL"], forca: 80 },
      { id: 'pingo', nome: "Pingo", posicoes: ["VOL"], forca: 76 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MC"], forca: 83 },
      { id: 'jadson', nome: "Jádson", posicoes: ["MEI"], forca: 81 },
      { id: 'evandro', nome: "Evandro", posicoes: ["MEI"], forca: 78 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PD"], forca: 82 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 86 },
      { id: 'lima', nome: "Lima", posicoes: ["ATA"], forca: 78 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 2004 =====

  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["LD"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 81 },
      { id: 'paulo-almeida', nome: "Paulo Almeida", posicoes: ["VOL"], forca: 78 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 82 },
      { id: 'elano', nome: "Elano", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 87 },
      { id: 'robinho', nome: "Robinho", posicoes: ["ATA","PE"], forca: 87 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 83 },
      { id: 'alberto', nome: "Alberto", posicoes: ["ATA"], forca: 75 },
      { id: 'leo-lima', nome: "Léo Lima", posicoes: ["MEI"], forca: 77 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'diego', nome: "Diego", posicoes: ["GOL"], forca: 80 },
      { id: 'jancarlos', nome: "Jancarlos", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 77 },
      { id: 'marcao', nome: "Marcão", posicoes: ["LE"], forca: 77 },
      { id: 'alan-bahia', nome: "Alan Bahia", posicoes: ["VOL"], forca: 80 },
      { id: 'pingo', nome: "Pingo", posicoes: ["VOL"], forca: 76 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MC"], forca: 83 },
      { id: 'jadson', nome: "Jádson", posicoes: ["MEI"], forca: 81 },
      { id: 'evandro', nome: "Evandro", posicoes: ["MEI"], forca: 78 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PD"], forca: 82 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 86 },
      { id: 'lima', nome: "Lima", posicoes: ["ATA"], forca: 78 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { id: 'diego-lugano', nome: "Diego Lugano", posicoes: ["ZAG"], forca: 81 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 79 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 79 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 86 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { id: 'luis-fabiano', nome: "Luís Fabiano", posicoes: ["ATA"], forca: 86 },
      { id: 'grafite', nome: "Grafite", posicoes: ["ATA"], forca: 80 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 78 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 78 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 80 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 80 },
      { id: 'anderson', nome: "Anderson", posicoes: ["ZAG"], forca: 78 },
      { id: 'betao', nome: "Betão", posicoes: ["ZAG"], forca: 76 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 78 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 81 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["MC"], forca: 82 },
      { id: 'renato', nome: "Renato", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 84 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 80 },
      { id: 'tevez', nome: "Tevez", posicoes: ["ATA"], forca: 89 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 83 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Goiás",
    jogadores: [
      { id: 'harlei', nome: "Harlei", posicoes: ["GOL"], forca: 81 },
      { id: 'vitor', nome: "Vitor", posicoes: ["LD"], forca: 76 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["LE"], forca: 79 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MC"], forca: 80 },
      { id: 'tulio', nome: "Túlio", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["MEI"], forca: 82 },
      { id: 'iarley', nome: "Iarley", posicoes: ["MEI"], forca: 80 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 83 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["ATA"], forca: 80 },
      { id: 'dimba', nome: "Dimba", posicoes: ["ATA"], forca: 81 },
      { id: 'welliton', nome: "Welliton", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 2003 =====

  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'gomes', nome: "Gomes", posicoes: ["GOL"], forca: 84 },
      { id: 'maicon', nome: "Maicon", posicoes: ["LD"], forca: 80 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 83 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 81 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LE"], forca: 79 },
      { id: 'augusto-recife', nome: "Augusto Recife", posicoes: ["VOL"], forca: 78 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["MC"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 90 },
      { id: 'aristizabal', nome: "Aristizábal", posicoes: ["MEI","PE"], forca: 80 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["PD"], forca: 78 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 85 },
      { id: 'mota', nome: "Mota", posicoes: ["ATA"], forca: 80 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["LD"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 81 },
      { id: 'paulo-almeida', nome: "Paulo Almeida", posicoes: ["VOL"], forca: 78 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 82 },
      { id: 'elano', nome: "Elano", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 87 },
      { id: 'robinho', nome: "Robinho", posicoes: ["ATA","PE"], forca: 87 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 83 },
      { id: 'alberto', nome: "Alberto", posicoes: ["ATA"], forca: 75 },
      { id: 'leo-lima', nome: "Léo Lima", posicoes: ["MEI"], forca: 77 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { id: 'diego-lugano', nome: "Diego Lugano", posicoes: ["ZAG"], forca: 81 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 79 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 79 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 86 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { id: 'luis-fabiano', nome: "Luís Fabiano", posicoes: ["ATA"], forca: 86 },
      { id: 'grafite', nome: "Grafite", posicoes: ["ATA"], forca: 80 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Caetano",
    jogadores: [
      { id: 'silvio-luiz', nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 80 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 79 },
      { id: 'daniel', nome: "Daniel", posicoes: ["ZAG"], forca: 78 },
      { id: 'dininho', nome: "Dininho", posicoes: ["ZAG"], forca: 80 },
      { id: 'rubens-cardoso', nome: "Rubens Cardoso", posicoes: ["LE"], forca: 79 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 83 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { id: 'adaozinho', nome: "Adãozinho", posicoes: ["MEI"], forca: 79 },
      { id: 'anailson', nome: "Anaílson", posicoes: ["MEI"], forca: 79 },
      { id: 'wagner', nome: "Wágner", posicoes: ["MC"], forca: 76 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 82 },
      { id: 'adhemar', nome: "Adhemar", posicoes: ["ATA"], forca: 83 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 77 },
      { id: 'esquerdinha', nome: "Esquerdinha", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Coritiba",
    jogadores: [
      { id: 'fernando', nome: "Fernando", posicoes: ["GOL"], forca: 78 },
      { id: 'cesar-prates', nome: "César Prates", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 78 },
      { id: 'reginaldo-nascimento', nome: "Reginaldo Nascimento", posicoes: ["ZAG"], forca: 77 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LE"], forca: 77 },
      { id: 'roberto-brum', nome: "Roberto Brum", posicoes: ["VOL"], forca: 78 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC"], forca: 80 },
      { id: 'lima', nome: "Lima", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'jackson', nome: "Jackson", posicoes: ["MEI"], forca: 78 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 80 },
      { id: 'da-silva', nome: "Da Silva", posicoes: ["ATA"], forca: 78 },
      { id: 'edu-sales', nome: "Edu Sales", posicoes: ["ATA"], forca: 75 },
      { id: 'adriano', nome: "Adriano", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 80 },
      { id: 'elder-granja', nome: "Élder Granja", posicoes: ["LD"], forca: 78 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vinicius', nome: "Vinícius", posicoes: ["ZAG"], forca: 76 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 77 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 78 },
      { id: 'diogo-rincon', nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { id: 'daniel-carvalho', nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'wellington', nome: "Wellington", posicoes: ["PD"], forca: 75 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 82 },
      { id: 'diego', nome: "Diego", posicoes: ["ATA"], forca: 75 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2002 =====

  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["LD"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 81 },
      { id: 'paulo-almeida', nome: "Paulo Almeida", posicoes: ["VOL"], forca: 78 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 82 },
      { id: 'elano', nome: "Elano", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 87 },
      { id: 'robinho', nome: "Robinho", posicoes: ["ATA","PE"], forca: 87 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 83 },
      { id: 'alberto', nome: "Alberto", posicoes: ["ATA"], forca: 75 },
      { id: 'leo-lima', nome: "Léo Lima", posicoes: ["MEI"], forca: 77 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 80 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 80 },
      { id: 'anderson', nome: "Anderson", posicoes: ["ZAG"], forca: 78 },
      { id: 'betao', nome: "Betão", posicoes: ["ZAG"], forca: 76 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 78 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 81 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["MC"], forca: 82 },
      { id: 'renato', nome: "Renato", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 84 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 80 },
      { id: 'tevez', nome: "Tevez", posicoes: ["ATA"], forca: 89 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 83 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 80 },
      { id: 'anderson-lima', nome: "Anderson Lima", posicoes: ["LD"], forca: 80 },
      { id: 'polga', nome: "Polga", posicoes: ["ZAG"], forca: 80 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ZAG"], forca: 76 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 79 },
      { id: 'tinga', nome: "Tinga", posicoes: ["VOL"], forca: 81 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 77 },
      { id: 'fabio-rochemback', nome: "Fábio Rochemback", posicoes: ["MC"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 80 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MEI"], forca: 78 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 83 },
      { id: 'luis-mario', nome: "Luís Mário", posicoes: ["ATA"], forca: 78 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 76 },
      { id: 'christian', nome: "Christian", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Fluminense",
    jogadores: [
      { id: 'murilo', nome: "Murilo", posicoes: ["GOL"], forca: 78 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 77 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 77 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["LE"], forca: 76 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 79 },
      { id: 'fernando-diniz', nome: "Fernando Diniz", posicoes: ["MC"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 83 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 83 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 83 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 81 },
      { id: 'tuta', nome: "Tuta", posicoes: ["ATA"], forca: 78 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { id: 'diego-lugano', nome: "Diego Lugano", posicoes: ["ZAG"], forca: 81 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 79 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["VOL"], forca: 80 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 79 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 86 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { id: 'luis-fabiano', nome: "Luís Fabiano", posicoes: ["ATA"], forca: 86 },
      { id: 'grafite', nome: "Grafite", posicoes: ["ATA"], forca: 80 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 81 },
      { id: 'mancini', nome: "Mancini", posicoes: ["LD"], forca: 82 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 84 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["MC"], forca: 80 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2001 =====

  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 78 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 77 },
      { id: 'nem', nome: "Nem", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["ZAG"], forca: 77 },
      { id: 'kleber', nome: "Kleber", posicoes: ["LE"], forca: 78 },
      { id: 'cocito', nome: "Cocito", posicoes: ["VOL"], forca: 80 },
      { id: 'kleberson', nome: "Kléberson", posicoes: ["MC"], forca: 82 },
      { id: 'adriano-gabiru', nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MEI"], forca: 78 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["PD"], forca: 85 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 80 },
      { id: 'ilan', nome: "Ilán", posicoes: ["ATA"], forca: 80 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA"], forca: 78 },
      { id: 'ivan', nome: "Ivan", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "São Caetano",
    jogadores: [
      { id: 'silvio-luiz', nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 80 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 79 },
      { id: 'daniel', nome: "Daniel", posicoes: ["ZAG"], forca: 78 },
      { id: 'dininho', nome: "Dininho", posicoes: ["ZAG"], forca: 80 },
      { id: 'rubens-cardoso', nome: "Rubens Cardoso", posicoes: ["LE"], forca: 79 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 83 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { id: 'adaozinho', nome: "Adãozinho", posicoes: ["MEI"], forca: 79 },
      { id: 'anailson', nome: "Anaílson", posicoes: ["MEI"], forca: 79 },
      { id: 'wagner', nome: "Wágner", posicoes: ["MC"], forca: 76 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 82 },
      { id: 'adhemar', nome: "Adhemar", posicoes: ["ATA"], forca: 83 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 77 },
      { id: 'esquerdinha', nome: "Esquerdinha", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 81 },
      { id: 'mancini', nome: "Mancini", posicoes: ["LD"], forca: 82 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 84 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["MC"], forca: 80 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Fluminense",
    jogadores: [
      { id: 'murilo', nome: "Murilo", posicoes: ["GOL"], forca: 78 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 77 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 77 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["LE"], forca: 76 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 79 },
      { id: 'fernando-diniz', nome: "Fernando Diniz", posicoes: ["MC"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 83 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 83 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 83 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 81 },
      { id: 'tuta', nome: "Tuta", posicoes: ["ATA"], forca: 78 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 80 },
      { id: 'anderson-lima', nome: "Anderson Lima", posicoes: ["LD"], forca: 80 },
      { id: 'polga', nome: "Polga", posicoes: ["ZAG"], forca: 80 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ZAG"], forca: 76 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 79 },
      { id: 'tinga', nome: "Tinga", posicoes: ["VOL"], forca: 81 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 77 },
      { id: 'fabio-rochemback', nome: "Fábio Rochemback", posicoes: ["MC"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 80 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MEI"], forca: 78 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 83 },
      { id: 'luis-mario', nome: "Luís Mário", posicoes: ["ATA"], forca: 78 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 76 },
      { id: 'christian', nome: "Christian", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Vasco",
    jogadores: [
      { id: 'helton', nome: "Hélton", posicoes: ["GOL"], forca: 83 },
      { id: 'jorginho-paulista', nome: "Jorginho Paulista", posicoes: ["LD"], forca: 78 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 84 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 84 },
      { id: 'juninho-paulista', nome: "Juninho Paulista", posicoes: ["MEI"], forca: 84 },
      { id: 'viola', nome: "Viola", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 88 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 80 }
    ]
  },

  // ===== Edição 2000 =====

  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Vasco",
    jogadores: [
      { id: 'helton', nome: "Hélton", posicoes: ["GOL"], forca: 83 },
      { id: 'jorginho-paulista', nome: "Jorginho Paulista", posicoes: ["LD"], forca: 78 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 84 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 84 },
      { id: 'juninho-paulista', nome: "Juninho Paulista", posicoes: ["MEI"], forca: 84 },
      { id: 'viola', nome: "Viola", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 88 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "São Caetano",
    jogadores: [
      { id: 'silvio-luiz', nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 80 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 79 },
      { id: 'daniel', nome: "Daniel", posicoes: ["ZAG"], forca: 78 },
      { id: 'dininho', nome: "Dininho", posicoes: ["ZAG"], forca: 80 },
      { id: 'rubens-cardoso', nome: "Rubens Cardoso", posicoes: ["LE"], forca: 79 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 83 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { id: 'adaozinho', nome: "Adãozinho", posicoes: ["MEI"], forca: 79 },
      { id: 'anailson', nome: "Anaílson", posicoes: ["MEI"], forca: 79 },
      { id: 'wagner', nome: "Wágner", posicoes: ["MC"], forca: 76 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 82 },
      { id: 'adhemar', nome: "Adhemar", posicoes: ["ATA"], forca: 83 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 77 },
      { id: 'esquerdinha', nome: "Esquerdinha", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LD"], forca: 77 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'sorin', nome: "Sorín", posicoes: ["LE"], forca: 82 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["VOL"], forca: 79 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'muller', nome: "Muller", posicoes: ["PD"], forca: 80 },
      { id: 'geovanni', nome: "Geovanni", posicoes: ["PE"], forca: 81 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 84 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'fabio-junior', nome: "Fábio Júnior", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 78 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 77 },
      { id: 'nem', nome: "Nem", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["ZAG"], forca: 77 },
      { id: 'kleber', nome: "Kleber", posicoes: ["LE"], forca: 78 },
      { id: 'cocito', nome: "Cocito", posicoes: ["VOL"], forca: 80 },
      { id: 'kleberson', nome: "Kléberson", posicoes: ["MC"], forca: 82 },
      { id: 'adriano-gabiru', nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MEI"], forca: 78 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["PD"], forca: 85 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 80 },
      { id: 'ilan', nome: "Ilán", posicoes: ["ATA"], forca: 80 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA"], forca: 78 },
      { id: 'ivan', nome: "Ivan", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 80 },
      { id: 'anderson-lima', nome: "Anderson Lima", posicoes: ["LD"], forca: 80 },
      { id: 'polga', nome: "Polga", posicoes: ["ZAG"], forca: 80 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ZAG"], forca: 76 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 79 },
      { id: 'tinga', nome: "Tinga", posicoes: ["VOL"], forca: 81 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 77 },
      { id: 'fabio-rochemback', nome: "Fábio Rochemback", posicoes: ["MC"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 80 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MEI"], forca: 78 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 83 },
      { id: 'luis-mario', nome: "Luís Mário", posicoes: ["ATA"], forca: 78 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 76 },
      { id: 'christian', nome: "Christian", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1999 =====

  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { id: 'indio', nome: "Índio", posicoes: ["LD"], forca: 77 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 82 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 79 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["VOL"], forca: 84 },
      { id: 'freddy-rincon', nome: "Freddy Rincón", posicoes: ["MC"], forca: 83 },
      { id: 'edu', nome: "Edu", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 88 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 83 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { id: 'luizao', nome: "Luizão", posicoes: ["ATA"], forca: 85 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 77 },
      { id: 'fernando-baiano', nome: "Fernando Baiano", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 81 },
      { id: 'mancini', nome: "Mancini", posicoes: ["LD"], forca: 82 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 84 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["MC"], forca: 80 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Vitória",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["LD"], forca: 77 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ZAG"], forca: 76 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LE"], forca: 77 },
      { id: 'roberto-cavalo', nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 80 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MC"], forca: 80 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 82 },
      { id: 'bebeto-campos', nome: "Bebeto Campos", posicoes: ["MEI"], forca: 77 },
      { id: 'oseas', nome: "Oséas", posicoes: ["PD"], forca: 78 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 81 },
      { id: 'pichetti', nome: "Pichetti", posicoes: ["ATA"], forca: 78 },
      { id: 'nadson', nome: "Nadson", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 82 },
      { id: 'belletti', nome: "Belletti", posicoes: ["LD"], forca: 80 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["ZAG"], forca: 82 },
      { id: 'rogerio-pinheiro', nome: "Rogério Pinheiro", posicoes: ["ZAG"], forca: 77 },
      { id: 'fabio-aurelio', nome: "Fábio Aurélio", posicoes: ["LE"], forca: 80 },
      { id: 'alexandre', nome: "Alexandre", posicoes: ["VOL"], forca: 77 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 79 },
      { id: 'souza', nome: "Souza", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 84 },
      { id: 'denilson', nome: "Denílson", posicoes: ["MEI","PE"], forca: 83 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 84 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 81 },
      { id: 'aristizabal', nome: "Aristizábal", posicoes: ["ATA"], forca: 79 },
      { id: 'sandro-hiroshi', nome: "Sandro Hiroshi", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LD"], forca: 77 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'sorin', nome: "Sorín", posicoes: ["LE"], forca: 82 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["VOL"], forca: 79 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'muller', nome: "Muller", posicoes: ["PD"], forca: 80 },
      { id: 'geovanni', nome: "Geovanni", posicoes: ["PE"], forca: 81 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 84 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'fabio-junior', nome: "Fábio Júnior", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1998 =====

  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { id: 'indio', nome: "Índio", posicoes: ["LD"], forca: 77 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 82 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 79 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["VOL"], forca: 84 },
      { id: 'freddy-rincon', nome: "Freddy Rincón", posicoes: ["MC"], forca: 83 },
      { id: 'edu', nome: "Edu", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 88 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 83 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { id: 'luizao', nome: "Luizão", posicoes: ["ATA"], forca: 85 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 77 },
      { id: 'fernando-baiano', nome: "Fernando Baiano", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LD"], forca: 77 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'sorin', nome: "Sorín", posicoes: ["LE"], forca: 82 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["VOL"], forca: 79 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'muller', nome: "Muller", posicoes: ["PD"], forca: 80 },
      { id: 'geovanni', nome: "Geovanni", posicoes: ["PE"], forca: 81 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 84 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'fabio-junior', nome: "Fábio Júnior", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Santos",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 81 },
      { id: 'baiano', nome: "Baiano", posicoes: ["LD"], forca: 78 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 77 },
      { id: 'argel', nome: "Argel", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 78 },
      { id: 'marcos-assuncao', nome: "Marcos Assunção", posicoes: ["VOL"], forca: 82 },
      { id: 'gallo', nome: "Gallo", posicoes: ["MC"], forca: 79 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["MEI"], forca: 78 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 85 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI","ATA"], forca: 74 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 82 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 80 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 78 },
      { id: 'edu', nome: "Edu", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Portuguesa",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 80 },
      { id: 'emerson', nome: "Emerson", posicoes: ["ZAG"], forca: 78 },
      { id: 'capone', nome: "Capone", posicoes: ["ZAG"], forca: 77 },
      { id: 'augusto', nome: "Augusto", posicoes: ["LE"], forca: 76 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["MC"], forca: 77 },
      { id: 'rodrigo-fabri', nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 83 },
      { id: 'caio', nome: "Caio", posicoes: ["MEI"], forca: 82 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PD"], forca: 82 },
      { id: 'leandro-amaral', nome: "Leandro Amaral", posicoes: ["ATA"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 82 },
      { id: 'tico', nome: "Tico", posicoes: ["ATA"], forca: 76 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Sport",
    jogadores: [
      { id: 'maizena', nome: "Maizena", posicoes: ["GOL"], forca: 78 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 77 },
      { id: 'sandro-blum', nome: "Sandro Blum", posicoes: ["ZAG"], forca: 76 },
      { id: 'erlon', nome: "Érlon", posicoes: ["ZAG"], forca: 75 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { id: 'leomar', nome: "Leomar", posicoes: ["VOL"], forca: 78 },
      { id: 'nildo', nome: "Nildo", posicoes: ["MC"], forca: 80 },
      { id: 'jackson', nome: "Jackson", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["MEI"], forca: 78 },
      { id: 'carlinhos-bala', nome: "Carlinhos Bala", posicoes: ["PD"], forca: 75 },
      { id: 'robertinho', nome: "Robertinho", posicoes: ["ATA"], forca: 78 },
      { id: 'luis-muller', nome: "Luís Müller", posicoes: ["ATA"], forca: 76 },
      { id: 'heraldo', nome: "Heraldo", posicoes: ["ATA"], forca: 75 },
      { id: 'adriano', nome: "Adriano", posicoes: ["PE"], forca: 74 }
    ]
  },

  // ===== Edição 1997 =====

  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Vasco",
    jogadores: [
      { id: 'carlos-germano', nome: "Carlos Germano", posicoes: ["GOL"], forca: 83 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 83 },
      { id: 'nasa', nome: "Nasa", posicoes: ["VOL"], forca: 79 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 85 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 82 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI"], forca: 80 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 82 },
      { id: 'donizete', nome: "Donizete", posicoes: ["ATA"], forca: 81 },
      { id: 'luizao', nome: "Luizão", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Internacional",
    jogadores: [
      { id: 'andre', nome: "André", posicoes: ["GOL"], forca: 78 },
      { id: 'cesar-prates', nome: "César Prates", posicoes: ["LD"], forca: 80 },
      { id: 'gamarra', nome: "Gamarra", posicoes: ["ZAG"], forca: 84 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["LE"], forca: 78 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 82 },
      { id: 'fernando', nome: "Fernando", posicoes: ["MC"], forca: 77 },
      { id: 'fabiano', nome: "Fabiano", posicoes: ["MEI"], forca: 76 },
      { id: 'christian', nome: "Christian", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'sergio-manoel', nome: "Sérgio Manoel", posicoes: ["PD"], forca: 78 },
      { id: 'fabiano-souza', nome: "Fabiano Souza", posicoes: ["ATA"], forca: 76 },
      { id: 'celso', nome: "Celso", posicoes: ["ATA"], forca: 75 },
      { id: 'luciano', nome: "Luciano", posicoes: ["PE"], forca: 75 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Santos",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 81 },
      { id: 'baiano', nome: "Baiano", posicoes: ["LD"], forca: 78 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 77 },
      { id: 'argel', nome: "Argel", posicoes: ["ZAG"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 78 },
      { id: 'marcos-assuncao', nome: "Marcos Assunção", posicoes: ["VOL"], forca: 82 },
      { id: 'gallo', nome: "Gallo", posicoes: ["MC"], forca: 79 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["MEI"], forca: 78 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 85 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI","ATA"], forca: 74 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 82 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 80 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 78 },
      { id: 'edu', nome: "Edu", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Flamengo",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 79 },
      { id: 'marcos-adriano', nome: "Marcos Adriano", posicoes: ["LD"], forca: 75 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 76 },
      { id: 'athirson', nome: "Athirson", posicoes: ["LE"], forca: 80 },
      { id: 'leandro-avila', nome: "Leandro Ávila", posicoes: ["VOL"], forca: 78 },
      { id: 'iranildo', nome: "Iranildo", posicoes: ["MC"], forca: 79 },
      { id: 'savio', nome: "Sávio", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { id: 'romario', nome: "Romário", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["PE"], forca: 76 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 77 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'taffarel', nome: "Taffarel", posicoes: ["GOL"], forca: 83 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 77 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 78 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 76 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 78 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 79 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 82 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["MEI"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 80 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 81 },
      { id: 'valdir-bigode', nome: "Valdir Bigode", posicoes: ["ATA"], forca: 79 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 1996 =====

  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 81 },
      { id: 'adilson-batista', nome: "Adílson Batista", posicoes: ["ZAG"], forca: 81 },
      { id: 'rivarola', nome: "Rivarola", posicoes: ["ZAG"], forca: 79 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 77 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL"], forca: 82 },
      { id: 'goiano', nome: "Goiano", posicoes: ["MC"], forca: 80 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 80 },
      { id: 'arilson', nome: "Arílson", posicoes: ["PD"], forca: 80 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 83 },
      { id: 'jardel', nome: "Jardel", posicoes: ["ATA"], forca: 85 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 79 },
      { id: 'cuca', nome: "Cuca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Portuguesa",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 80 },
      { id: 'emerson', nome: "Emerson", posicoes: ["ZAG"], forca: 78 },
      { id: 'capone', nome: "Capone", posicoes: ["ZAG"], forca: 77 },
      { id: 'augusto', nome: "Augusto", posicoes: ["LE"], forca: 76 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["MC"], forca: 77 },
      { id: 'rodrigo-fabri', nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 83 },
      { id: 'caio', nome: "Caio", posicoes: ["MEI"], forca: 82 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PD"], forca: 82 },
      { id: 'leandro-amaral', nome: "Leandro Amaral", posicoes: ["ATA"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 82 },
      { id: 'tico', nome: "Tico", posicoes: ["ATA"], forca: 76 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'taffarel', nome: "Taffarel", posicoes: ["GOL"], forca: 83 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 77 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 78 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 76 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 78 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 79 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 82 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["MEI"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 80 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 81 },
      { id: 'valdir-bigode', nome: "Valdir Bigode", posicoes: ["ATA"], forca: 79 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Goiás",
    jogadores: [
      { id: 'harlei', nome: "Harlei", posicoes: ["GOL"], forca: 81 },
      { id: 'vitor', nome: "Vitor", posicoes: ["LD"], forca: 76 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["LE"], forca: 79 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MC"], forca: 80 },
      { id: 'tulio', nome: "Túlio", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["MEI"], forca: 82 },
      { id: 'iarley', nome: "Iarley", posicoes: ["MEI"], forca: 80 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 83 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["ATA"], forca: 80 },
      { id: 'dimba', nome: "Dimba", posicoes: ["ATA"], forca: 81 },
      { id: 'welliton', nome: "Welliton", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 83 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 78 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 78 },
      { id: 'gelson-baresi', nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 76 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LE"], forca: 77 },
      { id: 'donizete-amorim', nome: "Donizete Amorim", posicoes: ["VOL"], forca: 78 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MC"], forca: 79 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'roberto-gaucho', nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 80 },
      { id: 'cleison', nome: "Cleison", posicoes: ["PD"], forca: 77 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 83 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 78 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 78 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Palmeiras",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 75 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["LD"], forca: 78 },
      { id: 'cleber', nome: "Cléber", posicoes: ["ZAG"], forca: 83 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 80 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 86 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 84 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 87 },
      { id: 'edilson', nome: "Edílson", posicoes: ["PD"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1995 =====

  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Botafogo",
    jogadores: [
      { id: 'wagner', nome: "Wagner", posicoes: ["GOL"], forca: 82 },
      { id: 'perivaldo', nome: "Perivaldo", posicoes: ["LD"], forca: 77 },
      { id: 'goncalves', nome: "Gonçalves", posicoes: ["ZAG"], forca: 83 },
      { id: 'wilson-gottardo', nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'andre-silva', nome: "André Silva", posicoes: ["LE"], forca: 77 },
      { id: 'leandro-avila', nome: "Leandro Ávila", posicoes: ["VOL"], forca: 80 },
      { id: 'jamir', nome: "Jamir", posicoes: ["MC"], forca: 79 },
      { id: 'beto', nome: "Beto", posicoes: ["MEI"], forca: 81 },
      { id: 'carlos-alberto-dias', nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 78 },
      { id: 'sergio-manoel', nome: "Sérgio Manoel", posicoes: ["PD"], forca: 82 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 88 },
      { id: 'donizete', nome: "Donizete", posicoes: ["ATA"], forca: 82 },
      { id: 'valdeir', nome: "Valdeir", posicoes: ["ATA"], forca: 79 },
      { id: 'mauricinho', nome: "Mauricinho", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Santos",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 79 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["LD"], forca: 76 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 76 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 77 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["LE"], forca: 75 },
      { id: 'gallo', nome: "Gallo", posicoes: ["VOL"], forca: 80 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 78 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 86 },
      { id: 'robert', nome: "Robert", posicoes: ["MEI"], forca: 79 },
      { id: 'macedo', nome: "Macedo", posicoes: ["PD"], forca: 78 },
      { id: 'camanducaia', nome: "Camanducaia", posicoes: ["ATA"], forca: 77 },
      { id: 'guga', nome: "Guga", posicoes: ["ATA"], forca: 78 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { id: 'jamelli', nome: "Jamelli", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 83 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 78 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 78 },
      { id: 'gelson-baresi', nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 76 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LE"], forca: 77 },
      { id: 'donizete-amorim', nome: "Donizete Amorim", posicoes: ["VOL"], forca: 78 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MC"], forca: 79 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'roberto-gaucho', nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 80 },
      { id: 'cleison', nome: "Cleison", posicoes: ["PD"], forca: 77 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 83 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 78 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 78 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Fluminense",
    jogadores: [
      { id: 'wellerson', nome: "Wellerson", posicoes: ["GOL"], forca: 77 },
      { id: 'ronald', nome: "Ronald", posicoes: ["LD"], forca: 75 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcio-costa', nome: "Márcio Costa", posicoes: ["ZAG"], forca: 76 },
      { id: 'lira', nome: "Lira", posicoes: ["LE"], forca: 76 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 78 },
      { id: 'djair', nome: "Djair", posicoes: ["MC"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 77 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MEI"], forca: 79 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'ezio', nome: "Ézio", posicoes: ["ATA"], forca: 82 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 77 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 76 },
      { id: 'rogerinho', nome: "Rogerinho", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 81 },
      { id: 'adilson-batista', nome: "Adílson Batista", posicoes: ["ZAG"], forca: 81 },
      { id: 'rivarola', nome: "Rivarola", posicoes: ["ZAG"], forca: 79 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 77 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL"], forca: 82 },
      { id: 'goiano', nome: "Goiano", posicoes: ["MC"], forca: 80 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 80 },
      { id: 'arilson', nome: "Arílson", posicoes: ["PD"], forca: 80 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 83 },
      { id: 'jardel', nome: "Jardel", posicoes: ["ATA"], forca: 85 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 79 },
      { id: 'cuca', nome: "Cuca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { id: 'andre-santos', nome: "André Santos", posicoes: ["LD"], forca: 76 },
      { id: 'celio-silva', nome: "Célio Silva", posicoes: ["ZAG"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 77 },
      { id: 'silvinho', nome: "Silvinho", posicoes: ["LE"], forca: 79 },
      { id: 'ze-elias', nome: "Zé Elias", posicoes: ["VOL"], forca: 81 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["MC"], forca: 77 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 86 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 84 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 78 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 78 },
      { id: 'neto', nome: "Neto", posicoes: ["PD"], forca: 82 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1994 =====

  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Palmeiras",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 75 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["LD"], forca: 78 },
      { id: 'cleber', nome: "Cléber", posicoes: ["ZAG"], forca: 83 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 80 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 86 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 84 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 87 },
      { id: 'edilson', nome: "Edílson", posicoes: ["PD"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 77 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 78 },
      { id: 'pintado', nome: "Pintado", posicoes: ["LD"], forca: 77 },
      { id: 'andre-cruz', nome: "André Cruz", posicoes: ["ZAG"], forca: 82 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 83 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 76 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MC"], forca: 83 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 84 },
      { id: 'luizao', nome: "Luizão", posicoes: ["MEI"], forca: 78 },
      { id: 'tiba', nome: "Tiba", posicoes: ["PD"], forca: 77 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["ATA"], forca: 84 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 78 },
      { id: 'clovis', nome: "Clóvis", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 81 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 78 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 83 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MEI"], forca: 79 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["PD"], forca: 80 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 79 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 78 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 77 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 76 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 77 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 83 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["MEI"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 77 },
      { id: 'charles-fabian', nome: "Charles Fabian", posicoes: ["ATA"], forca: 82 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 79 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 76 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1993 =====

  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Palmeiras",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 75 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["LD"], forca: 78 },
      { id: 'cleber', nome: "Cléber", posicoes: ["ZAG"], forca: 83 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 80 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 86 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 84 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 87 },
      { id: 'edilson', nome: "Edílson", posicoes: ["PD"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Vitória",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["LD"], forca: 77 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ZAG"], forca: 76 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LE"], forca: 77 },
      { id: 'roberto-cavalo', nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 80 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MC"], forca: 80 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 82 },
      { id: 'bebeto-campos', nome: "Bebeto Campos", posicoes: ["MEI"], forca: 77 },
      { id: 'oseas', nome: "Oséas", posicoes: ["PD"], forca: 78 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 81 },
      { id: 'pichetti', nome: "Pichetti", posicoes: ["ATA"], forca: 78 },
      { id: 'nadson', nome: "Nadson", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 77 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Santos",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 79 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["LD"], forca: 76 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 76 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 77 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["LE"], forca: 75 },
      { id: 'gallo', nome: "Gallo", posicoes: ["VOL"], forca: 80 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 78 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 86 },
      { id: 'robert', nome: "Robert", posicoes: ["MEI"], forca: 79 },
      { id: 'macedo', nome: "Macedo", posicoes: ["PD"], forca: 78 },
      { id: 'camanducaia', nome: "Camanducaia", posicoes: ["ATA"], forca: 77 },
      { id: 'guga', nome: "Guga", posicoes: ["ATA"], forca: 78 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { id: 'jamelli', nome: "Jamelli", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 78 },
      { id: 'pintado', nome: "Pintado", posicoes: ["LD"], forca: 77 },
      { id: 'andre-cruz', nome: "André Cruz", posicoes: ["ZAG"], forca: 82 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 83 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 76 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MC"], forca: 83 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 84 },
      { id: 'luizao', nome: "Luizão", posicoes: ["MEI"], forca: 78 },
      { id: 'tiba', nome: "Tiba", posicoes: ["PD"], forca: 77 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["ATA"], forca: 84 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 78 },
      { id: 'clovis', nome: "Clóvis", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 1992 =====

  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Flamengo",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 81 },
      { id: 'charles-guerreiro', nome: "Charles Guerreiro", posicoes: ["LD"], forca: 76 },
      { id: 'rondinelli', nome: "Rondinelli", posicoes: ["ZAG"], forca: 77 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 80 },
      { id: 'pia', nome: "Piá", posicoes: ["LE"], forca: 75 },
      { id: 'uidemar', nome: "Uidemar", posicoes: ["VOL"], forca: 78 },
      { id: 'junior', nome: "Júnior", posicoes: ["MC"], forca: 84 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 80 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'gaucho', nome: "Gaúcho", posicoes: ["PD"], forca: 80 },
      { id: 'nelio', nome: "Nélio", posicoes: ["ATA"], forca: 78 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["ATA"], forca: 79 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Botafogo",
    jogadores: [
      { id: 'wagner', nome: "Wagner", posicoes: ["GOL"], forca: 82 },
      { id: 'perivaldo', nome: "Perivaldo", posicoes: ["LD"], forca: 77 },
      { id: 'goncalves', nome: "Gonçalves", posicoes: ["ZAG"], forca: 83 },
      { id: 'wilson-gottardo', nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'andre-silva', nome: "André Silva", posicoes: ["LE"], forca: 77 },
      { id: 'leandro-avila', nome: "Leandro Ávila", posicoes: ["VOL"], forca: 80 },
      { id: 'jamir', nome: "Jamir", posicoes: ["MC"], forca: 79 },
      { id: 'beto', nome: "Beto", posicoes: ["MEI"], forca: 81 },
      { id: 'carlos-alberto-dias', nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 78 },
      { id: 'sergio-manoel', nome: "Sérgio Manoel", posicoes: ["PD"], forca: 82 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 88 },
      { id: 'donizete', nome: "Donizete", posicoes: ["ATA"], forca: 82 },
      { id: 'valdeir', nome: "Valdeir", posicoes: ["ATA"], forca: 79 },
      { id: 'mauricinho', nome: "Mauricinho", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 82 },
      { id: 'luis-carlos-winck', nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 79 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'jorge-luis', nome: "Jorge Luís", posicoes: ["ZAG"], forca: 77 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { id: 'luisinho', nome: "Luisinho", posicoes: ["VOL"], forca: 79 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MC"], forca: 82 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MEI"], forca: 84 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 78 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 86 },
      { id: 'sorato', nome: "Sorato", posicoes: ["ATA"], forca: 80 },
      { id: 'valdir', nome: "Valdir", posicoes: ["ATA"], forca: 78 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 80 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Bragantino",
    jogadores: [
      { id: 'gilberto', nome: "Gilberto", posicoes: ["GOL"], forca: 80 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { id: 'silvio', nome: "Sílvio", posicoes: ["LE"], forca: 76 },
      { id: 'mauro-silva', nome: "Mauro Silva", posicoes: ["VOL"], forca: 85 },
      { id: 'tiba', nome: "Tiba", posicoes: ["MC"], forca: 78 },
      { id: 'joao-santos', nome: "João Santos", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'mazinho-oliveira', nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 79 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["PD"], forca: 76 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { id: 'franklin', nome: "Franklin", posicoes: ["ATA"], forca: 79 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Santos",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 79 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["LD"], forca: 76 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 76 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 77 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["LE"], forca: 75 },
      { id: 'gallo', nome: "Gallo", posicoes: ["VOL"], forca: 80 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 78 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 86 },
      { id: 'robert', nome: "Robert", posicoes: ["MEI"], forca: 79 },
      { id: 'macedo', nome: "Macedo", posicoes: ["PD"], forca: 78 },
      { id: 'camanducaia', nome: "Camanducaia", posicoes: ["ATA"], forca: 77 },
      { id: 'guga', nome: "Guga", posicoes: ["ATA"], forca: 78 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { id: 'jamelli', nome: "Jamelli", posicoes: ["PE"], forca: 80 }
    ]
  },

  // ===== Edição 1991 =====

  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Bragantino",
    jogadores: [
      { id: 'gilberto', nome: "Gilberto", posicoes: ["GOL"], forca: 80 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { id: 'silvio', nome: "Sílvio", posicoes: ["LE"], forca: 76 },
      { id: 'mauro-silva', nome: "Mauro Silva", posicoes: ["VOL"], forca: 85 },
      { id: 'tiba', nome: "Tiba", posicoes: ["MC"], forca: 78 },
      { id: 'joao-santos', nome: "João Santos", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'mazinho-oliveira', nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 79 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["PD"], forca: 76 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { id: 'franklin', nome: "Franklin", posicoes: ["ATA"], forca: 79 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 81 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 78 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 83 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MEI"], forca: 79 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["PD"], forca: 80 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 77 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Flamengo",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 81 },
      { id: 'charles-guerreiro', nome: "Charles Guerreiro", posicoes: ["LD"], forca: 76 },
      { id: 'rondinelli', nome: "Rondinelli", posicoes: ["ZAG"], forca: 77 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 80 },
      { id: 'pia', nome: "Piá", posicoes: ["LE"], forca: 75 },
      { id: 'uidemar', nome: "Uidemar", posicoes: ["VOL"], forca: 78 },
      { id: 'junior', nome: "Júnior", posicoes: ["MC"], forca: 84 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 83 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 80 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'gaucho', nome: "Gaúcho", posicoes: ["PD"], forca: 80 },
      { id: 'nelio', nome: "Nélio", posicoes: ["ATA"], forca: 78 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["ATA"], forca: 79 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 82 },
      { id: 'luis-carlos-winck', nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 79 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'jorge-luis', nome: "Jorge Luís", posicoes: ["ZAG"], forca: 77 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { id: 'luisinho', nome: "Luisinho", posicoes: ["VOL"], forca: 79 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MC"], forca: 82 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MEI"], forca: 84 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 78 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 86 },
      { id: 'sorato', nome: "Sorato", posicoes: ["ATA"], forca: 80 },
      { id: 'valdir', nome: "Valdir", posicoes: ["ATA"], forca: 78 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 80 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1990 =====

  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 77 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 81 },
      { id: 'adilson-batista', nome: "Adílson Batista", posicoes: ["ZAG"], forca: 81 },
      { id: 'rivarola', nome: "Rivarola", posicoes: ["ZAG"], forca: 79 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 77 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL"], forca: 82 },
      { id: 'goiano', nome: "Goiano", posicoes: ["MC"], forca: 80 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 80 },
      { id: 'arilson', nome: "Arílson", posicoes: ["PD"], forca: 80 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 83 },
      { id: 'jardel', nome: "Jardel", posicoes: ["ATA"], forca: 85 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 79 },
      { id: 'cuca', nome: "Cuca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 79 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 78 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 77 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 76 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 77 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 83 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["MEI"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 77 },
      { id: 'charles-fabian', nome: "Charles Fabian", posicoes: ["ATA"], forca: 82 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 79 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 76 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Palmeiras",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 82 },
      { id: 'toninho', nome: "Toninho", posicoes: ["LD"], forca: 76 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 79 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 81 },
      { id: 'vladimir', nome: "Vladimir", posicoes: ["LE"], forca: 77 },
      { id: 'lima', nome: "Lima", posicoes: ["VOL"], forca: 77 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["MC"], forca: 80 },
      { id: 'tato', nome: "Tato", posicoes: ["MEI"], forca: 78 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 81 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["PD"], forca: 78 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 84 },
      { id: 'careca-bianchezi', nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 77 },
      { id: 'gaucho', nome: "Gaúcho", posicoes: ["ATA"], forca: 78 },
      { id: 'nei', nome: "Nei", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 1989 =====

  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 80 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 82 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 80 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 78 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 77 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 78 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { id: 'charles', nome: "Charles", posicoes: ["MC"], forca: 81 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 78 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PE"], forca: 79 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 80 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["ATA"], forca: 77 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 79 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 77 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1988 =====

  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 80 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 78 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 77 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 78 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { id: 'charles', nome: "Charles", posicoes: ["MC"], forca: 81 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 78 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PE"], forca: 79 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 80 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["ATA"], forca: 77 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 77 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Fluminense",
    jogadores: [
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 83 },
      { id: 'aldo', nome: "Aldo", posicoes: ["LD"], forca: 78 },
      { id: 'ricardo-gomes', nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 85 },
      { id: 'duilio', nome: "Duílio", posicoes: ["ZAG"], forca: 79 },
      { id: 'branco', nome: "Branco", posicoes: ["LE"], forca: 84 },
      { id: 'jandir', nome: "Jandir", posicoes: ["VOL"], forca: 80 },
      { id: 'deley', nome: "Deley", posicoes: ["MC"], forca: 84 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 83 },
      { id: 'washington', nome: "Washington", posicoes: ["MEI"], forca: 84 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 85 },
      { id: 'tato', nome: "Tato", posicoes: ["PD"], forca: 80 },
      { id: 'romerito', nome: "Romerito", posicoes: ["PE"], forca: 84 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { id: 't-washington', nome: "T Washington", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Palmeiras",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 82 },
      { id: 'rosemiro', nome: "Rosemiro", posicoes: ["LD"], forca: 78 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 82 },
      { id: 'marcio-alcantara', nome: "Márcio Alcântara", posicoes: ["ZAG"], forca: 79 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 79 },
      { id: 'lima', nome: "Lima", posicoes: ["VOL"], forca: 78 },
      { id: 'jorginho-putinatti', nome: "Jorginho Putinatti", posicoes: ["MC"], forca: 82 },
      { id: 'mendel', nome: "Mendel", posicoes: ["MC"], forca: 77 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 83 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 81 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 82 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 84 },
      { id: 'careca-bianchezi', nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 79 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1987 =====

  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Sport",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 78 },
      { id: 'betao', nome: "Betão", posicoes: ["LD"], forca: 76 },
      { id: 'junior', nome: "Júnior", posicoes: ["ZAG"], forca: 77 },
      { id: 'estevam', nome: "Estevam", posicoes: ["ZAG"], forca: 76 },
      { id: 'ribamar', nome: "Ribamar", posicoes: ["LE"], forca: 75 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 78 },
      { id: 'neto', nome: "Neto", posicoes: ["MC"], forca: 80 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["MC"], forca: 77 },
      { id: 'robertinho', nome: "Robertinho", posicoes: ["MEI"], forca: 78 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["PD"], forca: 76 },
      { id: 'edson', nome: "Édson", posicoes: ["PE"], forca: 76 },
      { id: 'nando', nome: "Nando", posicoes: ["ATA"], forca: 80 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["ATA"], forca: 76 },
      { id: 'gena', nome: "Gena", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 78 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 77 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'carlos-gomes', nome: "Carlos Gomes", posicoes: ["GOL"], forca: 78 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ZAG"], forca: 78 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LE"], forca: 78 },
      { id: 'douglas', nome: "Douglas", posicoes: ["VOL"], forca: 77 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MC"], forca: 80 },
      { id: 'balu', nome: "Balu", posicoes: ["MC"], forca: 77 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 83 },
      { id: 'careca', nome: "Careca", posicoes: ["MEI"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 82 },
      { id: 'tostao-ii', nome: "Tostão II", posicoes: ["PE"], forca: 77 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 76 },
      { id: 'hamilton', nome: "Hamilton", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1986 =====

  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 82 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 78 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "América-RJ",
    jogadores: [
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 80 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'duilio', nome: "Duílio", posicoes: ["ZAG"], forca: 77 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["LE"], forca: 76 },
      { id: 'gilson-genio', nome: "Gilson Gênio", posicoes: ["VOL"], forca: 78 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 78 },
      { id: 'donizete', nome: "Donizete", posicoes: ["MC"], forca: 77 },
      { id: 'edu-coimbra', nome: "Edu Coimbra", posicoes: ["MEI"], forca: 84 },
      { id: 'luisinho-lemos', nome: "Luisinho Lemos", posicoes: ["MEI"], forca: 79 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["PD"], forca: 76 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["PE"], forca: 76 },
      { id: 'tita', nome: "Tita", posicoes: ["ATA"], forca: 81 },
      { id: 'gilberto-oliveira', nome: "Gilberto Oliveira", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 77 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1985 =====

  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Coritiba",
    jogadores: [
      { id: 'rafael', nome: "Rafael", posicoes: ["GOL"], forca: 80 },
      { id: 'andre', nome: "André", posicoes: ["LD"], forca: 77 },
      { id: 'vava', nome: "Vavá", posicoes: ["ZAG"], forca: 79 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { id: 'dida', nome: "Dida", posicoes: ["LE"], forca: 76 },
      { id: 'toby', nome: "Toby", posicoes: ["VOL"], forca: 78 },
      { id: 'aladim', nome: "Aladim", posicoes: ["MC"], forca: 78 },
      { id: 'lela', nome: "Lela", posicoes: ["MC"], forca: 83 },
      { id: 'pachequinho', nome: "Pachequinho", posicoes: ["MEI"], forca: 80 },
      { id: 'edson', nome: "Édson", posicoes: ["MEI"], forca: 77 },
      { id: 'marildo', nome: "Marildo", posicoes: ["PD"], forca: 77 },
      { id: 'tostao', nome: "Tostão", posicoes: ["PE"], forca: 76 },
      { id: 'indio', nome: "Índio", posicoes: ["ATA"], forca: 80 },
      { id: 'marco-aurelio', nome: "Marco Aurélio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Bangu",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 83 },
      { id: 'ado', nome: "Ado", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'ronaldo', nome: "Ronaldo", posicoes: ["ZAG"], forca: 79 },
      { id: 'marinho', nome: "Marinho", posicoes: ["LE"], forca: 80 },
      { id: 'mario', nome: "Mário", posicoes: ["VOL"], forca: 79 },
      { id: 'arturzinho', nome: "Arturzinho", posicoes: ["MC"], forca: 85 },
      { id: 'adozinho', nome: "Adozinho", posicoes: ["MC"], forca: 80 },
      { id: 'lulinha', nome: "Lulinha", posicoes: ["MEI"], forca: 78 },
      { id: 'paulinho-criciuma', nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 79 },
      { id: 'gilson-genio', nome: "Gilson Gênio", posicoes: ["PE"], forca: 78 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 84 },
      { id: 'israel', nome: "Israel", posicoes: ["ATA"], forca: 80 },
      { id: 'toinzinho', nome: "Toinzinho", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Brasil de Pelotas",
    jogadores: [
      { id: 'joao-luis', nome: "João Luis", posicoes: ["GOL"], forca: 80 },
      { id: 'nei-dias', nome: "Nei Dias", posicoes: ["LD"], forca: 76 },
      { id: 'jorge-batata', nome: "Jorge Batata", posicoes: ["LE"], forca: 76 },
      { id: 'silva', nome: "Silva", posicoes: ["ZAG"], forca: 78 },
      { id: 'helio', nome: "Hélio", posicoes: ["ZAG"], forca: 78 },
      { id: 'doraci', nome: "Doraci", posicoes: ["VOL"], forca: 80 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["MC"], forca: 78 },
      { id: 'alamir', nome: "Alamir", posicoes: ["MC"], forca: 78 },
      { id: 'livio', nome: "Lívio", posicoes: ["MEI"], forca: 80 },
      { id: 'junior-brasilia', nome: "Júnior Brasília", posicoes: ["MEI"], forca: 82 },
      { id: 'valdoir', nome: "Valdoir", posicoes: ["PD"], forca: 76 },
      { id: 'mano', nome: "Mano", posicoes: ["PE"], forca: 76 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 83 },
      { id: 'canhotinho', nome: "Canhotinho", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 77 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 1984 =====

  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Fluminense",
    jogadores: [
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 83 },
      { id: 'aldo', nome: "Aldo", posicoes: ["LD"], forca: 78 },
      { id: 'ricardo-gomes', nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 85 },
      { id: 'duilio', nome: "Duílio", posicoes: ["ZAG"], forca: 79 },
      { id: 'branco', nome: "Branco", posicoes: ["LE"], forca: 84 },
      { id: 'jandir', nome: "Jandir", posicoes: ["VOL"], forca: 80 },
      { id: 'deley', nome: "Deley", posicoes: ["MC"], forca: 84 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 83 },
      { id: 'washington', nome: "Washington", posicoes: ["MEI"], forca: 84 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 85 },
      { id: 'tato', nome: "Tato", posicoes: ["PD"], forca: 80 },
      { id: 'romerito', nome: "Romerito", posicoes: ["PE"], forca: 84 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { id: 't-washington', nome: "T Washington", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 80 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Corinthians",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 82 },
      { id: 'edson-boaro', nome: "Édson Boaro", posicoes: ["LD"], forca: 80 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { id: 'damiao', nome: "Damião", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 84 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["VOL"], forca: 82 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 85 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC"], forca: 78 },
      { id: 'socrates', nome: "Sócrates", posicoes: ["MEI"], forca: 90 },
      { id: 'casagrande', nome: "Casagrande", posicoes: ["MEI"], forca: 84 },
      { id: 'ataliba', nome: "Ataliba", posicoes: ["PD"], forca: 80 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 79 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 79 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1983 =====

  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Santos",
    jogadores: [
      { id: 'rodella', nome: "Rodella", posicoes: ["GOL"], forca: 78 },
      { id: 'nelson', nome: "Nélson", posicoes: ["LD"], forca: 76 },
      { id: 'toninho-carlos', nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { id: 'dema', nome: "Dema", posicoes: ["VOL"], forca: 78 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 83 },
      { id: 'lino', nome: "Lino", posicoes: ["MC"], forca: 77 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 76 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 84 },
      { id: 'edmar', nome: "Edmar", posicoes: ["PD"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 80 },
      { id: 'juary', nome: "Juary", posicoes: ["ATA"], forca: 81 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'roberto-costa', nome: "Roberto Costa", posicoes: ["GOL"], forca: 78 },
      { id: 'jorge-luis', nome: "Jorge Luís", posicoes: ["LD"], forca: 76 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["ZAG"], forca: 77 },
      { id: 'djalma', nome: "Djalma", posicoes: ["ZAG"], forca: 76 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["LE"], forca: 75 },
      { id: 'assis', nome: "Assis", posicoes: ["VOL"], forca: 78 },
      { id: 'lico', nome: "Lico", posicoes: ["MC"], forca: 78 },
      { id: 'serginho', nome: "Serginho", posicoes: ["MC"], forca: 76 },
      { id: 'paulo-rink', nome: "Paulo Rink", posicoes: ["MEI"], forca: 75 },
      { id: 'edson', nome: "Édson", posicoes: ["PD"], forca: 77 },
      { id: 'dinei', nome: "Dinei", posicoes: ["PE"], forca: 75 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 82 },
      { id: 'sicupira', nome: "Sicupira", posicoes: ["ATA"], forca: 80 },
      { id: 'jofre', nome: "Jofre", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Bangu",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 83 },
      { id: 'ado', nome: "Ado", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'ronaldo', nome: "Ronaldo", posicoes: ["ZAG"], forca: 79 },
      { id: 'marinho', nome: "Marinho", posicoes: ["LE"], forca: 80 },
      { id: 'mario', nome: "Mário", posicoes: ["VOL"], forca: 79 },
      { id: 'arturzinho', nome: "Arturzinho", posicoes: ["MC"], forca: 85 },
      { id: 'adozinho', nome: "Adozinho", posicoes: ["MC"], forca: 80 },
      { id: 'lulinha', nome: "Lulinha", posicoes: ["MEI"], forca: 78 },
      { id: 'paulinho-criciuma', nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 79 },
      { id: 'gilson-genio', nome: "Gilson Gênio", posicoes: ["PE"], forca: 78 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 84 },
      { id: 'israel', nome: "Israel", posicoes: ["ATA"], forca: 80 },
      { id: 'toinzinho', nome: "Toinzinho", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Corinthians",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 82 },
      { id: 'edson-boaro', nome: "Édson Boaro", posicoes: ["LD"], forca: 80 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { id: 'damiao', nome: "Damião", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 84 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["VOL"], forca: 82 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 85 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC"], forca: 78 },
      { id: 'socrates', nome: "Sócrates", posicoes: ["MEI"], forca: 90 },
      { id: 'casagrande', nome: "Casagrande", posicoes: ["MEI"], forca: 84 },
      { id: 'ataliba', nome: "Ataliba", posicoes: ["PD"], forca: 80 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 79 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 78 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1982 =====

  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 79 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Corinthians",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 82 },
      { id: 'edson-boaro', nome: "Édson Boaro", posicoes: ["LD"], forca: 80 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { id: 'damiao', nome: "Damião", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 84 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["VOL"], forca: 82 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 85 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC"], forca: 78 },
      { id: 'socrates', nome: "Sócrates", posicoes: ["MEI"], forca: 90 },
      { id: 'casagrande', nome: "Casagrande", posicoes: ["MEI"], forca: 84 },
      { id: 'ataliba', nome: "Ataliba", posicoes: ["PD"], forca: 80 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 79 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 78 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 82 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 80 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },

  // ===== Edição 1981 =====

  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 79 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 82 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Ponte Preta",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 78 },
      { id: 'odirlei', nome: "Odirlei", posicoes: ["LD"], forca: 77 },
      { id: 'polozzi', nome: "Polozzi", posicoes: ["ZAG"], forca: 82 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 80 },
      { id: 'marco-aurelio', nome: "Marco Aurélio", posicoes: ["LE"], forca: 77 },
      { id: 'ze-mario', nome: "Zé Mário", posicoes: ["VOL"], forca: 78 },
      { id: 'dica', nome: "Dicá", posicoes: ["MC"], forca: 85 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { id: 'parraga', nome: "Parraga", posicoes: ["MEI"], forca: 76 },
      { id: 'rui-rei', nome: "Rui Rei", posicoes: ["PD"], forca: 79 },
      { id: 'tuta', nome: "Tuta", posicoes: ["PE"], forca: 77 },
      { id: 'edson', nome: "Édson", posicoes: ["ATA"], forca: 78 },
      { id: 'carlos-henrique', nome: "Carlos Henrique", posicoes: ["ATA"], forca: 76 },
      { id: 'sergio-alves', nome: "Sérgio Alves", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Botafogo",
    jogadores: [
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 81 },
      { id: 'perivaldo', nome: "Perivaldo", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 83 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["ZAG"], forca: 78 },
      { id: 'alemao', nome: "Alemão", posicoes: ["LE"], forca: 80 },
      { id: 'carlos-alberto-santos', nome: "Carlos Alberto Santos", posicoes: ["VOL"], forca: 79 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MC"], forca: 82 },
      { id: 'everton', nome: "Éverton", posicoes: ["MC"], forca: 78 },
      { id: 'renato-sa', nome: "Renato Sá", posicoes: ["MEI"], forca: 79 },
      { id: 'lucio-flavio', nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 75 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["PD"], forca: 82 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 78 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 80 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1980 =====

  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 82 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Coritiba",
    jogadores: [
      { id: 'rafael', nome: "Rafael", posicoes: ["GOL"], forca: 80 },
      { id: 'andre', nome: "André", posicoes: ["LD"], forca: 77 },
      { id: 'vava', nome: "Vavá", posicoes: ["ZAG"], forca: 79 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { id: 'dida', nome: "Dida", posicoes: ["LE"], forca: 76 },
      { id: 'toby', nome: "Toby", posicoes: ["VOL"], forca: 78 },
      { id: 'aladim', nome: "Aladim", posicoes: ["MC"], forca: 78 },
      { id: 'lela', nome: "Lela", posicoes: ["MC"], forca: 83 },
      { id: 'pachequinho', nome: "Pachequinho", posicoes: ["MEI"], forca: 80 },
      { id: 'edson', nome: "Édson", posicoes: ["MEI"], forca: 77 },
      { id: 'marildo', nome: "Marildo", posicoes: ["PD"], forca: 77 },
      { id: 'tostao', nome: "Tostão", posicoes: ["PE"], forca: 76 },
      { id: 'indio', nome: "Índio", posicoes: ["ATA"], forca: 80 },
      { id: 'marco-aurelio', nome: "Marco Aurélio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 77 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Santos",
    jogadores: [
      { id: 'rodella', nome: "Rodella", posicoes: ["GOL"], forca: 78 },
      { id: 'nelson', nome: "Nélson", posicoes: ["LD"], forca: 76 },
      { id: 'toninho-carlos', nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 77 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { id: 'dema', nome: "Dema", posicoes: ["VOL"], forca: 78 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 83 },
      { id: 'lino', nome: "Lino", posicoes: ["MC"], forca: 77 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 76 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 84 },
      { id: 'edmar', nome: "Edmar", posicoes: ["PD"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 80 },
      { id: 'juary', nome: "Juary", posicoes: ["ATA"], forca: 81 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 80 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },

  // ===== Edição 1979 =====

  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 84 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 80 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'miguel', nome: "Miguel", posicoes: ["ZAG"], forca: 79 },
      { id: 'alfinete', nome: "Alfinete", posicoes: ["LE"], forca: 78 },
      { id: 'alcir-portela', nome: "Alcir Portela", posicoes: ["VOL"], forca: 80 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["MEI"], forca: 82 },
      { id: 'ademir', nome: "Ademir", posicoes: ["MEI"], forca: 79 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 80 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'jair-pereira', nome: "Jair Pereira", posicoes: ["ATA"], forca: 80 },
      { id: 'luis-carlos', nome: "Luís Carlos", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Coritiba",
    jogadores: [
      { id: 'jairo', nome: "Jairo", posicoes: ["GOL"], forca: 81 },
      { id: 'hermes', nome: "Hermes", posicoes: ["LD"], forca: 77 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { id: 'claudio-marques', nome: "Cláudio Marques", posicoes: ["ZAG"], forca: 77 },
      { id: 'nilo', nome: "Nilo", posicoes: ["LE"], forca: 77 },
      { id: 'toby', nome: "Toby", posicoes: ["VOL"], forca: 78 },
      { id: 'kruger', nome: "Krüger", posicoes: ["MC"], forca: 83 },
      { id: 'aladim', nome: "Aladim", posicoes: ["MC"], forca: 78 },
      { id: 'paquito', nome: "Paquito", posicoes: ["MEI"], forca: 77 },
      { id: 'fedato', nome: "Fedato", posicoes: ["MEI"], forca: 76 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PD"], forca: 78 },
      { id: 'dito', nome: "Dito", posicoes: ["PE"], forca: 76 },
      { id: 'duilio-dias', nome: "Duilio Dias", posicoes: ["ATA"], forca: 78 },
      { id: 'dirceu-kruger', nome: "Dirceu Krüger", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 78 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Guarani",
    jogadores: [
      { id: 'neneca', nome: "Neneca", posicoes: ["GOL"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 78 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 80 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 78 },
      { id: 'alfredo', nome: "Alfredo", posicoes: ["LE"], forca: 76 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 80 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 86 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 82 },
      { id: 'bozo', nome: "Bozó", posicoes: ["MEI"], forca: 81 },
      { id: 'capitao', nome: "Capitão", posicoes: ["PD"], forca: 80 },
      { id: 'manguinha', nome: "Manguinha", posicoes: ["PE"], forca: 78 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 82 },
      { id: 'orlando', nome: "Orlando", posicoes: ["ATA"], forca: 78 },
      { id: 'theodoro', nome: "Theodoro", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1978 =====

  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Guarani",
    jogadores: [
      { id: 'neneca', nome: "Neneca", posicoes: ["GOL"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 78 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 80 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 78 },
      { id: 'alfredo', nome: "Alfredo", posicoes: ["LE"], forca: 76 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 80 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 86 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 82 },
      { id: 'bozo', nome: "Bozó", posicoes: ["MEI"], forca: 81 },
      { id: 'capitao', nome: "Capitão", posicoes: ["PD"], forca: 80 },
      { id: 'manguinha', nome: "Manguinha", posicoes: ["PE"], forca: 78 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 82 },
      { id: 'orlando', nome: "Orlando", posicoes: ["ATA"], forca: 78 },
      { id: 'theodoro', nome: "Theodoro", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 84 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 80 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'miguel', nome: "Miguel", posicoes: ["ZAG"], forca: 79 },
      { id: 'alfinete', nome: "Alfinete", posicoes: ["LE"], forca: 78 },
      { id: 'alcir-portela', nome: "Alcir Portela", posicoes: ["VOL"], forca: 80 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["MEI"], forca: 82 },
      { id: 'ademir', nome: "Ademir", posicoes: ["MEI"], forca: 79 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 80 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'jair-pereira', nome: "Jair Pereira", posicoes: ["ATA"], forca: 80 },
      { id: 'luis-carlos', nome: "Luís Carlos", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 77 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 80 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 78 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 78 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 77 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 78 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { id: 'charles', nome: "Charles", posicoes: ["MC"], forca: 81 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 78 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PE"], forca: 79 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 80 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["ATA"], forca: 77 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1977 =====

  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 77 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Operário-MS",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 79 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["LD"], forca: 74 },
      { id: 'celso', nome: "Celso", posicoes: ["ZAG"], forca: 75 },
      { id: 'bene', nome: "Benê", posicoes: ["ZAG"], forca: 74 },
      { id: 'edson', nome: "Edson", posicoes: ["LE"], forca: 73 },
      { id: 'mauro', nome: "Mauro", posicoes: ["VOL"], forca: 75 },
      { id: 'jair', nome: "Jair", posicoes: ["MC"], forca: 75 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MC"], forca: 74 },
      { id: 'humberto-ramos', nome: "Humberto Ramos", posicoes: ["MEI"], forca: 77 },
      { id: 'peri', nome: "Peri", posicoes: ["PD"], forca: 74 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["PE"], forca: 74 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA"], forca: 75 },
      { id: 'lima', nome: "Lima", posicoes: ["ATA"], forca: 74 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Londrina",
    jogadores: [
      { id: 'neneca', nome: "Neneca", posicoes: ["GOL"], forca: 77 },
      { id: 'brandao', nome: "Brandão", posicoes: ["LD"], forca: 74 },
      { id: 'carlos-alberto-garcia', nome: "Carlos Alberto Garcia", posicoes: ["ZAG"], forca: 78 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["ZAG"], forca: 74 },
      { id: 'nelson', nome: "Nelson", posicoes: ["LE"], forca: 73 },
      { id: 'marinho', nome: "Marinho", posicoes: ["VOL"], forca: 75 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["MC"], forca: 74 },
      { id: 'jorge-nunes', nome: "Jorge Nunes", posicoes: ["MC"], forca: 74 },
      { id: 'carlos-alberto-seixas', nome: "Carlos Alberto Seixas", posicoes: ["MEI"], forca: 76 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["PD"], forca: 74 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 75 },
      { id: 'brandaozinho', nome: "Brandãozinho", posicoes: ["ATA"], forca: 75 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["ATA"], forca: 74 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 78 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },

  // ===== Edição 1976 =====

  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 78 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 77 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 83 },
      { id: 'toninho', nome: "Toninho", posicoes: ["LD"], forca: 80 },
      { id: 'edinho', nome: "Edinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'silveira', nome: "Silveira", posicoes: ["ZAG"], forca: 80 },
      { id: 'rodrigues-neto', nome: "Rodrigues Neto", posicoes: ["LE"], forca: 83 },
      { id: 'kleber', nome: "Kléber", posicoes: ["VOL"], forca: 79 },
      { id: 'pintinho', nome: "Pintinho", posicoes: ["MC"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 84 },
      { id: 'rivelino', nome: "Rivelino", posicoes: ["MEI"], forca: 91 },
      { id: 'paulo-cesar-caju', nome: "Paulo César Caju", posicoes: ["MEI"], forca: 86 },
      { id: 'gil', nome: "Gil", posicoes: ["PD"], forca: 82 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 81 },
      { id: 'doval', nome: "Doval", posicoes: ["ATA"], forca: 82 },
      { id: 'manfrini', nome: "Manfrini", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Grêmio",
    jogadores: [
      { id: 'eurico-lara', nome: "Eurico Lara", posicoes: ["GOL"], forca: 74 },
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 78 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LD"], forca: 82 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 82 },
      { id: 'orlando-lele', nome: "Orlando Lelé", posicoes: ["LE"], forca: 77 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 78 },
      { id: 'iura', nome: "Iúra", posicoes: ["MC"], forca: 77 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["MEI"], forca: 81 },
      { id: 'tadeu-ricci', nome: "Tadeu Ricci", posicoes: ["MEI"], forca: 77 },
      { id: 'jair', nome: "Jair", posicoes: ["PD"], forca: 78 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 82 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 80 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1975 =====

  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 83 },
      { id: 'toninho', nome: "Toninho", posicoes: ["LD"], forca: 80 },
      { id: 'edinho', nome: "Edinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'silveira', nome: "Silveira", posicoes: ["ZAG"], forca: 80 },
      { id: 'rodrigues-neto', nome: "Rodrigues Neto", posicoes: ["LE"], forca: 83 },
      { id: 'kleber', nome: "Kléber", posicoes: ["VOL"], forca: 79 },
      { id: 'pintinho', nome: "Pintinho", posicoes: ["MC"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 84 },
      { id: 'rivelino', nome: "Rivelino", posicoes: ["MEI"], forca: 91 },
      { id: 'paulo-cesar-caju', nome: "Paulo César Caju", posicoes: ["MEI"], forca: 86 },
      { id: 'gil', nome: "Gil", posicoes: ["PD"], forca: 82 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 81 },
      { id: 'doval', nome: "Doval", posicoes: ["ATA"], forca: 82 },
      { id: 'manfrini', nome: "Manfrini", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Santa Cruz",
    jogadores: [
      { id: 'gilberto', nome: "Gilberto", posicoes: ["GOL"], forca: 78 },
      { id: 'nena', nome: "Nena", posicoes: ["LD"], forca: 76 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["ZAG"], forca: 76 },
      { id: 'luciano-veloso', nome: "Luciano Veloso", posicoes: ["ZAG"], forca: 77 },
      { id: 'ramon', nome: "Ramon", posicoes: ["LE"], forca: 81 },
      { id: 'ze-mario', nome: "Zé Mário", posicoes: ["VOL"], forca: 77 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["MC"], forca: 82 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["MC"], forca: 78 },
      { id: 'betinho', nome: "Betinho", posicoes: ["MEI"], forca: 79 },
      { id: 'nunes', nome: "Nunes", posicoes: ["PD"], forca: 79 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["PE"], forca: 76 },
      { id: 'fumanchu', nome: "Fumanchu", posicoes: ["ATA"], forca: 78 },
      { id: 'mazinho-loyola', nome: "Mazinho Loyola", posicoes: ["ATA"], forca: 76 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },

  // ===== Edição 1974 =====

  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 84 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 80 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'miguel', nome: "Miguel", posicoes: ["ZAG"], forca: 79 },
      { id: 'alfinete', nome: "Alfinete", posicoes: ["LE"], forca: 78 },
      { id: 'alcir-portela', nome: "Alcir Portela", posicoes: ["VOL"], forca: 80 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["MEI"], forca: 82 },
      { id: 'ademir', nome: "Ademir", posicoes: ["MEI"], forca: 79 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 80 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'jair-pereira', nome: "Jair Pereira", posicoes: ["ATA"], forca: 80 },
      { id: 'luis-carlos', nome: "Luís Carlos", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Santos",
    jogadores: [
      { id: 'cejas', nome: "Cejas", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 85 },
      { id: 'vicente', nome: "Vicente", posicoes: ["ZAG"], forca: 78 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 77 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 77 },
      { id: 'leo-oliveira', nome: "Léo Oliveira", posicoes: ["VOL"], forca: 77 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["MC"], forca: 84 },
      { id: 'brecha', nome: "Brecha", posicoes: ["MC"], forca: 78 },
      { id: 'edu', nome: "Edu", posicoes: ["MEI"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MEI"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["PD"], forca: 79 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 82 },
      { id: 'pele', nome: "Pelé", posicoes: ["ATA"], forca: 91 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 78 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1973 =====

  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Santos",
    jogadores: [
      { id: 'cejas', nome: "Cejas", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 85 },
      { id: 'vicente', nome: "Vicente", posicoes: ["ZAG"], forca: 78 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 77 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 77 },
      { id: 'leo-oliveira', nome: "Léo Oliveira", posicoes: ["VOL"], forca: 77 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["MC"], forca: 84 },
      { id: 'brecha', nome: "Brecha", posicoes: ["MC"], forca: 78 },
      { id: 'edu', nome: "Edu", posicoes: ["MEI"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MEI"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["PD"], forca: 79 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 82 },
      { id: 'pele', nome: "Pelé", posicoes: ["ATA"], forca: 91 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 77 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1972 =====

  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 78 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 1971 =====

  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 77 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 80 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Santos",
    jogadores: [
      { id: 'cejas', nome: "Cejas", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 85 },
      { id: 'vicente', nome: "Vicente", posicoes: ["ZAG"], forca: 78 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 77 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 77 },
      { id: 'leo-oliveira', nome: "Léo Oliveira", posicoes: ["VOL"], forca: 77 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["MC"], forca: 84 },
      { id: 'brecha', nome: "Brecha", posicoes: ["MC"], forca: 78 },
      { id: 'edu', nome: "Edu", posicoes: ["MEI"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MEI"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["PD"], forca: 79 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 82 },
      { id: 'pele', nome: "Pelé", posicoes: ["ATA"], forca: 91 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 80 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1970 =====

  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'ortiz', nome: "Ortiz", posicoes: ["GOL"], forca: 81 },
      { id: 'helio', nome: "Hélio", posicoes: ["GOL"], forca: 72 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 87 },
      { id: 'vantuir', nome: "Vantuir", posicoes: ["ZAG"], forca: 80 },
      { id: 'grapete', nome: "Grapete", posicoes: ["ZAG"], forca: 79 },
      { id: 'oldair', nome: "Oldair", posicoes: ["LE"], forca: 78 },
      { id: 'humberto-ramos', nome: "Humberto Ramos", posicoes: ["VOL"], forca: 82 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["MC"], forca: 80 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 79 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 86 },
      { id: 'dada-maravilha', nome: "Dadá Maravilha", posicoes: ["ATA"], forca: 88 },
      { id: 'ronaldo', nome: "Ronaldo", posicoes: ["PE"], forca: 82 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 80 },
      { id: 'buiao', nome: "Buião", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1969 =====

  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Corinthians",
    jogadores: [
      { id: 'ado', nome: "Ado", posicoes: ["GOL"], forca: 80 },
      { id: 'diogo', nome: "Diogo", posicoes: ["GOL"], forca: 73 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 86 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { id: 'ditao', nome: "Ditão", posicoes: ["ZAG"], forca: 79 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 83 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 80 },
      { id: 'dirceu-alves', nome: "Dirceu Alves", posicoes: ["MC"], forca: 81 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MC"], forca: 79 },
      { id: 'rivellino', nome: "Rivellino", posicoes: ["MEI"], forca: 92 },
      { id: 'paulo-borges', nome: "Paulo Borges", posicoes: ["PD"], forca: 82 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 79 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 83 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1968 =====

  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Corinthians",
    jogadores: [
      { id: 'ado', nome: "Ado", posicoes: ["GOL"], forca: 80 },
      { id: 'diogo', nome: "Diogo", posicoes: ["GOL"], forca: 73 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 86 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { id: 'ditao', nome: "Ditão", posicoes: ["ZAG"], forca: 79 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 83 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 80 },
      { id: 'dirceu-alves', nome: "Dirceu Alves", posicoes: ["MC"], forca: 81 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MC"], forca: 79 },
      { id: 'rivellino', nome: "Rivellino", posicoes: ["MEI"], forca: 92 },
      { id: 'paulo-borges', nome: "Paulo Borges", posicoes: ["PD"], forca: 82 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 79 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 83 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },

  // ===== Edição 1967 =====

  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 77 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 79 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Internacional",
    jogadores: [
      { id: 'gainete', nome: "Gainete", posicoes: ["GOL"], forca: 82 },
      { id: 'schneider', nome: "Schneider", posicoes: ["GOL"], forca: 72 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 85 },
      { id: 'pontes', nome: "Pontes", posicoes: ["ZAG"], forca: 80 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 78 },
      { id: 'falcao', nome: "Falcão", posicoes: ["VOL","MC"], forca: 90 },
      { id: 'dorinho', nome: "Dorinho", posicoes: ["VOL"], forca: 79 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 87 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ATA"], forca: 83 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["PE"], forca: 81 },
      { id: 'braulio', nome: "Bráulio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Corinthians",
    jogadores: [
      { id: 'ado', nome: "Ado", posicoes: ["GOL"], forca: 80 },
      { id: 'diogo', nome: "Diogo", posicoes: ["GOL"], forca: 73 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 86 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { id: 'ditao', nome: "Ditão", posicoes: ["ZAG"], forca: 79 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 83 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 80 },
      { id: 'dirceu-alves', nome: "Dirceu Alves", posicoes: ["MC"], forca: 81 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MC"], forca: 79 },
      { id: 'rivellino', nome: "Rivellino", posicoes: ["MEI"], forca: 92 },
      { id: 'paulo-borges', nome: "Paulo Borges", posicoes: ["PD"], forca: 82 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 79 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 83 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1966 =====

  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 77 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 79 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1965 =====

  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 77 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 79 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1964 =====

  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Flamengo",
    jogadores: [
      { id: 'ubirajara', nome: "Ubirajara", posicoes: ["GOL"], forca: 79 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'rodrigues-neto', nome: "Rodrigues Neto", posicoes: ["LD"], forca: 80 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 84 },
      { id: 'onca', nome: "Onça", posicoes: ["ZAG"], forca: 78 },
      { id: 'murilo', nome: "Murilo", posicoes: ["LE"], forca: 79 },
      { id: 'liminha', nome: "Liminha", posicoes: ["VOL"], forca: 78 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 81 },
      { id: 'franz-hasil', nome: "Franz Hasil", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'geraldo-assoviador', nome: "Geraldo Assoviador", posicoes: ["PD"], forca: 79 },
      { id: 'doval', nome: "Doval", posicoes: ["ATA"], forca: 84 },
      { id: 'fio-maravilha', nome: "Fio Maravilha", posicoes: ["ATA"], forca: 80 },
      { id: 'silva-batuta', nome: "Silva Batuta", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1963 =====

  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 77 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 79 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1962 =====

  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Internacional",
    jogadores: [
      { id: 'gainete', nome: "Gainete", posicoes: ["GOL"], forca: 82 },
      { id: 'schneider', nome: "Schneider", posicoes: ["GOL"], forca: 72 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 85 },
      { id: 'pontes', nome: "Pontes", posicoes: ["ZAG"], forca: 80 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 78 },
      { id: 'falcao', nome: "Falcão", posicoes: ["VOL","MC"], forca: 90 },
      { id: 'dorinho', nome: "Dorinho", posicoes: ["VOL"], forca: 79 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 87 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ATA"], forca: 83 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["PE"], forca: 81 },
      { id: 'braulio', nome: "Bráulio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 77 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 79 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 77 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 79 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1961 =====

  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 77 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 79 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1960 =====

  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 80 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fortaleza",
    jogadores: [
      { id: 'marcial', nome: "Marcial", posicoes: ["GOL"], forca: 76 },
      { id: 'mimi', nome: "Mimi", posicoes: ["GOL"], forca: 71 },
      { id: 'louro', nome: "Louro", posicoes: ["LD"], forca: 77 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["ZAG"], forca: 80 },
      { id: 'elzo', nome: "Elzo", posicoes: ["ZAG"], forca: 77 },
      { id: 'jorge-costa', nome: "Jorge Costa", posicoes: ["LE"], forca: 76 },
      { id: 'croinha', nome: "Croinha", posicoes: ["VOL"], forca: 79 },
      { id: 'lucinho', nome: "Lucinho", posicoes: ["MC"], forca: 78 },
      { id: 'mozart', nome: "Mozart", posicoes: ["MEI"], forca: 79 },
      { id: 'dude', nome: "Dude", posicoes: ["PD"], forca: 80 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 82 },
      { id: 'becece', nome: "Bececê", posicoes: ["ATA"], forca: 79 },
      { id: 'hamilton', nome: "Hamilton", posicoes: ["PE"], forca: 78 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 77 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 79 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1959 =====

  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 77 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 79 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 81 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  }

];
