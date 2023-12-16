/* eslint-disable jsx-a11y/img-redundant-alt */
// @ts-nocheck
import React, { useEffect } from 'react';

const BlobTest = () => {
  function previewFile() {
    const preview = document.getElementById("ImgPreviewInput");
    const file = preview.files[0];
    const img = document.getElementById('ImgPreviewImg');
    const url = URL.createObjectURL(file);
    img.src = url;
  }

  function downloadFileThroughBlob() {
    const a1 = document.getElementById('download');
    const content = '<h1>hello world</h1>';
    const blob = new Blob([content], { type: 'text/html' });
    a1.href = URL.createObjectURL(blob);
    a1.download = 'test.html';
  }

  useEffect(() => {
    downloadFileThroughBlob();
  }, [])

  return (
    <div>
      <div><h1>Blob</h1></div>
      <a id='download' href='https://www.baidu.com'>下载</a>

      <div><h1>ImgPreview</h1></div>
      <input id="ImgPreviewInput" type="file" onChange={previewFile} /><br />
      <img id='ImgPreviewImg' src="" height="200" alt="Image preview..." />
    </div>
  )
}

export default BlobTest;