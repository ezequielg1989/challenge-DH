

const {songModel} = require('../Model')


const cancionesController= {
    getSong: async (req,res,next) => {
        try {
            const id = req.params.id
            const response = await songModel.get(id);
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})   
        }

    },
    getAll: async function (req,res,next) {
        try {
            const response = await songModel.getAll();
            //res.render('allSongs',{songs:result});
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})   
        }

    },
    getAllGeneros: async function (req,res,next) {
        try {
            const response = await songModel.getAllGeneros();
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})   
        }

    },
    createSong: async (req,res,next) => {
        try {
            const body = req.body;
            console.log(body);
            const response = await songModel.create(body)
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})            
        }

    },
    updateSong: async (req,res,next) => {
        try {
            let song = {
                titulo:req.body.titulo,
                duracion:req.body.duracion,
                genero_id:req.body.genero_id,
                album_id:req.body.album_id,
                artista_id:req.body.artista_id,
                createAt:req.body.createAt,
                updateAt:req.body.updateAt
            } 
            const response = await songModel.update(req.params.id,song);
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})
        }
    },
    deleteSong: async (req,res,next) => {
        try {
            const response = await songModel.delete(req.params.id);
            res.status(200).json({data: response, error:null, succes:true})
        } catch (error) {
            res.status(500).json({data:null, error: error, succes:false})            

        }
    }

}

module.exports = cancionesController