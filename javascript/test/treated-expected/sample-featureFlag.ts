/**
 * Copyright (c) 2019 Uber Technologies, Inc.
 *
 * <p>Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of the License at
 *
 * <p>http://www.apache.org/licenses/LICENSE-2.0
 *
 * <p>Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Some typescript symbols

const featureFlag = 'featureFlag';

function isFlagTreated(key: string): boolean {
    return true;
}

function isToggleDisabled(key: string): boolean {
    return true;
}

function f1(): string {
    return 'f1';
}

function f2(): string {
    return 'f2';
}

function f3(): string {
    return 'f3';
}

// Simple flag cleanup in conditional
f1();

// ---------------------------------

// String literal cleanup
f1();

// ---------------------------------

// Assignment cleanup
f2();

// ----------------------------------

// function cleanup
f1();

// ----------------------------------

// Complex cleanup
var c = f3();

// Literal conversion
console.log(true);