export const getUser = async (req, res) => {
    console.log(req)
    if(req.params.id) return res.json({ example: 4 })
    res.status(404).json({ error: "no existe este id"  })
}