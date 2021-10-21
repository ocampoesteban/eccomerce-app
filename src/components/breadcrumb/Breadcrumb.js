import React from 'react';
import PropTypes from 'prop-types';


const isLastPathElement = (list, sizeToCompare) => 
  list.length-1 === sizeToCompare;

const buildPath = (paths) => paths.map((current,index)=>{return <p> {current}  { isLastPathElement(paths, index)? '': '/'} </p>})

const Breadcrumb = (props) => (
  <div className="breadcrumb__container">
    {
      buildPath(props.paths)
    }
  </div>
);

Breadcrumb.propTypes = {
  paths: PropTypes.array.isRequired,
}
export default Breadcrumb;