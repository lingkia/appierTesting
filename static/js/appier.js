!function(q,g,r,a,p,h,js) {
    if(q.qg)return;
    js = q.qg = function() {
      js.callmethod ? js.callmethod.call(js, arguments) : js.queue.push(arguments);
    };
    js.queue = [];
    p=g.createElement(r);p.async=!0;p.src=a;h=g.getElementsByTagName(r)[0];
    h.parentNode.insertBefore(p,h);
  } (window,document,'script','https://cdn.qgr.ph/qgraph.413eed99b6b3fd67acd0.js');
