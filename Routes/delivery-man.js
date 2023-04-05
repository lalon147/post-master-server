const express=require("express")
const {createDeliveryMan,getAllDeliveryMan}=require("../controllers/delivery-man-controller")

const router=express.Router()


router.post("/",createDeliveryMan)
router.get("/",(req,res)=>{
    res.send("helloo delivery man")
})
router.get("/all",getAllDeliveryMan)

module.exports=router