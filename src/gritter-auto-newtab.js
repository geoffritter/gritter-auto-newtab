/**
 * A web component to extend HTMLAnchorElement to open a new tab if it's domain does not match the current domain.
 *
 * @example
 * <!-- Include the module any which way. Use is="gritter-auto-newtab" when inserting html. -->
 * <script type="module" src="gritter-auto-newtab.js" defer></script>
 * <a is="gritter-auto-newtab" href="http://example.com">http://example.com</a>
 *
 * @example
 * // Create the element through javascript
 * document.createElement('a', { is: 'gritter-auto-newtab' });
 */
export class GRitterAutoNewTabElement extends HTMLAnchorElement {
  constructor() {
    super();
    if (this.origin !== location.origin) {
      this.target = '_blank';
    }
  }
}

/**
 * For the extra lazy, this can replace the list of anchor elements with the gritter-auto-newtab type.
 * It will copy all the attributes of the original element before replacing it with a new one.
 * @param {NodeList} anchorElementNodeList A list of anchor elments to replace.
 */
export function GRitterAutoNewTabReplace(anchorElementNodeList) {
  console.log('inits');
  if (anchorElementNodeList instanceof NodeList) {
    anchorElementNodeList.forEach((a) => {
      if (a instanceof HTMLAnchorElement && !(a instanceof GRitterAutoNewTabElement) && a.origin !== location.origin) {
        let clone = document.createElement('a', { is: 'gritter-auto-newtab' });
        for (const attr of a.attributes) {
          clone.setAttribute(attr.name, attr.value);
        }
        clone.innerText = a.innerText;
        a.replaceWith(clone);
      }
    });
  }
}

export default { GRitterAutoNewTabElement, GRitterAutoNewTabReplace };
customElements.define('gritter-auto-newtab', GRitterAutoNewTabElement, { extends: 'a' });
