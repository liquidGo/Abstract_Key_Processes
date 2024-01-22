/* eslint-disable import/no-anonymous-default-export */
// @ts-ignore
import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Route
        path="/child"
        exact={true}
        render={() => {
          window.addEventListener('message', (e) => {
            console.log('父容器的传值：', e.data);
          })
          return (
            <div>
              <h1>child</h1>
            </div>
          )
        }}
      />
      <Route
        path="/parent"
        exact={true}
        render={() => {
          return (
            <div>
              <h1>parent</h1>
              <iframe
                src="http://localhost:3000/#/child"
                title="child"
                width="100%"
                height="100%"
              />
              <button
                children="点击传值"
                onClick={() => {
                  const iframe = document.querySelector('iframe');
                  // @ts-ignore
                  iframe.contentWindow.postMessage([true, '2023'], '*');
                }}
              />
            </div>
          )
        }}
      />
    </Router>
  )
}