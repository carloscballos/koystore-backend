import {Application} from 'express';
import {Public} from './public';


export class Routes {
  /**
   * Registers all the application routes
   * @param app
   */
  static init(app: Application) {
      //Define public endpoint prefix
     app.use( '/api/v1/',Public.init());
    //define private endpoint prefix
    //  app.use( '/api/v1/private/',Private.init());
   }
}