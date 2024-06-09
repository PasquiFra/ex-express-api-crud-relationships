const express = require("express");
const router = express.Router();
const {
    store,
    index,
    show,
    update,
    destroy
} = require("../controllers/tags.js");

console.log("entrato rotte /tags")

router.post('/', store);
router.get('/', index);

router.get('/:name', show);
router.put('/:name', update);
router.delete('/:name', destroy);

module.exports = router;