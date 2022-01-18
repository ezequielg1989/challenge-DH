const express = require('express');
const router = express.Router();
const songController = require('../Controllers/songs')

/* GET de todas las canciones */
router.get("/canciones",songController.getAll)
/*CREATE de una cancion */
router.post("/canciones",songController.createSong)
/*GET de cancion por ID */
router.get("/canciones/:id",songController.getSong)
/*PUT de cancion por ID a modificar */
router.put("/canciones/:id",songController.updateSong)
/*DELETE de cancion por ID */
router.delete("/canciones/:id",songController.deleteSong)
/*GET de la cantidad de canciones por genero */
router.get("/generos",songController.getAllGeneros)
module.exports = router;
