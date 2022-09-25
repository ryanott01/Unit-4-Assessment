
const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const lovedItem = document.getElementById("lovedItem")
const hatedItem = document.getElementById("hatedItem")

//const hatedClassVar = Array.from(document.getElementsByClassName('hatedClass'))
const lovedClassVar = document.querySelectorAll('.lovedClass')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};
const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

 function deleteHated(i){
    console.log(i)
     axios.delete(`http://localhost:4000/api/hated:${i}`).then((res) => {console.log(res)}
 )}
const postHatedItem = (e) => {
    e.preventDefault();
    const inputValue = hatedItem.value
    axios.post("http://localhost:4000/api/hated/", { inputValue }).then((res) => {
    const hatedClassVar = Array.from(document.getElementsByClassName('hatedClass'))    
    hatedClassVar.forEach(item => {
        item.remove()});
    for(i=0; i < res.data.length; i++) {
            console.log(res.data)
            let listedHatedItem = document.createElement("div");
            listedHatedItem.innerHTML = `<h3>You hate ${res.data[i]}</h3><button onclick="deleteHated(${i})">delete</button><br>`;
                listedHatedItem.setAttribute('id', `hatedItemID${i}`)
                listedHatedItem.setAttribute('class', 'hatedClass')
                hatedSection.appendChild(listedHatedItem)
            };
        });
    };
    
    function deleteLoved(i){
        axios.delete(`http://localhost:4000/api/loved:${i}`).then((res) => {console.log(res)}
    )}
    const postLovedItem = (e) => {
        e.preventDefault();
        const inputValue = lovedItem.value
        axios.post("http://localhost:4000/api/loved/", { inputValue }).then((res) => {
            const lovedClassVar = Array.from(document.getElementsByClassName('lovedClass'))    
            lovedClassVar.forEach(item => {
                item.remove()});
                for(i=0; i < res.data.length; i++) {
                    console.log(res.data)
                    let listedLovedItem = document.createElement("div");
                    listedLovedItem.innerHTML = `<h3>You love ${res.data[i]}</h3><button onclick="deleteLoved(${i})">delete</button><br>`;
                    listedLovedItem.setAttribute('id', `lovedItemID${i}`)
                    listedLovedItem.setAttribute('class', 'lovedClass')
                    lovedSection.appendChild(listedLovedItem)
                };
            });
        };
        
        
        
        fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
hateForm.addEventListener('submit', postHatedItem)
loveForm.addEventListener('submit', postLovedItem)
