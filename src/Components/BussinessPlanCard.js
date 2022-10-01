import React from "react";

const BussinessPlanCard = ({
  styles,
  plan,
  title,
  sub_title,
  content,
  list,
  btnTitle,
}) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.sml__title}>{plan}</div>
        <div className={styles.wrap}>
          <div className={styles.lg__title}>{title}</div>
          <div className={styles.lg__title__sm}>{sub_title}</div>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.content__list}>
          <ul>
            {list.map((eachPlan) => (
              <li>{eachPlan}</li>
            ))}
          </ul>
        </div>
        <button className={styles.lg__btn}>{btnTitle}</button>
      </div>
    </>
  );
};

export default BussinessPlanCard;
