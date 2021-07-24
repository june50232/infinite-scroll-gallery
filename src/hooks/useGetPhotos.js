import { useState, useEffect } from "react";
import MainAPI from "../api/MainAPI";
const getData = (page) =>
  new MainAPI().getPhotos(page).then((result) => result);

export default function useGetPhotos({lastPage, lastPhotos}) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState(lastPhotos);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fetchData() {
        console.log('lastPage ===', lastPage)
      setLoading(true);
      setError(false);
      if (!!lastPage) {

        const resp = await getData(lastPage)
          .then((result) => {
            setPhotos((prevPhotos) => {
              return [].concat(prevPhotos || []).concat(result.photos || [])
            });
            setHasMore(result.photos.length > 0);
            setLoading(false);
          })
          .catch(() => {
            setError(true);
          });
      } else {
          setLoading(false);
      }
    }
    fetchData();
  }, [
      lastPage
  ]);

  return { loading, error, photos, hasMore };
}
