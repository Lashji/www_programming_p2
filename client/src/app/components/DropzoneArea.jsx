import React, {Component, useState} from 'react'
import {DropzoneArea} from 'material-ui-dropzone'
 
const DropZone = ({handleChange}) => {
  return <DropzoneArea onChange={e => handleChange(e)}></DropzoneArea>
}


export default DropZone;