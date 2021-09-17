import request from "./baseurl.js";

class Api {
  async getData() {
    const { data } = await request.get("/");
    console.log(data);
    return data;
  }
  async postData(todo) {
    console.log("api post : " + todo);

    return await request.post("/", { todo });
  }
  async deleteData(id) {
    console.log(id);
    return await request.delete(`/${id}`);
  }
}

export default new Api();
