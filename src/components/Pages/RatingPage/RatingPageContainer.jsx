import {useState, useEffect} from 'react';
import {RatingPage} from "./RatingPage";
import {getRating, getRatingOptions} from "../../../utils/api/ratingApi";


export const RatingPageContainer = props => {

    const [isLoading, setLoading] = useState(true);

    const [usersRating, setUsersRating] = useState(null);

    useEffect(() => {
        getRating()
          .then(rating => setUsersRating(rating))
          .catch(console.log)
          .finally(() => setLoading(false));
    }, []);

    return <RatingPage
      {...props}
      isLoading={isLoading}
      usersRating={usersRating}
    />
}