import * as logger from "./dist";
import {Json} from "./dist/formatter/json";

logger.init({
  formatter: new Json()
})

logger.log(logger.Level.ALERT, 'hello', {})
