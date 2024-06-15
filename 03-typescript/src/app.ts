
const heroes = [
    {
        id:1,
        name:"Spiderman",
        owner: "Marvel"
    },
    {
        id:2,
        name:"Ironman",
        owner: "Marvel"
    }, 
    {
        id:3,
        name:"Batman",
        owner: "DC"
    },  
]

const findHeroById = ( id: number ) => {
    return heroes.find( heroes => heroes.id == id );
}

const hero = findHeroById(5);

console.log(hero?.name ?? 'Heroe no encontrado!!');