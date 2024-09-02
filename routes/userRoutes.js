const express = require('express');

const router = express.Router();
const usercontroller = require('../controllers/userController');



// const routes=(app)=>{
//     router.post('/postdetails',service.postdetails)
//     app.use('/api',router)
// }



// const express = require('express');
// const router = express.Router();
// const service = require('../controllers/userController');
// const routes=(app)=>{



const routes=(app)=>{

router.post('/signup', usercontroller.signup)
router.post('/Login',usercontroller.Login)
router.post('/forgetPassword',usercontroller.forgetPassword)
router.post('/studentdetails',usercontroller.studentdetails)
router.post('/staffdetails',usercontroller.staffdetails)
router.get('/getStaffDetails',usercontroller.getStaffDetails)
router.get('/getStudentDetails',usercontroller.getStudentDetails)
router.post('/ClassDetails',usercontroller.ClassDetails)
router.post('/Department',usercontroller.Department)
router.post('/Designation',usercontroller.Designation)
router.post('/medicine',usercontroller.medicine)
router.post('/medicine_used',usercontroller.medicine_used)
router.post('/Consulting_history',usercontroller.Consulting_history)
router.post('/Consulting_register',usercontroller.Consulting_register)
router.post('/home_dashboard',usercontroller.home_dashboard)
router.post('/plans',usercontroller.plans)
router.post('/Super_admin_med',usercontroller.Super_admin_med)
router.post('/Super_admin_ord',usercontroller.Super_admin_ord)
app.use("/api",router)

}

module.exports = routes;
