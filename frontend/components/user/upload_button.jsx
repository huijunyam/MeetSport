import React from 'react';

class UploadButton extends React.Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
  }

  // upload(e) {
  //   e.preventDefault();
  //   cloudinary.openUploadWidget(window.cloudinary_options, function(err, img){
  //     if (err === null) {
  //
  //     }
  //   });
  // }
  render() {
    return (
      <button onClick={this.upload}>Upload Profile Image</button>
    );
  }
}

export default UploadButton;
// var UploadButton = React.createClass({
//   upload: function (e) {
//     e.preventDefault();
//     cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
//       if(!error){
//         this.props.postImage(results[0]);
//       }
//     }.bind(this));
//   },
//   render: function () {
//     return (
//       <div className="upload-form">
//         <button onClick={this.upload}>Upload new image!</button>
//       </div>
//     );
//   }
// });
//
// module.exports = UploadButton;
