import axios from "axios";

import env from "@/env";

// Legacy 구성은 아래를 참고
const axiosInst = axios.create({
  //baseURL: env.api.MAIN_API_URL,
  baseURL: "http://localhost:7777",
  timeout: 2500,
});
export default axiosInst;

