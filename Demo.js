const Demo = (req, res) => {
    console.log(req.params.name)
    let ok = req.query;
    console.log(typeof ok)
    res.send([
        {
            name: "Bhawishya",
            class: 15
        },
        {
            name: "lolly",
            class: 18
        }
    ])
};
export default Demo;