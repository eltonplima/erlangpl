// @flow
import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';

import './SystemInfo.css';

const SystemInfo = ({ info }) => {
  const systemInfo = [
    ['opt release', info.otpRelease],
    ['erts version', info.version],
    ['node pid', info.nodePid],
    ['schedulers', info.schedulers],
    ['build type', info.buildType],
    ['wordsize', info.wordsize],
  ];

  const ertsSettings = [
    ['kernelPoll', info.kernelPoll],
    ['smpSupport', info.smpSupport],
    [
      'fullSweep',
      info.garbageCollection
        ? info.garbageCollection.fullsweepAfter
        : undefined,
    ],
    ['proces limit', info.processLimit],
    ['thread', info.threads],
    ['async threads', info.threadPoolSize],
    ['port limit', info.portLimit],
  ];

  return (
    <Row>
      <Col xs={4}>
        <h5 className="SystemInfo-list-header">System info</h5>
        <ListGroup className="SystemInfo-list">
          {systemInfo.map(([name, value], i) => (
            <ListGroupItem key={i}>
              <span>{name}</span>
              <span className="value">{value || 'N/A'}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col xs={4}>
        <h5 className="SystemInfo-list-header">ERTS settings</h5>
        <ListGroup className="SystemInfo-list">
          {ertsSettings.map(([name, value], i) => (
            <ListGroupItem key={i}>
              <span>{name}</span>
              <span className="value">{value || 'N/A'}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default connect(
  state => {
    return { info: state.systemInfo };
  },
  {},
)(SystemInfo);
