const express=require("express")

const {deactivateUser,deletePost,getAllUsers,activateUser,verifyUser,deleteUser}=require("../controllers/adminController")

const router=express.Router()

router.get("/users/all",getAllUsers)
router.delete("/users/delete/:id",deleteUser)
router.put("/users/deactive/:id",deactivateUser)
router.put("/users/active/:id",activateUser)
router.put("/users/verify/:id",verifyUser)
router.delete("/posts/delete/:id",deletePost)





module.exports = router