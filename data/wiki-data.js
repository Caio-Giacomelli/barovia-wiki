// ===== DADOS DA WIKI - CURSE OF STRAHD =====

// IDs dos POIs no SVG do mapa
const cityIds = [
    "krezk",
    "argynvostholt",
    "vallaki",
    "velho-moinho",
    "portao-oeste",
    "castelo-ravenloft",
    "cachoeiras-tser",
    "acampamento-vistani-lago-tser",
    "encruzilhada-rio-ivlis",
    "vila-da-barovia",
    "portao-leste"
];

// ===== DADOS DAS CIDADES/LOCAIS =====
const cities = {
    "krezk": {
        displayName: "Krezk",
        region: "Oeste de Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "vallaki": {
        displayName: "Vallaki",
        region: "Centro de Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "acampamento-vistani": {
        displayName: "Acampamento Vistani",
        region: "Próximo a Vallaki",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "velho-moinho": {
        displayName: "Velho Moinho",
        region: "Estrada entre Vallaki e Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "argynvostholt": {
        displayName: "Argynvostholt",
        region: "Sul de Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "portao-oeste": {
        displayName: "Portão Oeste",
        region: "Estrada para Vallaki",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "castelo-ravenloft": {
        displayName: "Castelo Ravenloft",
        region: "Pilar de Ravenloft",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "cachoeiras-tser": {
        displayName: "Cachoeiras Tser",
        region: "Rio Ivlis",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "acampamento-vistani-lago-tser": {
        displayName: "Acampamento Vistani do Lago Tser",
        region: "Lago Tser",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "vila-da-barovia": {
        displayName: "Vila da Barovia",
        region: "Leste de Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: "",
        mapFile: "assets/maps/vila-barovia.svg"
    },
    "portao-leste": {
        displayName: "Portão Leste",
        region: "Entrada leste de Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    },
    "encruzilhada-rio-ivlis": {
        displayName: "Encruzilhada do Rio Ivlis",
        region: "Centro-sul de Barovia",
        description: "",
        population: "",
        government: "",
        features: [],
        notes: ""
    }
};

// ===== MAPAS DE CIDADES (sub-mapas) =====
const cityMaps = {
    "vila-da-barovia": {
        svgFile: "assets/maps/vila-barovia.svg",
        displayName: "Vila da Barovia",
        cityIds: [
            "igreja-e-cemiterio",
            "casa-durst",
            "taverna-sangue-da-vinha",
            "emporio-bildrath",
            "casa-maria-louca",
            "mansao-burgomestre"
        ],
        cities: {
            "igreja-e-cemiterio": {
                displayName: "Igreja & Cemitério",
                region: "Norte da Vila",
                description: "A igreja de Barovia, parcialmente em ruínas, guarda segredos sombrios em seu porão. O cemitério adjacente abriga os mortos inquietos.",
                population: "",
                government: "",
                features: ["Padre Donavich", "Doru (vampiro no porão)", "Cemitério com túmulos profanados"],
                notes: ""
            },
            "casa-durst": {
                displayName: "Casa Durst (Casa da Morte)",
                region: "Norte da Vila",
                description: "Uma mansão aparentemente normal que esconde horrores indescritíveis. Os espíritos de Rose e Thorn Durst ainda vagam por seus corredores.",
                population: "",
                government: "",
                features: ["Armadilha para aventureiros", "Culto secreto no subsolo", "Espíritos de crianças"],
                notes: ""
            },
            "taverna-sangue-da-vinha": {
                displayName: "Taverna Sangue da Vinha",
                region: "Centro da Vila",
                description: "A única taverna da vila, um lugar sombrio onde os locais afogam seus medos em vinho aguado.",
                population: "",
                government: "",
                features: ["Arik the Barkeep", "Ismark Kolyanovich", "Vistani ocasionais"],
                notes: ""
            },
            "emporio-bildrath": {
                displayName: "Empório de Bildrath",
                region: "Centro da Vila",
                description: "A loja geral da vila, comandada pelo ganancioso Bildrath que cobra preços absurdos por itens básicos.",
                population: "",
                government: "",
                features: ["Bildrath (dono)", "Parriwimple (sobrinho)", "Preços inflacionados"],
                notes: ""
            },
            "casa-maria-louca": {
                displayName: "Casa de Maria Louca",
                region: "Sul da Vila",
                description: "Uma casa em estado deplorável onde vive Maria Louca, uma mulher consumida pela dor da perda de sua filha Gertruda.",
                population: "",
                government: "",
                features: ["Maria Louca", "Gertruda desaparecida", "Atmosfera desoladora"],
                notes: ""
            },
            "mansao-burgomestre": {
                displayName: "Mansão do Burgomestre",
                region: "Sul da Vila",
                description: "A antiga residência do Burgomestre Kolyan Indirovich, agora falecido. Seus filhos Ismark e Ireena tentam sobreviver aqui.",
                population: "",
                government: "",
                features: ["Ireena Kolyana", "Ismark the Lesser", "Corpo do Burgomestre", "Marcas de garras nas paredes"],
                notes: ""
            }
        }
    }
};

// ===== PERSONAGENS =====
const characters = [];

// ===== LEGIÃO / FACÇÕES =====
const legion = [];

// ===== VILÕES =====
const villains = [];

// ===== PONTOS DE INTERESSE NO MAPA =====
const mapMarkers = [];

// ===== PARADAS DA JORNADA =====
var journeyStops = [];
