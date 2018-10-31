import styles from './index.css';
import { SearchBar, List, Icon } from 'antd-mobile';
import React from 'react';
import { Map, Markers } from 'react-amap';
import PlaceList from '../components/PlaceList';


class MapApp extends React.Component{
  constructor(){
    super();
    // this.markers = randomMarker(1000);
    // this.markers = [];
    this.center = {longitude: 121.44033, latitude: 31.18594};
    this.state = {
      houseShow: "",
      places: [],
      open: true,
      // docked: true,
    };

    this.markersEvents = {
      created:(allMarkers) => {
        console.log('All Markers Instance Are Below');
        // console.log(allMarkers);
      },
      click: (MapsOption, marker) => {
        const extData = marker.getExtData();
        const house = extData.house;
        this.setState({
          houseShow: house,
        });
      },
      dragend: (MapsOption, marker) => { /* ... */ }
    }
  }

  getPlaceData = (e) => {
    const x = e.map((house) => ({
      position: {
        longitude: parseFloat(house["longitude"]),
        latitude:  parseFloat(house["latitude"]),
      },
      house:house
    }));
    // console.info(x)
    // this.markers = x;
    this.setState({
      places: x,
    });
  };

  state = {
    docked: false,
  }
  onDock = (d) => {
    console.info(d)
    this.setState({
      [d]: !this.state[d],
    });
  }

  render(){
    const sidebar = (<List>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
        if (index === 0) {
          return (<List.Item key={index}
                             thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                             multipleLine
          >Category</List.Item>);
        }
        return (<List.Item key={index}
                           thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
        >Category{index}</List.Item>);
      })}
    </List>);

    this.amapEvents = {
      created: (mapInstance) => {
        // mapInstance.setMapStyle('amap://styles/cd53d7e5f1aab24ae9f75992aaf75285');
        mapInstance.setMapStyle('amap://styles/darkblue');
      }
    };

    return(
    <div>
        <PlaceList transferHouseMsg={this.getPlaceData}/>
        <SearchBar
          id="search"
          placeholder={"想找哪里的房子"}
          ref={ref => this.manualFocusInst = ref}
        />
        <div style={{width: '100%', height: 700}}>
          <Map plugins={
            [
              // 'ToolBar',
              // 'MapType',
              // 'Scale',
              // 'OverView',
              // 'ControlBar', // v1.1.0 新增
              {
                name: 'ToolBar',
                options: {
                  visible: true,  // 不设置该属性默认就是 true
                  onCreated(ins){
                    // console.log(ins);
                  },
                },
              }
            ]}
               events={this.amapEvents}
            // mapStyle={"cd53d7e5f1aab24ae9f75992aaf75285"}
            // mapStyle={"darkblue"}
               amapkey={"398ead94587b740036e874a2ba6f4252"}
               center={this.center} zoom={11}>
            <Markers
              markers={this.state.places}
              useCluster={true}
              events={this.markersEvents}
              // angle={(extData, index) => { return this.getPointData(extData, index)}}
            />
          </Map>
        </div>

        <div>
          {/*<p>{this.state.houseShow["title"]}</p>*/}
          <hr/>
          <a href={this.state.houseShow.id} target="_blank">{this.state.houseShow.title}</a>
          <hr/>
          {/*<HouseMessDiv props={this.state.houseShow}/>*/}
        </div>
        {/*<button onClick={ () => { this.toggleCluster() } }> Toggle Cluster</button>*/}
    </div>
    )}
}



export default function() {

  return (
    <MapApp />
  );
}
