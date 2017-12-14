import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Tab, TabList } from './Tabs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tabs: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: [
        ["a", ["A1", "A2", "A3"]],
        ["b", ["B1", "B2", "B3"]],
        ["c", ["C1", "C2", "c3"]]
      ]
    });
  }

  render() {
    const tabs = this.state.tabs.map(t => {
      const [k, h] = t;
      const inner = h.map(k2 => {
        return <Tab name={k2} key={k2}>
            <h1>{k2}</h1>
          </Tab>;
      });
      return <Tab name={k} key={k}>
          <TabList vertical key={k}>
            {inner}
          </TabList>
        </Tab>;
    });

    return (
      <TabList horizontal key="root">
        {tabs}
      </TabList>
      )
      // <TabList>
      //   <Tab name="a">
      //     <h1>HelloA</h1>
      //   </Tab>
      //   <Tab name="b">
      //     <h1>HelloB</h1>
      //   </Tab>
      //   <Tab name="c">
      //     <h1>HelloC</h1>
      //   </Tab>
      // </TabList>
  }
}

export default App;
