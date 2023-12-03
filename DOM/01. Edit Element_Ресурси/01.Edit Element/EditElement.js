function editElement(ref, match, replacer) {
    // Get the text content of the element referred to by 'ref'
    const content = ref.textContent;

    // Create a regular expression with the 'g' flag to match all occurrences of 'match'
    const matcher = new RegExp(match, 'g');

    // Use the regular expression to replace all occurrences of 'match' with 'replacer'
    const edited = content.replace(matcher, replacer);

    // Update the text content of the element with the edited content
    ref.textContent = edited;
}