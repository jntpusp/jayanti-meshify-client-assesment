import React from 'react';
import Tweet from './Tweet';
import Pagination from "react-js-pagination";

class Tweets extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activePage: 1,
			recordsPerPage: 10
		}
	}

	handlePageChange(pageNumber) {
    this.setState({activePage: pageNumber});
  }

	render () {
		const { tweets } = this.props;
		const { activePage, recordsPerPage } = this.state;
		const tweetsToShow = tweets.slice((activePage-1)*recordsPerPage, activePage*recordsPerPage);
		return (
	    <div className='row'>
	    	<div className='offset-0 col-12 offset-sm-3 col-sm-6'>
	    		{ tweetsToShow.map((tweet, index) => <Tweet key={index} tweet={tweet} />) }
	    		<div align='center'>
	    			<Pagination
		          activePage={activePage}
		          itemsCountPerPage={recordsPerPage}
		          totalItemsCount={tweets.length}
		          pageRangeDisplayed={4}
		          onChange={this.handlePageChange.bind(this)}
		        />
	    		</div>
	    	</div>
	    </div>
	  );
	}

}

export default Tweets;
