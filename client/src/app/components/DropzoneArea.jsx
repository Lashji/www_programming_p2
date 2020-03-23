import React, {Component, useState} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
const DropZone = ({handleChange}) => {
  return <DropzoneArea onChange={e => handleChange(e)} acceptedFiles={["image/*"]}></DropzoneArea>
}


export default DropZone;