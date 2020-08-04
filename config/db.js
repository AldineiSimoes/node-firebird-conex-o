import Firebird from 'node-firebird';

var options = {};
 
options.host = '127.0.0.1';
options.port = 3050;
options.database = 'C:/Sistemas/delphi/ABImob/Dados/imob.fdb';
options.user = 'SYSDBA';
options.password = 'masterkey';
options.lowercase_keys = false; // set to true to lowercase keys
options.role = null;            // default
options.pageSize = 4096;        // default when creating database

var con = Firebird.pool(5, options);

export default con;

