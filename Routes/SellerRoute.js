

const  express=require("express")
const { getAllProducts,addPost } = require("../controllers/SellerController")


const router=express.Router()

router.get("/products/all",getAllProducts)
router.post("/products/add-a-product",addPost)


module.exports=router