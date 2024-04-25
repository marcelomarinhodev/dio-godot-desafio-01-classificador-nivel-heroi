function getHeroLevel(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp <= 2000) {
        return "Bronze";
    } else if (xp <= 5000) {
        return "Prata";
    } else if (xp <= 7000) {
        return "Ouro";
    } else if (xp <= 8000) {
        return "Platina";
    } else if (xp <= 9000) {
        return "Ascendente";
    } else if (xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

let heroName = "Antedeguemon";
let heroXp = 5000;
const messageTemplate = `O Herói de nome ${heroName} está no nível de ${getHeroLevel(heroXp)}`;


console.log(messageTemplate);