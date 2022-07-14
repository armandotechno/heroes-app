import { heroes } from "../data/hero"


export const getHeroById = ( id ) => {

    return heroes.find( hero => hero.id === id );

}