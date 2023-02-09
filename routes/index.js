var express = require('express');
var usercontroller = require('../controller/user');
var coursecontroller = require('../controller/course');
var categorycontroller = require('../controller/category');
var subcategorycontroller = require('../controller/subcategory');
var topiccontroller = require('../controller/topic');
var topicdescribecontroller = require('../controller/topicdescribe');


var router = express.Router();


/* GET home page. */
//sigup
router.post('/sigup', usercontroller.sigup);
router.post('/login', usercontroller.login);
// router.post('/sequre',usercontroller.sequre);



//course
router.post('/addcourse', usercontroller.sequre, coursecontroller.addcourse);
router.get('/deletecourse', coursecontroller.deletecourse);
router.post('/updatecourse', usercontroller.sequre, coursecontroller.updatecourse);
router.get('/showcourse', coursecontroller.showcourse);

//category
router.post('/addcategory', usercontroller.sequre, categorycontroller.addcategory);
router.get('/deletecategory', categorycontroller.deletecategory);
router.post('/updatecategory', usercontroller.sequre, categorycontroller.updatecategory);
router.get('/showcategory', categorycontroller.showcategory);

//subcategory
router.post('/addsubcategory', usercontroller.sequre, subcategorycontroller.addsubcategory);
router.get('/deletesubcategory', subcategorycontroller.deletesubcategory);
router.post('/updatesubcategory', usercontroller.sequre, subcategorycontroller.updatesubcategory);
router.get('/showsubcategory', subcategorycontroller.showsubcategory);

//topic
router.post('/addtopic', usercontroller.sequre, topiccontroller.addtopic);
router.get('/deletetopic', topiccontroller.deletetopic);
router.post('/updatetopic', usercontroller.sequre, topiccontroller.updatetopic);
router.get('/showtopic', topiccontroller.showtopic);

//topic-describe
router.post('/addtopicdescribe', topicdescribecontroller.addtopicdescribe);
router.get('/deletetopicdescribe', topicdescribecontroller.deletetopicdescribe);
router.post('/updatetopicdescribe', topicdescribecontroller.updatetopicdescribe);
router.get('/showtopicdescribe',usercontroller.sequre ,topicdescribecontroller.showtopicdescribe);




module.exports = router;
