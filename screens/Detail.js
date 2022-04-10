import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
  Text,
  View,
  Modal,
  Pressable,
} from 'react-native';
import {getMovie} from '../services/services';


const height = Dimensions.get('screen').height;
const placeholderImage = require('../assets/images/placeholder.png');

const Detail = ({route,navigation}) => {
  const {movieId} = route.params;
  const [movieDetail,setMovieDetail] = useState();
  const [loaded, setLoaded] = useState(false);


useEffect(()=>{
  getMovie(movieId).then(movieData=>{
    setMovieDetail(movieData);
    setLoaded(true)
  })
},[movieId])

  return (
    <React.Fragment>
        {!loaded && <ActivityIndicator size="large" />}
      <ScrollView>
      {loaded&&  <Image
              resizeMode="cover"
              style={styles.image}
              source={
                movieDetail.poster_path
                  ? {
                      uri:
                        'https://image.tmdb.org/t/p/w500' +
                        movieDetail.poster_path,
                    }
                  : placeholderImage
              }
            />}
      </ScrollView>

    
    </React.Fragment>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  genre: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
  },
  release: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -25,
    right: 20,
  },
  videoModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Detail;
