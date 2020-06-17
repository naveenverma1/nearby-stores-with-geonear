const router = require("express").Router();
const StoreController = require("../controller/geocontroller");
// const multer = require('multer');

// const storage = multer.diskStorage({

//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');

//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({
//     storage: storage,
//     limits: {
//         fileSize: 1024 * 1024 * 5
//     }
//     // fileFilter: fileFilter
// });
router
	.route("/")
	.get(StoreController.index)
	.post(StoreController.store);
router
	.route("/:id([0-9a-fA-F]{24})")
	.get(StoreController.show)
	.put(StoreController.update)
	.delete(StoreController.destroy);

module.exports = router;
