const express = require("express");
const router = express.Router();
const {
    store,
    index,
    show,
    update,
    destroy
} = require('../controllers/categories.js');

console.log("entrato rotte /categories")

router.post('/', store);
router.get('/', index);

router.get('/:name', show);
router.put('/:name', update);
router.delete('/:name', destroy);


module.exports = router;