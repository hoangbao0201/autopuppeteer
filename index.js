const express = require("express")
const app = express()
const PORT = 4000





const main = async () => {


    app.get("/", (req, res) => {
        
        return res.json({
            name: 'BY NGUYENHOANGBAO'
        })
    })

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`)
    })

}

main().catch((error) => {
    console.log(error)
})