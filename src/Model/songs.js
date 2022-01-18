const db = require("../database/models");
const { QueryTypes } = require('sequelize');

const { sequelize } = require("../database/models");

const songModel= {
    get: async (id) => {
        try {
            
            const songs = await db.canciones.findOne({
                where:{
                    id:id
                }
            })
            return songs
        } catch (error) {
            console.log(`fallo traer cancion de la DB ${error.message}`);
            return []
        }

    },
    getAll: async () => {
        try {
            return await db.canciones.findAll()
        } catch (error) {
            console.log(`fallo traer canciones de la DB ${error.message}`);
            return []
        }

    },
    getByPk: async (id) => {
        try {
            return await db.canciones.findByPk(id)
        } catch (error) {
            console.log(`fallo traer canciones de la DB ${error.message}`);
            return []
        }

    },
    getAllGeneros: async () => {
        try {
            const results = await sequelize.query('SELECT generos.name AS genero,count(genero_id) AS cantidad  FROM  canciones INNER JOIN generos ON genero_id = generos.id GROUP BY generos.name', { type: sequelize.QueryTypes.SELECT });
            return results
        } catch (error) {
            console.log(`fallo traer generos de la DB ${error.message}`);
            return []
        }

    },
    create: async (cancion) => {
        try {
            const response = await db.canciones.create(
                {
                    id: cancion.id,
                    titulo:cancion.titulo,
                    duracion:cancion.duracion ,
                    genero_id:cancion.genero_id,
                    album_id:cancion.album_id,
                    artista_id:cancion.artista_id,
                    createAt:cancion.createAt,
                    updateAt:cancion.updateAt
                }
            );
            return response
        } catch (error) {
            console.log(`fallo crear cancion a la DB ${error.message}`);
            return []
        }

    },
    update: async (id,song) => {
        try {
            const response = await db.canciones.update(song,
                {
                    where : {
                    id:id
                }
                }         
            )
            return response
        } catch (error) {
            console.log(`fallo actualizar cancion a la DB ${error.message}`);
            return []
        }
    },
    delete: async (id) => {
        try {
            const songs = await db.canciones.destroy({
                where:{
                    id:id
                }
            })
            return songs
        } catch (error) {
            console.log(`fallo borrar cancion a la DB ${error.message}`);
            return []
        }
    }

}

module.exports = songModel;