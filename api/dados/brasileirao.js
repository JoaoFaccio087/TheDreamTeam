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
      { nome: "Agustín Rossi", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Royal", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Danilo", posicoes: ["ZAG","LD"], forca: 82 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 81 },
      { nome: "Ayrton Lucas", posicoes: ["LE","ME"], forca: 79 },
      { nome: "Alex Sandro", posicoes: ["LE","ZAG"], forca: 78 },
      { nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Jorginho", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Nicolás De La Cruz", posicoes: ["MEI","MC"], forca: 83 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 87 },
      { nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Samuel Lino", posicoes: ["PE","ATA"], forca: 80 },
      { nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 81 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 84 },
      { nome: "Gonzalo Plata", posicoes: ["PD","PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Carlos Miguel", posicoes: ["GOL"], forca: 80 },
      { nome: "Weverton", posicoes: ["GOL"], forca: 78 },
      { nome: "Khellven", posicoes: ["LD","MD"], forca: 76 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 83 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joaquín Piquerez", posicoes: ["LE","ME"], forca: 81 },
      { nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Emiliano Martínez", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Raphael Veiga", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Maurício", posicoes: ["MEI","PD"], forca: 80 },
      { nome: "Felipe Anderson", posicoes: ["PE","ATA"], forca: 80 },
      { nome: "Facundo Torres", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Vitor Roque", posicoes: ["ATA"], forca: 81 },
      { nome: "José López", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulinho", posicoes: ["ATA","PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 82 },
      { nome: "Léo Aragão", posicoes: ["GOL"], forca: 70 },
      { nome: "William", posicoes: ["LD","MD"], forca: 80 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jonathan Jesus", posicoes: ["ZAG"], forca: 76 },
      { nome: "Lucas Villalba", posicoes: ["ZAG","LE"], forca: 77 },
      { nome: "Kaiki", posicoes: ["LE"], forca: 75 },
      { nome: "Lucas Romero", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Lucas Silva", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Matheus Henrique", posicoes: ["MC","VOL"], forca: 80 },
      { nome: "Christian", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Matheus Pereira", posicoes: ["MEI","MC"], forca: 85 },
      { nome: "Dudu", posicoes: ["PE","PD"], forca: 78 },
      { nome: "Wanderson", posicoes: ["PE","ATA"], forca: 77 },
      { nome: "Kaio Jorge", posicoes: ["ATA"], forca: 83 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Mirassol",
    jogadores: [
      { nome: "Walter", posicoes: ["GOL"], forca: 78 },
      { nome: "Alex Muralha", posicoes: ["GOL"], forca: 74 },
      { nome: "Lucas Ramon", posicoes: ["LD"], forca: 74 },
      { nome: "João Victor", posicoes: ["ZAG"], forca: 75 },
      { nome: "Luiz Otávio", posicoes: ["ZAG"], forca: 76 },
      { nome: "Jemmes", posicoes: ["ZAG"], forca: 75 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 78 },
      { nome: "Neto Moura", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "José Aldo", posicoes: ["VOL","MC"], forca: 75 },
      { nome: "Danielzinho", posicoes: ["MC","MEI"], forca: 75 },
      { nome: "Gabriel", posicoes: ["MEI"], forca: 76 },
      { nome: "Negueba", posicoes: ["PD","PE"], forca: 77 },
      { nome: "Chico", posicoes: ["PE","ME"], forca: 76 },
      { nome: "Edson Carioca", posicoes: ["PD","PE"], forca: 74 },
      { nome: "Iury Castilho", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernandinho", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 81 },
      { nome: "Samuel Xavier", posicoes: ["LD","MD"], forca: 76 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ignácio", posicoes: ["ZAG"], forca: 77 },
      { nome: "Juan Pablo Freytes", posicoes: ["ZAG","LE"], forca: 76 },
      { nome: "Renê", posicoes: ["LE"], forca: 76 },
      { nome: "Gabriel Fuentes", posicoes: ["LE"], forca: 74 },
      { nome: "André", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Martinelli", posicoes: ["MC","VOL"], forca: 78 },
      { nome: "Hércules", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Keno", posicoes: ["PE","ATA"], forca: 77 },
      { nome: "Germán Cano", posicoes: ["ATA"], forca: 82 },
      { nome: "John Kennedy", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Botafogo",
    jogadores: [
      { nome: "John", posicoes: ["GOL"], forca: 80 },
      { nome: "Gatito Fernández", posicoes: ["GOL"], forca: 72 },
      { nome: "Vitinho", posicoes: ["LD","MD"], forca: 76 },
      { nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 79 },
      { nome: "Bastos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Adryelson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Alex Telles", posicoes: ["LE"], forca: 80 },
      { nome: "Cuiabano", posicoes: ["LE","ME"], forca: 76 },
      { nome: "Gregore", posicoes: ["VOL"], forca: 78 },
      { nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Danilo Barbosa", posicoes: ["MC","MEI"], forca: 75 },
      { nome: "Jefferson Savarino", posicoes: ["MEI","PD"], forca: 80 },
      { nome: "Matheus Martins", posicoes: ["PE","PD"], forca: 78 },
      { nome: "Artur", posicoes: ["PD","ATA"], forca: 78 },
      { nome: "Igor Jesus", posicoes: ["ATA"], forca: 79 },
      { nome: "Arthur Cabral", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 2024 =====

  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Botafogo",
    jogadores: [
      { nome: "John", posicoes: ["GOL"], forca: 80 },
      { nome: "Gatito Fernández", posicoes: ["GOL"], forca: 72 },
      { nome: "Vitinho", posicoes: ["LD","MD"], forca: 76 },
      { nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 79 },
      { nome: "Bastos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Adryelson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Alex Telles", posicoes: ["LE"], forca: 80 },
      { nome: "Cuiabano", posicoes: ["LE","ME"], forca: 76 },
      { nome: "Gregore", posicoes: ["VOL"], forca: 78 },
      { nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Thiago Almada", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Jefferson Savarino", posicoes: ["PD","MEI"], forca: 80 },
      { nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 83 },
      { nome: "Igor Jesus", posicoes: ["ATA"], forca: 79 },
      { nome: "Júnior Santos", posicoes: ["ATA","PE"], forca: 78 },
      { nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 75 },
      { nome: "Mayke", posicoes: ["LD"], forca: 74 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 83 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 80 },
      { nome: "Caio Paulista", posicoes: ["LE"], forca: 74 },
      { nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 78 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 82 },
      { nome: "Maurício", posicoes: ["MEI","PD"], forca: 78 },
      { nome: "Estêvão", posicoes: ["PD"], forca: 81 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Rony", posicoes: ["ATA","PE"], forca: 78 },
      { nome: "José López", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Flamengo",
    jogadores: [
      { nome: "Agustín Rossi", posicoes: ["GOL"], forca: 82 },
      { nome: "Guillermo Varela", posicoes: ["LD"], forca: 77 },
      { nome: "Wesley", posicoes: ["LD"], forca: 76 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 81 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 81 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 80 },
      { nome: "Ayrton Lucas", posicoes: ["LE"], forca: 79 },
      { nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Allan", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Gerson", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Nicolás De La Cruz", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 86 },
      { nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 78 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 84 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Fortaleza",
    jogadores: [
      { nome: "João Ricardo", posicoes: ["GOL"], forca: 79 },
      { nome: "Tinga", posicoes: ["LD","MD"], forca: 77 },
      { nome: "Emanuel Brítez", posicoes: ["ZAG"], forca: 78 },
      { nome: "Benjamín Kuscevic", posicoes: ["ZAG"], forca: 78 },
      { nome: "Titi", posicoes: ["ZAG"], forca: 76 },
      { nome: "Bruno Pacheco", posicoes: ["LE"], forca: 76 },
      { nome: "Lucas Sasha", posicoes: ["VOL"], forca: 76 },
      { nome: "Zé Welison", posicoes: ["VOL"], forca: 75 },
      { nome: "Hércules", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Tomás Pochettino", posicoes: ["MEI"], forca: 79 },
      { nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 79 },
      { nome: "Marinho", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Moisés", posicoes: ["PE","ATA"], forca: 78 },
      { nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 77 },
      { nome: "Juan Martín Lucero", posicoes: ["ATA"], forca: 80 },
      { nome: "Renato Kayzer", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Internacional",
    jogadores: [
      { nome: "Sergio Rochet", posicoes: ["GOL"], forca: 80 },
      { nome: "Fabricio Bustos", posicoes: ["LD"], forca: 76 },
      { nome: "Vitão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 76 },
      { nome: "Robert Renan", posicoes: ["ZAG"], forca: 76 },
      { nome: "Alexandro Bernabei", posicoes: ["LE"], forca: 78 },
      { nome: "Fernando", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Thiago Maia", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Bruno Henrique", posicoes: ["MC"], forca: 77 },
      { nome: "Alan Patrick", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Wesley", posicoes: ["PE","PD"], forca: 79 },
      { nome: "Wanderson", posicoes: ["PE","PD"], forca: 77 },
      { nome: "Enner Valencia", posicoes: ["ATA"], forca: 81 },
      { nome: "Rafael Borré", posicoes: ["ATA"], forca: 80 },
      { nome: "Lucas Alario", posicoes: ["ATA"], forca: 76 },
      { nome: "Maurício", posicoes: ["MC","MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rafael", posicoes: ["GOL"], forca: 80 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 76 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { nome: "Alan Franco", posicoes: ["ZAG"], forca: 78 },
      { nome: "Sabino", posicoes: ["ZAG"], forca: 75 },
      { nome: "Welington", posicoes: ["LE"], forca: 77 },
      { nome: "Pablo Maia", posicoes: ["VOL"], forca: 79 },
      { nome: "Alisson", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Damián Bobadilla", posicoes: ["MC"], forca: 76 },
      { nome: "Lucas Moura", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Luciano", posicoes: ["ATA","MEI"], forca: 80 },
      { nome: "Ferreira", posicoes: ["PE","PD"], forca: 78 },
      { nome: "Wellington Rato", posicoes: ["PD"], forca: 76 },
      { nome: "Calleri", posicoes: ["ATA"], forca: 81 },
      { nome: "André Silva", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2023 =====

  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 75 },
      { nome: "Mayke", posicoes: ["LD"], forca: 73 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 83 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 80 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Gabriel Menino", posicoes: ["VOL","MC"], forca: 76 },
      { nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 77 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 81 },
      { nome: "Artur", posicoes: ["PD","PE"], forca: 77 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 81 },
      { nome: "Rony", posicoes: ["ATA","PE"], forca: 79 },
      { nome: "Endrick", posicoes: ["ATA"], forca: 80 },
      { nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 75 },
      { nome: "José López", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Grêmio",
    jogadores: [
      { nome: "Gabriel Grando", posicoes: ["GOL"], forca: 76 },
      { nome: "João Pedro", posicoes: ["LD"], forca: 77 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 77 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 78 },
      { nome: "Fábio", posicoes: ["LD"], forca: 75 },
      { nome: "Mathías Villasanti", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Pepê", posicoes: ["MC"], forca: 77 },
      { nome: "Bitello", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Franco Cristaldo", posicoes: ["MEI"], forca: 79 },
      { nome: "Ferreira", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Everton Galdino", posicoes: ["PE"], forca: 75 },
      { nome: "Luis Suárez", posicoes: ["ATA"], forca: 88 },
      { nome: "João Pedro Galvão", posicoes: ["ATA"], forca: 75 },
      { nome: "Cuiabano", posicoes: ["PE","LE"], forca: 74 },
      { nome: "Carballo", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 80 },
      { nome: "Mariano", posicoes: ["LD"], forca: 75 },
      { nome: "Renzo Saravia", posicoes: ["LD"], forca: 75 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Mauricio Lemos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 80 },
      { nome: "Rodrigo Battaglia", posicoes: ["VOL"], forca: 78 },
      { nome: "Otávio", posicoes: ["VOL"], forca: 77 },
      { nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Edenílson", posicoes: ["MC"], forca: 77 },
      { nome: "Igor Gomes", posicoes: ["MEI"], forca: 76 },
      { nome: "Paulinho", posicoes: ["PD","ATA"], forca: 84 },
      { nome: "Hulk", posicoes: ["ATA","PD"], forca: 84 },
      { nome: "Cristian Pavón", posicoes: ["PD","PE"], forca: 77 },
      { nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 76 },
      { nome: "Alan Kardec", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Flamengo",
    jogadores: [
      { nome: "Matheus Cunha", posicoes: ["GOL"], forca: 77 },
      { nome: "Santos", posicoes: ["GOL"], forca: 76 },
      { nome: "Guillermo Varela", posicoes: ["LD"], forca: 76 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Luiz", posicoes: ["ZAG"], forca: 79 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 79 },
      { nome: "Ayrton Lucas", posicoes: ["LE"], forca: 80 },
      { nome: "Erick Pulgar", posicoes: ["VOL"], forca: 79 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 78 },
      { nome: "Gerson", posicoes: ["MC"], forca: 80 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 82 },
      { nome: "Bruno Henrique", posicoes: ["PE"], forca: 82 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 78 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 83 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Botafogo",
    jogadores: [
      { nome: "Lucas Perri", posicoes: ["GOL"], forca: 81 },
      { nome: "Leonel Di Plácido", posicoes: ["LD"], forca: 75 },
      { nome: "Adryelson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 78 },
      { nome: "Marçal", posicoes: ["LE"], forca: 77 },
      { nome: "Tchê Tchê", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Marlon Freitas", posicoes: ["MC"], forca: 78 },
      { nome: "Gabriel Pires", posicoes: ["MC","MEI"], forca: 76 },
      { nome: "Eduardo", posicoes: ["MEI"], forca: 80 },
      { nome: "Lucas Fernandes", posicoes: ["MEI"], forca: 76 },
      { nome: "Victor Sá", posicoes: ["PE"], forca: 77 },
      { nome: "Júnior Santos", posicoes: ["PD","ATA"], forca: 78 },
      { nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 84 },
      { nome: "Diego Costa", posicoes: ["ATA"], forca: 77 },
      { nome: "Segovia", posicoes: ["PD"], forca: 73 },
      { nome: "Carlos Alberto", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Red Bull Bragantino",
    jogadores: [
      { nome: "Cleiton", posicoes: ["GOL"], forca: 78 },
      { nome: "Aderlan", posicoes: ["LD"], forca: 75 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 80 },
      { nome: "Natan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Juninho Capixaba", posicoes: ["LE"], forca: 78 },
      { nome: "Lucas Evangelista", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Matheus Fernandes", posicoes: ["VOL"], forca: 76 },
      { nome: "Jadsom", posicoes: ["MC"], forca: 76 },
      { nome: "Eric Ramires", posicoes: ["MC"], forca: 76 },
      { nome: "Helinho", posicoes: ["PD"], forca: 79 },
      { nome: "Vitinho", posicoes: ["PE"], forca: 77 },
      { nome: "Sorriso", posicoes: ["PE"], forca: 75 },
      { nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 80 },
      { nome: "Thiago Borbas", posicoes: ["ATA"], forca: 77 },
      { nome: "Alerrandro", posicoes: ["ATA"], forca: 76 },
      { nome: "Talisson", posicoes: ["PD"], forca: 74 }
    ]
  },

  // ===== Edição 2022 =====

  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 83 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 79 },
      { nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 84 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 81 },
      { nome: "Danilo", posicoes: ["VOL"], forca: 82 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Gabriel Menino", posicoes: ["MC","LD"], forca: 77 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 84 },
      { nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 83 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Rony", posicoes: ["ATA","PD"], forca: 82 },
      { nome: "Rafael Navarro", posicoes: ["ATA"], forca: 76 },
      { nome: "José López", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Internacional",
    jogadores: [
      { nome: "Daniel", posicoes: ["GOL"], forca: 78 },
      { nome: "Fabricio Bustos", posicoes: ["LD"], forca: 77 },
      { nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 77 },
      { nome: "Vitão", posicoes: ["ZAG"], forca: 77 },
      { nome: "Renê", posicoes: ["LE"], forca: 76 },
      { nome: "Moisés", posicoes: ["LE"], forca: 74 },
      { nome: "Edenílson", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Johnny", posicoes: ["VOL"], forca: 77 },
      { nome: "Alan Patrick", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Carlos de Pena", posicoes: ["MEI","PE"], forca: 78 },
      { nome: "Maurício", posicoes: ["MEI"], forca: 78 },
      { nome: "Wanderson", posicoes: ["PE","PD"], forca: 78 },
      { nome: "Pedro Henrique", posicoes: ["PD"], forca: 79 },
      { nome: "Alemão", posicoes: ["ATA"], forca: 77 },
      { nome: "Taison", posicoes: ["PE","MEI"], forca: 78 },
      { nome: "Liziero", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 80 },
      { nome: "Samuel Xavier", posicoes: ["LD"], forca: 76 },
      { nome: "Nino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 78 },
      { nome: "David Braz", posicoes: ["ZAG"], forca: 75 },
      { nome: "Caio Paulista", posicoes: ["LE","ME"], forca: 76 },
      { nome: "André", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Martinelli", posicoes: ["MC"], forca: 76 },
      { nome: "Nonato", posicoes: ["MC"], forca: 76 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 80 },
      { nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 81 },
      { nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Germán Cano", posicoes: ["ATA"], forca: 86 },
      { nome: "Willian Bigode", posicoes: ["ATA"], forca: 76 },
      { nome: "Yago Felipe", posicoes: ["MC"], forca: 76 },
      { nome: "Nathan", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 83 },
      { nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 79 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 77 },
      { nome: "Lucas Piton", posicoes: ["LE"], forca: 76 },
      { nome: "Du Queiroz", posicoes: ["VOL"], forca: 77 },
      { nome: "Maycon", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Renato Augusto", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Giuliano", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 82 },
      { nome: "Willian", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Yuri Alberto", posicoes: ["ATA"], forca: 80 },
      { nome: "Adson", posicoes: ["PD"], forca: 76 },
      { nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 76 },
      { nome: "Fausto Vera", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Flamengo",
    jogadores: [
      { nome: "Santos", posicoes: ["GOL"], forca: 82 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 79 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 80 },
      { nome: "Ayrton Lucas", posicoes: ["LE"], forca: 78 },
      { nome: "David Luiz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 80 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 80 },
      { nome: "João Gomes", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Arturo Vidal", posicoes: ["MC"], forca: 83 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 87 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 83 },
      { nome: "Bruno Henrique", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 86 },
      { nome: "Diego", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Bento", posicoes: ["GOL"], forca: 81 },
      { nome: "Khellven", posicoes: ["LD"], forca: 76 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 76 },
      { nome: "Abner Vinícius", posicoes: ["LE"], forca: 77 },
      { nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Hugo Moura", posicoes: ["VOL"], forca: 75 },
      { nome: "Alex Santana", posicoes: ["MC"], forca: 75 },
      { nome: "David Terans", posicoes: ["MEI"], forca: 76 },
      { nome: "Vitor Bueno", posicoes: ["MEI","MD"], forca: 75 },
      { nome: "Vitinho", posicoes: ["PD"], forca: 76 },
      { nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 76 },
      { nome: "Vitor Roque", posicoes: ["ATA"], forca: 79 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 75 },
      { nome: "Matheus Felipe", posicoes: ["ZAG"], forca: 72 },
      { nome: "Léo Cittadini", posicoes: ["MC"], forca: 74 }
    ]
  },

  // ===== Edição 2021 =====

  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 82 },
      { nome: "Mariano", posicoes: ["LD"], forca: 78 },
      { nome: "Guga", posicoes: ["LD"], forca: 75 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 77 },
      { nome: "Nathan Silva", posicoes: ["ZAG"], forca: 77 },
      { nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 78 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 81 },
      { nome: "Jair", posicoes: ["VOL"], forca: 79 },
      { nome: "Allan", posicoes: ["VOL"], forca: 77 },
      { nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Nacho Fernández", posicoes: ["MEI"], forca: 82 },
      { nome: "Hulk", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Keno", posicoes: ["PE"], forca: 79 },
      { nome: "Eduardo Vargas", posicoes: ["ATA","PD"], forca: 78 },
      { nome: "Diego Costa", posicoes: ["ATA"], forca: 80 },
      { nome: "Jefferson Savarino", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 80 },
      { nome: "Maurício Isla", posicoes: ["LD"], forca: 78 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 81 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Luiz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 79 },
      { nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 80 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 79 },
      { nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 84 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 84 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 83 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 86 },
      { nome: "Renê", posicoes: ["LE"], forca: 74 },
      { nome: "Hugo Souza", posicoes: ["GOL"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 83 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 79 },
      { nome: "Mayke", posicoes: ["LD"], forca: 75 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 84 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 80 },
      { nome: "Felipe Melo", posicoes: ["VOL","ZAG"], forca: 78 },
      { nome: "Danilo", posicoes: ["VOL"], forca: 80 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Gabriel Menino", posicoes: ["MC"], forca: 76 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 83 },
      { nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 81 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Rony", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Deyverson", posicoes: ["ATA"], forca: 76 },
      { nome: "Breno Lopes", posicoes: ["PD"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Fortaleza",
    jogadores: [
      { nome: "Felipe Alves", posicoes: ["GOL"], forca: 78 },
      { nome: "Tinga", posicoes: ["LD","MD"], forca: 77 },
      { nome: "Marcelo Benevenuto", posicoes: ["ZAG"], forca: 78 },
      { nome: "Titi", posicoes: ["ZAG"], forca: 76 },
      { nome: "Bruno Melo", posicoes: ["LE"], forca: 75 },
      { nome: "Lucas Crispim", posicoes: ["ME","LE"], forca: 77 },
      { nome: "Felipe", posicoes: ["VOL"], forca: 76 },
      { nome: "Ronald", posicoes: ["VOL"], forca: 75 },
      { nome: "Éderson", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Matheus Vargas", posicoes: ["MEI"], forca: 76 },
      { nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 80 },
      { nome: "David", posicoes: ["PE"], forca: 78 },
      { nome: "Robson", posicoes: ["ATA"], forca: 78 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 76 },
      { nome: "Romarinho", posicoes: ["PD"], forca: 75 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 81 },
      { nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { nome: "João Victor", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 77 },
      { nome: "Lucas Piton", posicoes: ["LE"], forca: 75 },
      { nome: "Gabriel", posicoes: ["VOL"], forca: 76 },
      { nome: "Cantillo", posicoes: ["MC"], forca: 76 },
      { nome: "Du Queiroz", posicoes: ["MC"], forca: 75 },
      { nome: "Renato Augusto", posicoes: ["MEI","MC"], forca: 82 },
      { nome: "Giuliano", posicoes: ["MEI","MC"], forca: 79 },
      { nome: "Willian", posicoes: ["PE"], forca: 81 },
      { nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 82 },
      { nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 78 },
      { nome: "Jô", posicoes: ["ATA"], forca: 76 },
      { nome: "Gabriel Pereira", posicoes: ["PD"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Red Bull Bragantino",
    jogadores: [
      { nome: "Cleiton", posicoes: ["GOL"], forca: 78 },
      { nome: "Aderlan", posicoes: ["LD"], forca: 75 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 79 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luan Cândido", posicoes: ["LE"], forca: 77 },
      { nome: "Edimar", posicoes: ["LE"], forca: 74 },
      { nome: "Raul", posicoes: ["VOL"], forca: 77 },
      { nome: "Jadsom", posicoes: ["VOL"], forca: 76 },
      { nome: "Eric Ramires", posicoes: ["MC"], forca: 76 },
      { nome: "Lucas Evangelista", posicoes: ["MC"], forca: 78 },
      { nome: "Claudinho", posicoes: ["MEI"], forca: 83 },
      { nome: "Artur", posicoes: ["PD"], forca: 82 },
      { nome: "Helinho", posicoes: ["PD"], forca: 78 },
      { nome: "Ytalo", posicoes: ["ATA"], forca: 80 },
      { nome: "Alerrandro", posicoes: ["ATA"], forca: 76 },
      { nome: "Jan Hurtado", posicoes: ["ATA"], forca: 74 }
    ]
  },

  // ===== Edição 2020 =====

  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 81 },
      { nome: "Maurício Isla", posicoes: ["LD"], forca: 78 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 77 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 77 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 81 },
      { nome: "Gerson", posicoes: ["MC"], forca: 84 },
      { nome: "Diego", posicoes: ["MEI"], forca: 79 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 84 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 84 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 85 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 83 },
      { nome: "Vitinho", posicoes: ["PD","PE"], forca: 77 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Internacional",
    jogadores: [
      { nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 79 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 80 },
      { nome: "Moisés", posicoes: ["LE"], forca: 74 },
      { nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 78 },
      { nome: "Edenílson", posicoes: ["MC"], forca: 82 },
      { nome: "Patrick", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 79 },
      { nome: "Bruno Praxedes", posicoes: ["MEI"], forca: 76 },
      { nome: "Thiago Galhardo", posicoes: ["MEI","ATA"], forca: 83 },
      { nome: "Yuri Alberto", posicoes: ["ATA"], forca: 77 },
      { nome: "Abel Hernández", posicoes: ["ATA"], forca: 76 },
      { nome: "Marcos Guilherme", posicoes: ["PE"], forca: 75 },
      { nome: "Peglow", posicoes: ["PD"], forca: 73 },
      { nome: "Nonato", posicoes: ["VOL"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 79 },
      { nome: "Guga", posicoes: ["LD"], forca: 76 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 78 },
      { nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 79 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 80 },
      { nome: "Allan", posicoes: ["VOL"], forca: 77 },
      { nome: "Jair", posicoes: ["VOL"], forca: 77 },
      { nome: "Alan Franco", posicoes: ["MC"], forca: 76 },
      { nome: "Nathan", posicoes: ["MEI"], forca: 78 },
      { nome: "Hyoran", posicoes: ["MEI"], forca: 77 },
      { nome: "Jefferson Savarino", posicoes: ["PD"], forca: 80 },
      { nome: "Keno", posicoes: ["PE"], forca: 82 },
      { nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 78 },
      { nome: "Marrony", posicoes: ["ATA"], forca: 76 },
      { nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 77 },
      { nome: "Igor Rabello", posicoes: ["ZAG"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "São Paulo",
    jogadores: [
      { nome: "Tiago Volpi", posicoes: ["GOL"], forca: 80 },
      { nome: "Juanfran", posicoes: ["LD"], forca: 78 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 78 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 80 },
      { nome: "Luan", posicoes: ["VOL"], forca: 78 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 77 },
      { nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 81 },
      { nome: "Gabriel Sara", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Igor Gomes", posicoes: ["MEI"], forca: 78 },
      { nome: "Hernanes", posicoes: ["MEI"], forca: 77 },
      { nome: "Luciano", posicoes: ["ATA","MEI"], forca: 82 },
      { nome: "Brenner", posicoes: ["ATA"], forca: 82 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 76 },
      { nome: "Vitor Bueno", posicoes: ["MEI"], forca: 76 },
      { nome: "Igor Vinícius", posicoes: ["LD"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Fluminense",
    jogadores: [
      { nome: "Muriel", posicoes: ["GOL"], forca: 76 },
      { nome: "Calegari", posicoes: ["LD"], forca: 75 },
      { nome: "Nino", posicoes: ["ZAG"], forca: 79 },
      { nome: "Luccas Claro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Egídio", posicoes: ["LE"], forca: 75 },
      { nome: "Yuri", posicoes: ["VOL"], forca: 75 },
      { nome: "Dodi", posicoes: ["VOL"], forca: 77 },
      { nome: "Hudson", posicoes: ["MC"], forca: 76 },
      { nome: "Nenê", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 78 },
      { nome: "Marcos Paulo", posicoes: ["PE"], forca: 77 },
      { nome: "Wellington Silva", posicoes: ["PE"], forca: 76 },
      { nome: "Fred", posicoes: ["ATA"], forca: 80 },
      { nome: "Evanilson", posicoes: ["ATA"], forca: 79 },
      { nome: "Luiz Henrique", posicoes: ["PD","PE"], forca: 76 },
      { nome: "Caio Paulista", posicoes: ["ME","ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Grêmio",
    jogadores: [
      { nome: "Vanderlei", posicoes: ["GOL"], forca: 78 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 77 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 82 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Cortez", posicoes: ["LE"], forca: 76 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 76 },
      { nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Maicon", posicoes: ["MC"], forca: 79 },
      { nome: "Lucas Silva", posicoes: ["VOL"], forca: 77 },
      { nome: "Jean Pyerre", posicoes: ["MEI"], forca: 79 },
      { nome: "Pepê", posicoes: ["PE"], forca: 81 },
      { nome: "Alisson", posicoes: ["PD"], forca: 76 },
      { nome: "Diego Souza", posicoes: ["ATA"], forca: 81 },
      { nome: "Ferreira", posicoes: ["PE","PD"], forca: 76 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 83 },
      { nome: "Darlan", posicoes: ["MC"], forca: 75 }
    ]
  },

  // ===== Edição 2019 =====

  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 80 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Pablo Marí", posicoes: ["ZAG"], forca: 78 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { nome: "Willian Arão", posicoes: ["VOL"], forca: 79 },
      { nome: "Gerson", posicoes: ["MC"], forca: 82 },
      { nome: "Diego", posicoes: ["MEI"], forca: 79 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 83 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 86 },
      { nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 88 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 90 },
      { nome: "Vitinho", posicoes: ["PD","PE"], forca: 76 },
      { nome: "Lincoln", posicoes: ["ATA"], forca: 70 },
      { nome: "Renê", posicoes: ["LE"], forca: 74 },
      { nome: "Cuéllar", posicoes: ["VOL"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Santos",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 80 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 78 },
      { nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 79 },
      { nome: "Jorge", posicoes: ["LE"], forca: 81 },
      { nome: "Felipe Jonatan", posicoes: ["LE"], forca: 77 },
      { nome: "Alison", posicoes: ["VOL"], forca: 77 },
      { nome: "Diego Pituca", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Carlos Sánchez", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Jean Mota", posicoes: ["MEI","MC"], forca: 79 },
      { nome: "Soteldo", posicoes: ["PE","PD"], forca: 82 },
      { nome: "Marinho", posicoes: ["PD","ATA"], forca: 80 },
      { nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 80 },
      { nome: "Derlis González", posicoes: ["PD"], forca: 77 },
      { nome: "Fernando Uribe", posicoes: ["ATA"], forca: 75 },
      { nome: "Tailson", posicoes: ["PE"], forca: 72 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 82 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 78 },
      { nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 77 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 76 },
      { nome: "Victor Luis", posicoes: ["LE"], forca: 75 },
      { nome: "Felipe Melo", posicoes: ["VOL"], forca: 80 },
      { nome: "Bruno Henrique", posicoes: ["MC"], forca: 80 },
      { nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 79 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 76 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Deyverson", posicoes: ["ATA"], forca: 77 },
      { nome: "Miguel Borja", posicoes: ["ATA"], forca: 76 },
      { nome: "Willian", posicoes: ["ATA","PD"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Grêmio",
    jogadores: [
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 76 },
      { nome: "Leonardo Gomes", posicoes: ["LD"], forca: 75 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 82 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { nome: "Cortez", posicoes: ["LE"], forca: 77 },
      { nome: "Maicon", posicoes: ["VOL"], forca: 80 },
      { nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Michel", posicoes: ["MC"], forca: 74 },
      { nome: "Jean Pyerre", posicoes: ["MEI"], forca: 76 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 84 },
      { nome: "Alisson", posicoes: ["PD"], forca: 76 },
      { nome: "André", posicoes: ["ATA"], forca: 73 },
      { nome: "Pepê", posicoes: ["PD","PE"], forca: 74 },
      { nome: "Bressan", posicoes: ["ZAG"], forca: 74 },
      { nome: "Thaciano", posicoes: ["MEI"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Santos", posicoes: ["GOL"], forca: 81 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 77 },
      { nome: "Madson", posicoes: ["LD"], forca: 75 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 80 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { nome: "Márcio Azevedo", posicoes: ["LE"], forca: 75 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 77 },
      { nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 83 },
      { nome: "Lucho González", posicoes: ["MC"], forca: 77 },
      { nome: "Léo Cittadini", posicoes: ["MEI"], forca: 76 },
      { nome: "Nikão", posicoes: ["PD","MEI"], forca: 80 },
      { nome: "Marcelo Cirino", posicoes: ["PD","ATA"], forca: 78 },
      { nome: "Rony", posicoes: ["PE","ATA"], forca: 81 },
      { nome: "Marco Ruben", posicoes: ["ATA"], forca: 78 },
      { nome: "Camacho", posicoes: ["MC"], forca: 75 },
      { nome: "Adriano", posicoes: ["LE"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "São Paulo",
    jogadores: [
      { nome: "Tiago Volpi", posicoes: ["GOL"], forca: 80 },
      { nome: "Juanfran", posicoes: ["LD"], forca: 78 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 78 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 79 },
      { nome: "Liziero", posicoes: ["VOL"], forca: 76 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 77 },
      { nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 81 },
      { nome: "Hernanes", posicoes: ["MEI"], forca: 78 },
      { nome: "Igor Gomes", posicoes: ["MEI"], forca: 77 },
      { nome: "Antony", posicoes: ["PD"], forca: 80 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 77 },
      { nome: "Alexandre Pato", posicoes: ["ATA"], forca: 78 },
      { nome: "Vitor Bueno", posicoes: ["MEI"], forca: 76 },
      { nome: "Everton", posicoes: ["PE"], forca: 76 },
      { nome: "Toró", posicoes: ["PD"], forca: 73 }
    ]
  },

  // ===== Edição 2018 =====

  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 75 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 78 },
      { nome: "Mayke", posicoes: ["LD"], forca: 74 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 76 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 76 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 77 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 74 },
      { nome: "Felipe Melo", posicoes: ["VOL"], forca: 79 },
      { nome: "Thiago Santos", posicoes: ["VOL"], forca: 74 },
      { nome: "Bruno Henrique", posicoes: ["MC"], forca: 75 },
      { nome: "Moisés", posicoes: ["MC","MEI"], forca: 75 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 78 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Willian", posicoes: ["ATA","PD"], forca: 78 },
      { nome: "Miguel Borja", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 80 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { nome: "Pará", posicoes: ["LD"], forca: 75 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 77 },
      { nome: "Léo Duarte", posicoes: ["ZAG"], forca: 77 },
      { nome: "Renê", posicoes: ["LE"], forca: 76 },
      { nome: "Miguel Trauco", posicoes: ["LE"], forca: 75 },
      { nome: "Cuéllar", posicoes: ["VOL"], forca: 80 },
      { nome: "Lucas Paquetá", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 81 },
      { nome: "Vitinho", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Marlos Moreno", posicoes: ["PE"], forca: 75 },
      { nome: "Henrique Dourado", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernando Uribe", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Internacional",
    jogadores: [
      { nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 80 },
      { nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 75 },
      { nome: "Zeca", posicoes: ["LD"], forca: 76 },
      { nome: "Fabiano", posicoes: ["LD"], forca: 74 },
      { nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 80 },
      { nome: "Iago", posicoes: ["LE"], forca: 77 },
      { nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 81 },
      { nome: "Edenílson", posicoes: ["MC"], forca: 81 },
      { nome: "Patrick", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 80 },
      { nome: "Nico López", posicoes: ["PD","PE"], forca: 80 },
      { nome: "William Pottker", posicoes: ["PD"], forca: 77 },
      { nome: "Leandro Damião", posicoes: ["ATA"], forca: 79 },
      { nome: "Rossi", posicoes: ["PD","PE"], forca: 75 },
      { nome: "Jonatan Álvez", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 80 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 74 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 81 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 79 },
      { nome: "Bruno Cortez", posicoes: ["LE"], forca: 75 },
      { nome: "Maicon", posicoes: ["VOL"], forca: 78 },
      { nome: "Michel", posicoes: ["VOL"], forca: 73 },
      { nome: "Jailson", posicoes: ["VOL"], forca: 73 },
      { nome: "Ramiro", posicoes: ["MC","MD"], forca: 75 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Everton", posicoes: ["PE","ATA"], forca: 80 },
      { nome: "Alisson", posicoes: ["PD"], forca: 74 },
      { nome: "André", posicoes: ["ATA"], forca: 74 },
      { nome: "Jael", posicoes: ["ATA"], forca: 72 },
      { nome: "Bressan", posicoes: ["ZAG"], forca: 73 },
      { nome: "Thaciano", posicoes: ["MEI"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "São Paulo",
    jogadores: [
      { nome: "Sidão", posicoes: ["GOL"], forca: 76 },
      { nome: "Jean", posicoes: ["GOL"], forca: 74 },
      { nome: "Bruno Peres", posicoes: ["LD"], forca: 76 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 79 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 77 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 79 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 78 },
      { nome: "Jucilei", posicoes: ["VOL"], forca: 77 },
      { nome: "Liziero", posicoes: ["MC"], forca: 76 },
      { nome: "Nenê", posicoes: ["MEI"], forca: 81 },
      { nome: "Diego Souza", posicoes: ["ATA","MEI"], forca: 79 },
      { nome: "Everton", posicoes: ["PE"], forca: 79 },
      { nome: "Joao Rojas", posicoes: ["PD"], forca: 78 },
      { nome: "Santiago Tréllez", posicoes: ["ATA"], forca: 74 },
      { nome: "Brenner", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 80 },
      { nome: "Patric", posicoes: ["LD"], forca: 75 },
      { nome: "Emerson", posicoes: ["LD"], forca: 76 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gabriel", posicoes: ["ZAG"], forca: 76 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 78 },
      { nome: "Adilson", posicoes: ["VOL"], forca: 77 },
      { nome: "Elias", posicoes: ["MC"], forca: 78 },
      { nome: "Cazares", posicoes: ["MEI"], forca: 80 },
      { nome: "Luan", posicoes: ["PD"], forca: 78 },
      { nome: "Chará", posicoes: ["PE"], forca: 77 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 81 },
      { nome: "Tomás Andrade", posicoes: ["MEI"], forca: 74 },
      { nome: "Róger Guedes", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Otero", posicoes: ["MEI","PE"], forca: 77 },
      { nome: "Alerrandro", posicoes: ["ATA"], forca: 73 }
    ]
  },

  // ===== Edição 2017 =====

  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 83 },
      { nome: "Fagner", posicoes: ["LD"], forca: 81 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { nome: "Pablo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 75 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 81 },
      { nome: "Gabriel", posicoes: ["VOL"], forca: 79 },
      { nome: "Maycon", posicoes: ["MC"], forca: 79 },
      { nome: "Rodriguinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 82 },
      { nome: "Ángel Romero", posicoes: ["PD"], forca: 80 },
      { nome: "Clayson", posicoes: ["PE"], forca: 77 },
      { nome: "Jô", posicoes: ["ATA"], forca: 85 },
      { nome: "Kazim", posicoes: ["ATA"], forca: 73 },
      { nome: "Marquinhos Gabriel", posicoes: ["MEI"], forca: 76 },
      { nome: "Camacho", posicoes: ["MC"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 79 },
      { nome: "Jailson", posicoes: ["GOL"], forca: 78 },
      { nome: "Jean", posicoes: ["LD"], forca: 77 },
      { nome: "Mayke", posicoes: ["LD"], forca: 74 },
      { nome: "Yerry Mina", posicoes: ["ZAG"], forca: 82 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 77 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 75 },
      { nome: "Egídio", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 80 },
      { nome: "Felipe Melo", posicoes: ["VOL"], forca: 80 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 78 },
      { nome: "Moisés", posicoes: ["MC","MEI"], forca: 76 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 83 },
      { nome: "Willian", posicoes: ["ATA","PD"], forca: 79 },
      { nome: "Miguel Borja", posicoes: ["ATA"], forca: 78 },
      { nome: "Keno", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Santos",
    jogadores: [
      { nome: "Vanderlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 79 },
      { nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 78 },
      { nome: "David Braz", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 77 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Renato", posicoes: ["VOL"], forca: 78 },
      { nome: "Alison", posicoes: ["VOL"], forca: 76 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 79 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 82 },
      { nome: "Bruno Henrique", posicoes: ["PE"], forca: 82 },
      { nome: "Copete", posicoes: ["PE"], forca: 77 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 81 },
      { nome: "Kayke", posicoes: ["ATA"], forca: 74 },
      { nome: "Rodrygo", posicoes: ["PD"], forca: 73 },
      { nome: "Jean Mota", posicoes: ["MEI"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 84 },
      { nome: "Edílson", posicoes: ["LD"], forca: 77 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 83 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Cortez", posicoes: ["LE"], forca: 78 },
      { nome: "Maicon", posicoes: ["VOL"], forca: 81 },
      { nome: "Arthur", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Michel", posicoes: ["VOL"], forca: 75 },
      { nome: "Ramiro", posicoes: ["MC","MD"], forca: 78 },
      { nome: "Cícero", posicoes: ["MEI"], forca: 75 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 79 },
      { nome: "Fernandinho", posicoes: ["PD"], forca: 74 },
      { nome: "Lucas Barrios", posicoes: ["ATA"], forca: 77 },
      { nome: "Pedro Rocha", posicoes: ["PD","ATA"], forca: 75 },
      { nome: "Bressan", posicoes: ["ZAG"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 82 },
      { nome: "Ezequiel", posicoes: ["LD"], forca: 75 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 77 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 79 },
      { nome: "Henrique", posicoes: ["VOL"], forca: 80 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 77 },
      { nome: "Lucas Romero", posicoes: ["VOL"], forca: 77 },
      { nome: "Robinho", posicoes: ["MEI"], forca: 78 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 82 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 83 },
      { nome: "Alisson", posicoes: ["PD"], forca: 77 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 79 },
      { nome: "Sassá", posicoes: ["ATA"], forca: 75 },
      { nome: "Ramón Ábila", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 80 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { nome: "Pará", posicoes: ["LD"], forca: 75 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 76 },
      { nome: "Miguel Trauco", posicoes: ["LE"], forca: 77 },
      { nome: "Renê", posicoes: ["LE"], forca: 75 },
      { nome: "Márcio Araújo", posicoes: ["VOL"], forca: 76 },
      { nome: "Willian Arão", posicoes: ["VOL"], forca: 79 },
      { nome: "Diego", posicoes: ["MEI"], forca: 82 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 82 },
      { nome: "Éverton", posicoes: ["PE"], forca: 78 },
      { nome: "Orlando Berrío", posicoes: ["PD"], forca: 77 },
      { nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 82 },
      { nome: "Vinícius Júnior", posicoes: ["PE"], forca: 75 }
    ]
  },

  // ===== Edição 2016 =====

  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { nome: "Jailson", posicoes: ["GOL"], forca: 81 },
      { nome: "Jean", posicoes: ["LD"], forca: 78 },
      { nome: "Fabiano", posicoes: ["LD"], forca: 77 },
      { nome: "Yerry Mina", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vitor Hugo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 77 },
      { nome: "Egídio", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 80 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 80 },
      { nome: "Moisés", posicoes: ["MEI"], forca: 81 },
      { nome: "Cleiton Xavier", posicoes: ["MEI"], forca: 76 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 83 },
      { nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 86 },
      { nome: "Róger Guedes", posicoes: ["PE"], forca: 78 },
      { nome: "Lucas Barrios", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Santos",
    jogadores: [
      { nome: "Vanderlei", posicoes: ["GOL"], forca: 81 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 79 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 78 },
      { nome: "David Braz", posicoes: ["ZAG"], forca: 77 },
      { nome: "Luiz Felipe", posicoes: ["ZAG"], forca: 75 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Renato", posicoes: ["VOL"], forca: 78 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 79 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 83 },
      { nome: "Vitor Bueno", posicoes: ["MEI","PD"], forca: 80 },
      { nome: "Copete", posicoes: ["PE"], forca: 77 },
      { nome: "Gabriel Barbosa", posicoes: ["PD","ATA"], forca: 83 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 81 },
      { nome: "Rodrigão", posicoes: ["ATA"], forca: 76 },
      { nome: "Jean Mota", posicoes: ["MEI"], forca: 75 },
      { nome: "Léo Cittadini", posicoes: ["MC"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Flamengo",
    jogadores: [
      { nome: "Alex Muralha", posicoes: ["GOL"], forca: 79 },
      { nome: "Pará", posicoes: ["LD"], forca: 75 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 76 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { nome: "Rafael Vaz", posicoes: ["ZAG"], forca: 76 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 76 },
      { nome: "Jorge", posicoes: ["LE"], forca: 78 },
      { nome: "Márcio Araújo", posicoes: ["VOL"], forca: 76 },
      { nome: "Willian Arão", posicoes: ["VOL"], forca: 79 },
      { nome: "Mancuello", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { nome: "Alan Patrick", posicoes: ["MEI"], forca: 78 },
      { nome: "Éverton", posicoes: ["PE"], forca: 78 },
      { nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 82 },
      { nome: "Fernandinho", posicoes: ["PE"], forca: 77 },
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 81 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { nome: "Erazo", posicoes: ["ZAG"], forca: 76 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gabriel", posicoes: ["ZAG"], forca: 75 },
      { nome: "Douglas Santos", posicoes: ["LE"], forca: 80 },
      { nome: "Júnior Urso", posicoes: ["VOL"], forca: 78 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 78 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 79 },
      { nome: "Cazares", posicoes: ["MEI"], forca: 80 },
      { nome: "Robinho", posicoes: ["PD"], forca: 83 },
      { nome: "Luan", posicoes: ["PE"], forca: 79 },
      { nome: "Maicosuel", posicoes: ["PD"], forca: 77 },
      { nome: "Fred", posicoes: ["ATA"], forca: 82 },
      { nome: "Lucas Pratto", posicoes: ["ATA"], forca: 82 },
      { nome: "Carlos", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Botafogo",
    jogadores: [
      { nome: "Sidão", posicoes: ["GOL"], forca: 78 },
      { nome: "Jefferson", posicoes: ["GOL"], forca: 79 },
      { nome: "Luis Ricardo", posicoes: ["LD"], forca: 75 },
      { nome: "Emerson Santos", posicoes: ["ZAG"], forca: 76 },
      { nome: "Joel Carli", posicoes: ["ZAG"], forca: 78 },
      { nome: "Renan Fonseca", posicoes: ["ZAG"], forca: 75 },
      { nome: "Victor Luis", posicoes: ["LE"], forca: 76 },
      { nome: "Bruno Silva", posicoes: ["VOL"], forca: 78 },
      { nome: "Airton", posicoes: ["VOL"], forca: 76 },
      { nome: "Rodrigo Lindoso", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Camilo", posicoes: ["MEI"], forca: 81 },
      { nome: "Neilton", posicoes: ["PE"], forca: 78 },
      { nome: "Sassá", posicoes: ["ATA"], forca: 78 },
      { nome: "Rodrigo Pimpão", posicoes: ["ATA","PE"], forca: 77 },
      { nome: "Canales", posicoes: ["ATA"], forca: 74 },
      { nome: "Ribamar", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 81 },
      { nome: "Léo", posicoes: ["LD"], forca: 75 },
      { nome: "Paulo André", posicoes: ["ZAG"], forca: 77 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { nome: "Sidcley", posicoes: ["LE"], forca: 77 },
      { nome: "Otávio", posicoes: ["VOL"], forca: 77 },
      { nome: "Hernani", posicoes: ["VOL"], forca: 78 },
      { nome: "Deivid", posicoes: ["VOL"], forca: 76 },
      { nome: "Nikão", posicoes: ["MEI","PD"], forca: 79 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 76 },
      { nome: "André Lima", posicoes: ["ATA"], forca: 76 },
      { nome: "Walter", posicoes: ["ATA"], forca: 75 },
      { nome: "Marcos Guilherme", posicoes: ["PD"], forca: 77 },
      { nome: "Lucas Fernandes", posicoes: ["MC"], forca: 74 },
      { nome: "Juninho", posicoes: ["ZAG"], forca: 73 },
      { nome: "Lucho González", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 2015 =====

  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 84 },
      { nome: "Fagner", posicoes: ["LD"], forca: 81 },
      { nome: "Felipe", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 82 },
      { nome: "Uendel", posicoes: ["LE"], forca: 79 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { nome: "Elias", posicoes: ["MC"], forca: 83 },
      { nome: "Renato Augusto", posicoes: ["MEI"], forca: 86 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 85 },
      { nome: "Malcom", posicoes: ["PE"], forca: 79 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 82 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 79 },
      { nome: "Rodriguinho", posicoes: ["MEI"], forca: 77 },
      { nome: "Bruno Henrique", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Lucca", posicoes: ["PE"], forca: 76 },
      { nome: "Luciano", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 81 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 81 },
      { nome: "Douglas Santos", posicoes: ["LE"], forca: 80 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 78 },
      { nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 81 },
      { nome: "Luan", posicoes: ["PD"], forca: 80 },
      { nome: "Giovanni Augusto", posicoes: ["MEI"], forca: 80 },
      { nome: "Lucas Pratto", posicoes: ["ATA"], forca: 84 },
      { nome: "Carlos", posicoes: ["ATA"], forca: 76 },
      { nome: "Thiago Ribeiro", posicoes: ["PE"], forca: 77 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { nome: "Patric", posicoes: ["LD"], forca: 75 },
      { nome: "Júnior Urso", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 82 },
      { nome: "Galhardo", posicoes: ["LD"], forca: 76 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 82 },
      { nome: "Erazo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Marcelo Oliveira", posicoes: ["LE"], forca: 76 },
      { nome: "Walace", posicoes: ["VOL"], forca: 79 },
      { nome: "Maicon", posicoes: ["MC"], forca: 80 },
      { nome: "Giuliano", posicoes: ["MEI"], forca: 81 },
      { nome: "Douglas", posicoes: ["MEI"], forca: 79 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Pedro Rocha", posicoes: ["PD"], forca: 77 },
      { nome: "Bobô", posicoes: ["ATA"], forca: 75 },
      { nome: "Fernandinho", posicoes: ["PE"], forca: 76 },
      { nome: "Everton", posicoes: ["PE"], forca: 75 },
      { nome: "Ramiro", posicoes: ["MC"], forca: 76 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { nome: "Bruno", posicoes: ["LD"], forca: 75 },
      { nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 78 },
      { nome: "Lucão", posicoes: ["ZAG"], forca: 74 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG","VOL"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 76 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 75 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 76 },
      { nome: "Thiago Mendes", posicoes: ["MC"], forca: 78 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 81 },
      { nome: "Michel Bastos", posicoes: ["MEI","PE"], forca: 80 },
      { nome: "Centurión", posicoes: ["PD"], forca: 75 },
      { nome: "Alexandre Pato", posicoes: ["ATA"], forca: 82 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 81 },
      { nome: "Alan Kardec", posicoes: ["ATA"], forca: 77 },
      { nome: "Denis", posicoes: ["GOL"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Internacional",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 82 },
      { nome: "Muriel", posicoes: ["GOL"], forca: 74 },
      { nome: "William", posicoes: ["LD"], forca: 77 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 78 },
      { nome: "Ernando", posicoes: ["ZAG"], forca: 76 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 77 },
      { nome: "Geferson", posicoes: ["LE"], forca: 75 },
      { nome: "Charles Aránguiz", posicoes: ["MC"], forca: 82 },
      { nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 78 },
      { nome: "Anderson", posicoes: ["MC"], forca: 77 },
      { nome: "Alex", posicoes: ["MEI"], forca: 79 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdívia", posicoes: ["MEI"], forca: 78 },
      { nome: "Vitinho", posicoes: ["PE"], forca: 80 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 80 },
      { nome: "Lisandro López", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Sport",
    jogadores: [
      { nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 78 },
      { nome: "Samuel Xavier", posicoes: ["LD"], forca: 76 },
      { nome: "Durval", posicoes: ["ZAG"], forca: 78 },
      { nome: "Matheus Ferraz", posicoes: ["ZAG"], forca: 76 },
      { nome: "Renê", posicoes: ["LE"], forca: 76 },
      { nome: "Rithely", posicoes: ["VOL"], forca: 80 },
      { nome: "Wendel", posicoes: ["VOL"], forca: 76 },
      { nome: "Rodrigo Mancha", posicoes: ["VOL"], forca: 75 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 82 },
      { nome: "Marlone", posicoes: ["MEI","PE"], forca: 79 },
      { nome: "Élber", posicoes: ["PE"], forca: 76 },
      { nome: "André", posicoes: ["ATA"], forca: 81 },
      { nome: "Maikon Leite", posicoes: ["PD"], forca: 76 },
      { nome: "Régis", posicoes: ["MEI"], forca: 75 },
      { nome: "Neto Moura", posicoes: ["MC"], forca: 74 },
      { nome: "Ferrugem", posicoes: ["LD"], forca: 73 }
    ]
  },

  // ===== Edição 2014 =====

  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { nome: "Ceará", posicoes: ["LD"], forca: 78 },
      { nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 82 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Egídio", posicoes: ["LE"], forca: 80 },
      { nome: "Lucas Silva", posicoes: ["VOL"], forca: 82 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 78 },
      { nome: "Henrique", posicoes: ["MC"], forca: 79 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 87 },
      { nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Marquinhos", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Willian", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Dagoberto", posicoes: ["PE"], forca: 78 },
      { nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { nome: "Douglas", posicoes: ["LD"], forca: 76 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 76 },
      { nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 78 },
      { nome: "Álvaro Pereira", posicoes: ["LE"], forca: 78 },
      { nome: "Souza", posicoes: ["VOL"], forca: 78 },
      { nome: "Denilson", posicoes: ["VOL"], forca: 77 },
      { nome: "Maicon", posicoes: ["MC"], forca: 77 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 82 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 84 },
      { nome: "Alexandre Pato", posicoes: ["ATA"], forca: 81 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 82 },
      { nome: "Osvaldo", posicoes: ["PE"], forca: 77 },
      { nome: "Ademilson", posicoes: ["ATA"], forca: 75 },
      { nome: "Boschilia", posicoes: ["MEI"], forca: 74 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Internacional",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 80 },
      { nome: "Gilberto", posicoes: ["LD"], forca: 75 },
      { nome: "Paulão", posicoes: ["ZAG"], forca: 76 },
      { nome: "Ernando", posicoes: ["ZAG"], forca: 76 },
      { nome: "Fabrício", posicoes: ["LE"], forca: 78 },
      { nome: "Willians", posicoes: ["VOL"], forca: 77 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 76 },
      { nome: "Charles Aránguiz", posicoes: ["MC"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 79 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 82 },
      { nome: "Valdívia", posicoes: ["MEI"], forca: 76 },
      { nome: "Alan Patrick", posicoes: ["MEI"], forca: 76 },
      { nome: "Rafael Moura", posicoes: ["ATA"], forca: 78 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 77 },
      { nome: "Otávio", posicoes: ["PD"], forca: 76 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 82 },
      { nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 81 },
      { nome: "Felipe", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { nome: "Elias", posicoes: ["MC"], forca: 82 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 81 },
      { nome: "Renato Augusto", posicoes: ["MEI"], forca: 81 },
      { nome: "Guerrero", posicoes: ["ATA"], forca: 82 },
      { nome: "Romarinho", posicoes: ["PD"], forca: 78 },
      { nome: "Malcom", posicoes: ["PE"], forca: 75 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 78 },
      { nome: "Bruno Henrique", posicoes: ["VOL"], forca: 77 },
      { nome: "Emerson Sheik", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 80 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 77 },
      { nome: "Douglas Santos", posicoes: ["LE"], forca: 78 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 78 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 77 },
      { nome: "Josué", posicoes: ["VOL"], forca: 76 },
      { nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 80 },
      { nome: "Ronaldinho", posicoes: ["MEI"], forca: 83 },
      { nome: "Diego Tardelli", posicoes: ["ATA"], forca: 83 },
      { nome: "Luan", posicoes: ["PD"], forca: 79 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { nome: "Jô", posicoes: ["ATA"], forca: 79 },
      { nome: "Marion", posicoes: ["PE"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Fluminense",
    jogadores: [
      { nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 81 },
      { nome: "Bruno", posicoes: ["LD"], forca: 76 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 78 },
      { nome: "Elivelton", posicoes: ["ZAG"], forca: 75 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 78 },
      { nome: "Jean", posicoes: ["VOL"], forca: 80 },
      { nome: "Edson", posicoes: ["VOL"], forca: 76 },
      { nome: "Cícero", posicoes: ["MC"], forca: 79 },
      { nome: "Darío Conca", posicoes: ["MEI"], forca: 84 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 78 },
      { nome: "Fred", posicoes: ["ATA"], forca: 83 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 80 },
      { nome: "Walter", posicoes: ["ATA"], forca: 77 },
      { nome: "Kenedy", posicoes: ["PE"], forca: 75 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 77 }
    ]
  },

  // ===== Edição 2013 =====

  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 83 },
      { nome: "Ceará", posicoes: ["LD"], forca: 78 },
      { nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 82 },
      { nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Egídio", posicoes: ["LE"], forca: 79 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 79 },
      { nome: "Lucas Silva", posicoes: ["VOL"], forca: 79 },
      { nome: "Henrique", posicoes: ["MC"], forca: 78 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Júlio Baptista", posicoes: ["MEI"], forca: 80 },
      { nome: "Dagoberto", posicoes: ["PE"], forca: 79 },
      { nome: "Borges", posicoes: ["ATA"], forca: 80 },
      { nome: "Willian", posicoes: ["PD","ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Grêmio",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 80 },
      { nome: "Pará", posicoes: ["LD"], forca: 76 },
      { nome: "Werley", posicoes: ["ZAG"], forca: 77 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Alex Telles", posicoes: ["LE"], forca: 79 },
      { nome: "Souza", posicoes: ["VOL"], forca: 79 },
      { nome: "Ramiro", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Cristian Riveros", posicoes: ["MC"], forca: 78 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Elano", posicoes: ["MEI"], forca: 80 },
      { nome: "Maxi Rodríguez", posicoes: ["MEI"], forca: 76 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 79 },
      { nome: "Barcos", posicoes: ["ATA"], forca: 81 },
      { nome: "Eduardo Vargas", posicoes: ["ATA","PE"], forca: 80 },
      { nome: "Welliton", posicoes: ["ATA"], forca: 76 },
      { nome: "Matheus Biteco", posicoes: ["MEI"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 80 },
      { nome: "Léo", posicoes: ["LD"], forca: 76 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 76 },
      { nome: "Pedro Botelho", posicoes: ["LE"], forca: 77 },
      { nome: "João Paulo", posicoes: ["VOL"], forca: 76 },
      { nome: "Deivid", posicoes: ["VOL"], forca: 76 },
      { nome: "Paulo Baier", posicoes: ["MEI"], forca: 82 },
      { nome: "Everton", posicoes: ["MEI"], forca: 78 },
      { nome: "Marcelo", posicoes: ["ATA"], forca: 79 },
      { nome: "Ederson", posicoes: ["ATA"], forca: 84 },
      { nome: "Dellatorre", posicoes: ["ATA"], forca: 74 },
      { nome: "Zezinho", posicoes: ["MEI"], forca: 74 },
      { nome: "Cleberson", posicoes: ["ZAG"], forca: 74 },
      { nome: "Bruno Silva", posicoes: ["MC"], forca: 75 },
      { nome: "Roger", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Botafogo",
    jogadores: [
      { nome: "Jefferson", posicoes: ["GOL"], forca: 83 },
      { nome: "Lucas", posicoes: ["LD"], forca: 76 },
      { nome: "Bolívar", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dória", posicoes: ["ZAG"], forca: 79 },
      { nome: "Julio Cesar", posicoes: ["LE"], forca: 76 },
      { nome: "Gabriel", posicoes: ["VOL"], forca: 77 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 77 },
      { nome: "Seedorf", posicoes: ["MEI"], forca: 86 },
      { nome: "Lodeiro", posicoes: ["MEI"], forca: 81 },
      { nome: "Vitinho", posicoes: ["PE"], forca: 79 },
      { nome: "Rafael Marques", posicoes: ["ATA"], forca: 79 },
      { nome: "Elias", posicoes: ["ATA"], forca: 76 },
      { nome: "Bruno Mendes", posicoes: ["ATA"], forca: 75 },
      { nome: "Hyuri", posicoes: ["PE"], forca: 75 },
      { nome: "Renato", posicoes: ["MC"], forca: 76 },
      { nome: "Gegê", posicoes: ["MEI"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Vitória",
    jogadores: [
      { nome: "Wilson", posicoes: ["GOL"], forca: 78 },
      { nome: "Ayrton", posicoes: ["LD"], forca: 77 },
      { nome: "Kadu", posicoes: ["ZAG"], forca: 76 },
      { nome: "Victor Ramos", posicoes: ["ZAG"], forca: 76 },
      { nome: "Danilo Tarracha", posicoes: ["LE"], forca: 74 },
      { nome: "Cáceres", posicoes: ["VOL"], forca: 78 },
      { nome: "Michel", posicoes: ["VOL"], forca: 76 },
      { nome: "Escudero", posicoes: ["MEI"], forca: 80 },
      { nome: "Renato Cajá", posicoes: ["MEI"], forca: 79 },
      { nome: "Maxi Biancucchi", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Marquinhos", posicoes: ["ATA"], forca: 78 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 79 },
      { nome: "William Henrique", posicoes: ["PE"], forca: 76 },
      { nome: "Juan", posicoes: ["LE","ME"], forca: 75 },
      { nome: "Neto Coruja", posicoes: ["VOL"], forca: 75 },
      { nome: "Pedro Oldoni", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Goiás",
    jogadores: [
      { nome: "Renan", posicoes: ["GOL"], forca: 79 },
      { nome: "Vítor", posicoes: ["LD"], forca: 75 },
      { nome: "Ernando", posicoes: ["ZAG"], forca: 77 },
      { nome: "Rodrigo", posicoes: ["ZAG"], forca: 76 },
      { nome: "William Matheus", posicoes: ["LE"], forca: 76 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 76 },
      { nome: "David", posicoes: ["VOL"], forca: 75 },
      { nome: "Thiago Mendes", posicoes: ["MC"], forca: 77 },
      { nome: "Hugo", posicoes: ["MEI"], forca: 78 },
      { nome: "Walter", posicoes: ["ATA"], forca: 82 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 77 },
      { nome: "Erik", posicoes: ["PE"], forca: 75 },
      { nome: "Roni", posicoes: ["PD"], forca: 75 },
      { nome: "Ramon", posicoes: ["MEI"], forca: 74 },
      { nome: "Tartá", posicoes: ["PE"], forca: 73 },
      { nome: "Dudu Cearense", posicoes: ["VOL"], forca: 77 }
    ]
  },

  // ===== Edição 2012 =====

  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Fluminense",
    jogadores: [
      { nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 82 },
      { nome: "Bruno", posicoes: ["LD"], forca: 76 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 79 },
      { nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 79 },
      { nome: "Jean", posicoes: ["VOL"], forca: 82 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 78 },
      { nome: "Valencia", posicoes: ["VOL"], forca: 77 },
      { nome: "Deco", posicoes: ["MEI"], forca: 81 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 82 },
      { nome: "Wellington Nem", posicoes: ["PE"], forca: 80 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 80 },
      { nome: "Fred", posicoes: ["ATA"], forca: 86 },
      { nome: "Samuel", posicoes: ["ATA"], forca: 75 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 77 },
      { nome: "Marcos Júnior", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { nome: "Giovanni", posicoes: ["GOL"], forca: 75 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 82 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior César", posicoes: ["LE"], forca: 77 },
      { nome: "Richarlyson", posicoes: ["VOL"], forca: 77 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 79 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 77 },
      { nome: "Bernard", posicoes: ["PE"], forca: 83 },
      { nome: "Ronaldinho", posicoes: ["MEI"], forca: 86 },
      { nome: "Danilinho", posicoes: ["PD"], forca: 78 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 77 },
      { nome: "Jô", posicoes: ["ATA"], forca: 80 },
      { nome: "Escudero", posicoes: ["MEI"], forca: 76 },
      { nome: "Neto Berola", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 79 },
      { nome: "Pará", posicoes: ["LD"], forca: 76 },
      { nome: "Werley", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gilberto Silva", posicoes: ["ZAG"], forca: 79 },
      { nome: "Naldo", posicoes: ["ZAG"], forca: 76 },
      { nome: "Anderson Pico", posicoes: ["LE"], forca: 75 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 80 },
      { nome: "Souza", posicoes: ["VOL"], forca: 79 },
      { nome: "Elano", posicoes: ["MEI"], forca: 80 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["MEI"], forca: 76 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 79 },
      { nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 80 },
      { nome: "Leandro", posicoes: ["PE"], forca: 76 },
      { nome: "André Lima", posicoes: ["ATA"], forca: 77 },
      { nome: "Bertoglio", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { nome: "Douglas", posicoes: ["LD"], forca: 76 },
      { nome: "Paulo Miranda", posicoes: ["ZAG"], forca: 76 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Cortez", posicoes: ["LE"], forca: 78 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 77 },
      { nome: "Denilson", posicoes: ["VOL"], forca: 78 },
      { nome: "Maicon", posicoes: ["MC"], forca: 77 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 81 },
      { nome: "Lucas Moura", posicoes: ["PD"], forca: 84 },
      { nome: "Cícero", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Osvaldo", posicoes: ["PE"], forca: 78 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 83 },
      { nome: "Willian José", posicoes: ["ATA"], forca: 76 },
      { nome: "Ademilson", posicoes: ["ATA"], forca: 74 },
      { nome: "Casemiro", posicoes: ["VOL"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Vasco",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { nome: "Fágner", posicoes: ["LD"], forca: 80 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 83 },
      { nome: "Renato Silva", posicoes: ["ZAG"], forca: 76 },
      { nome: "Thiago Feltri", posicoes: ["LE"], forca: 75 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 78 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 83 },
      { nome: "Felipe", posicoes: ["MEI"], forca: 80 },
      { nome: "Wendel", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Éder Luís", posicoes: ["PD"], forca: 79 },
      { nome: "Alecsandro", posicoes: ["ATA"], forca: 80 },
      { nome: "Carlos Tenorio", posicoes: ["ATA"], forca: 76 },
      { nome: "William Barbio", posicoes: ["PD"], forca: 75 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 76 },
      { nome: "Felipe Bastos", posicoes: ["VOL"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 83 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { nome: "Chicão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo André", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { nome: "Paulinho", posicoes: ["MC"], forca: 84 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 80 },
      { nome: "Douglas", posicoes: ["MEI"], forca: 78 },
      { nome: "Emerson Sheik", posicoes: ["PD"], forca: 81 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 79 },
      { nome: "Guerrero", posicoes: ["ATA"], forca: 81 },
      { nome: "Romarinho", posicoes: ["ATA"], forca: 78 },
      { nome: "Liedson", posicoes: ["ATA"], forca: 77 },
      { nome: "Martínez", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2011 =====

  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Corinthians",
    jogadores: [
      { nome: "Júlio César", posicoes: ["GOL"], forca: 79 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { nome: "Chicão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Leandro Castán", posicoes: ["ZAG"], forca: 81 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 81 },
      { nome: "Paulinho", posicoes: ["MC"], forca: 82 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 80 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 79 },
      { nome: "Willian", posicoes: ["ATA"], forca: 80 },
      { nome: "Liedson", posicoes: ["ATA"], forca: 82 },
      { nome: "Emerson Sheik", posicoes: ["PD"], forca: 80 },
      { nome: "Edenílson", posicoes: ["VOL","LD"], forca: 76 },
      { nome: "Ramírez", posicoes: ["MC"], forca: 76 },
      { nome: "Morais", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Vasco",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { nome: "Fagner", posicoes: ["LD"], forca: 80 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 83 },
      { nome: "Anderson Martins", posicoes: ["ZAG"], forca: 79 },
      { nome: "Renato Silva", posicoes: ["ZAG"], forca: 76 },
      { nome: "Julinho", posicoes: ["LE"], forca: 75 },
      { nome: "Rômulo", posicoes: ["VOL"], forca: 80 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 78 },
      { nome: "Juninho Pernambucano", posicoes: ["MEI"], forca: 83 },
      { nome: "Felipe", posicoes: ["MEI"], forca: 80 },
      { nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Bernardo", posicoes: ["MEI"], forca: 77 },
      { nome: "Éder Luís", posicoes: ["PD"], forca: 79 },
      { nome: "Alecsandro", posicoes: ["ATA"], forca: 80 },
      { nome: "Elton", posicoes: ["ATA"], forca: 76 },
      { nome: "Allan", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Fluminense",
    jogadores: [
      { nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 80 },
      { nome: "Mariano", posicoes: ["LD"], forca: 79 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 78 },
      { nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 78 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 78 },
      { nome: "Valencia", posicoes: ["VOL"], forca: 77 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 77 },
      { nome: "Marquinho", posicoes: ["MC"], forca: 78 },
      { nome: "Deco", posicoes: ["MEI"], forca: 81 },
      { nome: "Darío Conca", posicoes: ["MEI"], forca: 82 },
      { nome: "Rafael Moura", posicoes: ["ATA"], forca: 81 },
      { nome: "Fred", posicoes: ["ATA"], forca: 85 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 79 },
      { nome: "Manuel Lanzini", posicoes: ["MEI"], forca: 77 },
      { nome: "Souza", posicoes: ["MEI"], forca: 76 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Flamengo",
    jogadores: [
      { nome: "Felipe", posicoes: ["GOL"], forca: 79 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 81 },
      { nome: "Welinton", posicoes: ["ZAG"], forca: 75 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 78 },
      { nome: "Junior Cesar", posicoes: ["LE"], forca: 77 },
      { nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { nome: "Maldonado", posicoes: ["VOL"], forca: 77 },
      { nome: "Airton", posicoes: ["VOL"], forca: 76 },
      { nome: "Renato Abreu", posicoes: ["MC"], forca: 80 },
      { nome: "Ronaldinho", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 83 },
      { nome: "Bottinelli", posicoes: ["MEI"], forca: 76 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 78 },
      { nome: "Diego Maurício", posicoes: ["ATA"], forca: 75 },
      { nome: "Jael", posicoes: ["ATA"], forca: 75 },
      { nome: "Wanderley", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Internacional",
    jogadores: [
      { nome: "Muriel", posicoes: ["GOL"], forca: 78 },
      { nome: "Nei", posicoes: ["LD"], forca: 76 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bolívar", posicoes: ["ZAG"], forca: 78 },
      { nome: "Kleber", posicoes: ["LE"], forca: 79 },
      { nome: "Guiñazú", posicoes: ["VOL"], forca: 81 },
      { nome: "Bolatti", posicoes: ["VOL"], forca: 77 },
      { nome: "Tinga", posicoes: ["MC"], forca: 78 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 83 },
      { nome: "Oscar", posicoes: ["MEI"], forca: 82 },
      { nome: "Leandro Damião", posicoes: ["ATA"], forca: 84 },
      { nome: "Zé Roberto", posicoes: ["PE"], forca: 76 },
      { nome: "Andrezinho", posicoes: ["MEI"], forca: 78 },
      { nome: "Gilberto", posicoes: ["ATA"], forca: 76 },
      { nome: "Dellatorre", posicoes: ["ATA"], forca: 73 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 83 },
      { nome: "Iván Piris", posicoes: ["LD"], forca: 76 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Xandão", posicoes: ["ZAG"], forca: 75 },
      { nome: "Juan", posicoes: ["LE"], forca: 76 },
      { nome: "Casemiro", posicoes: ["VOL"], forca: 79 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 77 },
      { nome: "Denilson", posicoes: ["VOL"], forca: 77 },
      { nome: "Cícero", posicoes: ["MC"], forca: 78 },
      { nome: "Lucas Moura", posicoes: ["PD"], forca: 83 },
      { nome: "Dagoberto", posicoes: ["ATA"], forca: 82 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 78 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 81 },
      { nome: "Henrique", posicoes: ["ATA"], forca: 75 },
      { nome: "Marlos", posicoes: ["PE"], forca: 77 },
      { nome: "Fernandinho", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 2010 =====

  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fernando Henrique", posicoes: ["GOL"], forca: 78 },
      { nome: "Ricardo Berna", posicoes: ["GOL"], forca: 76 },
      { nome: "Mariano", posicoes: ["LD"], forca: 80 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 78 },
      { nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 78 },
      { nome: "André Luis", posicoes: ["ZAG"], forca: 76 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 78 },
      { nome: "Julio Cesar", posicoes: ["LE"], forca: 76 },
      { nome: "Diogo", posicoes: ["VOL"], forca: 77 },
      { nome: "Diguinho", posicoes: ["VOL"], forca: 78 },
      { nome: "Valencia", posicoes: ["VOL"], forca: 77 },
      { nome: "Darío Conca", posicoes: ["MEI"], forca: 87 },
      { nome: "Deco", posicoes: ["MEI"], forca: 81 },
      { nome: "Marquinho", posicoes: ["MC"], forca: 78 },
      { nome: "Fred", posicoes: ["ATA"], forca: 83 },
      { nome: "Washington", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 82 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 79 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Diego Renan", posicoes: ["LE"], forca: 78 },
      { nome: "Fabrício", posicoes: ["VOL"], forca: 80 },
      { nome: "Henrique", posicoes: ["VOL"], forca: 79 },
      { nome: "Marquinhos Paraná", posicoes: ["MC"], forca: 79 },
      { nome: "Roger", posicoes: ["MEI"], forca: 78 },
      { nome: "Montillo", posicoes: ["MEI"], forca: 84 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 79 },
      { nome: "Thiago Ribeiro", posicoes: ["PD"], forca: 81 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { nome: "Robert", posicoes: ["ATA"], forca: 76 },
      { nome: "Wallyson", posicoes: ["ATA","PE"], forca: 78 },
      { nome: "Guerrón", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Corinthians",
    jogadores: [
      { nome: "Júlio César", posicoes: ["GOL"], forca: 79 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { nome: "Chicão", posicoes: ["ZAG"], forca: 79 },
      { nome: "William", posicoes: ["ZAG"], forca: 78 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 82 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 80 },
      { nome: "Jucilei", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Elias", posicoes: ["MC"], forca: 82 },
      { nome: "Bruno César", posicoes: ["MEI"], forca: 82 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 79 },
      { nome: "Dentinho", posicoes: ["PD"], forca: 80 },
      { nome: "Ronaldo", posicoes: ["ATA"], forca: 83 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 79 },
      { nome: "Iarley", posicoes: ["ATA"], forca: 76 },
      { nome: "Souza", posicoes: ["ATA"], forca: 75 },
      { nome: "Defederico", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 78 },
      { nome: "Mário Fernandes", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rafael Marques", posicoes: ["ZAG"], forca: 77 },
      { nome: "Rodolfo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 78 },
      { nome: "Adílson", posicoes: ["VOL"], forca: 77 },
      { nome: "Willian Magrão", posicoes: ["VOL"], forca: 76 },
      { nome: "Douglas", posicoes: ["MEI"], forca: 82 },
      { nome: "Hugo", posicoes: ["MEI"], forca: 78 },
      { nome: "Souza", posicoes: ["MEI"], forca: 77 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 85 },
      { nome: "Borges", posicoes: ["ATA"], forca: 79 },
      { nome: "André Lima", posicoes: ["ATA"], forca: 78 },
      { nome: "Lúcio", posicoes: ["LE","ME"], forca: 76 },
      { nome: "Maylson", posicoes: ["MC"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Neto", posicoes: ["GOL"], forca: 79 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Chico", posicoes: ["ZAG"], forca: 76 },
      { nome: "Wagner Diniz", posicoes: ["LD"], forca: 75 },
      { nome: "Paulinho", posicoes: ["LE"], forca: 76 },
      { nome: "Vitor", posicoes: ["VOL"], forca: 77 },
      { nome: "Deivid", posicoes: ["VOL"], forca: 76 },
      { nome: "Paulo Baier", posicoes: ["MEI"], forca: 82 },
      { nome: "Branquinho", posicoes: ["MEI"], forca: 78 },
      { nome: "Guerrón", posicoes: ["PD"], forca: 79 },
      { nome: "Bruno Mineiro", posicoes: ["ATA"], forca: 79 },
      { nome: "Maikon Leite", posicoes: ["PE"], forca: 78 },
      { nome: "Nieto", posicoes: ["ATA"], forca: 75 },
      { nome: "Ivan González", posicoes: ["ZAG"], forca: 75 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Botafogo",
    jogadores: [
      { nome: "Jefferson", posicoes: ["GOL"], forca: 82 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 76 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Ferreira", posicoes: ["ZAG"], forca: 76 },
      { nome: "Marcelo Cordeiro", posicoes: ["LE"], forca: 76 },
      { nome: "Somália", posicoes: ["VOL"], forca: 77 },
      { nome: "Leandro Guerreiro", posicoes: ["VOL"], forca: 77 },
      { nome: "Fahel", posicoes: ["VOL"], forca: 76 },
      { nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 79 },
      { nome: "Maicosuel", posicoes: ["MEI"], forca: 80 },
      { nome: "Herrera", posicoes: ["ATA"], forca: 79 },
      { nome: "Loco Abreu", posicoes: ["ATA"], forca: 82 },
      { nome: "Jobson", posicoes: ["ATA"], forca: 78 },
      { nome: "Caio", posicoes: ["ATA"], forca: 76 },
      { nome: "Edno", posicoes: ["ATA"], forca: 75 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 77 }
    ]
  },

  // ===== Edição 2009 =====

  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Flamengo",
    jogadores: [
      { nome: "Bruno", posicoes: ["GOL"], forca: 83 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 82 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Álvaro", posicoes: ["ZAG"], forca: 76 },
      { nome: "Juan", posicoes: ["LE"], forca: 80 },
      { nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { nome: "Ibson", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Kleberson", posicoes: ["MC"], forca: 80 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 78 },
      { nome: "Adriano", posicoes: ["ATA"], forca: 88 },
      { nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 81 },
      { nome: "Obina", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { nome: "Lauro", posicoes: ["GOL"], forca: 78 },
      { nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 80 },
      { nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "D'Alessandro", posicoes: ["MEI"], forca: 85 },
      { nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 79 },
      { nome: "Nilmar", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 80 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fernandinho", posicoes: ["LE"], forca: 77 },
      { nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 81 },
      { nome: "Henrique", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Fabrício", posicoes: ["MC"], forca: 80 },
      { nome: "Ramires", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 82 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 80 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 84 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { nome: "Arce", posicoes: ["LD"], forca: 78 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { nome: "Armero", posicoes: ["LE"], forca: 78 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Avaí",
    jogadores: [
      { nome: "Eduardo Martini", posicoes: ["GOL"], forca: 78 },
      { nome: "Luís Ricardo", posicoes: ["LD"], forca: 75 },
      { nome: "Emerson Nunes", posicoes: ["ZAG"], forca: 76 },
      { nome: "Augusto", posicoes: ["ZAG"], forca: 75 },
      { nome: "Eltinho", posicoes: ["LE"], forca: 76 },
      { nome: "Léo Gago", posicoes: ["VOL"], forca: 79 },
      { nome: "Ferdinando", posicoes: ["VOL"], forca: 75 },
      { nome: "Marcus Winícius", posicoes: ["MC"], forca: 76 },
      { nome: "Marquinhos", posicoes: ["MEI"], forca: 82 },
      { nome: "Caio", posicoes: ["MEI"], forca: 78 },
      { nome: "Muriqui", posicoes: ["PE"], forca: 80 },
      { nome: "William", posicoes: ["ATA"], forca: 79 },
      { nome: "Vandinho", posicoes: ["ATA"], forca: 77 },
      { nome: "Roberto", posicoes: ["ATA"], forca: 74 }
    ]
  },

  // ===== Edição 2008 =====

  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { nome: "Patrício", posicoes: ["LD"], forca: 76 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { nome: "Pereira", posicoes: ["ZAG"], forca: 77 },
      { nome: "Lúcio", posicoes: ["LE"], forca: 77 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { nome: "William Magrão", posicoes: ["VOL"], forca: 78 },
      { nome: "Tcheco", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 80 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 77 },
      { nome: "Perea", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 80 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fernandinho", posicoes: ["LE"], forca: 77 },
      { nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 81 },
      { nome: "Henrique", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Fabrício", posicoes: ["MC"], forca: 80 },
      { nome: "Ramires", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 82 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 80 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 84 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { nome: "Arce", posicoes: ["LD"], forca: 78 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { nome: "Armero", posicoes: ["LE"], forca: 78 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Flamengo",
    jogadores: [
      { nome: "Bruno", posicoes: ["GOL"], forca: 83 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 82 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Álvaro", posicoes: ["ZAG"], forca: 76 },
      { nome: "Juan", posicoes: ["LE"], forca: 80 },
      { nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { nome: "Ibson", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Kleberson", posicoes: ["MC"], forca: 80 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 78 },
      { nome: "Adriano", posicoes: ["ATA"], forca: 88 },
      { nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 81 },
      { nome: "Obina", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { nome: "Lauro", posicoes: ["GOL"], forca: 78 },
      { nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 80 },
      { nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "D'Alessandro", posicoes: ["MEI"], forca: 85 },
      { nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 79 },
      { nome: "Nilmar", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 2007 =====

  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Denis", posicoes: ["LD"], forca: 77 },
      { nome: "Adaílton", posicoes: ["ZAG"], forca: 78 },
      { nome: "Domingos", posicoes: ["ZAG"], forca: 76 },
      { nome: "Kléber", posicoes: ["LE"], forca: 82 },
      { nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 80 },
      { nome: "Maldonado", posicoes: ["VOL"], forca: 80 },
      { nome: "Cléber Santana", posicoes: ["MC"], forca: 82 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 84 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Jonas", posicoes: ["PE"], forca: 77 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 83 },
      { nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 78 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Flamengo",
    jogadores: [
      { nome: "Bruno", posicoes: ["GOL"], forca: 83 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 82 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Álvaro", posicoes: ["ZAG"], forca: 76 },
      { nome: "Juan", posicoes: ["LE"], forca: 80 },
      { nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { nome: "Ibson", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Kleberson", posicoes: ["MC"], forca: 80 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 78 },
      { nome: "Adriano", posicoes: ["ATA"], forca: 88 },
      { nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 81 },
      { nome: "Obina", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fernando Henrique", posicoes: ["GOL"], forca: 78 },
      { nome: "Carlinhos", posicoes: ["LD"], forca: 75 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior César", posicoes: ["LE"], forca: 80 },
      { nome: "Arouca", posicoes: ["VOL"], forca: 80 },
      { nome: "Fabinho", posicoes: ["VOL"], forca: 77 },
      { nome: "Conca", posicoes: ["MC"], forca: 82 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 84 },
      { nome: "Cícero", posicoes: ["MEI"], forca: 80 },
      { nome: "Maicon", posicoes: ["PD"], forca: 76 },
      { nome: "Washington", posicoes: ["ATA"], forca: 84 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 82 },
      { nome: "Somália", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 80 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fernandinho", posicoes: ["LE"], forca: 77 },
      { nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 81 },
      { nome: "Henrique", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Fabrício", posicoes: ["MC"], forca: 80 },
      { nome: "Ramires", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 82 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 80 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 84 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 80 },
      { nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { nome: "Patrício", posicoes: ["LD"], forca: 76 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { nome: "Pereira", posicoes: ["ZAG"], forca: 77 },
      { nome: "Lúcio", posicoes: ["LE"], forca: 77 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { nome: "William Magrão", posicoes: ["VOL"], forca: 78 },
      { nome: "Tcheco", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 80 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 77 },
      { nome: "Perea", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },

  // ===== Edição 2006 =====

  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 74 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 79 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 84 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 83 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 82 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 81 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Borges", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { nome: "Lauro", posicoes: ["GOL"], forca: 78 },
      { nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 81 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 80 },
      { nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "D'Alessandro", posicoes: ["MEI"], forca: 85 },
      { nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 79 },
      { nome: "Nilmar", posicoes: ["ATA","PE"], forca: 86 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { nome: "Patrício", posicoes: ["LD"], forca: 76 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { nome: "Pereira", posicoes: ["ZAG"], forca: 77 },
      { nome: "Lúcio", posicoes: ["LE"], forca: 77 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 80 },
      { nome: "William Magrão", posicoes: ["VOL"], forca: 78 },
      { nome: "Tcheco", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 80 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 77 },
      { nome: "Perea", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Denis", posicoes: ["LD"], forca: 77 },
      { nome: "Adaílton", posicoes: ["ZAG"], forca: 78 },
      { nome: "Domingos", posicoes: ["ZAG"], forca: 76 },
      { nome: "Kléber", posicoes: ["LE"], forca: 82 },
      { nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 80 },
      { nome: "Maldonado", posicoes: ["VOL"], forca: 80 },
      { nome: "Cléber Santana", posicoes: ["MC"], forca: 82 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 84 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Jonas", posicoes: ["PE"], forca: 77 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 83 },
      { nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 78 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Paraná",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 77 },
      { nome: "Edinho", posicoes: ["LD"], forca: 75 },
      { nome: "Daniel Marques", posicoes: ["ZAG"], forca: 75 },
      { nome: "Neguette", posicoes: ["ZAG"], forca: 74 },
      { nome: "Vicente", posicoes: ["LE"], forca: 76 },
      { nome: "Beto", posicoes: ["VOL"], forca: 77 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 80 },
      { nome: "Éverton", posicoes: ["MC"], forca: 76 },
      { nome: "Maicossuel", posicoes: ["MEI"], forca: 78 },
      { nome: "Dinélson", posicoes: ["MEI"], forca: 77 },
      { nome: "Marcel", posicoes: ["PD"], forca: 76 },
      { nome: "Josiel", posicoes: ["ATA"], forca: 78 },
      { nome: "Henrique", posicoes: ["ATA"], forca: 75 },
      { nome: "Emerson", posicoes: ["PE"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Vasco",
    jogadores: [
      { nome: "Hélton", posicoes: ["GOL"], forca: 83 },
      { nome: "Jorginho Paulista", posicoes: ["LD"], forca: 78 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Felipe", posicoes: ["LE"], forca: 84 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Juninho Paulista", posicoes: ["MEI"], forca: 84 },
      { nome: "Viola", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Romário", posicoes: ["ATA"], forca: 88 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { nome: "Euller", posicoes: ["ATA"], forca: 81 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 80 }
    ]
  },

  // ===== Edição 2005 =====

  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 80 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 80 },
      { nome: "Anderson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Betão", posicoes: ["ZAG"], forca: 76 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 78 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 81 },
      { nome: "Vampeta", posicoes: ["MC"], forca: 82 },
      { nome: "Renato", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 80 },
      { nome: "Tevez", posicoes: ["ATA"], forca: 89 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 83 },
      { nome: "Gil", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 80 },
      { nome: "Élder Granja", posicoes: ["LD"], forca: 78 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vinícius", posicoes: ["ZAG"], forca: 76 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 77 },
      { nome: "Magrão", posicoes: ["MC"], forca: 78 },
      { nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Wellington", posicoes: ["PD"], forca: 75 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 82 },
      { nome: "Diego", posicoes: ["ATA"], forca: 75 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Goiás",
    jogadores: [
      { nome: "Harlei", posicoes: ["GOL"], forca: 81 },
      { nome: "Vitor", posicoes: ["LD"], forca: 76 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Baier", posicoes: ["LE"], forca: 79 },
      { nome: "Josué", posicoes: ["VOL"], forca: 80 },
      { nome: "Danilo", posicoes: ["MC"], forca: 80 },
      { nome: "Túlio", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Fernandão", posicoes: ["MEI"], forca: 82 },
      { nome: "Iarley", posicoes: ["MEI"], forca: 80 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 83 },
      { nome: "Alex Dias", posicoes: ["ATA"], forca: 80 },
      { nome: "Dimba", posicoes: ["ATA"], forca: 81 },
      { nome: "Welliton", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { nome: "Arce", posicoes: ["LD"], forca: 78 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { nome: "Armero", posicoes: ["LE"], forca: 78 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Fluminense",
    jogadores: [
      { nome: "Murilo", posicoes: ["GOL"], forca: 78 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 77 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 77 },
      { nome: "César", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo César", posicoes: ["LE"], forca: 76 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 79 },
      { nome: "Fernando Diniz", posicoes: ["MC"], forca: 78 },
      { nome: "Roger", posicoes: ["MEI"], forca: 83 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 83 },
      { nome: "Ramon", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 83 },
      { nome: "Roni", posicoes: ["ATA"], forca: 81 },
      { nome: "Tuta", posicoes: ["ATA"], forca: 78 },
      { nome: "Alex Dias", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Diego", posicoes: ["GOL"], forca: 80 },
      { nome: "Jancarlos", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 77 },
      { nome: "Marcão", posicoes: ["LE"], forca: 77 },
      { nome: "Alan Bahia", posicoes: ["VOL"], forca: 80 },
      { nome: "Pingo", posicoes: ["VOL"], forca: 76 },
      { nome: "Fernandinho", posicoes: ["MC"], forca: 83 },
      { nome: "Jádson", posicoes: ["MEI"], forca: 81 },
      { nome: "Evandro", posicoes: ["MEI"], forca: 78 },
      { nome: "Dagoberto", posicoes: ["PD"], forca: 82 },
      { nome: "Washington", posicoes: ["ATA"], forca: 86 },
      { nome: "Lima", posicoes: ["ATA"], forca: 78 },
      { nome: "Aloísio", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 2004 =====

  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Maurinho", posicoes: ["LD"], forca: 79 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { nome: "André Luís", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["LE"], forca: 81 },
      { nome: "Paulo Almeida", posicoes: ["VOL"], forca: 78 },
      { nome: "Renato", posicoes: ["MC"], forca: 82 },
      { nome: "Elano", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego", posicoes: ["MEI"], forca: 87 },
      { nome: "Robinho", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 83 },
      { nome: "Alberto", posicoes: ["ATA"], forca: 75 },
      { nome: "Léo Lima", posicoes: ["MEI"], forca: 77 },
      { nome: "William", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Diego", posicoes: ["GOL"], forca: 80 },
      { nome: "Jancarlos", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 77 },
      { nome: "Marcão", posicoes: ["LE"], forca: 77 },
      { nome: "Alan Bahia", posicoes: ["VOL"], forca: 80 },
      { nome: "Pingo", posicoes: ["VOL"], forca: 76 },
      { nome: "Fernandinho", posicoes: ["MC"], forca: 83 },
      { nome: "Jádson", posicoes: ["MEI"], forca: 81 },
      { nome: "Evandro", posicoes: ["MEI"], forca: 78 },
      { nome: "Dagoberto", posicoes: ["PD"], forca: 82 },
      { nome: "Washington", posicoes: ["ATA"], forca: 86 },
      { nome: "Lima", posicoes: ["ATA"], forca: 78 },
      { nome: "Aloísio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { nome: "Diego Lugano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 79 },
      { nome: "Mineiro", posicoes: ["VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 79 },
      { nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 86 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { nome: "Luís Fabiano", posicoes: ["ATA"], forca: 86 },
      { nome: "Grafite", posicoes: ["ATA"], forca: 80 },
      { nome: "França", posicoes: ["ATA"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 84 },
      { nome: "Arce", posicoes: ["LD"], forca: 78 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 76 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 81 },
      { nome: "Armero", posicoes: ["LE"], forca: 78 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 78 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 84 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 84 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 83 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 80 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 80 },
      { nome: "Anderson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Betão", posicoes: ["ZAG"], forca: 76 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 78 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 81 },
      { nome: "Vampeta", posicoes: ["MC"], forca: 82 },
      { nome: "Renato", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 80 },
      { nome: "Tevez", posicoes: ["ATA"], forca: 89 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 83 },
      { nome: "Gil", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Goiás",
    jogadores: [
      { nome: "Harlei", posicoes: ["GOL"], forca: 81 },
      { nome: "Vitor", posicoes: ["LD"], forca: 76 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Baier", posicoes: ["LE"], forca: 79 },
      { nome: "Josué", posicoes: ["VOL"], forca: 80 },
      { nome: "Danilo", posicoes: ["MC"], forca: 80 },
      { nome: "Túlio", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Fernandão", posicoes: ["MEI"], forca: 82 },
      { nome: "Iarley", posicoes: ["MEI"], forca: 80 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 83 },
      { nome: "Alex Dias", posicoes: ["ATA"], forca: 80 },
      { nome: "Dimba", posicoes: ["ATA"], forca: 81 },
      { nome: "Welliton", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 2003 =====

  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Gomes", posicoes: ["GOL"], forca: 84 },
      { nome: "Maicon", posicoes: ["LD"], forca: 80 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 83 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 81 },
      { nome: "Leandro", posicoes: ["LE"], forca: 79 },
      { nome: "Augusto Recife", posicoes: ["VOL"], forca: 78 },
      { nome: "Maldonado", posicoes: ["MC"], forca: 80 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 90 },
      { nome: "Aristizábal", posicoes: ["MEI","PE"], forca: 80 },
      { nome: "Maurinho", posicoes: ["PD"], forca: 78 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 85 },
      { nome: "Mota", posicoes: ["ATA"], forca: 80 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Maurinho", posicoes: ["LD"], forca: 79 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { nome: "André Luís", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["LE"], forca: 81 },
      { nome: "Paulo Almeida", posicoes: ["VOL"], forca: 78 },
      { nome: "Renato", posicoes: ["MC"], forca: 82 },
      { nome: "Elano", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego", posicoes: ["MEI"], forca: 87 },
      { nome: "Robinho", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 83 },
      { nome: "Alberto", posicoes: ["ATA"], forca: 75 },
      { nome: "Léo Lima", posicoes: ["MEI"], forca: 77 },
      { nome: "William", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { nome: "Diego Lugano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 79 },
      { nome: "Mineiro", posicoes: ["VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 79 },
      { nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 86 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { nome: "Luís Fabiano", posicoes: ["ATA"], forca: 86 },
      { nome: "Grafite", posicoes: ["ATA"], forca: 80 },
      { nome: "França", posicoes: ["ATA"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Caetano",
    jogadores: [
      { nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 80 },
      { nome: "Russo", posicoes: ["LD"], forca: 79 },
      { nome: "Daniel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dininho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rubens Cardoso", posicoes: ["LE"], forca: 79 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 83 },
      { nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { nome: "Adãozinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Anaílson", posicoes: ["MEI"], forca: 79 },
      { nome: "Wágner", posicoes: ["MC"], forca: 76 },
      { nome: "Somália", posicoes: ["ATA"], forca: 82 },
      { nome: "Adhemar", posicoes: ["ATA"], forca: 83 },
      { nome: "Warley", posicoes: ["ATA"], forca: 77 },
      { nome: "Esquerdinha", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Coritiba",
    jogadores: [
      { nome: "Fernando", posicoes: ["GOL"], forca: 78 },
      { nome: "César Prates", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Reginaldo Nascimento", posicoes: ["ZAG"], forca: 77 },
      { nome: "Vicente", posicoes: ["LE"], forca: 77 },
      { nome: "Roberto Brum", posicoes: ["VOL"], forca: 78 },
      { nome: "Tcheco", posicoes: ["MC"], forca: 80 },
      { nome: "Lima", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "Jackson", posicoes: ["MEI"], forca: 78 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 80 },
      { nome: "Da Silva", posicoes: ["ATA"], forca: 78 },
      { nome: "Edu Sales", posicoes: ["ATA"], forca: 75 },
      { nome: "Adriano", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 80 },
      { nome: "Élder Granja", posicoes: ["LD"], forca: 78 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vinícius", posicoes: ["ZAG"], forca: 76 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 77 },
      { nome: "Magrão", posicoes: ["MC"], forca: 78 },
      { nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Wellington", posicoes: ["PD"], forca: 75 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 82 },
      { nome: "Diego", posicoes: ["ATA"], forca: 75 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2002 =====

  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Maurinho", posicoes: ["LD"], forca: 79 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 83 },
      { nome: "André Luís", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["LE"], forca: 81 },
      { nome: "Paulo Almeida", posicoes: ["VOL"], forca: 78 },
      { nome: "Renato", posicoes: ["MC"], forca: 82 },
      { nome: "Elano", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Diego", posicoes: ["MEI"], forca: 87 },
      { nome: "Robinho", posicoes: ["ATA","PE"], forca: 87 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 83 },
      { nome: "Alberto", posicoes: ["ATA"], forca: 75 },
      { nome: "Léo Lima", posicoes: ["MEI"], forca: 77 },
      { nome: "William", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 80 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 80 },
      { nome: "Anderson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Betão", posicoes: ["ZAG"], forca: 76 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 78 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 81 },
      { nome: "Vampeta", posicoes: ["MC"], forca: 82 },
      { nome: "Renato", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 80 },
      { nome: "Tevez", posicoes: ["ATA"], forca: 89 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 83 },
      { nome: "Gil", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 80 },
      { nome: "Anderson Lima", posicoes: ["LD"], forca: 80 },
      { nome: "Polga", posicoes: ["ZAG"], forca: 80 },
      { nome: "Claudiomiro", posicoes: ["ZAG"], forca: 76 },
      { nome: "Roger", posicoes: ["LE"], forca: 79 },
      { nome: "Tinga", posicoes: ["VOL"], forca: 81 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 77 },
      { nome: "Fábio Rochemback", posicoes: ["MC"], forca: 78 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Carlos Miguel", posicoes: ["MEI"], forca: 78 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 83 },
      { nome: "Luís Mário", posicoes: ["ATA"], forca: 78 },
      { nome: "Warley", posicoes: ["ATA"], forca: 76 },
      { nome: "Christian", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Fluminense",
    jogadores: [
      { nome: "Murilo", posicoes: ["GOL"], forca: 78 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 77 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 77 },
      { nome: "César", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo César", posicoes: ["LE"], forca: 76 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 79 },
      { nome: "Fernando Diniz", posicoes: ["MC"], forca: 78 },
      { nome: "Roger", posicoes: ["MEI"], forca: 83 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 83 },
      { nome: "Ramon", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 83 },
      { nome: "Roni", posicoes: ["ATA"], forca: 81 },
      { nome: "Tuta", posicoes: ["ATA"], forca: 78 },
      { nome: "Alex Dias", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { nome: "Diego Lugano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 79 },
      { nome: "Mineiro", posicoes: ["VOL"], forca: 80 },
      { nome: "Josué", posicoes: ["VOL"], forca: 79 },
      { nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 86 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { nome: "Luís Fabiano", posicoes: ["ATA"], forca: 86 },
      { nome: "Grafite", posicoes: ["ATA"], forca: 80 },
      { nome: "França", posicoes: ["ATA"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 81 },
      { nome: "Mancini", posicoes: ["LD"], forca: 82 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 84 },
      { nome: "Lincoln", posicoes: ["MC"], forca: 80 },
      { nome: "Valdo", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 81 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { nome: "Alex Alves", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2001 =====

  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 78 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 77 },
      { nome: "Nem", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Kleber", posicoes: ["LE"], forca: 78 },
      { nome: "Cocito", posicoes: ["VOL"], forca: 80 },
      { nome: "Kléberson", posicoes: ["MC"], forca: 82 },
      { nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Fernandinho", posicoes: ["MEI"], forca: 78 },
      { nome: "Alex Mineiro", posicoes: ["PD"], forca: 85 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 80 },
      { nome: "Ilán", posicoes: ["ATA"], forca: 80 },
      { nome: "Dagoberto", posicoes: ["ATA"], forca: 78 },
      { nome: "Ivan", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "São Caetano",
    jogadores: [
      { nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 80 },
      { nome: "Russo", posicoes: ["LD"], forca: 79 },
      { nome: "Daniel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dininho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rubens Cardoso", posicoes: ["LE"], forca: 79 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 83 },
      { nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { nome: "Adãozinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Anaílson", posicoes: ["MEI"], forca: 79 },
      { nome: "Wágner", posicoes: ["MC"], forca: 76 },
      { nome: "Somália", posicoes: ["ATA"], forca: 82 },
      { nome: "Adhemar", posicoes: ["ATA"], forca: 83 },
      { nome: "Warley", posicoes: ["ATA"], forca: 77 },
      { nome: "Esquerdinha", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 81 },
      { nome: "Mancini", posicoes: ["LD"], forca: 82 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 84 },
      { nome: "Lincoln", posicoes: ["MC"], forca: 80 },
      { nome: "Valdo", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 81 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { nome: "Alex Alves", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Fluminense",
    jogadores: [
      { nome: "Murilo", posicoes: ["GOL"], forca: 78 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 77 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 77 },
      { nome: "César", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo César", posicoes: ["LE"], forca: 76 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 79 },
      { nome: "Fernando Diniz", posicoes: ["MC"], forca: 78 },
      { nome: "Roger", posicoes: ["MEI"], forca: 83 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 83 },
      { nome: "Ramon", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 83 },
      { nome: "Roni", posicoes: ["ATA"], forca: 81 },
      { nome: "Tuta", posicoes: ["ATA"], forca: 78 },
      { nome: "Alex Dias", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 80 },
      { nome: "Anderson Lima", posicoes: ["LD"], forca: 80 },
      { nome: "Polga", posicoes: ["ZAG"], forca: 80 },
      { nome: "Claudiomiro", posicoes: ["ZAG"], forca: 76 },
      { nome: "Roger", posicoes: ["LE"], forca: 79 },
      { nome: "Tinga", posicoes: ["VOL"], forca: 81 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 77 },
      { nome: "Fábio Rochemback", posicoes: ["MC"], forca: 78 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Carlos Miguel", posicoes: ["MEI"], forca: 78 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 83 },
      { nome: "Luís Mário", posicoes: ["ATA"], forca: 78 },
      { nome: "Warley", posicoes: ["ATA"], forca: 76 },
      { nome: "Christian", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Vasco",
    jogadores: [
      { nome: "Hélton", posicoes: ["GOL"], forca: 83 },
      { nome: "Jorginho Paulista", posicoes: ["LD"], forca: 78 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Felipe", posicoes: ["LE"], forca: 84 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Juninho Paulista", posicoes: ["MEI"], forca: 84 },
      { nome: "Viola", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Romário", posicoes: ["ATA"], forca: 88 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { nome: "Euller", posicoes: ["ATA"], forca: 81 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 80 }
    ]
  },

  // ===== Edição 2000 =====

  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Vasco",
    jogadores: [
      { nome: "Hélton", posicoes: ["GOL"], forca: 83 },
      { nome: "Jorginho Paulista", posicoes: ["LD"], forca: 78 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Felipe", posicoes: ["LE"], forca: 84 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Juninho Paulista", posicoes: ["MEI"], forca: 84 },
      { nome: "Viola", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Romário", posicoes: ["ATA"], forca: 88 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { nome: "Euller", posicoes: ["ATA"], forca: 81 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "São Caetano",
    jogadores: [
      { nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 80 },
      { nome: "Russo", posicoes: ["LD"], forca: 79 },
      { nome: "Daniel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dininho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rubens Cardoso", posicoes: ["LE"], forca: 79 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 83 },
      { nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { nome: "Adãozinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Anaílson", posicoes: ["MEI"], forca: 79 },
      { nome: "Wágner", posicoes: ["MC"], forca: 76 },
      { nome: "Somália", posicoes: ["ATA"], forca: 82 },
      { nome: "Adhemar", posicoes: ["ATA"], forca: 83 },
      { nome: "Warley", posicoes: ["ATA"], forca: 77 },
      { nome: "Esquerdinha", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { nome: "Nonato", posicoes: ["LD"], forca: 77 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Sorín", posicoes: ["LE"], forca: 82 },
      { nome: "Ricardinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Valdo", posicoes: ["MC"], forca: 81 },
      { nome: "Palhinha", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "Muller", posicoes: ["PD"], forca: 80 },
      { nome: "Geovanni", posicoes: ["PE"], forca: 81 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 84 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Fábio Júnior", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 78 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 77 },
      { nome: "Nem", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Kleber", posicoes: ["LE"], forca: 78 },
      { nome: "Cocito", posicoes: ["VOL"], forca: 80 },
      { nome: "Kléberson", posicoes: ["MC"], forca: 82 },
      { nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Fernandinho", posicoes: ["MEI"], forca: 78 },
      { nome: "Alex Mineiro", posicoes: ["PD"], forca: 85 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 80 },
      { nome: "Ilán", posicoes: ["ATA"], forca: 80 },
      { nome: "Dagoberto", posicoes: ["ATA"], forca: 78 },
      { nome: "Ivan", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 80 },
      { nome: "Anderson Lima", posicoes: ["LD"], forca: 80 },
      { nome: "Polga", posicoes: ["ZAG"], forca: 80 },
      { nome: "Claudiomiro", posicoes: ["ZAG"], forca: 76 },
      { nome: "Roger", posicoes: ["LE"], forca: 79 },
      { nome: "Tinga", posicoes: ["VOL"], forca: 81 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 77 },
      { nome: "Fábio Rochemback", posicoes: ["MC"], forca: 78 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Carlos Miguel", posicoes: ["MEI"], forca: 78 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 83 },
      { nome: "Luís Mário", posicoes: ["ATA"], forca: 78 },
      { nome: "Warley", posicoes: ["ATA"], forca: 76 },
      { nome: "Christian", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1999 =====

  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { nome: "Índio", posicoes: ["LD"], forca: 77 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 82 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 79 },
      { nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { nome: "Vampeta", posicoes: ["VOL"], forca: 84 },
      { nome: "Freddy Rincón", posicoes: ["MC"], forca: 83 },
      { nome: "Edu", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 88 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 83 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { nome: "Luizão", posicoes: ["ATA"], forca: 85 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernando Baiano", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 81 },
      { nome: "Mancini", posicoes: ["LD"], forca: 82 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 84 },
      { nome: "Lincoln", posicoes: ["MC"], forca: 80 },
      { nome: "Valdo", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 81 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { nome: "Alex Alves", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Vitória",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Carlos", posicoes: ["LD"], forca: 77 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alex Alves", posicoes: ["ZAG"], forca: 76 },
      { nome: "Gil Baiano", posicoes: ["LE"], forca: 77 },
      { nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 80 },
      { nome: "Paulo Isidoro", posicoes: ["MC"], forca: 80 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 82 },
      { nome: "Bebeto Campos", posicoes: ["MEI"], forca: 77 },
      { nome: "Oséas", posicoes: ["PD"], forca: 78 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 81 },
      { nome: "Pichetti", posicoes: ["ATA"], forca: 78 },
      { nome: "Nadson", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 82 },
      { nome: "Belletti", posicoes: ["LD"], forca: 80 },
      { nome: "Edmílson", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rogério Pinheiro", posicoes: ["ZAG"], forca: 77 },
      { nome: "Fábio Aurélio", posicoes: ["LE"], forca: 80 },
      { nome: "Alexandre", posicoes: ["VOL"], forca: 77 },
      { nome: "Beto", posicoes: ["MC"], forca: 79 },
      { nome: "Souza", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Raí", posicoes: ["MEI"], forca: 84 },
      { nome: "Denílson", posicoes: ["MEI","PE"], forca: 83 },
      { nome: "França", posicoes: ["ATA"], forca: 84 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 81 },
      { nome: "Aristizábal", posicoes: ["ATA"], forca: 79 },
      { nome: "Sandro Hiroshi", posicoes: ["ATA","PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { nome: "Nonato", posicoes: ["LD"], forca: 77 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Sorín", posicoes: ["LE"], forca: 82 },
      { nome: "Ricardinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Valdo", posicoes: ["MC"], forca: 81 },
      { nome: "Palhinha", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "Muller", posicoes: ["PD"], forca: 80 },
      { nome: "Geovanni", posicoes: ["PE"], forca: 81 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 84 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Fábio Júnior", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1998 =====

  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { nome: "Índio", posicoes: ["LD"], forca: 77 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 82 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 79 },
      { nome: "Kléber", posicoes: ["LE"], forca: 81 },
      { nome: "Vampeta", posicoes: ["VOL"], forca: 84 },
      { nome: "Freddy Rincón", posicoes: ["MC"], forca: 83 },
      { nome: "Edu", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 88 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 83 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { nome: "Luizão", posicoes: ["ATA"], forca: 85 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernando Baiano", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { nome: "Nonato", posicoes: ["LD"], forca: 77 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Sorín", posicoes: ["LE"], forca: 82 },
      { nome: "Ricardinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Valdo", posicoes: ["MC"], forca: 81 },
      { nome: "Palhinha", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "Muller", posicoes: ["PD"], forca: 80 },
      { nome: "Geovanni", posicoes: ["PE"], forca: 81 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 84 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Fábio Júnior", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Santos",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 81 },
      { nome: "Baiano", posicoes: ["LD"], forca: 78 },
      { nome: "César", posicoes: ["ZAG"], forca: 77 },
      { nome: "Argel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["LE"], forca: 78 },
      { nome: "Marcos Assunção", posicoes: ["VOL"], forca: 82 },
      { nome: "Gallo", posicoes: ["MC"], forca: 79 },
      { nome: "Lúcio", posicoes: ["MEI"], forca: 78 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 85 },
      { nome: "Elano", posicoes: ["MEI","ATA"], forca: 74 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 82 },
      { nome: "Müller", posicoes: ["ATA"], forca: 80 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 78 },
      { nome: "Edu", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Portuguesa",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 80 },
      { nome: "Emerson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Capone", posicoes: ["ZAG"], forca: 77 },
      { nome: "Augusto", posicoes: ["LE"], forca: 76 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { nome: "Alex Alves", posicoes: ["MC"], forca: 77 },
      { nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 83 },
      { nome: "Caio", posicoes: ["MEI"], forca: 82 },
      { nome: "Zé Roberto", posicoes: ["PD"], forca: 82 },
      { nome: "Leandro Amaral", posicoes: ["ATA"], forca: 80 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 82 },
      { nome: "Tico", posicoes: ["ATA"], forca: 76 },
      { nome: "Rogério", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Sport",
    jogadores: [
      { nome: "Maizena", posicoes: ["GOL"], forca: 78 },
      { nome: "Russo", posicoes: ["LD"], forca: 77 },
      { nome: "Sandro Blum", posicoes: ["ZAG"], forca: 76 },
      { nome: "Érlon", posicoes: ["ZAG"], forca: 75 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 75 },
      { nome: "Leomar", posicoes: ["VOL"], forca: 78 },
      { nome: "Nildo", posicoes: ["MC"], forca: 80 },
      { nome: "Jackson", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Leonardo", posicoes: ["MEI"], forca: 78 },
      { nome: "Carlinhos Bala", posicoes: ["PD"], forca: 75 },
      { nome: "Robertinho", posicoes: ["ATA"], forca: 78 },
      { nome: "Luís Müller", posicoes: ["ATA"], forca: 76 },
      { nome: "Heraldo", posicoes: ["ATA"], forca: 75 },
      { nome: "Adriano", posicoes: ["PE"], forca: 74 }
    ]
  },

  // ===== Edição 1997 =====

  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Vasco",
    jogadores: [
      { nome: "Carlos Germano", posicoes: ["GOL"], forca: 83 },
      { nome: "Vítor", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Felipe", posicoes: ["LE"], forca: 83 },
      { nome: "Nasa", posicoes: ["VOL"], forca: 79 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 85 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Ramon", posicoes: ["MEI"], forca: 80 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { nome: "Evair", posicoes: ["ATA"], forca: 82 },
      { nome: "Donizete", posicoes: ["ATA"], forca: 81 },
      { nome: "Luizão", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 83 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior", posicoes: ["LE"], forca: 80 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 83 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 86 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 79 },
      { nome: "Euller", posicoes: ["ATA"], forca: 80 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Internacional",
    jogadores: [
      { nome: "André", posicoes: ["GOL"], forca: 78 },
      { nome: "César Prates", posicoes: ["LD"], forca: 80 },
      { nome: "Gamarra", posicoes: ["ZAG"], forca: 84 },
      { nome: "Aloísio", posicoes: ["ZAG"], forca: 78 },
      { nome: "Márcio Santos", posicoes: ["LE"], forca: 78 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 82 },
      { nome: "Fernando", posicoes: ["MC"], forca: 77 },
      { nome: "Fabiano", posicoes: ["MEI"], forca: 76 },
      { nome: "Christian", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Sérgio Manoel", posicoes: ["PD"], forca: 78 },
      { nome: "Fabiano Souza", posicoes: ["ATA"], forca: 76 },
      { nome: "Celso", posicoes: ["ATA"], forca: 75 },
      { nome: "Luciano", posicoes: ["PE"], forca: 75 },
      { nome: "Müller", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Santos",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 81 },
      { nome: "Baiano", posicoes: ["LD"], forca: 78 },
      { nome: "César", posicoes: ["ZAG"], forca: 77 },
      { nome: "Argel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Léo", posicoes: ["LE"], forca: 78 },
      { nome: "Marcos Assunção", posicoes: ["VOL"], forca: 82 },
      { nome: "Gallo", posicoes: ["MC"], forca: 79 },
      { nome: "Lúcio", posicoes: ["MEI"], forca: 78 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 85 },
      { nome: "Elano", posicoes: ["MEI","ATA"], forca: 74 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 82 },
      { nome: "Müller", posicoes: ["ATA"], forca: 80 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 78 },
      { nome: "Edu", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Flamengo",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 79 },
      { nome: "Marcos Adriano", posicoes: ["LD"], forca: 75 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 76 },
      { nome: "Athirson", posicoes: ["LE"], forca: 80 },
      { nome: "Leandro Ávila", posicoes: ["VOL"], forca: 78 },
      { nome: "Iranildo", posicoes: ["MC"], forca: 79 },
      { nome: "Sávio", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Romário", posicoes: ["MEI","ATA"], forca: 88 },
      { nome: "Lúcio", posicoes: ["PE"], forca: 76 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 86 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 77 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Taffarel", posicoes: ["GOL"], forca: 83 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 77 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dedê", posicoes: ["LE"], forca: 76 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 78 },
      { nome: "Doriva", posicoes: ["MC"], forca: 79 },
      { nome: "Éder", posicoes: ["MEI"], forca: 82 },
      { nome: "Renaldo", posicoes: ["MEI"], forca: 80 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 80 },
      { nome: "Marques", posicoes: ["ATA"], forca: 81 },
      { nome: "Valdir Bigode", posicoes: ["ATA"], forca: 79 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 1996 =====

  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Arce", posicoes: ["LD"], forca: 81 },
      { nome: "Adílson Batista", posicoes: ["ZAG"], forca: 81 },
      { nome: "Rivarola", posicoes: ["ZAG"], forca: 79 },
      { nome: "Roger", posicoes: ["LE"], forca: 77 },
      { nome: "Dinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Goiano", posicoes: ["MC"], forca: 80 },
      { nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Assis", posicoes: ["MEI"], forca: 80 },
      { nome: "Arílson", posicoes: ["PD"], forca: 80 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 83 },
      { nome: "Jardel", posicoes: ["ATA"], forca: 85 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 79 },
      { nome: "Cuca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Portuguesa",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 84 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 80 },
      { nome: "Emerson", posicoes: ["ZAG"], forca: 78 },
      { nome: "Capone", posicoes: ["ZAG"], forca: 77 },
      { nome: "Augusto", posicoes: ["LE"], forca: 76 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 78 },
      { nome: "Alex Alves", posicoes: ["MC"], forca: 77 },
      { nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 83 },
      { nome: "Caio", posicoes: ["MEI"], forca: 82 },
      { nome: "Zé Roberto", posicoes: ["PD"], forca: 82 },
      { nome: "Leandro Amaral", posicoes: ["ATA"], forca: 80 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 82 },
      { nome: "Tico", posicoes: ["ATA"], forca: 76 },
      { nome: "Rogério", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Taffarel", posicoes: ["GOL"], forca: 83 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 77 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dedê", posicoes: ["LE"], forca: 76 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 78 },
      { nome: "Doriva", posicoes: ["MC"], forca: 79 },
      { nome: "Éder", posicoes: ["MEI"], forca: 82 },
      { nome: "Renaldo", posicoes: ["MEI"], forca: 80 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 80 },
      { nome: "Marques", posicoes: ["ATA"], forca: 81 },
      { nome: "Valdir Bigode", posicoes: ["ATA"], forca: 79 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Goiás",
    jogadores: [
      { nome: "Harlei", posicoes: ["GOL"], forca: 81 },
      { nome: "Vitor", posicoes: ["LD"], forca: 76 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Baier", posicoes: ["LE"], forca: 79 },
      { nome: "Josué", posicoes: ["VOL"], forca: 80 },
      { nome: "Danilo", posicoes: ["MC"], forca: 80 },
      { nome: "Túlio", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Fernandão", posicoes: ["MEI"], forca: 82 },
      { nome: "Iarley", posicoes: ["MEI"], forca: 80 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 83 },
      { nome: "Alex Dias", posicoes: ["ATA"], forca: 80 },
      { nome: "Dimba", posicoes: ["ATA"], forca: 81 },
      { nome: "Welliton", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 83 },
      { nome: "Vítor", posicoes: ["LD"], forca: 78 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 76 },
      { nome: "Nonato", posicoes: ["LE"], forca: 77 },
      { nome: "Donizete Amorim", posicoes: ["VOL"], forca: 78 },
      { nome: "Ricardinho", posicoes: ["MC"], forca: 79 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 80 },
      { nome: "Cleison", posicoes: ["PD"], forca: 77 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 83 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 78 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 78 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { nome: "Sérgio", posicoes: ["GOL"], forca: 75 },
      { nome: "Antônio Carlos", posicoes: ["LD"], forca: 78 },
      { nome: "Cléber", posicoes: ["ZAG"], forca: 83 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 86 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 84 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Mazinho", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 87 },
      { nome: "Edílson", posicoes: ["PD"], forca: 84 },
      { nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 88 },
      { nome: "Müller", posicoes: ["ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1995 =====

  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wagner", posicoes: ["GOL"], forca: 82 },
      { nome: "Perivaldo", posicoes: ["LD"], forca: 77 },
      { nome: "Gonçalves", posicoes: ["ZAG"], forca: 83 },
      { nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "André Silva", posicoes: ["LE"], forca: 77 },
      { nome: "Leandro Ávila", posicoes: ["VOL"], forca: 80 },
      { nome: "Jamir", posicoes: ["MC"], forca: 79 },
      { nome: "Beto", posicoes: ["MEI"], forca: 81 },
      { nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 78 },
      { nome: "Sérgio Manoel", posicoes: ["PD"], forca: 82 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 88 },
      { nome: "Donizete", posicoes: ["ATA"], forca: 82 },
      { nome: "Valdeir", posicoes: ["ATA"], forca: 79 },
      { nome: "Mauricinho", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Santos",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 79 },
      { nome: "Maurício", posicoes: ["LD"], forca: 76 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 76 },
      { nome: "César", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gustavo", posicoes: ["LE"], forca: 75 },
      { nome: "Gallo", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 78 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 86 },
      { nome: "Robert", posicoes: ["MEI"], forca: 79 },
      { nome: "Macedo", posicoes: ["PD"], forca: 78 },
      { nome: "Camanducaia", posicoes: ["ATA"], forca: 77 },
      { nome: "Guga", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { nome: "Jamelli", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 83 },
      { nome: "Vítor", posicoes: ["LD"], forca: 78 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 76 },
      { nome: "Nonato", posicoes: ["LE"], forca: 77 },
      { nome: "Donizete Amorim", posicoes: ["VOL"], forca: 78 },
      { nome: "Ricardinho", posicoes: ["MC"], forca: 79 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 80 },
      { nome: "Cleison", posicoes: ["PD"], forca: 77 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 83 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 78 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 78 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Fluminense",
    jogadores: [
      { nome: "Wellerson", posicoes: ["GOL"], forca: 77 },
      { nome: "Ronald", posicoes: ["LD"], forca: 75 },
      { nome: "César", posicoes: ["ZAG"], forca: 78 },
      { nome: "Márcio Costa", posicoes: ["ZAG"], forca: 76 },
      { nome: "Lira", posicoes: ["LE"], forca: 76 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 78 },
      { nome: "Djair", posicoes: ["MC"], forca: 78 },
      { nome: "Roger", posicoes: ["MEI"], forca: 77 },
      { nome: "Aílton", posicoes: ["MEI"], forca: 79 },
      { nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Ézio", posicoes: ["ATA"], forca: 82 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 77 },
      { nome: "Roni", posicoes: ["ATA"], forca: 76 },
      { nome: "Rogerinho", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Arce", posicoes: ["LD"], forca: 81 },
      { nome: "Adílson Batista", posicoes: ["ZAG"], forca: 81 },
      { nome: "Rivarola", posicoes: ["ZAG"], forca: 79 },
      { nome: "Roger", posicoes: ["LE"], forca: 77 },
      { nome: "Dinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Goiano", posicoes: ["MC"], forca: 80 },
      { nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Assis", posicoes: ["MEI"], forca: 80 },
      { nome: "Arílson", posicoes: ["PD"], forca: 80 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 83 },
      { nome: "Jardel", posicoes: ["ATA"], forca: 85 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 79 },
      { nome: "Cuca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { nome: "André Santos", posicoes: ["LD"], forca: 76 },
      { nome: "Célio Silva", posicoes: ["ZAG"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 77 },
      { nome: "Silvinho", posicoes: ["LE"], forca: 79 },
      { nome: "Zé Elias", posicoes: ["VOL"], forca: 81 },
      { nome: "Bernardo", posicoes: ["MC"], forca: 77 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 86 },
      { nome: "Souza", posicoes: ["MEI"], forca: 80 },
      { nome: "Viola", posicoes: ["ATA"], forca: 84 },
      { nome: "Marques", posicoes: ["ATA"], forca: 78 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 78 },
      { nome: "Neto", posicoes: ["PD"], forca: 82 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1994 =====

  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { nome: "Sérgio", posicoes: ["GOL"], forca: 75 },
      { nome: "Antônio Carlos", posicoes: ["LD"], forca: 78 },
      { nome: "Cléber", posicoes: ["ZAG"], forca: 83 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 86 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 84 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Mazinho", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 87 },
      { nome: "Edílson", posicoes: ["PD"], forca: 84 },
      { nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 88 },
      { nome: "Müller", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { nome: "Giba", posicoes: ["LD"], forca: 77 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 78 },
      { nome: "Pintado", posicoes: ["LD"], forca: 77 },
      { nome: "André Cruz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 83 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 76 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { nome: "Djalminha", posicoes: ["MC"], forca: 83 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 84 },
      { nome: "Luizão", posicoes: ["MEI"], forca: 78 },
      { nome: "Tiba", posicoes: ["PD"], forca: 77 },
      { nome: "Amoroso", posicoes: ["ATA"], forca: 84 },
      { nome: "Viola", posicoes: ["ATA"], forca: 80 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 78 },
      { nome: "Clóvis", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 81 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 78 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder", posicoes: ["MEI"], forca: 83 },
      { nome: "Aílton", posicoes: ["MEI"], forca: 79 },
      { nome: "Renaldo", posicoes: ["PD"], forca: 80 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 },
      { nome: "Marques", posicoes: ["ATA"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 79 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 78 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 77 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 76 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 77 },
      { nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 83 },
      { nome: "Marquinhos", posicoes: ["MEI"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 77 },
      { nome: "Charles Fabian", posicoes: ["ATA"], forca: 82 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 79 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 76 },
      { nome: "Naldinho", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1993 =====

  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { nome: "Sérgio", posicoes: ["GOL"], forca: 75 },
      { nome: "Antônio Carlos", posicoes: ["LD"], forca: 78 },
      { nome: "Cléber", posicoes: ["ZAG"], forca: 83 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 86 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 84 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Mazinho", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 87 },
      { nome: "Edílson", posicoes: ["PD"], forca: 84 },
      { nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 88 },
      { nome: "Müller", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Vitória",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Carlos", posicoes: ["LD"], forca: 77 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alex Alves", posicoes: ["ZAG"], forca: 76 },
      { nome: "Gil Baiano", posicoes: ["LE"], forca: 77 },
      { nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 80 },
      { nome: "Paulo Isidoro", posicoes: ["MC"], forca: 80 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 82 },
      { nome: "Bebeto Campos", posicoes: ["MEI"], forca: 77 },
      { nome: "Oséas", posicoes: ["PD"], forca: 78 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 81 },
      { nome: "Pichetti", posicoes: ["ATA"], forca: 78 },
      { nome: "Nadson", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { nome: "Giba", posicoes: ["LD"], forca: 77 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Santos",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 79 },
      { nome: "Maurício", posicoes: ["LD"], forca: 76 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 76 },
      { nome: "César", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gustavo", posicoes: ["LE"], forca: 75 },
      { nome: "Gallo", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 78 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 86 },
      { nome: "Robert", posicoes: ["MEI"], forca: 79 },
      { nome: "Macedo", posicoes: ["PD"], forca: 78 },
      { nome: "Camanducaia", posicoes: ["ATA"], forca: 77 },
      { nome: "Guga", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { nome: "Jamelli", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 78 },
      { nome: "Pintado", posicoes: ["LD"], forca: 77 },
      { nome: "André Cruz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 83 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 76 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 80 },
      { nome: "Djalminha", posicoes: ["MC"], forca: 83 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 84 },
      { nome: "Luizão", posicoes: ["MEI"], forca: 78 },
      { nome: "Tiba", posicoes: ["PD"], forca: 77 },
      { nome: "Amoroso", posicoes: ["ATA"], forca: 84 },
      { nome: "Viola", posicoes: ["ATA"], forca: 80 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 78 },
      { nome: "Clóvis", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 1992 =====

  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Flamengo",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 81 },
      { nome: "Charles Guerreiro", posicoes: ["LD"], forca: 76 },
      { nome: "Rondinelli", posicoes: ["ZAG"], forca: 77 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 80 },
      { nome: "Piá", posicoes: ["LE"], forca: 75 },
      { nome: "Uidemar", posicoes: ["VOL"], forca: 78 },
      { nome: "Júnior", posicoes: ["MC"], forca: 84 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 80 },
      { nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Gaúcho", posicoes: ["PD"], forca: 80 },
      { nome: "Nélio", posicoes: ["ATA"], forca: 78 },
      { nome: "Djalminha", posicoes: ["ATA"], forca: 79 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wagner", posicoes: ["GOL"], forca: 82 },
      { nome: "Perivaldo", posicoes: ["LD"], forca: 77 },
      { nome: "Gonçalves", posicoes: ["ZAG"], forca: 83 },
      { nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "André Silva", posicoes: ["LE"], forca: 77 },
      { nome: "Leandro Ávila", posicoes: ["VOL"], forca: 80 },
      { nome: "Jamir", posicoes: ["MC"], forca: 79 },
      { nome: "Beto", posicoes: ["MEI"], forca: 81 },
      { nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 78 },
      { nome: "Sérgio Manoel", posicoes: ["PD"], forca: 82 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 88 },
      { nome: "Donizete", posicoes: ["ATA"], forca: 82 },
      { nome: "Valdeir", posicoes: ["ATA"], forca: 79 },
      { nome: "Mauricinho", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 82 },
      { nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 79 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jorge Luís", posicoes: ["ZAG"], forca: 77 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { nome: "Luisinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Bismarck", posicoes: ["MC"], forca: 82 },
      { nome: "Geovani", posicoes: ["MEI"], forca: 84 },
      { nome: "William", posicoes: ["MEI"], forca: 78 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 86 },
      { nome: "Sorato", posicoes: ["ATA"], forca: 80 },
      { nome: "Valdir", posicoes: ["ATA"], forca: 78 },
      { nome: "Tita", posicoes: ["PE"], forca: 80 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Bragantino",
    jogadores: [
      { nome: "Gilberto", posicoes: ["GOL"], forca: 80 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { nome: "Sílvio", posicoes: ["LE"], forca: 76 },
      { nome: "Mauro Silva", posicoes: ["VOL"], forca: 85 },
      { nome: "Tiba", posicoes: ["MC"], forca: 78 },
      { nome: "João Santos", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 79 },
      { nome: "Marco Antônio", posicoes: ["PD"], forca: 76 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { nome: "Franklin", posicoes: ["ATA"], forca: 79 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Santos",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 79 },
      { nome: "Maurício", posicoes: ["LD"], forca: 76 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 76 },
      { nome: "César", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gustavo", posicoes: ["LE"], forca: 75 },
      { nome: "Gallo", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 78 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 86 },
      { nome: "Robert", posicoes: ["MEI"], forca: 79 },
      { nome: "Macedo", posicoes: ["PD"], forca: 78 },
      { nome: "Camanducaia", posicoes: ["ATA"], forca: 77 },
      { nome: "Guga", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { nome: "Jamelli", posicoes: ["PE"], forca: 80 }
    ]
  },

  // ===== Edição 1991 =====

  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Bragantino",
    jogadores: [
      { nome: "Gilberto", posicoes: ["GOL"], forca: 80 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { nome: "Sílvio", posicoes: ["LE"], forca: 76 },
      { nome: "Mauro Silva", posicoes: ["VOL"], forca: 85 },
      { nome: "Tiba", posicoes: ["MC"], forca: 78 },
      { nome: "João Santos", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 79 },
      { nome: "Marco Antônio", posicoes: ["PD"], forca: 76 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 82 },
      { nome: "Franklin", posicoes: ["ATA"], forca: 79 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 81 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 78 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder", posicoes: ["MEI"], forca: 83 },
      { nome: "Aílton", posicoes: ["MEI"], forca: 79 },
      { nome: "Renaldo", posicoes: ["PD"], forca: 80 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 },
      { nome: "Marques", posicoes: ["ATA"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { nome: "Giba", posicoes: ["LD"], forca: 77 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Flamengo",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 81 },
      { nome: "Charles Guerreiro", posicoes: ["LD"], forca: 76 },
      { nome: "Rondinelli", posicoes: ["ZAG"], forca: 77 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 80 },
      { nome: "Piá", posicoes: ["LE"], forca: 75 },
      { nome: "Uidemar", posicoes: ["VOL"], forca: 78 },
      { nome: "Júnior", posicoes: ["MC"], forca: 84 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 83 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 80 },
      { nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Gaúcho", posicoes: ["PD"], forca: 80 },
      { nome: "Nélio", posicoes: ["ATA"], forca: 78 },
      { nome: "Djalminha", posicoes: ["ATA"], forca: 79 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 82 },
      { nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 79 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jorge Luís", posicoes: ["ZAG"], forca: 77 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { nome: "Luisinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Bismarck", posicoes: ["MC"], forca: 82 },
      { nome: "Geovani", posicoes: ["MEI"], forca: 84 },
      { nome: "William", posicoes: ["MEI"], forca: 78 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 86 },
      { nome: "Sorato", posicoes: ["ATA"], forca: 80 },
      { nome: "Valdir", posicoes: ["ATA"], forca: 78 },
      { nome: "Tita", posicoes: ["PE"], forca: 80 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1990 =====

  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 84 },
      { nome: "Giba", posicoes: ["LD"], forca: 77 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 81 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 76 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 80 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 79 },
      { nome: "Neto", posicoes: ["MEI"], forca: 89 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 77 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 78 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 83 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 86 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 87 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 82 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 81 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 84 },
      { nome: "Raí", posicoes: ["MEI"], forca: 90 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 82 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Arce", posicoes: ["LD"], forca: 81 },
      { nome: "Adílson Batista", posicoes: ["ZAG"], forca: 81 },
      { nome: "Rivarola", posicoes: ["ZAG"], forca: 79 },
      { nome: "Roger", posicoes: ["LE"], forca: 77 },
      { nome: "Dinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Goiano", posicoes: ["MC"], forca: 80 },
      { nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Assis", posicoes: ["MEI"], forca: 80 },
      { nome: "Arílson", posicoes: ["PD"], forca: 80 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 83 },
      { nome: "Jardel", posicoes: ["ATA"], forca: 85 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 79 },
      { nome: "Cuca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 79 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 78 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 77 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 76 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 77 },
      { nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 83 },
      { nome: "Marquinhos", posicoes: ["MEI"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 77 },
      { nome: "Charles Fabian", posicoes: ["ATA"], forca: 82 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 79 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 76 },
      { nome: "Naldinho", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 82 },
      { nome: "Toninho", posicoes: ["LD"], forca: 76 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vladimir", posicoes: ["LE"], forca: 77 },
      { nome: "Lima", posicoes: ["VOL"], forca: 77 },
      { nome: "César Sampaio", posicoes: ["MC"], forca: 80 },
      { nome: "Tato", posicoes: ["MEI"], forca: 78 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Mirandinha", posicoes: ["PD"], forca: 78 },
      { nome: "Evair", posicoes: ["ATA"], forca: 84 },
      { nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 77 },
      { nome: "Gaúcho", posicoes: ["ATA"], forca: 78 },
      { nome: "Nei", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 1989 =====

  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { nome: "William", posicoes: ["MEI"], forca: 80 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { nome: "Tita", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { nome: "Pita", posicoes: ["MC"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato", posicoes: ["PD"], forca: 82 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 80 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 78 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 77 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 78 },
      { nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { nome: "Charles", posicoes: ["MC"], forca: 81 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 78 },
      { nome: "Marquinhos", posicoes: ["PE"], forca: 79 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 80 },
      { nome: "Naldinho", posicoes: ["ATA"], forca: 77 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { nome: "China", posicoes: ["VOL"], forca: 79 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { nome: "Jair", posicoes: ["PE"], forca: 77 },
      { nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1988 =====

  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 80 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 78 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 77 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 78 },
      { nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { nome: "Charles", posicoes: ["MC"], forca: 81 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 78 },
      { nome: "Marquinhos", posicoes: ["PE"], forca: 79 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 80 },
      { nome: "Naldinho", posicoes: ["ATA"], forca: 77 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { nome: "Jair", posicoes: ["PE"], forca: 77 },
      { nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Fluminense",
    jogadores: [
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 83 },
      { nome: "Aldo", posicoes: ["LD"], forca: 78 },
      { nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 85 },
      { nome: "Duílio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Branco", posicoes: ["LE"], forca: 84 },
      { nome: "Jandir", posicoes: ["VOL"], forca: 80 },
      { nome: "Deley", posicoes: ["MC"], forca: 84 },
      { nome: "Renato", posicoes: ["MC"], forca: 83 },
      { nome: "Washington", posicoes: ["MEI"], forca: 84 },
      { nome: "Assis", posicoes: ["MEI"], forca: 85 },
      { nome: "Tato", posicoes: ["PD"], forca: 80 },
      { nome: "Romerito", posicoes: ["PE"], forca: 84 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { nome: "T Washington", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 82 },
      { nome: "Rosemiro", posicoes: ["LD"], forca: 78 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 82 },
      { nome: "Márcio Alcântara", posicoes: ["ZAG"], forca: 79 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 79 },
      { nome: "Lima", posicoes: ["VOL"], forca: 78 },
      { nome: "Jorginho Putinatti", posicoes: ["MC"], forca: 82 },
      { nome: "Mendel", posicoes: ["MC"], forca: 77 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 83 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Mirandinha", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 82 },
      { nome: "Evair", posicoes: ["ATA"], forca: 84 },
      { nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { nome: "China", posicoes: ["VOL"], forca: 79 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1987 =====

  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Sport",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 78 },
      { nome: "Betão", posicoes: ["LD"], forca: 76 },
      { nome: "Júnior", posicoes: ["ZAG"], forca: 77 },
      { nome: "Estevam", posicoes: ["ZAG"], forca: 76 },
      { nome: "Ribamar", posicoes: ["LE"], forca: 75 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 78 },
      { nome: "Neto", posicoes: ["MC"], forca: 80 },
      { nome: "Marco Antônio", posicoes: ["MC"], forca: 77 },
      { nome: "Robertinho", posicoes: ["MEI"], forca: 78 },
      { nome: "Rogério", posicoes: ["PD"], forca: 76 },
      { nome: "Édson", posicoes: ["PE"], forca: 76 },
      { nome: "Nando", posicoes: ["ATA"], forca: 80 },
      { nome: "Rivaldo", posicoes: ["ATA"], forca: 76 },
      { nome: "Gena", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { nome: "China", posicoes: ["MC"], forca: 78 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { nome: "Neto", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { nome: "Jair", posicoes: ["PE"], forca: 77 },
      { nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Carlos Gomes", posicoes: ["GOL"], forca: 78 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { nome: "Geraldão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 77 },
      { nome: "Nonato", posicoes: ["LE"], forca: 78 },
      { nome: "Douglas", posicoes: ["VOL"], forca: 77 },
      { nome: "Eduardo Amorim", posicoes: ["MC"], forca: 80 },
      { nome: "Balu", posicoes: ["MC"], forca: 77 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 83 },
      { nome: "Careca", posicoes: ["MEI"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 82 },
      { nome: "Tostão II", posicoes: ["PE"], forca: 77 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 76 },
      { nome: "Hamilton", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1986 =====

  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { nome: "Pita", posicoes: ["MC"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato", posicoes: ["PD"], forca: 82 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { nome: "China", posicoes: ["MC"], forca: 78 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { nome: "Neto", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "América-RJ",
    jogadores: [
      { nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 80 },
      { nome: "Jorginho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Duílio", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gilberto", posicoes: ["LE"], forca: 76 },
      { nome: "Gilson Gênio", posicoes: ["VOL"], forca: 78 },
      { nome: "Aílton", posicoes: ["MC"], forca: 78 },
      { nome: "Donizete", posicoes: ["MC"], forca: 77 },
      { nome: "Edu Coimbra", posicoes: ["MEI"], forca: 84 },
      { nome: "Luisinho Lemos", posicoes: ["MEI"], forca: 79 },
      { nome: "Chiquinho", posicoes: ["PD"], forca: 76 },
      { nome: "João Carlos", posicoes: ["PE"], forca: 76 },
      { nome: "Tita", posicoes: ["ATA"], forca: 81 },
      { nome: "Gilberto Oliveira", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { nome: "Jair", posicoes: ["PE"], forca: 77 },
      { nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1985 =====

  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Coritiba",
    jogadores: [
      { nome: "Rafael", posicoes: ["GOL"], forca: 80 },
      { nome: "André", posicoes: ["LD"], forca: 77 },
      { nome: "Vavá", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dida", posicoes: ["LE"], forca: 76 },
      { nome: "Toby", posicoes: ["VOL"], forca: 78 },
      { nome: "Aladim", posicoes: ["MC"], forca: 78 },
      { nome: "Lela", posicoes: ["MC"], forca: 83 },
      { nome: "Pachequinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Édson", posicoes: ["MEI"], forca: 77 },
      { nome: "Marildo", posicoes: ["PD"], forca: 77 },
      { nome: "Tostão", posicoes: ["PE"], forca: 76 },
      { nome: "Índio", posicoes: ["ATA"], forca: 80 },
      { nome: "Marco Aurélio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Bangu",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 83 },
      { nome: "Ado", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ronaldo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Marinho", posicoes: ["LE"], forca: 80 },
      { nome: "Mário", posicoes: ["VOL"], forca: 79 },
      { nome: "Arturzinho", posicoes: ["MC"], forca: 85 },
      { nome: "Adozinho", posicoes: ["MC"], forca: 80 },
      { nome: "Lulinha", posicoes: ["MEI"], forca: 78 },
      { nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 79 },
      { nome: "Gilson Gênio", posicoes: ["PE"], forca: 78 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 84 },
      { nome: "Israel", posicoes: ["ATA"], forca: 80 },
      { nome: "Toinzinho", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Brasil de Pelotas",
    jogadores: [
      { nome: "João Luis", posicoes: ["GOL"], forca: 80 },
      { nome: "Nei Dias", posicoes: ["LD"], forca: 76 },
      { nome: "Jorge Batata", posicoes: ["LE"], forca: 76 },
      { nome: "Silva", posicoes: ["ZAG"], forca: 78 },
      { nome: "Hélio", posicoes: ["ZAG"], forca: 78 },
      { nome: "Doraci", posicoes: ["VOL"], forca: 80 },
      { nome: "Chiquinho", posicoes: ["MC"], forca: 78 },
      { nome: "Alamir", posicoes: ["MC"], forca: 78 },
      { nome: "Lívio", posicoes: ["MEI"], forca: 80 },
      { nome: "Júnior Brasília", posicoes: ["MEI"], forca: 82 },
      { nome: "Valdoir", posicoes: ["PD"], forca: 76 },
      { nome: "Mano", posicoes: ["PE"], forca: 76 },
      { nome: "Bira", posicoes: ["ATA"], forca: 83 },
      { nome: "Canhotinho", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { nome: "Jair", posicoes: ["PE"], forca: 77 },
      { nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 1984 =====

  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Fluminense",
    jogadores: [
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 83 },
      { nome: "Aldo", posicoes: ["LD"], forca: 78 },
      { nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 85 },
      { nome: "Duílio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Branco", posicoes: ["LE"], forca: 84 },
      { nome: "Jandir", posicoes: ["VOL"], forca: 80 },
      { nome: "Deley", posicoes: ["MC"], forca: 84 },
      { nome: "Renato", posicoes: ["MC"], forca: 83 },
      { nome: "Washington", posicoes: ["MEI"], forca: 84 },
      { nome: "Assis", posicoes: ["MEI"], forca: 85 },
      { nome: "Tato", posicoes: ["PD"], forca: 80 },
      { nome: "Romerito", posicoes: ["PE"], forca: 84 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { nome: "T Washington", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { nome: "William", posicoes: ["MEI"], forca: 80 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { nome: "Tita", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Corinthians",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 82 },
      { nome: "Édson Boaro", posicoes: ["LD"], forca: 80 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { nome: "Damião", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 84 },
      { nome: "Biro-Biro", posicoes: ["VOL"], forca: 82 },
      { nome: "Zenon", posicoes: ["MC"], forca: 85 },
      { nome: "Paulo Sérgio", posicoes: ["MC"], forca: 78 },
      { nome: "Sócrates", posicoes: ["MEI"], forca: 90 },
      { nome: "Casagrande", posicoes: ["MEI"], forca: 84 },
      { nome: "Ataliba", posicoes: ["PD"], forca: 80 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 79 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { nome: "China", posicoes: ["VOL"], forca: 79 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1983 =====

  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Santos",
    jogadores: [
      { nome: "Rodella", posicoes: ["GOL"], forca: 78 },
      { nome: "Nélson", posicoes: ["LD"], forca: 76 },
      { nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { nome: "Dema", posicoes: ["VOL"], forca: 78 },
      { nome: "Pita", posicoes: ["MC"], forca: 83 },
      { nome: "Lino", posicoes: ["MC"], forca: 77 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 76 },
      { nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 84 },
      { nome: "Edmar", posicoes: ["PD"], forca: 79 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 80 },
      { nome: "Juary", posicoes: ["ATA"], forca: 81 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Roberto Costa", posicoes: ["GOL"], forca: 78 },
      { nome: "Jorge Luís", posicoes: ["LD"], forca: 76 },
      { nome: "Rogério", posicoes: ["ZAG"], forca: 77 },
      { nome: "Djalma", posicoes: ["ZAG"], forca: 76 },
      { nome: "Nivaldo", posicoes: ["LE"], forca: 75 },
      { nome: "Assis", posicoes: ["VOL"], forca: 78 },
      { nome: "Lico", posicoes: ["MC"], forca: 78 },
      { nome: "Serginho", posicoes: ["MC"], forca: 76 },
      { nome: "Paulo Rink", posicoes: ["MEI"], forca: 75 },
      { nome: "Édson", posicoes: ["PD"], forca: 77 },
      { nome: "Dinei", posicoes: ["PE"], forca: 75 },
      { nome: "Washington", posicoes: ["ATA"], forca: 82 },
      { nome: "Sicupira", posicoes: ["ATA"], forca: 80 },
      { nome: "Jofre", posicoes: ["ATA"], forca: 74 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Bangu",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 83 },
      { nome: "Ado", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ronaldo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Marinho", posicoes: ["LE"], forca: 80 },
      { nome: "Mário", posicoes: ["VOL"], forca: 79 },
      { nome: "Arturzinho", posicoes: ["MC"], forca: 85 },
      { nome: "Adozinho", posicoes: ["MC"], forca: 80 },
      { nome: "Lulinha", posicoes: ["MEI"], forca: 78 },
      { nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 79 },
      { nome: "Gilson Gênio", posicoes: ["PE"], forca: 78 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 84 },
      { nome: "Israel", posicoes: ["ATA"], forca: 80 },
      { nome: "Toinzinho", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Corinthians",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 82 },
      { nome: "Édson Boaro", posicoes: ["LD"], forca: 80 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { nome: "Damião", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 84 },
      { nome: "Biro-Biro", posicoes: ["VOL"], forca: 82 },
      { nome: "Zenon", posicoes: ["MC"], forca: 85 },
      { nome: "Paulo Sérgio", posicoes: ["MC"], forca: 78 },
      { nome: "Sócrates", posicoes: ["MEI"], forca: 90 },
      { nome: "Casagrande", posicoes: ["MEI"], forca: 84 },
      { nome: "Ataliba", posicoes: ["PD"], forca: 80 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 79 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { nome: "China", posicoes: ["MC"], forca: 78 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { nome: "Neto", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1982 =====

  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { nome: "China", posicoes: ["VOL"], forca: 79 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Corinthians",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 82 },
      { nome: "Édson Boaro", posicoes: ["LD"], forca: 80 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { nome: "Damião", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 84 },
      { nome: "Biro-Biro", posicoes: ["VOL"], forca: 82 },
      { nome: "Zenon", posicoes: ["MC"], forca: 85 },
      { nome: "Paulo Sérgio", posicoes: ["MC"], forca: 78 },
      { nome: "Sócrates", posicoes: ["MEI"], forca: 90 },
      { nome: "Casagrande", posicoes: ["MEI"], forca: 84 },
      { nome: "Ataliba", posicoes: ["PD"], forca: 80 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 79 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 78 },
      { nome: "Mauro", posicoes: ["LD"], forca: 77 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Gilson", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 79 },
      { nome: "China", posicoes: ["MC"], forca: 78 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 77 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 81 },
      { nome: "Evair", posicoes: ["MEI"], forca: 83 },
      { nome: "Catatau", posicoes: ["PD"], forca: 78 },
      { nome: "Neto", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 86 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { nome: "Pita", posicoes: ["MC"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato", posicoes: ["PD"], forca: 82 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { nome: "William", posicoes: ["MEI"], forca: 80 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { nome: "Tita", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },

  // ===== Edição 1981 =====

  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 78 },
      { nome: "De León", posicoes: ["ZAG"], forca: 86 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 80 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 78 },
      { nome: "China", posicoes: ["VOL"], forca: 79 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Tita", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 88 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 81 },
      { nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 80 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 82 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 79 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 80 },
      { nome: "Pita", posicoes: ["MC"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 84 },
      { nome: "Silas", posicoes: ["MEI"], forca: 85 },
      { nome: "Müller", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato", posicoes: ["PD"], forca: 82 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 82 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Ponte Preta",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 78 },
      { nome: "Odirlei", posicoes: ["LD"], forca: 77 },
      { nome: "Polozzi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 80 },
      { nome: "Marco Aurélio", posicoes: ["LE"], forca: 77 },
      { nome: "Zé Mário", posicoes: ["VOL"], forca: 78 },
      { nome: "Dicá", posicoes: ["MC"], forca: 85 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 77 },
      { nome: "Parraga", posicoes: ["MEI"], forca: 76 },
      { nome: "Rui Rei", posicoes: ["PD"], forca: 79 },
      { nome: "Tuta", posicoes: ["PE"], forca: 77 },
      { nome: "Édson", posicoes: ["ATA"], forca: 78 },
      { nome: "Carlos Henrique", posicoes: ["ATA"], forca: 76 },
      { nome: "Sérgio Alves", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Botafogo",
    jogadores: [
      { nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 81 },
      { nome: "Perivaldo", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Emerson Leão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Alemão", posicoes: ["LE"], forca: 80 },
      { nome: "Carlos Alberto Santos", posicoes: ["VOL"], forca: 79 },
      { nome: "Mendonça", posicoes: ["MC"], forca: 82 },
      { nome: "Éverton", posicoes: ["MC"], forca: 78 },
      { nome: "Renato Sá", posicoes: ["MEI"], forca: 79 },
      { nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 75 },
      { nome: "Maurício", posicoes: ["PD"], forca: 82 },
      { nome: "Dé", posicoes: ["PE"], forca: 78 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 80 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1980 =====

  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 84 },
      { nome: "Leandro", posicoes: ["LD"], forca: 89 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior", posicoes: ["LE"], forca: 90 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 86 },
      { nome: "Adílio", posicoes: ["MC"], forca: 86 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 82 },
      { nome: "Zico", posicoes: ["MEI"], forca: 93 },
      { nome: "Tita", posicoes: ["MEI"], forca: 86 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 84 },
      { nome: "Lico", posicoes: ["PE"], forca: 82 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 86 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 82 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 79 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 77 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Doriva", posicoes: ["MC"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 83 },
      { nome: "Marinho", posicoes: ["PD"], forca: 78 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Coritiba",
    jogadores: [
      { nome: "Rafael", posicoes: ["GOL"], forca: 80 },
      { nome: "André", posicoes: ["LD"], forca: 77 },
      { nome: "Vavá", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dida", posicoes: ["LE"], forca: 76 },
      { nome: "Toby", posicoes: ["VOL"], forca: 78 },
      { nome: "Aladim", posicoes: ["MC"], forca: 78 },
      { nome: "Lela", posicoes: ["MC"], forca: 83 },
      { nome: "Pachequinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Édson", posicoes: ["MEI"], forca: 77 },
      { nome: "Marildo", posicoes: ["PD"], forca: 77 },
      { nome: "Tostão", posicoes: ["PE"], forca: 76 },
      { nome: "Índio", posicoes: ["ATA"], forca: 80 },
      { nome: "Marco Aurélio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 80 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 77 },
      { nome: "André Luís", posicoes: ["LE"], forca: 75 },
      { nome: "Batista", posicoes: ["VOL"], forca: 82 },
      { nome: "Falcão", posicoes: ["MC"], forca: 88 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 84 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 82 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 79 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 81 },
      { nome: "Jair", posicoes: ["PE"], forca: 77 },
      { nome: "Bira", posicoes: ["ATA"], forca: 78 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Santos",
    jogadores: [
      { nome: "Rodella", posicoes: ["GOL"], forca: 78 },
      { nome: "Nélson", posicoes: ["LD"], forca: 76 },
      { nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 77 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 76 },
      { nome: "Dema", posicoes: ["VOL"], forca: 78 },
      { nome: "Pita", posicoes: ["MC"], forca: 83 },
      { nome: "Lino", posicoes: ["MC"], forca: 77 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 76 },
      { nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 84 },
      { nome: "Edmar", posicoes: ["PD"], forca: 79 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 80 },
      { nome: "Juary", posicoes: ["ATA"], forca: 81 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 83 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 84 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 83 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 84 },
      { nome: "Geovani", posicoes: ["MC"], forca: 85 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 78 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 82 },
      { nome: "William", posicoes: ["MEI"], forca: 80 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 82 },
      { nome: "Tita", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 },
      { nome: "Romário", posicoes: ["ATA"], forca: 89 }
    ]
  },

  // ===== Edição 1979 =====

  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 84 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 80 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Miguel", posicoes: ["ZAG"], forca: 79 },
      { nome: "Alfinete", posicoes: ["LE"], forca: 78 },
      { nome: "Alcir Portela", posicoes: ["VOL"], forca: 80 },
      { nome: "Zanata", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu", posicoes: ["MEI"], forca: 82 },
      { nome: "Ademir", posicoes: ["MEI"], forca: 79 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Dé", posicoes: ["PE"], forca: 80 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Jair Pereira", posicoes: ["ATA"], forca: 80 },
      { nome: "Luís Carlos", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Coritiba",
    jogadores: [
      { nome: "Jairo", posicoes: ["GOL"], forca: 81 },
      { nome: "Hermes", posicoes: ["LD"], forca: 77 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Cláudio Marques", posicoes: ["ZAG"], forca: 77 },
      { nome: "Nilo", posicoes: ["LE"], forca: 77 },
      { nome: "Toby", posicoes: ["VOL"], forca: 78 },
      { nome: "Krüger", posicoes: ["MC"], forca: 83 },
      { nome: "Aladim", posicoes: ["MC"], forca: 78 },
      { nome: "Paquito", posicoes: ["MEI"], forca: 77 },
      { nome: "Fedato", posicoes: ["MEI"], forca: 76 },
      { nome: "Zé Roberto", posicoes: ["PD"], forca: 78 },
      { nome: "Dito", posicoes: ["PE"], forca: 76 },
      { nome: "Duilio Dias", posicoes: ["ATA"], forca: 78 },
      { nome: "Dirceu Krüger", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { nome: "Lance", posicoes: ["PE"], forca: 78 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Guarani",
    jogadores: [
      { nome: "Neneca", posicoes: ["GOL"], forca: 82 },
      { nome: "Mauro", posicoes: ["LD"], forca: 78 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 78 },
      { nome: "Alfredo", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 80 },
      { nome: "Zenon", posicoes: ["MC"], forca: 86 },
      { nome: "Renato", posicoes: ["MC"], forca: 82 },
      { nome: "Bozó", posicoes: ["MEI"], forca: 81 },
      { nome: "Capitão", posicoes: ["PD"], forca: 80 },
      { nome: "Manguinha", posicoes: ["PE"], forca: 78 },
      { nome: "Careca", posicoes: ["ATA"], forca: 82 },
      { nome: "Orlando", posicoes: ["ATA"], forca: 78 },
      { nome: "Theodoro", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1978 =====

  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Guarani",
    jogadores: [
      { nome: "Neneca", posicoes: ["GOL"], forca: 82 },
      { nome: "Mauro", posicoes: ["LD"], forca: 78 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 78 },
      { nome: "Alfredo", posicoes: ["LE"], forca: 76 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 80 },
      { nome: "Zenon", posicoes: ["MC"], forca: 86 },
      { nome: "Renato", posicoes: ["MC"], forca: 82 },
      { nome: "Bozó", posicoes: ["MEI"], forca: 81 },
      { nome: "Capitão", posicoes: ["PD"], forca: 80 },
      { nome: "Manguinha", posicoes: ["PE"], forca: 78 },
      { nome: "Careca", posicoes: ["ATA"], forca: 82 },
      { nome: "Orlando", posicoes: ["ATA"], forca: 78 },
      { nome: "Theodoro", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 84 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 80 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Miguel", posicoes: ["ZAG"], forca: 79 },
      { nome: "Alfinete", posicoes: ["LE"], forca: 78 },
      { nome: "Alcir Portela", posicoes: ["VOL"], forca: 80 },
      { nome: "Zanata", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu", posicoes: ["MEI"], forca: 82 },
      { nome: "Ademir", posicoes: ["MEI"], forca: 79 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Dé", posicoes: ["PE"], forca: 80 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Jair Pereira", posicoes: ["ATA"], forca: 80 },
      { nome: "Luís Carlos", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { nome: "Lola", posicoes: ["PD"], forca: 77 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 80 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 79 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 78 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 77 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 78 },
      { nome: "Zanata", posicoes: ["MC"], forca: 79 },
      { nome: "Charles", posicoes: ["MC"], forca: 81 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 78 },
      { nome: "Marquinhos", posicoes: ["PE"], forca: 79 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 80 },
      { nome: "Naldinho", posicoes: ["ATA"], forca: 77 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 1977 =====

  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { nome: "Lola", posicoes: ["PD"], forca: 77 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Operário-MS",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 79 },
      { nome: "Paulinho", posicoes: ["LD"], forca: 74 },
      { nome: "Celso", posicoes: ["ZAG"], forca: 75 },
      { nome: "Benê", posicoes: ["ZAG"], forca: 74 },
      { nome: "Edson", posicoes: ["LE"], forca: 73 },
      { nome: "Mauro", posicoes: ["VOL"], forca: 75 },
      { nome: "Jair", posicoes: ["MC"], forca: 75 },
      { nome: "Carlos Alberto", posicoes: ["MC"], forca: 74 },
      { nome: "Humberto Ramos", posicoes: ["MEI"], forca: 77 },
      { nome: "Peri", posicoes: ["PD"], forca: 74 },
      { nome: "Jorginho", posicoes: ["PE"], forca: 74 },
      { nome: "Tostão", posicoes: ["ATA"], forca: 75 },
      { nome: "Lima", posicoes: ["ATA"], forca: 74 },
      { nome: "Gil", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Londrina",
    jogadores: [
      { nome: "Neneca", posicoes: ["GOL"], forca: 77 },
      { nome: "Brandão", posicoes: ["LD"], forca: 74 },
      { nome: "Carlos Alberto Garcia", posicoes: ["ZAG"], forca: 78 },
      { nome: "Dirceu", posicoes: ["ZAG"], forca: 74 },
      { nome: "Nelson", posicoes: ["LE"], forca: 73 },
      { nome: "Marinho", posicoes: ["VOL"], forca: 75 },
      { nome: "Paulo César", posicoes: ["MC"], forca: 74 },
      { nome: "Jorge Nunes", posicoes: ["MC"], forca: 74 },
      { nome: "Carlos Alberto Seixas", posicoes: ["MEI"], forca: 76 },
      { nome: "Paulinho", posicoes: ["PD"], forca: 74 },
      { nome: "Lico", posicoes: ["PE"], forca: 75 },
      { nome: "Brandãozinho", posicoes: ["ATA"], forca: 75 },
      { nome: "Zé Roberto", posicoes: ["ATA"], forca: 74 },
      { nome: "Nivaldo", posicoes: ["ATA"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { nome: "Lance", posicoes: ["PE"], forca: 78 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },

  // ===== Edição 1976 =====

  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { nome: "Lance", posicoes: ["PE"], forca: 78 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { nome: "Lola", posicoes: ["PD"], forca: 77 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 83 },
      { nome: "Toninho", posicoes: ["LD"], forca: 80 },
      { nome: "Edinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Silveira", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rodrigues Neto", posicoes: ["LE"], forca: 83 },
      { nome: "Kléber", posicoes: ["VOL"], forca: 79 },
      { nome: "Pintinho", posicoes: ["MC"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 84 },
      { nome: "Rivelino", posicoes: ["MEI"], forca: 91 },
      { nome: "Paulo César Caju", posicoes: ["MEI"], forca: 86 },
      { nome: "Gil", posicoes: ["PD"], forca: 82 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 81 },
      { nome: "Doval", posicoes: ["ATA"], forca: 82 },
      { nome: "Manfrini", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Grêmio",
    jogadores: [
      { nome: "Eurico Lara", posicoes: ["GOL"], forca: 74 },
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 78 },
      { nome: "Everaldo", posicoes: ["LD"], forca: 82 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 82 },
      { nome: "Orlando Lelé", posicoes: ["LE"], forca: 77 },
      { nome: "China", posicoes: ["VOL"], forca: 78 },
      { nome: "Iúra", posicoes: ["MC"], forca: 77 },
      { nome: "Tarciso", posicoes: ["MEI"], forca: 81 },
      { nome: "Tadeu Ricci", posicoes: ["MEI"], forca: 77 },
      { nome: "Jair", posicoes: ["PD"], forca: 78 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 82 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 80 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1975 =====

  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { nome: "Natal", posicoes: ["PE"], forca: 81 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 83 },
      { nome: "Toninho", posicoes: ["LD"], forca: 80 },
      { nome: "Edinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Silveira", posicoes: ["ZAG"], forca: 80 },
      { nome: "Rodrigues Neto", posicoes: ["LE"], forca: 83 },
      { nome: "Kléber", posicoes: ["VOL"], forca: 79 },
      { nome: "Pintinho", posicoes: ["MC"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 84 },
      { nome: "Rivelino", posicoes: ["MEI"], forca: 91 },
      { nome: "Paulo César Caju", posicoes: ["MEI"], forca: 86 },
      { nome: "Gil", posicoes: ["PD"], forca: 82 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 81 },
      { nome: "Doval", posicoes: ["ATA"], forca: 82 },
      { nome: "Manfrini", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Santa Cruz",
    jogadores: [
      { nome: "Gilberto", posicoes: ["GOL"], forca: 78 },
      { nome: "Nena", posicoes: ["LD"], forca: 76 },
      { nome: "Pedrinho", posicoes: ["ZAG"], forca: 76 },
      { nome: "Luciano Veloso", posicoes: ["ZAG"], forca: 77 },
      { nome: "Ramon", posicoes: ["LE"], forca: 81 },
      { nome: "Zé Mário", posicoes: ["VOL"], forca: 77 },
      { nome: "Givanildo", posicoes: ["MC"], forca: 82 },
      { nome: "Paulo César", posicoes: ["MC"], forca: 78 },
      { nome: "Betinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Nunes", posicoes: ["PD"], forca: 79 },
      { nome: "Zé do Carmo", posicoes: ["PE"], forca: 76 },
      { nome: "Fumanchu", posicoes: ["ATA"], forca: 78 },
      { nome: "Mazinho Loyola", posicoes: ["ATA"], forca: 76 },
      { nome: "Dario", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },

  // ===== Edição 1974 =====

  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 84 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 80 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Miguel", posicoes: ["ZAG"], forca: 79 },
      { nome: "Alfinete", posicoes: ["LE"], forca: 78 },
      { nome: "Alcir Portela", posicoes: ["VOL"], forca: 80 },
      { nome: "Zanata", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu", posicoes: ["MEI"], forca: 82 },
      { nome: "Ademir", posicoes: ["MEI"], forca: 79 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Dé", posicoes: ["PE"], forca: 80 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Jair Pereira", posicoes: ["ATA"], forca: 80 },
      { nome: "Luís Carlos", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { nome: "Natal", posicoes: ["PE"], forca: 81 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Santos",
    jogadores: [
      { nome: "Cejas", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 85 },
      { nome: "Vicente", posicoes: ["ZAG"], forca: 78 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 77 },
      { nome: "Léo Oliveira", posicoes: ["VOL"], forca: 77 },
      { nome: "Clodoaldo", posicoes: ["MC"], forca: 84 },
      { nome: "Brecha", posicoes: ["MC"], forca: 78 },
      { nome: "Edu", posicoes: ["MEI"], forca: 82 },
      { nome: "Pita", posicoes: ["MEI"], forca: 82 },
      { nome: "Mazinho", posicoes: ["PD"], forca: 79 },
      { nome: "Pepe", posicoes: ["PE"], forca: 82 },
      { nome: "Pelé", posicoes: ["ATA"], forca: 91 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { nome: "Lance", posicoes: ["PE"], forca: 78 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1973 =====

  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { nome: "Natal", posicoes: ["PE"], forca: 81 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Santos",
    jogadores: [
      { nome: "Cejas", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 85 },
      { nome: "Vicente", posicoes: ["ZAG"], forca: 78 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 77 },
      { nome: "Léo Oliveira", posicoes: ["VOL"], forca: 77 },
      { nome: "Clodoaldo", posicoes: ["MC"], forca: 84 },
      { nome: "Brecha", posicoes: ["MC"], forca: 78 },
      { nome: "Edu", posicoes: ["MEI"], forca: 82 },
      { nome: "Pita", posicoes: ["MEI"], forca: 82 },
      { nome: "Mazinho", posicoes: ["PD"], forca: 79 },
      { nome: "Pepe", posicoes: ["PE"], forca: 82 },
      { nome: "Pelé", posicoes: ["ATA"], forca: 91 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { nome: "Lola", posicoes: ["PD"], forca: 77 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },

  // ===== Edição 1972 =====

  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 82 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 84 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 85 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 80 },
      { nome: "Ruço", posicoes: ["MC"], forca: 78 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 82 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 83 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { nome: "Lance", posicoes: ["PE"], forca: 78 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 80 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 86 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 86 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 79 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 88 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 89 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { nome: "Natal", posicoes: ["PE"], forca: 81 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 82 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 84 }
    ]
  },

  // ===== Edição 1971 =====

  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 83 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 82 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 80 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 86 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 79 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 84 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 80 },
      { nome: "Lola", posicoes: ["PD"], forca: 77 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 86 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 88 },
      { nome: "Dario", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 84 },
      { nome: "Forlán", posicoes: ["LD"], forca: 81 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 80 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 80 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 81 },
      { nome: "Chicão", posicoes: ["MC"], forca: 83 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 88 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 78 },
      { nome: "Terto", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 78 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 83 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 86 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 80 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 83 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 78 },
      { nome: "Moreira", posicoes: ["LE"], forca: 77 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 83 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 83 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 87 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 80 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 79 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 87 },
      { nome: "Eurico", posicoes: ["LD"], forca: 79 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Zeca", posicoes: ["LE"], forca: 78 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 86 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 91 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 82 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 84 },
      { nome: "Nei", posicoes: ["PD"], forca: 80 },
      { nome: "Fedato", posicoes: ["PE"], forca: 78 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 86 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Santos",
    jogadores: [
      { nome: "Cejas", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 85 },
      { nome: "Vicente", posicoes: ["ZAG"], forca: 78 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 77 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 77 },
      { nome: "Léo Oliveira", posicoes: ["VOL"], forca: 77 },
      { nome: "Clodoaldo", posicoes: ["MC"], forca: 84 },
      { nome: "Brecha", posicoes: ["MC"], forca: 78 },
      { nome: "Edu", posicoes: ["MEI"], forca: 82 },
      { nome: "Pita", posicoes: ["MEI"], forca: 82 },
      { nome: "Mazinho", posicoes: ["PD"], forca: 79 },
      { nome: "Pepe", posicoes: ["PE"], forca: 82 },
      { nome: "Pelé", posicoes: ["ATA"], forca: 91 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 83 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 85 },
      { nome: "Valdir", posicoes: ["LD"], forca: 78 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 90 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 79 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 81 },
      { nome: "Falcão", posicoes: ["MC"], forca: 90 },
      { nome: "Batista", posicoes: ["MC"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 85 },
      { nome: "Lula", posicoes: ["PE"], forca: 80 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 82 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1970 =====

  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { nome: "Neco", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Ortiz", posicoes: ["GOL"], forca: 81 },
      { nome: "Hélio", posicoes: ["GOL"], forca: 72 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 87 },
      { nome: "Vantuir", posicoes: ["ZAG"], forca: 80 },
      { nome: "Grapete", posicoes: ["ZAG"], forca: 79 },
      { nome: "Oldair", posicoes: ["LE"], forca: 78 },
      { nome: "Humberto Ramos", posicoes: ["VOL"], forca: 82 },
      { nome: "Vanderlei Paiva", posicoes: ["MC"], forca: 80 },
      { nome: "Tião", posicoes: ["VOL"], forca: 79 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 86 },
      { nome: "Dadá Maravilha", posicoes: ["ATA"], forca: 88 },
      { nome: "Ronaldo", posicoes: ["PE"], forca: 82 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 80 },
      { nome: "Buião", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1969 =====

  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { nome: "Neco", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ado", posicoes: ["GOL"], forca: 80 },
      { nome: "Diogo", posicoes: ["GOL"], forca: 73 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 86 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ditão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 83 },
      { nome: "Tião", posicoes: ["VOL"], forca: 80 },
      { nome: "Dirceu Alves", posicoes: ["MC"], forca: 81 },
      { nome: "Eduardo", posicoes: ["MC"], forca: 79 },
      { nome: "Rivellino", posicoes: ["MEI"], forca: 92 },
      { nome: "Paulo Borges", posicoes: ["PD"], forca: 82 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 79 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 83 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1968 =====

  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { nome: "Neco", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ado", posicoes: ["GOL"], forca: 80 },
      { nome: "Diogo", posicoes: ["GOL"], forca: 73 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 86 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ditão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 83 },
      { nome: "Tião", posicoes: ["VOL"], forca: 80 },
      { nome: "Dirceu Alves", posicoes: ["MC"], forca: 81 },
      { nome: "Eduardo", posicoes: ["MC"], forca: 79 },
      { nome: "Rivellino", posicoes: ["MEI"], forca: 92 },
      { nome: "Paulo Borges", posicoes: ["PD"], forca: 82 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 79 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 83 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },

  // ===== Edição 1967 =====

  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { nome: "Gena", posicoes: ["LD"], forca: 77 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { nome: "Nado", posicoes: ["MC"], forca: 79 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { nome: "Neco", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Internacional",
    jogadores: [
      { nome: "Gainete", posicoes: ["GOL"], forca: 82 },
      { nome: "Schneider", posicoes: ["GOL"], forca: 72 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pontes", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 78 },
      { nome: "Falcão", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Dorinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 87 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Claudiomiro", posicoes: ["ATA"], forca: 83 },
      { nome: "Escurinho", posicoes: ["PE"], forca: 81 },
      { nome: "Bráulio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ado", posicoes: ["GOL"], forca: 80 },
      { nome: "Diogo", posicoes: ["GOL"], forca: 73 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 86 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ditão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 83 },
      { nome: "Tião", posicoes: ["VOL"], forca: 80 },
      { nome: "Dirceu Alves", posicoes: ["MC"], forca: 81 },
      { nome: "Eduardo", posicoes: ["MC"], forca: 79 },
      { nome: "Rivellino", posicoes: ["MEI"], forca: 92 },
      { nome: "Paulo Borges", posicoes: ["PD"], forca: 82 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 79 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 83 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1966 =====

  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 86 },
      { nome: "Natal", posicoes: ["GOL"], forca: 73 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 77 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 84 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 87 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 82 },
      { nome: "Neco", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 90 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 95 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 80 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { nome: "Gena", posicoes: ["LD"], forca: 77 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { nome: "Nado", posicoes: ["MC"], forca: 79 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1965 =====

  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { nome: "Gena", posicoes: ["LD"], forca: 77 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { nome: "Nado", posicoes: ["MC"], forca: 79 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 1964 =====

  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Flamengo",
    jogadores: [
      { nome: "Ubirajara", posicoes: ["GOL"], forca: 79 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Rodrigues Neto", posicoes: ["LD"], forca: 80 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 84 },
      { nome: "Onça", posicoes: ["ZAG"], forca: 78 },
      { nome: "Murilo", posicoes: ["LE"], forca: 79 },
      { nome: "Liminha", posicoes: ["VOL"], forca: 78 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 81 },
      { nome: "Franz Hasil", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Carpegiani", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Geraldo Assoviador", posicoes: ["PD"], forca: 79 },
      { nome: "Doval", posicoes: ["ATA"], forca: 84 },
      { nome: "Fio Maravilha", posicoes: ["ATA"], forca: 80 },
      { nome: "Silva Batuta", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1963 =====

  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Deca", posicoes: ["LE"], forca: 77 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { nome: "Léo", posicoes: ["PE"], forca: 79 },
      { nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1962 =====

  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Internacional",
    jogadores: [
      { nome: "Gainete", posicoes: ["GOL"], forca: 82 },
      { nome: "Schneider", posicoes: ["GOL"], forca: 72 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 76 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pontes", posicoes: ["ZAG"], forca: 80 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 78 },
      { nome: "Falcão", posicoes: ["VOL","MC"], forca: 90 },
      { nome: "Dorinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 87 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Claudiomiro", posicoes: ["ATA"], forca: 83 },
      { nome: "Escurinho", posicoes: ["PE"], forca: 81 },
      { nome: "Bráulio", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Deca", posicoes: ["LE"], forca: 77 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { nome: "Léo", posicoes: ["PE"], forca: 79 },
      { nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 78 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 71 },
      { nome: "Gena", posicoes: ["LD"], forca: 77 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 79 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 77 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 76 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 78 },
      { nome: "Nado", posicoes: ["MC"], forca: 79 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 76 },
      { nome: "Bita", posicoes: ["ATA"], forca: 86 },
      { nome: "Lala", posicoes: ["ATA"], forca: 82 },
      { nome: "Nino", posicoes: ["ATA"], forca: 81 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 78 },
      { nome: "Beto", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 1961 =====

  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Deca", posicoes: ["LE"], forca: 77 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { nome: "Léo", posicoes: ["PE"], forca: 79 },
      { nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1960 =====

  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 84 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 72 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 83 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 82 },
      { nome: "Assis", posicoes: ["LE"], forca: 80 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 82 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 83 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Lula", posicoes: ["ATA"], forca: 82 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fortaleza",
    jogadores: [
      { nome: "Marcial", posicoes: ["GOL"], forca: 76 },
      { nome: "Mimi", posicoes: ["GOL"], forca: 71 },
      { nome: "Louro", posicoes: ["LD"], forca: 77 },
      { nome: "Clodoaldo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Elzo", posicoes: ["ZAG"], forca: 77 },
      { nome: "Jorge Costa", posicoes: ["LE"], forca: 76 },
      { nome: "Croinha", posicoes: ["VOL"], forca: 79 },
      { nome: "Lucinho", posicoes: ["MC"], forca: 78 },
      { nome: "Mozart", posicoes: ["MEI"], forca: 79 },
      { nome: "Dude", posicoes: ["PD"], forca: 80 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 82 },
      { nome: "Bececê", posicoes: ["ATA"], forca: 79 },
      { nome: "Hamilton", posicoes: ["PE"], forca: 78 },
      { nome: "Chicão", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Deca", posicoes: ["LE"], forca: 77 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { nome: "Léo", posicoes: ["PE"], forca: 79 },
      { nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1959 =====

  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 80 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 71 },
      { nome: "Vicente", posicoes: ["LD"], forca: 79 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Deca", posicoes: ["LE"], forca: 77 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 80 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 81 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 82 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 81 },
      { nome: "Biriba", posicoes: ["PD"], forca: 80 },
      { nome: "Léo", posicoes: ["PE"], forca: 79 },
      { nome: "Marito", posicoes: ["ATA"], forca: 80 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 88 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 74 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 86 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Zito", posicoes: ["VOL"], forca: 88 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 84 },
      { nome: "Dorval", posicoes: ["PD"], forca: 86 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 90 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 97 },
      { nome: "Pepe", posicoes: ["PE"], forca: 89 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 81 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 84 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 83 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 84 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 80 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Juarez", posicoes: ["MC"], forca: 80 },
      { nome: "Loivo", posicoes: ["MC"], forca: 78 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 83 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 86 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 79 },
      { nome: "Volmir", posicoes: ["PE"], forca: 81 },
      { nome: "Yura", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 85 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 82 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 79 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 86 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 82 },
      { nome: "Coronel", posicoes: ["LE"], forca: 80 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 84 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 82 },
      { nome: "Alcir", posicoes: ["MC"], forca: 80 },
      { nome: "Almir", posicoes: ["MEI"], forca: 86 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 88 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 84 },
      { nome: "Sabará", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 84 },
      { nome: "Cao", posicoes: ["GOL"], forca: 72 },
      { nome: "Joel", posicoes: ["LD"], forca: 81 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 90 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 90 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 91 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 84 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 95 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 86 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 84 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 84 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 85 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 89 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 82 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 79 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 85 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 84 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 93 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 83 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 87 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 81 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 85 }
    ]
  }

];
