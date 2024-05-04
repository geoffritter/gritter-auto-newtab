# gritter-auto-newtab
A web component to extend HTMLAnchorElement to open a new tab if it's domain does not match the current domain.
This is done by adding the target="_blank" to the element when this is detected. It does not have any lifecycle
handlers, callbacks, or special click handlers. Just _blank. You could have done this your self by modifying all of
the links in your website.

This is mostly a joke custom element used as test. If you needed some feature like this, you likely have some other
call to action code and would be including this functionality within that code. But if you really do want to use this
as a lazy catch all for links on your page, go ahead.

It's limitations are that you should probably pre-upgrade all anchors with:
find -type f -name \*.html -exec sed -i 's/<a /<a is="gritter-auto-newtab" /g' \{\} \+

If you try to use the GRitterAutoNewTabInit(nodeList), then it will loop through all the nodes, create a new anchor
element and add all the attributes of the original then replace the original. This will likely break something on your
page and could be slow.
