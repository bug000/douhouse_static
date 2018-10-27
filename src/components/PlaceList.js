import React from 'react';
import $ from 'jquery';

class PlaceList extends React.Component{

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.serverRequest = $.ajax({
      dataType: 'json',
      type: "post",
      url: 'http://localhost:8080/api/v1/basic/place',
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
