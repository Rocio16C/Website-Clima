
let sceneUrl;
let background = "";
let colorsDays = "";
let colorCard = "";

export function configureWeather(img) {
    switch (img) {
        case '01d': //cielo despejado
            sceneUrl = "https://prod.spline.design/Zc0V6CRUfCrP1jrx/scene.splinecode";
            background = "#FFBE41";
            colorsDays = "#9E6105";
            colorCard = "#F6DD9A";
            break;
        case '02d': //algunas nubes
            sceneUrl = "https://prod.spline.design/OeOCnJqgXz2BZ7MH/scene.splinecode";
            background = "#1DC3E6";
            colorsDays = "#0063F8";
            colorCard = "#58DFFD";
            break;
        case '03d': //nubes dispersas
            sceneUrl = "https://prod.spline.design/bAKl-mw4DCzfDwRL/scene.splinecode";
            background = "#DADAE1";
            colorsDays = "#B4B9BA";
            colorCard = "#EDF1F2";
            break;
        case '04d': //nublado
            sceneUrl = "https://prod.spline.design/xHhbVv9jfwvpV-Vz/scene.splinecode";
            background = "#9D9DB0";
            colorsDays = "#4A4B5D";
            colorCard = "#E8E8F0";
            break;
        case '09d': //llovizna
            sceneUrl = "https://prod.spline.design/HQdpIRKDyMsgTfKF/scene.splinecode";
            background = "#4E648D";
            colorsDays = "#0A275C";
            colorCard = "#808EA8";
            break;
        case '10d': //lluvia
            sceneUrl = "https://prod.spline.design/cbk6q0krXDmNrT9o/scene.splinecode";
            background = "#595CAB ";
            colorsDays = "#0B0F65";
            colorCard = "#9496C7";
            break;
        case '11d': //tormenta
            sceneUrl = "https://prod.spline.design/ss50MtCxpKzprUkM/scene.splinecode";
            background = "#05466A";
            colorsDays = "#D3142D";
            colorCard = "#0E71A9";
            break;
        case '13d': //nieve
            sceneUrl = "https://prod.spline.design/HabGz6InPO9kLAXX/scene.splinecode";
            background = "#D9D9D9";
            colorsDays = "#BED6D8";
            colorCard = "#ebf8ff";
            break;
        case '50d': //neblina
            sceneUrl = "https://prod.spline.design/hSKL3h6akWqnqlyl/scene.splinecode";
            background = "#9D9DB0";
            colorsDays = "#4A4B5D";
            colorCard = "#E8E8F0";
            break;
        case '01n':
            sceneUrl = "https://prod.spline.design/EJ7KvTPA9uEfQFix/scene.splinecode";
            background = "#020620";
            colorsDays = "#060B14";
            colorCard = "#8e929e";
            break;
        case '02n':
            sceneUrl = "https://prod.spline.design/3bqMunm7mLvgvaNg/scene.splinecode";
            background = "#020620";
            colorsDays = "#060B14";
            colorCard = "#8e929e";
            break;
        case '03n':
            sceneUrl = "https://prod.spline.design/bAKl-mw4DCzfDwRL/scene.splinecode";
            background = "#DADAE1";
            colorsDays = "#B4B9BA";
            colorCard = "#EDF1F2";
            break;
        case '04n':
            sceneUrl = "https://prod.spline.design/klu8oYO6eURpxAg4/scene.splinecode";
            background = "#9D9DB0";
            colorsDays = "#4A4B5D";
            colorCard = "#E8E8F0";
            break;
        case '09n':
            sceneUrl = "https://prod.spline.design/KrqavXrPJyRfxVPW/scene.splinecode";
            background = "#4E648D";
            colorsDays = "#0A275C";
            colorCard = "#808EA8";
            break;
        case '10n':
            sceneUrl = "https://prod.spline.design/WKAOEOUjJ0Wq-xKb/scene.splinecode";
            background = "#595CAB ";
            colorsDays = "#0B0F65";
            colorCard = "#9496C7";
            break;
        case '11n':
            sceneUrl = "https://prod.spline.design/mI1PoQJwcnjnKgoR/scene.splinecode";
            background = "#05466A";
            colorsDays = "#D3142D";
            colorCard = "#0E71A9";
            break;
        case '13n':
            sceneUrl = "https://prod.spline.design/3c4BVg869dxhwdRO/scene.splinecode";
            background = "#D9D9D9";
            colorsDays = "#BED6D8";
            colorCard = "#ebf8ff";
            break;
        case '50n':
            sceneUrl = "https://prod.spline.design/hSKL3h6akWqnqlyl/scene.splinecode";
            background = "#9D9DB0";
            colorsDays = "#4A4B5D";
            colorCard = "#E8E8F0";
            break;
        default:
            sceneUrl = "https://prod.spline.design/Zc0V6CRUfCrP1jrx/scene.splinecode";
            background = "#FFBE41";
            colorsDays = "#9E6105";
            colorCard = "#F6DD9A";
    }
}
export { sceneUrl, background, colorsDays, colorCard };