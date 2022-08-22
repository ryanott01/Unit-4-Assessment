const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const cookieClicker = document.getElementById("cookieButton")


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
const putCookie = () => {
    axios.get("http://localhost:4000/api/cookieCount/")
    .then(res => {
        const data = res.data;
            if (data = 1){
                alert(`you have ${(data)}cookies`)}
        
    })

        
        
}




fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
cookieClicker.addEventListener('click', putCookie)