const axios = require('axios');

const getCurrency = async (req, res) => {
    const querying = Object.keys(req.query);
    try {
        const get_api = await axios.get(`https://api.exchangeratesapi.io/latest?${querying[0]}=${req.query[querying[0]]}&${querying[1]}=${req.query[querying[1]]}`);
        const result = get_api;

        res.status(200).json({
            results: {
                base: result.data.base,
                date: result.data.date,
                rates: result.data.rates
            }
        }
        )
    } catch (err) {  
        res.status(404).json({ message: err })
 }
}
module.exports = getCurrency;