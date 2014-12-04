var require_kdb=[{filename:"testapp.kdb", url:"http://rawgit.com/yapcheahshen/testapp/master/testapp.kdb" , desc:"testapp"}];
var Main = React.createClass({
  mixins:[Require("defaultmain")],
  dbid:"testapp",
  defaultTofind:"",
  require_kdb:require_kdb,
});
module.exports=Main;