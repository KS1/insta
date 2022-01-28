import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';
import { QUERY_LIKE } from '../utils/mutations';
import { QUERY_PHOTOPOST } from '../utils/queries';

const Like = () => {
  let { id } = useParams();

  const { loading, data } = useQuery(QUERY_PHOTOPOST, {
    variables: { _id: id },
  });

  const photopost = data?.photoposts || [];

  const [queryLike, { error }] = useMutation(QUERY_LIKE);

  const handleLike = async (userNum) => {
    try {
      await queryLike({
        variables: { _id: id, userNum: userNum },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the photopost!</h1>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-body text-center mt-3">
          <h2>
            {photopost[0].user}
          </h2>
          <button className="btn btn-info" onClick={() => handleLike(1)}>
            Like for {photopost[0].user1}
          </button>{' '}
         
          <div className="card-footer text-center m-3">
            <br></br>
            <Link to="/">
              <button className="btn btn-lg btn-danger">
                View all photoposts
              </button>
            </Link>
          </div>
        </div>
      )}
      {error && <div>Something went wrong...</div>}
    </div>
  );
};

export default Like;
