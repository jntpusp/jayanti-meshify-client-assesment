import React from 'react';
import { getMostUsedWordsAndOccurance } from './../../utils/textService';
import { NO_OF_TOP_MOST_USED_WORDS_TO_DISPLAY } from './../../constants/appConstants';
import CanvasJSReact from './../../assets/scripts/canvasjs.react';
import './tweet.scss';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class TopMostUsedWords extends React.Component {
  
  addSymbols(e){
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if(order > suffixes.length - 1)
      order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }

  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title:{
        text: "Most Used Words in the Tweet"
      },
      axisX: {
        title: "Most Used Word",
        reversed: true,
      },
      axisY: {
        title: "Frequency",
        labelFormatter: this.addSymbols
      },
      data: [{
        type: "bar",
        dataPoints: getMostUsedWordsAndOccurance(this.props.text, NO_OF_TOP_MOST_USED_WORDS_TO_DISPLAY)
      }]
    }
    return (
      <div style={{margin: '25px 5px'}}>
        <CanvasJSChart options = {options} />
      </div>
    );
  }
}

export default TopMostUsedWords;
