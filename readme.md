### Boilerplate Spotlight React App
This is a template for creating React JS apps for Spotlight.

This app incorporates Spotlight.org styles (using the Bulma CSS framework).

### Notes

#### Bulma
Dont forget 

#### Pym
This boilerplate is designed to be embedded as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height as needed.

 To embed this app and take advantage of pym, your embed code should look something like this:

```
<div id="app-container"></div>
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>var pymParent = new pym.Parent('app-container', 
'https://INSERT-APPNAME.herokuapp.com/', {});</script>
```

#### Pym troubleshooting

##### Height not updating
Sometimes your app's height may increase without pym updating the iframe accordingly. My experience is that it's best to place pym.sendHeight calls in components that may expand the overall height of the app. I recommend adding these calls to a component's componentDidUpdate or componentDidMount lifecycle methods.

In some cases you may also need to add a timeout.

To assist, I've created a helper function. Here's an example of it in use:

```
import React from 'react'
import { pymSendHeight } from '../utils/handlePym'

class Example extends React.Component {
  
  componentDidMount() {
    // Tell pym to increase height 500ms after component mounts
    pymSendHeight({timeout: 500})
  }

  render() {
    return (
      <div>
      <h2>Spotlight App</h2>
      </div>
    )
  }
}
```
##### App 'snaps' back in mobile

If you're viewing the app on a small a screen and the height decreases significantly you may encounter an unpleasant side effect: you're stuck on the same part of the page but the app has essentially 'snapped' out from under you.

I haven't figured out a good solution to this issue. I recommend trying to avoid situations where the app's height will decrease significantly.

