export function strAttr(attr) {
    const newallattr = {};
    if (attr && attr.length) attr.split(' ').forEach(attr => {
      if (attr.length) {
        const [name, value] = attr.split('=');
        newallattr[name] = value.replace(/"/g, ''); // Remove quotes from attribute value
      }
    });
    return newallattr
}