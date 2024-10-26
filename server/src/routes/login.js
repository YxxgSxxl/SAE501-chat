const express = require("express");
const { storeToken } = require("../utils/token/storeToken");
const database = require("../utils/db/databaseInit.js");

const router = express.Router();

/*
    Supprime un utilisateur dans la base de donnée

    Interconnection entre PrestaShop et le chat

    Body {
        email (prestashop)
        passwd (prestashop)
    }
*/
router.post("/api/login", async (req, res) => {
  const email = req.body["email"];
  const password = req.body["password"];

  const [userData] = await database.query(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [email, password]
  );

  if (userData.length === 0 || !userData) {
    return res.status(401).json({
      success: false,
      message: "Nom d'utilisateur et/ou le mot de passe incorrect(s).",
    });
  } else {
    storeToken(userData, res);

    console.log("username:", email);
    console.log("password:", password);

    console.log("userData:", userData);

    return res.json({
      success: true,
      message: "Connexion réussie !",
    });
  }
});

module.exports = router;
