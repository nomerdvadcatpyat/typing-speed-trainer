import {useState, useEffect} from 'react';
import {RatingPage} from "./RatingPage";
import {getRating, getRatingOptions} from "../../../utils/api/ratingApi";


export const RatingPageContainer = props => {

    const [isLoading, setLoading] = useState(true);

    const [isDataLoading, setDataLoading] = useState(false);

    const [usersRating, setUsersRating] = useState(null);

    const [options, setOptions] = useState(null);

    const [ratingFilter, setRatingFilter] = useState(null);

    useEffect(() => {
        getRatingOptions()
          .then(options => {
              setOptions(options);
              setDataLoading(true);
          })
          .catch(console.log)
          .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if(options) {
            if(!ratingFilter) setRatingFilter(options[0].value);
            else {
                getRating(ratingFilter)
                  .then(rating => setUsersRating(rating))
                  .catch(console.log)
                  .finally(() => setDataLoading(false));
            }
        }
    }, [options, ratingFilter]);

    return <RatingPage
      {...props}
      isLoading={isLoading}
      isDataLoading={isDataLoading}
      usersRating={usersRating}
      options={options}
      value={ratingFilter}
      setSelectValue={e => setRatingFilter(e.target.value)}
    />
}