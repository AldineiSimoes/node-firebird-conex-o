var Service = require('node-windows').Service;
 
// Create a new service object
var svc = new Service({
  name:'Servidor ABImob',
  description: 'Administração de imoveis',
  script: 'C:\\apta\\index.js'
  
});
 
// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});
 