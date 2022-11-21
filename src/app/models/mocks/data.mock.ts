import { PageInterface } from '../interfaces/page.interface';
import { SwitchOptions } from '../interfaces/switch.interface';

export const navbarDataMockPT: string[] = [
  'Home', 'Info', 'Geral', 'ODS', 'Gráficos', 'Ranking',
];
export const navbarDataMockEN: string[] = [
  'Home', 'Info', 'Overview', 'SDG', 'Charts', 'Ranking',
];

export const optionsDataMockPT: SwitchOptions[] = [
  {
    on: 'Claro',
    off: 'Escuro',
  },
  {
    on: 'Português',
    off: 'Inglês',
  },
];
export const optionsDataMockEN: SwitchOptions[] = [
  {
    on: 'Light',
    off: 'Dark',
  },
  {
    on: 'Portuguese',
    off: 'English',
  },
];

export const homeOptionsPT: PageInterface = {
  title: 'ODS Tracker',
  caption: 'Desempenho do Brasil',
  description: 'De acordo com o Índice de Desenvolvimento Sustentável das Cidades',
};
export const homeOptionsEN: PageInterface = {
  title: 'ODS Tracker',
  caption: 'Brazil\'s performance',
  description: 'According to the Sustainable Development Index of Cities',
};

export const infoOptionsPT: PageInterface[] = [
  {
    title: 'Visão Geral',
    description: 'O Índice de Desenvolvimento Sustentável das Cidades – Brasil (IDSC-BR) apresenta uma avaliação abrangente da distância para se atingir as metas e objetivos da Agenda 2030 nos 5.570 municípios brasileiros, com base nos dados mais atualizados disponíveis nas fontes nacionais e oficiais. A intenção é orientar a ação política de prefeitos e prefeitas, definir referências e metas com base em indicadores e facilitar o monitoramento dos ODS em nível local. Há uma score para cada objetivo e outra para o conjunto dos 17 ODS, de modo que seja possível avaliar os progressos e desafios dos municípios brasileiros para o cumprimento da Agenda 2030.',
    icon: 'visibility',
  },
  {
    title: 'Quem Faz',
    description: 'O Índice de Desenvolvimento Sustentável das Cidades é uma iniciativa do Instituto Cidades Sustentáveis, no âmbito do Programa Cidades Sustentáveis, realizada em parceria com a Sustainable Development Solution Network (SDSN). O IDSC-BR conta com apoio do Projeto Citinova, do Ministério da Ciência, Tecnologia e Inovações (MCTI), do Programa das Nações Unidas para o Meio Ambiente e do Fundo Global para o Meio Ambiente (GEF na sigla em inglês). A coleta de dados e indicadores foi realizada pelo Centro Brasileiro de Análise e Planejamento (Cebrap).',
    icon: 'person',
  },
  {
    title: 'Indicadores',
    description: 'Contemplam áreas como saúde, educação, renda, moradia, assistência social, igualdade de cor e gênero, acesso à água e ao esgotamento sanitário, energia, segurança pública, emissões e diversas outras. Associados e agrupados por ODS, eles permitem que se obtenha uma score específica por objetivo e outra geral, para o conjunto dos 17 compromissos estabelecidos pela ONU em 2015.',
    icon: 'analytics',
  },
  {
    title: 'Metodologia',
    description: 'A metodologia do IDSC-BR foi elaborada pela rede SDSN (UN Sustainable Development Solution Network), uma iniciativa da ONU para mobilizar conhecimentos técnicos e científicos da academia, da sociedade civil e do setor privado no apoio de soluções em escalas locais, nacionais e globais. Lançada em 2012, a SDSN já desenvolveu índices para diversos países e cidades do mundo. Articulada em redes, a SDSN conta hoje com mais de 40 grupos nacionais e regionais, sendo dois deles no Brasil (um de caráter nacional e outro dedicado à Amazônia).',
    icon: 'assignment',
  } ];
export const infoOptionsEN: PageInterface[] = [
  {
    'title': 'Overview',
    'description': 'The Sustainable Cities Development Index – Brazil (IDSC-BR) presents a comprehensive assessment of the distance to achieve the goals and objectives of the 2030 Agenda in the 5,570 Brazilian municipalities, based on the most up-to-date data available from national and official sources. The intention is to guide the political action of mayors and mayors, define benchmarks and targets based on indicators and facilitate monitoring of the SDGs at the local level. There is a score for each objective and another for the set of 17 SDGs, so that it is possible to assess the progress and challenges of Brazilian municipalities in meeting the 2030 Agenda.',
    'icon': 'visibility',
  },
  {
    'title': 'Who Does',
    'description': 'The Sustainable Cities Development Index is an initiative of the Sustainable Cities Institute, under the Sustainable Cities Program, carried out in partnership with the Sustainable Development Solution Network (SDSN). IDSC-BR is supported by the Citinova Project, the Ministry of Science, Technology and Innovation (MCTI), the United Nations Environment Program and the Global Environment Facility (GEF). Data and indicators were collected by the Brazilian Center for Analysis and Planning (Cebrap).',
    'icon': 'person',
  },
  {
    'title': 'Indicators',
    'description': 'They cover areas such as health, education, income, housing, social assistance, equality of color and gender, access to water and sanitation, energy, public safety, emissions and many others. Associated and grouped by SDGs, they allow obtaining a specific score by objective and a general one, for the set of 17 commitments established by the UN in 2015.',
    'icon': 'analytics',
  },
  {
    'title': 'Methodology',
    'description': 'The IDSC-BR methodology was developed by the SDSN (UN Sustainable Development Solution Network), a UN initiative to mobilize technical and scientific knowledge from academia, civil society and the private sector to support solutions at local, national and global scales. . Launched in 2012, SDSN has already developed indices for several countries and cities around the world. Articulated in networks, SDSN currently has more than 40 national and regional groups, two of them in Brazil (one national and the other dedicated to the Amazon).',
    'icon': 'assignment',
  },
];

export const overviewOptionsPT: PageInterface = {
  title: 'No Brasil,',
  items: [
    '0 cidades (0%) atingiram o nível muito alto de desenvolvimento (80 pontos ou mais)',
    '113 cidades (2%) atingiram o nível alto de desenvolvimento (60 a 79,99 pontos)',
    '1.566 cidades (28%) atingiram o nível médio de desenvolvimento (50 a 59,99 pontos)',
    '3.139 cidades (56%) atingiram o nível baixo de desenvolvimento (40 a 49,99 pontos)',
    '752 cidades (14%) atingiram o nível muito baixo de desenvolvimento (0 a 39,99 pontos)',
  ],
};
export const overviewOptionsEN: PageInterface = {
  title: 'In Brazil,',
  items: [
    '0 cities (0%) reached the very high level of development (80 points or more)',
    '113 cities (2%) reached the high level of development (60 to 79.99 points)',
    '1,566 cities (28%) reached the medium level of development (50 to 59.99 points)',
    '3,139 cities (56%) reached the low level of development (40 to 49.99 points)',
    '752 cities (14%) reached the very low level of development (0 to 39.99 points)',
  ],
};
