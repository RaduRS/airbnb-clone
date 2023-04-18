import starImage from "../images/star.png";

export default function Card({ ...props }) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  } else {
    badgeText = null;
  }
  return (
    <div className="card">
      {props.openSpots > 0 && (
        <p className="open-spots">LEFT: {props.openSpots}</p>
      )}
      {badgeText && <p className="sold-out">{badgeText}</p>}
      <img
        src={require(`../images/${props.coverImg}`)}
        alt="card"
        className="card--image"
      />
      <div className="rating">
        <img src={starImage} alt="star" className="star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) •&nbsp;</span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <strong>From ${props.price}</strong>/ person
      </p>
    </div>
  );
}
