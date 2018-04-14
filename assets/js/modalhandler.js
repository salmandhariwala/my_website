// one time activity to support modal
var holdyDiv = $('<div style=""></div>').attr('id', 'demo-container');
holdyDiv.appendTo('body');

function showSkillModalx(id) {

    var templatemodal = '<div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><center><h4 class="modal-title">***head</h4></center></div><div class="modal-body"><p>***body</p></div><div class="modal-footer"><button type="button" class="btn btn-warning" data-dismiss="modal" >Close</button></div></div></div></div>'

    var a = templatemodal.replace('***head', head[id]).replace('***body', body[id]);

    $("#demo-container").html(a);

    $("#myModal").modal();

}


function showCertiModalx(id) {

    var templatemodal = '<div class="modal fade" id="myModal" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><center><h4 class="modal-title">***head</h4></center></div><div class="modal-body"><center><iframe src="***url" width="550px" height="480px"></iframe></center></div><div class="modal-footer"><button type="button" class="btn btn-warning" data-dismiss="modal">Close</button></div></div></div></div>';

    var a = templatemodal.replace('***head', certihead[id]).replace('***url', certiurl[id]);

    $("#demo-container").html(a);

    $("#myModal").modal();


}

// data structure

var head = {};
var body = {};

var certihead = {};
var certiurl = {};

//skill mongo
head["skill_mongo"] = "mongo header";
body["skill_mongo"] = "mongo body";

//certi mongo1
certihead["certi_mongo1"] = "MongoDB for DBAs";
certiurl["certi_mongo1"] = "https://university.mongodb.com/course_completion/5b253bc83cb74f268d03aa51edc08473";

//certi mongo2
certihead["certi_mongo2"] = "MongoDB for DBAs";
certiurl["certi_mongo2"] = "https://university.mongodb.com/course_completion/cd2d7f1596bf42059d6b4b8a83be6f4f";

//certi Big Data Hadoop Foundations
certihead["certi_big1"] = "Big Data Hadoop Foundations";
certiurl["certi_big1"] = "https://www.youracclaim.com/badges/c5aa8bac-d04b-43ff-8ccd-619bd36ea4c7/linked_in_profile";

//certi Big Data Foundations
certihead["certi_big2"] = "Big Data Foundations";
certiurl["certi_big2"] = "https://www.youracclaim.com/badges/364d13e3-6de4-49e5-9fa4-c1994dfea303/linked_in_profile";

//certi
certihead["certi_nosql"] = "Introduction to NoSQL and DBaaS";
certiurl["certi_nosql"] = "https://drive.google.com/file/d/0B_Wwb6MCjx4NNnh4NV8wV0tRVUE/view?usp=sharing";

//certi
certihead["certi_hadoop"] = "Hadoop Platform and Application Framework";
certiurl["certi_hadoop"] = "";

//certi
certihead["certi_ml"] = "Machine Learning With Big Data";
certiurl["certi_ml"] = "";

//certi
certihead["certi_big3"] = "Big Data and Hadoop Essentials";
certiurl["certi_big3"] = "https://www.udemy.com/certificate/UC-RUK6BHVL/";

//certi
certihead["certi_aws"] = "Amazon Web Services For Entrepreneurs";
certiurl["certi_aws"] = "https://www.udemy.com/certificate/UC-9RS1VADS/";

//certi
certihead["certi_andro"] = "Android App Development";
certiurl["certi_andro"] = "https://drive.google.com/file/d/0B_Wwb6MCjx4NQ0w1aVF5bXBNTm8/view?usp=sharing";

//certi
certihead["certi_python"] = "Python";
certiurl["certi_python"] = "https://www.udemy.com/certificate/UC-6JAKFUBQ/";

//certi
certihead["certi_linux"] = "Introduction To Linux CentOS 7";
certiurl["certi_linux"] = "https://www.udemy.com/certificate/UC-XO6C5RZR/";

//certi
certihead["certi_maven"] = "Maven";
certiurl["certi_maven"] = "https://www.udemy.com/certificate/UC-KWZLWV12/";