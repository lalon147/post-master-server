

const  express=require("express")
const { getAllProducts,addProduct } = require("../controllers/SellerController")


const router=express.Router()

router.get("/products/all",getAllProducts)
router.post("/products/add-a-product",addProduct)


module.exports=router