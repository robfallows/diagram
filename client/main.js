import { Template } from 'meteor/templating';

import './main.html';

Template.diag.onRendered(function() {
  const diagram = Diagram.parse('A->B: Message');
  diagram.drawSVG("diagram", {theme: 'hand'});
});
