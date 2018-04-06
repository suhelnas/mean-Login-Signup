import * as mongoose  from 'mongoose';
export class DbConfig {
  private static dbConn;
  static getDbDefaultCallbackHandle() {
    return function (promise, cb) {
      if (cb == null) return promise;

      return promise.then(function (data) {
        cb(null, data);
      }).catch(function (err: any) {
        cb(err);
      });
    };
  }

  static initMariaDb( cb: (err: Error) => void):void {

    if (DbConfig.dbConn) {
      console.log('Database is already initialized ...');
      return cb(null);
    }
    DbConfig.dbConn = mongoose.createConnection('mongodb://localhost/test', function (err, res) {
      if (err) {
        return cb(err)
      }
      return cb(null)
    });
  }

  static getDbConnection() {
    return  DbConfig.dbConn;
  }
}
