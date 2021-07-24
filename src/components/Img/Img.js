import React from "react";
import LazyLoad from "react-lazyload";
import styles from "./Img.module.scss";

const Img = ({ children, className, photo, ...rest }) => {
  let cardClassName = styles.img;
  const refPlaceholder = React.useRef();

  if (className) {
    cardClassName = `${cardClassName} ${className}`;
  }

  // handle pic url start ===
  let width = photo.width;
  let height = photo.height;

  let size = [];
  const isWidthLarger = width > height;
  size.push(isWidthLarger ? width : height);
  size.push(!isWidthLarger ? height : width);

  const adjest = 500 / size[0];
  size[1] = Math.floor(size[1] * adjest);
  size[0] = 500;

  width = isWidthLarger ? size[0] : size[1];
  height = isWidthLarger ? size[1] : size[0];
  // handle pic url end ===

  const removePlaceholder = () => {
    refPlaceholder.current.remove();
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.placeholder} ref={refPlaceholder}></div>
        <LazyLoad>
          <img
            {...rest}
            className={cardClassName}
            src={`${process.env.API_URL}/id/${photo.id}/${width}/${height}`}
            alt={photo.author}
            onLoad={removePlaceholder}
            onError={removePlaceholder}
          />
        </LazyLoad>
      </div>
    </>
  );
};

export default Img;
