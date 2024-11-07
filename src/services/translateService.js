
const excludeWords = [
    'iguala',
    'noche',
    'triste',
    'sopa',
    'feliz',
    'sopas',
    'lluvia',
    'arena',
    'selva',
    'agua',
    'dia',
    'día',
    'chilpancingo',
    'costa grande',
    'tierra caliente'
]


export async function translateCity(city) {

    const lowerWords = city.toLowerCase()
    if(excludeWords.includes(lowerWords)){
        return city
    }

    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(city)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud de traducción');
        }
        const data = await response.json();
        //console.log(data[0][0][0]); 
        return data[0][0][0] // El resultado de la traducción
    } catch (error) {
        console.error('Error al traducir:', error);
    }
}

export async function translateName(name) {

    const lowerWords = name.toLowerCase()
    if(excludeWords.includes(lowerWords)){
        return name
    }

    const url = `https://api.mymemory.translated.net/get?q=${name}!&langpair=en|es-MX}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error en la solicitud de traducción');
        }
        const data = await response.json();
        const translatedText = data.responseData.translatedText;
        //console.log(translatedText); 
        return translatedText; // El resultado de la traducción
    } catch (error) {
        console.error('Error al traducir:', error);
        //return name;
    }
}

export function cleanText(text) {
    const splitText = text.split(/[_.]/)[0];
    return splitText.replace(/[^a-zA-ZáéíóúüñÁÉÍÓÚÜÑ\s]/g, '');
}

