import APIClient from "./APIClient";

export default class MainAPI {
  constructor(auth) {
    this.client = new APIClient("main");
  }

  getPhotos(page = 0) {
    return this.client
      .get(`/v2/list?page=${page}&limit=30`, "", null)
      .then((resp) => {
        console.log("resp ===", resp);
        return {
          photos: (resp || {}).data || {}
        };
      });
  }
}
