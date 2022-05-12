# Completed project for _Get Started with Auth0 Authentication in React Native Android Apps_ and _Get Started with Auth0 Authentication in React Native iOS Apps_


## Project Description

This project is the completed app for the following [Auth0 Developer Blog](https://auth0.com/blog/developers/) articles:

* [_Get Started with Auth0 Authentication in React Native Android Apps_](https://auth0.com/blog/get-started-auth0-authentication-react-native-android)
* [_Get Started with Auth0 Authentication in React Native iOS Apps_](https://auth0.com/blog/get-started-auth0-authentication-react-native-ios)

These articles walk the reader through the process of adding [Auth0](https://auth0.com/) authentication to Android and iOS apps build using [React Native](https://reactnative.dev/).

The resulting app has these screens:

1. The _**Login**_ screen, which the user will see when the app launches. It has a **Login With Auth0** button that takes the user to the _Universal Login_ screen when pressed.
2. The _**Universal Login**_ screen, where the user authenticates themself — that is, where they enter their user name and password or perform some other action to prove their identity. You don’t have to code this screen; a call to the Auth0 API brings it up. After logging in, the app takes the user to the _Loading_ screen. 
3. The _**Loading**_ screen displays an activity indicator while the app determines the user’s login status. In many cases, the user won’t even see this screen.  
4. The _**Account**_ screen, where the user goes if they log in successfully. It displays a picture of the user and the user’s name and a **Logout** button that takes them to the _Login_ screen when pressed.

The Android version’s screens look like this:

![The app’s four screens: “Login”, “Universal Login”, “Loading”, and “Account”.](https://images.ctfassets.net/23aumh6u8s0i/2YnguxJIsw0rETLJUxEeKy/ba3cc7fc66f5f296de94a223b82842f5/android_screens.png)

The iOS version’s screens look like this:

![The app’s four screens: “Login”, “Universal Login”, “Loading”, and “Account”.](https://images.ctfassets.net/23aumh6u8s0i/9Wo3h1GfCgplcrzLZsvj0/baf94991835a96055eea949dc3e7d73e/ios_screens.png)


## Getting Started

### Prequisites

To build this project, you’ll need:

* [**node.js**](https://nodejs.org/), version 16.0 or later.
* [**npm**](https://www.npmjs.com/), version 7.0 or later.
* [**React Native**](https://reactnative.dev/), version 0.68 or later.
* **An [Auth0](https://auth0.com/) account.** <a href="https://auth0.com/signup" data-amp-replace="CLIENT_ID" data-amp-addparams="anonId=CLIENT_ID(cid-scope-cookie-fallback-name)">Sign up for a free account here.</a>

To build for Android, you’ll also need the following:

* [**Android Studio**](https://developer.android.com/studio). We recommend version 2021.2.1 (a.k.a. “Chipmunk”) or later.

To build for iOS, you’ll also need the following:

* [**Xcode**](https://developer.apple.com/xcode/), version 12 or later.
* [**CocoaPods**](https://cocoapods.org/), version 1.10 or later.



### Installing and running the app

1. If you don’t already have an Auth0 account, <a href="https://auth0.com/signup" 
  data-amp-replace="CLIENT_ID" 
  data-amp-addparams="anonId=CLIENT_ID(cid-scope-cookie-fallback-name)">
  sign up for a free one</a>.
2. Clone the repo: `git clone https://github.com/auth0-blog/auth0-react-native-demo.git`
3. Follow the steps in the _Integrate Your App with Auth0_ section of the article:
	- [Android version](https://auth0.com/blog/get-started-auth0-authentication-react-native-android#integrate_your_app_with_auth0)
	- [iOS version](https://auth0.com/blog/get-started-auth0-authentication-react-native-ios#integrate_your_app_with_auth0)


## Additional Reading

* [**Auth0’s React Native Quickstart page:**](https://auth0.com/docs/quickstart/native/react-native/00-login) Provides you with a “starter” project with basic authentication built in.


## MIT License

Copyright 2022 Auth0.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

