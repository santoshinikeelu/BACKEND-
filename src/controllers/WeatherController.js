let axios = require("axios")


let weatherdetails = async function (req, res) {
    try {
        
        let country = req.query.q
        let appId = req.query.appid
        console.log(`query params are: ${country} ${appId}`)
        var options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appId}`
        }
        let result = await axios(options)
        //console.log(result.data)
        //res.status(200).send({ msg: result.data })
        //get only temperature
        let temperature = result.data.main.temp
        console.log(temperature)
        res.status(200).send({msg:temperature})
    }
    catch (err) {
        //console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

const getallcitiestemp= async (req, res) => {
    try {
        
        let appId = req.query.appid;
        const cities = ["bengaluru","mumbai", "delhi", "kolkata", "chennai", "london", "moscow"];
        const temp = [];
        for (let i = 0; i < cities.length; i++) {
            var options = {
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appId}`
            }
            let result = await axios(options)
            let temperature = result.data.main.temp
            temp.push({city: cities[i], temp: temperature});

        }
        temp.sort((a, b) => a.temp - b.temp);  
        res.status(200).send({msg:temp});
    } catch (error) {
        res.status(500).send({msg:error});
    }
}
module.exports.weatherdetails = weatherdetails
module.exports.getallcitiestemp = getallcitiestemp