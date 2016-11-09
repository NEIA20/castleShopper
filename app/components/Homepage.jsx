import React from 'react';
import Navbar from './Navbar'
import Star from './Star'
import { Link } from 'react-router';

import HomepageContainer from '../containers/HomepageContainer'

export default ({category, allCastles, filter, handleChange, handleChangeCategory}) => (
	<div className="home" id="homepage-main">
		
		<img src="https://s17.postimg.org/lu28ic2u7/Screen_Shot_2016_11_08_at_2_36_54_PM.png" />
		<div className="list-group">
		<div className="form-group">
			<input
				placeholder="Filter castles by name or category"
				className="form-control"
				value={filter}
				onChange={handleChange}
				/>
			</div>
      {
				allCastles && allCastles.map(function(castle) {
					return (
						<div key={castle.id} className="col-xs-6 col-md-3" id="image-div">
							<div id="image-thumbnail">
							<Link  className="thumbnail" to={`/castles/${castle.id}`}>
							<img src={castle.imageUrl} />
							</Link>
							</div>
							<p className="description" id="castle-title"><Link to={`/castles/${castle.id}`}>{castle.name}</Link></p>
							<p>{castle.description}</p>
							<p>Current price: ${castle.price}</p>
							<ul id="category-list">
							{
								castle.category ? castle.category.map(function(cat,idx) {
									return (<li key={idx}>{
										(cat + '\n')
									}</li>)
								}) : null
							}
							</ul>
							
						
							<Star />
						</div>
					)
				})
			}
    </div>
	</div>
);


// src={`images/${this.props.image}`}

// {
//         albums.map(album => (
//           <div className="col-xs-4" key={ album.id }>
//             <Link className="thumbnail" to={`/albums/${album.id}`}>
//               <img src={ album.imageUrl } />
//               <div className="caption">
//                 <h5>
//                   <span>{ album.name }</span>
//                 </h5>
//                 <small>{ album.songs.length } songs</small>
//               </div>
//             </Link>
//           </div>
//         ))
//       }