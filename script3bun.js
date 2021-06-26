const items = [
    { "id": "9306c8909e", "name": "Party with guns", "artist": "Thundermother", "releaseYear": 1978 },
    { "id": "49baca3524", "name": "Riot avenue", "artist": "Beautiful Creatures", "releaseYear": 1994 },
    { "id": "df81cca436", "name": "Party with guns", "artist": "Mississippi Bones", "releaseYear": 1956 },
    { "id": "e493993b85", "name": "Ritual", "artist": "Guns'n'Roses", "releaseYear": 1975 },
    { "id": "6c3d54d7b7", "name": "Riot avenue", "artist": "Guns'n'Roses", "releaseYear": 1976 },
    { "id": "4ca1171c2a", "name": "Suffer", "artist": "Alice Cooper", "releaseYear": 1972 },
    { "id": "4545889c17", "name": "Riot avenue", "artist": "Mississippi Bones", "releaseYear": 1959 },
    { "id": "8e91ad9f84", "name": "Psycho circus", "artist": "Monster Magnet", "releaseYear": 2007 },
    { "id": "7870c65cd3", "name": "Capricorn", "artist": "Smokey Fingers", "releaseYear": 2002 },
    { "id": "10ac1f6271", "name": "Deuce", "artist": "Monster Magnet", "releaseYear": 2004 }
  ]

  
  /* Afisam tot object ul respectiv filtru <= 2000 */
/*
  const filteredItems = items.filter((item) => {
      return item.releaseYear <= 2000
  })

  console.log(filteredItems);
  console.log(items);
*/


/* Afisam in console doar anul  */
/*
const itemNames = items.map((item) => {
    return item.releaseYear 
})

console.log(itemNames);
*/


/*Afiseaza doar anul ales strict egal */
/*
const foundItems = items.find((item) => {
    return item.releaseYear === 1978 
})

console.log(foundItems);
*/


/*Suma de ani */
/*
const total = items.reduce((currentTotal, item) => {
    return item.releaseYear + currentTotal
}, 0)

console.log(total);
*/





/*
for(i = 0; i < items; i++){
    if(items[i].releaseYear < 2000) {
        console.log(items[i].name )
    }
}
*/



const foundItems = items.findIndex(items =>{
    let release
    return items.releaseYear === 1978;
})

console.log(foundItems);