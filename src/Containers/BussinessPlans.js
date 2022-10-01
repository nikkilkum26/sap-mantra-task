import React from "react";
import BussinessPlanCard from "../Components/BussinessPlanCard";
import styles from "../css/BussinessPlan.module.css";
const BussinessPlans = () => {
  const bussinessCard = [
    {
      plan: "Free Forever",
      title: "Free",
      sub_title: "",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      list: [
        "At vero eos et accusamus et ",
        "Et harum quidem  facilis est",
        "quibusdam et aut  debitis aut",
      ],
      btnTitle: "Sign Up For Free",
    },
    {
      plan: "For Teams",
      title: "$20",
      sub_title: "/mo",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      list: [
        "At vero eos et accusamus et ",
        "Et harum quidem  facilis est",
        "quibusdam et aut  debitis aut",
      ],
      btnTitle: "Sign Up For Free",
    },
    {
      plan: "For Enterprises",
      title: "$140",
      sub_title: "/mo",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum",
      list: [
        "At vero eos et accusamus et ",
        "Et harum quidem  facilis est",
        "quibusdam et aut  debitis aut",
      ],
      btnTitle: "Sign Up For Free",
    },
  ];
  return (
    <div className={styles.bussinessPlan__layout}>
      <div className={styles.title}>
        Find the Perfect plan for your business
      </div>
      <div className={styles.card__layout}>
        {bussinessCard.map((eachCard) => (
          <BussinessPlanCard
            styles={styles}
            plan={eachCard.plan}
            title={eachCard.title}
            sub_title={eachCard.sub_title}
            content={eachCard.content}
            list={eachCard.list}
            btnTitle={eachCard.btnTitle}
          />
        ))}
      </div>
    </div>
  );
};

export default BussinessPlans;
