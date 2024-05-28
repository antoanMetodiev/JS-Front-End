function editElement(h1Element, match, replacer) {
    h1Element.textContent = h1Element.textContent.replaceAll(match, replacer);
}
