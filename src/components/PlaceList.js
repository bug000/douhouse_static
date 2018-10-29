import React from 'react';
import $ from 'jquery';

class PlaceList extends React.Component{

  constructor(props) {
    super(props);
    // this.getPlaceUrl = 'http://localhost:8080/api/v1/basic/place'
    this.getPlaceUrl = 'http://45.76.180.79:8080/douhouse-0.0.2-shanghai/api/v1/basic/place'
  }

  componentDidMount(){
    this.serverRequest = $.ajax({
      dataType: 'json',
      type: "post",
      url: this.getPlaceUrl,
      contentType: 'application/json;charset=utf-8',
      data: JSON.stringify({
        request_ip:"0.0.0.0"
      }),
      error: function (result){
        console.error("get rat err"+result);
      },
      success: function (result){
        this.props.transferHouseMsg(result)
      }.bind(this)
    });
  }

  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return <div></div> ;
  }
}

export default PlaceList;
