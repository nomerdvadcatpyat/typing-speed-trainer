import {useState, useEffect} from 'react';
import {RatingPage} from "./RatingPage";
import {getRating, getRatingOptions} from "../../../utils/api/ratingApi";


export const RatingPageContainer = props => {

    const [isLoading, setLoading] = useState(true);

    const [usersRating, setUsersRating] = useState(null);

    const [options, setOptions] = useState(null);

    const [ratingFilter, setRatingFilter] = useState(null);

    useEffect(() => {
        console.log('mount')
        getRatingOptions()
          .then(setOptions)
          .catch(console.log)
          .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        if(options) {
            if(!ratingFilter) setRatingFilter(options[0].value);
            else {
                console.log('rating filter', ratingFilter);
                setLoading(true);
                getRating(ratingFilter)
                  .then(rating => setUsersRating(rating))
                  .catch(console.log)
                  .finally(() => setLoading(false));
            }
        }
    }, [options, ratingFilter]);

    return <RatingPage
      {...props}
      isLoading={isLoading}
      usersRating={usersRating}
      options={options}
      value={ratingFilter}
      setSelectValue={e => setRatingFilter(e.target.value)}
    />
}