async function sleep(second){
    return new Promise((resolve, reject)=>{

        setTimeout(() => {
            resolve()
        }, second * 1000);
    })
}

(async ()=>{

    console.log("please wait...");
    await sleep(5);
    console.log("connecting to server...");
    await sleep(5);
    console.log("server found.");
    await sleep(5);
    console.log("fetching data...");
    await sleep(5);
    console.log("data retrieved successfully.");
    await sleep(3);
    console.log("loading...");
    await sleep(3);
    console.log("hare krsna user.");
    // await console.log(90);
})()