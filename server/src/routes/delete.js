const express = require('express');
const router = express.Router();
const database = require('../utils/db/databaseInit.js');

/*
    Enregistre un utilisateur dans la base de donnée

    Interconnection entre PrestaShop et le chat

    Body {
        id (prestashop)
        username (prestashop)
    }
*/
router.post('/delete', async (req, res) => {
    const { id } = req.body;

    try {
        // Enregistre l'utilisateur dans la bdd du chat
        await database.query(`DELETE FROM user WHERE id=${id};`);

        return res.json({
            success: true,
            message: `Utilisateur supprimé !`
        });
    } catch (error) {
        console.error('Erreur lors de la suppression de l\'utilisateur :', error);
        return res.status(500).json({
            success: false,
            message: 'Erreur lors de la suppresion de l\'utilisateur.'
        });
    }
});

module.exports = router;