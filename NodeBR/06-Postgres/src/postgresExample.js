

async function main() {
    
    // await Herois.create({
    //     nome: 'Anderson',
    //     poder: '???I do know ??'
    // })
    const result = await Herois.findAll({raw: true});
    console.log(result);
}

main();