/*!
 * Demo warning component.
 *
 * Copyright (c) 2014-2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

export default {
  controller: Ctrl,
  templateUrl: 'bedrock-angular-demo-warning/demo-warning-component.html'
};

/* @ngInject */
function Ctrl(config) {
  const self = this;
  // TODO: move to frontend configuration file
  self.productionMode = config.data.productionMode;
  self.demoWarningUrl = config.data.demoWarningUrl;
}
