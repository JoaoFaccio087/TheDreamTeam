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
      { nome: "Agustín Rossi", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Royal", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Danilo", posicoes: ["ZAG","LD"], forca: 85 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 85 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 84 },
      { nome: "Ayrton Lucas", posicoes: ["LE","ME"], forca: 81 },
      { nome: "Alex Sandro", posicoes: ["LE","ZAG"], forca: 80 },
      { nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Jorginho", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Nicolás De La Cruz", posicoes: ["MEI","MC"], forca: 86 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 90 },
      { nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Samuel Lino", posicoes: ["PE","ATA"], forca: 82 },
      { nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 84 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 87 },
      { nome: "Gonzalo Plata", posicoes: ["PD","PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Carlos Miguel", posicoes: ["GOL"], forca: 82 },
      { nome: "Weverton", posicoes: ["GOL"], forca: 80 },
      { nome: "Khellven", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 86 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Joaquín Piquerez", posicoes: ["LE","ME"], forca: 84 },
      { nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Emiliano Martínez", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Raphael Veiga", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Maurício", posicoes: ["MEI","PD"], forca: 82 },
      { nome: "Felipe Anderson", posicoes: ["PE","ATA"], forca: 82 },
      { nome: "Facundo Torres", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Vitor Roque", posicoes: ["ATA"], forca: 84 },
      { nome: "José López", posicoes: ["ATA"], forca: 82 },
      { nome: "Paulinho", posicoes: ["ATA","PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 85 },
      { nome: "Léo Aragão", posicoes: ["GOL"], forca: 71 },
      { nome: "William", posicoes: ["LD","MD"], forca: 82 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jonathan Jesus", posicoes: ["ZAG"], forca: 78 },
      { nome: "Lucas Villalba", posicoes: ["ZAG","LE"], forca: 79 },
      { nome: "Kaiki", posicoes: ["LE"], forca: 77 },
      { nome: "Lucas Romero", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Lucas Silva", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Matheus Henrique", posicoes: ["MC","VOL"], forca: 82 },
      { nome: "Christian", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Matheus Pereira", posicoes: ["MEI","MC"], forca: 88 },
      { nome: "Dudu", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Wanderson", posicoes: ["PE","ATA"], forca: 79 },
      { nome: "Kaio Jorge", posicoes: ["ATA"], forca: 86 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Mirassol",
    jogadores: [
      { nome: "Walter", posicoes: ["GOL"], forca: 80 },
      { nome: "Alex Muralha", posicoes: ["GOL"], forca: 76 },
      { nome: "Lucas Ramon", posicoes: ["LD"], forca: 76 },
      { nome: "João Victor", posicoes: ["ZAG"], forca: 77 },
      { nome: "Luiz Otávio", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jemmes", posicoes: ["ZAG"], forca: 77 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 80 },
      { nome: "Neto Moura", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "José Aldo", posicoes: ["VOL","MC"], forca: 77 },
      { nome: "Danielzinho", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Gabriel", posicoes: ["MEI"], forca: 78 },
      { nome: "Negueba", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Chico", posicoes: ["PE","ME"], forca: 78 },
      { nome: "Edson Carioca", posicoes: ["PD","PE"], forca: 76 },
      { nome: "Iury Castilho", posicoes: ["ATA"], forca: 79 },
      { nome: "Fernandinho", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 84 },
      { nome: "Samuel Xavier", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ignácio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Juan Pablo Freytes", posicoes: ["ZAG","LE"], forca: 78 },
      { nome: "Renê", posicoes: ["LE"], forca: 78 },
      { nome: "Gabriel Fuentes", posicoes: ["LE"], forca: 76 },
      { nome: "André", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Martinelli", posicoes: ["MC","VOL"], forca: 80 },
      { nome: "Hércules", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI","MC"], forca: 84 },
      { nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Keno", posicoes: ["PE","ATA"], forca: 79 },
      { nome: "Germán Cano", posicoes: ["ATA"], forca: 85 },
      { nome: "John Kennedy", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2025,
    clube: "Botafogo",
    jogadores: [
      { nome: "John", posicoes: ["GOL"], forca: 82 },
      { nome: "Gatito Fernández", posicoes: ["GOL"], forca: 73 },
      { nome: "Vitinho", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bastos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Adryelson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alex Telles", posicoes: ["LE"], forca: 82 },
      { nome: "Cuiabano", posicoes: ["LE","ME"], forca: 78 },
      { nome: "Gregore", posicoes: ["VOL"], forca: 80 },
      { nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Danilo Barbosa", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Jefferson Savarino", posicoes: ["MEI","PD"], forca: 82 },
      { nome: "Matheus Martins", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Artur", posicoes: ["PD","ATA"], forca: 80 },
      { nome: "Igor Jesus", posicoes: ["ATA"], forca: 81 },
      { nome: "Arthur Cabral", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 2024 =====

  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Botafogo",
    jogadores: [
      { nome: "John", posicoes: ["GOL"], forca: 82 },
      { nome: "Gatito Fernández", posicoes: ["GOL"], forca: 73 },
      { nome: "Vitinho", posicoes: ["LD","MD"], forca: 78 },
      { nome: "Alexander Barboza", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bastos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Adryelson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alex Telles", posicoes: ["LE"], forca: 82 },
      { nome: "Cuiabano", posicoes: ["LE","ME"], forca: 78 },
      { nome: "Gregore", posicoes: ["VOL"], forca: 80 },
      { nome: "Marlon Freitas", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Thiago Almada", posicoes: ["MEI","MC"], forca: 87 },
      { nome: "Jefferson Savarino", posicoes: ["PD","MEI"], forca: 82 },
      { nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 86 },
      { nome: "Igor Jesus", posicoes: ["ATA"], forca: 81 },
      { nome: "Júnior Santos", posicoes: ["ATA","PE"], forca: 80 },
      { nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 77 },
      { nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 86 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 82 },
      { nome: "Caio Paulista", posicoes: ["LE"], forca: 76 },
      { nome: "Aníbal Moreno", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 80 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 85 },
      { nome: "Maurício", posicoes: ["MEI","PD"], forca: 80 },
      { nome: "Estêvão", posicoes: ["PD"], forca: 84 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 81 },
      { nome: "Rony", posicoes: ["ATA","PE"], forca: 80 },
      { nome: "José López", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Flamengo",
    jogadores: [
      { nome: "Agustín Rossi", posicoes: ["GOL"], forca: 85 },
      { nome: "Guillermo Varela", posicoes: ["LD"], forca: 79 },
      { nome: "Wesley", posicoes: ["LD"], forca: 78 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 84 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 84 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 82 },
      { nome: "Ayrton Lucas", posicoes: ["LE"], forca: 81 },
      { nome: "Erick Pulgar", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Allan", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Gerson", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Nicolás De La Cruz", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 89 },
      { nome: "Luiz Araújo", posicoes: ["PD","PE"], forca: 81 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 80 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 87 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Fortaleza",
    jogadores: [
      { nome: "João Ricardo", posicoes: ["GOL"], forca: 81 },
      { nome: "Tinga", posicoes: ["LD","MD"], forca: 79 },
      { nome: "Emanuel Brítez", posicoes: ["ZAG"], forca: 80 },
      { nome: "Benjamín Kuscevic", posicoes: ["ZAG"], forca: 80 },
      { nome: "Titi", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bruno Pacheco", posicoes: ["LE"], forca: 78 },
      { nome: "Lucas Sasha", posicoes: ["VOL"], forca: 78 },
      { nome: "Zé Welison", posicoes: ["VOL"], forca: 77 },
      { nome: "Hércules", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Tomás Pochettino", posicoes: ["MEI"], forca: 81 },
      { nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 81 },
      { nome: "Marinho", posicoes: ["PD","PE"], forca: 81 },
      { nome: "Moisés", posicoes: ["PE","ATA"], forca: 80 },
      { nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 79 },
      { nome: "Juan Martín Lucero", posicoes: ["ATA"], forca: 82 },
      { nome: "Renato Kayzer", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "Internacional",
    jogadores: [
      { nome: "Sergio Rochet", posicoes: ["GOL"], forca: 82 },
      { nome: "Fabricio Bustos", posicoes: ["LD"], forca: 78 },
      { nome: "Vitão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 78 },
      { nome: "Robert Renan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Alexandro Bernabei", posicoes: ["LE"], forca: 80 },
      { nome: "Fernando", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Thiago Maia", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Bruno Henrique", posicoes: ["MC"], forca: 79 },
      { nome: "Alan Patrick", posicoes: ["MEI","MC"], forca: 85 },
      { nome: "Wesley", posicoes: ["PE","PD"], forca: 81 },
      { nome: "Wanderson", posicoes: ["PE","PD"], forca: 79 },
      { nome: "Enner Valencia", posicoes: ["ATA"], forca: 84 },
      { nome: "Rafael Borré", posicoes: ["ATA"], forca: 82 },
      { nome: "Lucas Alario", posicoes: ["ATA"], forca: 78 },
      { nome: "Maurício", posicoes: ["MC","MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2024,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rafael", posicoes: ["GOL"], forca: 82 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 78 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alan Franco", posicoes: ["ZAG"], forca: 80 },
      { nome: "Sabino", posicoes: ["ZAG"], forca: 77 },
      { nome: "Welington", posicoes: ["LE"], forca: 79 },
      { nome: "Pablo Maia", posicoes: ["VOL"], forca: 81 },
      { nome: "Alisson", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Luiz Gustavo", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Damián Bobadilla", posicoes: ["MC"], forca: 78 },
      { nome: "Lucas Moura", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Luciano", posicoes: ["ATA","MEI"], forca: 82 },
      { nome: "Ferreira", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Wellington Rato", posicoes: ["PD"], forca: 78 },
      { nome: "Calleri", posicoes: ["ATA"], forca: 84 },
      { nome: "André Silva", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 2023 =====

  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 77 },
      { nome: "Mayke", posicoes: ["LD"], forca: 75 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 86 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 82 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Gabriel Menino", posicoes: ["VOL","MC"], forca: 78 },
      { nome: "Richard Ríos", posicoes: ["MC","VOL"], forca: 79 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 84 },
      { nome: "Artur", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Rony", posicoes: ["ATA","PE"], forca: 81 },
      { nome: "Endrick", posicoes: ["ATA"], forca: 82 },
      { nome: "Breno Lopes", posicoes: ["PE","ATA"], forca: 77 },
      { nome: "José López", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Grêmio",
    jogadores: [
      { nome: "Gabriel Grando", posicoes: ["GOL"], forca: 78 },
      { nome: "João Pedro", posicoes: ["LD"], forca: 79 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 80 },
      { nome: "Fábio", posicoes: ["LD"], forca: 77 },
      { nome: "Mathías Villasanti", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Pepê", posicoes: ["MC"], forca: 79 },
      { nome: "Bitello", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Franco Cristaldo", posicoes: ["MEI"], forca: 81 },
      { nome: "Ferreira", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Everton Galdino", posicoes: ["PE"], forca: 77 },
      { nome: "Luis Suárez", posicoes: ["ATA"], forca: 91 },
      { nome: "João Pedro Galvão", posicoes: ["ATA"], forca: 77 },
      { nome: "Cuiabano", posicoes: ["PE","LE"], forca: 76 },
      { nome: "Carballo", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 82 },
      { nome: "Mariano", posicoes: ["LD"], forca: 77 },
      { nome: "Renzo Saravia", posicoes: ["LD"], forca: 77 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Mauricio Lemos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 82 },
      { nome: "Rodrigo Battaglia", posicoes: ["VOL"], forca: 80 },
      { nome: "Otávio", posicoes: ["VOL"], forca: 79 },
      { nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Edenílson", posicoes: ["MC"], forca: 79 },
      { nome: "Igor Gomes", posicoes: ["MEI"], forca: 78 },
      { nome: "Paulinho", posicoes: ["PD","ATA"], forca: 87 },
      { nome: "Hulk", posicoes: ["ATA","PD"], forca: 87 },
      { nome: "Cristian Pavón", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 78 },
      { nome: "Alan Kardec", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Flamengo",
    jogadores: [
      { nome: "Matheus Cunha", posicoes: ["GOL"], forca: 79 },
      { nome: "Santos", posicoes: ["GOL"], forca: 78 },
      { nome: "Guillermo Varela", posicoes: ["LD"], forca: 78 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 82 },
      { nome: "David Luiz", posicoes: ["ZAG"], forca: 81 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 81 },
      { nome: "Ayrton Lucas", posicoes: ["LE"], forca: 82 },
      { nome: "Erick Pulgar", posicoes: ["VOL"], forca: 81 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 80 },
      { nome: "Gerson", posicoes: ["MC"], forca: 82 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { nome: "Bruno Henrique", posicoes: ["PE"], forca: 85 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 80 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Botafogo",
    jogadores: [
      { nome: "Lucas Perri", posicoes: ["GOL"], forca: 84 },
      { nome: "Leonel Di Plácido", posicoes: ["LD"], forca: 77 },
      { nome: "Adryelson", posicoes: ["ZAG"], forca: 82 },
      { nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 80 },
      { nome: "Marçal", posicoes: ["LE"], forca: 79 },
      { nome: "Tchê Tchê", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Marlon Freitas", posicoes: ["MC"], forca: 80 },
      { nome: "Gabriel Pires", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Eduardo", posicoes: ["MEI"], forca: 82 },
      { nome: "Lucas Fernandes", posicoes: ["MEI"], forca: 78 },
      { nome: "Victor Sá", posicoes: ["PE"], forca: 79 },
      { nome: "Júnior Santos", posicoes: ["PD","ATA"], forca: 80 },
      { nome: "Tiquinho Soares", posicoes: ["ATA"], forca: 87 },
      { nome: "Diego Costa", posicoes: ["ATA"], forca: 79 },
      { nome: "Segovia", posicoes: ["PD"], forca: 75 },
      { nome: "Carlos Alberto", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2023,
    clube: "Red Bull Bragantino",
    jogadores: [
      { nome: "Cleiton", posicoes: ["GOL"], forca: 80 },
      { nome: "Aderlan", posicoes: ["LD"], forca: 77 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Natan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Juninho Capixaba", posicoes: ["LE"], forca: 80 },
      { nome: "Lucas Evangelista", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Matheus Fernandes", posicoes: ["VOL"], forca: 78 },
      { nome: "Jadsom", posicoes: ["MC"], forca: 78 },
      { nome: "Eric Ramires", posicoes: ["MC"], forca: 78 },
      { nome: "Helinho", posicoes: ["PD"], forca: 81 },
      { nome: "Vitinho", posicoes: ["PE"], forca: 79 },
      { nome: "Sorriso", posicoes: ["PE"], forca: 77 },
      { nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 82 },
      { nome: "Thiago Borbas", posicoes: ["ATA"], forca: 79 },
      { nome: "Alerrandro", posicoes: ["ATA"], forca: 78 },
      { nome: "Talisson", posicoes: ["PD"], forca: 76 }
    ]
  },

  // ===== Edição 2022 =====

  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 86 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 81 },
      { nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 87 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 84 },
      { nome: "Danilo", posicoes: ["VOL"], forca: 85 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Gabriel Menino", posicoes: ["MC","LD"], forca: 79 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 87 },
      { nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 86 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 85 },
      { nome: "Rony", posicoes: ["ATA","PD"], forca: 85 },
      { nome: "Rafael Navarro", posicoes: ["ATA"], forca: 78 },
      { nome: "José López", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Internacional",
    jogadores: [
      { nome: "Daniel", posicoes: ["GOL"], forca: 80 },
      { nome: "Fabricio Bustos", posicoes: ["LD"], forca: 79 },
      { nome: "Gabriel Mercado", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vitão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Renê", posicoes: ["LE"], forca: 78 },
      { nome: "Moisés", posicoes: ["LE"], forca: 76 },
      { nome: "Edenílson", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Johnny", posicoes: ["VOL"], forca: 79 },
      { nome: "Alan Patrick", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Carlos de Pena", posicoes: ["MEI","PE"], forca: 80 },
      { nome: "Maurício", posicoes: ["MEI"], forca: 80 },
      { nome: "Wanderson", posicoes: ["PE","PD"], forca: 80 },
      { nome: "Pedro Henrique", posicoes: ["PD"], forca: 81 },
      { nome: "Alemão", posicoes: ["ATA"], forca: 79 },
      { nome: "Taison", posicoes: ["PE","MEI"], forca: 80 },
      { nome: "Liziero", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 82 },
      { nome: "Samuel Xavier", posicoes: ["LD"], forca: 78 },
      { nome: "Nino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Braz", posicoes: ["ZAG"], forca: 77 },
      { nome: "Caio Paulista", posicoes: ["LE","ME"], forca: 78 },
      { nome: "André", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Martinelli", posicoes: ["MC"], forca: 78 },
      { nome: "Nonato", posicoes: ["MC"], forca: 78 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 82 },
      { nome: "Jhon Arias", posicoes: ["PD","PE"], forca: 84 },
      { nome: "Luiz Henrique", posicoes: ["PE","PD"], forca: 82 },
      { nome: "Germán Cano", posicoes: ["ATA"], forca: 89 },
      { nome: "Willian Bigode", posicoes: ["ATA"], forca: 78 },
      { nome: "Yago Felipe", posicoes: ["MC"], forca: 78 },
      { nome: "Nathan", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 86 },
      { nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 81 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { nome: "Lucas Piton", posicoes: ["LE"], forca: 78 },
      { nome: "Du Queiroz", posicoes: ["VOL"], forca: 79 },
      { nome: "Maycon", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Renato Augusto", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Giuliano", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 85 },
      { nome: "Willian", posicoes: ["PE","PD"], forca: 82 },
      { nome: "Yuri Alberto", posicoes: ["ATA"], forca: 82 },
      { nome: "Adson", posicoes: ["PD"], forca: 78 },
      { nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 78 },
      { nome: "Fausto Vera", posicoes: ["VOL"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Flamengo",
    jogadores: [
      { nome: "Santos", posicoes: ["GOL"], forca: 85 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 81 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 82 },
      { nome: "Ayrton Lucas", posicoes: ["LE"], forca: 80 },
      { nome: "David Luiz", posicoes: ["ZAG"], forca: 85 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 82 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 82 },
      { nome: "João Gomes", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Arturo Vidal", posicoes: ["MC"], forca: 86 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 88 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 90 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 86 },
      { nome: "Bruno Henrique", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 89 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 89 },
      { nome: "Diego", posicoes: ["MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2022,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Bento", posicoes: ["GOL"], forca: 84 },
      { nome: "Khellven", posicoes: ["LD"], forca: 78 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 78 },
      { nome: "Abner Vinícius", posicoes: ["LE"], forca: 79 },
      { nome: "Fernandinho", posicoes: ["VOL","MC"], forca: 85 },
      { nome: "Hugo Moura", posicoes: ["VOL"], forca: 77 },
      { nome: "Alex Santana", posicoes: ["MC"], forca: 77 },
      { nome: "David Terans", posicoes: ["MEI"], forca: 78 },
      { nome: "Vitor Bueno", posicoes: ["MEI","MD"], forca: 77 },
      { nome: "Vitinho", posicoes: ["PD"], forca: 78 },
      { nome: "Agustín Canobbio", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Vitor Roque", posicoes: ["ATA"], forca: 81 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 77 },
      { nome: "Matheus Felipe", posicoes: ["ZAG"], forca: 73 },
      { nome: "Léo Cittadini", posicoes: ["MC"], forca: 76 }
    ]
  },

  // ===== Edição 2021 =====

  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 85 },
      { nome: "Mariano", posicoes: ["LD"], forca: 80 },
      { nome: "Guga", posicoes: ["LD"], forca: 77 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nathan Silva", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 80 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 84 },
      { nome: "Jair", posicoes: ["VOL"], forca: 81 },
      { nome: "Allan", posicoes: ["VOL"], forca: 79 },
      { nome: "Matías Zaracho", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Nacho Fernández", posicoes: ["MEI"], forca: 85 },
      { nome: "Hulk", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Keno", posicoes: ["PE"], forca: 81 },
      { nome: "Eduardo Vargas", posicoes: ["ATA","PD"], forca: 80 },
      { nome: "Diego Costa", posicoes: ["ATA"], forca: 82 },
      { nome: "Jefferson Savarino", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { nome: "Maurício Isla", posicoes: ["LD"], forca: 80 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 84 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 82 },
      { nome: "David Luiz", posicoes: ["ZAG"], forca: 85 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 81 },
      { nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 82 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 81 },
      { nome: "Andreas Pereira", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 87 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 87 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 89 },
      { nome: "Renê", posicoes: ["LE"], forca: 76 },
      { nome: "Hugo Souza", posicoes: ["GOL"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 86 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 81 },
      { nome: "Mayke", posicoes: ["LD"], forca: 77 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 87 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Joaquín Piquerez", posicoes: ["LE"], forca: 82 },
      { nome: "Felipe Melo", posicoes: ["VOL","ZAG"], forca: 80 },
      { nome: "Danilo", posicoes: ["VOL"], forca: 82 },
      { nome: "Zé Rafael", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Gabriel Menino", posicoes: ["MC"], forca: 78 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 86 },
      { nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 84 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 85 },
      { nome: "Rony", posicoes: ["ATA","PD"], forca: 84 },
      { nome: "Deyverson", posicoes: ["ATA"], forca: 78 },
      { nome: "Breno Lopes", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Fortaleza",
    jogadores: [
      { nome: "Felipe Alves", posicoes: ["GOL"], forca: 80 },
      { nome: "Tinga", posicoes: ["LD","MD"], forca: 79 },
      { nome: "Marcelo Benevenuto", posicoes: ["ZAG"], forca: 80 },
      { nome: "Titi", posicoes: ["ZAG"], forca: 78 },
      { nome: "Bruno Melo", posicoes: ["LE"], forca: 77 },
      { nome: "Lucas Crispim", posicoes: ["ME","LE"], forca: 79 },
      { nome: "Felipe", posicoes: ["VOL"], forca: 78 },
      { nome: "Ronald", posicoes: ["VOL"], forca: 77 },
      { nome: "Éderson", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Matheus Vargas", posicoes: ["MEI"], forca: 78 },
      { nome: "Yago Pikachu", posicoes: ["PD","MD"], forca: 82 },
      { nome: "David", posicoes: ["PE"], forca: 80 },
      { nome: "Robson", posicoes: ["ATA"], forca: 80 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 78 },
      { nome: "Romarinho", posicoes: ["PD"], forca: 77 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 84 },
      { nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { nome: "João Victor", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 79 },
      { nome: "Lucas Piton", posicoes: ["LE"], forca: 77 },
      { nome: "Gabriel", posicoes: ["VOL"], forca: 78 },
      { nome: "Cantillo", posicoes: ["MC"], forca: 78 },
      { nome: "Du Queiroz", posicoes: ["MC"], forca: 77 },
      { nome: "Renato Augusto", posicoes: ["MEI","MC"], forca: 85 },
      { nome: "Giuliano", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Willian", posicoes: ["PE"], forca: 84 },
      { nome: "Róger Guedes", posicoes: ["PE","ATA"], forca: 85 },
      { nome: "Gustavo Mosquito", posicoes: ["PD"], forca: 80 },
      { nome: "Jô", posicoes: ["ATA"], forca: 78 },
      { nome: "Gabriel Pereira", posicoes: ["PD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2021,
    clube: "Red Bull Bragantino",
    jogadores: [
      { nome: "Cleiton", posicoes: ["GOL"], forca: 80 },
      { nome: "Aderlan", posicoes: ["LD"], forca: 77 },
      { nome: "Fabrício Bruno", posicoes: ["ZAG"], forca: 81 },
      { nome: "Léo Ortiz", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luan Cândido", posicoes: ["LE"], forca: 79 },
      { nome: "Edimar", posicoes: ["LE"], forca: 76 },
      { nome: "Raul", posicoes: ["VOL"], forca: 79 },
      { nome: "Jadsom", posicoes: ["VOL"], forca: 78 },
      { nome: "Eric Ramires", posicoes: ["MC"], forca: 78 },
      { nome: "Lucas Evangelista", posicoes: ["MC"], forca: 80 },
      { nome: "Claudinho", posicoes: ["MEI"], forca: 86 },
      { nome: "Artur", posicoes: ["PD"], forca: 85 },
      { nome: "Helinho", posicoes: ["PD"], forca: 80 },
      { nome: "Ytalo", posicoes: ["ATA"], forca: 82 },
      { nome: "Alerrandro", posicoes: ["ATA"], forca: 78 },
      { nome: "Jan Hurtado", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2020 =====

  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 84 },
      { nome: "Maurício Isla", posicoes: ["LD"], forca: 80 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 79 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 79 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 85 },
      { nome: "Willian Arão", posicoes: ["VOL","ZAG"], forca: 84 },
      { nome: "Gerson", posicoes: ["MC"], forca: 87 },
      { nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 87 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { nome: "Bruno Henrique", posicoes: ["PE","PD"], forca: 87 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 88 },
      { nome: "Pedro", posicoes: ["ATA"], forca: 86 },
      { nome: "Vitinho", posicoes: ["PD","PE"], forca: 79 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Internacional",
    jogadores: [
      { nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 81 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 82 },
      { nome: "Moisés", posicoes: ["LE"], forca: 76 },
      { nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 80 },
      { nome: "Edenílson", posicoes: ["MC"], forca: 85 },
      { nome: "Patrick", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 81 },
      { nome: "Bruno Praxedes", posicoes: ["MEI"], forca: 78 },
      { nome: "Thiago Galhardo", posicoes: ["MEI","ATA"], forca: 86 },
      { nome: "Yuri Alberto", posicoes: ["ATA"], forca: 79 },
      { nome: "Abel Hernández", posicoes: ["ATA"], forca: 78 },
      { nome: "Marcos Guilherme", posicoes: ["PE"], forca: 77 },
      { nome: "Peglow", posicoes: ["PD"], forca: 75 },
      { nome: "Nonato", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 81 },
      { nome: "Guga", posicoes: ["LD"], forca: 78 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 80 },
      { nome: "Júnior Alonso", posicoes: ["ZAG"], forca: 81 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 82 },
      { nome: "Allan", posicoes: ["VOL"], forca: 79 },
      { nome: "Jair", posicoes: ["VOL"], forca: 79 },
      { nome: "Alan Franco", posicoes: ["MC"], forca: 78 },
      { nome: "Nathan", posicoes: ["MEI"], forca: 80 },
      { nome: "Hyoran", posicoes: ["MEI"], forca: 79 },
      { nome: "Jefferson Savarino", posicoes: ["PD"], forca: 82 },
      { nome: "Keno", posicoes: ["PE"], forca: 85 },
      { nome: "Eduardo Vargas", posicoes: ["ATA"], forca: 80 },
      { nome: "Marrony", posicoes: ["ATA"], forca: 78 },
      { nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 79 },
      { nome: "Igor Rabello", posicoes: ["ZAG"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "São Paulo",
    jogadores: [
      { nome: "Tiago Volpi", posicoes: ["GOL"], forca: 82 },
      { nome: "Juanfran", posicoes: ["LD"], forca: 80 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 80 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 82 },
      { nome: "Luan", posicoes: ["VOL"], forca: 80 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 79 },
      { nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 84 },
      { nome: "Gabriel Sara", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Igor Gomes", posicoes: ["MEI"], forca: 80 },
      { nome: "Hernanes", posicoes: ["MEI"], forca: 79 },
      { nome: "Luciano", posicoes: ["ATA","MEI"], forca: 85 },
      { nome: "Brenner", posicoes: ["ATA"], forca: 85 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 78 },
      { nome: "Vitor Bueno", posicoes: ["MEI"], forca: 78 },
      { nome: "Igor Vinícius", posicoes: ["LD"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Fluminense",
    jogadores: [
      { nome: "Muriel", posicoes: ["GOL"], forca: 78 },
      { nome: "Calegari", posicoes: ["LD"], forca: 77 },
      { nome: "Nino", posicoes: ["ZAG"], forca: 81 },
      { nome: "Luccas Claro", posicoes: ["ZAG"], forca: 81 },
      { nome: "Egídio", posicoes: ["LE"], forca: 77 },
      { nome: "Yuri", posicoes: ["VOL"], forca: 77 },
      { nome: "Dodi", posicoes: ["VOL"], forca: 79 },
      { nome: "Hudson", posicoes: ["MC"], forca: 78 },
      { nome: "Nenê", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 80 },
      { nome: "Marcos Paulo", posicoes: ["PE"], forca: 79 },
      { nome: "Wellington Silva", posicoes: ["PE"], forca: 78 },
      { nome: "Fred", posicoes: ["ATA"], forca: 82 },
      { nome: "Evanilson", posicoes: ["ATA"], forca: 81 },
      { nome: "Luiz Henrique", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Caio Paulista", posicoes: ["ME","ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2020,
    clube: "Grêmio",
    jogadores: [
      { nome: "Vanderlei", posicoes: ["GOL"], forca: 80 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 79 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 85 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { nome: "Bruno Cortez", posicoes: ["LE"], forca: 78 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 78 },
      { nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Maicon", posicoes: ["MC"], forca: 81 },
      { nome: "Lucas Silva", posicoes: ["VOL"], forca: 79 },
      { nome: "Jean Pyerre", posicoes: ["MEI"], forca: 81 },
      { nome: "Pepê", posicoes: ["PE"], forca: 84 },
      { nome: "Alisson", posicoes: ["PD"], forca: 78 },
      { nome: "Diego Souza", posicoes: ["ATA"], forca: 84 },
      { nome: "Ferreira", posicoes: ["PE","PD"], forca: 78 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 86 },
      { nome: "Darlan", posicoes: ["MC"], forca: 77 }
    ]
  },

  // ===== Edição 2019 =====

  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 85 },
      { nome: "Rafinha", posicoes: ["LD"], forca: 82 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG"], forca: 84 },
      { nome: "Pablo Marí", posicoes: ["ZAG"], forca: 80 },
      { nome: "Filipe Luís", posicoes: ["LE"], forca: 85 },
      { nome: "Willian Arão", posicoes: ["VOL"], forca: 81 },
      { nome: "Gerson", posicoes: ["MC"], forca: 85 },
      { nome: "Diego", posicoes: ["MEI"], forca: 81 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 86 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI"], forca: 89 },
      { nome: "Bruno Henrique", posicoes: ["PE","ATA"], forca: 91 },
      { nome: "Gabriel Barbosa", posicoes: ["ATA"], forca: 93 },
      { nome: "Vitinho", posicoes: ["PD","PE"], forca: 78 },
      { nome: "Lincoln", posicoes: ["ATA"], forca: 71 },
      { nome: "Renê", posicoes: ["LE"], forca: 76 },
      { nome: "Cuéllar", posicoes: ["VOL"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Santos",
    jogadores: [
      { nome: "Everson", posicoes: ["GOL"], forca: 82 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 80 },
      { nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jorge", posicoes: ["LE"], forca: 84 },
      { nome: "Felipe Jonatan", posicoes: ["LE"], forca: 79 },
      { nome: "Alison", posicoes: ["VOL"], forca: 79 },
      { nome: "Diego Pituca", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Carlos Sánchez", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Jean Mota", posicoes: ["MEI","MC"], forca: 81 },
      { nome: "Soteldo", posicoes: ["PE","PD"], forca: 85 },
      { nome: "Marinho", posicoes: ["PD","ATA"], forca: 82 },
      { nome: "Eduardo Sasha", posicoes: ["ATA"], forca: 82 },
      { nome: "Derlis González", posicoes: ["PD"], forca: 79 },
      { nome: "Fernando Uribe", posicoes: ["ATA"], forca: 77 },
      { nome: "Tailson", posicoes: ["PE"], forca: 73 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 85 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { nome: "Gustavo Gómez", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 80 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 79 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 78 },
      { nome: "Victor Luis", posicoes: ["LE"], forca: 77 },
      { nome: "Felipe Melo", posicoes: ["VOL"], forca: 82 },
      { nome: "Bruno Henrique", posicoes: ["MC"], forca: 82 },
      { nome: "Gustavo Scarpa", posicoes: ["MEI","PE"], forca: 81 },
      { nome: "Raphael Veiga", posicoes: ["MEI"], forca: 78 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 87 },
      { nome: "Deyverson", posicoes: ["ATA"], forca: 79 },
      { nome: "Miguel Borja", posicoes: ["ATA"], forca: 78 },
      { nome: "Willian", posicoes: ["ATA","PD"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Grêmio",
    jogadores: [
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 78 },
      { nome: "Leonardo Gomes", posicoes: ["LD"], forca: 77 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 85 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { nome: "Cortez", posicoes: ["LE"], forca: 79 },
      { nome: "Maicon", posicoes: ["VOL"], forca: 82 },
      { nome: "Matheus Henrique", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Michel", posicoes: ["MC"], forca: 76 },
      { nome: "Jean Pyerre", posicoes: ["MEI"], forca: 78 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 87 },
      { nome: "Alisson", posicoes: ["PD"], forca: 78 },
      { nome: "André", posicoes: ["ATA"], forca: 75 },
      { nome: "Pepê", posicoes: ["PD","PE"], forca: 76 },
      { nome: "Bressan", posicoes: ["ZAG"], forca: 76 },
      { nome: "Thaciano", posicoes: ["MEI"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Santos", posicoes: ["GOL"], forca: 84 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 79 },
      { nome: "Madson", posicoes: ["LD"], forca: 77 },
      { nome: "Léo Pereira", posicoes: ["ZAG"], forca: 82 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { nome: "Márcio Azevedo", posicoes: ["LE"], forca: 77 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 79 },
      { nome: "Bruno Guimarães", posicoes: ["VOL","MC"], forca: 86 },
      { nome: "Lucho González", posicoes: ["MC"], forca: 79 },
      { nome: "Léo Cittadini", posicoes: ["MEI"], forca: 78 },
      { nome: "Nikão", posicoes: ["PD","MEI"], forca: 82 },
      { nome: "Marcelo Cirino", posicoes: ["PD","ATA"], forca: 80 },
      { nome: "Rony", posicoes: ["PE","ATA"], forca: 84 },
      { nome: "Marco Ruben", posicoes: ["ATA"], forca: 80 },
      { nome: "Camacho", posicoes: ["MC"], forca: 77 },
      { nome: "Adriano", posicoes: ["LE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2019,
    clube: "São Paulo",
    jogadores: [
      { nome: "Tiago Volpi", posicoes: ["GOL"], forca: 82 },
      { nome: "Juanfran", posicoes: ["LD"], forca: 80 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 80 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 81 },
      { nome: "Liziero", posicoes: ["VOL"], forca: 78 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 79 },
      { nome: "Daniel Alves", posicoes: ["MC","LD"], forca: 84 },
      { nome: "Hernanes", posicoes: ["MEI"], forca: 80 },
      { nome: "Igor Gomes", posicoes: ["MEI"], forca: 79 },
      { nome: "Antony", posicoes: ["PD"], forca: 82 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 79 },
      { nome: "Alexandre Pato", posicoes: ["ATA"], forca: 80 },
      { nome: "Vitor Bueno", posicoes: ["MEI"], forca: 78 },
      { nome: "Everton", posicoes: ["PE"], forca: 78 },
      { nome: "Toró", posicoes: ["PD"], forca: 75 }
    ]
  },

  // ===== Edição 2018 =====

  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 77 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 80 },
      { nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 78 },
      { nome: "Luan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 76 },
      { nome: "Felipe Melo", posicoes: ["VOL"], forca: 81 },
      { nome: "Thiago Santos", posicoes: ["VOL"], forca: 76 },
      { nome: "Bruno Henrique", posicoes: ["MC"], forca: 77 },
      { nome: "Moisés", posicoes: ["MC","MEI"], forca: 77 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 80 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 85 },
      { nome: "Willian", posicoes: ["ATA","PD"], forca: 80 },
      { nome: "Miguel Borja", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { nome: "Pará", posicoes: ["LD"], forca: 77 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Léo Duarte", posicoes: ["ZAG"], forca: 79 },
      { nome: "Renê", posicoes: ["LE"], forca: 78 },
      { nome: "Miguel Trauco", posicoes: ["LE"], forca: 77 },
      { nome: "Cuéllar", posicoes: ["VOL"], forca: 82 },
      { nome: "Lucas Paquetá", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Diego", posicoes: ["MEI"], forca: 84 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 84 },
      { nome: "Vitinho", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Marlos Moreno", posicoes: ["PE"], forca: 77 },
      { nome: "Henrique Dourado", posicoes: ["ATA"], forca: 79 },
      { nome: "Fernando Uribe", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Internacional",
    jogadores: [
      { nome: "Marcelo Lomba", posicoes: ["GOL"], forca: 82 },
      { nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 77 },
      { nome: "Zeca", posicoes: ["LD"], forca: 78 },
      { nome: "Fabiano", posicoes: ["LD"], forca: 76 },
      { nome: "Rodrigo Moledo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Víctor Cuesta", posicoes: ["ZAG"], forca: 82 },
      { nome: "Iago", posicoes: ["LE"], forca: 79 },
      { nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 84 },
      { nome: "Edenílson", posicoes: ["MC"], forca: 84 },
      { nome: "Patrick", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 82 },
      { nome: "Nico López", posicoes: ["PD","PE"], forca: 82 },
      { nome: "William Pottker", posicoes: ["PD"], forca: 79 },
      { nome: "Leandro Damião", posicoes: ["ATA"], forca: 81 },
      { nome: "Rossi", posicoes: ["PD","PE"], forca: 77 },
      { nome: "Jonatan Álvez", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 82 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 76 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 84 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Cortez", posicoes: ["LE"], forca: 77 },
      { nome: "Maicon", posicoes: ["VOL"], forca: 80 },
      { nome: "Michel", posicoes: ["VOL"], forca: 75 },
      { nome: "Jailson", posicoes: ["VOL"], forca: 75 },
      { nome: "Ramiro", posicoes: ["MC","MD"], forca: 77 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Everton", posicoes: ["PE","ATA"], forca: 82 },
      { nome: "Alisson", posicoes: ["PD"], forca: 76 },
      { nome: "André", posicoes: ["ATA"], forca: 76 },
      { nome: "Jael", posicoes: ["ATA"], forca: 73 },
      { nome: "Bressan", posicoes: ["ZAG"], forca: 75 },
      { nome: "Thaciano", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "São Paulo",
    jogadores: [
      { nome: "Sidão", posicoes: ["GOL"], forca: 78 },
      { nome: "Jean", posicoes: ["GOL"], forca: 76 },
      { nome: "Bruno Peres", posicoes: ["LD"], forca: 78 },
      { nome: "Éder Militão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Arboleda", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Alves", posicoes: ["ZAG"], forca: 79 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 81 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 80 },
      { nome: "Jucilei", posicoes: ["VOL"], forca: 79 },
      { nome: "Liziero", posicoes: ["MC"], forca: 78 },
      { nome: "Nenê", posicoes: ["MEI"], forca: 84 },
      { nome: "Diego Souza", posicoes: ["ATA","MEI"], forca: 81 },
      { nome: "Everton", posicoes: ["PE"], forca: 81 },
      { nome: "Joao Rojas", posicoes: ["PD"], forca: 80 },
      { nome: "Santiago Tréllez", posicoes: ["ATA"], forca: 76 },
      { nome: "Brenner", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2018,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 82 },
      { nome: "Patric", posicoes: ["LD"], forca: 77 },
      { nome: "Emerson", posicoes: ["LD"], forca: 78 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gabriel", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 80 },
      { nome: "Adilson", posicoes: ["VOL"], forca: 79 },
      { nome: "Elias", posicoes: ["MC"], forca: 80 },
      { nome: "Cazares", posicoes: ["MEI"], forca: 82 },
      { nome: "Luan", posicoes: ["PD"], forca: 80 },
      { nome: "Chará", posicoes: ["PE"], forca: 79 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 84 },
      { nome: "Tomás Andrade", posicoes: ["MEI"], forca: 76 },
      { nome: "Róger Guedes", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Otero", posicoes: ["MEI","PE"], forca: 79 },
      { nome: "Alerrandro", posicoes: ["ATA"], forca: 75 }
    ]
  },

  // ===== Edição 2017 =====

  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 86 },
      { nome: "Fagner", posicoes: ["LD"], forca: 84 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { nome: "Pablo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Pedro Henrique", posicoes: ["ZAG"], forca: 77 },
      { nome: "Guilherme Arana", posicoes: ["LE"], forca: 84 },
      { nome: "Gabriel", posicoes: ["VOL"], forca: 81 },
      { nome: "Maycon", posicoes: ["MC"], forca: 81 },
      { nome: "Rodriguinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 85 },
      { nome: "Ángel Romero", posicoes: ["PD"], forca: 82 },
      { nome: "Clayson", posicoes: ["PE"], forca: 79 },
      { nome: "Jô", posicoes: ["ATA"], forca: 88 },
      { nome: "Kazim", posicoes: ["ATA"], forca: 75 },
      { nome: "Marquinhos Gabriel", posicoes: ["MEI"], forca: 78 },
      { nome: "Camacho", posicoes: ["MC"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 81 },
      { nome: "Jailson", posicoes: ["GOL"], forca: 80 },
      { nome: "Jean", posicoes: ["LD"], forca: 79 },
      { nome: "Mayke", posicoes: ["LD"], forca: 76 },
      { nome: "Yerry Mina", posicoes: ["ZAG"], forca: 85 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 79 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 77 },
      { nome: "Egídio", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 82 },
      { nome: "Felipe Melo", posicoes: ["VOL"], forca: 82 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 80 },
      { nome: "Moisés", posicoes: ["MC","MEI"], forca: 78 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 86 },
      { nome: "Willian", posicoes: ["ATA","PD"], forca: 81 },
      { nome: "Miguel Borja", posicoes: ["ATA"], forca: 80 },
      { nome: "Keno", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Santos",
    jogadores: [
      { nome: "Vanderlei", posicoes: ["GOL"], forca: 85 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 81 },
      { nome: "Lucas Veríssimo", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Braz", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 79 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Renato", posicoes: ["VOL"], forca: 80 },
      { nome: "Alison", posicoes: ["VOL"], forca: 78 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 81 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 85 },
      { nome: "Bruno Henrique", posicoes: ["PE"], forca: 85 },
      { nome: "Copete", posicoes: ["PE"], forca: 79 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 84 },
      { nome: "Kayke", posicoes: ["ATA"], forca: 76 },
      { nome: "Rodrygo", posicoes: ["PD"], forca: 75 },
      { nome: "Jean Mota", posicoes: ["MEI"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 87 },
      { nome: "Edílson", posicoes: ["LD"], forca: 79 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 86 },
      { nome: "Walter Kannemann", posicoes: ["ZAG"], forca: 84 },
      { nome: "Bruno Cortez", posicoes: ["LE"], forca: 80 },
      { nome: "Maicon", posicoes: ["VOL"], forca: 84 },
      { nome: "Arthur", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Michel", posicoes: ["VOL"], forca: 77 },
      { nome: "Ramiro", posicoes: ["MC","MD"], forca: 80 },
      { nome: "Cícero", posicoes: ["MEI"], forca: 77 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Everton Cebolinha", posicoes: ["PE"], forca: 81 },
      { nome: "Fernandinho", posicoes: ["PD"], forca: 76 },
      { nome: "Lucas Barrios", posicoes: ["ATA"], forca: 79 },
      { nome: "Pedro Rocha", posicoes: ["PD","ATA"], forca: 77 },
      { nome: "Bressan", posicoes: ["ZAG"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 85 },
      { nome: "Ezequiel", posicoes: ["LD"], forca: 77 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Murilo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 79 },
      { nome: "Diogo Barbosa", posicoes: ["LE"], forca: 81 },
      { nome: "Henrique", posicoes: ["VOL"], forca: 82 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 79 },
      { nome: "Lucas Romero", posicoes: ["VOL"], forca: 79 },
      { nome: "Robinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 85 },
      { nome: "Giorgian de Arrascaeta", posicoes: ["MEI","PE"], forca: 86 },
      { nome: "Alisson", posicoes: ["PD"], forca: 79 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 81 },
      { nome: "Sassá", posicoes: ["ATA"], forca: 77 },
      { nome: "Ramón Ábila", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2017,
    clube: "Flamengo",
    jogadores: [
      { nome: "Diego Alves", posicoes: ["GOL"], forca: 82 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { nome: "Pará", posicoes: ["LD"], forca: 77 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Miguel Trauco", posicoes: ["LE"], forca: 79 },
      { nome: "Renê", posicoes: ["LE"], forca: 77 },
      { nome: "Márcio Araújo", posicoes: ["VOL"], forca: 78 },
      { nome: "Willian Arão", posicoes: ["VOL"], forca: 81 },
      { nome: "Diego", posicoes: ["MEI"], forca: 85 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 85 },
      { nome: "Éverton", posicoes: ["PE"], forca: 80 },
      { nome: "Orlando Berrío", posicoes: ["PD"], forca: 79 },
      { nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 85 },
      { nome: "Vinícius Júnior", posicoes: ["PE"], forca: 77 }
    ]
  },

  // ===== Edição 2016 =====

  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 84 },
      { nome: "Jailson", posicoes: ["GOL"], forca: 84 },
      { nome: "Jean", posicoes: ["LD"], forca: 80 },
      { nome: "Fabiano", posicoes: ["LD"], forca: 79 },
      { nome: "Yerry Mina", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vitor Hugo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 79 },
      { nome: "Egídio", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Roberto", posicoes: ["LE","MC"], forca: 82 },
      { nome: "Tchê Tchê", posicoes: ["MC"], forca: 82 },
      { nome: "Moisés", posicoes: ["MEI"], forca: 84 },
      { nome: "Cleiton Xavier", posicoes: ["MEI"], forca: 78 },
      { nome: "Dudu", posicoes: ["PD","PE"], forca: 86 },
      { nome: "Gabriel Jesus", posicoes: ["ATA","PD"], forca: 89 },
      { nome: "Róger Guedes", posicoes: ["PE"], forca: 80 },
      { nome: "Lucas Barrios", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Santos",
    jogadores: [
      { nome: "Vanderlei", posicoes: ["GOL"], forca: 84 },
      { nome: "Victor Ferraz", posicoes: ["LD"], forca: 81 },
      { nome: "Gustavo Henrique", posicoes: ["ZAG"], forca: 80 },
      { nome: "David Braz", posicoes: ["ZAG"], forca: 79 },
      { nome: "Luiz Felipe", posicoes: ["ZAG"], forca: 77 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Renato", posicoes: ["VOL"], forca: 80 },
      { nome: "Thiago Maia", posicoes: ["VOL"], forca: 81 },
      { nome: "Lucas Lima", posicoes: ["MEI"], forca: 86 },
      { nome: "Vitor Bueno", posicoes: ["MEI","PD"], forca: 82 },
      { nome: "Copete", posicoes: ["PE"], forca: 79 },
      { nome: "Gabriel Barbosa", posicoes: ["PD","ATA"], forca: 86 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 84 },
      { nome: "Rodrigão", posicoes: ["ATA"], forca: 78 },
      { nome: "Jean Mota", posicoes: ["MEI"], forca: 77 },
      { nome: "Léo Cittadini", posicoes: ["MC"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Flamengo",
    jogadores: [
      { nome: "Alex Muralha", posicoes: ["GOL"], forca: 81 },
      { nome: "Pará", posicoes: ["LD"], forca: 77 },
      { nome: "Rodinei", posicoes: ["LD"], forca: 78 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { nome: "Rafael Vaz", posicoes: ["ZAG"], forca: 78 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 78 },
      { nome: "Jorge", posicoes: ["LE"], forca: 80 },
      { nome: "Márcio Araújo", posicoes: ["VOL"], forca: 78 },
      { nome: "Willian Arão", posicoes: ["VOL"], forca: 81 },
      { nome: "Mancuello", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Diego", posicoes: ["MEI"], forca: 84 },
      { nome: "Alan Patrick", posicoes: ["MEI"], forca: 80 },
      { nome: "Éverton", posicoes: ["PE"], forca: 80 },
      { nome: "Paolo Guerrero", posicoes: ["ATA"], forca: 85 },
      { nome: "Fernandinho", posicoes: ["PE"], forca: 79 },
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 84 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 82 },
      { nome: "Erazo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Gabriel", posicoes: ["ZAG"], forca: 77 },
      { nome: "Douglas Santos", posicoes: ["LE"], forca: 82 },
      { nome: "Júnior Urso", posicoes: ["VOL"], forca: 80 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 80 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 81 },
      { nome: "Cazares", posicoes: ["MEI"], forca: 82 },
      { nome: "Robinho", posicoes: ["PD"], forca: 86 },
      { nome: "Luan", posicoes: ["PE"], forca: 81 },
      { nome: "Maicosuel", posicoes: ["PD"], forca: 79 },
      { nome: "Fred", posicoes: ["ATA"], forca: 85 },
      { nome: "Lucas Pratto", posicoes: ["ATA"], forca: 85 },
      { nome: "Carlos", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Botafogo",
    jogadores: [
      { nome: "Sidão", posicoes: ["GOL"], forca: 80 },
      { nome: "Jefferson", posicoes: ["GOL"], forca: 81 },
      { nome: "Luis Ricardo", posicoes: ["LD"], forca: 77 },
      { nome: "Emerson Santos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Joel Carli", posicoes: ["ZAG"], forca: 80 },
      { nome: "Renan Fonseca", posicoes: ["ZAG"], forca: 77 },
      { nome: "Victor Luis", posicoes: ["LE"], forca: 78 },
      { nome: "Bruno Silva", posicoes: ["VOL"], forca: 80 },
      { nome: "Airton", posicoes: ["VOL"], forca: 78 },
      { nome: "Rodrigo Lindoso", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Camilo", posicoes: ["MEI"], forca: 84 },
      { nome: "Neilton", posicoes: ["PE"], forca: 80 },
      { nome: "Sassá", posicoes: ["ATA"], forca: 80 },
      { nome: "Rodrigo Pimpão", posicoes: ["ATA","PE"], forca: 79 },
      { nome: "Canales", posicoes: ["ATA"], forca: 76 },
      { nome: "Ribamar", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2016,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 84 },
      { nome: "Léo", posicoes: ["LD"], forca: 77 },
      { nome: "Paulo André", posicoes: ["ZAG"], forca: 79 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { nome: "Sidcley", posicoes: ["LE"], forca: 79 },
      { nome: "Otávio", posicoes: ["VOL"], forca: 79 },
      { nome: "Hernani", posicoes: ["VOL"], forca: 80 },
      { nome: "Deivid", posicoes: ["VOL"], forca: 78 },
      { nome: "Nikão", posicoes: ["MEI","PD"], forca: 81 },
      { nome: "Pablo", posicoes: ["ATA"], forca: 78 },
      { nome: "André Lima", posicoes: ["ATA"], forca: 78 },
      { nome: "Walter", posicoes: ["ATA"], forca: 77 },
      { nome: "Marcos Guilherme", posicoes: ["PD"], forca: 79 },
      { nome: "Lucas Fernandes", posicoes: ["MC"], forca: 76 },
      { nome: "Juninho", posicoes: ["ZAG"], forca: 75 },
      { nome: "Lucho González", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 2015 =====

  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 87 },
      { nome: "Fagner", posicoes: ["LD"], forca: 84 },
      { nome: "Felipe", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 85 },
      { nome: "Uendel", posicoes: ["LE"], forca: 81 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { nome: "Elias", posicoes: ["MC"], forca: 86 },
      { nome: "Renato Augusto", posicoes: ["MEI"], forca: 89 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 88 },
      { nome: "Malcom", posicoes: ["PE"], forca: 81 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 85 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 81 },
      { nome: "Rodriguinho", posicoes: ["MEI"], forca: 79 },
      { nome: "Bruno Henrique", posicoes: ["VOL","MC"], forca: 80 },
      { nome: "Lucca", posicoes: ["PE"], forca: 78 },
      { nome: "Luciano", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 84 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 82 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 84 },
      { nome: "Douglas Santos", posicoes: ["LE"], forca: 82 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 80 },
      { nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 84 },
      { nome: "Luan", posicoes: ["PD"], forca: 82 },
      { nome: "Giovanni Augusto", posicoes: ["MEI"], forca: 82 },
      { nome: "Lucas Pratto", posicoes: ["ATA"], forca: 87 },
      { nome: "Carlos", posicoes: ["ATA"], forca: 78 },
      { nome: "Thiago Ribeiro", posicoes: ["PE"], forca: 79 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { nome: "Patric", posicoes: ["LD"], forca: 77 },
      { nome: "Júnior Urso", posicoes: ["VOL"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 85 },
      { nome: "Galhardo", posicoes: ["LD"], forca: 78 },
      { nome: "Pedro Geromel", posicoes: ["ZAG"], forca: 85 },
      { nome: "Erazo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Marcelo Oliveira", posicoes: ["LE"], forca: 78 },
      { nome: "Walace", posicoes: ["VOL"], forca: 81 },
      { nome: "Maicon", posicoes: ["MC"], forca: 82 },
      { nome: "Giuliano", posicoes: ["MEI"], forca: 84 },
      { nome: "Douglas", posicoes: ["MEI"], forca: 81 },
      { nome: "Luan", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Pedro Rocha", posicoes: ["PD"], forca: 79 },
      { nome: "Bobô", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernandinho", posicoes: ["PE"], forca: 78 },
      { nome: "Everton", posicoes: ["PE"], forca: 77 },
      { nome: "Ramiro", posicoes: ["MC"], forca: 78 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Bruno", posicoes: ["LD"], forca: 77 },
      { nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 80 },
      { nome: "Lucão", posicoes: ["ZAG"], forca: 76 },
      { nome: "Rodrigo Caio", posicoes: ["ZAG","VOL"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["LE"], forca: 78 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 77 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 78 },
      { nome: "Thiago Mendes", posicoes: ["MC"], forca: 80 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 84 },
      { nome: "Michel Bastos", posicoes: ["MEI","PE"], forca: 82 },
      { nome: "Centurión", posicoes: ["PD"], forca: 77 },
      { nome: "Alexandre Pato", posicoes: ["ATA"], forca: 85 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 84 },
      { nome: "Alan Kardec", posicoes: ["ATA"], forca: 79 },
      { nome: "Denis", posicoes: ["GOL"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Internacional",
    jogadores: [
      { nome: "Alisson", posicoes: ["GOL"], forca: 85 },
      { nome: "Muriel", posicoes: ["GOL"], forca: 76 },
      { nome: "William", posicoes: ["LD"], forca: 79 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 80 },
      { nome: "Ernando", posicoes: ["ZAG"], forca: 78 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Geferson", posicoes: ["LE"], forca: 77 },
      { nome: "Charles Aránguiz", posicoes: ["MC"], forca: 85 },
      { nome: "Rodrigo Dourado", posicoes: ["VOL"], forca: 80 },
      { nome: "Anderson", posicoes: ["MC"], forca: 79 },
      { nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 84 },
      { nome: "Valdívia", posicoes: ["MEI"], forca: 80 },
      { nome: "Vitinho", posicoes: ["PE"], forca: 82 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 82 },
      { nome: "Lisandro López", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2015,
    clube: "Sport",
    jogadores: [
      { nome: "Danilo Fernandes", posicoes: ["GOL"], forca: 80 },
      { nome: "Samuel Xavier", posicoes: ["LD"], forca: 78 },
      { nome: "Durval", posicoes: ["ZAG"], forca: 80 },
      { nome: "Matheus Ferraz", posicoes: ["ZAG"], forca: 78 },
      { nome: "Renê", posicoes: ["LE"], forca: 78 },
      { nome: "Rithely", posicoes: ["VOL"], forca: 82 },
      { nome: "Wendel", posicoes: ["VOL"], forca: 78 },
      { nome: "Rodrigo Mancha", posicoes: ["VOL"], forca: 77 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 85 },
      { nome: "Marlone", posicoes: ["MEI","PE"], forca: 81 },
      { nome: "Élber", posicoes: ["PE"], forca: 78 },
      { nome: "André", posicoes: ["ATA"], forca: 84 },
      { nome: "Maikon Leite", posicoes: ["PD"], forca: 78 },
      { nome: "Régis", posicoes: ["MEI"], forca: 77 },
      { nome: "Neto Moura", posicoes: ["MC"], forca: 76 },
      { nome: "Ferrugem", posicoes: ["LD"], forca: 75 }
    ]
  },

  // ===== Edição 2014 =====

  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { nome: "Ceará", posicoes: ["LD"], forca: 80 },
      { nome: "Mayke", posicoes: ["LD"], forca: 80 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 85 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Egídio", posicoes: ["LE"], forca: 82 },
      { nome: "Lucas Silva", posicoes: ["VOL"], forca: 85 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 80 },
      { nome: "Henrique", posicoes: ["MC"], forca: 81 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 90 },
      { nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Marquinhos", posicoes: ["PD","PE"], forca: 80 },
      { nome: "Willian", posicoes: ["PD","PE"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["PE"], forca: 80 },
      { nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Douglas", posicoes: ["LD"], forca: 78 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Rafael Tolói", posicoes: ["ZAG"], forca: 80 },
      { nome: "Álvaro Pereira", posicoes: ["LE"], forca: 80 },
      { nome: "Souza", posicoes: ["VOL"], forca: 80 },
      { nome: "Denilson", posicoes: ["VOL"], forca: 79 },
      { nome: "Maicon", posicoes: ["MC"], forca: 79 },
      { nome: "Paulo Henrique Ganso", posicoes: ["MEI"], forca: 85 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 87 },
      { nome: "Alexandre Pato", posicoes: ["ATA"], forca: 84 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 85 },
      { nome: "Osvaldo", posicoes: ["PE"], forca: 79 },
      { nome: "Ademilson", posicoes: ["ATA"], forca: 77 },
      { nome: "Boschilia", posicoes: ["MEI"], forca: 76 },
      { nome: "Hudson", posicoes: ["VOL"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Internacional",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { nome: "Gilberto", posicoes: ["LD"], forca: 77 },
      { nome: "Paulão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Ernando", posicoes: ["ZAG"], forca: 78 },
      { nome: "Fabrício", posicoes: ["LE"], forca: 80 },
      { nome: "Willians", posicoes: ["VOL"], forca: 79 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 78 },
      { nome: "Charles Aránguiz", posicoes: ["MC"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 81 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdívia", posicoes: ["MEI"], forca: 78 },
      { nome: "Alan Patrick", posicoes: ["MEI"], forca: 78 },
      { nome: "Rafael Moura", posicoes: ["ATA"], forca: 80 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 79 },
      { nome: "Otávio", posicoes: ["PD"], forca: 78 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 85 },
      { nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 84 },
      { nome: "Felipe", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 81 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { nome: "Elias", posicoes: ["MC"], forca: 85 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 84 },
      { nome: "Renato Augusto", posicoes: ["MEI"], forca: 84 },
      { nome: "Guerrero", posicoes: ["ATA"], forca: 85 },
      { nome: "Romarinho", posicoes: ["PD"], forca: 80 },
      { nome: "Malcom", posicoes: ["PE"], forca: 77 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 80 },
      { nome: "Bruno Henrique", posicoes: ["VOL"], forca: 79 },
      { nome: "Emerson Sheik", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 82 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 82 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 81 },
      { nome: "Jemerson", posicoes: ["ZAG"], forca: 79 },
      { nome: "Douglas Santos", posicoes: ["LE"], forca: 80 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 80 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 79 },
      { nome: "Josué", posicoes: ["VOL"], forca: 78 },
      { nome: "Jesús Dátolo", posicoes: ["MEI"], forca: 82 },
      { nome: "Ronaldinho", posicoes: ["MEI"], forca: 86 },
      { nome: "Diego Tardelli", posicoes: ["ATA"], forca: 86 },
      { nome: "Luan", posicoes: ["PD"], forca: 81 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { nome: "Jô", posicoes: ["ATA"], forca: 81 },
      { nome: "Marion", posicoes: ["PE"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2014,
    clube: "Fluminense",
    jogadores: [
      { nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 84 },
      { nome: "Bruno", posicoes: ["LD"], forca: 78 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 80 },
      { nome: "Elivelton", posicoes: ["ZAG"], forca: 77 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 80 },
      { nome: "Jean", posicoes: ["VOL"], forca: 82 },
      { nome: "Edson", posicoes: ["VOL"], forca: 78 },
      { nome: "Cícero", posicoes: ["MC"], forca: 81 },
      { nome: "Darío Conca", posicoes: ["MEI"], forca: 87 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 80 },
      { nome: "Fred", posicoes: ["ATA"], forca: 86 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 82 },
      { nome: "Walter", posicoes: ["ATA"], forca: 79 },
      { nome: "Kenedy", posicoes: ["PE"], forca: 77 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 79 }
    ]
  },

  // ===== Edição 2013 =====

  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 86 },
      { nome: "Ceará", posicoes: ["LD"], forca: 80 },
      { nome: "Mayke", posicoes: ["LD"], forca: 78 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 85 },
      { nome: "Bruno Rodrigo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Egídio", posicoes: ["LE"], forca: 81 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 81 },
      { nome: "Lucas Silva", posicoes: ["VOL"], forca: 81 },
      { nome: "Henrique", posicoes: ["MC"], forca: 80 },
      { nome: "Everton Ribeiro", posicoes: ["MEI","MD"], forca: 88 },
      { nome: "Ricardo Goulart", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Júlio Baptista", posicoes: ["MEI"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["PE"], forca: 81 },
      { nome: "Borges", posicoes: ["ATA"], forca: 82 },
      { nome: "Willian", posicoes: ["PD","ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Grêmio",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 82 },
      { nome: "Pará", posicoes: ["LD"], forca: 78 },
      { nome: "Werley", posicoes: ["ZAG"], forca: 79 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alex Telles", posicoes: ["LE"], forca: 81 },
      { nome: "Souza", posicoes: ["VOL"], forca: 81 },
      { nome: "Ramiro", posicoes: ["VOL","MC"], forca: 79 },
      { nome: "Cristian Riveros", posicoes: ["MC"], forca: 80 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 85 },
      { nome: "Elano", posicoes: ["MEI"], forca: 82 },
      { nome: "Maxi Rodríguez", posicoes: ["MEI"], forca: 78 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 81 },
      { nome: "Barcos", posicoes: ["ATA"], forca: 84 },
      { nome: "Eduardo Vargas", posicoes: ["ATA","PE"], forca: 82 },
      { nome: "Welliton", posicoes: ["ATA"], forca: 78 },
      { nome: "Matheus Biteco", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Weverton", posicoes: ["GOL"], forca: 82 },
      { nome: "Léo", posicoes: ["LD"], forca: 78 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 78 },
      { nome: "Pedro Botelho", posicoes: ["LE"], forca: 79 },
      { nome: "João Paulo", posicoes: ["VOL"], forca: 78 },
      { nome: "Deivid", posicoes: ["VOL"], forca: 78 },
      { nome: "Paulo Baier", posicoes: ["MEI"], forca: 85 },
      { nome: "Everton", posicoes: ["MEI"], forca: 80 },
      { nome: "Marcelo", posicoes: ["ATA"], forca: 81 },
      { nome: "Ederson", posicoes: ["ATA"], forca: 87 },
      { nome: "Dellatorre", posicoes: ["ATA"], forca: 76 },
      { nome: "Zezinho", posicoes: ["MEI"], forca: 76 },
      { nome: "Cleberson", posicoes: ["ZAG"], forca: 76 },
      { nome: "Bruno Silva", posicoes: ["MC"], forca: 77 },
      { nome: "Roger", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Botafogo",
    jogadores: [
      { nome: "Jefferson", posicoes: ["GOL"], forca: 86 },
      { nome: "Lucas", posicoes: ["LD"], forca: 78 },
      { nome: "Bolívar", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dória", posicoes: ["ZAG"], forca: 81 },
      { nome: "Julio Cesar", posicoes: ["LE"], forca: 78 },
      { nome: "Gabriel", posicoes: ["VOL"], forca: 79 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 79 },
      { nome: "Seedorf", posicoes: ["MEI"], forca: 89 },
      { nome: "Lodeiro", posicoes: ["MEI"], forca: 84 },
      { nome: "Vitinho", posicoes: ["PE"], forca: 81 },
      { nome: "Rafael Marques", posicoes: ["ATA"], forca: 81 },
      { nome: "Elias", posicoes: ["ATA"], forca: 78 },
      { nome: "Bruno Mendes", posicoes: ["ATA"], forca: 77 },
      { nome: "Hyuri", posicoes: ["PE"], forca: 77 },
      { nome: "Renato", posicoes: ["MC"], forca: 78 },
      { nome: "Gegê", posicoes: ["MEI"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Vitória",
    jogadores: [
      { nome: "Wilson", posicoes: ["GOL"], forca: 80 },
      { nome: "Ayrton", posicoes: ["LD"], forca: 79 },
      { nome: "Kadu", posicoes: ["ZAG"], forca: 78 },
      { nome: "Victor Ramos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Danilo Tarracha", posicoes: ["LE"], forca: 76 },
      { nome: "Cáceres", posicoes: ["VOL"], forca: 80 },
      { nome: "Michel", posicoes: ["VOL"], forca: 78 },
      { nome: "Escudero", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Cajá", posicoes: ["MEI"], forca: 81 },
      { nome: "Maxi Biancucchi", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Marquinhos", posicoes: ["ATA"], forca: 80 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 81 },
      { nome: "William Henrique", posicoes: ["PE"], forca: 78 },
      { nome: "Juan", posicoes: ["LE","ME"], forca: 77 },
      { nome: "Neto Coruja", posicoes: ["VOL"], forca: 77 },
      { nome: "Pedro Oldoni", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2013,
    clube: "Goiás",
    jogadores: [
      { nome: "Renan", posicoes: ["GOL"], forca: 81 },
      { nome: "Vítor", posicoes: ["LD"], forca: 77 },
      { nome: "Ernando", posicoes: ["ZAG"], forca: 79 },
      { nome: "Rodrigo", posicoes: ["ZAG"], forca: 78 },
      { nome: "William Matheus", posicoes: ["LE"], forca: 78 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 78 },
      { nome: "David", posicoes: ["VOL"], forca: 77 },
      { nome: "Thiago Mendes", posicoes: ["MC"], forca: 79 },
      { nome: "Hugo", posicoes: ["MEI"], forca: 80 },
      { nome: "Walter", posicoes: ["ATA"], forca: 85 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 79 },
      { nome: "Erik", posicoes: ["PE"], forca: 77 },
      { nome: "Roni", posicoes: ["PD"], forca: 77 },
      { nome: "Ramon", posicoes: ["MEI"], forca: 76 },
      { nome: "Tartá", posicoes: ["PE"], forca: 75 },
      { nome: "Dudu Cearense", posicoes: ["VOL"], forca: 79 }
    ]
  },

  // ===== Edição 2012 =====

  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Fluminense",
    jogadores: [
      { nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 85 },
      { nome: "Bruno", posicoes: ["LD"], forca: 78 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 81 },
      { nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 81 },
      { nome: "Jean", posicoes: ["VOL"], forca: 85 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 80 },
      { nome: "Valencia", posicoes: ["VOL"], forca: 79 },
      { nome: "Deco", posicoes: ["MEI"], forca: 84 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 85 },
      { nome: "Wellington Nem", posicoes: ["PE"], forca: 82 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 82 },
      { nome: "Fred", posicoes: ["ATA"], forca: 89 },
      { nome: "Samuel", posicoes: ["ATA"], forca: 77 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 79 },
      { nome: "Marcos Júnior", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { nome: "Giovanni", posicoes: ["GOL"], forca: 77 },
      { nome: "Marcos Rocha", posicoes: ["LD"], forca: 82 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 85 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Júnior César", posicoes: ["LE"], forca: 79 },
      { nome: "Richarlyson", posicoes: ["VOL"], forca: 79 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 81 },
      { nome: "Leandro Donizete", posicoes: ["VOL"], forca: 79 },
      { nome: "Bernard", posicoes: ["PE"], forca: 86 },
      { nome: "Ronaldinho", posicoes: ["MEI"], forca: 89 },
      { nome: "Danilinho", posicoes: ["PD"], forca: 80 },
      { nome: "Guilherme", posicoes: ["MEI"], forca: 79 },
      { nome: "Jô", posicoes: ["ATA"], forca: 82 },
      { nome: "Escudero", posicoes: ["MEI"], forca: 78 },
      { nome: "Neto Berola", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Grêmio",
    jogadores: [
      { nome: "Marcelo Grohe", posicoes: ["GOL"], forca: 81 },
      { nome: "Pará", posicoes: ["LD"], forca: 78 },
      { nome: "Werley", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gilberto Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Naldo", posicoes: ["ZAG"], forca: 78 },
      { nome: "Anderson Pico", posicoes: ["LE"], forca: 77 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 82 },
      { nome: "Souza", posicoes: ["VOL"], forca: 81 },
      { nome: "Elano", posicoes: ["MEI"], forca: 82 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["MEI"], forca: 78 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 81 },
      { nome: "Marcelo Moreno", posicoes: ["ATA"], forca: 82 },
      { nome: "Leandro", posicoes: ["PE"], forca: 78 },
      { nome: "André Lima", posicoes: ["ATA"], forca: 79 },
      { nome: "Bertoglio", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Douglas", posicoes: ["LD"], forca: 78 },
      { nome: "Paulo Miranda", posicoes: ["ZAG"], forca: 78 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Cortez", posicoes: ["LE"], forca: 80 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 79 },
      { nome: "Denilson", posicoes: ["VOL"], forca: 80 },
      { nome: "Maicon", posicoes: ["MC"], forca: 79 },
      { nome: "Jadson", posicoes: ["MEI"], forca: 84 },
      { nome: "Lucas Moura", posicoes: ["PD"], forca: 87 },
      { nome: "Cícero", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Osvaldo", posicoes: ["PE"], forca: 80 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 86 },
      { nome: "Willian José", posicoes: ["ATA"], forca: 78 },
      { nome: "Ademilson", posicoes: ["ATA"], forca: 76 },
      { nome: "Casemiro", posicoes: ["VOL"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Vasco",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 84 },
      { nome: "Fágner", posicoes: ["LD"], forca: 82 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 86 },
      { nome: "Renato Silva", posicoes: ["ZAG"], forca: 78 },
      { nome: "Thiago Feltri", posicoes: ["LE"], forca: 77 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 80 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 86 },
      { nome: "Felipe", posicoes: ["MEI"], forca: 82 },
      { nome: "Wendel", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Éder Luís", posicoes: ["PD"], forca: 81 },
      { nome: "Alecsandro", posicoes: ["ATA"], forca: 82 },
      { nome: "Carlos Tenorio", posicoes: ["ATA"], forca: 78 },
      { nome: "William Barbio", posicoes: ["PD"], forca: 77 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 78 },
      { nome: "Felipe Bastos", posicoes: ["VOL"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2012,
    clube: "Corinthians",
    jogadores: [
      { nome: "Cássio", posicoes: ["GOL"], forca: 86 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 80 },
      { nome: "Chicão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Paulo André", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 81 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { nome: "Paulinho", posicoes: ["MC"], forca: 87 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 82 },
      { nome: "Douglas", posicoes: ["MEI"], forca: 80 },
      { nome: "Emerson Sheik", posicoes: ["PD"], forca: 84 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 81 },
      { nome: "Guerrero", posicoes: ["ATA"], forca: 84 },
      { nome: "Romarinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Liedson", posicoes: ["ATA"], forca: 79 },
      { nome: "Martínez", posicoes: ["ATA"], forca: 77 }
    ]
  },

  // ===== Edição 2011 =====

  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Corinthians",
    jogadores: [
      { nome: "Júlio César", posicoes: ["GOL"], forca: 81 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 80 },
      { nome: "Chicão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Leandro Castán", posicoes: ["ZAG"], forca: 84 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 81 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 84 },
      { nome: "Paulinho", posicoes: ["MC"], forca: 85 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 82 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 81 },
      { nome: "Willian", posicoes: ["ATA"], forca: 82 },
      { nome: "Liedson", posicoes: ["ATA"], forca: 85 },
      { nome: "Emerson Sheik", posicoes: ["PD"], forca: 82 },
      { nome: "Edenílson", posicoes: ["VOL","LD"], forca: 78 },
      { nome: "Ramírez", posicoes: ["MC"], forca: 78 },
      { nome: "Morais", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Vasco",
    jogadores: [
      { nome: "Fernando Prass", posicoes: ["GOL"], forca: 84 },
      { nome: "Fagner", posicoes: ["LD"], forca: 82 },
      { nome: "Dedé", posicoes: ["ZAG"], forca: 86 },
      { nome: "Anderson Martins", posicoes: ["ZAG"], forca: 81 },
      { nome: "Renato Silva", posicoes: ["ZAG"], forca: 78 },
      { nome: "Julinho", posicoes: ["LE"], forca: 77 },
      { nome: "Rômulo", posicoes: ["VOL"], forca: 82 },
      { nome: "Nilton", posicoes: ["VOL"], forca: 80 },
      { nome: "Juninho Pernambucano", posicoes: ["MEI"], forca: 86 },
      { nome: "Felipe", posicoes: ["MEI"], forca: 82 },
      { nome: "Diego Souza", posicoes: ["MEI","ATA"], forca: 85 },
      { nome: "Bernardo", posicoes: ["MEI"], forca: 79 },
      { nome: "Éder Luís", posicoes: ["PD"], forca: 81 },
      { nome: "Alecsandro", posicoes: ["ATA"], forca: 82 },
      { nome: "Elton", posicoes: ["ATA"], forca: 78 },
      { nome: "Allan", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Fluminense",
    jogadores: [
      { nome: "Diego Cavalieri", posicoes: ["GOL"], forca: 82 },
      { nome: "Mariano", posicoes: ["LD"], forca: 81 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 80 },
      { nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 80 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 80 },
      { nome: "Valencia", posicoes: ["VOL"], forca: 79 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Marquinho", posicoes: ["MC"], forca: 80 },
      { nome: "Deco", posicoes: ["MEI"], forca: 84 },
      { nome: "Darío Conca", posicoes: ["MEI"], forca: 85 },
      { nome: "Rafael Moura", posicoes: ["ATA"], forca: 84 },
      { nome: "Fred", posicoes: ["ATA"], forca: 88 },
      { nome: "Rafael Sobis", posicoes: ["ATA"], forca: 81 },
      { nome: "Manuel Lanzini", posicoes: ["MEI"], forca: 79 },
      { nome: "Souza", posicoes: ["MEI"], forca: 78 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Flamengo",
    jogadores: [
      { nome: "Felipe", posicoes: ["GOL"], forca: 81 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 84 },
      { nome: "Welinton", posicoes: ["ZAG"], forca: 77 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 80 },
      { nome: "Junior Cesar", posicoes: ["LE"], forca: 79 },
      { nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { nome: "Maldonado", posicoes: ["VOL"], forca: 79 },
      { nome: "Airton", posicoes: ["VOL"], forca: 78 },
      { nome: "Renato Abreu", posicoes: ["MC"], forca: 82 },
      { nome: "Ronaldinho", posicoes: ["MEI","ATA"], forca: 88 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 86 },
      { nome: "Bottinelli", posicoes: ["MEI"], forca: 78 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 80 },
      { nome: "Diego Maurício", posicoes: ["ATA"], forca: 77 },
      { nome: "Jael", posicoes: ["ATA"], forca: 77 },
      { nome: "Wanderley", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "Internacional",
    jogadores: [
      { nome: "Muriel", posicoes: ["GOL"], forca: 80 },
      { nome: "Nei", posicoes: ["LD"], forca: 78 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 80 },
      { nome: "Bolívar", posicoes: ["ZAG"], forca: 80 },
      { nome: "Kleber", posicoes: ["LE"], forca: 81 },
      { nome: "Guiñazú", posicoes: ["VOL"], forca: 84 },
      { nome: "Bolatti", posicoes: ["VOL"], forca: 79 },
      { nome: "Tinga", posicoes: ["MC"], forca: 80 },
      { nome: "D’Alessandro", posicoes: ["MEI"], forca: 86 },
      { nome: "Oscar", posicoes: ["MEI"], forca: 85 },
      { nome: "Leandro Damião", posicoes: ["ATA"], forca: 87 },
      { nome: "Zé Roberto", posicoes: ["PE"], forca: 78 },
      { nome: "Andrezinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Gilberto", posicoes: ["ATA"], forca: 78 },
      { nome: "Dellatorre", posicoes: ["ATA"], forca: 75 },
      { nome: "Juan", posicoes: ["ZAG"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2011,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 86 },
      { nome: "Iván Piris", posicoes: ["LD"], forca: 78 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Xandão", posicoes: ["ZAG"], forca: 77 },
      { nome: "Juan", posicoes: ["LE"], forca: 78 },
      { nome: "Casemiro", posicoes: ["VOL"], forca: 81 },
      { nome: "Wellington", posicoes: ["VOL"], forca: 79 },
      { nome: "Denilson", posicoes: ["VOL"], forca: 79 },
      { nome: "Cícero", posicoes: ["MC"], forca: 80 },
      { nome: "Lucas Moura", posicoes: ["PD"], forca: 86 },
      { nome: "Dagoberto", posicoes: ["ATA"], forca: 85 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 80 },
      { nome: "Luis Fabiano", posicoes: ["ATA"], forca: 84 },
      { nome: "Henrique", posicoes: ["ATA"], forca: 77 },
      { nome: "Marlos", posicoes: ["PE"], forca: 79 },
      { nome: "Fernandinho", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 2010 =====

  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fernando Henrique", posicoes: ["GOL"], forca: 80 },
      { nome: "Ricardo Berna", posicoes: ["GOL"], forca: 78 },
      { nome: "Mariano", posicoes: ["LD"], forca: 82 },
      { nome: "Gum", posicoes: ["ZAG"], forca: 80 },
      { nome: "Leandro Euzébio", posicoes: ["ZAG"], forca: 80 },
      { nome: "André Luis", posicoes: ["ZAG"], forca: 78 },
      { nome: "Carlinhos", posicoes: ["LE"], forca: 80 },
      { nome: "Julio Cesar", posicoes: ["LE"], forca: 78 },
      { nome: "Diogo", posicoes: ["VOL"], forca: 79 },
      { nome: "Diguinho", posicoes: ["VOL"], forca: 80 },
      { nome: "Valencia", posicoes: ["VOL"], forca: 79 },
      { nome: "Darío Conca", posicoes: ["MEI"], forca: 90 },
      { nome: "Deco", posicoes: ["MEI"], forca: 84 },
      { nome: "Marquinho", posicoes: ["MC"], forca: 80 },
      { nome: "Fred", posicoes: ["ATA"], forca: 86 },
      { nome: "Washington", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 85 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 81 },
      { nome: "Gil", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Diego Renan", posicoes: ["LE"], forca: 80 },
      { nome: "Fabrício", posicoes: ["VOL"], forca: 82 },
      { nome: "Henrique", posicoes: ["VOL"], forca: 81 },
      { nome: "Marquinhos Paraná", posicoes: ["MC"], forca: 81 },
      { nome: "Roger", posicoes: ["MEI"], forca: 80 },
      { nome: "Montillo", posicoes: ["MEI"], forca: 87 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 81 },
      { nome: "Thiago Ribeiro", posicoes: ["PD"], forca: 84 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { nome: "Robert", posicoes: ["ATA"], forca: 78 },
      { nome: "Wallyson", posicoes: ["ATA","PE"], forca: 80 },
      { nome: "Guerrón", posicoes: ["PD"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Corinthians",
    jogadores: [
      { nome: "Júlio César", posicoes: ["GOL"], forca: 81 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 80 },
      { nome: "Chicão", posicoes: ["ZAG"], forca: 81 },
      { nome: "William", posicoes: ["ZAG"], forca: 80 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 85 },
      { nome: "Ralf", posicoes: ["VOL"], forca: 82 },
      { nome: "Jucilei", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Elias", posicoes: ["MC"], forca: 85 },
      { nome: "Bruno César", posicoes: ["MEI"], forca: 85 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 81 },
      { nome: "Dentinho", posicoes: ["PD"], forca: 82 },
      { nome: "Ronaldo", posicoes: ["ATA"], forca: 86 },
      { nome: "Jorge Henrique", posicoes: ["PE"], forca: 81 },
      { nome: "Iarley", posicoes: ["ATA"], forca: 78 },
      { nome: "Souza", posicoes: ["ATA"], forca: 77 },
      { nome: "Defederico", posicoes: ["MEI"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 85 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 80 },
      { nome: "Mário Fernandes", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rafael Marques", posicoes: ["ZAG"], forca: 79 },
      { nome: "Rodolfo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Santos", posicoes: ["LE"], forca: 80 },
      { nome: "Adílson", posicoes: ["VOL"], forca: 79 },
      { nome: "Willian Magrão", posicoes: ["VOL"], forca: 78 },
      { nome: "Douglas", posicoes: ["MEI"], forca: 85 },
      { nome: "Hugo", posicoes: ["MEI"], forca: 80 },
      { nome: "Souza", posicoes: ["MEI"], forca: 79 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 88 },
      { nome: "Borges", posicoes: ["ATA"], forca: 81 },
      { nome: "André Lima", posicoes: ["ATA"], forca: 80 },
      { nome: "Lúcio", posicoes: ["LE","ME"], forca: 78 },
      { nome: "Maylson", posicoes: ["MC"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Neto", posicoes: ["GOL"], forca: 81 },
      { nome: "Rhodolfo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Manoel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Chico", posicoes: ["ZAG"], forca: 78 },
      { nome: "Wagner Diniz", posicoes: ["LD"], forca: 77 },
      { nome: "Paulinho", posicoes: ["LE"], forca: 78 },
      { nome: "Vitor", posicoes: ["VOL"], forca: 79 },
      { nome: "Deivid", posicoes: ["VOL"], forca: 78 },
      { nome: "Paulo Baier", posicoes: ["MEI"], forca: 85 },
      { nome: "Branquinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Guerrón", posicoes: ["PD"], forca: 81 },
      { nome: "Bruno Mineiro", posicoes: ["ATA"], forca: 81 },
      { nome: "Maikon Leite", posicoes: ["PE"], forca: 80 },
      { nome: "Nieto", posicoes: ["ATA"], forca: 77 },
      { nome: "Ivan González", posicoes: ["ZAG"], forca: 77 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2010,
    clube: "Botafogo",
    jogadores: [
      { nome: "Jefferson", posicoes: ["GOL"], forca: 85 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 78 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fábio Ferreira", posicoes: ["ZAG"], forca: 78 },
      { nome: "Marcelo Cordeiro", posicoes: ["LE"], forca: 78 },
      { nome: "Somália", posicoes: ["VOL"], forca: 79 },
      { nome: "Leandro Guerreiro", posicoes: ["VOL"], forca: 79 },
      { nome: "Fahel", posicoes: ["VOL"], forca: 78 },
      { nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 81 },
      { nome: "Maicosuel", posicoes: ["MEI"], forca: 82 },
      { nome: "Herrera", posicoes: ["ATA"], forca: 81 },
      { nome: "Loco Abreu", posicoes: ["ATA"], forca: 85 },
      { nome: "Jobson", posicoes: ["ATA"], forca: 80 },
      { nome: "Caio", posicoes: ["ATA"], forca: 78 },
      { nome: "Edno", posicoes: ["ATA"], forca: 77 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 79 }
    ]
  },

  // ===== Edição 2009 =====

  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Flamengo",
    jogadores: [
      { nome: "Bruno", posicoes: ["GOL"], forca: 86 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 85 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Álvaro", posicoes: ["ZAG"], forca: 78 },
      { nome: "Juan", posicoes: ["LE"], forca: 82 },
      { nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { nome: "Ibson", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Kleberson", posicoes: ["MC"], forca: 82 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 89 },
      { nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Adriano", posicoes: ["ATA"], forca: 91 },
      { nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 84 },
      { nome: "Obina", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 85 },
      { nome: "Lauro", posicoes: ["GOL"], forca: 80 },
      { nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 84 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 85 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 82 },
      { nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Magrão", posicoes: ["MC"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "D'Alessandro", posicoes: ["MEI"], forca: 88 },
      { nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Nilmar", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 82 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fernandinho", posicoes: ["LE"], forca: 79 },
      { nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 84 },
      { nome: "Henrique", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Fabrício", posicoes: ["MC"], forca: 82 },
      { nome: "Ramires", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 85 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 87 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { nome: "Arce", posicoes: ["LD"], forca: 80 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { nome: "Armero", posicoes: ["LE"], forca: 80 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2009,
    clube: "Avaí",
    jogadores: [
      { nome: "Eduardo Martini", posicoes: ["GOL"], forca: 80 },
      { nome: "Luís Ricardo", posicoes: ["LD"], forca: 77 },
      { nome: "Emerson Nunes", posicoes: ["ZAG"], forca: 78 },
      { nome: "Augusto", posicoes: ["ZAG"], forca: 77 },
      { nome: "Eltinho", posicoes: ["LE"], forca: 78 },
      { nome: "Léo Gago", posicoes: ["VOL"], forca: 81 },
      { nome: "Ferdinando", posicoes: ["VOL"], forca: 77 },
      { nome: "Marcus Winícius", posicoes: ["MC"], forca: 78 },
      { nome: "Marquinhos", posicoes: ["MEI"], forca: 85 },
      { nome: "Caio", posicoes: ["MEI"], forca: 80 },
      { nome: "Muriqui", posicoes: ["PE"], forca: 82 },
      { nome: "William", posicoes: ["ATA"], forca: 81 },
      { nome: "Vandinho", posicoes: ["ATA"], forca: 79 },
      { nome: "Roberto", posicoes: ["ATA"], forca: 76 }
    ]
  },

  // ===== Edição 2008 =====

  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 87 },
      { nome: "Patrício", posicoes: ["LD"], forca: 78 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 84 },
      { nome: "Pereira", posicoes: ["ZAG"], forca: 79 },
      { nome: "Lúcio", posicoes: ["LE"], forca: 79 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { nome: "William Magrão", posicoes: ["VOL"], forca: 80 },
      { nome: "Tcheco", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { nome: "Roger", posicoes: ["MEI"], forca: 81 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 82 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 79 },
      { nome: "Perea", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 82 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fernandinho", posicoes: ["LE"], forca: 79 },
      { nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 84 },
      { nome: "Henrique", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Fabrício", posicoes: ["MC"], forca: 82 },
      { nome: "Ramires", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 85 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 87 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { nome: "Arce", posicoes: ["LD"], forca: 80 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { nome: "Armero", posicoes: ["LE"], forca: 80 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Flamengo",
    jogadores: [
      { nome: "Bruno", posicoes: ["GOL"], forca: 86 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 85 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Álvaro", posicoes: ["ZAG"], forca: 78 },
      { nome: "Juan", posicoes: ["LE"], forca: 82 },
      { nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { nome: "Ibson", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Kleberson", posicoes: ["MC"], forca: 82 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 89 },
      { nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Adriano", posicoes: ["ATA"], forca: 91 },
      { nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 84 },
      { nome: "Obina", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2008,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 85 },
      { nome: "Lauro", posicoes: ["GOL"], forca: 80 },
      { nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 84 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 85 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 82 },
      { nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Magrão", posicoes: ["MC"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "D'Alessandro", posicoes: ["MEI"], forca: 88 },
      { nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Nilmar", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 88 }
    ]
  },

  // ===== Edição 2007 =====

  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { nome: "Denis", posicoes: ["LD"], forca: 79 },
      { nome: "Adaílton", posicoes: ["ZAG"], forca: 80 },
      { nome: "Domingos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Kléber", posicoes: ["LE"], forca: 85 },
      { nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 82 },
      { nome: "Maldonado", posicoes: ["VOL"], forca: 82 },
      { nome: "Cléber Santana", posicoes: ["MC"], forca: 85 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 87 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Jonas", posicoes: ["PE"], forca: 79 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 86 },
      { nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 80 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Flamengo",
    jogadores: [
      { nome: "Bruno", posicoes: ["GOL"], forca: 86 },
      { nome: "Léo Moura", posicoes: ["LD"], forca: 85 },
      { nome: "Ronaldo Angelim", posicoes: ["ZAG"], forca: 82 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Álvaro", posicoes: ["ZAG"], forca: 78 },
      { nome: "Juan", posicoes: ["LE"], forca: 82 },
      { nome: "Willians", posicoes: ["VOL"], forca: 81 },
      { nome: "Ibson", posicoes: ["VOL","MC"], forca: 84 },
      { nome: "Kleberson", posicoes: ["MC"], forca: 82 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 89 },
      { nome: "Zé Roberto", posicoes: ["MEI","ATA"], forca: 80 },
      { nome: "Adriano", posicoes: ["ATA"], forca: 91 },
      { nome: "Emerson Sheik", posicoes: ["ATA","PE"], forca: 84 },
      { nome: "Obina", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Fluminense",
    jogadores: [
      { nome: "Fernando Henrique", posicoes: ["GOL"], forca: 80 },
      { nome: "Carlinhos", posicoes: ["LD"], forca: 77 },
      { nome: "Thiago Silva", posicoes: ["ZAG"], forca: 87 },
      { nome: "Luiz Alberto", posicoes: ["ZAG"], forca: 81 },
      { nome: "Júnior César", posicoes: ["LE"], forca: 82 },
      { nome: "Arouca", posicoes: ["VOL"], forca: 82 },
      { nome: "Fabinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Conca", posicoes: ["MC"], forca: 85 },
      { nome: "Thiago Neves", posicoes: ["MEI"], forca: 87 },
      { nome: "Cícero", posicoes: ["MEI"], forca: 82 },
      { nome: "Maicon", posicoes: ["PD"], forca: 78 },
      { nome: "Washington", posicoes: ["ATA"], forca: 87 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 85 },
      { nome: "Somália", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Fábio", posicoes: ["GOL"], forca: 87 },
      { nome: "Jonathan", posicoes: ["LD"], forca: 82 },
      { nome: "Leonardo Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Thiago Heleno", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fernandinho", posicoes: ["LE"], forca: 79 },
      { nome: "Marquinhos Paraná", posicoes: ["VOL"], forca: 84 },
      { nome: "Henrique", posicoes: ["VOL","MC"], forca: 81 },
      { nome: "Fabrício", posicoes: ["MC"], forca: 82 },
      { nome: "Ramires", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Wagner", posicoes: ["MEI"], forca: 85 },
      { nome: "Gilberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 87 },
      { nome: "Wellington Paulista", posicoes: ["ATA"], forca: 82 },
      { nome: "Thiago Ribeiro", posicoes: ["ATA","PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2007,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 87 },
      { nome: "Patrício", posicoes: ["LD"], forca: 78 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 84 },
      { nome: "Pereira", posicoes: ["ZAG"], forca: 79 },
      { nome: "Lúcio", posicoes: ["LE"], forca: 79 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { nome: "William Magrão", posicoes: ["VOL"], forca: 80 },
      { nome: "Tcheco", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { nome: "Roger", posicoes: ["MEI"], forca: 81 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 82 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 79 },
      { nome: "Perea", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },

  // ===== Edição 2006 =====

  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 89 },
      { nome: "Bosco", posicoes: ["GOL"], forca: 76 },
      { nome: "Jean", posicoes: ["LD","VOL"], forca: 81 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 87 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 86 },
      { nome: "Alex Silva", posicoes: ["ZAG"], forca: 84 },
      { nome: "Jorge Wagner", posicoes: ["LE","MC"], forca: 85 },
      { nome: "Richarlyson", posicoes: ["LE","VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 85 },
      { nome: "Hernanes", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Mineiro", posicoes: ["MC"], forca: 84 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 85 },
      { nome: "Dagoberto", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Borges", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 85 },
      { nome: "Lauro", posicoes: ["GOL"], forca: 80 },
      { nome: "Bolívar", posicoes: ["LD","ZAG"], forca: 84 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 85 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 82 },
      { nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 82 },
      { nome: "Guiñazu", posicoes: ["VOL","MC"], forca: 87 },
      { nome: "Magrão", posicoes: ["MC"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "D'Alessandro", posicoes: ["MEI"], forca: 88 },
      { nome: "Andrezinho", posicoes: ["MEI","ATA"], forca: 81 },
      { nome: "Nilmar", posicoes: ["ATA","PE"], forca: 89 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Grêmio",
    jogadores: [
      { nome: "Victor", posicoes: ["GOL"], forca: 87 },
      { nome: "Patrício", posicoes: ["LD"], forca: 78 },
      { nome: "Léo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Réver", posicoes: ["ZAG"], forca: 84 },
      { nome: "Pereira", posicoes: ["ZAG"], forca: 79 },
      { nome: "Lúcio", posicoes: ["LE"], forca: 79 },
      { nome: "Rafael Carioca", posicoes: ["VOL"], forca: 82 },
      { nome: "William Magrão", posicoes: ["VOL"], forca: 80 },
      { nome: "Tcheco", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { nome: "Roger", posicoes: ["MEI"], forca: 81 },
      { nome: "Jonas", posicoes: ["ATA"], forca: 82 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 79 },
      { nome: "Perea", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { nome: "Denis", posicoes: ["LD"], forca: 79 },
      { nome: "Adaílton", posicoes: ["ZAG"], forca: 80 },
      { nome: "Domingos", posicoes: ["ZAG"], forca: 78 },
      { nome: "Kléber", posicoes: ["LE"], forca: 85 },
      { nome: "Rodrigo Souto", posicoes: ["VOL"], forca: 82 },
      { nome: "Maldonado", posicoes: ["VOL"], forca: 82 },
      { nome: "Cléber Santana", posicoes: ["MC"], forca: 85 },
      { nome: "Zé Roberto", posicoes: ["MEI"], forca: 87 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Jonas", posicoes: ["PE"], forca: 79 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 86 },
      { nome: "Marcos Aurélio", posicoes: ["ATA"], forca: 80 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Paraná",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 79 },
      { nome: "Edinho", posicoes: ["LD"], forca: 77 },
      { nome: "Daniel Marques", posicoes: ["ZAG"], forca: 77 },
      { nome: "Neguette", posicoes: ["ZAG"], forca: 76 },
      { nome: "Vicente", posicoes: ["LE"], forca: 78 },
      { nome: "Beto", posicoes: ["VOL"], forca: 79 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 82 },
      { nome: "Éverton", posicoes: ["MC"], forca: 78 },
      { nome: "Maicossuel", posicoes: ["MEI"], forca: 80 },
      { nome: "Dinélson", posicoes: ["MEI"], forca: 79 },
      { nome: "Marcel", posicoes: ["PD"], forca: 78 },
      { nome: "Josiel", posicoes: ["ATA"], forca: 80 },
      { nome: "Henrique", posicoes: ["ATA"], forca: 77 },
      { nome: "Emerson", posicoes: ["PE"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2006,
    clube: "Vasco",
    jogadores: [
      { nome: "Hélton", posicoes: ["GOL"], forca: 86 },
      { nome: "Jorginho Paulista", posicoes: ["LD"], forca: 80 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Felipe", posicoes: ["LE"], forca: 87 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 89 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 87 },
      { nome: "Juninho Paulista", posicoes: ["MEI"], forca: 87 },
      { nome: "Viola", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Romário", posicoes: ["ATA"], forca: 91 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { nome: "Euller", posicoes: ["ATA"], forca: 84 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 82 }
    ]
  },

  // ===== Edição 2005 =====

  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { nome: "Anderson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Betão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 80 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 84 },
      { nome: "Vampeta", posicoes: ["MC"], forca: 85 },
      { nome: "Renato", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 87 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Tevez", posicoes: ["ATA"], forca: 92 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 86 },
      { nome: "Gil", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { nome: "Élder Granja", posicoes: ["LD"], forca: 80 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vinícius", posicoes: ["ZAG"], forca: 78 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Wellington", posicoes: ["PD"], forca: 77 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 85 },
      { nome: "Diego", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Goiás",
    jogadores: [
      { nome: "Harlei", posicoes: ["GOL"], forca: 84 },
      { nome: "Vitor", posicoes: ["LD"], forca: 78 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Baier", posicoes: ["LE"], forca: 81 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Danilo", posicoes: ["MC"], forca: 82 },
      { nome: "Túlio", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Fernandão", posicoes: ["MEI"], forca: 85 },
      { nome: "Iarley", posicoes: ["MEI"], forca: 82 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 86 },
      { nome: "Alex Dias", posicoes: ["ATA"], forca: 82 },
      { nome: "Dimba", posicoes: ["ATA"], forca: 84 },
      { nome: "Welliton", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { nome: "Arce", posicoes: ["LD"], forca: 80 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { nome: "Armero", posicoes: ["LE"], forca: 80 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Fluminense",
    jogadores: [
      { nome: "Murilo", posicoes: ["GOL"], forca: 80 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 79 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 79 },
      { nome: "César", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo César", posicoes: ["LE"], forca: 78 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 81 },
      { nome: "Fernando Diniz", posicoes: ["MC"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 86 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { nome: "Ramon", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 86 },
      { nome: "Roni", posicoes: ["ATA"], forca: 84 },
      { nome: "Tuta", posicoes: ["ATA"], forca: 80 },
      { nome: "Alex Dias", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2005,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Diego", posicoes: ["GOL"], forca: 82 },
      { nome: "Jancarlos", posicoes: ["LD"], forca: 80 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Marcão", posicoes: ["LE"], forca: 79 },
      { nome: "Alan Bahia", posicoes: ["VOL"], forca: 82 },
      { nome: "Pingo", posicoes: ["VOL"], forca: 78 },
      { nome: "Fernandinho", posicoes: ["MC"], forca: 86 },
      { nome: "Jádson", posicoes: ["MEI"], forca: 84 },
      { nome: "Evandro", posicoes: ["MEI"], forca: 80 },
      { nome: "Dagoberto", posicoes: ["PD"], forca: 85 },
      { nome: "Washington", posicoes: ["ATA"], forca: 89 },
      { nome: "Lima", posicoes: ["ATA"], forca: 80 },
      { nome: "Aloísio", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 2004 =====

  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { nome: "Maurinho", posicoes: ["LD"], forca: 81 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { nome: "André Luís", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["LE"], forca: 84 },
      { nome: "Paulo Almeida", posicoes: ["VOL"], forca: 80 },
      { nome: "Renato", posicoes: ["MC"], forca: 85 },
      { nome: "Elano", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego", posicoes: ["MEI"], forca: 90 },
      { nome: "Robinho", posicoes: ["ATA","PE"], forca: 90 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 86 },
      { nome: "Alberto", posicoes: ["ATA"], forca: 77 },
      { nome: "Léo Lima", posicoes: ["MEI"], forca: 79 },
      { nome: "William", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Diego", posicoes: ["GOL"], forca: 82 },
      { nome: "Jancarlos", posicoes: ["LD"], forca: 80 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Marcão", posicoes: ["LE"], forca: 79 },
      { nome: "Alan Bahia", posicoes: ["VOL"], forca: 82 },
      { nome: "Pingo", posicoes: ["VOL"], forca: 78 },
      { nome: "Fernandinho", posicoes: ["MC"], forca: 86 },
      { nome: "Jádson", posicoes: ["MEI"], forca: 84 },
      { nome: "Evandro", posicoes: ["MEI"], forca: 80 },
      { nome: "Dagoberto", posicoes: ["PD"], forca: 85 },
      { nome: "Washington", posicoes: ["ATA"], forca: 89 },
      { nome: "Lima", posicoes: ["ATA"], forca: 80 },
      { nome: "Aloísio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 88 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 85 },
      { nome: "Diego Lugano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 81 },
      { nome: "Mineiro", posicoes: ["VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 81 },
      { nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Luís Fabiano", posicoes: ["ATA"], forca: 89 },
      { nome: "Grafite", posicoes: ["ATA"], forca: 82 },
      { nome: "França", posicoes: ["ATA"], forca: 85 },
      { nome: "Reinaldo", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 87 },
      { nome: "Arce", posicoes: ["LD"], forca: 80 },
      { nome: "Elder Granja", posicoes: ["LD"], forca: 78 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 84 },
      { nome: "Armero", posicoes: ["LE"], forca: 80 },
      { nome: "Pierre", posicoes: ["VOL"], forca: 85 },
      { nome: "Edmílson", posicoes: ["MC"], forca: 80 },
      { nome: "Cleiton Xavier", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego Souza", posicoes: ["MEI"], forca: 87 },
      { nome: "Valdivia", posicoes: ["MEI"], forca: 87 },
      { nome: "Alex Mineiro", posicoes: ["ATA"], forca: 85 },
      { nome: "Kléber", posicoes: ["ATA"], forca: 86 },
      { nome: "Vágner Love", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { nome: "Anderson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Betão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 80 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 84 },
      { nome: "Vampeta", posicoes: ["MC"], forca: 85 },
      { nome: "Renato", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 87 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Tevez", posicoes: ["ATA"], forca: 92 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 86 },
      { nome: "Gil", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2004,
    clube: "Goiás",
    jogadores: [
      { nome: "Harlei", posicoes: ["GOL"], forca: 84 },
      { nome: "Vitor", posicoes: ["LD"], forca: 78 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Baier", posicoes: ["LE"], forca: 81 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Danilo", posicoes: ["MC"], forca: 82 },
      { nome: "Túlio", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Fernandão", posicoes: ["MEI"], forca: 85 },
      { nome: "Iarley", posicoes: ["MEI"], forca: 82 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 86 },
      { nome: "Alex Dias", posicoes: ["ATA"], forca: 82 },
      { nome: "Dimba", posicoes: ["ATA"], forca: 84 },
      { nome: "Welliton", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 2003 =====

  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Gomes", posicoes: ["GOL"], forca: 87 },
      { nome: "Maicon", posicoes: ["LD"], forca: 82 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 86 },
      { nome: "Edu Dracena", posicoes: ["ZAG"], forca: 84 },
      { nome: "Leandro", posicoes: ["LE"], forca: 81 },
      { nome: "Augusto Recife", posicoes: ["VOL"], forca: 80 },
      { nome: "Maldonado", posicoes: ["MC"], forca: 82 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Alex", posicoes: ["MEI"], forca: 93 },
      { nome: "Aristizábal", posicoes: ["MEI","PE"], forca: 82 },
      { nome: "Maurinho", posicoes: ["PD"], forca: 80 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 88 },
      { nome: "Mota", posicoes: ["ATA"], forca: 82 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { nome: "Maurinho", posicoes: ["LD"], forca: 81 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { nome: "André Luís", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["LE"], forca: 84 },
      { nome: "Paulo Almeida", posicoes: ["VOL"], forca: 80 },
      { nome: "Renato", posicoes: ["MC"], forca: 85 },
      { nome: "Elano", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego", posicoes: ["MEI"], forca: 90 },
      { nome: "Robinho", posicoes: ["ATA","PE"], forca: 90 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 86 },
      { nome: "Alberto", posicoes: ["ATA"], forca: 77 },
      { nome: "Léo Lima", posicoes: ["MEI"], forca: 79 },
      { nome: "William", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 88 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 85 },
      { nome: "Diego Lugano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 81 },
      { nome: "Mineiro", posicoes: ["VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 81 },
      { nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Luís Fabiano", posicoes: ["ATA"], forca: 89 },
      { nome: "Grafite", posicoes: ["ATA"], forca: 82 },
      { nome: "França", posicoes: ["ATA"], forca: 85 },
      { nome: "Reinaldo", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "São Caetano",
    jogadores: [
      { nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 82 },
      { nome: "Russo", posicoes: ["LD"], forca: 81 },
      { nome: "Daniel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dininho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rubens Cardoso", posicoes: ["LE"], forca: 81 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 86 },
      { nome: "Aílton", posicoes: ["MC"], forca: 82 },
      { nome: "Adãozinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Anaílson", posicoes: ["MEI"], forca: 81 },
      { nome: "Wágner", posicoes: ["MC"], forca: 78 },
      { nome: "Somália", posicoes: ["ATA"], forca: 85 },
      { nome: "Adhemar", posicoes: ["ATA"], forca: 86 },
      { nome: "Warley", posicoes: ["ATA"], forca: 79 },
      { nome: "Esquerdinha", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Coritiba",
    jogadores: [
      { nome: "Fernando", posicoes: ["GOL"], forca: 80 },
      { nome: "César Prates", posicoes: ["LD"], forca: 80 },
      { nome: "Danilo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Reginaldo Nascimento", posicoes: ["ZAG"], forca: 79 },
      { nome: "Vicente", posicoes: ["LE"], forca: 79 },
      { nome: "Roberto Brum", posicoes: ["VOL"], forca: 80 },
      { nome: "Tcheco", posicoes: ["MC"], forca: 82 },
      { nome: "Lima", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "Jackson", posicoes: ["MEI"], forca: 80 },
      { nome: "Marcel", posicoes: ["ATA"], forca: 82 },
      { nome: "Da Silva", posicoes: ["ATA"], forca: 80 },
      { nome: "Edu Sales", posicoes: ["ATA"], forca: 77 },
      { nome: "Adriano", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2003,
    clube: "Internacional",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 82 },
      { nome: "Élder Granja", posicoes: ["LD"], forca: 80 },
      { nome: "Índio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vinícius", posicoes: ["ZAG"], forca: 78 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { nome: "Edinho", posicoes: ["VOL"], forca: 79 },
      { nome: "Magrão", posicoes: ["MC"], forca: 80 },
      { nome: "Diogo Rincón", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Alex", posicoes: ["MEI"], forca: 84 },
      { nome: "Daniel Carvalho", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Wellington", posicoes: ["PD"], forca: 77 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 85 },
      { nome: "Diego", posicoes: ["ATA"], forca: 77 },
      { nome: "Fernandão", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 2002 =====

  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Santos",
    jogadores: [
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 85 },
      { nome: "Maurinho", posicoes: ["LD"], forca: 81 },
      { nome: "Alex", posicoes: ["ZAG"], forca: 86 },
      { nome: "André Luís", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["LE"], forca: 84 },
      { nome: "Paulo Almeida", posicoes: ["VOL"], forca: 80 },
      { nome: "Renato", posicoes: ["MC"], forca: 85 },
      { nome: "Elano", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Diego", posicoes: ["MEI"], forca: 90 },
      { nome: "Robinho", posicoes: ["ATA","PE"], forca: 90 },
      { nome: "Ricardo Oliveira", posicoes: ["ATA"], forca: 86 },
      { nome: "Alberto", posicoes: ["ATA"], forca: 77 },
      { nome: "Léo Lima", posicoes: ["MEI"], forca: 79 },
      { nome: "William", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Fábio Costa", posicoes: ["GOL"], forca: 82 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 82 },
      { nome: "Anderson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Betão", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 80 },
      { nome: "Marcelo Mattos", posicoes: ["VOL"], forca: 84 },
      { nome: "Vampeta", posicoes: ["MC"], forca: 85 },
      { nome: "Renato", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 87 },
      { nome: "Carlos Alberto", posicoes: ["MEI"], forca: 82 },
      { nome: "Tevez", posicoes: ["ATA"], forca: 92 },
      { nome: "Nilmar", posicoes: ["ATA"], forca: 86 },
      { nome: "Gil", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Anderson Lima", posicoes: ["LD"], forca: 82 },
      { nome: "Polga", posicoes: ["ZAG"], forca: 82 },
      { nome: "Claudiomiro", posicoes: ["ZAG"], forca: 78 },
      { nome: "Roger", posicoes: ["LE"], forca: 81 },
      { nome: "Tinga", posicoes: ["VOL"], forca: 84 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 79 },
      { nome: "Fábio Rochemback", posicoes: ["MC"], forca: 80 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Carlos Miguel", posicoes: ["MEI"], forca: 80 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 86 },
      { nome: "Luís Mário", posicoes: ["ATA"], forca: 80 },
      { nome: "Warley", posicoes: ["ATA"], forca: 78 },
      { nome: "Christian", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Fluminense",
    jogadores: [
      { nome: "Murilo", posicoes: ["GOL"], forca: 80 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 79 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 79 },
      { nome: "César", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo César", posicoes: ["LE"], forca: 78 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 81 },
      { nome: "Fernando Diniz", posicoes: ["MC"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 86 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { nome: "Ramon", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 86 },
      { nome: "Roni", posicoes: ["ATA"], forca: 84 },
      { nome: "Tuta", posicoes: ["ATA"], forca: 80 },
      { nome: "Alex Dias", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 88 },
      { nome: "Cicinho", posicoes: ["LD"], forca: 85 },
      { nome: "Diego Lugano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gustavo Nery", posicoes: ["LE"], forca: 81 },
      { nome: "Mineiro", posicoes: ["VOL"], forca: 82 },
      { nome: "Josué", posicoes: ["VOL"], forca: 81 },
      { nome: "Júlio Baptista", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Kaká", posicoes: ["MEI"], forca: 89 },
      { nome: "Danilo", posicoes: ["MEI"], forca: 82 },
      { nome: "Luís Fabiano", posicoes: ["ATA"], forca: 89 },
      { nome: "Grafite", posicoes: ["ATA"], forca: 82 },
      { nome: "França", posicoes: ["ATA"], forca: 85 },
      { nome: "Reinaldo", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2002,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { nome: "Mancini", posicoes: ["LD"], forca: 85 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dedê", posicoes: ["LE"], forca: 80 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 87 },
      { nome: "Lincoln", posicoes: ["MC"], forca: 82 },
      { nome: "Valdo", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 84 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 88 },
      { nome: "Marques", posicoes: ["ATA"], forca: 87 },
      { nome: "Alex Alves", posicoes: ["ATA"], forca: 84 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 2001 =====

  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 80 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 79 },
      { nome: "Nem", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gustavo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Kleber", posicoes: ["LE"], forca: 80 },
      { nome: "Cocito", posicoes: ["VOL"], forca: 82 },
      { nome: "Kléberson", posicoes: ["MC"], forca: 85 },
      { nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Fernandinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Alex Mineiro", posicoes: ["PD"], forca: 88 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 82 },
      { nome: "Ilán", posicoes: ["ATA"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["ATA"], forca: 80 },
      { nome: "Ivan", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "São Caetano",
    jogadores: [
      { nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 82 },
      { nome: "Russo", posicoes: ["LD"], forca: 81 },
      { nome: "Daniel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dininho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rubens Cardoso", posicoes: ["LE"], forca: 81 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 86 },
      { nome: "Aílton", posicoes: ["MC"], forca: 82 },
      { nome: "Adãozinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Anaílson", posicoes: ["MEI"], forca: 81 },
      { nome: "Wágner", posicoes: ["MC"], forca: 78 },
      { nome: "Somália", posicoes: ["ATA"], forca: 85 },
      { nome: "Adhemar", posicoes: ["ATA"], forca: 86 },
      { nome: "Warley", posicoes: ["ATA"], forca: 79 },
      { nome: "Esquerdinha", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { nome: "Mancini", posicoes: ["LD"], forca: 85 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dedê", posicoes: ["LE"], forca: 80 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 87 },
      { nome: "Lincoln", posicoes: ["MC"], forca: 82 },
      { nome: "Valdo", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 84 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 88 },
      { nome: "Marques", posicoes: ["ATA"], forca: 87 },
      { nome: "Alex Alves", posicoes: ["ATA"], forca: 84 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Fluminense",
    jogadores: [
      { nome: "Murilo", posicoes: ["GOL"], forca: 80 },
      { nome: "Gabriel", posicoes: ["LD"], forca: 79 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 79 },
      { nome: "César", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo César", posicoes: ["LE"], forca: 78 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 81 },
      { nome: "Fernando Diniz", posicoes: ["MC"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 86 },
      { nome: "Petkovic", posicoes: ["MEI"], forca: 86 },
      { nome: "Ramon", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 86 },
      { nome: "Roni", posicoes: ["ATA"], forca: 84 },
      { nome: "Tuta", posicoes: ["ATA"], forca: 80 },
      { nome: "Alex Dias", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Anderson Lima", posicoes: ["LD"], forca: 82 },
      { nome: "Polga", posicoes: ["ZAG"], forca: 82 },
      { nome: "Claudiomiro", posicoes: ["ZAG"], forca: 78 },
      { nome: "Roger", posicoes: ["LE"], forca: 81 },
      { nome: "Tinga", posicoes: ["VOL"], forca: 84 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 79 },
      { nome: "Fábio Rochemback", posicoes: ["MC"], forca: 80 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Carlos Miguel", posicoes: ["MEI"], forca: 80 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 86 },
      { nome: "Luís Mário", posicoes: ["ATA"], forca: 80 },
      { nome: "Warley", posicoes: ["ATA"], forca: 78 },
      { nome: "Christian", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2001,
    clube: "Vasco",
    jogadores: [
      { nome: "Hélton", posicoes: ["GOL"], forca: 86 },
      { nome: "Jorginho Paulista", posicoes: ["LD"], forca: 80 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Felipe", posicoes: ["LE"], forca: 87 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 89 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 87 },
      { nome: "Juninho Paulista", posicoes: ["MEI"], forca: 87 },
      { nome: "Viola", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Romário", posicoes: ["ATA"], forca: 91 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { nome: "Euller", posicoes: ["ATA"], forca: 84 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 82 }
    ]
  },

  // ===== Edição 2000 =====

  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Vasco",
    jogadores: [
      { nome: "Hélton", posicoes: ["GOL"], forca: 86 },
      { nome: "Jorginho Paulista", posicoes: ["LD"], forca: 80 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Felipe", posicoes: ["LE"], forca: 87 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 89 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 87 },
      { nome: "Juninho Paulista", posicoes: ["MEI"], forca: 87 },
      { nome: "Viola", posicoes: ["MEI","ATA"], forca: 82 },
      { nome: "Romário", posicoes: ["ATA"], forca: 91 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { nome: "Euller", posicoes: ["ATA"], forca: 84 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "São Caetano",
    jogadores: [
      { nome: "Sílvio Luiz", posicoes: ["GOL"], forca: 82 },
      { nome: "Russo", posicoes: ["LD"], forca: 81 },
      { nome: "Daniel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dininho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rubens Cardoso", posicoes: ["LE"], forca: 81 },
      { nome: "Marcos Senna", posicoes: ["VOL"], forca: 86 },
      { nome: "Aílton", posicoes: ["MC"], forca: 82 },
      { nome: "Adãozinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Anaílson", posicoes: ["MEI"], forca: 81 },
      { nome: "Wágner", posicoes: ["MC"], forca: 78 },
      { nome: "Somália", posicoes: ["ATA"], forca: 85 },
      { nome: "Adhemar", posicoes: ["ATA"], forca: 86 },
      { nome: "Warley", posicoes: ["ATA"], forca: 79 },
      { nome: "Esquerdinha", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 88 },
      { nome: "Nonato", posicoes: ["LD"], forca: 79 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Sorín", posicoes: ["LE"], forca: 85 },
      { nome: "Ricardinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Valdo", posicoes: ["MC"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "Muller", posicoes: ["PD"], forca: 82 },
      { nome: "Geovanni", posicoes: ["PE"], forca: 84 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 87 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Fábio Júnior", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 80 },
      { nome: "Alessandro", posicoes: ["LD"], forca: 79 },
      { nome: "Nem", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gustavo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Kleber", posicoes: ["LE"], forca: 80 },
      { nome: "Cocito", posicoes: ["VOL"], forca: 82 },
      { nome: "Kléberson", posicoes: ["MC"], forca: 85 },
      { nome: "Adriano Gabiru", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Fernandinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Alex Mineiro", posicoes: ["PD"], forca: 88 },
      { nome: "Kléber Pereira", posicoes: ["ATA"], forca: 82 },
      { nome: "Ilán", posicoes: ["ATA"], forca: 82 },
      { nome: "Dagoberto", posicoes: ["ATA"], forca: 80 },
      { nome: "Ivan", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { nome: "Arce", posicoes: ["LD"], forca: 87 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 2000,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 82 },
      { nome: "Anderson Lima", posicoes: ["LD"], forca: 82 },
      { nome: "Polga", posicoes: ["ZAG"], forca: 82 },
      { nome: "Claudiomiro", posicoes: ["ZAG"], forca: 78 },
      { nome: "Roger", posicoes: ["LE"], forca: 81 },
      { nome: "Tinga", posicoes: ["VOL"], forca: 84 },
      { nome: "Fernando", posicoes: ["VOL"], forca: 79 },
      { nome: "Fábio Rochemback", posicoes: ["MC"], forca: 80 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Carlos Miguel", posicoes: ["MEI"], forca: 80 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 86 },
      { nome: "Luís Mário", posicoes: ["ATA"], forca: 80 },
      { nome: "Warley", posicoes: ["ATA"], forca: 78 },
      { nome: "Christian", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1999 =====

  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 89 },
      { nome: "Índio", posicoes: ["LD"], forca: 79 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 85 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 81 },
      { nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { nome: "Vampeta", posicoes: ["VOL"], forca: 87 },
      { nome: "Freddy Rincón", posicoes: ["MC"], forca: 86 },
      { nome: "Edu", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 91 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 86 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 87 },
      { nome: "Luizão", posicoes: ["ATA"], forca: 88 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 79 },
      { nome: "Fernando Baiano", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 84 },
      { nome: "Mancini", posicoes: ["LD"], forca: 85 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dedê", posicoes: ["LE"], forca: 80 },
      { nome: "Gilberto Silva", posicoes: ["VOL"], forca: 87 },
      { nome: "Lincoln", posicoes: ["MC"], forca: 82 },
      { nome: "Valdo", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 84 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 88 },
      { nome: "Marques", posicoes: ["ATA"], forca: 87 },
      { nome: "Alex Alves", posicoes: ["ATA"], forca: 84 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Vitória",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Carlos", posicoes: ["LD"], forca: 79 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Alex Alves", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gil Baiano", posicoes: ["LE"], forca: 79 },
      { nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 82 },
      { nome: "Paulo Isidoro", posicoes: ["MC"], forca: 82 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 85 },
      { nome: "Bebeto Campos", posicoes: ["MEI"], forca: 79 },
      { nome: "Oséas", posicoes: ["PD"], forca: 80 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { nome: "Pichetti", posicoes: ["ATA"], forca: 80 },
      { nome: "Nadson", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "São Paulo",
    jogadores: [
      { nome: "Rogério Ceni", posicoes: ["GOL"], forca: 85 },
      { nome: "Belletti", posicoes: ["LD"], forca: 82 },
      { nome: "Edmílson", posicoes: ["ZAG"], forca: 85 },
      { nome: "Rogério Pinheiro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Fábio Aurélio", posicoes: ["LE"], forca: 82 },
      { nome: "Alexandre", posicoes: ["VOL"], forca: 79 },
      { nome: "Beto", posicoes: ["MC"], forca: 81 },
      { nome: "Souza", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Raí", posicoes: ["MEI"], forca: 87 },
      { nome: "Denílson", posicoes: ["MEI","PE"], forca: 86 },
      { nome: "França", posicoes: ["ATA"], forca: 87 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 84 },
      { nome: "Aristizábal", posicoes: ["ATA"], forca: 81 },
      { nome: "Sandro Hiroshi", posicoes: ["ATA","PE"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { nome: "Arce", posicoes: ["LD"], forca: 87 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1999,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 88 },
      { nome: "Nonato", posicoes: ["LD"], forca: 79 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Sorín", posicoes: ["LE"], forca: 85 },
      { nome: "Ricardinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Valdo", posicoes: ["MC"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "Muller", posicoes: ["PD"], forca: 82 },
      { nome: "Geovanni", posicoes: ["PE"], forca: 84 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 87 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Fábio Júnior", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1998 =====

  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Corinthians",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 89 },
      { nome: "Índio", posicoes: ["LD"], forca: 79 },
      { nome: "Fábio Luciano", posicoes: ["ZAG"], forca: 85 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 81 },
      { nome: "Kléber", posicoes: ["LE"], forca: 84 },
      { nome: "Vampeta", posicoes: ["VOL"], forca: 87 },
      { nome: "Freddy Rincón", posicoes: ["MC"], forca: 86 },
      { nome: "Edu", posicoes: ["MC","MEI"], forca: 82 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 91 },
      { nome: "Ricardinho", posicoes: ["MEI"], forca: 86 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 87 },
      { nome: "Luizão", posicoes: ["ATA"], forca: 88 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 79 },
      { nome: "Fernando Baiano", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 88 },
      { nome: "Nonato", posicoes: ["LD"], forca: 79 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 82 },
      { nome: "João Carlos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Sorín", posicoes: ["LE"], forca: 85 },
      { nome: "Ricardinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Valdo", posicoes: ["MC"], forca: 84 },
      { nome: "Palhinha", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 87 },
      { nome: "Muller", posicoes: ["PD"], forca: 82 },
      { nome: "Geovanni", posicoes: ["PE"], forca: 84 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 87 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Fábio Júnior", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Santos",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 84 },
      { nome: "Baiano", posicoes: ["LD"], forca: 80 },
      { nome: "César", posicoes: ["ZAG"], forca: 79 },
      { nome: "Argel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["LE"], forca: 80 },
      { nome: "Marcos Assunção", posicoes: ["VOL"], forca: 85 },
      { nome: "Gallo", posicoes: ["MC"], forca: 81 },
      { nome: "Lúcio", posicoes: ["MEI"], forca: 80 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 88 },
      { nome: "Elano", posicoes: ["MEI","ATA"], forca: 76 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 85 },
      { nome: "Müller", posicoes: ["ATA"], forca: 82 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 80 },
      { nome: "Edu", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Portuguesa",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 82 },
      { nome: "Emerson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Capone", posicoes: ["ZAG"], forca: 79 },
      { nome: "Augusto", posicoes: ["LE"], forca: 78 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { nome: "Alex Alves", posicoes: ["MC"], forca: 79 },
      { nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 86 },
      { nome: "Caio", posicoes: ["MEI"], forca: 85 },
      { nome: "Zé Roberto", posicoes: ["PD"], forca: 85 },
      { nome: "Leandro Amaral", posicoes: ["ATA"], forca: 82 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 85 },
      { nome: "Tico", posicoes: ["ATA"], forca: 78 },
      { nome: "Rogério", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { nome: "Arce", posicoes: ["LD"], forca: 87 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1998,
    clube: "Sport",
    jogadores: [
      { nome: "Maizena", posicoes: ["GOL"], forca: 80 },
      { nome: "Russo", posicoes: ["LD"], forca: 79 },
      { nome: "Sandro Blum", posicoes: ["ZAG"], forca: 78 },
      { nome: "Érlon", posicoes: ["ZAG"], forca: 77 },
      { nome: "Chiquinho", posicoes: ["LE"], forca: 77 },
      { nome: "Leomar", posicoes: ["VOL"], forca: 80 },
      { nome: "Nildo", posicoes: ["MC"], forca: 82 },
      { nome: "Jackson", posicoes: ["MC","MEI"], forca: 81 },
      { nome: "Leonardo", posicoes: ["MEI"], forca: 80 },
      { nome: "Carlinhos Bala", posicoes: ["PD"], forca: 77 },
      { nome: "Robertinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Luís Müller", posicoes: ["ATA"], forca: 78 },
      { nome: "Heraldo", posicoes: ["ATA"], forca: 77 },
      { nome: "Adriano", posicoes: ["PE"], forca: 76 }
    ]
  },

  // ===== Edição 1997 =====

  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Vasco",
    jogadores: [
      { nome: "Carlos Germano", posicoes: ["GOL"], forca: 86 },
      { nome: "Vítor", posicoes: ["LD"], forca: 80 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Odvan", posicoes: ["ZAG"], forca: 82 },
      { nome: "Felipe", posicoes: ["LE"], forca: 86 },
      { nome: "Nasa", posicoes: ["VOL"], forca: 81 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Juninho Pernambucano", posicoes: ["MC"], forca: 88 },
      { nome: "Pedrinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Ramon", posicoes: ["MEI"], forca: 82 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 93 },
      { nome: "Evair", posicoes: ["ATA"], forca: 85 },
      { nome: "Donizete", posicoes: ["ATA"], forca: 84 },
      { nome: "Luizão", posicoes: ["PD"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Marcos", posicoes: ["GOL"], forca: 88 },
      { nome: "Arce", posicoes: ["LD"], forca: 87 },
      { nome: "Roque Júnior", posicoes: ["ZAG"], forca: 86 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Júnior", posicoes: ["LE"], forca: 82 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 86 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Alex", posicoes: ["MEI"], forca: 89 },
      { nome: "Djalminha", posicoes: ["MEI"], forca: 85 },
      { nome: "Paulo Nunes", posicoes: ["ATA","PE"], forca: 85 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 81 },
      { nome: "Euller", posicoes: ["ATA"], forca: 82 },
      { nome: "Asprilla", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Internacional",
    jogadores: [
      { nome: "André", posicoes: ["GOL"], forca: 80 },
      { nome: "César Prates", posicoes: ["LD"], forca: 82 },
      { nome: "Gamarra", posicoes: ["ZAG"], forca: 87 },
      { nome: "Aloísio", posicoes: ["ZAG"], forca: 80 },
      { nome: "Márcio Santos", posicoes: ["LE"], forca: 80 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 85 },
      { nome: "Fernando", posicoes: ["MC"], forca: 79 },
      { nome: "Fabiano", posicoes: ["MEI"], forca: 78 },
      { nome: "Christian", posicoes: ["MEI","ATA"], forca: 84 },
      { nome: "Sérgio Manoel", posicoes: ["PD"], forca: 80 },
      { nome: "Fabiano Souza", posicoes: ["ATA"], forca: 78 },
      { nome: "Celso", posicoes: ["ATA"], forca: 77 },
      { nome: "Luciano", posicoes: ["PE"], forca: 77 },
      { nome: "Müller", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Santos",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 84 },
      { nome: "Baiano", posicoes: ["LD"], forca: 80 },
      { nome: "César", posicoes: ["ZAG"], forca: 79 },
      { nome: "Argel", posicoes: ["ZAG"], forca: 80 },
      { nome: "Léo", posicoes: ["LE"], forca: 80 },
      { nome: "Marcos Assunção", posicoes: ["VOL"], forca: 85 },
      { nome: "Gallo", posicoes: ["MC"], forca: 81 },
      { nome: "Lúcio", posicoes: ["MEI"], forca: 80 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 88 },
      { nome: "Elano", posicoes: ["MEI","ATA"], forca: 76 },
      { nome: "Dodô", posicoes: ["ATA"], forca: 85 },
      { nome: "Müller", posicoes: ["ATA"], forca: 82 },
      { nome: "Deivid", posicoes: ["ATA"], forca: 80 },
      { nome: "Edu", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Flamengo",
    jogadores: [
      { nome: "Clemer", posicoes: ["GOL"], forca: 81 },
      { nome: "Marcos Adriano", posicoes: ["LD"], forca: 77 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 85 },
      { nome: "Fabiano Eller", posicoes: ["ZAG"], forca: 78 },
      { nome: "Athirson", posicoes: ["LE"], forca: 82 },
      { nome: "Leandro Ávila", posicoes: ["VOL"], forca: 80 },
      { nome: "Iranildo", posicoes: ["MC"], forca: 81 },
      { nome: "Sávio", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Romário", posicoes: ["MEI","ATA"], forca: 91 },
      { nome: "Lúcio", posicoes: ["PE"], forca: 78 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 89 },
      { nome: "Rodrigo Mendes", posicoes: ["ATA"], forca: 79 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1997,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Taffarel", posicoes: ["GOL"], forca: 86 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Doriva", posicoes: ["MC"], forca: 81 },
      { nome: "Éder", posicoes: ["MEI"], forca: 85 },
      { nome: "Renaldo", posicoes: ["MEI"], forca: 82 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { nome: "Valdir Bigode", posicoes: ["ATA"], forca: 81 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 80 }
    ]
  },

  // ===== Edição 1996 =====

  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Adílson Batista", posicoes: ["ZAG"], forca: 84 },
      { nome: "Rivarola", posicoes: ["ZAG"], forca: 81 },
      { nome: "Roger", posicoes: ["LE"], forca: 79 },
      { nome: "Dinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Goiano", posicoes: ["MC"], forca: 82 },
      { nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Assis", posicoes: ["MEI"], forca: 82 },
      { nome: "Arílson", posicoes: ["PD"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 86 },
      { nome: "Jardel", posicoes: ["ATA"], forca: 88 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 81 },
      { nome: "Cuca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Portuguesa",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 87 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 82 },
      { nome: "Emerson", posicoes: ["ZAG"], forca: 80 },
      { nome: "Capone", posicoes: ["ZAG"], forca: 79 },
      { nome: "Augusto", posicoes: ["LE"], forca: 78 },
      { nome: "Galeano", posicoes: ["VOL"], forca: 80 },
      { nome: "Alex Alves", posicoes: ["MC"], forca: 79 },
      { nome: "Rodrigo Fabri", posicoes: ["MEI"], forca: 86 },
      { nome: "Caio", posicoes: ["MEI"], forca: 85 },
      { nome: "Zé Roberto", posicoes: ["PD"], forca: 85 },
      { nome: "Leandro Amaral", posicoes: ["ATA"], forca: 82 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 85 },
      { nome: "Tico", posicoes: ["ATA"], forca: 78 },
      { nome: "Rogério", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Taffarel", posicoes: ["GOL"], forca: 86 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 79 },
      { nome: "Cláudio Caçapa", posicoes: ["ZAG"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dedê", posicoes: ["LE"], forca: 78 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 80 },
      { nome: "Doriva", posicoes: ["MC"], forca: 81 },
      { nome: "Éder", posicoes: ["MEI"], forca: 85 },
      { nome: "Renaldo", posicoes: ["MEI"], forca: 82 },
      { nome: "Guilherme", posicoes: ["PD"], forca: 85 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 82 },
      { nome: "Marques", posicoes: ["ATA"], forca: 84 },
      { nome: "Valdir Bigode", posicoes: ["ATA"], forca: 81 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Goiás",
    jogadores: [
      { nome: "Harlei", posicoes: ["GOL"], forca: 84 },
      { nome: "Vitor", posicoes: ["LD"], forca: 78 },
      { nome: "André Dias", posicoes: ["ZAG"], forca: 80 },
      { nome: "Fabão", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Baier", posicoes: ["LE"], forca: 81 },
      { nome: "Josué", posicoes: ["VOL"], forca: 82 },
      { nome: "Danilo", posicoes: ["MC"], forca: 82 },
      { nome: "Túlio", posicoes: ["MC","MEI"], forca: 80 },
      { nome: "Fernandão", posicoes: ["MEI"], forca: 85 },
      { nome: "Iarley", posicoes: ["MEI"], forca: 82 },
      { nome: "Araújo", posicoes: ["ATA"], forca: 86 },
      { nome: "Alex Dias", posicoes: ["ATA"], forca: 82 },
      { nome: "Dimba", posicoes: ["ATA"], forca: 84 },
      { nome: "Welliton", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { nome: "Vítor", posicoes: ["LD"], forca: 80 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 78 },
      { nome: "Nonato", posicoes: ["LE"], forca: 79 },
      { nome: "Donizete Amorim", posicoes: ["VOL"], forca: 80 },
      { nome: "Ricardinho", posicoes: ["MC"], forca: 81 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 82 },
      { nome: "Cleison", posicoes: ["PD"], forca: 79 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 86 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 80 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1996,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 87 },
      { nome: "Sérgio", posicoes: ["GOL"], forca: 77 },
      { nome: "Antônio Carlos", posicoes: ["LD"], forca: 80 },
      { nome: "Cléber", posicoes: ["ZAG"], forca: 86 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 89 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 87 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 85 },
      { nome: "Mazinho", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 90 },
      { nome: "Edílson", posicoes: ["PD"], forca: 87 },
      { nome: "Evair", posicoes: ["ATA"], forca: 90 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 }
    ]
  },

  // ===== Edição 1995 =====

  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wagner", posicoes: ["GOL"], forca: 85 },
      { nome: "Perivaldo", posicoes: ["LD"], forca: 79 },
      { nome: "Gonçalves", posicoes: ["ZAG"], forca: 86 },
      { nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "André Silva", posicoes: ["LE"], forca: 79 },
      { nome: "Leandro Ávila", posicoes: ["VOL"], forca: 82 },
      { nome: "Jamir", posicoes: ["MC"], forca: 81 },
      { nome: "Beto", posicoes: ["MEI"], forca: 84 },
      { nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 80 },
      { nome: "Sérgio Manoel", posicoes: ["PD"], forca: 85 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 91 },
      { nome: "Donizete", posicoes: ["ATA"], forca: 85 },
      { nome: "Valdeir", posicoes: ["ATA"], forca: 81 },
      { nome: "Mauricinho", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Santos",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 81 },
      { nome: "Maurício", posicoes: ["LD"], forca: 78 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 78 },
      { nome: "César", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gustavo", posicoes: ["LE"], forca: 77 },
      { nome: "Gallo", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 80 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 89 },
      { nome: "Robert", posicoes: ["MEI"], forca: 81 },
      { nome: "Macedo", posicoes: ["PD"], forca: 80 },
      { nome: "Camanducaia", posicoes: ["ATA"], forca: 79 },
      { nome: "Guga", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 85 },
      { nome: "Jamelli", posicoes: ["PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 86 },
      { nome: "Vítor", posicoes: ["LD"], forca: 80 },
      { nome: "Cris", posicoes: ["ZAG"], forca: 80 },
      { nome: "Gelson Baresi", posicoes: ["ZAG"], forca: 78 },
      { nome: "Nonato", posicoes: ["LE"], forca: 79 },
      { nome: "Donizete Amorim", posicoes: ["VOL"], forca: 80 },
      { nome: "Ricardinho", posicoes: ["MC"], forca: 81 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Roberto Gaúcho", posicoes: ["MEI"], forca: 82 },
      { nome: "Cleison", posicoes: ["PD"], forca: 79 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 86 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 80 },
      { nome: "Oséas", posicoes: ["ATA"], forca: 80 },
      { nome: "Alex Alves", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Fluminense",
    jogadores: [
      { nome: "Wellerson", posicoes: ["GOL"], forca: 79 },
      { nome: "Ronald", posicoes: ["LD"], forca: 77 },
      { nome: "César", posicoes: ["ZAG"], forca: 80 },
      { nome: "Márcio Costa", posicoes: ["ZAG"], forca: 78 },
      { nome: "Lira", posicoes: ["LE"], forca: 78 },
      { nome: "Marcão", posicoes: ["VOL"], forca: 80 },
      { nome: "Djair", posicoes: ["MC"], forca: 80 },
      { nome: "Roger", posicoes: ["MEI"], forca: 79 },
      { nome: "Aílton", posicoes: ["MEI"], forca: 81 },
      { nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Ézio", posicoes: ["ATA"], forca: 85 },
      { nome: "Magno Alves", posicoes: ["ATA"], forca: 79 },
      { nome: "Roni", posicoes: ["ATA"], forca: 78 },
      { nome: "Rogerinho", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Adílson Batista", posicoes: ["ZAG"], forca: 84 },
      { nome: "Rivarola", posicoes: ["ZAG"], forca: 81 },
      { nome: "Roger", posicoes: ["LE"], forca: 79 },
      { nome: "Dinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Goiano", posicoes: ["MC"], forca: 82 },
      { nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Assis", posicoes: ["MEI"], forca: 82 },
      { nome: "Arílson", posicoes: ["PD"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 86 },
      { nome: "Jardel", posicoes: ["ATA"], forca: 88 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 81 },
      { nome: "Cuca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1995,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 85 },
      { nome: "André Santos", posicoes: ["LD"], forca: 78 },
      { nome: "Célio Silva", posicoes: ["ZAG"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 79 },
      { nome: "Silvinho", posicoes: ["LE"], forca: 81 },
      { nome: "Zé Elias", posicoes: ["VOL"], forca: 84 },
      { nome: "Bernardo", posicoes: ["MC"], forca: 79 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 89 },
      { nome: "Souza", posicoes: ["MEI"], forca: 82 },
      { nome: "Viola", posicoes: ["ATA"], forca: 87 },
      { nome: "Marques", posicoes: ["ATA"], forca: 80 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 80 },
      { nome: "Neto", posicoes: ["PD"], forca: 85 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1994 =====

  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 87 },
      { nome: "Sérgio", posicoes: ["GOL"], forca: 77 },
      { nome: "Antônio Carlos", posicoes: ["LD"], forca: 80 },
      { nome: "Cléber", posicoes: ["ZAG"], forca: 86 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 89 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 87 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 85 },
      { nome: "Mazinho", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 90 },
      { nome: "Edílson", posicoes: ["PD"], forca: 87 },
      { nome: "Evair", posicoes: ["ATA"], forca: 90 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { nome: "Giba", posicoes: ["LD"], forca: 79 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 80 },
      { nome: "Pintado", posicoes: ["LD"], forca: 79 },
      { nome: "André Cruz", posicoes: ["ZAG"], forca: 85 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 86 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 78 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Djalminha", posicoes: ["MC"], forca: 86 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 87 },
      { nome: "Luizão", posicoes: ["MEI"], forca: 80 },
      { nome: "Tiba", posicoes: ["PD"], forca: 79 },
      { nome: "Amoroso", posicoes: ["ATA"], forca: 87 },
      { nome: "Viola", posicoes: ["ATA"], forca: 82 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 80 },
      { nome: "Clóvis", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 84 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder", posicoes: ["MEI"], forca: 86 },
      { nome: "Aílton", posicoes: ["MEI"], forca: 81 },
      { nome: "Renaldo", posicoes: ["PD"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 },
      { nome: "Marques", posicoes: ["ATA"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 81 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 80 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 79 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 78 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 79 },
      { nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { nome: "Marquinhos", posicoes: ["MEI"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 79 },
      { nome: "Charles Fabian", posicoes: ["ATA"], forca: 85 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 81 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 78 },
      { nome: "Naldinho", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1994,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1993 =====

  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Velloso", posicoes: ["GOL"], forca: 87 },
      { nome: "Sérgio", posicoes: ["GOL"], forca: 77 },
      { nome: "Antônio Carlos", posicoes: ["LD"], forca: 80 },
      { nome: "Cléber", posicoes: ["ZAG"], forca: 86 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 82 },
      { nome: "Roberto Carlos", posicoes: ["LE"], forca: 89 },
      { nome: "César Sampaio", posicoes: ["VOL"], forca: 87 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 85 },
      { nome: "Mazinho", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Rivaldo", posicoes: ["MEI"], forca: 90 },
      { nome: "Edílson", posicoes: ["PD"], forca: 87 },
      { nome: "Evair", posicoes: ["ATA"], forca: 90 },
      { nome: "Edmundo", posicoes: ["ATA"], forca: 91 },
      { nome: "Müller", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Vitória",
    jogadores: [
      { nome: "Dida", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Carlos", posicoes: ["LD"], forca: 79 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 84 },
      { nome: "Alex Alves", posicoes: ["ZAG"], forca: 78 },
      { nome: "Gil Baiano", posicoes: ["LE"], forca: 79 },
      { nome: "Roberto Cavalo", posicoes: ["VOL"], forca: 82 },
      { nome: "Paulo Isidoro", posicoes: ["MC"], forca: 82 },
      { nome: "Ramon Menezes", posicoes: ["MEI"], forca: 85 },
      { nome: "Bebeto Campos", posicoes: ["MEI"], forca: 79 },
      { nome: "Oséas", posicoes: ["PD"], forca: 80 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { nome: "Edílson", posicoes: ["ATA"], forca: 84 },
      { nome: "Pichetti", posicoes: ["ATA"], forca: 80 },
      { nome: "Nadson", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { nome: "Giba", posicoes: ["LD"], forca: 79 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Santos",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 81 },
      { nome: "Maurício", posicoes: ["LD"], forca: 78 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 78 },
      { nome: "César", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gustavo", posicoes: ["LE"], forca: 77 },
      { nome: "Gallo", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 80 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 89 },
      { nome: "Robert", posicoes: ["MEI"], forca: 81 },
      { nome: "Macedo", posicoes: ["PD"], forca: 80 },
      { nome: "Camanducaia", posicoes: ["ATA"], forca: 79 },
      { nome: "Guga", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 85 },
      { nome: "Jamelli", posicoes: ["PE"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1993,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 80 },
      { nome: "Pintado", posicoes: ["LD"], forca: 79 },
      { nome: "André Cruz", posicoes: ["ZAG"], forca: 85 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 86 },
      { nome: "Marcelo", posicoes: ["LE"], forca: 78 },
      { nome: "Amaral", posicoes: ["VOL"], forca: 82 },
      { nome: "Djalminha", posicoes: ["MC"], forca: 86 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 87 },
      { nome: "Luizão", posicoes: ["MEI"], forca: 80 },
      { nome: "Tiba", posicoes: ["PD"], forca: 79 },
      { nome: "Amoroso", posicoes: ["ATA"], forca: 87 },
      { nome: "Viola", posicoes: ["ATA"], forca: 82 },
      { nome: "Guilherme", posicoes: ["ATA"], forca: 80 },
      { nome: "Clóvis", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 1992 =====

  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Flamengo",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 84 },
      { nome: "Charles Guerreiro", posicoes: ["LD"], forca: 78 },
      { nome: "Rondinelli", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 82 },
      { nome: "Piá", posicoes: ["LE"], forca: 77 },
      { nome: "Uidemar", posicoes: ["VOL"], forca: 80 },
      { nome: "Júnior", posicoes: ["MC"], forca: 87 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Gaúcho", posicoes: ["PD"], forca: 82 },
      { nome: "Nélio", posicoes: ["ATA"], forca: 80 },
      { nome: "Djalminha", posicoes: ["ATA"], forca: 81 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wagner", posicoes: ["GOL"], forca: 85 },
      { nome: "Perivaldo", posicoes: ["LD"], forca: 79 },
      { nome: "Gonçalves", posicoes: ["ZAG"], forca: 86 },
      { nome: "Wilson Gottardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "André Silva", posicoes: ["LE"], forca: 79 },
      { nome: "Leandro Ávila", posicoes: ["VOL"], forca: 82 },
      { nome: "Jamir", posicoes: ["MC"], forca: 81 },
      { nome: "Beto", posicoes: ["MEI"], forca: 84 },
      { nome: "Carlos Alberto Dias", posicoes: ["MEI"], forca: 80 },
      { nome: "Sérgio Manoel", posicoes: ["PD"], forca: 85 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 91 },
      { nome: "Donizete", posicoes: ["ATA"], forca: 85 },
      { nome: "Valdeir", posicoes: ["ATA"], forca: 81 },
      { nome: "Mauricinho", posicoes: ["PE"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 85 },
      { nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 81 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jorge Luís", posicoes: ["ZAG"], forca: 79 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { nome: "Luisinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Bismarck", posicoes: ["MC"], forca: 85 },
      { nome: "Geovani", posicoes: ["MEI"], forca: 87 },
      { nome: "William", posicoes: ["MEI"], forca: 80 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 89 },
      { nome: "Sorato", posicoes: ["ATA"], forca: 82 },
      { nome: "Valdir", posicoes: ["ATA"], forca: 80 },
      { nome: "Tita", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Bragantino",
    jogadores: [
      { nome: "Gilberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { nome: "Sílvio", posicoes: ["LE"], forca: 78 },
      { nome: "Mauro Silva", posicoes: ["VOL"], forca: 88 },
      { nome: "Tiba", posicoes: ["MC"], forca: 80 },
      { nome: "João Santos", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["PD"], forca: 78 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { nome: "Franklin", posicoes: ["ATA"], forca: 81 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1992,
    clube: "Santos",
    jogadores: [
      { nome: "Sérgio", posicoes: ["GOL"], forca: 81 },
      { nome: "Maurício", posicoes: ["LD"], forca: 78 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 78 },
      { nome: "César", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gustavo", posicoes: ["LE"], forca: 77 },
      { nome: "Gallo", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 80 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 89 },
      { nome: "Robert", posicoes: ["MEI"], forca: 81 },
      { nome: "Macedo", posicoes: ["PD"], forca: 80 },
      { nome: "Camanducaia", posicoes: ["ATA"], forca: 79 },
      { nome: "Guga", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 85 },
      { nome: "Jamelli", posicoes: ["PE"], forca: 82 }
    ]
  },

  // ===== Edição 1991 =====

  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Bragantino",
    jogadores: [
      { nome: "Gilberto", posicoes: ["GOL"], forca: 82 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { nome: "Márcio Santos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { nome: "Sílvio", posicoes: ["LE"], forca: 78 },
      { nome: "Mauro Silva", posicoes: ["VOL"], forca: 88 },
      { nome: "Tiba", posicoes: ["MC"], forca: 80 },
      { nome: "João Santos", posicoes: ["MC","MEI"], forca: 79 },
      { nome: "Mazinho Oliveira", posicoes: ["MEI"], forca: 81 },
      { nome: "Marco Antônio", posicoes: ["PD"], forca: 78 },
      { nome: "Túlio Maravilha", posicoes: ["ATA"], forca: 85 },
      { nome: "Franklin", posicoes: ["ATA"], forca: 81 },
      { nome: "Paulinho McLaren", posicoes: ["ATA"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 84 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder", posicoes: ["MEI"], forca: 86 },
      { nome: "Aílton", posicoes: ["MEI"], forca: 81 },
      { nome: "Renaldo", posicoes: ["PD"], forca: 82 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 },
      { nome: "Marques", posicoes: ["ATA"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { nome: "Giba", posicoes: ["LD"], forca: 79 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Flamengo",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 84 },
      { nome: "Charles Guerreiro", posicoes: ["LD"], forca: 78 },
      { nome: "Rondinelli", posicoes: ["ZAG"], forca: 79 },
      { nome: "Júnior Baiano", posicoes: ["ZAG"], forca: 82 },
      { nome: "Piá", posicoes: ["LE"], forca: 77 },
      { nome: "Uidemar", posicoes: ["VOL"], forca: 80 },
      { nome: "Júnior", posicoes: ["MC"], forca: 87 },
      { nome: "Zinho", posicoes: ["MC","MEI"], forca: 86 },
      { nome: "Marcelinho Carioca", posicoes: ["MEI"], forca: 82 },
      { nome: "Renato Gaúcho", posicoes: ["MEI","ATA"], forca: 89 },
      { nome: "Gaúcho", posicoes: ["PD"], forca: 82 },
      { nome: "Nélio", posicoes: ["ATA"], forca: 80 },
      { nome: "Djalminha", posicoes: ["ATA"], forca: 81 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1991,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 85 },
      { nome: "Luis Carlos Winck", posicoes: ["LD"], forca: 81 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Jorge Luís", posicoes: ["ZAG"], forca: 79 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { nome: "Luisinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Bismarck", posicoes: ["MC"], forca: 85 },
      { nome: "Geovani", posicoes: ["MEI"], forca: 87 },
      { nome: "William", posicoes: ["MEI"], forca: 80 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 89 },
      { nome: "Sorato", posicoes: ["ATA"], forca: 82 },
      { nome: "Valdir", posicoes: ["ATA"], forca: 80 },
      { nome: "Tita", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 1990 =====

  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ronaldo Giovanelli", posicoes: ["GOL"], forca: 87 },
      { nome: "Giba", posicoes: ["LD"], forca: 79 },
      { nome: "Marcelo Djian", posicoes: ["ZAG"], forca: 84 },
      { nome: "Guinei", posicoes: ["ZAG"], forca: 80 },
      { nome: "Jacenir", posicoes: ["LE"], forca: 78 },
      { nome: "Márcio Bittencourt", posicoes: ["VOL"], forca: 82 },
      { nome: "Wilson Mano", posicoes: ["MC"], forca: 81 },
      { nome: "Neto", posicoes: ["MEI"], forca: 92 },
      { nome: "Tupãzinho", posicoes: ["MEI"], forca: 85 },
      { nome: "Fabinho", posicoes: ["MC"], forca: 79 },
      { nome: "Mauro", posicoes: ["ATA"], forca: 80 },
      { nome: "Paulo Sérgio", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 86 },
      { nome: "Dinei", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "São Paulo",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 89 },
      { nome: "Cafu", posicoes: ["LD","MD"], forca: 90 },
      { nome: "Antônio Carlos", posicoes: ["ZAG"], forca: 87 },
      { nome: "Ronaldão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Válber", posicoes: ["ZAG"], forca: 85 },
      { nome: "Leonardo", posicoes: ["LE","ME"], forca: 88 },
      { nome: "Pintado", posicoes: ["VOL"], forca: 84 },
      { nome: "Dinho", posicoes: ["VOL","MC"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 87 },
      { nome: "Raí", posicoes: ["MEI"], forca: 93 },
      { nome: "Palhinha", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Müller", posicoes: ["ATA"], forca: 89 },
      { nome: "Elivélton", posicoes: ["PE"], forca: 85 },
      { nome: "Macedo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Grêmio",
    jogadores: [
      { nome: "Danrlei", posicoes: ["GOL"], forca: 85 },
      { nome: "Arce", posicoes: ["LD"], forca: 84 },
      { nome: "Adílson Batista", posicoes: ["ZAG"], forca: 84 },
      { nome: "Rivarola", posicoes: ["ZAG"], forca: 81 },
      { nome: "Roger", posicoes: ["LE"], forca: 79 },
      { nome: "Dinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Goiano", posicoes: ["MC"], forca: 82 },
      { nome: "Carlos Miguel", posicoes: ["MC","MEI"], forca: 85 },
      { nome: "Assis", posicoes: ["MEI"], forca: 82 },
      { nome: "Arílson", posicoes: ["PD"], forca: 82 },
      { nome: "Paulo Nunes", posicoes: ["PE"], forca: 86 },
      { nome: "Jardel", posicoes: ["ATA"], forca: 88 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 81 },
      { nome: "Cuca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 81 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 80 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 79 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 78 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 79 },
      { nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 86 },
      { nome: "Marquinhos", posicoes: ["MEI"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 79 },
      { nome: "Charles Fabian", posicoes: ["ATA"], forca: 85 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 81 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 78 },
      { nome: "Naldinho", posicoes: ["PE"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1990,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 85 },
      { nome: "Toninho", posicoes: ["LD"], forca: 78 },
      { nome: "Tonhão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vladimir", posicoes: ["LE"], forca: 79 },
      { nome: "Lima", posicoes: ["VOL"], forca: 79 },
      { nome: "César Sampaio", posicoes: ["MC"], forca: 82 },
      { nome: "Tato", posicoes: ["MEI"], forca: 80 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Mirandinha", posicoes: ["PD"], forca: 80 },
      { nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 79 },
      { nome: "Gaúcho", posicoes: ["ATA"], forca: 80 },
      { nome: "Nei", posicoes: ["PE"], forca: 78 }
    ]
  },

  // ===== Edição 1989 =====

  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { nome: "William", posicoes: ["MEI"], forca: 82 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { nome: "Tita", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { nome: "Pita", posicoes: ["MC"], forca: 87 },
      { nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { nome: "Renato", posicoes: ["PD"], forca: 85 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 80 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 79 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 80 },
      { nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { nome: "Charles", posicoes: ["MC"], forca: 84 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 89 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 80 },
      { nome: "Marquinhos", posicoes: ["PE"], forca: 81 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { nome: "Naldinho", posicoes: ["ATA"], forca: 79 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { nome: "China", posicoes: ["VOL"], forca: 81 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1989,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Jair", posicoes: ["PE"], forca: 79 },
      { nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1988 =====

  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 80 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 79 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 80 },
      { nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { nome: "Charles", posicoes: ["MC"], forca: 84 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 89 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 80 },
      { nome: "Marquinhos", posicoes: ["PE"], forca: 81 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { nome: "Naldinho", posicoes: ["ATA"], forca: 79 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Jair", posicoes: ["PE"], forca: 79 },
      { nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Fluminense",
    jogadores: [
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 86 },
      { nome: "Aldo", posicoes: ["LD"], forca: 80 },
      { nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 88 },
      { nome: "Duílio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Branco", posicoes: ["LE"], forca: 87 },
      { nome: "Jandir", posicoes: ["VOL"], forca: 82 },
      { nome: "Deley", posicoes: ["MC"], forca: 87 },
      { nome: "Renato", posicoes: ["MC"], forca: 86 },
      { nome: "Washington", posicoes: ["MEI"], forca: 87 },
      { nome: "Assis", posicoes: ["MEI"], forca: 88 },
      { nome: "Tato", posicoes: ["PD"], forca: 82 },
      { nome: "Romerito", posicoes: ["PE"], forca: 87 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 85 },
      { nome: "T Washington", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Zetti", posicoes: ["GOL"], forca: 85 },
      { nome: "Rosemiro", posicoes: ["LD"], forca: 80 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 85 },
      { nome: "Márcio Alcântara", posicoes: ["ZAG"], forca: 81 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 81 },
      { nome: "Lima", posicoes: ["VOL"], forca: 80 },
      { nome: "Jorginho Putinatti", posicoes: ["MC"], forca: 85 },
      { nome: "Mendel", posicoes: ["MC"], forca: 79 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 86 },
      { nome: "Zinho", posicoes: ["MEI"], forca: 84 },
      { nome: "Mirandinha", posicoes: ["PD"], forca: 81 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 85 },
      { nome: "Evair", posicoes: ["ATA"], forca: 87 },
      { nome: "Careca Bianchezi", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { nome: "China", posicoes: ["VOL"], forca: 81 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1988,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1987 =====

  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Sport",
    jogadores: [
      { nome: "Flávio", posicoes: ["GOL"], forca: 80 },
      { nome: "Betão", posicoes: ["LD"], forca: 78 },
      { nome: "Júnior", posicoes: ["ZAG"], forca: 79 },
      { nome: "Estevam", posicoes: ["ZAG"], forca: 78 },
      { nome: "Ribamar", posicoes: ["LE"], forca: 77 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 80 },
      { nome: "Neto", posicoes: ["MC"], forca: 82 },
      { nome: "Marco Antônio", posicoes: ["MC"], forca: 79 },
      { nome: "Robertinho", posicoes: ["MEI"], forca: 80 },
      { nome: "Rogério", posicoes: ["PD"], forca: 78 },
      { nome: "Édson", posicoes: ["PE"], forca: 78 },
      { nome: "Nando", posicoes: ["ATA"], forca: 82 },
      { nome: "Rivaldo", posicoes: ["ATA"], forca: 78 },
      { nome: "Gena", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { nome: "China", posicoes: ["MC"], forca: 80 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { nome: "Neto", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Jair", posicoes: ["PE"], forca: 79 },
      { nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1987,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Carlos Gomes", posicoes: ["GOL"], forca: 80 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { nome: "Geraldão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nonato", posicoes: ["LE"], forca: 80 },
      { nome: "Douglas", posicoes: ["VOL"], forca: 79 },
      { nome: "Eduardo Amorim", posicoes: ["MC"], forca: 82 },
      { nome: "Balu", posicoes: ["MC"], forca: 79 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 86 },
      { nome: "Careca", posicoes: ["MEI"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 85 },
      { nome: "Tostão II", posicoes: ["PE"], forca: 79 },
      { nome: "Marcelo Ramos", posicoes: ["ATA"], forca: 78 },
      { nome: "Hamilton", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1986 =====

  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { nome: "Pita", posicoes: ["MC"], forca: 87 },
      { nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { nome: "Renato", posicoes: ["PD"], forca: 85 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { nome: "China", posicoes: ["MC"], forca: 80 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { nome: "Neto", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "América-RJ",
    jogadores: [
      { nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 82 },
      { nome: "Jorginho", posicoes: ["LD"], forca: 84 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Duílio", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gilberto", posicoes: ["LE"], forca: 78 },
      { nome: "Gilson Gênio", posicoes: ["VOL"], forca: 80 },
      { nome: "Aílton", posicoes: ["MC"], forca: 80 },
      { nome: "Donizete", posicoes: ["MC"], forca: 79 },
      { nome: "Edu Coimbra", posicoes: ["MEI"], forca: 87 },
      { nome: "Luisinho Lemos", posicoes: ["MEI"], forca: 81 },
      { nome: "Chiquinho", posicoes: ["PD"], forca: 78 },
      { nome: "João Carlos", posicoes: ["PE"], forca: 78 },
      { nome: "Tita", posicoes: ["ATA"], forca: 84 },
      { nome: "Gilberto Oliveira", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1986,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Jair", posicoes: ["PE"], forca: 79 },
      { nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1985 =====

  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Coritiba",
    jogadores: [
      { nome: "Rafael", posicoes: ["GOL"], forca: 82 },
      { nome: "André", posicoes: ["LD"], forca: 79 },
      { nome: "Vavá", posicoes: ["ZAG"], forca: 81 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dida", posicoes: ["LE"], forca: 78 },
      { nome: "Toby", posicoes: ["VOL"], forca: 80 },
      { nome: "Aladim", posicoes: ["MC"], forca: 80 },
      { nome: "Lela", posicoes: ["MC"], forca: 86 },
      { nome: "Pachequinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Édson", posicoes: ["MEI"], forca: 79 },
      { nome: "Marildo", posicoes: ["PD"], forca: 79 },
      { nome: "Tostão", posicoes: ["PE"], forca: 78 },
      { nome: "Índio", posicoes: ["ATA"], forca: 82 },
      { nome: "Marco Aurélio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Bangu",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 86 },
      { nome: "Ado", posicoes: ["LD"], forca: 80 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ronaldo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marinho", posicoes: ["LE"], forca: 82 },
      { nome: "Mário", posicoes: ["VOL"], forca: 81 },
      { nome: "Arturzinho", posicoes: ["MC"], forca: 88 },
      { nome: "Adozinho", posicoes: ["MC"], forca: 82 },
      { nome: "Lulinha", posicoes: ["MEI"], forca: 80 },
      { nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 81 },
      { nome: "Gilson Gênio", posicoes: ["PE"], forca: 80 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 87 },
      { nome: "Israel", posicoes: ["ATA"], forca: 82 },
      { nome: "Toinzinho", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Brasil de Pelotas",
    jogadores: [
      { nome: "João Luis", posicoes: ["GOL"], forca: 82 },
      { nome: "Nei Dias", posicoes: ["LD"], forca: 78 },
      { nome: "Jorge Batata", posicoes: ["LE"], forca: 78 },
      { nome: "Silva", posicoes: ["ZAG"], forca: 80 },
      { nome: "Hélio", posicoes: ["ZAG"], forca: 80 },
      { nome: "Doraci", posicoes: ["VOL"], forca: 82 },
      { nome: "Chiquinho", posicoes: ["MC"], forca: 80 },
      { nome: "Alamir", posicoes: ["MC"], forca: 80 },
      { nome: "Lívio", posicoes: ["MEI"], forca: 82 },
      { nome: "Júnior Brasília", posicoes: ["MEI"], forca: 85 },
      { nome: "Valdoir", posicoes: ["PD"], forca: 78 },
      { nome: "Mano", posicoes: ["PE"], forca: 78 },
      { nome: "Bira", posicoes: ["ATA"], forca: 86 },
      { nome: "Canhotinho", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Jair", posicoes: ["PE"], forca: 79 },
      { nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1985,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },

  // ===== Edição 1984 =====

  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Fluminense",
    jogadores: [
      { nome: "Paulo Victor", posicoes: ["GOL"], forca: 86 },
      { nome: "Aldo", posicoes: ["LD"], forca: 80 },
      { nome: "Ricardo Gomes", posicoes: ["ZAG"], forca: 88 },
      { nome: "Duílio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Branco", posicoes: ["LE"], forca: 87 },
      { nome: "Jandir", posicoes: ["VOL"], forca: 82 },
      { nome: "Deley", posicoes: ["MC"], forca: 87 },
      { nome: "Renato", posicoes: ["MC"], forca: 86 },
      { nome: "Washington", posicoes: ["MEI"], forca: 87 },
      { nome: "Assis", posicoes: ["MEI"], forca: 88 },
      { nome: "Tato", posicoes: ["PD"], forca: 82 },
      { nome: "Romerito", posicoes: ["PE"], forca: 87 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 85 },
      { nome: "T Washington", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { nome: "William", posicoes: ["MEI"], forca: 82 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { nome: "Tita", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Corinthians",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 85 },
      { nome: "Édson Boaro", posicoes: ["LD"], forca: 82 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 85 },
      { nome: "Damião", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 87 },
      { nome: "Biro-Biro", posicoes: ["VOL"], forca: 85 },
      { nome: "Zenon", posicoes: ["MC"], forca: 88 },
      { nome: "Paulo Sérgio", posicoes: ["MC"], forca: 80 },
      { nome: "Sócrates", posicoes: ["MEI"], forca: 93 },
      { nome: "Casagrande", posicoes: ["MEI"], forca: 87 },
      { nome: "Ataliba", posicoes: ["PD"], forca: 82 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 81 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { nome: "China", posicoes: ["VOL"], forca: 81 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1984,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1983 =====

  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Santos",
    jogadores: [
      { nome: "Rodella", posicoes: ["GOL"], forca: 80 },
      { nome: "Nélson", posicoes: ["LD"], forca: 78 },
      { nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Dema", posicoes: ["VOL"], forca: 80 },
      { nome: "Pita", posicoes: ["MC"], forca: 86 },
      { nome: "Lino", posicoes: ["MC"], forca: 79 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 78 },
      { nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 87 },
      { nome: "Edmar", posicoes: ["PD"], forca: 81 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 82 },
      { nome: "Juary", posicoes: ["ATA"], forca: 84 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Athletico-PR",
    jogadores: [
      { nome: "Roberto Costa", posicoes: ["GOL"], forca: 80 },
      { nome: "Jorge Luís", posicoes: ["LD"], forca: 78 },
      { nome: "Rogério", posicoes: ["ZAG"], forca: 79 },
      { nome: "Djalma", posicoes: ["ZAG"], forca: 78 },
      { nome: "Nivaldo", posicoes: ["LE"], forca: 77 },
      { nome: "Assis", posicoes: ["VOL"], forca: 80 },
      { nome: "Lico", posicoes: ["MC"], forca: 80 },
      { nome: "Serginho", posicoes: ["MC"], forca: 78 },
      { nome: "Paulo Rink", posicoes: ["MEI"], forca: 77 },
      { nome: "Édson", posicoes: ["PD"], forca: 79 },
      { nome: "Dinei", posicoes: ["PE"], forca: 77 },
      { nome: "Washington", posicoes: ["ATA"], forca: 85 },
      { nome: "Sicupira", posicoes: ["ATA"], forca: 82 },
      { nome: "Jofre", posicoes: ["ATA"], forca: 76 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Bangu",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 86 },
      { nome: "Ado", posicoes: ["LD"], forca: 80 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 88 },
      { nome: "Ronaldo", posicoes: ["ZAG"], forca: 81 },
      { nome: "Marinho", posicoes: ["LE"], forca: 82 },
      { nome: "Mário", posicoes: ["VOL"], forca: 81 },
      { nome: "Arturzinho", posicoes: ["MC"], forca: 88 },
      { nome: "Adozinho", posicoes: ["MC"], forca: 82 },
      { nome: "Lulinha", posicoes: ["MEI"], forca: 80 },
      { nome: "Paulinho Criciúma", posicoes: ["PD"], forca: 81 },
      { nome: "Gilson Gênio", posicoes: ["PE"], forca: 80 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 87 },
      { nome: "Israel", posicoes: ["ATA"], forca: 82 },
      { nome: "Toinzinho", posicoes: ["ATA"], forca: 78 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Corinthians",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 85 },
      { nome: "Édson Boaro", posicoes: ["LD"], forca: 82 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 85 },
      { nome: "Damião", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 87 },
      { nome: "Biro-Biro", posicoes: ["VOL"], forca: 85 },
      { nome: "Zenon", posicoes: ["MC"], forca: 88 },
      { nome: "Paulo Sérgio", posicoes: ["MC"], forca: 80 },
      { nome: "Sócrates", posicoes: ["MEI"], forca: 93 },
      { nome: "Casagrande", posicoes: ["MEI"], forca: 87 },
      { nome: "Ataliba", posicoes: ["PD"], forca: 82 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 81 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1983,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { nome: "China", posicoes: ["MC"], forca: 80 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { nome: "Neto", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1982 =====

  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { nome: "China", posicoes: ["VOL"], forca: 81 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Corinthians",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 85 },
      { nome: "Édson Boaro", posicoes: ["LD"], forca: 82 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 85 },
      { nome: "Damião", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 87 },
      { nome: "Biro-Biro", posicoes: ["VOL"], forca: 85 },
      { nome: "Zenon", posicoes: ["MC"], forca: 88 },
      { nome: "Paulo Sérgio", posicoes: ["MC"], forca: 80 },
      { nome: "Sócrates", posicoes: ["MEI"], forca: 93 },
      { nome: "Casagrande", posicoes: ["MEI"], forca: 87 },
      { nome: "Ataliba", posicoes: ["PD"], forca: 82 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 81 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 85 },
      { nome: "Viola", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Guarani",
    jogadores: [
      { nome: "Sérgio Neri", posicoes: ["GOL"], forca: 80 },
      { nome: "Mauro", posicoes: ["LD"], forca: 79 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 85 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Gilson", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 81 },
      { nome: "China", posicoes: ["MC"], forca: 80 },
      { nome: "Amoroso", posicoes: ["MC"], forca: 79 },
      { nome: "João Paulo", posicoes: ["MEI"], forca: 84 },
      { nome: "Evair", posicoes: ["MEI"], forca: 86 },
      { nome: "Catatau", posicoes: ["PD"], forca: 80 },
      { nome: "Neto", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 89 },
      { nome: "Chiquinho Carioca", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { nome: "Pita", posicoes: ["MC"], forca: 87 },
      { nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { nome: "Renato", posicoes: ["PD"], forca: 85 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1982,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { nome: "William", posicoes: ["MEI"], forca: 82 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { nome: "Tita", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },

  // ===== Edição 1981 =====

  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Grêmio",
    jogadores: [
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 85 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 80 },
      { nome: "De León", posicoes: ["ZAG"], forca: 89 },
      { nome: "Baidek", posicoes: ["ZAG"], forca: 82 },
      { nome: "Casemiro", posicoes: ["LE"], forca: 80 },
      { nome: "China", posicoes: ["VOL"], forca: 81 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Tita", posicoes: ["MEI"], forca: 85 },
      { nome: "Renato Portaluppi", posicoes: ["MEI"], forca: 91 },
      { nome: "Tarciso", posicoes: ["PD"], forca: 81 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 84 },
      { nome: "Caio", posicoes: ["ATA"], forca: 80 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "São Paulo",
    jogadores: [
      { nome: "Gilmar Rinaldi", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Teodoro", posicoes: ["LD"], forca: 82 },
      { nome: "Oscar", posicoes: ["ZAG"], forca: 85 },
      { nome: "Dario Pereyra", posicoes: ["ZAG"], forca: 87 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 81 },
      { nome: "Bernardo", posicoes: ["VOL"], forca: 82 },
      { nome: "Pita", posicoes: ["MC"], forca: 87 },
      { nome: "Falcão", posicoes: ["MC"], forca: 87 },
      { nome: "Silas", posicoes: ["MEI"], forca: 88 },
      { nome: "Müller", posicoes: ["MEI"], forca: 88 },
      { nome: "Renato", posicoes: ["PD"], forca: 85 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 85 },
      { nome: "Careca", posicoes: ["ATA"], forca: 92 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Ponte Preta",
    jogadores: [
      { nome: "Carlos", posicoes: ["GOL"], forca: 80 },
      { nome: "Odirlei", posicoes: ["LD"], forca: 79 },
      { nome: "Polozzi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Juninho Fonseca", posicoes: ["ZAG"], forca: 82 },
      { nome: "Marco Aurélio", posicoes: ["LE"], forca: 79 },
      { nome: "Zé Mário", posicoes: ["VOL"], forca: 80 },
      { nome: "Dicá", posicoes: ["MC"], forca: 88 },
      { nome: "Osvaldo", posicoes: ["MC"], forca: 79 },
      { nome: "Parraga", posicoes: ["MEI"], forca: 78 },
      { nome: "Rui Rei", posicoes: ["PD"], forca: 81 },
      { nome: "Tuta", posicoes: ["PE"], forca: 79 },
      { nome: "Édson", posicoes: ["ATA"], forca: 80 },
      { nome: "Carlos Henrique", posicoes: ["ATA"], forca: 78 },
      { nome: "Sérgio Alves", posicoes: ["ATA"], forca: 77 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Botafogo",
    jogadores: [
      { nome: "Paulo Sérgio", posicoes: ["GOL"], forca: 84 },
      { nome: "Perivaldo", posicoes: ["LD"], forca: 80 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Emerson Leão", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alemão", posicoes: ["LE"], forca: 82 },
      { nome: "Carlos Alberto Santos", posicoes: ["VOL"], forca: 81 },
      { nome: "Mendonça", posicoes: ["MC"], forca: 85 },
      { nome: "Éverton", posicoes: ["MC"], forca: 80 },
      { nome: "Renato Sá", posicoes: ["MEI"], forca: 81 },
      { nome: "Lúcio Flávio", posicoes: ["MEI"], forca: 77 },
      { nome: "Maurício", posicoes: ["PD"], forca: 85 },
      { nome: "Dé", posicoes: ["PE"], forca: 80 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1981,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1980 =====

  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Flamengo",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 87 },
      { nome: "Leandro", posicoes: ["LD"], forca: 92 },
      { nome: "Mozer", posicoes: ["ZAG"], forca: 87 },
      { nome: "Marinho", posicoes: ["ZAG"], forca: 85 },
      { nome: "Júnior", posicoes: ["LE"], forca: 93 },
      { nome: "Andrade", posicoes: ["VOL"], forca: 89 },
      { nome: "Adílio", posicoes: ["MC"], forca: 89 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 85 },
      { nome: "Zico", posicoes: ["MEI"], forca: 95 },
      { nome: "Tita", posicoes: ["MEI"], forca: 89 },
      { nome: "Renato Gaúcho", posicoes: ["PD"], forca: 87 },
      { nome: "Lico", posicoes: ["PE"], forca: 85 },
      { nome: "Nunes", posicoes: ["ATA"], forca: 89 },
      { nome: "Bebeto", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 85 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 81 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 84 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 79 },
      { nome: "Moacir", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Doriva", posicoes: ["MC"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["MEI"], forca: 87 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 86 },
      { nome: "Marinho", posicoes: ["PD"], forca: 80 },
      { nome: "Sérgio Araújo", posicoes: ["PE"], forca: 81 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 89 },
      { nome: "Renaldo", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Coritiba",
    jogadores: [
      { nome: "Rafael", posicoes: ["GOL"], forca: 82 },
      { nome: "André", posicoes: ["LD"], forca: 79 },
      { nome: "Vavá", posicoes: ["ZAG"], forca: 81 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dida", posicoes: ["LE"], forca: 78 },
      { nome: "Toby", posicoes: ["VOL"], forca: 80 },
      { nome: "Aladim", posicoes: ["MC"], forca: 80 },
      { nome: "Lela", posicoes: ["MC"], forca: 86 },
      { nome: "Pachequinho", posicoes: ["MEI"], forca: 82 },
      { nome: "Édson", posicoes: ["MEI"], forca: 79 },
      { nome: "Marildo", posicoes: ["PD"], forca: 79 },
      { nome: "Tostão", posicoes: ["PE"], forca: 78 },
      { nome: "Índio", posicoes: ["ATA"], forca: 82 },
      { nome: "Marco Aurélio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Internacional",
    jogadores: [
      { nome: "Benítez", posicoes: ["GOL"], forca: 82 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Mauro Galvão", posicoes: ["ZAG"], forca: 85 },
      { nome: "Mauro Pastor", posicoes: ["ZAG"], forca: 79 },
      { nome: "André Luís", posicoes: ["LE"], forca: 77 },
      { nome: "Batista", posicoes: ["VOL"], forca: 85 },
      { nome: "Falcão", posicoes: ["MC"], forca: 91 },
      { nome: "Mário Sérgio", posicoes: ["MC"], forca: 87 },
      { nome: "Rubén Paz", posicoes: ["MEI"], forca: 85 },
      { nome: "Adílio", posicoes: ["MEI"], forca: 81 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 84 },
      { nome: "Jair", posicoes: ["PE"], forca: 79 },
      { nome: "Bira", posicoes: ["ATA"], forca: 80 },
      { nome: "Nílson", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Santos",
    jogadores: [
      { nome: "Rodella", posicoes: ["GOL"], forca: 80 },
      { nome: "Nélson", posicoes: ["LD"], forca: 78 },
      { nome: "Toninho Carlos", posicoes: ["ZAG"], forca: 80 },
      { nome: "Márcio Rossini", posicoes: ["ZAG"], forca: 79 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 78 },
      { nome: "Dema", posicoes: ["VOL"], forca: 80 },
      { nome: "Pita", posicoes: ["MC"], forca: 86 },
      { nome: "Lino", posicoes: ["MC"], forca: 79 },
      { nome: "Giovanni", posicoes: ["MEI"], forca: 78 },
      { nome: "Serginho Chulapa", posicoes: ["MEI"], forca: 87 },
      { nome: "Edmar", posicoes: ["PD"], forca: 81 },
      { nome: "João Paulo", posicoes: ["PE"], forca: 82 },
      { nome: "Juary", posicoes: ["ATA"], forca: 84 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1980,
    clube: "Vasco",
    jogadores: [
      { nome: "Acácio", posicoes: ["GOL"], forca: 86 },
      { nome: "Paulo Roberto", posicoes: ["LD"], forca: 81 },
      { nome: "Ricardo Rocha", posicoes: ["ZAG"], forca: 87 },
      { nome: "Donato", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mazinho", posicoes: ["LE"], forca: 86 },
      { nome: "Dunga", posicoes: ["VOL"], forca: 87 },
      { nome: "Geovani", posicoes: ["MC"], forca: 88 },
      { nome: "Zé do Carmo", posicoes: ["MC"], forca: 80 },
      { nome: "Bismarck", posicoes: ["MEI"], forca: 85 },
      { nome: "William", posicoes: ["MEI"], forca: 82 },
      { nome: "Vivinho", posicoes: ["PD"], forca: 85 },
      { nome: "Tita", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 89 },
      { nome: "Romário", posicoes: ["ATA"], forca: 92 }
    ]
  },

  // ===== Edição 1979 =====

  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 87 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 82 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Miguel", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alfinete", posicoes: ["LE"], forca: 80 },
      { nome: "Alcir Portela", posicoes: ["VOL"], forca: 82 },
      { nome: "Zanata", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu", posicoes: ["MEI"], forca: 85 },
      { nome: "Ademir", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 82 },
      { nome: "Dé", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 92 },
      { nome: "Jair Pereira", posicoes: ["ATA"], forca: 82 },
      { nome: "Luís Carlos", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Coritiba",
    jogadores: [
      { nome: "Jairo", posicoes: ["GOL"], forca: 84 },
      { nome: "Hermes", posicoes: ["LD"], forca: 79 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 81 },
      { nome: "Cláudio Marques", posicoes: ["ZAG"], forca: 79 },
      { nome: "Nilo", posicoes: ["LE"], forca: 79 },
      { nome: "Toby", posicoes: ["VOL"], forca: 80 },
      { nome: "Krüger", posicoes: ["MC"], forca: 86 },
      { nome: "Aladim", posicoes: ["MC"], forca: 80 },
      { nome: "Paquito", posicoes: ["MEI"], forca: 79 },
      { nome: "Fedato", posicoes: ["MEI"], forca: 78 },
      { nome: "Zé Roberto", posicoes: ["PD"], forca: 80 },
      { nome: "Dito", posicoes: ["PE"], forca: 78 },
      { nome: "Duilio Dias", posicoes: ["ATA"], forca: 80 },
      { nome: "Dirceu Krüger", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { nome: "Lance", posicoes: ["PE"], forca: 80 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1979,
    clube: "Guarani",
    jogadores: [
      { nome: "Neneca", posicoes: ["GOL"], forca: 85 },
      { nome: "Mauro", posicoes: ["LD"], forca: 80 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alfredo", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Zenon", posicoes: ["MC"], forca: 89 },
      { nome: "Renato", posicoes: ["MC"], forca: 85 },
      { nome: "Bozó", posicoes: ["MEI"], forca: 84 },
      { nome: "Capitão", posicoes: ["PD"], forca: 82 },
      { nome: "Manguinha", posicoes: ["PE"], forca: 80 },
      { nome: "Careca", posicoes: ["ATA"], forca: 85 },
      { nome: "Orlando", posicoes: ["ATA"], forca: 80 },
      { nome: "Theodoro", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1978 =====

  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Guarani",
    jogadores: [
      { nome: "Neneca", posicoes: ["GOL"], forca: 85 },
      { nome: "Mauro", posicoes: ["LD"], forca: 80 },
      { nome: "Miranda", posicoes: ["ZAG"], forca: 82 },
      { nome: "Gomes", posicoes: ["ZAG"], forca: 80 },
      { nome: "Alfredo", posicoes: ["LE"], forca: 78 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 82 },
      { nome: "Zenon", posicoes: ["MC"], forca: 89 },
      { nome: "Renato", posicoes: ["MC"], forca: 85 },
      { nome: "Bozó", posicoes: ["MEI"], forca: 84 },
      { nome: "Capitão", posicoes: ["PD"], forca: 82 },
      { nome: "Manguinha", posicoes: ["PE"], forca: 80 },
      { nome: "Careca", posicoes: ["ATA"], forca: 85 },
      { nome: "Orlando", posicoes: ["ATA"], forca: 80 },
      { nome: "Theodoro", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 87 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 82 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Miguel", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alfinete", posicoes: ["LE"], forca: 80 },
      { nome: "Alcir Portela", posicoes: ["VOL"], forca: 82 },
      { nome: "Zanata", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu", posicoes: ["MEI"], forca: 85 },
      { nome: "Ademir", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 82 },
      { nome: "Dé", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 92 },
      { nome: "Jair Pereira", posicoes: ["ATA"], forca: 82 },
      { nome: "Luís Carlos", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { nome: "Lola", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1978,
    clube: "Bahia",
    jogadores: [
      { nome: "Ronaldo", posicoes: ["GOL"], forca: 82 },
      { nome: "Gil Baiano", posicoes: ["LD"], forca: 81 },
      { nome: "João Marcelo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Paulo Rodrigues", posicoes: ["ZAG"], forca: 80 },
      { nome: "Tarântini", posicoes: ["LE"], forca: 79 },
      { nome: "Osmar", posicoes: ["VOL"], forca: 80 },
      { nome: "Zanata", posicoes: ["MC"], forca: 81 },
      { nome: "Charles", posicoes: ["MC"], forca: 84 },
      { nome: "Bobô", posicoes: ["MEI"], forca: 89 },
      { nome: "Zé Carlos", posicoes: ["PD"], forca: 80 },
      { nome: "Marquinhos", posicoes: ["PE"], forca: 81 },
      { nome: "Cláudio Adão", posicoes: ["ATA"], forca: 82 },
      { nome: "Naldinho", posicoes: ["ATA"], forca: 79 },
      { nome: "Dendê", posicoes: ["ATA"], forca: 78 }
    ]
  },

  // ===== Edição 1977 =====

  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { nome: "Lola", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Operário-MS",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 81 },
      { nome: "Paulinho", posicoes: ["LD"], forca: 76 },
      { nome: "Celso", posicoes: ["ZAG"], forca: 77 },
      { nome: "Benê", posicoes: ["ZAG"], forca: 76 },
      { nome: "Edson", posicoes: ["LE"], forca: 75 },
      { nome: "Mauro", posicoes: ["VOL"], forca: 77 },
      { nome: "Jair", posicoes: ["MC"], forca: 77 },
      { nome: "Carlos Alberto", posicoes: ["MC"], forca: 76 },
      { nome: "Humberto Ramos", posicoes: ["MEI"], forca: 79 },
      { nome: "Peri", posicoes: ["PD"], forca: 76 },
      { nome: "Jorginho", posicoes: ["PE"], forca: 76 },
      { nome: "Tostão", posicoes: ["ATA"], forca: 77 },
      { nome: "Lima", posicoes: ["ATA"], forca: 76 },
      { nome: "Gil", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Londrina",
    jogadores: [
      { nome: "Neneca", posicoes: ["GOL"], forca: 79 },
      { nome: "Brandão", posicoes: ["LD"], forca: 76 },
      { nome: "Carlos Alberto Garcia", posicoes: ["ZAG"], forca: 80 },
      { nome: "Dirceu", posicoes: ["ZAG"], forca: 76 },
      { nome: "Nelson", posicoes: ["LE"], forca: 75 },
      { nome: "Marinho", posicoes: ["VOL"], forca: 77 },
      { nome: "Paulo César", posicoes: ["MC"], forca: 76 },
      { nome: "Jorge Nunes", posicoes: ["MC"], forca: 76 },
      { nome: "Carlos Alberto Seixas", posicoes: ["MEI"], forca: 78 },
      { nome: "Paulinho", posicoes: ["PD"], forca: 76 },
      { nome: "Lico", posicoes: ["PE"], forca: 77 },
      { nome: "Brandãozinho", posicoes: ["ATA"], forca: 77 },
      { nome: "Zé Roberto", posicoes: ["ATA"], forca: 76 },
      { nome: "Nivaldo", posicoes: ["ATA"], forca: 75 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { nome: "Lance", posicoes: ["PE"], forca: 80 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1977,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },

  // ===== Edição 1976 =====

  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { nome: "Lance", posicoes: ["PE"], forca: 80 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { nome: "Lola", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 86 },
      { nome: "Toninho", posicoes: ["LD"], forca: 82 },
      { nome: "Edinho", posicoes: ["ZAG"], forca: 88 },
      { nome: "Silveira", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rodrigues Neto", posicoes: ["LE"], forca: 86 },
      { nome: "Kléber", posicoes: ["VOL"], forca: 81 },
      { nome: "Pintinho", posicoes: ["MC"], forca: 85 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 87 },
      { nome: "Rivelino", posicoes: ["MEI"], forca: 93 },
      { nome: "Paulo César Caju", posicoes: ["MEI"], forca: 89 },
      { nome: "Gil", posicoes: ["PD"], forca: 85 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 84 },
      { nome: "Doval", posicoes: ["ATA"], forca: 85 },
      { nome: "Manfrini", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Grêmio",
    jogadores: [
      { nome: "Eurico Lara", posicoes: ["GOL"], forca: 76 },
      { nome: "Mazaropi", posicoes: ["GOL"], forca: 80 },
      { nome: "Everaldo", posicoes: ["LD"], forca: 85 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 81 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 85 },
      { nome: "Orlando Lelé", posicoes: ["LE"], forca: 79 },
      { nome: "China", posicoes: ["VOL"], forca: 80 },
      { nome: "Iúra", posicoes: ["MC"], forca: 79 },
      { nome: "Tarciso", posicoes: ["MEI"], forca: 84 },
      { nome: "Tadeu Ricci", posicoes: ["MEI"], forca: 79 },
      { nome: "Jair", posicoes: ["PD"], forca: 80 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 85 },
      { nome: "Baltazar", posicoes: ["ATA"], forca: 82 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1976,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1975 =====

  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { nome: "Natal", posicoes: ["PE"], forca: 84 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 86 },
      { nome: "Toninho", posicoes: ["LD"], forca: 82 },
      { nome: "Edinho", posicoes: ["ZAG"], forca: 88 },
      { nome: "Silveira", posicoes: ["ZAG"], forca: 82 },
      { nome: "Rodrigues Neto", posicoes: ["LE"], forca: 86 },
      { nome: "Kléber", posicoes: ["VOL"], forca: 81 },
      { nome: "Pintinho", posicoes: ["MC"], forca: 85 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 87 },
      { nome: "Rivelino", posicoes: ["MEI"], forca: 93 },
      { nome: "Paulo César Caju", posicoes: ["MEI"], forca: 89 },
      { nome: "Gil", posicoes: ["PD"], forca: 85 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 84 },
      { nome: "Doval", posicoes: ["ATA"], forca: 85 },
      { nome: "Manfrini", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Santa Cruz",
    jogadores: [
      { nome: "Gilberto", posicoes: ["GOL"], forca: 80 },
      { nome: "Nena", posicoes: ["LD"], forca: 78 },
      { nome: "Pedrinho", posicoes: ["ZAG"], forca: 78 },
      { nome: "Luciano Veloso", posicoes: ["ZAG"], forca: 79 },
      { nome: "Ramon", posicoes: ["LE"], forca: 84 },
      { nome: "Zé Mário", posicoes: ["VOL"], forca: 79 },
      { nome: "Givanildo", posicoes: ["MC"], forca: 85 },
      { nome: "Paulo César", posicoes: ["MC"], forca: 80 },
      { nome: "Betinho", posicoes: ["MEI"], forca: 81 },
      { nome: "Nunes", posicoes: ["PD"], forca: 81 },
      { nome: "Zé do Carmo", posicoes: ["PE"], forca: 78 },
      { nome: "Fumanchu", posicoes: ["ATA"], forca: 80 },
      { nome: "Mazinho Loyola", posicoes: ["ATA"], forca: 78 },
      { nome: "Dario", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1975,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },

  // ===== Edição 1974 =====

  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 87 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 82 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Miguel", posicoes: ["ZAG"], forca: 81 },
      { nome: "Alfinete", posicoes: ["LE"], forca: 80 },
      { nome: "Alcir Portela", posicoes: ["VOL"], forca: 82 },
      { nome: "Zanata", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu", posicoes: ["MEI"], forca: 85 },
      { nome: "Ademir", posicoes: ["MEI"], forca: 81 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 82 },
      { nome: "Dé", posicoes: ["PE"], forca: 82 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 92 },
      { nome: "Jair Pereira", posicoes: ["ATA"], forca: 82 },
      { nome: "Luís Carlos", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { nome: "Natal", posicoes: ["PE"], forca: 84 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Santos",
    jogadores: [
      { nome: "Cejas", posicoes: ["GOL"], forca: 85 },
      { nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 88 },
      { nome: "Vicente", posicoes: ["ZAG"], forca: 80 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Léo Oliveira", posicoes: ["VOL"], forca: 79 },
      { nome: "Clodoaldo", posicoes: ["MC"], forca: 87 },
      { nome: "Brecha", posicoes: ["MC"], forca: 80 },
      { nome: "Edu", posicoes: ["MEI"], forca: 85 },
      { nome: "Pita", posicoes: ["MEI"], forca: 85 },
      { nome: "Mazinho", posicoes: ["PD"], forca: 81 },
      { nome: "Pepe", posicoes: ["PE"], forca: 85 },
      { nome: "Pelé", posicoes: ["ATA"], forca: 93 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1974,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { nome: "Lance", posicoes: ["PE"], forca: 80 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1973 =====

  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { nome: "Natal", posicoes: ["PE"], forca: 84 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Santos",
    jogadores: [
      { nome: "Cejas", posicoes: ["GOL"], forca: 85 },
      { nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 88 },
      { nome: "Vicente", posicoes: ["ZAG"], forca: 80 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Léo Oliveira", posicoes: ["VOL"], forca: 79 },
      { nome: "Clodoaldo", posicoes: ["MC"], forca: 87 },
      { nome: "Brecha", posicoes: ["MC"], forca: 80 },
      { nome: "Edu", posicoes: ["MEI"], forca: 85 },
      { nome: "Pita", posicoes: ["MEI"], forca: 85 },
      { nome: "Mazinho", posicoes: ["PD"], forca: 81 },
      { nome: "Pepe", posicoes: ["PE"], forca: 85 },
      { nome: "Pelé", posicoes: ["ATA"], forca: 93 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1973,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { nome: "Lola", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },

  // ===== Edição 1972 =====

  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Corinthians",
    jogadores: [
      { nome: "Tobias", posicoes: ["GOL"], forca: 85 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 87 },
      { nome: "Moisés", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zé Eduardo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 88 },
      { nome: "Givanildo", posicoes: ["VOL"], forca: 82 },
      { nome: "Ruço", posicoes: ["MC"], forca: 80 },
      { nome: "Biro-Biro", posicoes: ["MC"], forca: 85 },
      { nome: "Basílio", posicoes: ["MEI"], forca: 87 },
      { nome: "Palhinha", posicoes: ["MEI"], forca: 86 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 85 },
      { nome: "Lance", posicoes: ["PE"], forca: 80 },
      { nome: "Geraldão", posicoes: ["ATA"], forca: 82 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1972,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul Plassmann", posicoes: ["GOL"], forca: 88 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 89 },
      { nome: "Perfumo", posicoes: ["ZAG"], forca: 89 },
      { nome: "Morais", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vanderlei", posicoes: ["LE"], forca: 81 },
      { nome: "Piazza", posicoes: ["VOL"], forca: 91 },
      { nome: "Zé Carlos", posicoes: ["MC"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 92 },
      { nome: "Eduardo Amorim", posicoes: ["MEI"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PD"], forca: 88 },
      { nome: "Natal", posicoes: ["PE"], forca: 84 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 90 },
      { nome: "Roberto Batata", posicoes: ["ATA"], forca: 85 },
      { nome: "Jairzinho", posicoes: ["ATA"], forca: 87 }
    ]
  },

  // ===== Edição 1971 =====

  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "João Leite", posicoes: ["GOL"], forca: 86 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 85 },
      { nome: "Vantuir Galdino", posicoes: ["ZAG"], forca: 82 },
      { nome: "Luizinho", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulo Roberto", posicoes: ["LE"], forca: 80 },
      { nome: "Vanderlei Paiva", posicoes: ["VOL"], forca: 82 },
      { nome: "Toninho Cerezo", posicoes: ["MC"], forca: 89 },
      { nome: "Ângelo", posicoes: ["MC"], forca: 81 },
      { nome: "Paulo Isidoro", posicoes: ["MEI"], forca: 87 },
      { nome: "Marcelo Oliveira", posicoes: ["MEI"], forca: 82 },
      { nome: "Lola", posicoes: ["PD"], forca: 79 },
      { nome: "Éder Aleixo", posicoes: ["PE"], forca: 89 },
      { nome: "Reinaldo", posicoes: ["ATA"], forca: 91 },
      { nome: "Dario", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "São Paulo",
    jogadores: [
      { nome: "Waldir Peres", posicoes: ["GOL"], forca: 87 },
      { nome: "Forlán", posicoes: ["LD"], forca: 84 },
      { nome: "Arlindo", posicoes: ["ZAG"], forca: 80 },
      { nome: "Bezerra", posicoes: ["ZAG"], forca: 82 },
      { nome: "Nelsinho Baptista", posicoes: ["LE"], forca: 82 },
      { nome: "Teodoro", posicoes: ["VOL"], forca: 84 },
      { nome: "Chicão", posicoes: ["MC"], forca: 86 },
      { nome: "Pedro Rocha", posicoes: ["MC"], forca: 91 },
      { nome: "Mickey", posicoes: ["MEI"], forca: 80 },
      { nome: "Terto", posicoes: ["MEI"], forca: 84 },
      { nome: "Paulo César", posicoes: ["PD"], forca: 80 },
      { nome: "Zé Sérgio", posicoes: ["PE"], forca: 86 },
      { nome: "Serginho Chulapa", posicoes: ["ATA"], forca: 89 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Botafogo",
    jogadores: [
      { nome: "Wendell", posicoes: ["GOL"], forca: 82 },
      { nome: "Carlos Roberto", posicoes: ["LD"], forca: 82 },
      { nome: "Marinho Chagas", posicoes: ["ZAG"], forca: 86 },
      { nome: "Osmar Guarnelli", posicoes: ["ZAG"], forca: 80 },
      { nome: "Moreira", posicoes: ["LE"], forca: 79 },
      { nome: "Ney Conceição", posicoes: ["VOL"], forca: 82 },
      { nome: "Carlos Alberto Torres", posicoes: ["MC"], forca: 86 },
      { nome: "Mendonça", posicoes: ["MEI"], forca: 86 },
      { nome: "Jairzinho", posicoes: ["PD"], forca: 90 },
      { nome: "Dirceu", posicoes: ["PE"], forca: 85 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 },
      { nome: "Fischer", posicoes: ["ATA"], forca: 82 },
      { nome: "Ferreti", posicoes: ["ATA"], forca: 81 },
      { nome: "Zequinha", posicoes: ["MEI"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Leão", posicoes: ["GOL"], forca: 90 },
      { nome: "Eurico", posicoes: ["LD"], forca: 81 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Alfredo Mostarda", posicoes: ["ZAG"], forca: 85 },
      { nome: "Zeca", posicoes: ["LE"], forca: 80 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 89 },
      { nome: "Ademir da Guia", posicoes: ["MC"], forca: 93 },
      { nome: "Edu Bala", posicoes: ["MC"], forca: 85 },
      { nome: "Jorge Mendonça", posicoes: ["MEI"], forca: 87 },
      { nome: "Nei", posicoes: ["PD"], forca: 82 },
      { nome: "Fedato", posicoes: ["PE"], forca: 80 },
      { nome: "Leivinha", posicoes: ["ATA"], forca: 89 },
      { nome: "César Maluco", posicoes: ["ATA"], forca: 87 },
      { nome: "Toninho Vanusa", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Santos",
    jogadores: [
      { nome: "Cejas", posicoes: ["GOL"], forca: 85 },
      { nome: "Carlos Alberto Torres", posicoes: ["LD"], forca: 88 },
      { nome: "Vicente", posicoes: ["ZAG"], forca: 80 },
      { nome: "Oberdan", posicoes: ["ZAG"], forca: 79 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 79 },
      { nome: "Léo Oliveira", posicoes: ["VOL"], forca: 79 },
      { nome: "Clodoaldo", posicoes: ["MC"], forca: 87 },
      { nome: "Brecha", posicoes: ["MC"], forca: 80 },
      { nome: "Edu", posicoes: ["MEI"], forca: 85 },
      { nome: "Pita", posicoes: ["MEI"], forca: 85 },
      { nome: "Mazinho", posicoes: ["PD"], forca: 81 },
      { nome: "Pepe", posicoes: ["PE"], forca: 85 },
      { nome: "Pelé", posicoes: ["ATA"], forca: 93 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 86 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1971,
    clube: "Internacional",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 88 },
      { nome: "Valdir", posicoes: ["LD"], forca: 80 },
      { nome: "Figueroa", posicoes: ["ZAG"], forca: 93 },
      { nome: "Hermínio", posicoes: ["ZAG"], forca: 81 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 81 },
      { nome: "Caçapava", posicoes: ["VOL"], forca: 84 },
      { nome: "Falcão", posicoes: ["MC"], forca: 93 },
      { nome: "Batista", posicoes: ["MC"], forca: 87 },
      { nome: "Carpegiani", posicoes: ["MEI"], forca: 88 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 88 },
      { nome: "Lula", posicoes: ["PE"], forca: 82 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 85 },
      { nome: "Escurinho", posicoes: ["ATA"], forca: 82 },
      { nome: "Dario", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 1970 =====

  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { nome: "Neco", posicoes: ["LE"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Atlético-MG",
    jogadores: [
      { nome: "Ortiz", posicoes: ["GOL"], forca: 84 },
      { nome: "Hélio", posicoes: ["GOL"], forca: 73 },
      { nome: "Nelinho", posicoes: ["LD"], forca: 90 },
      { nome: "Vantuir", posicoes: ["ZAG"], forca: 82 },
      { nome: "Grapete", posicoes: ["ZAG"], forca: 81 },
      { nome: "Oldair", posicoes: ["LE"], forca: 80 },
      { nome: "Humberto Ramos", posicoes: ["VOL"], forca: 85 },
      { nome: "Vanderlei Paiva", posicoes: ["MC"], forca: 82 },
      { nome: "Tião", posicoes: ["VOL"], forca: 81 },
      { nome: "Romeu", posicoes: ["ATA"], forca: 89 },
      { nome: "Dadá Maravilha", posicoes: ["ATA"], forca: 91 },
      { nome: "Ronaldo", posicoes: ["PE"], forca: 85 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 82 },
      { nome: "Buião", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1970,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1969 =====

  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { nome: "Neco", posicoes: ["LE"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ado", posicoes: ["GOL"], forca: 82 },
      { nome: "Diogo", posicoes: ["GOL"], forca: 75 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 89 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ditão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 86 },
      { nome: "Tião", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Alves", posicoes: ["MC"], forca: 84 },
      { nome: "Eduardo", posicoes: ["MC"], forca: 81 },
      { nome: "Rivellino", posicoes: ["MEI"], forca: 94 },
      { nome: "Paulo Borges", posicoes: ["PD"], forca: 85 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 81 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 86 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1969,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1968 =====

  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { nome: "Neco", posicoes: ["LE"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ado", posicoes: ["GOL"], forca: 82 },
      { nome: "Diogo", posicoes: ["GOL"], forca: 75 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 89 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ditão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 86 },
      { nome: "Tião", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Alves", posicoes: ["MC"], forca: 84 },
      { nome: "Eduardo", posicoes: ["MC"], forca: 81 },
      { nome: "Rivellino", posicoes: ["MEI"], forca: 94 },
      { nome: "Paulo Borges", posicoes: ["PD"], forca: 85 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 81 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 86 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1968,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },

  // ===== Edição 1967 =====

  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { nome: "Gena", posicoes: ["LD"], forca: 79 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { nome: "Nado", posicoes: ["MC"], forca: 81 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { nome: "Neco", posicoes: ["LE"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Internacional",
    jogadores: [
      { nome: "Gainete", posicoes: ["GOL"], forca: 85 },
      { nome: "Schneider", posicoes: ["GOL"], forca: 73 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pontes", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 80 },
      { nome: "Falcão", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Dorinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 90 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 87 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Claudiomiro", posicoes: ["ATA"], forca: 86 },
      { nome: "Escurinho", posicoes: ["PE"], forca: 84 },
      { nome: "Bráulio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1967,
    clube: "Corinthians",
    jogadores: [
      { nome: "Ado", posicoes: ["GOL"], forca: 82 },
      { nome: "Diogo", posicoes: ["GOL"], forca: 75 },
      { nome: "Zé Maria", posicoes: ["LD"], forca: 89 },
      { nome: "Balbuena", posicoes: ["ZAG"], forca: 85 },
      { nome: "Ditão", posicoes: ["ZAG"], forca: 81 },
      { nome: "Wladimir", posicoes: ["LE"], forca: 86 },
      { nome: "Tião", posicoes: ["VOL"], forca: 82 },
      { nome: "Dirceu Alves", posicoes: ["MC"], forca: 84 },
      { nome: "Eduardo", posicoes: ["MC"], forca: 81 },
      { nome: "Rivellino", posicoes: ["MEI"], forca: 94 },
      { nome: "Paulo Borges", posicoes: ["PD"], forca: 85 },
      { nome: "Vaguinho", posicoes: ["PD"], forca: 81 },
      { nome: "Flávio Minuano", posicoes: ["ATA"], forca: 86 },
      { nome: "Mirandinha", posicoes: ["ATA"], forca: 82 }
    ]
  },

  // ===== Edição 1966 =====

  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Cruzeiro",
    jogadores: [
      { nome: "Raul", posicoes: ["GOL"], forca: 89 },
      { nome: "Natal", posicoes: ["GOL"], forca: 75 },
      { nome: "Pedro Paulo", posicoes: ["LD"], forca: 79 },
      { nome: "Procópio Cardoso", posicoes: ["ZAG"], forca: 87 },
      { nome: "Piazza", posicoes: ["ZAG","VOL"], forca: 90 },
      { nome: "Fontana", posicoes: ["ZAG"], forca: 85 },
      { nome: "Neco", posicoes: ["LE"], forca: 80 },
      { nome: "Zé Carlos", posicoes: ["VOL"], forca: 85 },
      { nome: "Dirceu Lopes", posicoes: ["MEI"], forca: 93 },
      { nome: "Tostão", posicoes: ["ATA","MEI"], forca: 97 },
      { nome: "Evaldo", posicoes: ["ATA"], forca: 85 },
      { nome: "Hilton Oliveira", posicoes: ["PD"], forca: 82 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Palhinha", posicoes: ["ATA"], forca: 87 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { nome: "Gena", posicoes: ["LD"], forca: 79 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { nome: "Nado", posicoes: ["MC"], forca: 81 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1966,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },

  // ===== Edição 1965 =====

  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { nome: "Gena", posicoes: ["LD"], forca: 79 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { nome: "Nado", posicoes: ["MC"], forca: 81 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1965,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },

  // ===== Edição 1964 =====

  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Flamengo",
    jogadores: [
      { nome: "Ubirajara", posicoes: ["GOL"], forca: 81 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Rodrigues Neto", posicoes: ["LD"], forca: 82 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 87 },
      { nome: "Onça", posicoes: ["ZAG"], forca: 80 },
      { nome: "Murilo", posicoes: ["LE"], forca: 81 },
      { nome: "Liminha", posicoes: ["VOL"], forca: 80 },
      { nome: "Carlinhos", posicoes: ["MC"], forca: 84 },
      { nome: "Franz Hasil", posicoes: ["MC","MEI"], forca: 84 },
      { nome: "Carpegiani", posicoes: ["MC","MEI"], forca: 87 },
      { nome: "Geraldo Assoviador", posicoes: ["PD"], forca: 81 },
      { nome: "Doval", posicoes: ["ATA"], forca: 87 },
      { nome: "Fio Maravilha", posicoes: ["ATA"], forca: 82 },
      { nome: "Silva Batuta", posicoes: ["ATA"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1964,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1963 =====

  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { nome: "Deca", posicoes: ["LE"], forca: 79 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { nome: "Léo", posicoes: ["PE"], forca: 81 },
      { nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1963,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1962 =====

  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Internacional",
    jogadores: [
      { nome: "Gainete", posicoes: ["GOL"], forca: 85 },
      { nome: "Schneider", posicoes: ["GOL"], forca: 73 },
      { nome: "Cláudio Mineiro", posicoes: ["LD"], forca: 78 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 88 },
      { nome: "Pontes", posicoes: ["ZAG"], forca: 82 },
      { nome: "Vacaria", posicoes: ["LE"], forca: 80 },
      { nome: "Falcão", posicoes: ["VOL","MC"], forca: 93 },
      { nome: "Dorinho", posicoes: ["VOL"], forca: 81 },
      { nome: "Carpegiani", posicoes: ["MC"], forca: 90 },
      { nome: "Valdomiro", posicoes: ["PD"], forca: 87 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Claudiomiro", posicoes: ["ATA"], forca: 86 },
      { nome: "Escurinho", posicoes: ["PE"], forca: 84 },
      { nome: "Bráulio", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { nome: "Deca", posicoes: ["LE"], forca: 79 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { nome: "Léo", posicoes: ["PE"], forca: 81 },
      { nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1962,
    clube: "Náutico",
    jogadores: [
      { nome: "Lula", posicoes: ["GOL"], forca: 80 },
      { nome: "Nivaldo", posicoes: ["GOL"], forca: 72 },
      { nome: "Gena", posicoes: ["LD"], forca: 79 },
      { nome: "Ivan Brondi", posicoes: ["ZAG"], forca: 81 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 79 },
      { nome: "Cláudio", posicoes: ["LE"], forca: 78 },
      { nome: "Salomão", posicoes: ["VOL"], forca: 80 },
      { nome: "Nado", posicoes: ["MC"], forca: 81 },
      { nome: "Ivson", posicoes: ["MEI"], forca: 78 },
      { nome: "Bita", posicoes: ["ATA"], forca: 89 },
      { nome: "Lala", posicoes: ["ATA"], forca: 85 },
      { nome: "Nino", posicoes: ["ATA"], forca: 84 },
      { nome: "Ramon", posicoes: ["ATA"], forca: 80 },
      { nome: "Beto", posicoes: ["MC"], forca: 79 }
    ]
  },

  // ===== Edição 1961 =====

  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { nome: "Deca", posicoes: ["LE"], forca: 79 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { nome: "Léo", posicoes: ["PE"], forca: 81 },
      { nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1961,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },

  // ===== Edição 1960 =====

  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fluminense",
    jogadores: [
      { nome: "Félix", posicoes: ["GOL"], forca: 87 },
      { nome: "Paulo Henrique", posicoes: ["GOL"], forca: 73 },
      { nome: "Oliveira", posicoes: ["ZAG"], forca: 86 },
      { nome: "Galhardo", posicoes: ["ZAG"], forca: 84 },
      { nome: "Marco Antônio", posicoes: ["LE","ME"], forca: 85 },
      { nome: "Assis", posicoes: ["LE"], forca: 82 },
      { nome: "Denílson", posicoes: ["VOL"], forca: 85 },
      { nome: "Cláudio Garcia", posicoes: ["VOL"], forca: 82 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Samarone", posicoes: ["MEI","ATA"], forca: 87 },
      { nome: "Cafuringa", posicoes: ["PD"], forca: 86 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 88 },
      { nome: "Lula", posicoes: ["ATA"], forca: 85 },
      { nome: "Mickey", posicoes: ["ATA"], forca: 81 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Fortaleza",
    jogadores: [
      { nome: "Marcial", posicoes: ["GOL"], forca: 78 },
      { nome: "Mimi", posicoes: ["GOL"], forca: 72 },
      { nome: "Louro", posicoes: ["LD"], forca: 79 },
      { nome: "Clodoaldo", posicoes: ["ZAG"], forca: 82 },
      { nome: "Elzo", posicoes: ["ZAG"], forca: 79 },
      { nome: "Jorge Costa", posicoes: ["LE"], forca: 78 },
      { nome: "Croinha", posicoes: ["VOL"], forca: 81 },
      { nome: "Lucinho", posicoes: ["MC"], forca: 80 },
      { nome: "Mozart", posicoes: ["MEI"], forca: 81 },
      { nome: "Dude", posicoes: ["PD"], forca: 82 },
      { nome: "Flávio", posicoes: ["ATA"], forca: 85 },
      { nome: "Bececê", posicoes: ["ATA"], forca: 81 },
      { nome: "Hamilton", posicoes: ["PE"], forca: 80 },
      { nome: "Chicão", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1960,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { nome: "Deca", posicoes: ["LE"], forca: 79 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { nome: "Léo", posicoes: ["PE"], forca: 81 },
      { nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },

  // ===== Edição 1959 =====

  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Bahia",
    jogadores: [
      { nome: "Nadinho", posicoes: ["GOL"], forca: 82 },
      { nome: "Helinho", posicoes: ["GOL"], forca: 72 },
      { nome: "Vicente", posicoes: ["LD"], forca: 81 },
      { nome: "Henrique", posicoes: ["ZAG"], forca: 82 },
      { nome: "Mauro", posicoes: ["ZAG"], forca: 81 },
      { nome: "Deca", posicoes: ["LE"], forca: 79 },
      { nome: "Flávio", posicoes: ["VOL"], forca: 82 },
      { nome: "Baiaco", posicoes: ["MC"], forca: 84 },
      { nome: "Alencar", posicoes: ["MEI"], forca: 85 },
      { nome: "Vicente Arenari", posicoes: ["MEI"], forca: 84 },
      { nome: "Biriba", posicoes: ["PD"], forca: 82 },
      { nome: "Léo", posicoes: ["PE"], forca: 81 },
      { nome: "Marito", posicoes: ["ATA"], forca: 82 },
      { nome: "Douglas", posicoes: ["ATA"], forca: 80 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Santos",
    jogadores: [
      { nome: "Gilmar", posicoes: ["GOL"], forca: 91 },
      { nome: "Laércio", posicoes: ["GOL"], forca: 76 },
      { nome: "Lima", posicoes: ["LD","VOL","MC"], forca: 89 },
      { nome: "Mauro Ramos", posicoes: ["ZAG"], forca: 90 },
      { nome: "Calvet", posicoes: ["ZAG"], forca: 84 },
      { nome: "Dalmo", posicoes: ["LE"], forca: 81 },
      { nome: "Zito", posicoes: ["VOL"], forca: 91 },
      { nome: "Mengálvio", posicoes: ["MC"], forca: 87 },
      { nome: "Dorval", posicoes: ["PD"], forca: 89 },
      { nome: "Coutinho", posicoes: ["ATA"], forca: 93 },
      { nome: "Pelé", posicoes: ["MEI","ATA"], forca: 99 },
      { nome: "Pepe", posicoes: ["PE"], forca: 92 },
      { nome: "Pagão", posicoes: ["ATA"], forca: 84 },
      { nome: "Toninho Guerreiro", posicoes: ["ATA"], forca: 82 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Grêmio",
    jogadores: [
      { nome: "Alberto", posicoes: ["GOL"], forca: 85 },
      { nome: "Ancheta", posicoes: ["ZAG"], forca: 87 },
      { nome: "Airton Pavilhão", posicoes: ["ZAG"], forca: 86 },
      { nome: "Everaldo", posicoes: ["LE"], forca: 87 },
      { nome: "Cláudio Duarte", posicoes: ["LD","ZAG"], forca: 82 },
      { nome: "Foguinho", posicoes: ["VOL"], forca: 85 },
      { nome: "Juarez", posicoes: ["MC"], forca: 82 },
      { nome: "Loivo", posicoes: ["MC"], forca: 80 },
      { nome: "Tarciso", posicoes: ["PE"], forca: 85 },
      { nome: "Joãozinho", posicoes: ["PE"], forca: 86 },
      { nome: "Alcindo", posicoes: ["ATA"], forca: 89 },
      { nome: "Ortunho", posicoes: ["ATA"], forca: 81 },
      { nome: "Volmir", posicoes: ["PE"], forca: 84 },
      { nome: "Yura", posicoes: ["ATA"], forca: 79 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Vasco",
    jogadores: [
      { nome: "Andrada", posicoes: ["GOL"], forca: 88 },
      { nome: "Miguel", posicoes: ["GOL"], forca: 85 },
      { nome: "Fidélis", posicoes: ["LD"], forca: 81 },
      { nome: "Brito", posicoes: ["ZAG"], forca: 89 },
      { nome: "Renê", posicoes: ["ZAG"], forca: 85 },
      { nome: "Coronel", posicoes: ["LE"], forca: 82 },
      { nome: "Orlando", posicoes: ["VOL"], forca: 87 },
      { nome: "Zanata", posicoes: ["VOL"], forca: 85 },
      { nome: "Alcir", posicoes: ["MC"], forca: 82 },
      { nome: "Almir", posicoes: ["MEI"], forca: 89 },
      { nome: "Vavá", posicoes: ["ATA"], forca: 88 },
      { nome: "Roberto Dinamite", posicoes: ["ATA"], forca: 91 },
      { nome: "Pinga", posicoes: ["ATA"], forca: 87 },
      { nome: "Sabará", posicoes: ["PD"], forca: 84 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Botafogo",
    jogadores: [
      { nome: "Manga", posicoes: ["GOL"], forca: 87 },
      { nome: "Cao", posicoes: ["GOL"], forca: 73 },
      { nome: "Joel", posicoes: ["LD"], forca: 84 },
      { nome: "Leônidas", posicoes: ["ZAG"], forca: 82 },
      { nome: "Paulistano", posicoes: ["ZAG"], forca: 81 },
      { nome: "Nilton Santos", posicoes: ["LE"], forca: 93 },
      { nome: "Didi", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Gérson", posicoes: ["MC","MEI"], forca: 93 },
      { nome: "Zagallo", posicoes: ["PE"], forca: 87 },
      { nome: "Garrincha", posicoes: ["PD"], forca: 97 },
      { nome: "Quarentinha", posicoes: ["ATA"], forca: 89 },
      { nome: "Amarildo", posicoes: ["ATA"], forca: 87 },
      { nome: "Jairzinho", posicoes: ["PD","ATA"], forca: 90 },
      { nome: "Roberto Miranda", posicoes: ["ATA"], forca: 85 }
    ]
  },
  {
    competicao: "Brasileirão",
    edicao: 1959,
    clube: "Palmeiras",
    jogadores: [
      { nome: "Valdir de Moraes", posicoes: ["GOL"], forca: 87 },
      { nome: "Emerson Leão", posicoes: ["GOL"], forca: 88 },
      { nome: "Djalma Santos", posicoes: ["LD"], forca: 92 },
      { nome: "Djalma Dias", posicoes: ["ZAG"], forca: 85 },
      { nome: "Baldochi", posicoes: ["ZAG"], forca: 85 },
      { nome: "Luís Pereira", posicoes: ["ZAG"], forca: 90 },
      { nome: "Ferrari", posicoes: ["LE"], forca: 81 },
      { nome: "Dudu", posicoes: ["VOL"], forca: 88 },
      { nome: "Zequinha", posicoes: ["MC"], forca: 87 },
      { nome: "Ademir da Guia", posicoes: ["MEI"], forca: 95 },
      { nome: "Tupãzinho", posicoes: ["ATA"], forca: 86 },
      { nome: "Julinho Botelho", posicoes: ["PD"], forca: 90 },
      { nome: "Servílio", posicoes: ["ATA"], forca: 84 },
      { nome: "Leivinha", posicoes: ["ATA","PE"], forca: 88 }
    ]
  }

];
