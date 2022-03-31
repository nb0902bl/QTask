import React, { Component } from 'react';
import { StyleSheet, FlatList, ActivityIndicator, View } from 'react-native';

import { connect } from 'react-redux';

import { ImagesRequestApi } from '../store/action/ActionRequest';

import ImageListData from './ImageListData'

class HomeScreen extends Component {

    
    componentDidMount() {
        this.props.ImagesRequestApi()
    }

    _keyExtractor = (item) => item.id;

    _renderItem = ({item}) => (
        <ImageListData 
              id = {item.id}
              thumbnailUrl = {item.urls.small}
              regularUrl = {item.urls.regular}
              authorName = {item.user.name}
              navigate = {this.goToImageScreen}/>
    );

    goToImageScreen = (regularUrl) => {
        const {navigation} = this.props
        return navigation.navigate('Detail', { regularUrl })
    }

    render() {

        if (this.props.isFetching) {
            return ( 
                <View> 
                  <ActivityIndicator size = 'large' animating />
                </View>);
            } else {
                return ( 
                  <View style = {styles.container}>
                      <FlatList 
                          data={this.props.data}
                          keyExtractor={this._keyExtractor}
                          renderItem={this._renderItem}/> 
                  </View>
                )
            }
        }
    }

const styles = StyleSheet.create({
    container: {
        width: '100%'
    }
});

const mapStateToProps = state => {
    return {
        data: state.DataImage.api_req,
        isFetching: state.DataImage.isFetching
    }
}

export default connect(mapStateToProps, { ImagesRequestApi })(HomeScreen)