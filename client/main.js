import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';


Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

});

Template.time.helpers({
  getDateCTime(){

    return moment().format('YYYY年mm月DD日')
  },
  getDateETime(){
    moment.locale('en');
    return moment().format('LLLL');
  }
});

Template.hello.events({
  'click button'(event, instance) {

    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.isEnglish.events({
  'click button'(event, instance) {
    //if(/^[\u4e00-\u9fa5]+$/i.test($("#txtName").val())){
    //  debugger;
    //  alert('这个是中文的名字哦');
    //}else {
    //  alert('这个是英文的名字哦');
    //}
    Meteor.call("getMyIp", function(e,r){
      //instance.counter.set(r)
      $("#txtName").val(r);
    });
  }
});

Template.addUser.events({
  'click #btnAdd'(event,instance){
    var username=$("#exampleInputEmail1").val();
    var password=$("#exampleInputPassword1").val();
    Meteor.call("getMyIp", function(e,r){
      if(!e && r)
        MyCollconnection.insert({"username":username,"password":password,insertTime:Date.now(),"IP":r})
    });
  }
});

Template.userTable.events({
  'click .btnClose'(event,instance){
    MyCollconnection.remove({"_id":this._id})
  }
});


Template.userTable.helpers({
  posts:MyCollconnection.find()
});


Template.registerHelper("getDate",function(time,format){
  return moment(time).format(format);
})