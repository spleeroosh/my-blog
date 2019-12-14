import React from 'react';
import buttonSVG from './../../../images/remove-button.svg';
import PropTypes from 'prop-types';

const RemoveBtn = ({ onDeletePost, id }) => {
  return (
    <div className="post__remove-btn" onClick={() => onDeletePost(id)}>
      <img
        src={buttonSVG}
        alt="remove button"
        className="post__remove-btn-image"
      />
    </div>
  );
};

RemoveBtn.propTypes = {
  onDeletePost: PropTypes.func,
  id: PropTypes.string
};

export {
  RemoveBtn
};