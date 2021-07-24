import styles from './Card.module.scss';

const Card = ({ children, className, ...rest }) => {
  let cardClassName = styles.card;

  if (className) {
    cardClassName = `${cardClassName} ${className}`;
  }

  return (
    <figure {...rest} className={cardClassName}>
      { children }
    </figure>
  );
};

export default Card;
