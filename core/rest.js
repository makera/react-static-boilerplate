import "whatwg-fetch";
import reduxApi, {transformers} from "redux-api";
import adapterFetch from "redux-api/lib/adapters/fetch";
const rest = reduxApi({
  // simple edpoint description
  // entry: `/api/v1.0/entry/:id`,
  // complex endpoint description
  // Базовые тексты, шеры, все что угодно
  settings: {
    url: '/api/v1.0/settings/'
  }
});
rest.use("fetch", adapterFetch(fetch));
if (process.env.NODE_ENV == 'development') {
  rest.use("rootUrl", "http://localhost:8000"); 
}
// it's necessary to point using REST backend

export default rest;
