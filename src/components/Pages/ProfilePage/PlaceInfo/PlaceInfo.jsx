import './PlaceInfo.scss';

export const PlaceInfo = ({ picPath, picAlt, count }) => {
    return (
      <div className="place-info">
          <img className="place-info__pic" src={picPath} alt={picAlt}/>
          <span className="place-info__count"> {count} </span>
      </div>
    );
}