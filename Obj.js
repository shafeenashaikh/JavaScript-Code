let alien = {
    name: 'am',
    tech: 'JS',
    Laptop: {
        CPU: '17',
        ram: 2,
        brand: 'Asus',
    }
}
for(let key in alien){
    console.log(key, alien[key]);
}