import styles from './index.css';
import { TabBar } from 'antd-mobile';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import React from 'react';
import { Map, Markers } from 'react-amap';
import PlaceList from '../components/PlaceList';

class MapApp1 extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        {/*<MyMap />*/}
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
           onClick={(e) => {
             e.preventDefault();
             this.setState({
               hidden: !this.state.hidden,
             });
           }}
        >
          Click to show/hide tab-bar
        </a>
      </div>
    );
  }

  render(){
    return <div style={{width: '100%', height: '100%' , textAlign: 'center'}}>
      {/*<script src="http://pv.sohu.com/cityjson?ie=utf-8"/>*/}
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selectedIcon={<div style={{
            width: '22px',
            height: '22px',
            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
          />
          }
          selected={this.state.selectedTab === 'blueTab'}
          badge={1}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
          data-seed="logId"
        >
          <div style={{width: '100%', height: '400px'}}>
            <Map amapkey={'788e08def03f95c670944fe2c78fa76f'}/>
          </div>
          {/*<Map amapkey={'788e08def03f95c670944fe2c78fa76f'}/>*/}
          {/*{this.renderContent('Life')}*/}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={'new'}
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
          data-seed="logId1"
        >
          {this.renderContent('Koubei')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
            />
          }
          selectedIcon={
            <div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
            />
          }
          title="Friend"
          key="Friend"
          dot
          selected={this.state.selectedTab === 'greenTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
        >
          {this.renderContent('Friend')}
        </TabBar.Item>
        <TabBar.Item
          icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
          selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
          title="My"
          key="my"
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
            });
          }}
        >
          {this.renderContent('My')}
        </TabBar.Item>
      </TabBar>

    </div>
  }
}


class MapApp2 extends React.Component {
  state = {
    docked: false,
  }
  onDock = (d) => {
    this.setState({
      [d]: !this.state[d],
    });
  }
  render() {
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

    return (<div style={{ height: '100%' }}>
      {/*<Map amapkey={'788e08def03f95c670944fe2c78fa76f'}/>*/}
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('docked')}>
        Docked in document
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebarStyle={{ border: '1px solid #ddd' }}
        sidebar={sidebar}
        docked={this.state.docked}
      >
        Click upper-left corner
      </Drawer>
    </div>);
  }
}



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

  onOpenChange = (...args) => {
    console.log(args);
    this.setState({ open: !this.state.open });
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

    return <div>
      <PlaceList transferHouseMsg={this.getPlaceData}/>
      <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock('docked')}>

        Docked in document
      </NavBar>
      <Drawer
        className="my-drawer"
        style={{ minHeight: document.documentElement.clientHeight }}
        enableDragHandle
        contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
        sidebar={sidebar}
        open={this.state.open}
        onOpenChange={this.onOpenChange}
      >
        Click upper-left corner
      </Drawer>
      <div style={{width: '100%', height: 500}}>
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
  }
}


export default function() {
  return (
    <MapApp />
  );
}
