/*!
 * Demo Warning module.
 *
 * Copyright (c) 2017 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

import angular from 'angular';
import DemoWarningComponent from './demo-warning-component.js';

const module = angular.module('bedrock.demoWarning', []);

module.component('brDemoWarning', DemoWarningComponent);
