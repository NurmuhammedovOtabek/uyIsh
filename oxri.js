const instance = axios.create({
    baseURL: 'https://686fabb391e85fac42a209a2.mockapi.io',
});
let box = document.querySelector(".box")

async function getUsers() {
    let {data} = await instance.get(`/user`)
    getScrin(data)
}
function getScrin(data){
    data.forEach(element => {
        box.insertAdjacentHTML("beforeend" ,
            `<div class="card">
        <h1> Name:${data.name}</h1>
        <h2>Paswor:${data.paswor}</h2>
        <p>Email:${data.emil}</p>
        </div>`
    )
    });
}
getUsers()