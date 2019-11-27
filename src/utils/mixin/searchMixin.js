import service from '../api/server'
import {apiUrl} from "../../assets/common/config";

export const listSearch = {
  data () {
    return {
    }
  },
  mounted() {
    console.log(service.apiUrl);
  }
}
