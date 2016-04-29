/**
 * Created by Administrator on 2016/4/28.
 */
Router.route('/', function () {
    this.render('userTable');
});

Router.route('/addUser', function () {
    this.render('addUser');
});