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
      { id: 'agustin-rossi', nome: "Agustín Rossi", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-royal', nome: "Emerson Royal", posicoes: ["LD","MD"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG","LD"], forca: 85 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 85 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 84 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE","ME"], forca: 81 },
      { id: 'alex-sandro', nome: "Alex Sandro", posicoes: ["LE","ZAG"], forca: 80 },
      { id: 'erick-pulgar', nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'nicolas-de-la-cruz', nome: "Nicolás De La Cruz", posicoes: ["MEI","MC"], forca: 86 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 90 },
      { id: 'luiz-araujo', nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 82 },
      { id: 'samuel-lino', nome: "Samuel Lino", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 84 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 87 },
      { id: 'gonzalo-plata', nome: "Gonzalo Plata", posicoes: ["PD","PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Palmeiras",
    jogadores: [
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["GOL"], forca: 82 },
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 80 },
      { id: 'khellven', nome: "Khellven", posicoes: ["LD","MD"], forca: 78 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 86 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE","ME"], forca: 84 },
      { id: 'anibal-moreno', nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'emiliano-martinez', nome: "Emiliano Martínez", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'andreas-pereira', nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI","MC"], forca: 84 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MEI","PD"], forca: 82 },
      { id: 'felipe-anderson', nome: "Felipe Anderson", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'facundo-torres', nome: "Facundo Torres", posicoes: ["PD","PE"], forca: 82 },
      { id: 'vitor-roque', nome: "Vitor Roque", posicoes: ["ATA"], forca: 84 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 82 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["ATA","PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 85 },
      { id: 'leo-aragao', nome: "Léo Aragão", posicoes: ["GOL"], forca: 71 },
      { id: 'william', nome: "William", posicoes: ["LD","MD"], forca: 82 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 85 },
      { id: 'jonathan-jesus', nome: "Jonathan Jesus", posicoes: ["ZAG"], forca: 78 },
      { id: 'lucas-villalba', nome: "Lucas Villalba", posicoes: ["ZAG","LE"], forca: 79 },
      { id: 'kaiki', nome: "Kaiki", posicoes: ["LE"], forca: 77 },
      { id: 'lucas-romero', nome: "Lucas Romero", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'matheus-henrique', nome: "Matheus Henrique", posicoes: ["MC","VOL"], forca: 82 },
      { id: 'christian', nome: "Christian", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'matheus-pereira', nome: "Matheus Pereira", posicoes: ["MEI","MC"], forca: 88 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PE","PD"], forca: 80 },
      { id: 'wanderson', nome: "Wanderson", posicoes: ["PE","ATA"], forca: 79 },
      { id: 'kaio-jorge', nome: "Kaio Jorge", posicoes: ["ATA"], forca: 86 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Mirassol",
    jogadores: [
      { id: 'walter', nome: "Walter", posicoes: ["GOL"], forca: 80 },
      { id: 'alex-muralha', nome: "Alex Muralha", posicoes: ["GOL"], forca: 76 },
      { id: 'lucas-ramon', nome: "Lucas Ramon", posicoes: ["LD"], forca: 76 },
      { id: 'joao-victor', nome: "João Victor", posicoes: ["ZAG"], forca: 77 },
      { id: 'luiz-otavio', nome: "Luiz Otávio", posicoes: ["ZAG"], forca: 78 },
      { id: 'jemmes', nome: "Jemmes", posicoes: ["ZAG"], forca: 77 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 80 },
      { id: 'neto-moura', nome: "Neto Moura", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'jose-aldo', nome: "José Aldo", posicoes: ["VOL","MC"], forca: 77 },
      { id: 'danielzinho', nome: "Danielzinho", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["MEI"], forca: 78 },
      { id: 'negueba', nome: "Negueba", posicoes: ["PD","PE"], forca: 79 },
      { id: 'chico', nome: "Chico", posicoes: ["PE","ME"], forca: 78 },
      { id: 'edson-carioca', nome: "Edson Carioca", posicoes: ["PD","PE"], forca: 76 },
      { id: 'iury-castilho', nome: "Iury Castilho", posicoes: ["ATA"], forca: 79 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Fluminense",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { id: 'samuel-xavier', nome: "Samuel Xavier", posicoes: ["LD","MD"], forca: 78 },
      { id: 'thiago-silva', nome: "Thiago Silva", posicoes: ["ZAG"], forca: 87 },
      { id: 'ignacio', nome: "Ignácio", posicoes: ["ZAG"], forca: 79 },
      { id: 'juan-pablo-freytes', nome: "Juan Pablo Freytes", posicoes: ["ZAG","LE"], forca: 78 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 78 },
      { id: 'gabriel-fuentes', nome: "Gabriel Fuentes", posicoes: ["LE"], forca: 76 },
      { id: 'andre', nome: "André", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'martinelli', nome: "Martinelli", posicoes: ["MC","VOL"], forca: 80 },
      { id: 'hercules', nome: "Hércules", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI","MC"], forca: 84 },
      { id: 'jhon-arias', nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 87 },
      { id: 'agustin-canobbio', nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 80 },
      { id: 'keno', nome: "Keno", posicoes: ["PE","ATA"], forca: 79 },
      { id: 'german-cano', nome: "Germán Cano", posicoes: ["ATA"], forca: 85 },
      { id: 'john-kennedy', nome: "John Kennedy", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Botafogo",
    jogadores: [
      { id: 'john', nome: "John", posicoes: ["GOL"], forca: 82 },
      { id: 'gatito-fernandez', nome: "Gatito Fernández", posicoes: ["GOL"], forca: 73 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["LD","MD"], forca: 78 },
      { id: 'alexander-barboza', nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 81 },
      { id: 'bastos', nome: "Bastos", posicoes: ["ZAG"], forca: 80 },
      { id: 'adryelson', nome: "Adryelson", posicoes: ["ZAG"], forca: 80 },
      { id: 'alex-telles', nome: "Alex Telles", posicoes: ["LE"], forca: 82 },
      { id: 'cuiabano', nome: "Cuiabano", posicoes: ["LE","ME"], forca: 78 },
      { id: 'gregore', nome: "Gregore", posicoes: ["VOL"], forca: 80 },
      { id: 'marlon-freitas', nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'danilo-barbosa', nome: "Danilo Barbosa", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["MEI","PD"], forca: 82 },
      { id: 'matheus-martins', nome: "Matheus Martins", posicoes: ["PE","PD"], forca: 80 },
      { id: 'artur', nome: "Artur", posicoes: ["PD","ATA"], forca: 80 },
      { id: 'igor-jesus', nome: "Igor Jesus", posicoes: ["ATA"], forca: 81 },
      { id: 'arthur-cabral', nome: "Arthur Cabral", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2024 =====

  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Botafogo",
    jogadores: [
      { id: 'john', nome: "John", posicoes: ["GOL"], forca: 82 },
      { id: 'gatito-fernandez', nome: "Gatito Fernández", posicoes: ["GOL"], forca: 73 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["LD","MD"], forca: 78 },
      { id: 'alexander-barboza', nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 81 },
      { id: 'bastos', nome: "Bastos", posicoes: ["ZAG"], forca: 80 },
      { id: 'adryelson', nome: "Adryelson", posicoes: ["ZAG"], forca: 80 },
      { id: 'alex-telles', nome: "Alex Telles", posicoes: ["LE"], forca: 82 },
      { id: 'cuiabano', nome: "Cuiabano", posicoes: ["LE","ME"], forca: 78 },
      { id: 'gregore', nome: "Gregore", posicoes: ["VOL"], forca: 80 },
      { id: 'marlon-freitas', nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'thiago-almada', nome: "Thiago Almada", posicoes: ["MEI","MC"], forca: 87 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["PD","MEI"], forca: 82 },
      { id: 'luiz-henrique', nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 86 },
      { id: 'igor-jesus', nome: "Igor Jesus", posicoes: ["ATA"], forca: 81 },
      { id: 'junior-santos', nome: "Júnior Santos", posicoes: ["ATA","PE"], forca: 80 },
      { id: 'tiquinho-soares', nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 77 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 86 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 82 },
      { id: 'caio-paulista', nome: "Caio Paulista", posicoes: ["LE"], forca: 76 },
      { id: 'anibal-moreno', nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'richard-rios', nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 80 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 85 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MEI","PD"], forca: 80 },
      { id: 'estevao', nome: "Estêvão", posicoes: ["PD"], forca: 84 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 81 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PE"], forca: 80 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Flamengo",
    jogadores: [
      { id: 'agustin-rossi', nome: "Agustín Rossi", posicoes: ["GOL"], forca: 85 },
      { id: 'guillermo-varela', nome: "Guillermo Varela", posicoes: ["LD"], forca: 79 },
      { id: 'wesley', nome: "Wesley", posicoes: ["LD"], forca: 78 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 84 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 84 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 82 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE"], forca: 81 },
      { id: 'erick-pulgar', nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'allan', nome: "Allan", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'nicolas-de-la-cruz', nome: "Nicolás De La Cruz", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 89 },
      { id: 'luiz-araujo', nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 81 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 80 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 87 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Fortaleza",
    jogadores: [
      { id: 'joao-ricardo', nome: "João Ricardo", posicoes: ["GOL"], forca: 81 },
      { id: 'tinga', nome: "Tinga", posicoes: ["LD","MD"], forca: 79 },
      { id: 'emanuel-britez', nome: "Emanuel Brítez", posicoes: ["ZAG"], forca: 80 },
      { id: 'benjamin-kuscevic', nome: "Benjamín Kuscevic", posicoes: ["ZAG"], forca: 80 },
      { id: 'titi', nome: "Titi", posicoes: ["ZAG"], forca: 78 },
      { id: 'bruno-pacheco', nome: "Bruno Pacheco", posicoes: ["LE"], forca: 78 },
      { id: 'lucas-sasha', nome: "Lucas Sasha", posicoes: ["VOL"], forca: 78 },
      { id: 'ze-welison', nome: "Zé Welison", posicoes: ["VOL"], forca: 77 },
      { id: 'hercules', nome: "Hércules", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'tomas-pochettino', nome: "Tomás Pochettino", posicoes: ["MEI"], forca: 81 },
      { id: 'yago-pikachu', nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 81 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD","PE"], forca: 81 },
      { id: 'moises', nome: "Moisés", posicoes: ["PE","ATA"], forca: 80 },
      { id: 'breno-lopes', nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 79 },
      { id: 'juan-martin-lucero', nome: "Juan Martín Lucero", posicoes: ["ATA"], forca: 82 },
      { id: 'renato-kayzer', nome: "Renato Kayzer", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Internacional",
    jogadores: [
      { id: 'sergio-rochet', nome: "Sergio Rochet", posicoes: ["GOL"], forca: 82 },
      { id: 'fabricio-bustos', nome: "Fabricio Bustos", posicoes: ["LD"], forca: 78 },
      { id: 'vitao', nome: "Vitão", posicoes: ["ZAG"], forca: 80 },
      { id: 'gabriel-mercado', nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 78 },
      { id: 'robert-renan', nome: "Robert Renan", posicoes: ["ZAG"], forca: 78 },
      { id: 'alexandro-bernabei', nome: "Alexandro Bernabei", posicoes: ["LE"], forca: 80 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["MC"], forca: 79 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MEI","MC"], forca: 85 },
      { id: 'wesley', nome: "Wesley", posicoes: ["PE","PD"], forca: 81 },
      { id: 'wanderson', nome: "Wanderson", posicoes: ["PE","PD"], forca: 79 },
      { id: 'enner-valencia', nome: "Enner Valencia", posicoes: ["ATA"], forca: 84 },
      { id: 'rafael-borre', nome: "Rafael Borré", posicoes: ["ATA"], forca: 82 },
      { id: 'lucas-alario', nome: "Lucas Alario", posicoes: ["ATA"], forca: 78 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MC","MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "São Paulo",
    jogadores: [
      { id: 'rafael', nome: "Rafael", posicoes: ["GOL"], forca: 82 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["LD"], forca: 78 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { id: 'alan-franco', nome: "Alan Franco", posicoes: ["ZAG"], forca: 80 },
      { id: 'sabino', nome: "Sabino", posicoes: ["ZAG"], forca: 77 },
      { id: 'welington', nome: "Welington", posicoes: ["LE"], forca: 79 },
      { id: 'pablo-maia', nome: "Pablo Maia", posicoes: ["VOL"], forca: 81 },
      { id: 'alisson', nome: "Alisson", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'luiz-gustavo', nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'damian-bobadilla', nome: "Damián Bobadilla", posicoes: ["MC"], forca: 78 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'luciano', nome: "Luciano", posicoes: ["ATA","MEI"], forca: 82 },
      { id: 'ferreira', nome: "Ferreira", posicoes: ["PE","PD"], forca: 80 },
      { id: 'wellington-rato', nome: "Wellington Rato", posicoes: ["PD"], forca: 78 },
      { id: 'calleri', nome: "Calleri", posicoes: ["ATA"], forca: 84 },
      { id: 'andre-silva', nome: "André Silva", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 2023 =====

  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 77 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 75 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 86 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 82 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'gabriel-menino', nome: "Gabriel Menino", posicoes: ["VOL","MC"], forca: 78 },
      { id: 'richard-rios', nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 79 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 84 },
      { id: 'artur', nome: "Artur", posicoes: ["PD","PE"], forca: 79 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 84 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PE"], forca: 81 },
      { id: 'endrick', nome: "Endrick", posicoes: ["ATA"], forca: 82 },
      { id: 'breno-lopes', nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 77 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Grêmio",
    jogadores: [
      { id: 'gabriel-grando', nome: "Gabriel Grando", posicoes: ["GOL"], forca: 78 },
      { id: 'joao-pedro', nome: "João Pedro", posicoes: ["LD"], forca: 79 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 80 },
      { id: 'fabio', nome: "Fábio", posicoes: ["LD"], forca: 77 },
      { id: 'mathias-villasanti', nome: "Mathías Villasanti", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'pepe', nome: "Pepê", posicoes: ["MC"], forca: 79 },
      { id: 'bitello', nome: "Bitello", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'franco-cristaldo', nome: "Franco Cristaldo", posicoes: ["MEI"], forca: 81 },
      { id: 'ferreira', nome: "Ferreira", posicoes: ["PD","PE"], forca: 80 },
      { id: 'everton-galdino', nome: "Everton Galdino", posicoes: ["PE"], forca: 77 },
      { id: 'luis-suarez', nome: "Luis Suárez", posicoes: ["ATA"], forca: 91 },
      { id: 'joao-pedro-galvao', nome: "João Pedro Galvão", posicoes: ["ATA"], forca: 77 },
      { id: 'cuiabano', nome: "Cuiabano", posicoes: ["PE","LE"], forca: 76 },
      { id: 'carballo', nome: "Carballo", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 82 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 77 },
      { id: 'renzo-saravia', nome: "Renzo Saravia", posicoes: ["LD"], forca: 77 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 80 },
      { id: 'mauricio-lemos', nome: "Mauricio Lemos", posicoes: ["ZAG"], forca: 80 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 82 },
      { id: 'rodrigo-battaglia', nome: "Rodrigo Battaglia", posicoes: ["VOL"], forca: 80 },
      { id: 'otavio', nome: "Otávio", posicoes: ["VOL"], forca: 79 },
      { id: 'matias-zaracho', nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["MC"], forca: 79 },
      { id: 'igor-gomes', nome: "Igor Gomes", posicoes: ["MEI"], forca: 78 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["PD","ATA"], forca: 87 },
      { id: 'hulk', nome: "Hulk", posicoes: ["ATA","PD"], forca: 87 },
      { id: 'cristian-pavon', nome: "Cristian Pavón", posicoes: ["PD","PE"], forca: 79 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 78 },
      { id: 'alan-kardec', nome: "Alan Kardec", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Flamengo",
    jogadores: [
      { id: 'matheus-cunha', nome: "Matheus Cunha", posicoes: ["GOL"], forca: 79 },
      { id: 'santos', nome: "Santos", posicoes: ["GOL"], forca: 78 },
      { id: 'guillermo-varela', nome: "Guillermo Varela", posicoes: ["LD"], forca: 78 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 82 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG"], forca: 81 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 81 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE"], forca: 82 },
      { id: 'erick-pulgar', nome: "Erick Pulgar", posicoes: ["VOL"], forca: 81 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 80 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC"], forca: 82 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE"], forca: 85 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 80 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Botafogo",
    jogadores: [
      { id: 'lucas-perri', nome: "Lucas Perri", posicoes: ["GOL"], forca: 84 },
      { id: 'leonel-di-placido', nome: "Leonel Di Plácido", posicoes: ["LD"], forca: 77 },
      { id: 'adryelson', nome: "Adryelson", posicoes: ["ZAG"], forca: 82 },
      { id: 'victor-cuesta', nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcal', nome: "Marçal", posicoes: ["LE"], forca: 79 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'marlon-freitas', nome: "Marlon Freitas", posicoes: ["MC"], forca: 80 },
      { id: 'gabriel-pires', nome: "Gabriel Pires", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MEI"], forca: 82 },
      { id: 'lucas-fernandes', nome: "Lucas Fernandes", posicoes: ["MEI"], forca: 78 },
      { id: 'victor-sa', nome: "Victor Sá", posicoes: ["PE"], forca: 79 },
      { id: 'junior-santos', nome: "Júnior Santos", posicoes: ["PD","ATA"], forca: 80 },
      { id: 'tiquinho-soares', nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 87 },
      { id: 'diego-costa', nome: "Diego Costa", posicoes: ["ATA"], forca: 79 },
      { id: 'segovia', nome: "Segovia", posicoes: ["PD"], forca: 75 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Red Bull Bragantino",
    jogadores: [
      { id: 'cleiton', nome: "Cleiton", posicoes: ["GOL"], forca: 80 },
      { id: 'aderlan', nome: "Aderlan", posicoes: ["LD"], forca: 77 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 82 },
      { id: 'natan', nome: "Natan", posicoes: ["ZAG"], forca: 80 },
      { id: 'juninho-capixaba', nome: "Juninho Capixaba", posicoes: ["LE"], forca: 80 },
      { id: 'lucas-evangelista', nome: "Lucas Evangelista", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'matheus-fernandes', nome: "Matheus Fernandes", posicoes: ["VOL"], forca: 78 },
      { id: 'jadsom', nome: "Jadsom", posicoes: ["MC"], forca: 78 },
      { id: 'eric-ramires', nome: "Eric Ramires", posicoes: ["MC"], forca: 78 },
      { id: 'helinho', nome: "Helinho", posicoes: ["PD"], forca: 81 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PE"], forca: 79 },
      { id: 'sorriso', nome: "Sorriso", posicoes: ["PE"], forca: 77 },
      { id: 'eduardo-sasha', nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 82 },
      { id: 'thiago-borbas', nome: "Thiago Borbas", posicoes: ["ATA"], forca: 79 },
      { id: 'alerrandro', nome: "Alerrandro", posicoes: ["ATA"], forca: 78 },
      { id: 'talisson', nome: "Talisson", posicoes: ["PD"], forca: 76 }
    ]
  },

  // ===== Edição 2022 =====

  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 86 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 81 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 87 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 80 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 84 },
      { id: 'danilo', nome: "Danilo", posicoes: ["VOL"], forca: 85 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'gabriel-menino', nome: "Gabriel Menino", posicoes: ["MC","LD"], forca: 79 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 87 },
      { id: 'gustavo-scarpa', nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 86 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 85 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PD"], forca: 85 },
      { id: 'rafael-navarro', nome: "Rafael Navarro", posicoes: ["ATA"], forca: 78 },
      { id: 'jose-lopez', nome: "José López", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Internacional",
    jogadores: [
      { id: 'daniel', nome: "Daniel", posicoes: ["GOL"], forca: 80 },
      { id: 'fabricio-bustos', nome: "Fabricio Bustos", posicoes: ["LD"], forca: 79 },
      { id: 'gabriel-mercado', nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 79 },
      { id: 'vitao', nome: "Vitão", posicoes: ["ZAG"], forca: 79 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 78 },
      { id: 'moises', nome: "Moisés", posicoes: ["LE"], forca: 76 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'johnny', nome: "Johnny", posicoes: ["VOL"], forca: 79 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'carlos-de-pena', nome: "Carlos de Pena", posicoes: ["MEI","PE"], forca: 80 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["MEI"], forca: 80 },
      { id: 'wanderson', nome: "Wanderson", posicoes: ["PE","PD"], forca: 80 },
      { id: 'pedro-henrique', nome: "Pedro Henrique", posicoes: ["PD"], forca: 81 },
      { id: 'alemao', nome: "Alemão", posicoes: ["ATA"], forca: 79 },
      { id: 'taison', nome: "Taison", posicoes: ["PE","MEI"], forca: 80 },
      { id: 'liziero', nome: "Liziero", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Fluminense",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 82 },
      { id: 'samuel-xavier', nome: "Samuel Xavier", posicoes: ["LD"], forca: 78 },
      { id: 'nino', nome: "Nino", posicoes: ["ZAG"], forca: 82 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 80 },
      { id: 'david-braz', nome: "David Braz", posicoes: ["ZAG"], forca: 77 },
      { id: 'caio-paulista', nome: "Caio Paulista", posicoes: ["LE","ME"], forca: 78 },
      { id: 'andre', nome: "André", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'martinelli', nome: "Martinelli", posicoes: ["MC"], forca: 78 },
      { id: 'nonato', nome: "Nonato", posicoes: ["MC"], forca: 78 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 82 },
      { id: 'jhon-arias', nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 84 },
      { id: 'luiz-henrique', nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 82 },
      { id: 'german-cano', nome: "Germán Cano", posicoes: ["ATA"], forca: 89 },
      { id: 'willian-bigode', nome: "Willian Bigode", posicoes: ["ATA"], forca: 78 },
      { id: 'yago-felipe', nome: "Yago Felipe", posicoes: ["MC"], forca: 78 },
      { id: 'nathan', nome: "Nathan", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 86 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 81 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { id: 'lucas-piton', nome: "Lucas Piton", posicoes: ["LE"], forca: 78 },
      { id: 'du-queiroz', nome: "Du Queiroz", posicoes: ["VOL"], forca: 79 },
      { id: 'maycon', nome: "Maycon", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'giuliano', nome: "Giuliano", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 85 },
      { id: 'willian', nome: "Willian", posicoes: ["PE","PD"], forca: 82 },
      { id: 'yuri-alberto', nome: "Yuri Alberto", posicoes: ["ATA"], forca: 82 },
      { id: 'adson', nome: "Adson", posicoes: ["PD"], forca: 78 },
      { id: 'gustavo-mosquito', nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 78 },
      { id: 'fausto-vera', nome: "Fausto Vera", posicoes: ["VOL"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Flamengo",
    jogadores: [
      { id: 'santos', nome: "Santos", posicoes: ["GOL"], forca: 85 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 81 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { id: 'ayrton-lucas', nome: "Ayrton Lucas", posicoes: ["LE"], forca: 80 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG"], forca: 85 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 82 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 82 },
      { id: 'joao-gomes', nome: "João Gomes", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'arturo-vidal', nome: "Arturo Vidal", posicoes: ["MC"], forca: 86 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 88 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 90 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 86 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PD","PE"], forca: 87 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 89 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 89 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'bento', nome: "Bento", posicoes: ["GOL"], forca: 84 },
      { id: 'khellven', nome: "Khellven", posicoes: ["LD"], forca: 78 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { id: 'pedro-henrique', nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 78 },
      { id: 'abner-vinicius', nome: "Abner Vinícius", posicoes: ["LE"], forca: 79 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 85 },
      { id: 'hugo-moura', nome: "Hugo Moura", posicoes: ["VOL"], forca: 77 },
      { id: 'alex-santana', nome: "Alex Santana", posicoes: ["MC"], forca: 77 },
      { id: 'david-terans', nome: "David Terans", posicoes: ["MEI"], forca: 78 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI","MD"], forca: 77 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD"], forca: 78 },
      { id: 'agustin-canobbio', nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 78 },
      { id: 'vitor-roque', nome: "Vitor Roque", posicoes: ["ATA"], forca: 81 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 77 },
      { id: 'matheus-felipe', nome: "Matheus Felipe", posicoes: ["ZAG"], forca: 73 },
      { id: 'leo-cittadini', nome: "Léo Cittadini", posicoes: ["MC"], forca: 76 }
    ]
  },

  // ===== Edição 2021 =====

  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 85 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 80 },
      { id: 'guga', nome: "Guga", posicoes: ["LD"], forca: 77 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { id: 'nathan-silva', nome: "Nathan Silva", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior-alonso', nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 80 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["VOL"], forca: 81 },
      { id: 'allan', nome: "Allan", posicoes: ["VOL"], forca: 79 },
      { id: 'matias-zaracho', nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'nacho-fernandez', nome: "Nacho Fernández", posicoes: ["MEI"], forca: 85 },
      { id: 'hulk', nome: "Hulk", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'keno', nome: "Keno", posicoes: ["PE"], forca: 81 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA","PD"], forca: 80 },
      { id: 'diego-costa', nome: "Diego Costa", posicoes: ["ATA"], forca: 82 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { id: 'mauricio-isla', nome: "Maurício Isla", posicoes: ["LD"], forca: 80 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 84 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 82 },
      { id: 'david-luiz', nome: "David Luiz", posicoes: ["ZAG"], forca: 85 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 81 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 82 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 81 },
      { id: 'andreas-pereira', nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 87 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 87 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 89 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 76 },
      { id: 'hugo-souza', nome: "Hugo Souza", posicoes: ["GOL"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 86 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 81 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 77 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 87 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 80 },
      { id: 'joaquin-piquerez', nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 82 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL","ZAG"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["VOL"], forca: 82 },
      { id: 'ze-rafael', nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'gabriel-menino', nome: "Gabriel Menino", posicoes: ["MC"], forca: 78 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 86 },
      { id: 'gustavo-scarpa', nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 84 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 85 },
      { id: 'rony', nome: "Rony", posicoes: ["ATA","PD"], forca: 84 },
      { id: 'deyverson', nome: "Deyverson", posicoes: ["ATA"], forca: 78 },
      { id: 'breno-lopes', nome: "Breno Lopes", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Fortaleza",
    jogadores: [
      { id: 'felipe-alves', nome: "Felipe Alves", posicoes: ["GOL"], forca: 80 },
      { id: 'tinga', nome: "Tinga", posicoes: ["LD","MD"], forca: 79 },
      { id: 'marcelo-benevenuto', nome: "Marcelo Benevenuto", posicoes: ["ZAG"], forca: 80 },
      { id: 'titi', nome: "Titi", posicoes: ["ZAG"], forca: 78 },
      { id: 'bruno-melo', nome: "Bruno Melo", posicoes: ["LE"], forca: 77 },
      { id: 'lucas-crispim', nome: "Lucas Crispim", posicoes: ["ME","LE"], forca: 79 },
      { id: 'felipe', nome: "Felipe", posicoes: ["VOL"], forca: 78 },
      { id: 'ronald', nome: "Ronald", posicoes: ["VOL"], forca: 77 },
      { id: 'ederson', nome: "Éderson", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'matheus-vargas', nome: "Matheus Vargas", posicoes: ["MEI"], forca: 78 },
      { id: 'yago-pikachu', nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 82 },
      { id: 'david', nome: "David", posicoes: ["PE"], forca: 80 },
      { id: 'robson', nome: "Robson", posicoes: ["ATA"], forca: 80 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 78 },
      { id: 'romarinho', nome: "Romarinho", posicoes: ["PD"], forca: 77 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 84 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { id: 'joao-victor', nome: "João Victor", posicoes: ["ZAG"], forca: 80 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { id: 'lucas-piton', nome: "Lucas Piton", posicoes: ["LE"], forca: 77 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["VOL"], forca: 78 },
      { id: 'cantillo', nome: "Cantillo", posicoes: ["MC"], forca: 78 },
      { id: 'du-queiroz', nome: "Du Queiroz", posicoes: ["MC"], forca: 77 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MEI","MC"], forca: 85 },
      { id: 'giuliano', nome: "Giuliano", posicoes: ["MEI","MC"], forca: 81 },
      { id: 'willian', nome: "Willian", posicoes: ["PE"], forca: 84 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 85 },
      { id: 'gustavo-mosquito', nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 80 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 78 },
      { id: 'gabriel-pereira', nome: "Gabriel Pereira", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Red Bull Bragantino",
    jogadores: [
      { id: 'cleiton', nome: "Cleiton", posicoes: ["GOL"], forca: 80 },
      { id: 'aderlan', nome: "Aderlan", posicoes: ["LD"], forca: 77 },
      { id: 'fabricio-bruno', nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 81 },
      { id: 'leo-ortiz', nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 82 },
      { id: 'luan-candido', nome: "Luan Cândido", posicoes: ["LE"], forca: 79 },
      { id: 'edimar', nome: "Edimar", posicoes: ["LE"], forca: 76 },
      { id: 'raul', nome: "Raul", posicoes: ["VOL"], forca: 79 },
      { id: 'jadsom', nome: "Jadsom", posicoes: ["VOL"], forca: 78 },
      { id: 'eric-ramires', nome: "Eric Ramires", posicoes: ["MC"], forca: 78 },
      { id: 'lucas-evangelista', nome: "Lucas Evangelista", posicoes: ["MC"], forca: 80 },
      { id: 'claudinho', nome: "Claudinho", posicoes: ["MEI"], forca: 86 },
      { id: 'artur', nome: "Artur", posicoes: ["PD"], forca: 85 },
      { id: 'helinho', nome: "Helinho", posicoes: ["PD"], forca: 80 },
      { id: 'ytalo', nome: "Ytalo", posicoes: ["ATA"], forca: 82 },
      { id: 'alerrandro', nome: "Alerrandro", posicoes: ["ATA"], forca: 78 },
      { id: 'jan-hurtado', nome: "Jan Hurtado", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2020 =====

  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 84 },
      { id: 'mauricio-isla', nome: "Maurício Isla", posicoes: ["LD"], forca: 80 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 85 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 79 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 79 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 85 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 84 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC"], forca: 87 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 87 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 87 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 88 },
      { id: 'pedro', nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD","PE"], forca: 79 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Internacional",
    jogadores: [
      { id: 'marcelo-lomba', nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 81 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { id: 'rodrigo-moledo', nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 80 },
      { id: 'victor-cuesta', nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 82 },
      { id: 'moises', nome: "Moisés", posicoes: ["LE"], forca: 76 },
      { id: 'rodrigo-dourado', nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 80 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["MC"], forca: 85 },
      { id: 'patrick', nome: "Patrick", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 81 },
      { id: 'bruno-praxedes', nome: "Bruno Praxedes", posicoes: ["MEI"], forca: 78 },
      { id: 'thiago-galhardo', nome: "Thiago Galhardo", posicoes: ["MEI","ATA"], forca: 86 },
      { id: 'yuri-alberto', nome: "Yuri Alberto", posicoes: ["ATA"], forca: 79 },
      { id: 'abel-hernandez', nome: "Abel Hernández", posicoes: ["ATA"], forca: 78 },
      { id: 'marcos-guilherme', nome: "Marcos Guilherme", posicoes: ["PE"], forca: 77 },
      { id: 'peglow', nome: "Peglow", posicoes: ["PD"], forca: 75 },
      { id: 'nonato', nome: "Nonato", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 81 },
      { id: 'guga', nome: "Guga", posicoes: ["LD"], forca: 78 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 80 },
      { id: 'junior-alonso', nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 81 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 82 },
      { id: 'allan', nome: "Allan", posicoes: ["VOL"], forca: 79 },
      { id: 'jair', nome: "Jair", posicoes: ["VOL"], forca: 79 },
      { id: 'alan-franco', nome: "Alan Franco", posicoes: ["MC"], forca: 78 },
      { id: 'nathan', nome: "Nathan", posicoes: ["MEI"], forca: 80 },
      { id: 'hyoran', nome: "Hyoran", posicoes: ["MEI"], forca: 79 },
      { id: 'jefferson-savarino', nome: "Jefferson Savarino", posicoes: ["PD"], forca: 82 },
      { id: 'keno', nome: "Keno", posicoes: ["PE"], forca: 85 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 80 },
      { id: 'marrony', nome: "Marrony", posicoes: ["ATA"], forca: 78 },
      { id: 'eduardo-sasha', nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 79 },
      { id: 'igor-rabello', nome: "Igor Rabello", posicoes: ["ZAG"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "São Paulo",
    jogadores: [
      { id: 'tiago-volpi', nome: "Tiago Volpi", posicoes: ["GOL"], forca: 82 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD"], forca: 80 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 80 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 82 },
      { id: 'luan', nome: "Luan", posicoes: ["VOL"], forca: 80 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 79 },
      { id: 'daniel-alves', nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 84 },
      { id: 'gabriel-sara', nome: "Gabriel Sara", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'igor-gomes', nome: "Igor Gomes", posicoes: ["MEI"], forca: 80 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MEI"], forca: 79 },
      { id: 'luciano', nome: "Luciano", posicoes: ["ATA","MEI"], forca: 85 },
      { id: 'brenner', nome: "Brenner", posicoes: ["ATA"], forca: 85 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 78 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI"], forca: 78 },
      { id: 'igor-vinicius', nome: "Igor Vinícius", posicoes: ["LD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Fluminense",
    jogadores: [
      { id: 'muriel', nome: "Muriel", posicoes: ["GOL"], forca: 78 },
      { id: 'calegari', nome: "Calegari", posicoes: ["LD"], forca: 77 },
      { id: 'nino', nome: "Nino", posicoes: ["ZAG"], forca: 81 },
      { id: 'luccas-claro', nome: "Luccas Claro", posicoes: ["ZAG"], forca: 81 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 77 },
      { id: 'yuri', nome: "Yuri", posicoes: ["VOL"], forca: 77 },
      { id: 'dodi', nome: "Dodi", posicoes: ["VOL"], forca: 79 },
      { id: 'hudson', nome: "Hudson", posicoes: ["MC"], forca: 78 },
      { id: 'nene', nome: "Nenê", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 80 },
      { id: 'marcos-paulo', nome: "Marcos Paulo", posicoes: ["PE"], forca: 79 },
      { id: 'wellington-silva', nome: "Wellington Silva", posicoes: ["PE"], forca: 78 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 82 },
      { id: 'evanilson', nome: "Evanilson", posicoes: ["ATA"], forca: 81 },
      { id: 'luiz-henrique', nome: "Luiz Henrique", posicoes: ["PD","PE"], forca: 78 },
      { id: 'caio-paulista', nome: "Caio Paulista", posicoes: ["ME","ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Grêmio",
    jogadores: [
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["GOL"], forca: 80 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 79 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 85 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { id: 'bruno-cortez', nome: "Bruno Cortez", posicoes: ["LE"], forca: 78 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 78 },
      { id: 'matheus-henrique', nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 81 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL"], forca: 79 },
      { id: 'jean-pyerre', nome: "Jean Pyerre", posicoes: ["MEI"], forca: 81 },
      { id: 'pepe', nome: "Pepê", posicoes: ["PE"], forca: 84 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 78 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["ATA"], forca: 84 },
      { id: 'ferreira', nome: "Ferreira", posicoes: ["PE","PD"], forca: 78 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 86 },
      { id: 'darlan', nome: "Darlan", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 2019 =====

  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 85 },
      { id: 'rafinha', nome: "Rafinha", posicoes: ["LD"], forca: 82 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 84 },
      { id: 'pablo-mari', nome: "Pablo Marí", posicoes: ["ZAG"], forca: 80 },
      { id: 'filipe-luis', nome: "Filipe Luís", posicoes: ["LE"], forca: 85 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL"], forca: 81 },
      { id: 'gerson', nome: "Gerson", posicoes: ["MC"], forca: 85 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 86 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 91 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 93 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD","PE"], forca: 78 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["ATA"], forca: 71 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 76 },
      { id: 'cuellar', nome: "Cuéllar", posicoes: ["VOL"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Santos",
    jogadores: [
      { id: 'everson', nome: "Everson", posicoes: ["GOL"], forca: 82 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 80 },
      { id: 'lucas-verissimo', nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 82 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 81 },
      { id: 'jorge', nome: "Jorge", posicoes: ["LE"], forca: 84 },
      { id: 'felipe-jonatan', nome: "Felipe Jonatan", posicoes: ["LE"], forca: 79 },
      { id: 'alison', nome: "Alison", posicoes: ["VOL"], forca: 79 },
      { id: 'diego-pituca', nome: "Diego Pituca", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'carlos-sanchez', nome: "Carlos Sánchez", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'jean-mota', nome: "Jean Mota", posicoes: ["MEI","MC"], forca: 81 },
      { id: 'soteldo', nome: "Soteldo", posicoes: ["PE","PD"], forca: 85 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD","ATA"], forca: 82 },
      { id: 'eduardo-sasha', nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 82 },
      { id: 'derlis-gonzalez', nome: "Derlis González", posicoes: ["PD"], forca: 79 },
      { id: 'fernando-uribe', nome: "Fernando Uribe", posicoes: ["ATA"], forca: 77 },
      { id: 'tailson', nome: "Tailson", posicoes: ["PE"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 85 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { id: 'gustavo-gomez', nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 85 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 80 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 79 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 78 },
      { id: 'victor-luis', nome: "Victor Luis", posicoes: ["LE"], forca: 77 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL"], forca: 82 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["MC"], forca: 82 },
      { id: 'gustavo-scarpa', nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 81 },
      { id: 'raphael-veiga', nome: "Raphael Veiga", posicoes: ["MEI"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 87 },
      { id: 'deyverson', nome: "Deyverson", posicoes: ["ATA"], forca: 79 },
      { id: 'miguel-borja', nome: "Miguel Borja", posicoes: ["ATA"], forca: 78 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA","PD"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Grêmio",
    jogadores: [
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 78 },
      { id: 'leonardo-gomes', nome: "Leonardo Gomes", posicoes: ["LD"], forca: 77 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 85 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { id: 'cortez', nome: "Cortez", posicoes: ["LE"], forca: 79 },
      { id: 'maicon', nome: "Maicon", posicoes: ["VOL"], forca: 82 },
      { id: 'matheus-henrique', nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'michel', nome: "Michel", posicoes: ["MC"], forca: 76 },
      { id: 'jean-pyerre', nome: "Jean Pyerre", posicoes: ["MEI"], forca: 78 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 87 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 78 },
      { id: 'andre', nome: "André", posicoes: ["ATA"], forca: 75 },
      { id: 'pepe', nome: "Pepê", posicoes: ["PD","PE"], forca: 76 },
      { id: 'bressan', nome: "Bressan", posicoes: ["ZAG"], forca: 76 },
      { id: 'thaciano', nome: "Thaciano", posicoes: ["MEI"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'santos', nome: "Santos", posicoes: ["GOL"], forca: 84 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 79 },
      { id: 'madson', nome: "Madson", posicoes: ["LD"], forca: 77 },
      { id: 'leo-pereira', nome: "Léo Pereira", posicoes: ["ZAG"], forca: 82 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcio-azevedo', nome: "Márcio Azevedo", posicoes: ["LE"], forca: 77 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 79 },
      { id: 'bruno-guimaraes', nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 86 },
      { id: 'lucho-gonzalez', nome: "Lucho González", posicoes: ["MC"], forca: 79 },
      { id: 'leo-cittadini', nome: "Léo Cittadini", posicoes: ["MEI"], forca: 78 },
      { id: 'nikao', nome: "Nikão", posicoes: ["PD","MEI"], forca: 82 },
      { id: 'marcelo-cirino', nome: "Marcelo Cirino", posicoes: ["PD","ATA"], forca: 80 },
      { id: 'rony', nome: "Rony", posicoes: ["PE","ATA"], forca: 84 },
      { id: 'marco-ruben', nome: "Marco Ruben", posicoes: ["ATA"], forca: 80 },
      { id: 'camacho', nome: "Camacho", posicoes: ["MC"], forca: 77 },
      { id: 'adriano', nome: "Adriano", posicoes: ["LE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "São Paulo",
    jogadores: [
      { id: 'tiago-volpi', nome: "Tiago Volpi", posicoes: ["GOL"], forca: 82 },
      { id: 'juanfran', nome: "Juanfran", posicoes: ["LD"], forca: 80 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 80 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 81 },
      { id: 'liziero', nome: "Liziero", posicoes: ["VOL"], forca: 78 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 79 },
      { id: 'daniel-alves', nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 84 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MEI"], forca: 80 },
      { id: 'igor-gomes', nome: "Igor Gomes", posicoes: ["MEI"], forca: 79 },
      { id: 'antony', nome: "Antony", posicoes: ["PD"], forca: 82 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 79 },
      { id: 'alexandre-pato', nome: "Alexandre Pato", posicoes: ["ATA"], forca: 80 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI"], forca: 78 },
      { id: 'everton', nome: "Everton", posicoes: ["PE"], forca: 78 },
      { id: 'toro', nome: "Toró", posicoes: ["PD"], forca: 75 }
    ]
  },

  // ===== Edição 2018 =====

  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Palmeiras",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 77 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 78 },
      { id: 'luan', nome: "Luan", posicoes: ["ZAG"], forca: 79 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 76 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL"], forca: 81 },
      { id: 'thiago-santos', nome: "Thiago Santos", posicoes: ["VOL"], forca: 76 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["MC"], forca: 77 },
      { id: 'moises', nome: "Moisés", posicoes: ["MC","MEI"], forca: 77 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 85 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA","PD"], forca: 80 },
      { id: 'miguel-borja', nome: "Miguel Borja", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 77 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 79 },
      { id: 'leo-duarte', nome: "Léo Duarte", posicoes: ["ZAG"], forca: 79 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 78 },
      { id: 'miguel-trauco', nome: "Miguel Trauco", posicoes: ["LE"], forca: 77 },
      { id: 'cuellar', nome: "Cuéllar", posicoes: ["VOL"], forca: 82 },
      { id: 'lucas-paqueta', nome: "Lucas Paquetá", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 84 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 84 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PD","PE"], forca: 80 },
      { id: 'marlos-moreno', nome: "Marlos Moreno", posicoes: ["PE"], forca: 77 },
      { id: 'henrique-dourado', nome: "Henrique Dourado", posicoes: ["ATA"], forca: 79 },
      { id: 'fernando-uribe', nome: "Fernando Uribe", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Internacional",
    jogadores: [
      { id: 'marcelo-lomba', nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 82 },
      { id: 'danilo-fernandes', nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 77 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LD"], forca: 78 },
      { id: 'fabiano', nome: "Fabiano", posicoes: ["LD"], forca: 76 },
      { id: 'rodrigo-moledo', nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 81 },
      { id: 'victor-cuesta', nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 82 },
      { id: 'iago', nome: "Iago", posicoes: ["LE"], forca: 79 },
      { id: 'rodrigo-dourado', nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 84 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["MC"], forca: 84 },
      { id: 'patrick', nome: "Patrick", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 82 },
      { id: 'nico-lopez', nome: "Nico López", posicoes: ["PD","PE"], forca: 82 },
      { id: 'william-pottker', nome: "William Pottker", posicoes: ["PD"], forca: 79 },
      { id: 'leandro-damiao', nome: "Leandro Damião", posicoes: ["ATA"], forca: 81 },
      { id: 'rossi', nome: "Rossi", posicoes: ["PD","PE"], forca: 77 },
      { id: 'jonatan-alvez', nome: "Jonatan Álvez", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 82 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 76 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 84 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-cortez', nome: "Bruno Cortez", posicoes: ["LE"], forca: 77 },
      { id: 'maicon', nome: "Maicon", posicoes: ["VOL"], forca: 80 },
      { id: 'michel', nome: "Michel", posicoes: ["VOL"], forca: 75 },
      { id: 'jailson', nome: "Jailson", posicoes: ["VOL"], forca: 75 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["MC","MD"], forca: 77 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'everton', nome: "Everton", posicoes: ["PE","ATA"], forca: 82 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 76 },
      { id: 'andre', nome: "André", posicoes: ["ATA"], forca: 76 },
      { id: 'jael', nome: "Jael", posicoes: ["ATA"], forca: 73 },
      { id: 'bressan', nome: "Bressan", posicoes: ["ZAG"], forca: 75 },
      { id: 'thaciano', nome: "Thaciano", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "São Paulo",
    jogadores: [
      { id: 'sidao', nome: "Sidão", posicoes: ["GOL"], forca: 78 },
      { id: 'jean', nome: "Jean", posicoes: ["GOL"], forca: 76 },
      { id: 'bruno-peres', nome: "Bruno Peres", posicoes: ["LD"], forca: 78 },
      { id: 'eder-militao', nome: "Éder Militão", posicoes: ["ZAG"], forca: 82 },
      { id: 'arboleda', nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-alves', nome: "Bruno Alves", posicoes: ["ZAG"], forca: 79 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 81 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 80 },
      { id: 'jucilei', nome: "Jucilei", posicoes: ["VOL"], forca: 79 },
      { id: 'liziero', nome: "Liziero", posicoes: ["MC"], forca: 78 },
      { id: 'nene', nome: "Nenê", posicoes: ["MEI"], forca: 84 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["ATA","MEI"], forca: 81 },
      { id: 'everton', nome: "Everton", posicoes: ["PE"], forca: 81 },
      { id: 'joao-rojas', nome: "Joao Rojas", posicoes: ["PD"], forca: 80 },
      { id: 'santiago-trellez', nome: "Santiago Tréllez", posicoes: ["ATA"], forca: 76 },
      { id: 'brenner', nome: "Brenner", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { id: 'patric', nome: "Patric", posicoes: ["LD"], forca: 77 },
      { id: 'emerson', nome: "Emerson", posicoes: ["LD"], forca: 78 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 80 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 80 },
      { id: 'adilson', nome: "Adilson", posicoes: ["VOL"], forca: 79 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 80 },
      { id: 'cazares', nome: "Cazares", posicoes: ["MEI"], forca: 82 },
      { id: 'luan', nome: "Luan", posicoes: ["PD"], forca: 80 },
      { id: 'chara', nome: "Chará", posicoes: ["PE"], forca: 79 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 84 },
      { id: 'tomas-andrade', nome: "Tomás Andrade", posicoes: ["MEI"], forca: 76 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PD","PE"], forca: 82 },
      { id: 'otero', nome: "Otero", posicoes: ["MEI","PE"], forca: 79 },
      { id: 'alerrandro', nome: "Alerrandro", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2017 =====

  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 86 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 84 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ZAG"], forca: 81 },
      { id: 'pedro-henrique', nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 77 },
      { id: 'guilherme-arana', nome: "Guilherme Arana", posicoes: ["LE"], forca: 84 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["VOL"], forca: 81 },
      { id: 'maycon', nome: "Maycon", posicoes: ["MC"], forca: 81 },
      { id: 'rodriguinho', nome: "Rodriguinho", posicoes: ["MEI"], forca: 85 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 85 },
      { id: 'angel-romero', nome: "Ángel Romero", posicoes: ["PD"], forca: 82 },
      { id: 'clayson', nome: "Clayson", posicoes: ["PE"], forca: 79 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 88 },
      { id: 'kazim', nome: "Kazim", posicoes: ["ATA"], forca: 75 },
      { id: 'marquinhos-gabriel', nome: "Marquinhos Gabriel", posicoes: ["MEI"], forca: 78 },
      { id: 'camacho', nome: "Camacho", posicoes: ["MC"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Palmeiras",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { id: 'jailson', nome: "Jailson", posicoes: ["GOL"], forca: 80 },
      { id: 'jean', nome: "Jean", posicoes: ["LD"], forca: 79 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { id: 'yerry-mina', nome: "Yerry Mina", posicoes: ["ZAG"], forca: 85 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 79 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 77 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 78 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 82 },
      { id: 'felipe-melo', nome: "Felipe Melo", posicoes: ["VOL"], forca: 82 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 80 },
      { id: 'moises', nome: "Moisés", posicoes: ["MC","MEI"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 86 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA","PD"], forca: 81 },
      { id: 'miguel-borja', nome: "Miguel Borja", posicoes: ["ATA"], forca: 80 },
      { id: 'keno', nome: "Keno", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Santos",
    jogadores: [
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["GOL"], forca: 85 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 81 },
      { id: 'lucas-verissimo', nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 80 },
      { id: 'david-braz', nome: "David Braz", posicoes: ["ZAG"], forca: 79 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 79 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'renato', nome: "Renato", posicoes: ["VOL"], forca: 80 },
      { id: 'alison', nome: "Alison", posicoes: ["VOL"], forca: 78 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 81 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 85 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["PE"], forca: 85 },
      { id: 'copete', nome: "Copete", posicoes: ["PE"], forca: 79 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 84 },
      { id: 'kayke', nome: "Kayke", posicoes: ["ATA"], forca: 76 },
      { id: 'rodrygo', nome: "Rodrygo", posicoes: ["PD"], forca: 75 },
      { id: 'jean-mota', nome: "Jean Mota", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 87 },
      { id: 'edilson', nome: "Edílson", posicoes: ["LD"], forca: 79 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 86 },
      { id: 'walter-kannemann', nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { id: 'bruno-cortez', nome: "Bruno Cortez", posicoes: ["LE"], forca: 80 },
      { id: 'maicon', nome: "Maicon", posicoes: ["VOL"], forca: 84 },
      { id: 'arthur', nome: "Arthur", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'michel', nome: "Michel", posicoes: ["VOL"], forca: 77 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["MC","MD"], forca: 80 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MEI"], forca: 77 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'everton-cebolinha', nome: "Everton Cebolinha", posicoes: ["PE"], forca: 81 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PD"], forca: 76 },
      { id: 'lucas-barrios', nome: "Lucas Barrios", posicoes: ["ATA"], forca: 79 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["PD","ATA"], forca: 77 },
      { id: 'bressan', nome: "Bressan", posicoes: ["ZAG"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 85 },
      { id: 'ezequiel', nome: "Ezequiel", posicoes: ["LD"], forca: 77 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { id: 'murilo', nome: "Murilo", posicoes: ["ZAG"], forca: 79 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 79 },
      { id: 'diogo-barbosa', nome: "Diogo Barbosa", posicoes: ["LE"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL"], forca: 82 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 79 },
      { id: 'lucas-romero', nome: "Lucas Romero", posicoes: ["VOL"], forca: 79 },
      { id: 'robinho', nome: "Robinho", posicoes: ["MEI"], forca: 80 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 85 },
      { id: 'giorgian-de-arrascaeta', nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 86 },
      { id: 'alisson', nome: "Alisson", posicoes: ["PD"], forca: 79 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 81 },
      { id: 'sassa', nome: "Sassá", posicoes: ["ATA"], forca: 77 },
      { id: 'ramon-abila', nome: "Ramón Ábila", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Flamengo",
    jogadores: [
      { id: 'diego-alves', nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 77 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 82 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 79 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 78 },
      { id: 'miguel-trauco', nome: "Miguel Trauco", posicoes: ["LE"], forca: 79 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 77 },
      { id: 'marcio-araujo', nome: "Márcio Araújo", posicoes: ["VOL"], forca: 78 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL"], forca: 81 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 85 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { id: 'everton', nome: "Éverton", posicoes: ["PE"], forca: 80 },
      { id: 'orlando-berrio', nome: "Orlando Berrío", posicoes: ["PD"], forca: 79 },
      { id: 'paolo-guerrero', nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 85 },
      { id: 'vinicius-junior', nome: "Vinícius Júnior", posicoes: ["PE"], forca: 77 }
    ]
  },

  // ===== Edição 2016 =====

  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Palmeiras",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 84 },
      { id: 'jailson', nome: "Jailson", posicoes: ["GOL"], forca: 84 },
      { id: 'jean', nome: "Jean", posicoes: ["LD"], forca: 80 },
      { id: 'fabiano', nome: "Fabiano", posicoes: ["LD"], forca: 79 },
      { id: 'yerry-mina', nome: "Yerry Mina", posicoes: ["ZAG"], forca: 84 },
      { id: 'vitor-hugo', nome: "Vitor Hugo", posicoes: ["ZAG"], forca: 84 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 79 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 78 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 82 },
      { id: 'tche-tche', nome: "Tchê Tchê", posicoes: ["MC"], forca: 82 },
      { id: 'moises', nome: "Moisés", posicoes: ["MEI"], forca: 84 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MEI"], forca: 78 },
      { id: 'dudu', nome: "Dudu", posicoes: ["PD","PE"], forca: 86 },
      { id: 'gabriel-jesus', nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 89 },
      { id: 'roger-guedes', nome: "Róger Guedes", posicoes: ["PE"], forca: 80 },
      { id: 'lucas-barrios', nome: "Lucas Barrios", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Santos",
    jogadores: [
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["GOL"], forca: 84 },
      { id: 'victor-ferraz', nome: "Victor Ferraz", posicoes: ["LD"], forca: 81 },
      { id: 'gustavo-henrique', nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 80 },
      { id: 'david-braz', nome: "David Braz", posicoes: ["ZAG"], forca: 79 },
      { id: 'luiz-felipe', nome: "Luiz Felipe", posicoes: ["ZAG"], forca: 77 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'renato', nome: "Renato", posicoes: ["VOL"], forca: 80 },
      { id: 'thiago-maia', nome: "Thiago Maia", posicoes: ["VOL"], forca: 81 },
      { id: 'lucas-lima', nome: "Lucas Lima", posicoes: ["MEI"], forca: 86 },
      { id: 'vitor-bueno', nome: "Vitor Bueno", posicoes: ["MEI","PD"], forca: 82 },
      { id: 'copete', nome: "Copete", posicoes: ["PE"], forca: 79 },
      { id: 'gabriel-barbosa', nome: "Gabriel Barbosa", posicoes: ["PD","ATA"], forca: 86 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 84 },
      { id: 'rodrigao', nome: "Rodrigão", posicoes: ["ATA"], forca: 78 },
      { id: 'jean-mota', nome: "Jean Mota", posicoes: ["MEI"], forca: 77 },
      { id: 'leo-cittadini', nome: "Léo Cittadini", posicoes: ["MC"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Flamengo",
    jogadores: [
      { id: 'alex-muralha', nome: "Alex Muralha", posicoes: ["GOL"], forca: 81 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 77 },
      { id: 'rodinei', nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { id: 'rafael-vaz', nome: "Rafael Vaz", posicoes: ["ZAG"], forca: 78 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 78 },
      { id: 'jorge', nome: "Jorge", posicoes: ["LE"], forca: 80 },
      { id: 'marcio-araujo', nome: "Márcio Araújo", posicoes: ["VOL"], forca: 78 },
      { id: 'willian-arao', nome: "Willian Arão", posicoes: ["VOL"], forca: 81 },
      { id: 'mancuello', nome: "Mancuello", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 84 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MEI"], forca: 80 },
      { id: 'everton', nome: "Éverton", posicoes: ["PE"], forca: 80 },
      { id: 'paolo-guerrero', nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 85 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PE"], forca: 79 },
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 82 },
      { id: 'erazo', nome: "Erazo", posicoes: ["ZAG"], forca: 78 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["ZAG"], forca: 77 },
      { id: 'douglas-santos', nome: "Douglas Santos", posicoes: ["LE"], forca: 82 },
      { id: 'junior-urso', nome: "Júnior Urso", posicoes: ["VOL"], forca: 80 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 80 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 81 },
      { id: 'cazares', nome: "Cazares", posicoes: ["MEI"], forca: 82 },
      { id: 'robinho', nome: "Robinho", posicoes: ["PD"], forca: 86 },
      { id: 'luan', nome: "Luan", posicoes: ["PE"], forca: 81 },
      { id: 'maicosuel', nome: "Maicosuel", posicoes: ["PD"], forca: 79 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 85 },
      { id: 'lucas-pratto', nome: "Lucas Pratto", posicoes: ["ATA"], forca: 85 },
      { id: 'carlos', nome: "Carlos", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Botafogo",
    jogadores: [
      { id: 'sidao', nome: "Sidão", posicoes: ["GOL"], forca: 80 },
      { id: 'jefferson', nome: "Jefferson", posicoes: ["GOL"], forca: 81 },
      { id: 'luis-ricardo', nome: "Luis Ricardo", posicoes: ["LD"], forca: 77 },
      { id: 'emerson-santos', nome: "Emerson Santos", posicoes: ["ZAG"], forca: 78 },
      { id: 'joel-carli', nome: "Joel Carli", posicoes: ["ZAG"], forca: 80 },
      { id: 'renan-fonseca', nome: "Renan Fonseca", posicoes: ["ZAG"], forca: 77 },
      { id: 'victor-luis', nome: "Victor Luis", posicoes: ["LE"], forca: 78 },
      { id: 'bruno-silva', nome: "Bruno Silva", posicoes: ["VOL"], forca: 80 },
      { id: 'airton', nome: "Airton", posicoes: ["VOL"], forca: 78 },
      { id: 'rodrigo-lindoso', nome: "Rodrigo Lindoso", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'camilo', nome: "Camilo", posicoes: ["MEI"], forca: 84 },
      { id: 'neilton', nome: "Neilton", posicoes: ["PE"], forca: 80 },
      { id: 'sassa', nome: "Sassá", posicoes: ["ATA"], forca: 80 },
      { id: 'rodrigo-pimpao', nome: "Rodrigo Pimpão", posicoes: ["ATA","PE"], forca: 79 },
      { id: 'canales', nome: "Canales", posicoes: ["ATA"], forca: 76 },
      { id: 'ribamar', nome: "Ribamar", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { id: 'leo', nome: "Léo", posicoes: ["LD"], forca: 77 },
      { id: 'paulo-andre', nome: "Paulo André", posicoes: ["ZAG"], forca: 79 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { id: 'sidcley', nome: "Sidcley", posicoes: ["LE"], forca: 79 },
      { id: 'otavio', nome: "Otávio", posicoes: ["VOL"], forca: 79 },
      { id: 'hernani', nome: "Hernani", posicoes: ["VOL"], forca: 80 },
      { id: 'deivid', nome: "Deivid", posicoes: ["VOL"], forca: 78 },
      { id: 'nikao', nome: "Nikão", posicoes: ["MEI","PD"], forca: 81 },
      { id: 'pablo', nome: "Pablo", posicoes: ["ATA"], forca: 78 },
      { id: 'andre-lima', nome: "André Lima", posicoes: ["ATA"], forca: 78 },
      { id: 'walter', nome: "Walter", posicoes: ["ATA"], forca: 77 },
      { id: 'marcos-guilherme', nome: "Marcos Guilherme", posicoes: ["PD"], forca: 79 },
      { id: 'lucas-fernandes', nome: "Lucas Fernandes", posicoes: ["MC"], forca: 76 },
      { id: 'juninho', nome: "Juninho", posicoes: ["ZAG"], forca: 75 },
      { id: 'lucho-gonzalez', nome: "Lucho González", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 2015 =====

  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 87 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 84 },
      { id: 'felipe', nome: "Felipe", posicoes: ["ZAG"], forca: 85 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 85 },
      { id: 'uendel', nome: "Uendel", posicoes: ["LE"], forca: 81 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 86 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MEI"], forca: 89 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 88 },
      { id: 'malcom', nome: "Malcom", posicoes: ["PE"], forca: 81 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 85 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 81 },
      { id: 'rodriguinho', nome: "Rodriguinho", posicoes: ["MEI"], forca: 79 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["VOL","MC"], forca: 80 },
      { id: 'lucca', nome: "Lucca", posicoes: ["PE"], forca: 78 },
      { id: 'luciano', nome: "Luciano", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 84 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 82 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 84 },
      { id: 'douglas-santos', nome: "Douglas Santos", posicoes: ["LE"], forca: 82 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 80 },
      { id: 'jesus-datolo', nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 84 },
      { id: 'luan', nome: "Luan", posicoes: ["PD"], forca: 82 },
      { id: 'giovanni-augusto', nome: "Giovanni Augusto", posicoes: ["MEI"], forca: 82 },
      { id: 'lucas-pratto', nome: "Lucas Pratto", posicoes: ["ATA"], forca: 87 },
      { id: 'carlos', nome: "Carlos", posicoes: ["ATA"], forca: 78 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["PE"], forca: 79 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { id: 'patric', nome: "Patric", posicoes: ["LD"], forca: 77 },
      { id: 'junior-urso', nome: "Júnior Urso", posicoes: ["VOL"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 85 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["LD"], forca: 78 },
      { id: 'pedro-geromel', nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 85 },
      { id: 'erazo', nome: "Erazo", posicoes: ["ZAG"], forca: 79 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["LE"], forca: 78 },
      { id: 'walace', nome: "Walace", posicoes: ["VOL"], forca: 81 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 82 },
      { id: 'giuliano', nome: "Giuliano", posicoes: ["MEI"], forca: 84 },
      { id: 'douglas', nome: "Douglas", posicoes: ["MEI"], forca: 81 },
      { id: 'luan', nome: "Luan", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["PD"], forca: 79 },
      { id: 'bobo', nome: "Bobô", posicoes: ["ATA"], forca: 77 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PE"], forca: 78 },
      { id: 'everton', nome: "Everton", posicoes: ["PE"], forca: 77 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["MC"], forca: 78 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'bruno', nome: "Bruno", posicoes: ["LD"], forca: 77 },
      { id: 'rafael-toloi', nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 80 },
      { id: 'lucao', nome: "Lucão", posicoes: ["ZAG"], forca: 76 },
      { id: 'rodrigo-caio', nome: "Rodrigo Caio", posicoes: ["ZAG","VOL"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["LE"], forca: 78 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 77 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 78 },
      { id: 'thiago-mendes', nome: "Thiago Mendes", posicoes: ["MC"], forca: 80 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 84 },
      { id: 'michel-bastos', nome: "Michel Bastos", posicoes: ["MEI","PE"], forca: 82 },
      { id: 'centurion', nome: "Centurión", posicoes: ["PD"], forca: 77 },
      { id: 'alexandre-pato', nome: "Alexandre Pato", posicoes: ["ATA"], forca: 85 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 84 },
      { id: 'alan-kardec', nome: "Alan Kardec", posicoes: ["ATA"], forca: 79 },
      { id: 'denis', nome: "Denis", posicoes: ["GOL"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Internacional",
    jogadores: [
      { id: 'alisson', nome: "Alisson", posicoes: ["GOL"], forca: 85 },
      { id: 'muriel', nome: "Muriel", posicoes: ["GOL"], forca: 76 },
      { id: 'william', nome: "William", posicoes: ["LD"], forca: 79 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 80 },
      { id: 'ernando', nome: "Ernando", posicoes: ["ZAG"], forca: 78 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 79 },
      { id: 'geferson', nome: "Geferson", posicoes: ["LE"], forca: 77 },
      { id: 'charles-aranguiz', nome: "Charles Aránguiz", posicoes: ["MC"], forca: 85 },
      { id: 'rodrigo-dourado', nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 80 },
      { id: 'anderson', nome: "Anderson", posicoes: ["MC"], forca: 79 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 84 },
      { id: 'valdivia', nome: "Valdívia", posicoes: ["MEI"], forca: 80 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PE"], forca: 82 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 82 },
      { id: 'lisandro-lopez', nome: "Lisandro López", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Sport",
    jogadores: [
      { id: 'danilo-fernandes', nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 80 },
      { id: 'samuel-xavier', nome: "Samuel Xavier", posicoes: ["LD"], forca: 78 },
      { id: 'durval', nome: "Durval", posicoes: ["ZAG"], forca: 80 },
      { id: 'matheus-ferraz', nome: "Matheus Ferraz", posicoes: ["ZAG"], forca: 78 },
      { id: 'rene', nome: "Renê", posicoes: ["LE"], forca: 78 },
      { id: 'rithely', nome: "Rithely", posicoes: ["VOL"], forca: 82 },
      { id: 'wendel', nome: "Wendel", posicoes: ["VOL"], forca: 78 },
      { id: 'rodrigo-mancha', nome: "Rodrigo Mancha", posicoes: ["VOL"], forca: 77 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 85 },
      { id: 'marlone', nome: "Marlone", posicoes: ["MEI","PE"], forca: 81 },
      { id: 'elber', nome: "Élber", posicoes: ["PE"], forca: 78 },
      { id: 'andre', nome: "André", posicoes: ["ATA"], forca: 84 },
      { id: 'maikon-leite', nome: "Maikon Leite", posicoes: ["PD"], forca: 78 },
      { id: 'regis', nome: "Régis", posicoes: ["MEI"], forca: 77 },
      { id: 'neto-moura', nome: "Neto Moura", posicoes: ["MC"], forca: 76 },
      { id: 'ferrugem', nome: "Ferrugem", posicoes: ["LD"], forca: 75 }
    ]
  },

  // ===== Edição 2014 =====

  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { id: 'ceara', nome: "Ceará", posicoes: ["LD"], forca: 80 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 80 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 85 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 81 },
      { id: 'bruno-rodrigo', nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 80 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 82 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL"], forca: 85 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 80 },
      { id: 'henrique', nome: "Henrique", posicoes: ["MC"], forca: 81 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 90 },
      { id: 'ricardo-goulart', nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PD","PE"], forca: 80 },
      { id: 'willian', nome: "Willian", posicoes: ["PD","PE"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PE"], forca: 80 },
      { id: 'marcelo-moreno', nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'douglas', nome: "Douglas", posicoes: ["LD"], forca: 78 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 78 },
      { id: 'rafael-toloi', nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 80 },
      { id: 'alvaro-pereira', nome: "Álvaro Pereira", posicoes: ["LE"], forca: 80 },
      { id: 'souza', nome: "Souza", posicoes: ["VOL"], forca: 80 },
      { id: 'denilson', nome: "Denilson", posicoes: ["VOL"], forca: 79 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 79 },
      { id: 'paulo-henrique-ganso', nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 85 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 87 },
      { id: 'alexandre-pato', nome: "Alexandre Pato", posicoes: ["ATA"], forca: 84 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 85 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["PE"], forca: 79 },
      { id: 'ademilson', nome: "Ademilson", posicoes: ["ATA"], forca: 77 },
      { id: 'boschilia', nome: "Boschilia", posicoes: ["MEI"], forca: 76 },
      { id: 'hudson', nome: "Hudson", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Internacional",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["LD"], forca: 77 },
      { id: 'paulao', nome: "Paulão", posicoes: ["ZAG"], forca: 78 },
      { id: 'ernando', nome: "Ernando", posicoes: ["ZAG"], forca: 78 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["LE"], forca: 80 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 78 },
      { id: 'charles-aranguiz', nome: "Charles Aránguiz", posicoes: ["MC"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 85 },
      { id: 'valdivia', nome: "Valdívia", posicoes: ["MEI"], forca: 78 },
      { id: 'alan-patrick', nome: "Alan Patrick", posicoes: ["MEI"], forca: 78 },
      { id: 'rafael-moura', nome: "Rafael Moura", posicoes: ["ATA"], forca: 80 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 79 },
      { id: 'otavio', nome: "Otávio", posicoes: ["PD"], forca: 78 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 85 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 84 },
      { id: 'felipe', nome: "Felipe", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 81 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 85 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 84 },
      { id: 'renato-augusto', nome: "Renato Augusto", posicoes: ["MEI"], forca: 84 },
      { id: 'guerrero', nome: "Guerrero", posicoes: ["ATA"], forca: 85 },
      { id: 'romarinho', nome: "Romarinho", posicoes: ["PD"], forca: 80 },
      { id: 'malcom', nome: "Malcom", posicoes: ["PE"], forca: 77 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { id: 'bruno-henrique', nome: "Bruno Henrique", posicoes: ["VOL"], forca: 79 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 82 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 82 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { id: 'jemerson', nome: "Jemerson", posicoes: ["ZAG"], forca: 79 },
      { id: 'douglas-santos', nome: "Douglas Santos", posicoes: ["LE"], forca: 80 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 80 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 79 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 78 },
      { id: 'jesus-datolo', nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 82 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI"], forca: 86 },
      { id: 'diego-tardelli', nome: "Diego Tardelli", posicoes: ["ATA"], forca: 86 },
      { id: 'luan', nome: "Luan", posicoes: ["PD"], forca: 81 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 81 },
      { id: 'marion', nome: "Marion", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Fluminense",
    jogadores: [
      { id: 'diego-cavalieri', nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 84 },
      { id: 'bruno', nome: "Bruno", posicoes: ["LD"], forca: 78 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 80 },
      { id: 'elivelton', nome: "Elivelton", posicoes: ["ZAG"], forca: 77 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 80 },
      { id: 'jean', nome: "Jean", posicoes: ["VOL"], forca: 82 },
      { id: 'edson', nome: "Edson", posicoes: ["VOL"], forca: 78 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MC"], forca: 81 },
      { id: 'dario-conca', nome: "Darío Conca", posicoes: ["MEI"], forca: 87 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 80 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 86 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 82 },
      { id: 'walter', nome: "Walter", posicoes: ["ATA"], forca: 79 },
      { id: 'kenedy', nome: "Kenedy", posicoes: ["PE"], forca: 77 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 2013 =====

  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 86 },
      { id: 'ceara', nome: "Ceará", posicoes: ["LD"], forca: 80 },
      { id: 'mayke', nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 85 },
      { id: 'bruno-rodrigo', nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { id: 'egidio', nome: "Egídio", posicoes: ["LE"], forca: 81 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 81 },
      { id: 'lucas-silva', nome: "Lucas Silva", posicoes: ["VOL"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["MC"], forca: 80 },
      { id: 'everton-ribeiro', nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 88 },
      { id: 'ricardo-goulart', nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MEI"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PE"], forca: 81 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 82 },
      { id: 'willian', nome: "Willian", posicoes: ["PD","ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Grêmio",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 78 },
      { id: 'werley', nome: "Werley", posicoes: ["ZAG"], forca: 79 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 81 },
      { id: 'alex-telles', nome: "Alex Telles", posicoes: ["LE"], forca: 81 },
      { id: 'souza', nome: "Souza", posicoes: ["VOL"], forca: 81 },
      { id: 'ramiro', nome: "Ramiro", posicoes: ["VOL","MC"], forca: 79 },
      { id: 'cristian-riveros', nome: "Cristian Riveros", posicoes: ["MC"], forca: 80 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 85 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI"], forca: 82 },
      { id: 'maxi-rodriguez', nome: "Maxi Rodríguez", posicoes: ["MEI"], forca: 78 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 81 },
      { id: 'barcos', nome: "Barcos", posicoes: ["ATA"], forca: 84 },
      { id: 'eduardo-vargas', nome: "Eduardo Vargas", posicoes: ["ATA","PE"], forca: 82 },
      { id: 'welliton', nome: "Welliton", posicoes: ["ATA"], forca: 78 },
      { id: 'matheus-biteco', nome: "Matheus Biteco", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'weverton', nome: "Weverton", posicoes: ["GOL"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["LD"], forca: 78 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 82 },
      { id: 'luiz-alberto', nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 78 },
      { id: 'pedro-botelho', nome: "Pedro Botelho", posicoes: ["LE"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["VOL"], forca: 78 },
      { id: 'deivid', nome: "Deivid", posicoes: ["VOL"], forca: 78 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["MEI"], forca: 85 },
      { id: 'everton', nome: "Everton", posicoes: ["MEI"], forca: 80 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["ATA"], forca: 81 },
      { id: 'ederson', nome: "Ederson", posicoes: ["ATA"], forca: 87 },
      { id: 'dellatorre', nome: "Dellatorre", posicoes: ["ATA"], forca: 76 },
      { id: 'zezinho', nome: "Zezinho", posicoes: ["MEI"], forca: 76 },
      { id: 'cleberson', nome: "Cleberson", posicoes: ["ZAG"], forca: 76 },
      { id: 'bruno-silva', nome: "Bruno Silva", posicoes: ["MC"], forca: 77 },
      { id: 'roger', nome: "Roger", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Botafogo",
    jogadores: [
      { id: 'jefferson', nome: "Jefferson", posicoes: ["GOL"], forca: 86 },
      { id: 'lucas', nome: "Lucas", posicoes: ["LD"], forca: 78 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["ZAG"], forca: 80 },
      { id: 'doria', nome: "Dória", posicoes: ["ZAG"], forca: 81 },
      { id: 'julio-cesar', nome: "Julio Cesar", posicoes: ["LE"], forca: 78 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["VOL"], forca: 79 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 79 },
      { id: 'seedorf', nome: "Seedorf", posicoes: ["MEI"], forca: 89 },
      { id: 'lodeiro', nome: "Lodeiro", posicoes: ["MEI"], forca: 84 },
      { id: 'vitinho', nome: "Vitinho", posicoes: ["PE"], forca: 81 },
      { id: 'rafael-marques', nome: "Rafael Marques", posicoes: ["ATA"], forca: 81 },
      { id: 'elias', nome: "Elias", posicoes: ["ATA"], forca: 78 },
      { id: 'bruno-mendes', nome: "Bruno Mendes", posicoes: ["ATA"], forca: 77 },
      { id: 'hyuri', nome: "Hyuri", posicoes: ["PE"], forca: 77 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 78 },
      { id: 'gege', nome: "Gegê", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Vitória",
    jogadores: [
      { id: 'wilson', nome: "Wilson", posicoes: ["GOL"], forca: 80 },
      { id: 'ayrton', nome: "Ayrton", posicoes: ["LD"], forca: 79 },
      { id: 'kadu', nome: "Kadu", posicoes: ["ZAG"], forca: 78 },
      { id: 'victor-ramos', nome: "Victor Ramos", posicoes: ["ZAG"], forca: 78 },
      { id: 'danilo-tarracha', nome: "Danilo Tarracha", posicoes: ["LE"], forca: 76 },
      { id: 'caceres', nome: "Cáceres", posicoes: ["VOL"], forca: 80 },
      { id: 'michel', nome: "Michel", posicoes: ["VOL"], forca: 78 },
      { id: 'escudero', nome: "Escudero", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-caja', nome: "Renato Cajá", posicoes: ["MEI"], forca: 81 },
      { id: 'maxi-biancucchi', nome: "Maxi Biancucchi", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["ATA"], forca: 80 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 81 },
      { id: 'william-henrique', nome: "William Henrique", posicoes: ["PE"], forca: 78 },
      { id: 'juan', nome: "Juan", posicoes: ["LE","ME"], forca: 77 },
      { id: 'neto-coruja', nome: "Neto Coruja", posicoes: ["VOL"], forca: 77 },
      { id: 'pedro-oldoni', nome: "Pedro Oldoni", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Goiás",
    jogadores: [
      { id: 'renan', nome: "Renan", posicoes: ["GOL"], forca: 81 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 77 },
      { id: 'ernando', nome: "Ernando", posicoes: ["ZAG"], forca: 79 },
      { id: 'rodrigo', nome: "Rodrigo", posicoes: ["ZAG"], forca: 78 },
      { id: 'william-matheus', nome: "William Matheus", posicoes: ["LE"], forca: 78 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 78 },
      { id: 'david', nome: "David", posicoes: ["VOL"], forca: 77 },
      { id: 'thiago-mendes', nome: "Thiago Mendes", posicoes: ["MC"], forca: 79 },
      { id: 'hugo', nome: "Hugo", posicoes: ["MEI"], forca: 80 },
      { id: 'walter', nome: "Walter", posicoes: ["ATA"], forca: 85 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 79 },
      { id: 'erik', nome: "Erik", posicoes: ["PE"], forca: 77 },
      { id: 'roni', nome: "Roni", posicoes: ["PD"], forca: 77 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI"], forca: 76 },
      { id: 'tarta', nome: "Tartá", posicoes: ["PE"], forca: 75 },
      { id: 'dudu-cearense', nome: "Dudu Cearense", posicoes: ["VOL"], forca: 79 }
    ]
  },

  // ===== Edição 2012 =====

  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Fluminense",
    jogadores: [
      { id: 'diego-cavalieri', nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 85 },
      { id: 'bruno', nome: "Bruno", posicoes: ["LD"], forca: 78 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 81 },
      { id: 'leandro-euzebio', nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 81 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 81 },
      { id: 'jean', nome: "Jean", posicoes: ["VOL"], forca: 85 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { id: 'valencia', nome: "Valencia", posicoes: ["VOL"], forca: 79 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 84 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 85 },
      { id: 'wellington-nem', nome: "Wellington Nem", posicoes: ["PE"], forca: 82 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 82 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 89 },
      { id: 'samuel', nome: "Samuel", posicoes: ["ATA"], forca: 77 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 79 },
      { id: 'marcos-junior', nome: "Marcos Júnior", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["GOL"], forca: 77 },
      { id: 'marcos-rocha', nome: "Marcos Rocha", posicoes: ["LD"], forca: 82 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'junior-cesar', nome: "Júnior César", posicoes: ["LE"], forca: 79 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["VOL"], forca: 79 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 81 },
      { id: 'leandro-donizete', nome: "Leandro Donizete", posicoes: ["VOL"], forca: 79 },
      { id: 'bernard', nome: "Bernard", posicoes: ["PE"], forca: 86 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI"], forca: 89 },
      { id: 'danilinho', nome: "Danilinho", posicoes: ["PD"], forca: 80 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { id: 'jo', nome: "Jô", posicoes: ["ATA"], forca: 82 },
      { id: 'escudero', nome: "Escudero", posicoes: ["MEI"], forca: 78 },
      { id: 'neto-berola', nome: "Neto Berola", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Grêmio",
    jogadores: [
      { id: 'marcelo-grohe', nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 81 },
      { id: 'para', nome: "Pará", posicoes: ["LD"], forca: 78 },
      { id: 'werley', nome: "Werley", posicoes: ["ZAG"], forca: 79 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'naldo', nome: "Naldo", posicoes: ["ZAG"], forca: 78 },
      { id: 'anderson-pico', nome: "Anderson Pico", posicoes: ["LE"], forca: 77 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 82 },
      { id: 'souza', nome: "Souza", posicoes: ["VOL"], forca: 81 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI"], forca: 82 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["MEI"], forca: 78 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 81 },
      { id: 'marcelo-moreno', nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 82 },
      { id: 'leandro', nome: "Leandro", posicoes: ["PE"], forca: 78 },
      { id: 'andre-lima', nome: "André Lima", posicoes: ["ATA"], forca: 79 },
      { id: 'bertoglio', nome: "Bertoglio", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'douglas', nome: "Douglas", posicoes: ["LD"], forca: 78 },
      { id: 'paulo-miranda', nome: "Paulo Miranda", posicoes: ["ZAG"], forca: 78 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 80 },
      { id: 'cortez', nome: "Cortez", posicoes: ["LE"], forca: 80 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 79 },
      { id: 'denilson', nome: "Denilson", posicoes: ["VOL"], forca: 80 },
      { id: 'maicon', nome: "Maicon", posicoes: ["MC"], forca: 79 },
      { id: 'jadson', nome: "Jadson", posicoes: ["MEI"], forca: 84 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["PD"], forca: 87 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["PE"], forca: 80 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 86 },
      { id: 'willian-jose', nome: "Willian José", posicoes: ["ATA"], forca: 78 },
      { id: 'ademilson', nome: "Ademilson", posicoes: ["ATA"], forca: 76 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Vasco",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 84 },
      { id: 'fagner', nome: "Fágner", posicoes: ["LD"], forca: 82 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 86 },
      { id: 'renato-silva', nome: "Renato Silva", posicoes: ["ZAG"], forca: 78 },
      { id: 'thiago-feltri', nome: "Thiago Feltri", posicoes: ["LE"], forca: 77 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 80 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { id: 'felipe', nome: "Felipe", posicoes: ["MEI"], forca: 82 },
      { id: 'wendel', nome: "Wendel", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'eder-luis', nome: "Éder Luís", posicoes: ["PD"], forca: 81 },
      { id: 'alecsandro', nome: "Alecsandro", posicoes: ["ATA"], forca: 82 },
      { id: 'carlos-tenorio', nome: "Carlos Tenorio", posicoes: ["ATA"], forca: 78 },
      { id: 'william-barbio', nome: "William Barbio", posicoes: ["PD"], forca: 77 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 78 },
      { id: 'felipe-bastos', nome: "Felipe Bastos", posicoes: ["VOL"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Corinthians",
    jogadores: [
      { id: 'cassio', nome: "Cássio", posicoes: ["GOL"], forca: 86 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 80 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ZAG"], forca: 81 },
      { id: 'paulo-andre', nome: "Paulo André", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 81 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["MC"], forca: 87 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 82 },
      { id: 'douglas', nome: "Douglas", posicoes: ["MEI"], forca: 80 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["PD"], forca: 84 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 81 },
      { id: 'guerrero', nome: "Guerrero", posicoes: ["ATA"], forca: 84 },
      { id: 'romarinho', nome: "Romarinho", posicoes: ["ATA"], forca: 80 },
      { id: 'liedson', nome: "Liedson", posicoes: ["ATA"], forca: 79 },
      { id: 'martinez', nome: "Martínez", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2011 =====

  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Corinthians",
    jogadores: [
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["GOL"], forca: 81 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 80 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ZAG"], forca: 81 },
      { id: 'leandro-castan', nome: "Leandro Castán", posicoes: ["ZAG"], forca: 84 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 81 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["MC"], forca: 85 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 82 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 81 },
      { id: 'willian', nome: "Willian", posicoes: ["ATA"], forca: 82 },
      { id: 'liedson', nome: "Liedson", posicoes: ["ATA"], forca: 85 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["PD"], forca: 82 },
      { id: 'edenilson', nome: "Edenílson", posicoes: ["VOL","LD"], forca: 78 },
      { id: 'ramirez', nome: "Ramírez", posicoes: ["MC"], forca: 78 },
      { id: 'morais', nome: "Morais", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Vasco",
    jogadores: [
      { id: 'fernando-prass', nome: "Fernando Prass", posicoes: ["GOL"], forca: 84 },
      { id: 'fagner', nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { id: 'dede', nome: "Dedé", posicoes: ["ZAG"], forca: 86 },
      { id: 'anderson-martins', nome: "Anderson Martins", posicoes: ["ZAG"], forca: 81 },
      { id: 'renato-silva', nome: "Renato Silva", posicoes: ["ZAG"], forca: 78 },
      { id: 'julinho', nome: "Julinho", posicoes: ["LE"], forca: 77 },
      { id: 'romulo', nome: "Rômulo", posicoes: ["VOL"], forca: 82 },
      { id: 'nilton', nome: "Nilton", posicoes: ["VOL"], forca: 80 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MEI"], forca: 86 },
      { id: 'felipe', nome: "Felipe", posicoes: ["MEI"], forca: 82 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 85 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["MEI"], forca: 79 },
      { id: 'eder-luis', nome: "Éder Luís", posicoes: ["PD"], forca: 81 },
      { id: 'alecsandro', nome: "Alecsandro", posicoes: ["ATA"], forca: 82 },
      { id: 'elton', nome: "Elton", posicoes: ["ATA"], forca: 78 },
      { id: 'allan', nome: "Allan", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Fluminense",
    jogadores: [
      { id: 'diego-cavalieri', nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 82 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 81 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 80 },
      { id: 'leandro-euzebio', nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 80 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 80 },
      { id: 'valencia', nome: "Valencia", posicoes: ["VOL"], forca: 79 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 79 },
      { id: 'marquinho', nome: "Marquinho", posicoes: ["MC"], forca: 80 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 84 },
      { id: 'dario-conca', nome: "Darío Conca", posicoes: ["MEI"], forca: 85 },
      { id: 'rafael-moura', nome: "Rafael Moura", posicoes: ["ATA"], forca: 84 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 88 },
      { id: 'rafael-sobis', nome: "Rafael Sobis", posicoes: ["ATA"], forca: 81 },
      { id: 'manuel-lanzini', nome: "Manuel Lanzini", posicoes: ["MEI"], forca: 79 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 78 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Flamengo",
    jogadores: [
      { id: 'felipe', nome: "Felipe", posicoes: ["GOL"], forca: 81 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 84 },
      { id: 'welinton', nome: "Welinton", posicoes: ["ZAG"], forca: 77 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { id: 'junior-cesar', nome: "Junior Cesar", posicoes: ["LE"], forca: 79 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["VOL"], forca: 79 },
      { id: 'airton', nome: "Airton", posicoes: ["VOL"], forca: 78 },
      { id: 'renato-abreu', nome: "Renato Abreu", posicoes: ["MC"], forca: 82 },
      { id: 'ronaldinho', nome: "Ronaldinho", posicoes: ["MEI","ATA"], forca: 88 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 86 },
      { id: 'bottinelli', nome: "Bottinelli", posicoes: ["MEI"], forca: 78 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 80 },
      { id: 'diego-mauricio', nome: "Diego Maurício", posicoes: ["ATA"], forca: 77 },
      { id: 'jael', nome: "Jael", posicoes: ["ATA"], forca: 77 },
      { id: 'wanderley', nome: "Wanderley", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Internacional",
    jogadores: [
      { id: 'muriel', nome: "Muriel", posicoes: ["GOL"], forca: 80 },
      { id: 'nei', nome: "Nei", posicoes: ["LD"], forca: 78 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 80 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["ZAG"], forca: 80 },
      { id: 'kleber', nome: "Kleber", posicoes: ["LE"], forca: 81 },
      { id: 'guinazu', nome: "Guiñazú", posicoes: ["VOL"], forca: 84 },
      { id: 'bolatti', nome: "Bolatti", posicoes: ["VOL"], forca: 79 },
      { id: 'tinga', nome: "Tinga", posicoes: ["MC"], forca: 80 },
      { id: 'dalessandro', nome: "D’Alessandro", posicoes: ["MEI"], forca: 86 },
      { id: 'oscar', nome: "Oscar", posicoes: ["MEI"], forca: 85 },
      { id: 'leandro-damiao', nome: "Leandro Damião", posicoes: ["ATA"], forca: 87 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PE"], forca: 78 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI"], forca: 80 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["ATA"], forca: 78 },
      { id: 'dellatorre', nome: "Dellatorre", posicoes: ["ATA"], forca: 75 },
      { id: 'juan', nome: "Juan", posicoes: ["ZAG"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { id: 'ivan-piris', nome: "Iván Piris", posicoes: ["LD"], forca: 78 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 80 },
      { id: 'xandao', nome: "Xandão", posicoes: ["ZAG"], forca: 77 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 78 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["VOL"], forca: 81 },
      { id: 'wellington', nome: "Wellington", posicoes: ["VOL"], forca: 79 },
      { id: 'denilson', nome: "Denilson", posicoes: ["VOL"], forca: 79 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MC"], forca: 80 },
      { id: 'lucas-moura', nome: "Lucas Moura", posicoes: ["PD"], forca: 86 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA"], forca: 85 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 80 },
      { id: 'luis-fabiano', nome: "Luis Fabiano", posicoes: ["ATA"], forca: 84 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ATA"], forca: 77 },
      { id: 'marlos', nome: "Marlos", posicoes: ["PE"], forca: 79 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 2010 =====

  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Fluminense",
    jogadores: [
      { id: 'fernando-henrique', nome: "Fernando Henrique", posicoes: ["GOL"], forca: 80 },
      { id: 'ricardo-berna', nome: "Ricardo Berna", posicoes: ["GOL"], forca: 78 },
      { id: 'mariano', nome: "Mariano", posicoes: ["LD"], forca: 82 },
      { id: 'gum', nome: "Gum", posicoes: ["ZAG"], forca: 80 },
      { id: 'leandro-euzebio', nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 80 },
      { id: 'andre-luis', nome: "André Luis", posicoes: ["ZAG"], forca: 78 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LE"], forca: 80 },
      { id: 'julio-cesar', nome: "Julio Cesar", posicoes: ["LE"], forca: 78 },
      { id: 'diogo', nome: "Diogo", posicoes: ["VOL"], forca: 79 },
      { id: 'diguinho', nome: "Diguinho", posicoes: ["VOL"], forca: 80 },
      { id: 'valencia', nome: "Valencia", posicoes: ["VOL"], forca: 79 },
      { id: 'dario-conca', nome: "Darío Conca", posicoes: ["MEI"], forca: 90 },
      { id: 'deco', nome: "Deco", posicoes: ["MEI"], forca: 84 },
      { id: 'marquinho', nome: "Marquinho", posicoes: ["MC"], forca: 80 },
      { id: 'fred', nome: "Fred", posicoes: ["ATA"], forca: 86 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 85 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 81 },
      { id: 'gil', nome: "Gil", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { id: 'diego-renan', nome: "Diego Renan", posicoes: ["LE"], forca: 80 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["VOL"], forca: 82 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL"], forca: 81 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["MC"], forca: 81 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 80 },
      { id: 'montillo', nome: "Montillo", posicoes: ["MEI"], forca: 87 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 81 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["PD"], forca: 84 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { id: 'robert', nome: "Robert", posicoes: ["ATA"], forca: 78 },
      { id: 'wallyson', nome: "Wallyson", posicoes: ["ATA","PE"], forca: 80 },
      { id: 'guerron', nome: "Guerrón", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Corinthians",
    jogadores: [
      { id: 'julio-cesar', nome: "Júlio César", posicoes: ["GOL"], forca: 81 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 80 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ZAG"], forca: 81 },
      { id: 'william', nome: "William", posicoes: ["ZAG"], forca: 80 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 85 },
      { id: 'ralf', nome: "Ralf", posicoes: ["VOL"], forca: 82 },
      { id: 'jucilei', nome: "Jucilei", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'elias', nome: "Elias", posicoes: ["MC"], forca: 85 },
      { id: 'bruno-cesar', nome: "Bruno César", posicoes: ["MEI"], forca: 85 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 81 },
      { id: 'dentinho', nome: "Dentinho", posicoes: ["PD"], forca: 82 },
      { id: 'ronaldo-fenomeno', nome: "Ronaldo", posicoes: ["ATA"], forca: 86 },
      { id: 'jorge-henrique', nome: "Jorge Henrique", posicoes: ["PE"], forca: 81 },
      { id: 'iarley', nome: "Iarley", posicoes: ["ATA"], forca: 78 },
      { id: 'souza', nome: "Souza", posicoes: ["ATA"], forca: 77 },
      { id: 'defederico', nome: "Defederico", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 80 },
      { id: 'mario-fernandes', nome: "Mário Fernandes", posicoes: ["ZAG"], forca: 82 },
      { id: 'rafael-marques', nome: "Rafael Marques", posicoes: ["ZAG"], forca: 79 },
      { id: 'rodolfo', nome: "Rodolfo", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-santos', nome: "Fábio Santos", posicoes: ["LE"], forca: 80 },
      { id: 'adilson', nome: "Adílson", posicoes: ["VOL"], forca: 79 },
      { id: 'willian-magrao', nome: "Willian Magrão", posicoes: ["VOL"], forca: 78 },
      { id: 'douglas', nome: "Douglas", posicoes: ["MEI"], forca: 85 },
      { id: 'hugo', nome: "Hugo", posicoes: ["MEI"], forca: 80 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 79 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 88 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 81 },
      { id: 'andre-lima', nome: "André Lima", posicoes: ["ATA"], forca: 80 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE","ME"], forca: 78 },
      { id: 'maylson', nome: "Maylson", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'neto', nome: "Neto", posicoes: ["GOL"], forca: 81 },
      { id: 'rhodolfo', nome: "Rhodolfo", posicoes: ["ZAG"], forca: 81 },
      { id: 'manoel', nome: "Manoel", posicoes: ["ZAG"], forca: 80 },
      { id: 'chico', nome: "Chico", posicoes: ["ZAG"], forca: 78 },
      { id: 'wagner-diniz', nome: "Wagner Diniz", posicoes: ["LD"], forca: 77 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["LE"], forca: 78 },
      { id: 'vitor', nome: "Vitor", posicoes: ["VOL"], forca: 79 },
      { id: 'deivid', nome: "Deivid", posicoes: ["VOL"], forca: 78 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["MEI"], forca: 85 },
      { id: 'branquinho', nome: "Branquinho", posicoes: ["MEI"], forca: 80 },
      { id: 'guerron', nome: "Guerrón", posicoes: ["PD"], forca: 81 },
      { id: 'bruno-mineiro', nome: "Bruno Mineiro", posicoes: ["ATA"], forca: 81 },
      { id: 'maikon-leite', nome: "Maikon Leite", posicoes: ["PE"], forca: 80 },
      { id: 'nieto', nome: "Nieto", posicoes: ["ATA"], forca: 77 },
      { id: 'ivan-gonzalez', nome: "Ivan González", posicoes: ["ZAG"], forca: 77 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Botafogo",
    jogadores: [
      { id: 'jefferson', nome: "Jefferson", posicoes: ["GOL"], forca: 85 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabio-ferreira', nome: "Fábio Ferreira", posicoes: ["ZAG"], forca: 78 },
      { id: 'marcelo-cordeiro', nome: "Marcelo Cordeiro", posicoes: ["LE"], forca: 78 },
      { id: 'somalia', nome: "Somália", posicoes: ["VOL"], forca: 79 },
      { id: 'leandro-guerreiro', nome: "Leandro Guerreiro", posicoes: ["VOL"], forca: 79 },
      { id: 'fahel', nome: "Fahel", posicoes: ["VOL"], forca: 78 },
      { id: 'lucio-flavio', nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 81 },
      { id: 'maicosuel', nome: "Maicosuel", posicoes: ["MEI"], forca: 82 },
      { id: 'herrera', nome: "Herrera", posicoes: ["ATA"], forca: 81 },
      { id: 'loco-abreu', nome: "Loco Abreu", posicoes: ["ATA"], forca: 85 },
      { id: 'jobson', nome: "Jobson", posicoes: ["ATA"], forca: 80 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { id: 'edno', nome: "Edno", posicoes: ["ATA"], forca: 77 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 79 }
    ]
  },

  // ===== Edição 2009 =====

  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Flamengo",
    jogadores: [
      { id: 'bruno', nome: "Bruno", posicoes: ["GOL"], forca: 86 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 85 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 81 },
      { id: 'alvaro', nome: "Álvaro", posicoes: ["ZAG"], forca: 78 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 82 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { id: 'ibson', nome: "Ibson", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'kleberson', nome: "Kleberson", posicoes: ["MC"], forca: 82 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 89 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'adriano', nome: "Adriano", posicoes: ["ATA"], forca: 91 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'obina', nome: "Obina", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 85 },
      { id: 'lauro', nome: "Lauro", posicoes: ["GOL"], forca: 80 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 85 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 82 },
      { id: 'guinazu', nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'dalessandro', nome: "D'Alessandro", posicoes: ["MEI"], forca: 88 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA","PE"], forca: 89 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 82 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["LE"], forca: 79 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 84 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["MC"], forca: 82 },
      { id: 'ramires', nome: "Ramires", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 85 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 87 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 80 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 80 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Avaí",
    jogadores: [
      { id: 'eduardo-martini', nome: "Eduardo Martini", posicoes: ["GOL"], forca: 80 },
      { id: 'luis-ricardo', nome: "Luís Ricardo", posicoes: ["LD"], forca: 77 },
      { id: 'emerson-nunes', nome: "Emerson Nunes", posicoes: ["ZAG"], forca: 78 },
      { id: 'augusto', nome: "Augusto", posicoes: ["ZAG"], forca: 77 },
      { id: 'eltinho', nome: "Eltinho", posicoes: ["LE"], forca: 78 },
      { id: 'leo-gago', nome: "Léo Gago", posicoes: ["VOL"], forca: 81 },
      { id: 'ferdinando', nome: "Ferdinando", posicoes: ["VOL"], forca: 77 },
      { id: 'marcus-winicius', nome: "Marcus Winícius", posicoes: ["MC"], forca: 78 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["MEI"], forca: 85 },
      { id: 'caio', nome: "Caio", posicoes: ["MEI"], forca: 80 },
      { id: 'muriqui', nome: "Muriqui", posicoes: ["PE"], forca: 82 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 81 },
      { id: 'vandinho', nome: "Vandinho", posicoes: ["ATA"], forca: 79 },
      { id: 'roberto', nome: "Roberto", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2008 =====

  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 87 },
      { id: 'patricio', nome: "Patrício", posicoes: ["LD"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 82 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 84 },
      { id: 'pereira', nome: "Pereira", posicoes: ["ZAG"], forca: 79 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE"], forca: 79 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { id: 'william-magrao', nome: "William Magrão", posicoes: ["VOL"], forca: 80 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 81 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 82 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 79 },
      { id: 'perea', nome: "Perea", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 82 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["LE"], forca: 79 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 84 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["MC"], forca: 82 },
      { id: 'ramires', nome: "Ramires", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 85 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 87 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 80 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 80 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Flamengo",
    jogadores: [
      { id: 'bruno', nome: "Bruno", posicoes: ["GOL"], forca: 86 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 85 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 81 },
      { id: 'alvaro', nome: "Álvaro", posicoes: ["ZAG"], forca: 78 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 82 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { id: 'ibson', nome: "Ibson", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'kleberson', nome: "Kleberson", posicoes: ["MC"], forca: 82 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 89 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'adriano', nome: "Adriano", posicoes: ["ATA"], forca: 91 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'obina', nome: "Obina", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 85 },
      { id: 'lauro', nome: "Lauro", posicoes: ["GOL"], forca: 80 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 85 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 82 },
      { id: 'guinazu', nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'dalessandro', nome: "D'Alessandro", posicoes: ["MEI"], forca: 88 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA","PE"], forca: 89 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 88 }
    ]
  },

  // ===== Edição 2007 =====

  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { id: 'denis', nome: "Denis", posicoes: ["LD"], forca: 79 },
      { id: 'adailton', nome: "Adaílton", posicoes: ["ZAG"], forca: 80 },
      { id: 'domingos', nome: "Domingos", posicoes: ["ZAG"], forca: 78 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 85 },
      { id: 'rodrigo-souto', nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 82 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["VOL"], forca: 82 },
      { id: 'cleber-santana', nome: "Cléber Santana", posicoes: ["MC"], forca: 85 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 87 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 81 },
      { id: 'jonas', nome: "Jonas", posicoes: ["PE"], forca: 79 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 86 },
      { id: 'marcos-aurelio', nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 80 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Flamengo",
    jogadores: [
      { id: 'bruno', nome: "Bruno", posicoes: ["GOL"], forca: 86 },
      { id: 'leo-moura', nome: "Léo Moura", posicoes: ["LD"], forca: 85 },
      { id: 'ronaldo-angelim', nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 82 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 81 },
      { id: 'alvaro', nome: "Álvaro", posicoes: ["ZAG"], forca: 78 },
      { id: 'juan', nome: "Juan", posicoes: ["LE"], forca: 82 },
      { id: 'willians', nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { id: 'ibson', nome: "Ibson", posicoes: ["VOL","MC"], forca: 84 },
      { id: 'kleberson', nome: "Kleberson", posicoes: ["MC"], forca: 82 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 89 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 80 },
      { id: 'adriano', nome: "Adriano", posicoes: ["ATA"], forca: 91 },
      { id: 'emerson-sheik', nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 84 },
      { id: 'obina', nome: "Obina", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Fluminense",
    jogadores: [
      { id: 'fernando-henrique', nome: "Fernando Henrique", posicoes: ["GOL"], forca: 80 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["LD"], forca: 77 },
      { id: 'thiago-silva', nome: "Thiago Silva", posicoes: ["ZAG"], forca: 87 },
      { id: 'luiz-alberto', nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 81 },
      { id: 'junior-cesar', nome: "Júnior César", posicoes: ["LE"], forca: 82 },
      { id: 'arouca', nome: "Arouca", posicoes: ["VOL"], forca: 82 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["VOL"], forca: 79 },
      { id: 'conca', nome: "Conca", posicoes: ["MC"], forca: 85 },
      { id: 'thiago-neves', nome: "Thiago Neves", posicoes: ["MEI"], forca: 87 },
      { id: 'cicero', nome: "Cícero", posicoes: ["MEI"], forca: 82 },
      { id: 'maicon', nome: "Maicon", posicoes: ["PD"], forca: 78 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 87 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 85 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'fabio', nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { id: 'jonathan', nome: "Jonathan", posicoes: ["LD"], forca: 82 },
      { id: 'leonardo-silva', nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'thiago-heleno', nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["LE"], forca: 79 },
      { id: 'marquinhos-parana', nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 84 },
      { id: 'henrique', nome: "Henrique", posicoes: ["VOL","MC"], forca: 81 },
      { id: 'fabricio', nome: "Fabrício", posicoes: ["MC"], forca: 82 },
      { id: 'ramires', nome: "Ramires", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'wagner', nome: "Wagner", posicoes: ["MEI"], forca: 85 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["MEI"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 87 },
      { id: 'wellington-paulista', nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { id: 'thiago-ribeiro', nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 87 },
      { id: 'patricio', nome: "Patrício", posicoes: ["LD"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 82 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 84 },
      { id: 'pereira', nome: "Pereira", posicoes: ["ZAG"], forca: 79 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE"], forca: 79 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { id: 'william-magrao', nome: "William Magrão", posicoes: ["VOL"], forca: 80 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 81 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 82 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 79 },
      { id: 'perea', nome: "Perea", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },

  // ===== Edição 2006 =====

  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { id: 'bosco', nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { id: 'jean', nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { id: 'alex-silva', nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { id: 'jorge-wagner', nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { id: 'richarlyson', nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { id: 'hernanes', nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'borges', nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 85 },
      { id: 'lauro', nome: "Lauro", posicoes: ["GOL"], forca: 80 },
      { id: 'bolivar', nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 84 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 85 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 82 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 82 },
      { id: 'guinazu', nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 87 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'dalessandro', nome: "D'Alessandro", posicoes: ["MEI"], forca: 88 },
      { id: 'andrezinho', nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 81 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA","PE"], forca: 89 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Grêmio",
    jogadores: [
      { id: 'victor', nome: "Victor", posicoes: ["GOL"], forca: 87 },
      { id: 'patricio', nome: "Patrício", posicoes: ["LD"], forca: 78 },
      { id: 'leo', nome: "Léo", posicoes: ["ZAG"], forca: 82 },
      { id: 'rever', nome: "Réver", posicoes: ["ZAG"], forca: 84 },
      { id: 'pereira', nome: "Pereira", posicoes: ["ZAG"], forca: 79 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["LE"], forca: 79 },
      { id: 'rafael-carioca', nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { id: 'william-magrao', nome: "William Magrão", posicoes: ["VOL"], forca: 80 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 81 },
      { id: 'jonas', nome: "Jonas", posicoes: ["ATA"], forca: 82 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 79 },
      { id: 'perea', nome: "Perea", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { id: 'denis', nome: "Denis", posicoes: ["LD"], forca: 79 },
      { id: 'adailton', nome: "Adaílton", posicoes: ["ZAG"], forca: 80 },
      { id: 'domingos', nome: "Domingos", posicoes: ["ZAG"], forca: 78 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 85 },
      { id: 'rodrigo-souto', nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 82 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["VOL"], forca: 82 },
      { id: 'cleber-santana', nome: "Cléber Santana", posicoes: ["MC"], forca: 85 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["MEI"], forca: 87 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 81 },
      { id: 'jonas', nome: "Jonas", posicoes: ["PE"], forca: 79 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 86 },
      { id: 'marcos-aurelio', nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 80 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Paraná",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 79 },
      { id: 'edinho', nome: "Edinho", posicoes: ["LD"], forca: 77 },
      { id: 'daniel-marques', nome: "Daniel Marques", posicoes: ["ZAG"], forca: 77 },
      { id: 'neguette', nome: "Neguette", posicoes: ["ZAG"], forca: 76 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LE"], forca: 78 },
      { id: 'beto', nome: "Beto", posicoes: ["VOL"], forca: 79 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { id: 'everton', nome: "Éverton", posicoes: ["MC"], forca: 78 },
      { id: 'maicossuel', nome: "Maicossuel", posicoes: ["MEI"], forca: 80 },
      { id: 'dinelson', nome: "Dinélson", posicoes: ["MEI"], forca: 79 },
      { id: 'marcel', nome: "Marcel", posicoes: ["PD"], forca: 78 },
      { id: 'josiel', nome: "Josiel", posicoes: ["ATA"], forca: 80 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ATA"], forca: 77 },
      { id: 'emerson', nome: "Emerson", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Vasco",
    jogadores: [
      { id: 'helton', nome: "Hélton", posicoes: ["GOL"], forca: 86 },
      { id: 'jorginho-paulista', nome: "Jorginho Paulista", posicoes: ["LD"], forca: 80 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 87 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 89 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 87 },
      { id: 'juninho-paulista', nome: "Juninho Paulista", posicoes: ["MEI"], forca: 87 },
      { id: 'viola', nome: "Viola", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 91 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 84 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 82 }
    ]
  },

  // ===== Edição 2005 =====

  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { id: 'anderson', nome: "Anderson", posicoes: ["ZAG"], forca: 80 },
      { id: 'betao', nome: "Betão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 80 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 84 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["MC"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 87 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 82 },
      { id: 'tevez', nome: "Tevez", posicoes: ["ATA"], forca: 92 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 86 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { id: 'elder-granja', nome: "Élder Granja", posicoes: ["LD"], forca: 80 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vinicius', nome: "Vinícius", posicoes: ["ZAG"], forca: 78 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 79 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { id: 'diogo-rincon', nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'daniel-carvalho', nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'wellington', nome: "Wellington", posicoes: ["PD"], forca: 77 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 85 },
      { id: 'diego', nome: "Diego", posicoes: ["ATA"], forca: 77 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Goiás",
    jogadores: [
      { id: 'harlei', nome: "Harlei", posicoes: ["GOL"], forca: 84 },
      { id: 'vitor', nome: "Vitor", posicoes: ["LD"], forca: 78 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["LE"], forca: 81 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MC"], forca: 82 },
      { id: 'tulio', nome: "Túlio", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["MEI"], forca: 85 },
      { id: 'iarley', nome: "Iarley", posicoes: ["MEI"], forca: 82 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 86 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["ATA"], forca: 82 },
      { id: 'dimba', nome: "Dimba", posicoes: ["ATA"], forca: 84 },
      { id: 'welliton', nome: "Welliton", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 80 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 80 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Fluminense",
    jogadores: [
      { id: 'murilo', nome: "Murilo", posicoes: ["GOL"], forca: 80 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 79 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 79 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["LE"], forca: 78 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 81 },
      { id: 'fernando-diniz', nome: "Fernando Diniz", posicoes: ["MC"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 86 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 86 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 84 },
      { id: 'tuta', nome: "Tuta", posicoes: ["ATA"], forca: 80 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'diego', nome: "Diego", posicoes: ["GOL"], forca: 82 },
      { id: 'jancarlos', nome: "Jancarlos", posicoes: ["LD"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 82 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { id: 'marcao', nome: "Marcão", posicoes: ["LE"], forca: 79 },
      { id: 'alan-bahia', nome: "Alan Bahia", posicoes: ["VOL"], forca: 82 },
      { id: 'pingo', nome: "Pingo", posicoes: ["VOL"], forca: 78 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MC"], forca: 86 },
      { id: 'jadson', nome: "Jádson", posicoes: ["MEI"], forca: 84 },
      { id: 'evandro', nome: "Evandro", posicoes: ["MEI"], forca: 80 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PD"], forca: 85 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 89 },
      { id: 'lima', nome: "Lima", posicoes: ["ATA"], forca: 80 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 2004 =====

  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["LD"], forca: 81 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 84 },
      { id: 'paulo-almeida', nome: "Paulo Almeida", posicoes: ["VOL"], forca: 80 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 85 },
      { id: 'elano', nome: "Elano", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 90 },
      { id: 'robinho', nome: "Robinho", posicoes: ["ATA","PE"], forca: 90 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 86 },
      { id: 'alberto', nome: "Alberto", posicoes: ["ATA"], forca: 77 },
      { id: 'leo-lima', nome: "Léo Lima", posicoes: ["MEI"], forca: 79 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'diego', nome: "Diego", posicoes: ["GOL"], forca: 82 },
      { id: 'jancarlos', nome: "Jancarlos", posicoes: ["LD"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 82 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { id: 'marcao', nome: "Marcão", posicoes: ["LE"], forca: 79 },
      { id: 'alan-bahia', nome: "Alan Bahia", posicoes: ["VOL"], forca: 82 },
      { id: 'pingo', nome: "Pingo", posicoes: ["VOL"], forca: 78 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MC"], forca: 86 },
      { id: 'jadson', nome: "Jádson", posicoes: ["MEI"], forca: 84 },
      { id: 'evandro', nome: "Evandro", posicoes: ["MEI"], forca: 80 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["PD"], forca: 85 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 89 },
      { id: 'lima', nome: "Lima", posicoes: ["ATA"], forca: 80 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 88 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 85 },
      { id: 'diego-lugano', nome: "Diego Lugano", posicoes: ["ZAG"], forca: 84 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 80 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 81 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 81 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'luis-fabiano', nome: "Luís Fabiano", posicoes: ["ATA"], forca: 89 },
      { id: 'grafite', nome: "Grafite", posicoes: ["ATA"], forca: 82 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 85 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 80 },
      { id: 'elder-granja', nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { id: 'armero', nome: "Armero", posicoes: ["LE"], forca: 80 },
      { id: 'pierre', nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { id: 'cleiton-xavier', nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego-souza', nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { id: 'valdivia', nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { id: 'kleber', nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { id: 'vagner-love', nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { id: 'anderson', nome: "Anderson", posicoes: ["ZAG"], forca: 80 },
      { id: 'betao', nome: "Betão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 80 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 84 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["MC"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 87 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 82 },
      { id: 'tevez', nome: "Tevez", posicoes: ["ATA"], forca: 92 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 86 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Goiás",
    jogadores: [
      { id: 'harlei', nome: "Harlei", posicoes: ["GOL"], forca: 84 },
      { id: 'vitor', nome: "Vitor", posicoes: ["LD"], forca: 78 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["LE"], forca: 81 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MC"], forca: 82 },
      { id: 'tulio', nome: "Túlio", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["MEI"], forca: 85 },
      { id: 'iarley', nome: "Iarley", posicoes: ["MEI"], forca: 82 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 86 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["ATA"], forca: 82 },
      { id: 'dimba', nome: "Dimba", posicoes: ["ATA"], forca: 84 },
      { id: 'welliton', nome: "Welliton", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 2003 =====

  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'gomes', nome: "Gomes", posicoes: ["GOL"], forca: 87 },
      { id: 'maicon', nome: "Maicon", posicoes: ["LD"], forca: 82 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 86 },
      { id: 'edu-dracena', nome: "Edu Dracena", posicoes: ["ZAG"], forca: 84 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LE"], forca: 81 },
      { id: 'augusto-recife', nome: "Augusto Recife", posicoes: ["VOL"], forca: 80 },
      { id: 'maldonado', nome: "Maldonado", posicoes: ["MC"], forca: 82 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 93 },
      { id: 'aristizabal', nome: "Aristizábal", posicoes: ["MEI","PE"], forca: 82 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["PD"], forca: 80 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 88 },
      { id: 'mota', nome: "Mota", posicoes: ["ATA"], forca: 82 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["LD"], forca: 81 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 84 },
      { id: 'paulo-almeida', nome: "Paulo Almeida", posicoes: ["VOL"], forca: 80 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 85 },
      { id: 'elano', nome: "Elano", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 90 },
      { id: 'robinho', nome: "Robinho", posicoes: ["ATA","PE"], forca: 90 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 86 },
      { id: 'alberto', nome: "Alberto", posicoes: ["ATA"], forca: 77 },
      { id: 'leo-lima', nome: "Léo Lima", posicoes: ["MEI"], forca: 79 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 88 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 85 },
      { id: 'diego-lugano', nome: "Diego Lugano", posicoes: ["ZAG"], forca: 84 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 80 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 81 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 81 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'luis-fabiano', nome: "Luís Fabiano", posicoes: ["ATA"], forca: 89 },
      { id: 'grafite', nome: "Grafite", posicoes: ["ATA"], forca: 82 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 85 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Caetano",
    jogadores: [
      { id: 'silvio-luiz', nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 82 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 81 },
      { id: 'daniel', nome: "Daniel", posicoes: ["ZAG"], forca: 80 },
      { id: 'dininho', nome: "Dininho", posicoes: ["ZAG"], forca: 82 },
      { id: 'rubens-cardoso', nome: "Rubens Cardoso", posicoes: ["LE"], forca: 81 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 86 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 82 },
      { id: 'adaozinho', nome: "Adãozinho", posicoes: ["MEI"], forca: 81 },
      { id: 'anailson', nome: "Anaílson", posicoes: ["MEI"], forca: 81 },
      { id: 'wagner', nome: "Wágner", posicoes: ["MC"], forca: 78 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 85 },
      { id: 'adhemar', nome: "Adhemar", posicoes: ["ATA"], forca: 86 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 79 },
      { id: 'esquerdinha', nome: "Esquerdinha", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Coritiba",
    jogadores: [
      { id: 'fernando', nome: "Fernando", posicoes: ["GOL"], forca: 80 },
      { id: 'cesar-prates', nome: "César Prates", posicoes: ["LD"], forca: 80 },
      { id: 'danilo', nome: "Danilo", posicoes: ["ZAG"], forca: 80 },
      { id: 'reginaldo-nascimento', nome: "Reginaldo Nascimento", posicoes: ["ZAG"], forca: 79 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LE"], forca: 79 },
      { id: 'roberto-brum', nome: "Roberto Brum", posicoes: ["VOL"], forca: 80 },
      { id: 'tcheco', nome: "Tcheco", posicoes: ["MC"], forca: 82 },
      { id: 'lima', nome: "Lima", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'jackson', nome: "Jackson", posicoes: ["MEI"], forca: 80 },
      { id: 'marcel', nome: "Marcel", posicoes: ["ATA"], forca: 82 },
      { id: 'da-silva', nome: "Da Silva", posicoes: ["ATA"], forca: 80 },
      { id: 'edu-sales', nome: "Edu Sales", posicoes: ["ATA"], forca: 77 },
      { id: 'adriano', nome: "Adriano", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Internacional",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { id: 'elder-granja', nome: "Élder Granja", posicoes: ["LD"], forca: 80 },
      { id: 'indio', nome: "Índio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vinicius', nome: "Vinícius", posicoes: ["ZAG"], forca: 78 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { id: 'edinho', nome: "Edinho", posicoes: ["VOL"], forca: 79 },
      { id: 'magrao', nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { id: 'diogo-rincon', nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { id: 'daniel-carvalho', nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'wellington', nome: "Wellington", posicoes: ["PD"], forca: 77 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 85 },
      { id: 'diego', nome: "Diego", posicoes: ["ATA"], forca: 77 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2002 =====

  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Santos",
    jogadores: [
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { id: 'maurinho', nome: "Maurinho", posicoes: ["LD"], forca: 81 },
      { id: 'alex', nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 84 },
      { id: 'paulo-almeida', nome: "Paulo Almeida", posicoes: ["VOL"], forca: 80 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 85 },
      { id: 'elano', nome: "Elano", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'diego', nome: "Diego", posicoes: ["MEI"], forca: 90 },
      { id: 'robinho', nome: "Robinho", posicoes: ["ATA","PE"], forca: 90 },
      { id: 'ricardo-oliveira', nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 86 },
      { id: 'alberto', nome: "Alberto", posicoes: ["ATA"], forca: 77 },
      { id: 'leo-lima', nome: "Léo Lima", posicoes: ["MEI"], forca: 79 },
      { id: 'william', nome: "William", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { id: 'fabio-costa', nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { id: 'anderson', nome: "Anderson", posicoes: ["ZAG"], forca: 80 },
      { id: 'betao', nome: "Betão", posicoes: ["ZAG"], forca: 78 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 80 },
      { id: 'marcelo-mattos', nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 84 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["MC"], forca: 85 },
      { id: 'renato', nome: "Renato", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 87 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MEI"], forca: 82 },
      { id: 'tevez', nome: "Tevez", posicoes: ["ATA"], forca: 92 },
      { id: 'nilmar', nome: "Nilmar", posicoes: ["ATA"], forca: 86 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { id: 'anderson-lima', nome: "Anderson Lima", posicoes: ["LD"], forca: 82 },
      { id: 'polga', nome: "Polga", posicoes: ["ZAG"], forca: 82 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ZAG"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 81 },
      { id: 'tinga', nome: "Tinga", posicoes: ["VOL"], forca: 84 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 79 },
      { id: 'fabio-rochemback', nome: "Fábio Rochemback", posicoes: ["MC"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MEI"], forca: 80 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 86 },
      { id: 'luis-mario', nome: "Luís Mário", posicoes: ["ATA"], forca: 80 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 78 },
      { id: 'christian', nome: "Christian", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Fluminense",
    jogadores: [
      { id: 'murilo', nome: "Murilo", posicoes: ["GOL"], forca: 80 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 79 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 79 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["LE"], forca: 78 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 81 },
      { id: 'fernando-diniz', nome: "Fernando Diniz", posicoes: ["MC"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 86 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 86 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 84 },
      { id: 'tuta', nome: "Tuta", posicoes: ["ATA"], forca: 80 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 88 },
      { id: 'cicinho', nome: "Cicinho", posicoes: ["LD"], forca: 85 },
      { id: 'diego-lugano', nome: "Diego Lugano", posicoes: ["ZAG"], forca: 84 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 80 },
      { id: 'gustavo-nery', nome: "Gustavo Nery", posicoes: ["LE"], forca: 81 },
      { id: 'mineiro', nome: "Mineiro", posicoes: ["VOL"], forca: 82 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 81 },
      { id: 'julio-baptista', nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'kaka', nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { id: 'luis-fabiano', nome: "Luís Fabiano", posicoes: ["ATA"], forca: 89 },
      { id: 'grafite', nome: "Grafite", posicoes: ["ATA"], forca: 82 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 85 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { id: 'mancini', nome: "Mancini", posicoes: ["LD"], forca: 85 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 85 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 80 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 87 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["MC"], forca: 82 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 84 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 88 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 87 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ATA"], forca: 84 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 2001 =====

  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 80 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 79 },
      { id: 'nem', nome: "Nem", posicoes: ["ZAG"], forca: 80 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["ZAG"], forca: 79 },
      { id: 'kleber', nome: "Kleber", posicoes: ["LE"], forca: 80 },
      { id: 'cocito', nome: "Cocito", posicoes: ["VOL"], forca: 82 },
      { id: 'kleberson', nome: "Kléberson", posicoes: ["MC"], forca: 85 },
      { id: 'adriano-gabiru', nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MEI"], forca: 80 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["PD"], forca: 88 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 82 },
      { id: 'ilan', nome: "Ilán", posicoes: ["ATA"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA"], forca: 80 },
      { id: 'ivan', nome: "Ivan", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "São Caetano",
    jogadores: [
      { id: 'silvio-luiz', nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 82 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 81 },
      { id: 'daniel', nome: "Daniel", posicoes: ["ZAG"], forca: 80 },
      { id: 'dininho', nome: "Dininho", posicoes: ["ZAG"], forca: 82 },
      { id: 'rubens-cardoso', nome: "Rubens Cardoso", posicoes: ["LE"], forca: 81 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 86 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 82 },
      { id: 'adaozinho', nome: "Adãozinho", posicoes: ["MEI"], forca: 81 },
      { id: 'anailson', nome: "Anaílson", posicoes: ["MEI"], forca: 81 },
      { id: 'wagner', nome: "Wágner", posicoes: ["MC"], forca: 78 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 85 },
      { id: 'adhemar', nome: "Adhemar", posicoes: ["ATA"], forca: 86 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 79 },
      { id: 'esquerdinha', nome: "Esquerdinha", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { id: 'mancini', nome: "Mancini", posicoes: ["LD"], forca: 85 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 85 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 80 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 87 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["MC"], forca: 82 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 84 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 88 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 87 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ATA"], forca: 84 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Fluminense",
    jogadores: [
      { id: 'murilo', nome: "Murilo", posicoes: ["GOL"], forca: 80 },
      { id: 'gabriel', nome: "Gabriel", posicoes: ["LD"], forca: 79 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 79 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["LE"], forca: 78 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 81 },
      { id: 'fernando-diniz', nome: "Fernando Diniz", posicoes: ["MC"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 86 },
      { id: 'petkovic', nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 86 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 84 },
      { id: 'tuta', nome: "Tuta", posicoes: ["ATA"], forca: 80 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { id: 'anderson-lima', nome: "Anderson Lima", posicoes: ["LD"], forca: 82 },
      { id: 'polga', nome: "Polga", posicoes: ["ZAG"], forca: 82 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ZAG"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 81 },
      { id: 'tinga', nome: "Tinga", posicoes: ["VOL"], forca: 84 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 79 },
      { id: 'fabio-rochemback', nome: "Fábio Rochemback", posicoes: ["MC"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MEI"], forca: 80 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 86 },
      { id: 'luis-mario', nome: "Luís Mário", posicoes: ["ATA"], forca: 80 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 78 },
      { id: 'christian', nome: "Christian", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Vasco",
    jogadores: [
      { id: 'helton', nome: "Hélton", posicoes: ["GOL"], forca: 86 },
      { id: 'jorginho-paulista', nome: "Jorginho Paulista", posicoes: ["LD"], forca: 80 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 87 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 89 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 87 },
      { id: 'juninho-paulista', nome: "Juninho Paulista", posicoes: ["MEI"], forca: 87 },
      { id: 'viola', nome: "Viola", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 91 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 84 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 82 }
    ]
  },

  // ===== Edição 2000 =====

  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Vasco",
    jogadores: [
      { id: 'helton', nome: "Hélton", posicoes: ["GOL"], forca: 86 },
      { id: 'jorginho-paulista', nome: "Jorginho Paulista", posicoes: ["LD"], forca: 80 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 87 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 89 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 87 },
      { id: 'juninho-paulista', nome: "Juninho Paulista", posicoes: ["MEI"], forca: 87 },
      { id: 'viola', nome: "Viola", posicoes: ["MEI","ATA"], forca: 82 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 91 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 84 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "São Caetano",
    jogadores: [
      { id: 'silvio-luiz', nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 82 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 81 },
      { id: 'daniel', nome: "Daniel", posicoes: ["ZAG"], forca: 80 },
      { id: 'dininho', nome: "Dininho", posicoes: ["ZAG"], forca: 82 },
      { id: 'rubens-cardoso', nome: "Rubens Cardoso", posicoes: ["LE"], forca: 81 },
      { id: 'marcos-senna', nome: "Marcos Senna", posicoes: ["VOL"], forca: 86 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 82 },
      { id: 'adaozinho', nome: "Adãozinho", posicoes: ["MEI"], forca: 81 },
      { id: 'anailson', nome: "Anaílson", posicoes: ["MEI"], forca: 81 },
      { id: 'wagner', nome: "Wágner", posicoes: ["MC"], forca: 78 },
      { id: 'somalia', nome: "Somália", posicoes: ["ATA"], forca: 85 },
      { id: 'adhemar', nome: "Adhemar", posicoes: ["ATA"], forca: 86 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 79 },
      { id: 'esquerdinha', nome: "Esquerdinha", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 88 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LD"], forca: 79 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 80 },
      { id: 'sorin', nome: "Sorín", posicoes: ["LE"], forca: 85 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["VOL"], forca: 81 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'muller', nome: "Muller", posicoes: ["PD"], forca: 82 },
      { id: 'geovanni', nome: "Geovanni", posicoes: ["PE"], forca: 84 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 87 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'fabio-junior', nome: "Fábio Júnior", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 80 },
      { id: 'alessandro', nome: "Alessandro", posicoes: ["LD"], forca: 79 },
      { id: 'nem', nome: "Nem", posicoes: ["ZAG"], forca: 80 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["ZAG"], forca: 79 },
      { id: 'kleber', nome: "Kleber", posicoes: ["LE"], forca: 80 },
      { id: 'cocito', nome: "Cocito", posicoes: ["VOL"], forca: 82 },
      { id: 'kleberson', nome: "Kléberson", posicoes: ["MC"], forca: 85 },
      { id: 'adriano-gabiru', nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'fernandinho', nome: "Fernandinho", posicoes: ["MEI"], forca: 80 },
      { id: 'alex-mineiro', nome: "Alex Mineiro", posicoes: ["PD"], forca: 88 },
      { id: 'kleber-pereira', nome: "Kléber Pereira", posicoes: ["ATA"], forca: 82 },
      { id: 'ilan', nome: "Ilán", posicoes: ["ATA"], forca: 82 },
      { id: 'dagoberto', nome: "Dagoberto", posicoes: ["ATA"], forca: 80 },
      { id: 'ivan', nome: "Ivan", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 87 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { id: 'anderson-lima', nome: "Anderson Lima", posicoes: ["LD"], forca: 82 },
      { id: 'polga', nome: "Polga", posicoes: ["ZAG"], forca: 82 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ZAG"], forca: 78 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 81 },
      { id: 'tinga', nome: "Tinga", posicoes: ["VOL"], forca: 84 },
      { id: 'fernando', nome: "Fernando", posicoes: ["VOL"], forca: 79 },
      { id: 'fabio-rochemback', nome: "Fábio Rochemback", posicoes: ["MC"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MEI"], forca: 80 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 86 },
      { id: 'luis-mario', nome: "Luís Mário", posicoes: ["ATA"], forca: 80 },
      { id: 'warley', nome: "Warley", posicoes: ["ATA"], forca: 78 },
      { id: 'christian', nome: "Christian", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1999 =====

  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 89 },
      { id: 'indio', nome: "Índio", posicoes: ["LD"], forca: 79 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 85 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 81 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["VOL"], forca: 87 },
      { id: 'freddy-rincon', nome: "Freddy Rincón", posicoes: ["MC"], forca: 86 },
      { id: 'edu', nome: "Edu", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 91 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 86 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 87 },
      { id: 'luizao', nome: "Luizão", posicoes: ["ATA"], forca: 88 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 79 },
      { id: 'fernando-baiano', nome: "Fernando Baiano", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { id: 'mancini', nome: "Mancini", posicoes: ["LD"], forca: 85 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 85 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 80 },
      { id: 'gilberto-silva', nome: "Gilberto Silva", posicoes: ["VOL"], forca: 87 },
      { id: 'lincoln', nome: "Lincoln", posicoes: ["MC"], forca: 82 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 84 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 88 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 87 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ATA"], forca: 84 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Vitória",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["LD"], forca: 79 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ZAG"], forca: 78 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LE"], forca: 79 },
      { id: 'roberto-cavalo', nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 82 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MC"], forca: 82 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 85 },
      { id: 'bebeto-campos', nome: "Bebeto Campos", posicoes: ["MEI"], forca: 79 },
      { id: 'oseas', nome: "Oséas", posicoes: ["PD"], forca: 80 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { id: 'pichetti', nome: "Pichetti", posicoes: ["ATA"], forca: 80 },
      { id: 'nadson', nome: "Nadson", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "São Paulo",
    jogadores: [
      { id: 'rogerio-ceni', nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { id: 'belletti', nome: "Belletti", posicoes: ["LD"], forca: 82 },
      { id: 'edmilson', nome: "Edmílson", posicoes: ["ZAG"], forca: 85 },
      { id: 'rogerio-pinheiro', nome: "Rogério Pinheiro", posicoes: ["ZAG"], forca: 79 },
      { id: 'fabio-aurelio', nome: "Fábio Aurélio", posicoes: ["LE"], forca: 82 },
      { id: 'alexandre', nome: "Alexandre", posicoes: ["VOL"], forca: 79 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 81 },
      { id: 'souza', nome: "Souza", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 87 },
      { id: 'denilson', nome: "Denílson", posicoes: ["MEI","PE"], forca: 86 },
      { id: 'franca', nome: "França", posicoes: ["ATA"], forca: 87 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 84 },
      { id: 'aristizabal', nome: "Aristizábal", posicoes: ["ATA"], forca: 81 },
      { id: 'sandro-hiroshi', nome: "Sandro Hiroshi", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 87 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 88 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LD"], forca: 79 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 80 },
      { id: 'sorin', nome: "Sorín", posicoes: ["LE"], forca: 85 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["VOL"], forca: 81 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'muller', nome: "Muller", posicoes: ["PD"], forca: 82 },
      { id: 'geovanni', nome: "Geovanni", posicoes: ["PE"], forca: 84 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 87 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'fabio-junior', nome: "Fábio Júnior", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1998 =====

  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Corinthians",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 89 },
      { id: 'indio', nome: "Índio", posicoes: ["LD"], forca: 79 },
      { id: 'fabio-luciano', nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 85 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 81 },
      { id: 'kleber', nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { id: 'vampeta', nome: "Vampeta", posicoes: ["VOL"], forca: 87 },
      { id: 'freddy-rincon', nome: "Freddy Rincón", posicoes: ["MC"], forca: 86 },
      { id: 'edu', nome: "Edu", posicoes: ["MC","MEI"], forca: 82 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 91 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MEI"], forca: 86 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 87 },
      { id: 'luizao', nome: "Luizão", posicoes: ["ATA"], forca: 88 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 79 },
      { id: 'fernando-baiano', nome: "Fernando Baiano", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 88 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LD"], forca: 79 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["ZAG"], forca: 80 },
      { id: 'sorin', nome: "Sorín", posicoes: ["LE"], forca: 85 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["VOL"], forca: 81 },
      { id: 'valdo', nome: "Valdo", posicoes: ["MC"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { id: 'muller', nome: "Muller", posicoes: ["PD"], forca: 82 },
      { id: 'geovanni', nome: "Geovanni", posicoes: ["PE"], forca: 84 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 87 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'fabio-junior', nome: "Fábio Júnior", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Santos",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 84 },
      { id: 'baiano', nome: "Baiano", posicoes: ["LD"], forca: 80 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 79 },
      { id: 'argel', nome: "Argel", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 80 },
      { id: 'marcos-assuncao', nome: "Marcos Assunção", posicoes: ["VOL"], forca: 85 },
      { id: 'gallo', nome: "Gallo", posicoes: ["MC"], forca: 81 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["MEI"], forca: 80 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 88 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI","ATA"], forca: 76 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 85 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 82 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 80 },
      { id: 'edu', nome: "Edu", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Portuguesa",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 82 },
      { id: 'emerson', nome: "Emerson", posicoes: ["ZAG"], forca: 80 },
      { id: 'capone', nome: "Capone", posicoes: ["ZAG"], forca: 79 },
      { id: 'augusto', nome: "Augusto", posicoes: ["LE"], forca: 78 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["MC"], forca: 79 },
      { id: 'rodrigo-fabri', nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 86 },
      { id: 'caio', nome: "Caio", posicoes: ["MEI"], forca: 85 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PD"], forca: 85 },
      { id: 'leandro-amaral', nome: "Leandro Amaral", posicoes: ["ATA"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 85 },
      { id: 'tico', nome: "Tico", posicoes: ["ATA"], forca: 78 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 87 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Sport",
    jogadores: [
      { id: 'maizena', nome: "Maizena", posicoes: ["GOL"], forca: 80 },
      { id: 'russo', nome: "Russo", posicoes: ["LD"], forca: 79 },
      { id: 'sandro-blum', nome: "Sandro Blum", posicoes: ["ZAG"], forca: 78 },
      { id: 'erlon', nome: "Érlon", posicoes: ["ZAG"], forca: 77 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { id: 'leomar', nome: "Leomar", posicoes: ["VOL"], forca: 80 },
      { id: 'nildo', nome: "Nildo", posicoes: ["MC"], forca: 82 },
      { id: 'jackson', nome: "Jackson", posicoes: ["MC","MEI"], forca: 81 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["MEI"], forca: 80 },
      { id: 'carlinhos-bala', nome: "Carlinhos Bala", posicoes: ["PD"], forca: 77 },
      { id: 'robertinho', nome: "Robertinho", posicoes: ["ATA"], forca: 80 },
      { id: 'luis-muller', nome: "Luís Müller", posicoes: ["ATA"], forca: 78 },
      { id: 'heraldo', nome: "Heraldo", posicoes: ["ATA"], forca: 77 },
      { id: 'adriano', nome: "Adriano", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 1997 =====

  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Vasco",
    jogadores: [
      { id: 'carlos-germano', nome: "Carlos Germano", posicoes: ["GOL"], forca: 86 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 80 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'odvan', nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { id: 'felipe', nome: "Felipe", posicoes: ["LE"], forca: 86 },
      { id: 'nasa', nome: "Nasa", posicoes: ["VOL"], forca: 81 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'juninho-pernambucano', nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 88 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["MEI"], forca: 85 },
      { id: 'ramon', nome: "Ramon", posicoes: ["MEI"], forca: 82 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 93 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 85 },
      { id: 'donizete', nome: "Donizete", posicoes: ["ATA"], forca: 84 },
      { id: 'luizao', nome: "Luizão", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Palmeiras",
    jogadores: [
      { id: 'marcos', nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 87 },
      { id: 'roque-junior', nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'alex', nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { id: 'euller', nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { id: 'asprilla', nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Internacional",
    jogadores: [
      { id: 'andre', nome: "André", posicoes: ["GOL"], forca: 80 },
      { id: 'cesar-prates', nome: "César Prates", posicoes: ["LD"], forca: 82 },
      { id: 'gamarra', nome: "Gamarra", posicoes: ["ZAG"], forca: 87 },
      { id: 'aloisio', nome: "Aloísio", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["LE"], forca: 80 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 85 },
      { id: 'fernando', nome: "Fernando", posicoes: ["MC"], forca: 79 },
      { id: 'fabiano', nome: "Fabiano", posicoes: ["MEI"], forca: 78 },
      { id: 'christian', nome: "Christian", posicoes: ["MEI","ATA"], forca: 84 },
      { id: 'sergio-manoel', nome: "Sérgio Manoel", posicoes: ["PD"], forca: 80 },
      { id: 'fabiano-souza', nome: "Fabiano Souza", posicoes: ["ATA"], forca: 78 },
      { id: 'celso', nome: "Celso", posicoes: ["ATA"], forca: 77 },
      { id: 'luciano', nome: "Luciano", posicoes: ["PE"], forca: 77 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Santos",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 84 },
      { id: 'baiano', nome: "Baiano", posicoes: ["LD"], forca: 80 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 79 },
      { id: 'argel', nome: "Argel", posicoes: ["ZAG"], forca: 80 },
      { id: 'leo', nome: "Léo", posicoes: ["LE"], forca: 80 },
      { id: 'marcos-assuncao', nome: "Marcos Assunção", posicoes: ["VOL"], forca: 85 },
      { id: 'gallo', nome: "Gallo", posicoes: ["MC"], forca: 81 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["MEI"], forca: 80 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 88 },
      { id: 'elano', nome: "Elano", posicoes: ["MEI","ATA"], forca: 76 },
      { id: 'dodo', nome: "Dodô", posicoes: ["ATA"], forca: 85 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 82 },
      { id: 'deivid', nome: "Deivid", posicoes: ["ATA"], forca: 80 },
      { id: 'edu', nome: "Edu", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Flamengo",
    jogadores: [
      { id: 'clemer', nome: "Clemer", posicoes: ["GOL"], forca: 81 },
      { id: 'marcos-adriano', nome: "Marcos Adriano", posicoes: ["LD"], forca: 77 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 85 },
      { id: 'fabiano-eller', nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 78 },
      { id: 'athirson', nome: "Athirson", posicoes: ["LE"], forca: 82 },
      { id: 'leandro-avila', nome: "Leandro Ávila", posicoes: ["VOL"], forca: 80 },
      { id: 'iranildo', nome: "Iranildo", posicoes: ["MC"], forca: 81 },
      { id: 'savio', nome: "Sávio", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 85 },
      { id: 'romario', nome: "Romário", posicoes: ["MEI","ATA"], forca: 91 },
      { id: 'lucio', nome: "Lúcio", posicoes: ["PE"], forca: 78 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { id: 'rodrigo-mendes', nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 79 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'taffarel', nome: "Taffarel", posicoes: ["GOL"], forca: 86 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 81 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 85 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["MEI"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { id: 'valdir-bigode', nome: "Valdir Bigode", posicoes: ["ATA"], forca: 81 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 80 }
    ]
  },

  // ===== Edição 1996 =====

  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'adilson-batista', nome: "Adílson Batista", posicoes: ["ZAG"], forca: 84 },
      { id: 'rivarola', nome: "Rivarola", posicoes: ["ZAG"], forca: 81 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 79 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL"], forca: 85 },
      { id: 'goiano', nome: "Goiano", posicoes: ["MC"], forca: 82 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 82 },
      { id: 'arilson', nome: "Arílson", posicoes: ["PD"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 86 },
      { id: 'jardel', nome: "Jardel", posicoes: ["ATA"], forca: 88 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 81 },
      { id: 'cuca', nome: "Cuca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Portuguesa",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 82 },
      { id: 'emerson', nome: "Emerson", posicoes: ["ZAG"], forca: 80 },
      { id: 'capone', nome: "Capone", posicoes: ["ZAG"], forca: 79 },
      { id: 'augusto', nome: "Augusto", posicoes: ["LE"], forca: 78 },
      { id: 'galeano', nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["MC"], forca: 79 },
      { id: 'rodrigo-fabri', nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 86 },
      { id: 'caio', nome: "Caio", posicoes: ["MEI"], forca: 85 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PD"], forca: 85 },
      { id: 'leandro-amaral', nome: "Leandro Amaral", posicoes: ["ATA"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 85 },
      { id: 'tico', nome: "Tico", posicoes: ["ATA"], forca: 78 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'taffarel', nome: "Taffarel", posicoes: ["GOL"], forca: 86 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { id: 'claudio-cacapa', nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { id: 'dede', nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 81 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 85 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["MEI"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { id: 'valdir-bigode', nome: "Valdir Bigode", posicoes: ["ATA"], forca: 81 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Goiás",
    jogadores: [
      { id: 'harlei', nome: "Harlei", posicoes: ["GOL"], forca: 84 },
      { id: 'vitor', nome: "Vitor", posicoes: ["LD"], forca: 78 },
      { id: 'andre-dias', nome: "André Dias", posicoes: ["ZAG"], forca: 80 },
      { id: 'fabao', nome: "Fabão", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-baier', nome: "Paulo Baier", posicoes: ["LE"], forca: 81 },
      { id: 'josue', nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { id: 'danilo', nome: "Danilo", posicoes: ["MC"], forca: 82 },
      { id: 'tulio', nome: "Túlio", posicoes: ["MC","MEI"], forca: 80 },
      { id: 'fernandao', nome: "Fernandão", posicoes: ["MEI"], forca: 85 },
      { id: 'iarley', nome: "Iarley", posicoes: ["MEI"], forca: 82 },
      { id: 'araujo', nome: "Araújo", posicoes: ["ATA"], forca: 86 },
      { id: 'alex-dias', nome: "Alex Dias", posicoes: ["ATA"], forca: 82 },
      { id: 'dimba', nome: "Dimba", posicoes: ["ATA"], forca: 84 },
      { id: 'welliton', nome: "Welliton", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 80 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { id: 'gelson-baresi', nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 78 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LE"], forca: 79 },
      { id: 'donizete-amorim', nome: "Donizete Amorim", posicoes: ["VOL"], forca: 80 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MC"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'roberto-gaucho', nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 82 },
      { id: 'cleison', nome: "Cleison", posicoes: ["PD"], forca: 79 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 86 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 80 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Palmeiras",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 87 },
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 77 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["LD"], forca: 80 },
      { id: 'cleber', nome: "Cléber", posicoes: ["ZAG"], forca: 86 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 82 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 89 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 87 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 85 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 90 },
      { id: 'edilson', nome: "Edílson", posicoes: ["PD"], forca: 87 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 90 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 }
    ]
  },

  // ===== Edição 1995 =====

  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Botafogo",
    jogadores: [
      { id: 'wagner', nome: "Wagner", posicoes: ["GOL"], forca: 85 },
      { id: 'perivaldo', nome: "Perivaldo", posicoes: ["LD"], forca: 79 },
      { id: 'goncalves', nome: "Gonçalves", posicoes: ["ZAG"], forca: 86 },
      { id: 'wilson-gottardo', nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'andre-silva', nome: "André Silva", posicoes: ["LE"], forca: 79 },
      { id: 'leandro-avila', nome: "Leandro Ávila", posicoes: ["VOL"], forca: 82 },
      { id: 'jamir', nome: "Jamir", posicoes: ["MC"], forca: 81 },
      { id: 'beto', nome: "Beto", posicoes: ["MEI"], forca: 84 },
      { id: 'carlos-alberto-dias', nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 80 },
      { id: 'sergio-manoel', nome: "Sérgio Manoel", posicoes: ["PD"], forca: 85 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 91 },
      { id: 'donizete', nome: "Donizete", posicoes: ["ATA"], forca: 85 },
      { id: 'valdeir', nome: "Valdeir", posicoes: ["ATA"], forca: 81 },
      { id: 'mauricinho', nome: "Mauricinho", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Santos",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 81 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["LD"], forca: 78 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 78 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 79 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["LE"], forca: 77 },
      { id: 'gallo', nome: "Gallo", posicoes: ["VOL"], forca: 82 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 80 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 89 },
      { id: 'robert', nome: "Robert", posicoes: ["MEI"], forca: 81 },
      { id: 'macedo', nome: "Macedo", posicoes: ["PD"], forca: 80 },
      { id: 'camanducaia', nome: "Camanducaia", posicoes: ["ATA"], forca: 79 },
      { id: 'guga', nome: "Guga", posicoes: ["ATA"], forca: 80 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 85 },
      { id: 'jamelli', nome: "Jamelli", posicoes: ["PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { id: 'vitor', nome: "Vítor", posicoes: ["LD"], forca: 80 },
      { id: 'cris', nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { id: 'gelson-baresi', nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 78 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LE"], forca: 79 },
      { id: 'donizete-amorim', nome: "Donizete Amorim", posicoes: ["VOL"], forca: 80 },
      { id: 'ricardinho', nome: "Ricardinho", posicoes: ["MC"], forca: 81 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'roberto-gaucho', nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 82 },
      { id: 'cleison', nome: "Cleison", posicoes: ["PD"], forca: 79 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 86 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { id: 'oseas', nome: "Oséas", posicoes: ["ATA"], forca: 80 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Fluminense",
    jogadores: [
      { id: 'wellerson', nome: "Wellerson", posicoes: ["GOL"], forca: 79 },
      { id: 'ronald', nome: "Ronald", posicoes: ["LD"], forca: 77 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcio-costa', nome: "Márcio Costa", posicoes: ["ZAG"], forca: 78 },
      { id: 'lira', nome: "Lira", posicoes: ["LE"], forca: 78 },
      { id: 'marcao', nome: "Marcão", posicoes: ["VOL"], forca: 80 },
      { id: 'djair', nome: "Djair", posicoes: ["MC"], forca: 80 },
      { id: 'roger', nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MEI"], forca: 81 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'ezio', nome: "Ézio", posicoes: ["ATA"], forca: 85 },
      { id: 'magno-alves', nome: "Magno Alves", posicoes: ["ATA"], forca: 79 },
      { id: 'roni', nome: "Roni", posicoes: ["ATA"], forca: 78 },
      { id: 'rogerinho', nome: "Rogerinho", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'adilson-batista', nome: "Adílson Batista", posicoes: ["ZAG"], forca: 84 },
      { id: 'rivarola', nome: "Rivarola", posicoes: ["ZAG"], forca: 81 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 79 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL"], forca: 85 },
      { id: 'goiano', nome: "Goiano", posicoes: ["MC"], forca: 82 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 82 },
      { id: 'arilson', nome: "Arílson", posicoes: ["PD"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 86 },
      { id: 'jardel', nome: "Jardel", posicoes: ["ATA"], forca: 88 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 81 },
      { id: 'cuca', nome: "Cuca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 85 },
      { id: 'andre-santos', nome: "André Santos", posicoes: ["LD"], forca: 78 },
      { id: 'celio-silva', nome: "Célio Silva", posicoes: ["ZAG"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 79 },
      { id: 'silvinho', nome: "Silvinho", posicoes: ["LE"], forca: 81 },
      { id: 'ze-elias', nome: "Zé Elias", posicoes: ["VOL"], forca: 84 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["MC"], forca: 79 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 89 },
      { id: 'souza', nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 87 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 80 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 80 },
      { id: 'neto', nome: "Neto", posicoes: ["PD"], forca: 85 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1994 =====

  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Palmeiras",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 87 },
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 77 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["LD"], forca: 80 },
      { id: 'cleber', nome: "Cléber", posicoes: ["ZAG"], forca: 86 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 82 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 89 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 87 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 85 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 90 },
      { id: 'edilson', nome: "Edílson", posicoes: ["PD"], forca: 87 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 90 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 79 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 80 },
      { id: 'pintado', nome: "Pintado", posicoes: ["LD"], forca: 79 },
      { id: 'andre-cruz', nome: "André Cruz", posicoes: ["ZAG"], forca: 85 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 86 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 78 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MC"], forca: 86 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 87 },
      { id: 'luizao', nome: "Luizão", posicoes: ["MEI"], forca: 80 },
      { id: 'tiba', nome: "Tiba", posicoes: ["PD"], forca: 79 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["ATA"], forca: 87 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 80 },
      { id: 'clovis', nome: "Clóvis", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 84 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 86 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MEI"], forca: 81 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["PD"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 81 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 80 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 79 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 78 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 79 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["MEI"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 79 },
      { id: 'charles-fabian', nome: "Charles Fabian", posicoes: ["ATA"], forca: 85 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 81 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 78 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1993 =====

  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Palmeiras",
    jogadores: [
      { id: 'velloso', nome: "Velloso", posicoes: ["GOL"], forca: 87 },
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 77 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["LD"], forca: 80 },
      { id: 'cleber', nome: "Cléber", posicoes: ["ZAG"], forca: 86 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 82 },
      { id: 'roberto-carlos', nome: "Roberto Carlos", posicoes: ["LE"], forca: 89 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["VOL"], forca: 87 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 85 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["MEI"], forca: 90 },
      { id: 'edilson', nome: "Edílson", posicoes: ["PD"], forca: 87 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 90 },
      { id: 'edmundo', nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Vitória",
    jogadores: [
      { id: 'dida', nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["LD"], forca: 79 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { id: 'alex-alves', nome: "Alex Alves", posicoes: ["ZAG"], forca: 78 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LE"], forca: 79 },
      { id: 'roberto-cavalo', nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 82 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MC"], forca: 82 },
      { id: 'ramon-menezes', nome: "Ramon Menezes", posicoes: ["MEI"], forca: 85 },
      { id: 'bebeto-campos', nome: "Bebeto Campos", posicoes: ["MEI"], forca: 79 },
      { id: 'oseas', nome: "Oséas", posicoes: ["PD"], forca: 80 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { id: 'edilson', nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { id: 'pichetti', nome: "Pichetti", posicoes: ["ATA"], forca: 80 },
      { id: 'nadson', nome: "Nadson", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 79 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Santos",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 81 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["LD"], forca: 78 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 78 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 79 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["LE"], forca: 77 },
      { id: 'gallo', nome: "Gallo", posicoes: ["VOL"], forca: 82 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 80 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 89 },
      { id: 'robert', nome: "Robert", posicoes: ["MEI"], forca: 81 },
      { id: 'macedo', nome: "Macedo", posicoes: ["PD"], forca: 80 },
      { id: 'camanducaia', nome: "Camanducaia", posicoes: ["ATA"], forca: 79 },
      { id: 'guga', nome: "Guga", posicoes: ["ATA"], forca: 80 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 85 },
      { id: 'jamelli', nome: "Jamelli", posicoes: ["PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 80 },
      { id: 'pintado', nome: "Pintado", posicoes: ["LD"], forca: 79 },
      { id: 'andre-cruz', nome: "André Cruz", posicoes: ["ZAG"], forca: 85 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 86 },
      { id: 'marcelo', nome: "Marcelo", posicoes: ["LE"], forca: 78 },
      { id: 'amaral', nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["MC"], forca: 86 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 87 },
      { id: 'luizao', nome: "Luizão", posicoes: ["MEI"], forca: 80 },
      { id: 'tiba', nome: "Tiba", posicoes: ["PD"], forca: 79 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["ATA"], forca: 87 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 82 },
      { id: 'guilherme', nome: "Guilherme", posicoes: ["ATA"], forca: 80 },
      { id: 'clovis', nome: "Clóvis", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 1992 =====

  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Flamengo",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 84 },
      { id: 'charles-guerreiro', nome: "Charles Guerreiro", posicoes: ["LD"], forca: 78 },
      { id: 'rondinelli', nome: "Rondinelli", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 82 },
      { id: 'pia', nome: "Piá", posicoes: ["LE"], forca: 77 },
      { id: 'uidemar', nome: "Uidemar", posicoes: ["VOL"], forca: 80 },
      { id: 'junior', nome: "Júnior", posicoes: ["MC"], forca: 87 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'gaucho', nome: "Gaúcho", posicoes: ["PD"], forca: 82 },
      { id: 'nelio', nome: "Nélio", posicoes: ["ATA"], forca: 80 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["ATA"], forca: 81 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Botafogo",
    jogadores: [
      { id: 'wagner', nome: "Wagner", posicoes: ["GOL"], forca: 85 },
      { id: 'perivaldo', nome: "Perivaldo", posicoes: ["LD"], forca: 79 },
      { id: 'goncalves', nome: "Gonçalves", posicoes: ["ZAG"], forca: 86 },
      { id: 'wilson-gottardo', nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'andre-silva', nome: "André Silva", posicoes: ["LE"], forca: 79 },
      { id: 'leandro-avila', nome: "Leandro Ávila", posicoes: ["VOL"], forca: 82 },
      { id: 'jamir', nome: "Jamir", posicoes: ["MC"], forca: 81 },
      { id: 'beto', nome: "Beto", posicoes: ["MEI"], forca: 84 },
      { id: 'carlos-alberto-dias', nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 80 },
      { id: 'sergio-manoel', nome: "Sérgio Manoel", posicoes: ["PD"], forca: 85 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 91 },
      { id: 'donizete', nome: "Donizete", posicoes: ["ATA"], forca: 85 },
      { id: 'valdeir', nome: "Valdeir", posicoes: ["ATA"], forca: 81 },
      { id: 'mauricinho', nome: "Mauricinho", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 85 },
      { id: 'luis-carlos-winck', nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 81 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'jorge-luis', nome: "Jorge Luís", posicoes: ["ZAG"], forca: 79 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { id: 'luisinho', nome: "Luisinho", posicoes: ["VOL"], forca: 81 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MC"], forca: 85 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MEI"], forca: 87 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 80 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 89 },
      { id: 'sorato', nome: "Sorato", posicoes: ["ATA"], forca: 82 },
      { id: 'valdir', nome: "Valdir", posicoes: ["ATA"], forca: 80 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Bragantino",
    jogadores: [
      { id: 'gilberto', nome: "Gilberto", posicoes: ["GOL"], forca: 82 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { id: 'silvio', nome: "Sílvio", posicoes: ["LE"], forca: 78 },
      { id: 'mauro-silva', nome: "Mauro Silva", posicoes: ["VOL"], forca: 88 },
      { id: 'tiba', nome: "Tiba", posicoes: ["MC"], forca: 80 },
      { id: 'joao-santos', nome: "João Santos", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'mazinho-oliveira', nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["PD"], forca: 78 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { id: 'franklin', nome: "Franklin", posicoes: ["ATA"], forca: 81 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Santos",
    jogadores: [
      { id: 'sergio', nome: "Sérgio", posicoes: ["GOL"], forca: 81 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["LD"], forca: 78 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 78 },
      { id: 'cesar', nome: "César", posicoes: ["ZAG"], forca: 79 },
      { id: 'gustavo', nome: "Gustavo", posicoes: ["LE"], forca: 77 },
      { id: 'gallo', nome: "Gallo", posicoes: ["VOL"], forca: 82 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 80 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 89 },
      { id: 'robert', nome: "Robert", posicoes: ["MEI"], forca: 81 },
      { id: 'macedo', nome: "Macedo", posicoes: ["PD"], forca: 80 },
      { id: 'camanducaia', nome: "Camanducaia", posicoes: ["ATA"], forca: 79 },
      { id: 'guga', nome: "Guga", posicoes: ["ATA"], forca: 80 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 85 },
      { id: 'jamelli', nome: "Jamelli", posicoes: ["PE"], forca: 82 }
    ]
  },

  // ===== Edição 1991 =====

  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Bragantino",
    jogadores: [
      { id: 'gilberto', nome: "Gilberto", posicoes: ["GOL"], forca: 82 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { id: 'marcio-santos', nome: "Márcio Santos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { id: 'silvio', nome: "Sílvio", posicoes: ["LE"], forca: 78 },
      { id: 'mauro-silva', nome: "Mauro Silva", posicoes: ["VOL"], forca: 88 },
      { id: 'tiba', nome: "Tiba", posicoes: ["MC"], forca: 80 },
      { id: 'joao-santos', nome: "João Santos", posicoes: ["MC","MEI"], forca: 79 },
      { id: 'mazinho-oliveira', nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 81 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["PD"], forca: 78 },
      { id: 'tulio-maravilha', nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { id: 'franklin', nome: "Franklin", posicoes: ["ATA"], forca: 81 },
      { id: 'paulinho-mclaren', nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 84 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder', nome: "Éder", posicoes: ["MEI"], forca: 86 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MEI"], forca: 81 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["PD"], forca: 82 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 },
      { id: 'marques', nome: "Marques", posicoes: ["ATA"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 79 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Flamengo",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 84 },
      { id: 'charles-guerreiro', nome: "Charles Guerreiro", posicoes: ["LD"], forca: 78 },
      { id: 'rondinelli', nome: "Rondinelli", posicoes: ["ZAG"], forca: 79 },
      { id: 'junior-baiano', nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 82 },
      { id: 'pia', nome: "Piá", posicoes: ["LE"], forca: 77 },
      { id: 'uidemar', nome: "Uidemar", posicoes: ["VOL"], forca: 80 },
      { id: 'junior', nome: "Júnior", posicoes: ["MC"], forca: 87 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MC","MEI"], forca: 86 },
      { id: 'marcelinho-carioca', nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 82 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 89 },
      { id: 'gaucho', nome: "Gaúcho", posicoes: ["PD"], forca: 82 },
      { id: 'nelio', nome: "Nélio", posicoes: ["ATA"], forca: 80 },
      { id: 'djalminha', nome: "Djalminha", posicoes: ["ATA"], forca: 81 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 85 },
      { id: 'luis-carlos-winck', nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 81 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'jorge-luis', nome: "Jorge Luís", posicoes: ["ZAG"], forca: 79 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { id: 'luisinho', nome: "Luisinho", posicoes: ["VOL"], forca: 81 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MC"], forca: 85 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MEI"], forca: 87 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 80 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 89 },
      { id: 'sorato', nome: "Sorato", posicoes: ["ATA"], forca: 82 },
      { id: 'valdir', nome: "Valdir", posicoes: ["ATA"], forca: 80 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 1990 =====

  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Corinthians",
    jogadores: [
      { id: 'ronaldo-giovanelli', nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { id: 'giba', nome: "Giba", posicoes: ["LD"], forca: 79 },
      { id: 'marcelo-djian', nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { id: 'guinei', nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { id: 'jacenir', nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { id: 'marcio-bittencourt', nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { id: 'wilson-mano', nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { id: 'neto', nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { id: 'fabinho', nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { id: 'dinei', nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "São Paulo",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { id: 'cafu', nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { id: 'antonio-carlos', nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { id: 'ronaldao', nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { id: 'valber', nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { id: 'leonardo', nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { id: 'pintado', nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { id: 'rai', nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'muller', nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { id: 'elivelton', nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { id: 'macedo', nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Grêmio",
    jogadores: [
      { id: 'danrlei', nome: "Danrlei", posicoes: ["GOL"], forca: 85 },
      { id: 'arce', nome: "Arce", posicoes: ["LD"], forca: 84 },
      { id: 'adilson-batista', nome: "Adílson Batista", posicoes: ["ZAG"], forca: 84 },
      { id: 'rivarola', nome: "Rivarola", posicoes: ["ZAG"], forca: 81 },
      { id: 'roger', nome: "Roger", posicoes: ["LE"], forca: 79 },
      { id: 'dinho', nome: "Dinho", posicoes: ["VOL"], forca: 85 },
      { id: 'goiano', nome: "Goiano", posicoes: ["MC"], forca: 82 },
      { id: 'carlos-miguel', nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 82 },
      { id: 'arilson', nome: "Arílson", posicoes: ["PD"], forca: 82 },
      { id: 'paulo-nunes', nome: "Paulo Nunes", posicoes: ["PE"], forca: 86 },
      { id: 'jardel', nome: "Jardel", posicoes: ["ATA"], forca: 88 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 81 },
      { id: 'cuca', nome: "Cuca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 81 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 80 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 79 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 78 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 79 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["MEI"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 79 },
      { id: 'charles-fabian', nome: "Charles Fabian", posicoes: ["ATA"], forca: 85 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 81 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 78 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Palmeiras",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 85 },
      { id: 'toninho', nome: "Toninho", posicoes: ["LD"], forca: 78 },
      { id: 'tonhao', nome: "Tonhão", posicoes: ["ZAG"], forca: 81 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { id: 'vladimir', nome: "Vladimir", posicoes: ["LE"], forca: 79 },
      { id: 'lima', nome: "Lima", posicoes: ["VOL"], forca: 79 },
      { id: 'cesar-sampaio', nome: "César Sampaio", posicoes: ["MC"], forca: 82 },
      { id: 'tato', nome: "Tato", posicoes: ["MEI"], forca: 80 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 84 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["PD"], forca: 80 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { id: 'careca-bianchezi', nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 79 },
      { id: 'gaucho', nome: "Gaúcho", posicoes: ["ATA"], forca: 80 },
      { id: 'nei', nome: "Nei", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 1989 =====

  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 82 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 87 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 85 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 80 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 79 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 80 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { id: 'charles', nome: "Charles", posicoes: ["MC"], forca: 84 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 89 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 80 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PE"], forca: 81 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["ATA"], forca: 79 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 81 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 79 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1988 =====

  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 80 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 79 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 80 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { id: 'charles', nome: "Charles", posicoes: ["MC"], forca: 84 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 89 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 80 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PE"], forca: 81 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["ATA"], forca: 79 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 79 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Fluminense",
    jogadores: [
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 86 },
      { id: 'aldo', nome: "Aldo", posicoes: ["LD"], forca: 80 },
      { id: 'ricardo-gomes', nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 88 },
      { id: 'duilio', nome: "Duílio", posicoes: ["ZAG"], forca: 81 },
      { id: 'branco', nome: "Branco", posicoes: ["LE"], forca: 87 },
      { id: 'jandir', nome: "Jandir", posicoes: ["VOL"], forca: 82 },
      { id: 'deley', nome: "Deley", posicoes: ["MC"], forca: 87 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 86 },
      { id: 'washington', nome: "Washington", posicoes: ["MEI"], forca: 87 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 88 },
      { id: 'tato', nome: "Tato", posicoes: ["PD"], forca: 82 },
      { id: 'romerito', nome: "Romerito", posicoes: ["PE"], forca: 87 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 85 },
      { id: 't-washington', nome: "T Washington", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Palmeiras",
    jogadores: [
      { id: 'zetti', nome: "Zetti", posicoes: ["GOL"], forca: 85 },
      { id: 'rosemiro', nome: "Rosemiro", posicoes: ["LD"], forca: 80 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 85 },
      { id: 'marcio-alcantara', nome: "Márcio Alcântara", posicoes: ["ZAG"], forca: 81 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 81 },
      { id: 'lima', nome: "Lima", posicoes: ["VOL"], forca: 80 },
      { id: 'jorginho-putinatti', nome: "Jorginho Putinatti", posicoes: ["MC"], forca: 85 },
      { id: 'mendel', nome: "Mendel", posicoes: ["MC"], forca: 79 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 86 },
      { id: 'zinho', nome: "Zinho", posicoes: ["MEI"], forca: 84 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["PD"], forca: 81 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 85 },
      { id: 'evair', nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { id: 'careca-bianchezi', nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 81 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1987 =====

  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Sport",
    jogadores: [
      { id: 'flavio', nome: "Flávio", posicoes: ["GOL"], forca: 80 },
      { id: 'betao', nome: "Betão", posicoes: ["LD"], forca: 78 },
      { id: 'junior', nome: "Júnior", posicoes: ["ZAG"], forca: 79 },
      { id: 'estevam', nome: "Estevam", posicoes: ["ZAG"], forca: 78 },
      { id: 'ribamar', nome: "Ribamar", posicoes: ["LE"], forca: 77 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 80 },
      { id: 'neto', nome: "Neto", posicoes: ["MC"], forca: 82 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["MC"], forca: 79 },
      { id: 'robertinho', nome: "Robertinho", posicoes: ["MEI"], forca: 80 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["PD"], forca: 78 },
      { id: 'edson', nome: "Édson", posicoes: ["PE"], forca: 78 },
      { id: 'nando', nome: "Nando", posicoes: ["ATA"], forca: 82 },
      { id: 'rivaldo', nome: "Rivaldo", posicoes: ["ATA"], forca: 78 },
      { id: 'gena', nome: "Gena", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 80 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 79 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'carlos-gomes', nome: "Carlos Gomes", posicoes: ["GOL"], forca: 80 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ZAG"], forca: 80 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { id: 'nonato', nome: "Nonato", posicoes: ["LE"], forca: 80 },
      { id: 'douglas', nome: "Douglas", posicoes: ["VOL"], forca: 79 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MC"], forca: 82 },
      { id: 'balu', nome: "Balu", posicoes: ["MC"], forca: 79 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 86 },
      { id: 'careca', nome: "Careca", posicoes: ["MEI"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { id: 'tostao-ii', nome: "Tostão II", posicoes: ["PE"], forca: 79 },
      { id: 'marcelo-ramos', nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 78 },
      { id: 'hamilton', nome: "Hamilton", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1986 =====

  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 87 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 85 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 80 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "América-RJ",
    jogadores: [
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 82 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["LD"], forca: 84 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'duilio', nome: "Duílio", posicoes: ["ZAG"], forca: 79 },
      { id: 'gilberto', nome: "Gilberto", posicoes: ["LE"], forca: 78 },
      { id: 'gilson-genio', nome: "Gilson Gênio", posicoes: ["VOL"], forca: 80 },
      { id: 'ailton', nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { id: 'donizete', nome: "Donizete", posicoes: ["MC"], forca: 79 },
      { id: 'edu-coimbra', nome: "Edu Coimbra", posicoes: ["MEI"], forca: 87 },
      { id: 'luisinho-lemos', nome: "Luisinho Lemos", posicoes: ["MEI"], forca: 81 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["PD"], forca: 78 },
      { id: 'joao-carlos', nome: "João Carlos", posicoes: ["PE"], forca: 78 },
      { id: 'tita', nome: "Tita", posicoes: ["ATA"], forca: 84 },
      { id: 'gilberto-oliveira', nome: "Gilberto Oliveira", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 79 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1985 =====

  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Coritiba",
    jogadores: [
      { id: 'rafael', nome: "Rafael", posicoes: ["GOL"], forca: 82 },
      { id: 'andre', nome: "André", posicoes: ["LD"], forca: 79 },
      { id: 'vava', nome: "Vavá", posicoes: ["ZAG"], forca: 81 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { id: 'dida', nome: "Dida", posicoes: ["LE"], forca: 78 },
      { id: 'toby', nome: "Toby", posicoes: ["VOL"], forca: 80 },
      { id: 'aladim', nome: "Aladim", posicoes: ["MC"], forca: 80 },
      { id: 'lela', nome: "Lela", posicoes: ["MC"], forca: 86 },
      { id: 'pachequinho', nome: "Pachequinho", posicoes: ["MEI"], forca: 82 },
      { id: 'edson', nome: "Édson", posicoes: ["MEI"], forca: 79 },
      { id: 'marildo', nome: "Marildo", posicoes: ["PD"], forca: 79 },
      { id: 'tostao', nome: "Tostão", posicoes: ["PE"], forca: 78 },
      { id: 'indio', nome: "Índio", posicoes: ["ATA"], forca: 82 },
      { id: 'marco-aurelio', nome: "Marco Aurélio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Bangu",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 86 },
      { id: 'ado', nome: "Ado", posicoes: ["LD"], forca: 80 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 88 },
      { id: 'ronaldo', nome: "Ronaldo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marinho', nome: "Marinho", posicoes: ["LE"], forca: 82 },
      { id: 'mario', nome: "Mário", posicoes: ["VOL"], forca: 81 },
      { id: 'arturzinho', nome: "Arturzinho", posicoes: ["MC"], forca: 88 },
      { id: 'adozinho', nome: "Adozinho", posicoes: ["MC"], forca: 82 },
      { id: 'lulinha', nome: "Lulinha", posicoes: ["MEI"], forca: 80 },
      { id: 'paulinho-criciuma', nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 81 },
      { id: 'gilson-genio', nome: "Gilson Gênio", posicoes: ["PE"], forca: 80 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 87 },
      { id: 'israel', nome: "Israel", posicoes: ["ATA"], forca: 82 },
      { id: 'toinzinho', nome: "Toinzinho", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Brasil de Pelotas",
    jogadores: [
      { id: 'joao-luis', nome: "João Luis", posicoes: ["GOL"], forca: 82 },
      { id: 'nei-dias', nome: "Nei Dias", posicoes: ["LD"], forca: 78 },
      { id: 'jorge-batata', nome: "Jorge Batata", posicoes: ["LE"], forca: 78 },
      { id: 'silva', nome: "Silva", posicoes: ["ZAG"], forca: 80 },
      { id: 'helio', nome: "Hélio", posicoes: ["ZAG"], forca: 80 },
      { id: 'doraci', nome: "Doraci", posicoes: ["VOL"], forca: 82 },
      { id: 'chiquinho', nome: "Chiquinho", posicoes: ["MC"], forca: 80 },
      { id: 'alamir', nome: "Alamir", posicoes: ["MC"], forca: 80 },
      { id: 'livio', nome: "Lívio", posicoes: ["MEI"], forca: 82 },
      { id: 'junior-brasilia', nome: "Júnior Brasília", posicoes: ["MEI"], forca: 85 },
      { id: 'valdoir', nome: "Valdoir", posicoes: ["PD"], forca: 78 },
      { id: 'mano', nome: "Mano", posicoes: ["PE"], forca: 78 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 86 },
      { id: 'canhotinho', nome: "Canhotinho", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 79 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },

  // ===== Edição 1984 =====

  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Fluminense",
    jogadores: [
      { id: 'paulo-victor', nome: "Paulo Victor", posicoes: ["GOL"], forca: 86 },
      { id: 'aldo', nome: "Aldo", posicoes: ["LD"], forca: 80 },
      { id: 'ricardo-gomes', nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 88 },
      { id: 'duilio', nome: "Duílio", posicoes: ["ZAG"], forca: 81 },
      { id: 'branco', nome: "Branco", posicoes: ["LE"], forca: 87 },
      { id: 'jandir', nome: "Jandir", posicoes: ["VOL"], forca: 82 },
      { id: 'deley', nome: "Deley", posicoes: ["MC"], forca: 87 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 86 },
      { id: 'washington', nome: "Washington", posicoes: ["MEI"], forca: 87 },
      { id: 'assis', nome: "Assis", posicoes: ["MEI"], forca: 88 },
      { id: 'tato', nome: "Tato", posicoes: ["PD"], forca: 82 },
      { id: 'romerito', nome: "Romerito", posicoes: ["PE"], forca: 87 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 85 },
      { id: 't-washington', nome: "T Washington", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 82 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Corinthians",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 85 },
      { id: 'edson-boaro', nome: "Édson Boaro", posicoes: ["LD"], forca: 82 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 85 },
      { id: 'damiao', nome: "Damião", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 87 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["VOL"], forca: 85 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 88 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC"], forca: 80 },
      { id: 'socrates', nome: "Sócrates", posicoes: ["MEI"], forca: 93 },
      { id: 'casagrande', nome: "Casagrande", posicoes: ["MEI"], forca: 87 },
      { id: 'ataliba', nome: "Ataliba", posicoes: ["PD"], forca: 82 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 81 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 81 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1983 =====

  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Santos",
    jogadores: [
      { id: 'rodella', nome: "Rodella", posicoes: ["GOL"], forca: 80 },
      { id: 'nelson', nome: "Nélson", posicoes: ["LD"], forca: 78 },
      { id: 'toninho-carlos', nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'dema', nome: "Dema", posicoes: ["VOL"], forca: 80 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 86 },
      { id: 'lino', nome: "Lino", posicoes: ["MC"], forca: 79 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 78 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 87 },
      { id: 'edmar', nome: "Edmar", posicoes: ["PD"], forca: 81 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 82 },
      { id: 'juary', nome: "Juary", posicoes: ["ATA"], forca: 84 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Athletico-PR",
    jogadores: [
      { id: 'roberto-costa', nome: "Roberto Costa", posicoes: ["GOL"], forca: 80 },
      { id: 'jorge-luis', nome: "Jorge Luís", posicoes: ["LD"], forca: 78 },
      { id: 'rogerio', nome: "Rogério", posicoes: ["ZAG"], forca: 79 },
      { id: 'djalma', nome: "Djalma", posicoes: ["ZAG"], forca: 78 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["LE"], forca: 77 },
      { id: 'assis', nome: "Assis", posicoes: ["VOL"], forca: 80 },
      { id: 'lico', nome: "Lico", posicoes: ["MC"], forca: 80 },
      { id: 'serginho', nome: "Serginho", posicoes: ["MC"], forca: 78 },
      { id: 'paulo-rink', nome: "Paulo Rink", posicoes: ["MEI"], forca: 77 },
      { id: 'edson', nome: "Édson", posicoes: ["PD"], forca: 79 },
      { id: 'dinei', nome: "Dinei", posicoes: ["PE"], forca: 77 },
      { id: 'washington', nome: "Washington", posicoes: ["ATA"], forca: 85 },
      { id: 'sicupira', nome: "Sicupira", posicoes: ["ATA"], forca: 82 },
      { id: 'jofre', nome: "Jofre", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Bangu",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 86 },
      { id: 'ado', nome: "Ado", posicoes: ["LD"], forca: 80 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 88 },
      { id: 'ronaldo', nome: "Ronaldo", posicoes: ["ZAG"], forca: 81 },
      { id: 'marinho', nome: "Marinho", posicoes: ["LE"], forca: 82 },
      { id: 'mario', nome: "Mário", posicoes: ["VOL"], forca: 81 },
      { id: 'arturzinho', nome: "Arturzinho", posicoes: ["MC"], forca: 88 },
      { id: 'adozinho', nome: "Adozinho", posicoes: ["MC"], forca: 82 },
      { id: 'lulinha', nome: "Lulinha", posicoes: ["MEI"], forca: 80 },
      { id: 'paulinho-criciuma', nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 81 },
      { id: 'gilson-genio', nome: "Gilson Gênio", posicoes: ["PE"], forca: 80 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 87 },
      { id: 'israel', nome: "Israel", posicoes: ["ATA"], forca: 82 },
      { id: 'toinzinho', nome: "Toinzinho", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Corinthians",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 85 },
      { id: 'edson-boaro', nome: "Édson Boaro", posicoes: ["LD"], forca: 82 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 85 },
      { id: 'damiao', nome: "Damião", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 87 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["VOL"], forca: 85 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 88 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC"], forca: 80 },
      { id: 'socrates', nome: "Sócrates", posicoes: ["MEI"], forca: 93 },
      { id: 'casagrande', nome: "Casagrande", posicoes: ["MEI"], forca: 87 },
      { id: 'ataliba', nome: "Ataliba", posicoes: ["PD"], forca: 82 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 81 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 80 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1982 =====

  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 81 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Corinthians",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 85 },
      { id: 'edson-boaro', nome: "Édson Boaro", posicoes: ["LD"], forca: 82 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 85 },
      { id: 'damiao', nome: "Damião", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 87 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["VOL"], forca: 85 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 88 },
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["MC"], forca: 80 },
      { id: 'socrates', nome: "Sócrates", posicoes: ["MEI"], forca: 93 },
      { id: 'casagrande', nome: "Casagrande", posicoes: ["MEI"], forca: 87 },
      { id: 'ataliba', nome: "Ataliba", posicoes: ["PD"], forca: 82 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 81 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 85 },
      { id: 'viola', nome: "Viola", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Guarani",
    jogadores: [
      { id: 'sergio-neri', nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { id: 'gilson', nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { id: 'china', nome: "China", posicoes: ["MC"], forca: 80 },
      { id: 'amoroso', nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { id: 'evair', nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { id: 'catatau', nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { id: 'neto', nome: "Neto", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { id: 'chiquinho-carioca', nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 87 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 85 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 82 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },

  // ===== Edição 1981 =====

  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Grêmio",
    jogadores: [
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { id: 'de-leon', nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { id: 'baidek', nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { id: 'casemiro', nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 81 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { id: 'renato-portaluppi', nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { id: 'caio', nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "São Paulo",
    jogadores: [
      { id: 'gilmar-rinaldi', nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-teodoro', nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { id: 'oscar', nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { id: 'dario-pereyra', nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { id: 'bernardo', nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 87 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { id: 'silas', nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { id: 'muller', nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { id: 'renato', nome: "Renato", posicoes: ["PD"], forca: 85 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Ponte Preta",
    jogadores: [
      { id: 'carlos', nome: "Carlos", posicoes: ["GOL"], forca: 80 },
      { id: 'odirlei', nome: "Odirlei", posicoes: ["LD"], forca: 79 },
      { id: 'polozzi', nome: "Polozzi", posicoes: ["ZAG"], forca: 85 },
      { id: 'juninho-fonseca', nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { id: 'marco-aurelio', nome: "Marco Aurélio", posicoes: ["LE"], forca: 79 },
      { id: 'ze-mario', nome: "Zé Mário", posicoes: ["VOL"], forca: 80 },
      { id: 'dica', nome: "Dicá", posicoes: ["MC"], forca: 88 },
      { id: 'osvaldo', nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { id: 'parraga', nome: "Parraga", posicoes: ["MEI"], forca: 78 },
      { id: 'rui-rei', nome: "Rui Rei", posicoes: ["PD"], forca: 81 },
      { id: 'tuta', nome: "Tuta", posicoes: ["PE"], forca: 79 },
      { id: 'edson', nome: "Édson", posicoes: ["ATA"], forca: 80 },
      { id: 'carlos-henrique', nome: "Carlos Henrique", posicoes: ["ATA"], forca: 78 },
      { id: 'sergio-alves', nome: "Sérgio Alves", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Botafogo",
    jogadores: [
      { id: 'paulo-sergio', nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 84 },
      { id: 'perivaldo', nome: "Perivaldo", posicoes: ["LD"], forca: 80 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 86 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["ZAG"], forca: 80 },
      { id: 'alemao', nome: "Alemão", posicoes: ["LE"], forca: 82 },
      { id: 'carlos-alberto-santos', nome: "Carlos Alberto Santos", posicoes: ["VOL"], forca: 81 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MC"], forca: 85 },
      { id: 'everton', nome: "Éverton", posicoes: ["MC"], forca: 80 },
      { id: 'renato-sa', nome: "Renato Sá", posicoes: ["MEI"], forca: 81 },
      { id: 'lucio-flavio', nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 77 },
      { id: 'mauricio', nome: "Maurício", posicoes: ["PD"], forca: 85 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 80 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1980 =====

  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Flamengo",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { id: 'leandro', nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { id: 'mozer', nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { id: 'marinho', nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { id: 'junior', nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { id: 'andrade', nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { id: 'zico', nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { id: 'tita', nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { id: 'renato-gaucho', nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 85 },
      { id: 'nunes', nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { id: 'bebeto', nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { id: 'moacir', nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'doriva', nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { id: 'marinho', nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { id: 'sergio-araujo', nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { id: 'renaldo', nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Coritiba",
    jogadores: [
      { id: 'rafael', nome: "Rafael", posicoes: ["GOL"], forca: 82 },
      { id: 'andre', nome: "André", posicoes: ["LD"], forca: 79 },
      { id: 'vava', nome: "Vavá", posicoes: ["ZAG"], forca: 81 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { id: 'dida', nome: "Dida", posicoes: ["LE"], forca: 78 },
      { id: 'toby', nome: "Toby", posicoes: ["VOL"], forca: 80 },
      { id: 'aladim', nome: "Aladim", posicoes: ["MC"], forca: 80 },
      { id: 'lela', nome: "Lela", posicoes: ["MC"], forca: 86 },
      { id: 'pachequinho', nome: "Pachequinho", posicoes: ["MEI"], forca: 82 },
      { id: 'edson', nome: "Édson", posicoes: ["MEI"], forca: 79 },
      { id: 'marildo', nome: "Marildo", posicoes: ["PD"], forca: 79 },
      { id: 'tostao', nome: "Tostão", posicoes: ["PE"], forca: 78 },
      { id: 'indio', nome: "Índio", posicoes: ["ATA"], forca: 82 },
      { id: 'marco-aurelio', nome: "Marco Aurélio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Internacional",
    jogadores: [
      { id: 'benitez', nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'mauro-galvao', nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { id: 'mauro-pastor', nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { id: 'andre-luis', nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { id: 'batista', nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { id: 'mario-sergio', nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { id: 'ruben-paz', nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { id: 'adilio', nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { id: 'jair', nome: "Jair", posicoes: ["PE"], forca: 79 },
      { id: 'bira', nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { id: 'nilson', nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Santos",
    jogadores: [
      { id: 'rodella', nome: "Rodella", posicoes: ["GOL"], forca: 80 },
      { id: 'nelson', nome: "Nélson", posicoes: ["LD"], forca: 78 },
      { id: 'toninho-carlos', nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 80 },
      { id: 'marcio-rossini', nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 79 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { id: 'dema', nome: "Dema", posicoes: ["VOL"], forca: 80 },
      { id: 'pita', nome: "Pita", posicoes: ["MC"], forca: 86 },
      { id: 'lino', nome: "Lino", posicoes: ["MC"], forca: 79 },
      { id: 'giovanni', nome: "Giovanni", posicoes: ["MEI"], forca: 78 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 87 },
      { id: 'edmar', nome: "Edmar", posicoes: ["PD"], forca: 81 },
      { id: 'joao-paulo', nome: "João Paulo", posicoes: ["PE"], forca: 82 },
      { id: 'juary', nome: "Juary", posicoes: ["ATA"], forca: 84 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Vasco",
    jogadores: [
      { id: 'acacio', nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { id: 'ricardo-rocha', nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { id: 'donato', nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { id: 'dunga', nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { id: 'geovani', nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { id: 'bismarck', nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { id: 'william', nome: "William", posicoes: ["MEI"], forca: 82 },
      { id: 'vivinho', nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { id: 'tita', nome: "Tita", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { id: 'romario', nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },

  // ===== Edição 1979 =====

  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 87 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 82 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["ZAG"], forca: 81 },
      { id: 'alfinete', nome: "Alfinete", posicoes: ["LE"], forca: 80 },
      { id: 'alcir-portela', nome: "Alcir Portela", posicoes: ["VOL"], forca: 82 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["MEI"], forca: 85 },
      { id: 'ademir', nome: "Ademir", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 82 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 92 },
      { id: 'jair-pereira', nome: "Jair Pereira", posicoes: ["ATA"], forca: 82 },
      { id: 'luis-carlos', nome: "Luís Carlos", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Coritiba",
    jogadores: [
      { id: 'jairo', nome: "Jairo", posicoes: ["GOL"], forca: 84 },
      { id: 'hermes', nome: "Hermes", posicoes: ["LD"], forca: 79 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 81 },
      { id: 'claudio-marques', nome: "Cláudio Marques", posicoes: ["ZAG"], forca: 79 },
      { id: 'nilo', nome: "Nilo", posicoes: ["LE"], forca: 79 },
      { id: 'toby', nome: "Toby", posicoes: ["VOL"], forca: 80 },
      { id: 'kruger', nome: "Krüger", posicoes: ["MC"], forca: 86 },
      { id: 'aladim', nome: "Aladim", posicoes: ["MC"], forca: 80 },
      { id: 'paquito', nome: "Paquito", posicoes: ["MEI"], forca: 79 },
      { id: 'fedato', nome: "Fedato", posicoes: ["MEI"], forca: 78 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["PD"], forca: 80 },
      { id: 'dito', nome: "Dito", posicoes: ["PE"], forca: 78 },
      { id: 'duilio-dias', nome: "Duilio Dias", posicoes: ["ATA"], forca: 80 },
      { id: 'dirceu-kruger', nome: "Dirceu Krüger", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 80 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Guarani",
    jogadores: [
      { id: 'neneca', nome: "Neneca", posicoes: ["GOL"], forca: 85 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 80 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 82 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 80 },
      { id: 'alfredo', nome: "Alfredo", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 89 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 85 },
      { id: 'bozo', nome: "Bozó", posicoes: ["MEI"], forca: 84 },
      { id: 'capitao', nome: "Capitão", posicoes: ["PD"], forca: 82 },
      { id: 'manguinha', nome: "Manguinha", posicoes: ["PE"], forca: 80 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 85 },
      { id: 'orlando', nome: "Orlando", posicoes: ["ATA"], forca: 80 },
      { id: 'theodoro', nome: "Theodoro", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1978 =====

  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Guarani",
    jogadores: [
      { id: 'neneca', nome: "Neneca", posicoes: ["GOL"], forca: 85 },
      { id: 'mauro', nome: "Mauro", posicoes: ["LD"], forca: 80 },
      { id: 'miranda', nome: "Miranda", posicoes: ["ZAG"], forca: 82 },
      { id: 'gomes', nome: "Gomes", posicoes: ["ZAG"], forca: 80 },
      { id: 'alfredo', nome: "Alfredo", posicoes: ["LE"], forca: 78 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { id: 'zenon', nome: "Zenon", posicoes: ["MC"], forca: 89 },
      { id: 'renato', nome: "Renato", posicoes: ["MC"], forca: 85 },
      { id: 'bozo', nome: "Bozó", posicoes: ["MEI"], forca: 84 },
      { id: 'capitao', nome: "Capitão", posicoes: ["PD"], forca: 82 },
      { id: 'manguinha', nome: "Manguinha", posicoes: ["PE"], forca: 80 },
      { id: 'careca', nome: "Careca", posicoes: ["ATA"], forca: 85 },
      { id: 'orlando', nome: "Orlando", posicoes: ["ATA"], forca: 80 },
      { id: 'theodoro', nome: "Theodoro", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 87 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 82 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["ZAG"], forca: 81 },
      { id: 'alfinete', nome: "Alfinete", posicoes: ["LE"], forca: 80 },
      { id: 'alcir-portela', nome: "Alcir Portela", posicoes: ["VOL"], forca: 82 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["MEI"], forca: 85 },
      { id: 'ademir', nome: "Ademir", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 82 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 92 },
      { id: 'jair-pereira', nome: "Jair Pereira", posicoes: ["ATA"], forca: 82 },
      { id: 'luis-carlos', nome: "Luís Carlos", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Bahia",
    jogadores: [
      { id: 'ronaldo-goleiro', nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { id: 'gil-baiano', nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { id: 'joao-marcelo', nome: "João Marcelo", posicoes: ["ZAG"], forca: 80 },
      { id: 'paulo-rodrigues', nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 80 },
      { id: 'tarantini', nome: "Tarântini", posicoes: ["LE"], forca: 79 },
      { id: 'osmar', nome: "Osmar", posicoes: ["VOL"], forca: 80 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { id: 'charles', nome: "Charles", posicoes: ["MC"], forca: 84 },
      { id: 'bobo', nome: "Bobô", posicoes: ["MEI"], forca: 89 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["PD"], forca: 80 },
      { id: 'marquinhos', nome: "Marquinhos", posicoes: ["PE"], forca: 81 },
      { id: 'claudio-adao', nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { id: 'naldinho', nome: "Naldinho", posicoes: ["ATA"], forca: 79 },
      { id: 'dende', nome: "Dendê", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1977 =====

  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Operário-MS",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 81 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["LD"], forca: 76 },
      { id: 'celso', nome: "Celso", posicoes: ["ZAG"], forca: 77 },
      { id: 'bene', nome: "Benê", posicoes: ["ZAG"], forca: 76 },
      { id: 'edson', nome: "Edson", posicoes: ["LE"], forca: 75 },
      { id: 'mauro', nome: "Mauro", posicoes: ["VOL"], forca: 77 },
      { id: 'jair', nome: "Jair", posicoes: ["MC"], forca: 77 },
      { id: 'carlos-alberto', nome: "Carlos Alberto", posicoes: ["MC"], forca: 76 },
      { id: 'humberto-ramos', nome: "Humberto Ramos", posicoes: ["MEI"], forca: 79 },
      { id: 'peri', nome: "Peri", posicoes: ["PD"], forca: 76 },
      { id: 'jorginho', nome: "Jorginho", posicoes: ["PE"], forca: 76 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA"], forca: 77 },
      { id: 'lima', nome: "Lima", posicoes: ["ATA"], forca: 76 },
      { id: 'gil', nome: "Gil", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Londrina",
    jogadores: [
      { id: 'neneca', nome: "Neneca", posicoes: ["GOL"], forca: 79 },
      { id: 'brandao', nome: "Brandão", posicoes: ["LD"], forca: 76 },
      { id: 'carlos-alberto-garcia', nome: "Carlos Alberto Garcia", posicoes: ["ZAG"], forca: 80 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["ZAG"], forca: 76 },
      { id: 'nelson', nome: "Nelson", posicoes: ["LE"], forca: 75 },
      { id: 'marinho', nome: "Marinho", posicoes: ["VOL"], forca: 77 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["MC"], forca: 76 },
      { id: 'jorge-nunes', nome: "Jorge Nunes", posicoes: ["MC"], forca: 76 },
      { id: 'carlos-alberto-seixas', nome: "Carlos Alberto Seixas", posicoes: ["MEI"], forca: 78 },
      { id: 'paulinho', nome: "Paulinho", posicoes: ["PD"], forca: 76 },
      { id: 'lico', nome: "Lico", posicoes: ["PE"], forca: 77 },
      { id: 'brandaozinho', nome: "Brandãozinho", posicoes: ["ATA"], forca: 77 },
      { id: 'ze-roberto', nome: "Zé Roberto", posicoes: ["ATA"], forca: 76 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 80 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },

  // ===== Edição 1976 =====

  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 80 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 86 },
      { id: 'toninho', nome: "Toninho", posicoes: ["LD"], forca: 82 },
      { id: 'edinho', nome: "Edinho", posicoes: ["ZAG"], forca: 88 },
      { id: 'silveira', nome: "Silveira", posicoes: ["ZAG"], forca: 82 },
      { id: 'rodrigues-neto', nome: "Rodrigues Neto", posicoes: ["LE"], forca: 86 },
      { id: 'kleber', nome: "Kléber", posicoes: ["VOL"], forca: 81 },
      { id: 'pintinho', nome: "Pintinho", posicoes: ["MC"], forca: 85 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 87 },
      { id: 'rivelino', nome: "Rivelino", posicoes: ["MEI"], forca: 93 },
      { id: 'paulo-cesar-caju', nome: "Paulo César Caju", posicoes: ["MEI"], forca: 89 },
      { id: 'gil', nome: "Gil", posicoes: ["PD"], forca: 85 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 84 },
      { id: 'doval', nome: "Doval", posicoes: ["ATA"], forca: 85 },
      { id: 'manfrini', nome: "Manfrini", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Grêmio",
    jogadores: [
      { id: 'eurico-lara', nome: "Eurico Lara", posicoes: ["GOL"], forca: 76 },
      { id: 'mazaropi', nome: "Mazaropi", posicoes: ["GOL"], forca: 80 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LD"], forca: 85 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 81 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 85 },
      { id: 'orlando-lele', nome: "Orlando Lelé", posicoes: ["LE"], forca: 79 },
      { id: 'china', nome: "China", posicoes: ["VOL"], forca: 80 },
      { id: 'iura', nome: "Iúra", posicoes: ["MC"], forca: 79 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["MEI"], forca: 84 },
      { id: 'tadeu-ricci', nome: "Tadeu Ricci", posicoes: ["MEI"], forca: 79 },
      { id: 'jair', nome: "Jair", posicoes: ["PD"], forca: 80 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 85 },
      { id: 'baltazar', nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1975 =====

  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 86 },
      { id: 'toninho', nome: "Toninho", posicoes: ["LD"], forca: 82 },
      { id: 'edinho', nome: "Edinho", posicoes: ["ZAG"], forca: 88 },
      { id: 'silveira', nome: "Silveira", posicoes: ["ZAG"], forca: 82 },
      { id: 'rodrigues-neto', nome: "Rodrigues Neto", posicoes: ["LE"], forca: 86 },
      { id: 'kleber', nome: "Kléber", posicoes: ["VOL"], forca: 81 },
      { id: 'pintinho', nome: "Pintinho", posicoes: ["MC"], forca: 85 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 87 },
      { id: 'rivelino', nome: "Rivelino", posicoes: ["MEI"], forca: 93 },
      { id: 'paulo-cesar-caju', nome: "Paulo César Caju", posicoes: ["MEI"], forca: 89 },
      { id: 'gil', nome: "Gil", posicoes: ["PD"], forca: 85 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 84 },
      { id: 'doval', nome: "Doval", posicoes: ["ATA"], forca: 85 },
      { id: 'manfrini', nome: "Manfrini", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Santa Cruz",
    jogadores: [
      { id: 'gilberto', nome: "Gilberto", posicoes: ["GOL"], forca: 80 },
      { id: 'nena', nome: "Nena", posicoes: ["LD"], forca: 78 },
      { id: 'pedrinho', nome: "Pedrinho", posicoes: ["ZAG"], forca: 78 },
      { id: 'luciano-veloso', nome: "Luciano Veloso", posicoes: ["ZAG"], forca: 79 },
      { id: 'ramon', nome: "Ramon", posicoes: ["LE"], forca: 84 },
      { id: 'ze-mario', nome: "Zé Mário", posicoes: ["VOL"], forca: 79 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["MC"], forca: 85 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["MC"], forca: 80 },
      { id: 'betinho', nome: "Betinho", posicoes: ["MEI"], forca: 81 },
      { id: 'nunes', nome: "Nunes", posicoes: ["PD"], forca: 81 },
      { id: 'ze-do-carmo', nome: "Zé do Carmo", posicoes: ["PE"], forca: 78 },
      { id: 'fumanchu', nome: "Fumanchu", posicoes: ["ATA"], forca: 80 },
      { id: 'mazinho-loyola', nome: "Mazinho Loyola", posicoes: ["ATA"], forca: 78 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },

  // ===== Edição 1974 =====

  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 87 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 82 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'miguel', nome: "Miguel", posicoes: ["ZAG"], forca: 81 },
      { id: 'alfinete', nome: "Alfinete", posicoes: ["LE"], forca: 80 },
      { id: 'alcir-portela', nome: "Alcir Portela", posicoes: ["VOL"], forca: 82 },
      { id: 'zanata', nome: "Zanata", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["MEI"], forca: 85 },
      { id: 'ademir', nome: "Ademir", posicoes: ["MEI"], forca: 81 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 82 },
      { id: 'de', nome: "Dé", posicoes: ["PE"], forca: 82 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 92 },
      { id: 'jair-pereira', nome: "Jair Pereira", posicoes: ["ATA"], forca: 82 },
      { id: 'luis-carlos', nome: "Luís Carlos", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Santos",
    jogadores: [
      { id: 'cejas', nome: "Cejas", posicoes: ["GOL"], forca: 85 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 88 },
      { id: 'vicente', nome: "Vicente", posicoes: ["ZAG"], forca: 80 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'leo-oliveira', nome: "Léo Oliveira", posicoes: ["VOL"], forca: 79 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["MC"], forca: 87 },
      { id: 'brecha', nome: "Brecha", posicoes: ["MC"], forca: 80 },
      { id: 'edu', nome: "Edu", posicoes: ["MEI"], forca: 85 },
      { id: 'pita', nome: "Pita", posicoes: ["MEI"], forca: 85 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["PD"], forca: 81 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 85 },
      { id: 'pele', nome: "Pelé", posicoes: ["ATA"], forca: 93 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 80 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1973 =====

  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Santos",
    jogadores: [
      { id: 'cejas', nome: "Cejas", posicoes: ["GOL"], forca: 85 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 88 },
      { id: 'vicente', nome: "Vicente", posicoes: ["ZAG"], forca: 80 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'leo-oliveira', nome: "Léo Oliveira", posicoes: ["VOL"], forca: 79 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["MC"], forca: 87 },
      { id: 'brecha', nome: "Brecha", posicoes: ["MC"], forca: 80 },
      { id: 'edu', nome: "Edu", posicoes: ["MEI"], forca: 85 },
      { id: 'pita', nome: "Pita", posicoes: ["MEI"], forca: 85 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["PD"], forca: 81 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 85 },
      { id: 'pele', nome: "Pelé", posicoes: ["ATA"], forca: 93 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },

  // ===== Edição 1972 =====

  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Corinthians",
    jogadores: [
      { id: 'tobias', nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { id: 'moises', nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { id: 'ze-eduardo', nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { id: 'givanildo', nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { id: 'ruco', nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { id: 'biro-biro', nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { id: 'basilio', nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { id: 'lance', nome: "Lance", posicoes: ["PE"], forca: 80 },
      { id: 'geraldao', nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul-plassmann', nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { id: 'perfumo', nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { id: 'morais', nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { id: 'vanderlei', nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { id: 'piazza', nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { id: 'eduardo-amorim', nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { id: 'natal', nome: "Natal", posicoes: ["PE"], forca: 84 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { id: 'roberto-batata', nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },

  // ===== Edição 1971 =====

  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'joao-leite', nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { id: 'vantuir-galdino', nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { id: 'luizinho', nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulo-roberto', nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { id: 'toninho-cerezo', nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { id: 'angelo', nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { id: 'paulo-isidoro', nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { id: 'marcelo-oliveira', nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { id: 'lola', nome: "Lola", posicoes: ["PD"], forca: 79 },
      { id: 'eder-aleixo', nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { id: 'reinaldo', nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "São Paulo",
    jogadores: [
      { id: 'waldir-peres', nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { id: 'forlan', nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { id: 'arlindo', nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { id: 'bezerra', nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { id: 'nelsinho-baptista', nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { id: 'teodoro', nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { id: 'chicao', nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { id: 'pedro-rocha', nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { id: 'mickey', nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { id: 'terto', nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { id: 'paulo-cesar', nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { id: 'ze-sergio', nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { id: 'serginho-chulapa', nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Botafogo",
    jogadores: [
      { id: 'wendell', nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { id: 'carlos-roberto', nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { id: 'marinho-chagas', nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { id: 'osmar-guarnelli', nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { id: 'moreira', nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { id: 'ney-conceicao', nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { id: 'mendonca', nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { id: 'dirceu', nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { id: 'fischer', nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { id: 'ferreti', nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Palmeiras",
    jogadores: [
      { id: 'leao', nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { id: 'eurico', nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'alfredo-mostarda', nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { id: 'zeca', nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { id: 'edu-bala', nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { id: 'jorge-mendonca', nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { id: 'nei', nome: "Nei", posicoes: ["PD"], forca: 82 },
      { id: 'fedato', nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { id: 'cesar-maluco', nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { id: 'toninho-vanusa', nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Santos",
    jogadores: [
      { id: 'cejas', nome: "Cejas", posicoes: ["GOL"], forca: 85 },
      { id: 'carlos-alberto-torres', nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 88 },
      { id: 'vicente', nome: "Vicente", posicoes: ["ZAG"], forca: 80 },
      { id: 'oberdan', nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { id: 'leo-oliveira', nome: "Léo Oliveira", posicoes: ["VOL"], forca: 79 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["MC"], forca: 87 },
      { id: 'brecha', nome: "Brecha", posicoes: ["MC"], forca: 80 },
      { id: 'edu', nome: "Edu", posicoes: ["MEI"], forca: 85 },
      { id: 'pita', nome: "Pita", posicoes: ["MEI"], forca: 85 },
      { id: 'mazinho', nome: "Mazinho", posicoes: ["PD"], forca: 81 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 85 },
      { id: 'pele', nome: "Pelé", posicoes: ["ATA"], forca: 93 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Internacional",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { id: 'valdir', nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { id: 'figueroa', nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { id: 'herminio', nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { id: 'cacapava', nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { id: 'falcao', nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { id: 'batista', nome: "Batista", posicoes: ["MC"], forca: 87 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["PE"], forca: 82 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { id: 'dario', nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 1970 =====

  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Atlético-MG",
    jogadores: [
      { id: 'ortiz', nome: "Ortiz", posicoes: ["GOL"], forca: 84 },
      { id: 'helio', nome: "Hélio", posicoes: ["GOL"], forca: 73 },
      { id: 'nelinho', nome: "Nelinho", posicoes: ["LD"], forca: 90 },
      { id: 'vantuir', nome: "Vantuir", posicoes: ["ZAG"], forca: 82 },
      { id: 'grapete', nome: "Grapete", posicoes: ["ZAG"], forca: 81 },
      { id: 'oldair', nome: "Oldair", posicoes: ["LE"], forca: 80 },
      { id: 'humberto-ramos', nome: "Humberto Ramos", posicoes: ["VOL"], forca: 85 },
      { id: 'vanderlei-paiva', nome: "Vanderlei Paiva", posicoes: ["MC"], forca: 82 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 81 },
      { id: 'romeu', nome: "Romeu", posicoes: ["ATA"], forca: 89 },
      { id: 'dada-maravilha', nome: "Dadá Maravilha", posicoes: ["ATA"], forca: 91 },
      { id: 'ronaldo', nome: "Ronaldo", posicoes: ["PE"], forca: 85 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { id: 'buiao', nome: "Buião", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1969 =====

  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Corinthians",
    jogadores: [
      { id: 'ado', nome: "Ado", posicoes: ["GOL"], forca: 82 },
      { id: 'diogo', nome: "Diogo", posicoes: ["GOL"], forca: 75 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 89 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { id: 'ditao', nome: "Ditão", posicoes: ["ZAG"], forca: 81 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 86 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-alves', nome: "Dirceu Alves", posicoes: ["MC"], forca: 84 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MC"], forca: 81 },
      { id: 'rivellino', nome: "Rivellino", posicoes: ["MEI"], forca: 94 },
      { id: 'paulo-borges', nome: "Paulo Borges", posicoes: ["PD"], forca: 85 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 81 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 86 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1968 =====

  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Corinthians",
    jogadores: [
      { id: 'ado', nome: "Ado", posicoes: ["GOL"], forca: 82 },
      { id: 'diogo', nome: "Diogo", posicoes: ["GOL"], forca: 75 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 89 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { id: 'ditao', nome: "Ditão", posicoes: ["ZAG"], forca: 81 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 86 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-alves', nome: "Dirceu Alves", posicoes: ["MC"], forca: 84 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MC"], forca: 81 },
      { id: 'rivellino', nome: "Rivellino", posicoes: ["MEI"], forca: 94 },
      { id: 'paulo-borges', nome: "Paulo Borges", posicoes: ["PD"], forca: 85 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 81 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 86 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },

  // ===== Edição 1967 =====

  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 79 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 81 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Internacional",
    jogadores: [
      { id: 'gainete', nome: "Gainete", posicoes: ["GOL"], forca: 85 },
      { id: 'schneider', nome: "Schneider", posicoes: ["GOL"], forca: 73 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 88 },
      { id: 'pontes', nome: "Pontes", posicoes: ["ZAG"], forca: 82 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 80 },
      { id: 'falcao', nome: "Falcão", posicoes: ["VOL","MC"], forca: 93 },
      { id: 'dorinho', nome: "Dorinho", posicoes: ["VOL"], forca: 81 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 90 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 87 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ATA"], forca: 86 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["PE"], forca: 84 },
      { id: 'braulio', nome: "Bráulio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Corinthians",
    jogadores: [
      { id: 'ado', nome: "Ado", posicoes: ["GOL"], forca: 82 },
      { id: 'diogo', nome: "Diogo", posicoes: ["GOL"], forca: 75 },
      { id: 'ze-maria', nome: "Zé Maria", posicoes: ["LD"], forca: 89 },
      { id: 'balbuena', nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { id: 'ditao', nome: "Ditão", posicoes: ["ZAG"], forca: 81 },
      { id: 'wladimir', nome: "Wladimir", posicoes: ["LE"], forca: 86 },
      { id: 'tiao', nome: "Tião", posicoes: ["VOL"], forca: 82 },
      { id: 'dirceu-alves', nome: "Dirceu Alves", posicoes: ["MC"], forca: 84 },
      { id: 'eduardo', nome: "Eduardo", posicoes: ["MC"], forca: 81 },
      { id: 'rivellino', nome: "Rivellino", posicoes: ["MEI"], forca: 94 },
      { id: 'paulo-borges', nome: "Paulo Borges", posicoes: ["PD"], forca: 85 },
      { id: 'vaguinho', nome: "Vaguinho", posicoes: ["PD"], forca: 81 },
      { id: 'flavio-minuano', nome: "Flávio Minuano", posicoes: ["ATA"], forca: 86 },
      { id: 'mirandinha', nome: "Mirandinha", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1966 =====

  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Cruzeiro",
    jogadores: [
      { id: 'raul', nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { id: 'natal', nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { id: 'pedro-paulo', nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { id: 'procopio-cardoso', nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { id: 'piazza', nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { id: 'fontana', nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { id: 'neco', nome: "Neco", posicoes: ["LE"], forca: 80 },
      { id: 'ze-carlos', nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { id: 'dirceu-lopes', nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { id: 'tostao', nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { id: 'evaldo', nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { id: 'hilton-oliveira', nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'palhinha', nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 79 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 81 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 1965 =====

  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 79 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 81 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1964 =====

  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Flamengo",
    jogadores: [
      { id: 'ubirajara', nome: "Ubirajara", posicoes: ["GOL"], forca: 81 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'rodrigues-neto', nome: "Rodrigues Neto", posicoes: ["LD"], forca: 82 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 87 },
      { id: 'onca', nome: "Onça", posicoes: ["ZAG"], forca: 80 },
      { id: 'murilo', nome: "Murilo", posicoes: ["LE"], forca: 81 },
      { id: 'liminha', nome: "Liminha", posicoes: ["VOL"], forca: 80 },
      { id: 'carlinhos', nome: "Carlinhos", posicoes: ["MC"], forca: 84 },
      { id: 'franz-hasil', nome: "Franz Hasil", posicoes: ["MC","MEI"], forca: 84 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC","MEI"], forca: 87 },
      { id: 'geraldo-assoviador', nome: "Geraldo Assoviador", posicoes: ["PD"], forca: 81 },
      { id: 'doval', nome: "Doval", posicoes: ["ATA"], forca: 87 },
      { id: 'fio-maravilha', nome: "Fio Maravilha", posicoes: ["ATA"], forca: 82 },
      { id: 'silva-batuta', nome: "Silva Batuta", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1963 =====

  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 79 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 81 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1962 =====

  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Internacional",
    jogadores: [
      { id: 'gainete', nome: "Gainete", posicoes: ["GOL"], forca: 85 },
      { id: 'schneider', nome: "Schneider", posicoes: ["GOL"], forca: 73 },
      { id: 'claudio-mineiro', nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 88 },
      { id: 'pontes', nome: "Pontes", posicoes: ["ZAG"], forca: 82 },
      { id: 'vacaria', nome: "Vacaria", posicoes: ["LE"], forca: 80 },
      { id: 'falcao', nome: "Falcão", posicoes: ["VOL","MC"], forca: 93 },
      { id: 'dorinho', nome: "Dorinho", posicoes: ["VOL"], forca: 81 },
      { id: 'carpegiani', nome: "Carpegiani", posicoes: ["MC"], forca: 90 },
      { id: 'valdomiro', nome: "Valdomiro", posicoes: ["PD"], forca: 87 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'claudiomiro', nome: "Claudiomiro", posicoes: ["ATA"], forca: 86 },
      { id: 'escurinho', nome: "Escurinho", posicoes: ["PE"], forca: 84 },
      { id: 'braulio', nome: "Bráulio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 79 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 81 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Náutico",
    jogadores: [
      { id: 'lula', nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { id: 'nivaldo', nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { id: 'gena', nome: "Gena", posicoes: ["LD"], forca: 79 },
      { id: 'ivan-brondi', nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { id: 'claudio', nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { id: 'salomao', nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { id: 'nado', nome: "Nado", posicoes: ["MC"], forca: 81 },
      { id: 'ivson', nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { id: 'bita', nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { id: 'lala', nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { id: 'nino', nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { id: 'ramon', nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { id: 'beto', nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 1961 =====

  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 79 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 81 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1960 =====

  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fluminense",
    jogadores: [
      { id: 'felix', nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { id: 'paulo-henrique', nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { id: 'oliveira', nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { id: 'galhardo', nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { id: 'marco-antonio', nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { id: 'assis', nome: "Assis", posicoes: ["LE"], forca: 82 },
      { id: 'denilson', nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { id: 'claudio-garcia', nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'samarone', nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { id: 'cafuringa', nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { id: 'lula', nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { id: 'mickey', nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fortaleza",
    jogadores: [
      { id: 'marcial', nome: "Marcial", posicoes: ["GOL"], forca: 78 },
      { id: 'mimi', nome: "Mimi", posicoes: ["GOL"], forca: 72 },
      { id: 'louro', nome: "Louro", posicoes: ["LD"], forca: 79 },
      { id: 'clodoaldo', nome: "Clodoaldo", posicoes: ["ZAG"], forca: 82 },
      { id: 'elzo', nome: "Elzo", posicoes: ["ZAG"], forca: 79 },
      { id: 'jorge-costa', nome: "Jorge Costa", posicoes: ["LE"], forca: 78 },
      { id: 'croinha', nome: "Croinha", posicoes: ["VOL"], forca: 81 },
      { id: 'lucinho', nome: "Lucinho", posicoes: ["MC"], forca: 80 },
      { id: 'mozart', nome: "Mozart", posicoes: ["MEI"], forca: 81 },
      { id: 'dude', nome: "Dude", posicoes: ["PD"], forca: 82 },
      { id: 'flavio', nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { id: 'becece', nome: "Bececê", posicoes: ["ATA"], forca: 81 },
      { id: 'hamilton', nome: "Hamilton", posicoes: ["PE"], forca: 80 },
      { id: 'chicao', nome: "Chicão", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 79 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 81 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1959 =====

  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Bahia",
    jogadores: [
      { id: 'nadinho', nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { id: 'helinho', nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { id: 'vicente', nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { id: 'henrique', nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { id: 'mauro', nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { id: 'deca', nome: "Deca", posicoes: ["LE"], forca: 79 },
      { id: 'flavio', nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { id: 'baiaco', nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { id: 'alencar', nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { id: 'vicente-arenari', nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { id: 'biriba', nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { id: 'leo', nome: "Léo", posicoes: ["PE"], forca: 81 },
      { id: 'marito', nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { id: 'douglas', nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Santos",
    jogadores: [
      { id: 'gilmar', nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { id: 'laercio', nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { id: 'lima', nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { id: 'mauro-ramos', nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { id: 'calvet', nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { id: 'dalmo', nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { id: 'zito', nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { id: 'mengalvio', nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { id: 'dorval', nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { id: 'coutinho', nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { id: 'pele', nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { id: 'pepe', nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { id: 'pagao', nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { id: 'toninho-guerreiro', nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Grêmio",
    jogadores: [
      { id: 'alberto', nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { id: 'ancheta', nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { id: 'airton-pavilhao', nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { id: 'everaldo', nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { id: 'claudio-duarte', nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { id: 'foguinho', nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { id: 'juarez', nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { id: 'loivo', nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { id: 'tarciso', nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { id: 'joaozinho', nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { id: 'alcindo', nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { id: 'ortunho', nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { id: 'volmir', nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { id: 'yura', nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Vasco",
    jogadores: [
      { id: 'andrada', nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { id: 'miguel', nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { id: 'fidelis', nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { id: 'brito', nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { id: 'rene', nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { id: 'coronel', nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { id: 'orlando', nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { id: 'zanata', nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { id: 'alcir', nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { id: 'almir', nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { id: 'vava', nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { id: 'roberto-dinamite', nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { id: 'pinga', nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { id: 'sabara', nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Botafogo",
    jogadores: [
      { id: 'manga', nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { id: 'cao', nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { id: 'joel', nome: "Joel", posicoes: ["LD"], forca: 84 },
      { id: 'leonidas', nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { id: 'paulistano', nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { id: 'nilton-santos', nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { id: 'didi', nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'gerson', nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { id: 'zagallo', nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { id: 'garrincha', nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { id: 'quarentinha', nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { id: 'amarildo', nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { id: 'jairzinho', nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { id: 'roberto-miranda', nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Palmeiras",
    jogadores: [
      { id: 'valdir-de-moraes', nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { id: 'emerson-leao', nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { id: 'djalma-santos', nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { id: 'djalma-dias', nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { id: 'baldochi', nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { id: 'luis-pereira', nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { id: 'ferrari', nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { id: 'dudu', nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { id: 'zequinha', nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { id: 'ademir-da-guia', nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { id: 'tupazinho', nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { id: 'julinho-botelho', nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { id: 'servilio', nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { id: 'leivinha', nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  }

];
