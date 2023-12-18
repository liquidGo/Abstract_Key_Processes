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

  function PreviewFileReader() {
    const preview = document.getElementById("ImgPreviewFileReader");
    const file = preview.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.getElementById('ImgPreviewFileReaderImg');
      img.src = e.target.result;
    }
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    downloadFileThroughBlob();
  }, [])

  return (
    <div>
      <div><h1>Blob</h1></div>
      <a id='download' href='https://www.baidu.com'>下载</a>

      <div><h1>File</h1></div>
      <input id="ImgPreviewInput" type="file" onChange={previewFile} /><br />
      <img id='ImgPreviewImg' src="" height="200" alt="Image preview..." />

      <div><h1>FileReader</h1></div>
      <input type="file" id='ImgPreviewFileReader' onChange={PreviewFileReader} />
      <img id='ImgPreviewFileReaderImg' src="" height="200" alt="Image preview..." />

      <div><h1>FormData</h1></div>
      <form id="myForm" name="myForm">
        <div>
          <label for="username">Enter name:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label for="useracc">Enter account number:</label>
          <input type="text" id="useracc" name="useracc" />
        </div>
        <div>
          <label for="userfile">Upload file:</label>
          <input type="file" id="userfile" name="userfile" />
        </div>
      </form>
      <button onClick={() => {
        const form = document.getElementById('myForm');
        const formData = new FormData(form);
        console.log(formData.get('username'));
      }}>获取form表单</button>
    </div>
  )
}

export default BlobTest;