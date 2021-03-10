import React, { useState } from "react";

function MusicDetail(props) {
  const movieId = props.match.params.movieId;
  const [Movie, setMovie] = useState([]);
  const [CommentLists, setCommentLists] = useState([]);
  const [LoadingForMovie, setLoadingForMovie] = useState(true);
  const [ActorToggle, setActorToggle] = useState(false);
  const movieVariable = {
    movieId: movieId,
  };

  // useEffect(() => {

  //     let endpointForMovieInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  //     fetchDetailInfo(endpointForMovieInfo)

  //     axios.post('/api/comment/getComments', movieVariable)
  //         .then(response => {
  //             console.log(response)
  //             if (response.data.success) {
  //                 console.log('response.data.comments', response.data.comments)
  //                 setCommentLists(response.data.comments)
  //             } else {
  //                 alert('Failed to get comments Info')
  //             }
  //         })

  // }, [])

  const toggleActorView = () => {
    setActorToggle(!ActorToggle);
  };

  // const fetchDetailInfo = (endpoint) => {

  //     fetch(endpoint)
  //         .then(result => result.json())
  //         .then(result => {
  //             console.log(result)
  //             setMovie(result)
  //             setLoadingForMovie(false)

  //             let endpointForCasts = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
  //             fetch(endpointForCasts)
  //                 .then(result => result.json())
  //                 .then(result => {
  //                     console.log(result)
  //                     setCasts(result.cast)
  //                 })

  //             setLoadingForCasts(false)
  //         })
  //         .catch(error => console.error('Error:', error)
  //         )
  // }

  return (
    <div>
      {/* Header */}
      {!LoadingForMovie ? <div>good...</div> : <div>loading...</div>}

      {/* <div style={{ width: '85%', margin: '1rem auto' }}>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Favorite movieInfo={Movie} movieId={movieId} userFrom={localStorage.getItem('userId')} />
                </div>


                {!LoadingForMovie ?
                    <MovieInfo movie={Movie} />
                    :
                    <div>loading...</div>
                }

                <br />

                <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem' }}>
                    <Button onClick={toggleActorView}>Toggle Actor View </Button>
                </div>

                {ActorToggle &&
                    <Row gutter={[16, 16]}>
                        {
                            !LoadingForCasts ? Casts.map((cast, index) => (
                                cast.profile_path &&
                                <GridCards
                                    image={cast.profile_path ?
                                        `${IMAGE_BASE_URL}w500${cast.profile_path}` : null}
                                    characterName={cast.name}
                                />)) :
                                <div>loading...</div>
                        }
                    </Row>
                }
                <br />

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <LikeDislikes video videoId={movieId} userId={localStorage.getItem('userId')} />
                </div>

                <Comments movieTitle={Movie.original_title} CommentLists={CommentLists} postId={movieId} refreshFunction={updateComment} />

            </div> */}
    </div>
  );
}

export default MusicDetail;