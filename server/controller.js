let hatedItems = []
let lovedItems = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["you are in a coma","please wake up","ignore the last fortune","hard work pays off","a sword is poor company for a long road","you will get a fortune"];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
  
    res.status(200).send(randomFortune);
    },
    addHatedItem: (req, res) => {
        const { inputValue } = req.body
        hatedItems.push(inputValue)
        console.log(hatedItems)
            res.status(200).send(hatedItems)
    },
    deleteHatedItem: (req, res) => {
        const { index } = req.params;
        console.log(index) //cannot figure out why it is showing undefined it console on front end it logs the number as it should
                           //I will stop by queue and for this on tuesday
        hatedItems.splice(index, 1)
        console.log(hatedItems)
    },
    addLovedItem: (req, res) => {
        const { inputValue } = req.body
        lovedItems.push(inputValue)
        console.log(lovedItems)
            res.status(200).send(lovedItems)
            
    },
    deleteLovedItem: (req, res) => {
        const { index } = req.params;
        lovedItems.splice(index, 1)

        
    }}
