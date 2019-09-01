### Data Compare Tool
This is a React JS app that allows users to compare data side-by-side using a pair of dropdown inputs. You can view a live example [here](https://data-compare.herokuapp.com).

This app was inspired heavily [by a tool](https://github.com/CarlaAstudillo/comparison_tool) created by Carla Astudillo.

This app is designed to be embedded as an iframe. It uses [pym.js](https://github.com/nprapps/pym.js/) to resize the iframe's height as needed. To embed this app and take advantage of pym, your embed code should look something like this:

```
<div id="container"></div>
<script type="text/javascript" src="https://pym.nprapps.org/pym.v1.min.js"></script>
<script>var pymParent = new pym.Parent('container', 
'https://data-compare.herokuapp.com/', {});</script>
```