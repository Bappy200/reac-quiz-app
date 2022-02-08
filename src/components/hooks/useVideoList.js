import {
  get,
  getDatabase,
  limitToFirst,
  orderByKey,
  query,
  ref,
  startAt,
} from "firebase/database";
import { useEffect, useState } from "react";
function useVideoList(page) {
  const [lodeing, setLodeing] = useState();
  const [error, setError] = useState();
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    async function fatchVideos() {
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(
        videoRef,
        orderByKey(),
        startAt("" + page),
        limitToFirst(8)
      );

      try {
        setError(false);
        setLodeing(true);
        // get data from firebase
        const snapshort = await get(videoQuery);
        setLodeing(false);
        if (snapshort.exists()) {
          setVideos((prev) => [...prev, ...Object.values(snapshort.val())]);
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLodeing(false);
        setError(true);
      }
    }

    fatchVideos();
  }, [page]);
  return {
    videos,
    lodeing,
    error,
    hasMore,
  };
}

export default useVideoList;
