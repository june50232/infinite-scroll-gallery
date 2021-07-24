import { connect } from "react-redux";
import React, { useState, useCallback, useRef } from "react";
import Container from "../components/Container";
import Main from "../components/Main";
import Card from "../components/Card";
import Nav from "../components/Nav";
import Img from "../components/Img";
import mapDispatchToProps from "../redux/action";
import MainAPI from "../api/MainAPI";
import useGetPhotos from "../hooks/useGetPhotos";
import styles from "../styles/Home.module.scss";

const getData = (page) =>
  new MainAPI().getPhotos(page).then((result) => result);

const Home = (props) => {
  const [lastPage, setLastPage] = useState(null);
  const { loading, error, photos, hasMore } = useGetPhotos({
    lastPage,
    lastPhotos: props.photos || []
  });

  //handle infinite scroll
  const observer = useRef();
  const lastPageRef = useCallback(
    (node) => {
      if (loading) {
        return
      }
      if (observer.current) {
        observer.current.disconnect()
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
            console.log('setLastPage ==', +node.dataset.id)
          setLastPage(+node.dataset.id)
        }
      });

      if (node) {
          observer.current.observe(node)
      }
    },
    [loading, hasMore]
  );

  return (
    <>
      <Main>
        <Container>
          {(photos || []).map((photo, index) => (
            <div key={photo.id} ref={lastPageRef} data-id={(lastPage || 1) + 1} className={styles.grid}>
                <Card
                  onClick={() => {
                    window.open(photo.url);
                    // TODO: 點擊展開
                    // router.push(getNewPath(MainPath.edit, { id: contact.id }));
                  }}
                >
                  <>
                    <Img photo={photo} />
                    <figcaption>{photo.author || ''}</figcaption>
                  </>
                </Card>
             </div>
          ))}
        </Container>
      </Main>
    </>
  );
};

Home.getInitialProps = async (ctx) => {
  let result = null;
  const resp = await getData().then((resp) => {
    // console.log('getdate resp ====', resp);
    result = resp.photos;
  });
  return { photos: result };
};

export default connect((state) => state, mapDispatchToProps)(Home);
