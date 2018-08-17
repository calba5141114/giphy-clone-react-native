

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from './config';

export default class App extends React.Component {
 
 constructor(){

   super();

   this.state = {
	keyword: "",
	giphyImageData: [],
	};

	this.purgeGiphyImageData = this.purgeGiphyImageData.bind(this);

 }

  purgeGiphyImageData(){
		
	this.setState({ giphyImageData:[]});		

	}


   // returns and processes JSON data from Giphy API
    searchKeyword(keyWord) {

        this.purgeGiphy();

        fetch(`http://api.giphy.com/v1/gifs/search?q=${keyWord}&api_key=${config.api_key}`)
            .then(data => {
                return data.json()
            })
            .then(procData => {

                let mappedData;
                mappedData = procData.data.map((x, count) => {
                    return (
                        <div className="gif" key={count}>
                            <img src={x.images.original.url} alt="giphy" />
                            <p>{x.title}</p>
                        </div>
                    );
                })
                
                this.setState({ giphyImageData: mappedData });

            });
    }

	
 


 render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
~             
