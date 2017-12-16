

const a = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('asyn')
        resolve(true)
    }, 1000)
})

const bb = async () => {
    await a()
    console.log('!!!!!!!')
}


bb()
